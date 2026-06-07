// ============================================
// HARVARD OF SALES — Backend Server
// ============================================
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');
const crypto = require('crypto');

const app = express();
// express.json() parsează tot, DAR webhook-ul Stripe are nevoie de body RAW pentru semnătură:
app.use((req, res, next) => {
  if (req.originalUrl === '/api/webhook') return next();
  express.json({ limit: '2mb' })(req, res, next);
});
app.use(express.static(path.join(__dirname)));

// ---- SUPABASE (service role = acces total, server-side only) ----
const db = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// ---- STRIPE (cheia secretă vine din variabila Railway STRIPE_SECRET_KEY) ----
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// maparea planurilor -> Price ID + tip facturare + tier
// ACUM PE LIVE. Cheia STRIPE_SECRET_KEY (sk_live) + STRIPE_WEBHOOK_SECRET sunt pe Railway,
// cheia publishable (pk_live) e în preturi.html.
// Price-urile de TEST (pentru rollback dacă e nevoie):
//   unic=price_1TebID2K2gEr8ziYQ4s9UhRp  recruit=price_1TeblV2K2gEr8ziYbTsthOp2
//   builder=price_1Teblh2K2gEr8ziY4JzrVBzj  leader=price_1Teblu2K2gEr8ziYVpsv2Blz
const STRIPE_PLANS = {
  unic:    { priceId: 'price_1Tfftr2K2gEr8ziYaiIjIq02', mode: 'payment',      tier: 'unic'    },
  recruit: { priceId: 'price_1Teb0g2K2gEr8ziYzAWAiU3G', mode: 'subscription', tier: 'recruit' },
  builder: { priceId: 'price_1Teb182K2gEr8ziYLioqV1kN', mode: 'subscription', tier: 'builder' },
  leader:  { priceId: 'price_1Teb1l2K2gEr8ziYfofZ640S', mode: 'subscription', tier: 'leader'  },
};

// bonus de antrenament (o singură dată, la prima plată a abonamentului)
const TRAINING_BONUS = { recruit: 1, builder: 3, leader: 5 };

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

  // Reset lunar automat (Script Unic = o singură dată, nu se resetează)
  if (profile.tier !== 'none' && profile.tier !== 'unic' && profile.tiers) {
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
// GENERARE SCRIPT — ASINCRON (anti-timeout)
// Flux: /api/generate (porneste jobul, raspunde instant cu jobId)
//   -> MindStudio ruleaza in fundal si trimite rezultatul la /api/ms-callback/:jobId
//   -> front-end-ul intreaba /api/generate-status/:jobId pana e gata.
// ============================================

// Extrage textul scriptului din raspunsul/callback-ul MindStudio (robust la format)
function extractScript(body) {
  if (!body) return '';
  const result = body.result;
  if (typeof result === 'string') return result;
  if (result && typeof result === 'object') {
    return result.output || result.result || result.text || result.script ||
           Object.values(result)[0] || JSON.stringify(result);
  }
  return body.output || body.text || (body.thread && body.thread.result) || '';
}

app.post('/api/generate', auth, async (req, res) => {
  // 1. Citim profilul cu detalii tier
  const { data: profile } = await db
    .from('profiles')
    .select('*, tiers(*)')
    .eq('id', req.user.id)
    .single();

  if (!profile || profile.tier === 'none') {
    return res.status(403).json({ error: 'Nu ai un plan activ.' });
  }

  // 2. Reset lunar (Script Unic exclus — e o singură dată)
  const resetAt = new Date(profile.scripts_reset_at);
  const now = new Date();
  if (profile.tier !== 'unic' &&
      (now.getMonth() !== resetAt.getMonth() || now.getFullYear() !== resetAt.getFullYear())) {
    profile.scripts_remaining = profile.tiers.scripts_per_month;
    await db.from('profiles').update({
      scripts_remaining: profile.scripts_remaining,
      scripts_reset_at: now.toISOString()
    }).eq('id', req.user.id);
  }

  // 3. Verificam scripturi disponibile (sau bonus de antrenament)
  const trainingLeft = profile.training_left || 0;
  if (profile.scripts_remaining <= 0 && trainingLeft <= 0) {
    return res.status(403).json({
      error: 'Ai atins limita lunară de scripturi. Fă upgrade pentru mai multe.'
    });
  }

  // 4. Verificam modul permis pentru tier
  const { mode, variables, isObjection, objNum } = req.body;
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
    '14_obiectie_1':               variables['14_obiectie_1'] || '',
    '15_doreste_a_doua_obiectie':  variables['15_doreste_a_doua_obiectie'] || 'Nu',
    '16_obiectie_2':               variables['16_obiectie_2'] || ''
  };

  // 6. Cream jobul in DB (status pending)
  const jobId = crypto.randomUUID();
  const { error: jobErr } = await db.from('generation_jobs').insert({
    id: jobId,
    user_id: req.user.id,
    mode: mode || 'clean',
    is_objection: !!isObjection,
    status: 'pending'
  });
  if (jobErr) {
    console.error('Job insert error:', jobErr);
    return res.status(500).json({ error: 'Nu am putut porni generarea. Încearcă din nou.' });
  }

  // 7. Pornim MindStudio ASINCRON cu callbackUrl unic per job
  const base = `https://${req.get('host')}`;
  const secret = process.env.MS_CALLBACK_SECRET || '';
  const callbackUrl = `${base}/api/ms-callback/${jobId}` + (secret ? `?s=${encodeURIComponent(secret)}` : '');

  const msBody = {
    appId: process.env.MINDSTUDIO_AGENT_ID,
    variables: allVariables,
    callbackUrl
  };
  if (isObjection) {
    msBody.workflow = objNum === 2 ? 'Obiectie 2' : 'Obiectie 1';
  }

  try {
    const msResponse = await fetch(
      'https://api.mindstudio.ai/developer/v2/apps/run',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.MINDSTUDIO_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(msBody)
      }
    );

    if (!msResponse.ok) {
      const errText = await msResponse.text();
      console.error('MindStudio start error:', errText);
      await db.from('generation_jobs').update({ status: 'error', error: 'start_failed' }).eq('id', jobId);
      return res.status(500).json({ error: 'Eroare la pornirea generării. Încearcă din nou.' });
    }

    // Raspuns instant — front-end-ul va face polling pe jobId
    return res.json({ jobId });

  } catch (err) {
    console.error('Generate start error:', err);
    await db.from('generation_jobs').update({ status: 'error', error: 'connection' }).eq('id', jobId);
    return res.status(500).json({ error: 'Eroare de conexiune. Încearcă din nou.' });
  }
});

