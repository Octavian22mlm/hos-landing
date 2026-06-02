
// ============================================
// HARVARD OF SALES — Backend Server
// ============================================
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ---- SUPABASE (service role = acces total, server-side only) ----
const db = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// ---- TIER CONFIG ----
const TIER_MODES = {
  unic:    { clean: true,  coach: false, both: false },
  recruit: { clean: true,  coach: false, both: false },
  builder: { clean: true,  coach: true,  both: false },
  leader:  { clean: true,  coach: true,  both: true  }
};

// ---- AUTH MIDDLEWARE ----
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Neautentificat' });
  const { data: { user }, error } = await db.auth.getUser(token);
  if (error || !user) return res.status(401).json({ error: 'Sesiune expirată. Loghează-te din nou.' });
  req.user = user;
  next();
};

// ---- ADMIN MIDDLEWARE ----
const admin = (req, res, next) => {
  if (req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Acces interzis' });
  }
  next();
};

// ============================================
// AUTH ROUTES
// ============================================

// Înregistrare
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email și parolă sunt obligatorii' });
  if (password.length < 6) return res.status(400).json({ error: 'Parola trebuie să aibă minim 6 caractere' });

  const { data, error } = await db.auth.signUp({ email, password });
  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: 'Cont creat cu succes. Verifică emailul pentru confirmare.' });
});

// Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email și parolă sunt obligatorii' });

  const { data, error } = await db.auth.signInWithPassword({ email, password });
  if (error) return res.status(400).json({ error: 'Email sau parolă incorecte' });

  res.json({ token: data.session.access_token, email: data.user.email });
});

// ============================================
// USER ROUTES
// ============================================

// Profil utilizator
app.get('/api/user', auth, async (req, res) => {
  const { data: profile, error } = await db
    .from('profiles')
    .select('*, tiers(*)')
    .eq('id', req.user.id)
    .single();

  if (error) return res.status(500).json({ error: 'Eroare la citirea profilului' });

  // Reset lunar automat
  if (profile.tier !== 'none' && profile.tiers) {
    const resetAt = new Date(profile.scripts_reset_at);
    const now = new Date();
    const newMonth = now.getMonth() !== resetAt.getMonth() || now.getFullYear() !== resetAt.getFullYear();

    if (newMonth) {
      const newRemaining = profile.tiers.scripts_per_month;
      await db.from('profiles').update({
        scripts_remaining: newRemaining,
        scripts_reset_at: now.toISOString()
      }).eq('id', req.user.id);
      profile.scripts_remaining = newRemaining;
    }
  }

  res.json(profile);
});

// Activare cod de acces
app.post('/api/redeem', auth, async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: 'Codul este obligatoriu' });

  const { data: accessCode, error } = await db
    .from('access_codes')
    .select('*')
    .eq('code', code.trim().toUpperCase())
    .eq('used', false)
    .single();

  if (error || !accessCode) return res.status(400).json({ error: 'Cod invalid sau deja folosit' });

  const { data: tier } = await db.from('tiers').select('*').eq('id', accessCode.tier).single();

  await db.from('profiles').update({
    tier: tier.id,
    scripts_remaining: tier.scripts_per_month,
    scripts_reset_at: new Date().toISOString()
  }).eq('id', req.user.id);

  await db.from('access_codes').update({
    used: true,
    user_id: req.user.id,
    used_at: new Date().toISOString()
  }).eq('id', accessCode.id);

  res.json({
    message: `Planul ${tier.name} a fost activat!`,
    tier: tier.id,
    scripts_remaining: tier.scripts_per_month
  });
});