// CALLBACK de la MindStudio — primeste rezultatul cand jobul e gata (public)
app.post('/api/ms-callback/:jobId', async (req, res) => {
  // verificare secret (optional, daca e setat MS_CALLBACK_SECRET)
  const secret = process.env.MS_CALLBACK_SECRET || '';
  if (secret && req.query.s !== secret) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const { jobId } = req.params;
  try {
    const { data: job } = await db.from('generation_jobs').select('*').eq('id', jobId).single();
    if (!job) return res.json({ received: true }); // job inexistent — ignoram politicos
    if (job.status !== 'pending') return res.json({ received: true }); // deja procesat

    // Detectam eroare in raspunsul MindStudio
    const body = req.body || {};
    const msError = body.success === false || (body.thread && body.thread.error);
    const scriptText = extractScript(body);

    if (msError || !scriptText) {
      console.error('MS callback fara rezultat:', JSON.stringify(body).slice(0, 600));
      await db.from('generation_jobs').update({ status: 'error', error: 'no_result' }).eq('id', jobId);
      return res.json({ received: true });
    }

    // Decrementam scripturi DOAR la succes si DOAR pentru scripturi principale (nu obiectii)
    let newRemaining = null, newTraining = null;
    if (!job.is_objection) {
      const { data: profile } = await db.from('profiles').select('*').eq('id', job.user_id).single();
      if (profile) {
        newRemaining = profile.scripts_remaining;
        newTraining  = profile.training_left || 0;
        if (newTraining > 0) {
          newTraining = newTraining - 1;
          await db.from('profiles').update({ training_left: newTraining }).eq('id', job.user_id);
        } else {
          newRemaining = profile.scripts_remaining - 1;
          await db.from('profiles').update({ scripts_remaining: newRemaining }).eq('id', job.user_id);
        }
        await db.from('script_generations').insert({ user_id: job.user_id, mode: job.mode });
      }
    }

    await db.from('generation_jobs').update({
      status: 'done',
      result: scriptText,
      scripts_remaining: newRemaining,
      training_left: newTraining
    }).eq('id', jobId);

    return res.json({ received: true });
  } catch (err) {
    console.error('MS callback handler error:', err);
    await db.from('generation_jobs').update({ status: 'error', error: 'callback_exception' }).eq('id', jobId).then(()=>{}, ()=>{});
    return res.json({ received: true });
  }
});

// STATUS — front-end-ul face polling pana jobul e gata
app.get('/api/generate-status/:jobId', auth, async (req, res) => {
  const { jobId } = req.params;
  const { data: job, error } = await db.from('generation_jobs').select('*').eq('id', jobId).single();
  if (error || !job) return res.status(404).json({ error: 'Job inexistent' });
  if (job.user_id !== req.user.id) return res.status(403).json({ error: 'Acces interzis' });

  if (job.status === 'done') {
    return res.json({
      status: 'done',
      script: job.result,
      scripts_remaining: job.scripts_remaining,
      training_left: job.training_left
    });
  }
  if (job.status === 'error') {
    return res.json({ status: 'error', error: 'Generarea a eșuat. Încearcă din nou.' });
  }
  return res.json({ status: 'pending' });
});