// ============================================
// GENERARE SCRIPT
// ============================================
app.post('/api/generate', auth, async (req, res) => {
  // 1. Citim profilul cu detalii tier
  const { data: profile } = await db
    .from('profiles')
    .select('*, tiers(*)')
    .eq('id', req.user.id)
    .single();

  if (!profile || profile.tier === 'none') {
    return res.status(403).json({ error: 'Nu ai un plan activ. Activează un plan cu codul primit.' });
  }

  // 2. Reset lunar
  const resetAt = new Date(profile.scripts_reset_at);
  const now = new Date();
  if (now.getMonth() !== resetAt.getMonth() || now.getFullYear() !== resetAt.getFullYear()) {
    profile.scripts_remaining = profile.tiers.scripts_per_month;
    await db.from('profiles').update({
      scripts_remaining: profile.scripts_remaining,
      scripts_reset_at: now.toISOString()
    }).eq('id', req.user.id);
  }

  // 3. Verificam scripturi disponibile
  if (profile.scripts_remaining <= 0) {
    return res.status(403).json({
      error: 'Ai atins limita lunară de scripturi. Fă upgrade pentru mai multe.'
    });
  }

  // 4. Verificam modul permis pentru tier
  const { mode, variables } = req.body;
  const tierModes = TIER_MODES[profile.tier] || {};

  if (mode === 'coach' && !tierModes.coach) {
    return res.status(403).json({ error: 'Coach Mode este disponibil din planul Builder.' });
  }
  if (mode === 'both' && !tierModes.both) {
    return res.status(403).json({ error: 'Modul Ambele este disponibil din planul Leader.' });
  }

  // 5. Pregatim variabilele pentru MindStudio
  const modeLabel = {
    clean: 'Clean Mode pentru executie',
    coach: 'Coach Mode pentru invatare',
    both:  'Ambele variante una sub alta (Coach Mode pentru invatare + Clean Mode pentru executie)'
  };

  const allVariables = {
    ...variables,
    '13_mod_output': modeLabel[mode] || modeLabel.clean,
    '14_mod_debug':  'Nu'
  };

  // 6. Apelam MindStudio API
  try {
    const msResponse = await fetch(
      'https://api.mindstudio.ai/developer/v2/apps/run',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.MINDSTUDIO_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          appId: process.env.MINDSTUDIO_AGENT_ID,
          variables: allVariables
        })
      }
    );

    if (!msResponse.ok) {
      const errText = await msResponse.text();
      console.error('MindStudio error:', errText);
      return res.status(500).json({ error: 'Eroare la generarea scriptului. Încearcă din nou.' });
    }

    const msData = await msResponse.json();

    // 7. Decrementam contorul
    const newRemaining = profile.scripts_remaining - 1;
    await db.from('profiles').update({ scripts_remaining: newRemaining }).eq('id', req.user.id);

    // 8. Logam generarea
    await db.from('script_generations').insert({ user_id: req.user.id, mode });

    // 9. Returnam scriptul — extragem din obiectul result
    const result = msData.result;
    let scriptText = '';
    if (typeof result === 'string') {
      scriptText = result;
    } else if (typeof result === 'object' && result !== null) {
      scriptText = result.output || result.result || result.text ||
                   result.script || Object.values(result)[0] || JSON.stringify(result);
    } else {
      scriptText = msData.output || msData.text || JSON.stringify(msData);
    }
    res.json({ script: scriptText, scripts_remaining: newRemaining });

  } catch (err) {
    console.error('Generate error:', err);
    res.status(500).json({ error: 'Eroare de conexiune. Încearcă din nou.' });
  }
});

// ============================================
// STATS (public - fara autentificare)
// ============================================
app.get('/api/stats', async (req, res) => {
  const { count, error } = await db
    .from('profiles')
    .select('*', { count: 'exact', head: true });

  const base = parseInt(process.env.STATS_BASE_COUNT || '0');
  const total = base + (count || 0);
  res.json({ agents: total });
});

// ============================================
// ADMIN ROUTES (protejate cu ADMIN_SECRET)
// ============================================

// Creare cod de acces
app.post('/api/admin/create-code', admin, async (req, res) => {
  const { tier, count = 1 } = req.body;
  const validTiers = ['unic', 'recruit', 'builder', 'leader'];
  if (!validTiers.includes(tier)) return res.status(400).json({ error: 'Tier invalid' });

  const codes = [];
  for (let i = 0; i < Math.min(count, 50); i++) {
    const code = generateCode();
    await db.from('access_codes').insert({ code, tier });
    codes.push(code);
  }

  res.json({ codes, tier });
});

// Asignare tier manual (pentru clientii platiti manual)
app.post('/api/admin/set-tier', admin, async (req, res) => {
  const { email, tier } = req.body;
  const { data: tierData } = await db.from('tiers').select('*').eq('id', tier).single();
  if (!tierData) return res.status(400).json({ error: 'Tier invalid' });

  const { data: { users } } = await db.auth.admin.listUsers();
  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ error: `Userul ${email} nu a fost găsit` });

  await db.from('profiles').update({
    tier,
    scripts_remaining: tierData.scripts_per_month,
    scripts_reset_at: new Date().toISOString()
  }).eq('id', user.id);

  res.json({ message: `Planul ${tierData.name} asignat lui ${email}` });
});

// ============================================
// FRONTEND — serveste index.html
// ============================================
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ============================================
function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 12; i++) {
    if (i === 4 || i === 8) code += '-';
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Harvard of Sales server pornit pe portul ${PORT}`);
});