// ============================================
// STATS (public - fara autentificare)
// ============================================
app.get('/api/stats', async (req, res) => {
  // Env Railway: STATS_BASE_COUNT=112 (agenti MLM) · STATS_BASE_SCRIPTS=1122 (scripturi)
  const baseD = parseInt(process.env.STATS_BASE_COUNT || '112');
  const baseS = parseInt(process.env.STATS_BASE_SCRIPTS || '1122');
  // Numaram DOAR ce e creat de la lansare incoace. Conturile/generarile de test
  // existente inainte de aceasta data sunt ignorate definitiv.
  const LAUNCH = process.env.STATS_LAUNCH_DATE || '2026-06-07T00:00:00Z';

  let newProfiles = 0, newScripts = 0;

  try {
    const r = await db.from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', LAUNCH);
    if (!r.error && typeof r.count === 'number') newProfiles = r.count;
  } catch (e) {}

  try {
    const r = await db.from('script_generations')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', LAUNCH);
    if (!r.error && typeof r.count === 'number') newScripts = r.count;
  } catch (e) {}

  const distribuitori = baseD + newProfiles;
  const scripturi     = baseS + newScripts;

  // 'agents' pastrat ca alias pentru compatibilitate
  res.json({ distribuitori, scripturi, agents: distribuitori });
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
// STRIPE — pornește Embedded Checkout (plata pe site)
// Protejat cu auth: userId vine din token, nu din body (nu poți plăti în numele altcuiva)
// ============================================
app.post('/api/create-checkout-session', auth, async (req, res) => {
  const { plan } = req.body;
  const p = STRIPE_PLANS[plan];
  if (!p) return res.status(400).json({ error: 'Plan invalid' });

  try {
    const base = `https://${req.get('host')}`;
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      mode: p.mode,
      line_items: [{ price: p.priceId, quantity: 1 }],
      customer_email: req.user.email,
      client_reference_id: req.user.id,
      metadata: { user_id: req.user.id, tier: p.tier },
      subscription_data: p.mode === 'subscription'
        ? { metadata: { user_id: req.user.id, tier: p.tier } } : undefined,
      invoice_creation: p.mode === 'payment' ? { enabled: true } : undefined,
      return_url: `${base}/?paid=1&session_id={CHECKOUT_SESSION_ID}`,
    });
    res.json({ clientSecret: session.client_secret });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    res.status(500).json({ error: 'Nu am putut porni plata. Încearcă din nou.' });
  }
});

// ============================================
// STRIPE WEBHOOK — activează planul automat după plată
// (folosește body RAW — vezi skip-ul express.json de la început)
// ============================================
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    // 1) ACTIVARE INIȚIALĂ — plată unică SAU prima plată a abonamentului
    if (event.type === 'checkout.session.completed') {
      const s = event.data.object;
      const userId = s.metadata && s.metadata.user_id;
      const tier   = s.metadata && s.metadata.tier;
      if (userId && tier) {
        const { data: t } = await db.from('tiers').select('scripts_per_month').eq('id', tier).single();
        const monthly = t ? t.scripts_per_month : 0;
        await db.from('profiles').update({
          tier,
          scripts_remaining: monthly,
          training_left: s.mode === 'subscription' ? (TRAINING_BONUS[tier] || 0) : 0,
          scripts_reset_at: new Date().toISOString()
        }).eq('id', userId);
        console.log(`[webhook] activat ${tier} pentru ${userId} (${s.mode})`);
      }
    }

    // 2) REÎNNOIRE LUNARĂ abonament (nu prima plată) — resetează scripturile, bonus 0
    if (event.type === 'invoice.paid') {
      const inv = event.data.object;
      if (inv.billing_reason === 'subscription_cycle') {
        const subId = inv.subscription || (inv.parent && inv.parent.subscription_details && inv.parent.subscription_details.subscription);
        if (subId) {
          const sub = await stripe.subscriptions.retrieve(subId);
          const userId = sub.metadata && sub.metadata.user_id;
          const tier   = sub.metadata && sub.metadata.tier;
          if (userId && tier) {
            const { data: t } = await db.from('tiers').select('scripts_per_month').eq('id', tier).single();
            await db.from('profiles').update({
              scripts_remaining: t ? t.scripts_per_month : 0,
              training_left: 0,
              scripts_reset_at: new Date().toISOString()
            }).eq('id', userId);
            console.log(`[webhook] reînnoit ${tier} pentru ${userId}`);
          }
        }
      }
    }

    // 3) ANULARE / EXPIRARE abonament — revine la 'none'
    if (event.type === 'customer.subscription.deleted') {
      const sub = event.data.object;
      const userId = sub.metadata && sub.metadata.user_id;
      if (userId) {
        await db.from('profiles').update({
          tier: 'none', scripts_remaining: 0, training_left: 0
        }).eq('id', userId);
        console.log(`[webhook] anulat pentru ${userId}`);
      }
    }
  } catch (err) {
    console.error('Webhook handler error:', err);
    // răspundem 200 ca Stripe să nu reîncerce la infinit pe o eroare de date
  }

  res.json({ received: true });
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
