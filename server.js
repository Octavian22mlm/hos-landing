// ============================================
// HARVARD OF SALES — Backend Server
// ============================================
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');
const crypto = require('crypto');
// Conținut premium (Conectare + Invitația-fulger) — servit doar prin /api/module/:name
const PREMIUM = require('./private/modules');

const app = express();

// ============================================
// SECURITY HEADERS (fara dependinte externe — nu necesita npm install)
// CSP permite sursele reale: Stripe, jsDelivr (supabase-js), Google Fonts, API-ul Supabase.
// 'unsafe-inline' e necesar pentru handler-ele inline existente; se poate strange ulterior cu nonce.
// ============================================
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  res.setHeader('Content-Security-Policy', [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "script-src 'self' 'unsafe-inline' https://js.stripe.com https://cdn.jsdelivr.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' data: https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://*.stripe.com",
    "frame-src https://*.stripe.com"
  ].join('; '));
  next();
});

// express.json() parsează tot, DAR webhook-ul Stripe are nevoie de body RAW pentru semnătură:
app.use((req, res, next) => {
  if (req.originalUrl === '/api/webhook') return next();
  express.json({ limit: '2mb' })(req, res, next);
});
// index:false => "/" nu mai serveste automat index.html; il dam noi explicit mai jos
// BLOCARE HTTP: continutul premium din /private NU se serveste static (doar prin /api/module/:name, cu verificare de plan)
app.use('/private', (req, res) => res.status(404).end());
app.use(express.static(path.join(__dirname), { index: false }));

// "/" = pagina de vanzare (preturi.html) · aplicatia traieste la "/app"
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'preturi.html')));
app.get('/app', (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow'); // zona logata nu se indexeaza in Google
  res.sendFile(path.join(__dirname, 'index.html'));
});
// pagina de vanzare in italiana (IT)
app.get('/it', (req, res) => res.sendFile(path.join(__dirname, 'preturi-it.html')));
// aplicatia in italiana (IT)
app.get('/app-it', (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.sendFile(path.join(__dirname, 'index-it.html'));
});
// pagina de vanzare in engleza (EN)
app.get('/en', (req, res) => res.sendFile(path.join(__dirname, 'preturi-en.html')));
// aplicatia in engleza (EN)
app.get('/app-en', (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.sendFile(path.join(__dirname, 'index-en.html'));
});
// pagina de vanzare in spaniola (ES)
app.get('/es', (req, res) => res.sendFile(path.join(__dirname, 'preturi-es.html')));
// aplicatia in spaniola (ES)
app.get('/app-es', (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.sendFile(path.join(__dirname, 'index-es.html'));
});
// pagina de vanzare in franceza (FR)
app.get('/fr', (req, res) => res.sendFile(path.join(__dirname, 'preturi-fr.html')));
// aplicatia in franceza (FR)
app.get('/app-fr', (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.sendFile(path.join(__dirname, 'index-fr.html'));
});
// pagina de vanzare in germana (DE)
app.get('/de', (req, res) => res.sendFile(path.join(__dirname, 'preturi-de.html')));
// aplicatia in germana (DE)
app.get('/app-de', (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.sendFile(path.join(__dirname, 'index-de.html'));
});

// ---- SEO: robots.txt real (fisier text valid, nu pagina HTML) ----
app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(
    'User-agent: *\n' +
    'Allow: /\n' +
    'Disallow: /app\n' +
    'Disallow: /api/\n' +
    'Sitemap: https://www.mlmpsychology.com/sitemap.xml\n'
  );
});

// ---- SEO: sitemap.xml valid ----
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml').send(
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    '  <url><loc>https://www.mlmpsychology.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n' +
    '  <url><loc>https://www.mlmpsychology.com/termeni.html</loc><priority>0.3</priority></url>\n' +
    '  <url><loc>https://www.mlmpsychology.com/confidentialitate.html</loc><priority>0.3</priority></url>\n' +
    '  <url><loc>https://www.mlmpsychology.com/cookies.html</loc><priority>0.3</priority></url>\n' +
    '</urlset>\n'
  );
});

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
  // Consultanta 1-la-1 (2.000 EUR plata unica) — NU acorda tier, e serviciu separat
  consult: { priceId: 'price_1Tw0Lj2K2gEr8ziYINpEVU6K', mode: 'payment', tier: null },
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
// PROGRAM DE RECOMANDĂRI (referral)
// Gratis cât timp ai >= 4 abonați activi cu planul TĂU sau mai mare.
// ============================================
const REFERRAL_THRESHOLD = 4;
// TIER_RANK { recruit:1, builder:2, leader:3 } e declarat mai jos (secțiunea de schimbare plan) și refolosit aici.

function genRefCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // fără 0/O/1/I ambigue
  let c = '';
  for (let i = 0; i < 8; i++) c += chars[Math.floor(Math.random() * chars.length)];
  return c;
}

// Generează + salvează un ref_code unic pentru user (retry pe coliziune). Idempotent.
async function ensureRefCode(userId) {
  const { data: prof } = await db.from('profiles').select('ref_code').eq('id', userId).single();
  if (prof && prof.ref_code) return prof.ref_code;
  for (let attempt = 0; attempt < 6; attempt++) {
    const code = genRefCode();
    const { error } = await db.from('profiles').update({ ref_code: code }).eq('id', userId);
    if (!error) {
      // verificăm că a rămas al nostru (unicitatea e garantată de indexul unic)
      const { data: check } = await db.from('profiles').select('ref_code').eq('id', userId).single();
      if (check && check.ref_code) return check.ref_code;
    }
    // coliziune improbabilă -> reîncercăm cu alt cod
  }
  return null;
}

// Numără recomandații ACTIVI cu planul >= planul recomandatorului.
async function countQualifyingReferrals(referrerId, referrerTier) {
  const minRank = TIER_RANK[referrerTier];
  if (!minRank) return 0; // recomandatorul nu e pe plan recurent -> nu se aplică
  const { data: me } = await db.from('profiles').select('ref_code').eq('id', referrerId).single();
  if (!me || !me.ref_code) return 0;
  const eligible = Object.keys(TIER_RANK).filter(t => TIER_RANK[t] >= minRank);
  const { count } = await db
    .from('profiles')
    .select('id', { count: 'exact', head: true })
    .eq('referred_by', me.ref_code)
    .in('tier', eligible);
  return count || 0;
}

// Rezolvă un cod de recomandare la user-ul care îl deține (sau null). Blochează auto-recomandarea.
async function resolveReferrer(rawCode, selfId) {
  if (!rawCode) return null;
  const code = String(rawCode).trim().toUpperCase().slice(0, 16);
  if (!code) return null;
  const { data: ref } = await db.from('profiles').select('id, ref_code').eq('ref_code', code).single();
  if (!ref || ref.id === selfId) return null;
  return ref.ref_code;
}

// Email de bun venit + link personal, prin Resend (best-effort, multilingv).
async function sendReferralWelcomeEmail(email, code, lang) {
  if (!process.env.RESEND_API_KEY || !email || !code) return;
  const host = process.env.PUBLIC_HOST || 'mlmpsychology.com';
  const link = `https://${host}/?ref=${code}`;
  const T = {
    ro: {
      subject: 'Ești înăuntru — Abonamentul tău poate fi gratuit!',
      greeting: 'Salut și bine ai venit 🤝',
      p1: `Ne bucurăm că ești aici. Înainte să te apuci de scripturi, vrem să știi un lucru care poate schimba complet cât te costă tot ce urmează:`,
      p2: `<b>Abonamentul tău poate fi gratis. Complet. Și nu pentru o lună.</b>`,
      p3: `Uite regula, om la om: recomanzi MlmPsychology cu linkul tău. Când <b>4 oameni</b> se abonează la planul tău sau mai mare și rămân activi, tu nu mai plătești nimic — luna aceea și fiecare lună cât ei rămân alături.`,
      p4: `Nu e un concurs, nu e o reducere de o săptămână. E <b>permanent</b>.`,
      hl: `4 activi = abonamentul tău e 0€`,
      p5: `În funcție de planul tău, sunt între <b>108€ și 348€ pe an</b> pe care nu-i mai scoți din buzunar — pentru 4 oameni pe care oricum i-ai fi ajutat.`,
      p6a: `Și aici e partea pe care mulți o ratează: nu recomanzi ca să-ți faci ție abonamentul gratis.`,
      p6b: `Recomanzi pentru că îți poți ajuta fiecare om din echipa ta să <b>invite, să prezinte și să închidă mai bine</b>. Dacă îi ajuți pe ei să facă bani, toți veți face bani.`,
      hl2: `MLM înseamnă împreună. O echipă care vinde împreună câștigă împreună: recunoaștere internațională și venituri pentru fiecare.`,
      linkintro: 'Linkul tău personal:',
      pthink: `Nu-ți lăsa echipa în urmă. Invită-i la masa câștigurilor.`,
      signoff: `Om bun, să-ți meargă bine,`,
      team: 'Echipa MlmPsychology',
      waMsg: `Salut! 👋 Știu cât e de enervant să pierzi oameni fix la telefon — să nu știi cum să deschizi sau ce să răspunzi la „e MLM?”. Am dat de ceva care mi-a schimbat complet abordarea: îți scrie dialogul cuvânt cu cuvânt, personalizat pe produsul tău — invitație, prezentare și închidere. Aruncă un ochi, poate te ajută și pe tine:`,
      waLabel: `Trimite linkul tău prin WhatsApp`
    },
    en: {
      subject: 'You’re in — Your membership can be free!',
      greeting: 'Hi, and welcome 🤝',
      p1: `We’re glad you’re here. Before you dive into the scripts, there’s one thing worth knowing — it can completely change what all of this costs you:`,
      p2: `<b>Your membership can be free. Fully. And not just for one month.</b>`,
      p3: `Here’s the rule, person to person: you recommend MlmPsychology with your link. When <b>4 people</b> subscribe to your plan or higher and stay active, you pay nothing — that month, and every month they stick around.`,
      p4: `It’s not a contest, not a one-week discount. It’s <b>permanent</b>.`,
      hl: `4 active = your membership costs €0`,
      p5: `Depending on your plan, that’s between <b>€108 and €348 a year</b> you keep in your pocket — for 4 people you’d have helped anyway.`,
      p6a: `And here’s the part most people miss: you don’t refer to get your own membership for free.`,
      p6b: `You refer because you can help every person on your team <b>invite, present and close better</b>. Help them make money, and you all make money.`,
      hl2: `MLM means together. A team that sells together wins together: international recognition and income for everyone.`,
      linkintro: 'Your personal link:',
      pthink: `Don’t leave your team behind. Bring them to the winners’ table.`,
      signoff: `Go get 'em — we're rooting for you,`,
      team: 'The MlmPsychology Team',
      waMsg: `Hey! 👋 You know how frustrating it is to lose people right on the phone — not knowing how to open or what to say to “is this MLM?”. I found something that completely changed my approach: it writes your dialogue word for word, tailored to your product — invitation, presentation and closing. Take a look, it might help you too:`,
      waLabel: `Send your link on WhatsApp`
    },
    it: {
      subject: 'Sei dentro — Il tuo abbonamento può essere gratis!',
      greeting: 'Ciao e benvenuto 🤝',
      p1: `Siamo felici che tu sia qui. Prima di iniziare con gli script, c’è una cosa che vale la pena sapere — può cambiare completamente quanto ti costa tutto questo:`,
      p2: `<b>Il tuo abbonamento può essere gratis. Del tutto. E non per un solo mese.</b>`,
      p3: `Ecco la regola, da persona a persona: consigli MlmPsychology con il tuo link. Quando <b>4 persone</b> si abbonano al tuo piano o superiore e restano attive, tu non paghi nulla — quel mese e ogni mese in cui restano.`,
      p4: `Non è un concorso, non è uno sconto di una settimana. È <b>permanente</b>.`,
      hl: `4 attivi = il tuo abbonamento è 0€`,
      p5: `A seconda del tuo piano, sono tra <b>108€ e 348€ all’anno</b> che ti restano in tasca — per 4 persone che avresti aiutato comunque.`,
      p6a: `E qui c’è la parte che molti si perdono: non consigli per avere il tuo abbonamento gratis.`,
      p6b: `Consigli perché puoi aiutare ogni persona della tua squadra a <b>invitare, presentare e chiudere meglio</b>. Aiuta loro a fare soldi, e farete tutti soldi.`,
      hl2: `MLM significa insieme. Una squadra che vende insieme vince insieme: riconoscimento internazionale e guadagni per tutti.`,
      linkintro: 'Il tuo link personale:',
      pthink: `Non lasciare indietro la tua squadra. Portala al tavolo dei vincitori.`,
      signoff: `In gamba, e in bocca al lupo,`,
      team: 'Il team MlmPsychology',
      waMsg: `Ciao! 👋 Sai quant’è frustrante perdere le persone proprio al telefono — non sapere come aprire o cosa rispondere a “è MLM?”. Ho trovato una cosa che ha cambiato completamente il mio approccio: ti scrive il dialogo parola per parola, su misura per il tuo prodotto — invito, presentazione e chiusura. Dai un’occhiata, potrebbe aiutare anche te:`,
      waLabel: `Invia il tuo link su WhatsApp`
    },
    es: {
      subject: 'Estás dentro — ¡Tu membresía puede ser gratis!',
      greeting: 'Hola y bienvenido 🤝',
      p1: `Nos alegra que estés aquí. Antes de meterte con los guiones, hay algo que conviene saber — puede cambiar por completo lo que todo esto te cuesta:`,
      p2: `<b>Tu membresía puede ser gratis. Del todo. Y no solo por un mes.</b>`,
      p3: `Esta es la regla, de persona a persona: recomiendas MlmPsychology con tu enlace. Cuando <b>4 personas</b> se suscriben a tu plan o superior y siguen activas, tú no pagas nada — ese mes y cada mes que sigan contigo.`,
      p4: `No es un concurso ni un descuento de una semana. Es <b>permanente</b>.`,
      hl: `4 activos = tu membresía cuesta 0€`,
      p5: `Según tu plan, son entre <b>108€ y 348€ al año</b> que te quedas en el bolsillo — por 4 personas a las que ibas a ayudar de todas formas.`,
      p6a: `Y aquí está la parte que muchos se pierden: no recomiendas para tener tu membresía gratis.`,
      p6b: `Recomiendas porque puedes ayudar a cada persona de tu equipo a <b>invitar, presentar y cerrar mejor</b>. Ayúdalos a ganar dinero, y el dinero llega para todos.`,
      hl2: `MLM significa juntos. Un equipo que vende junto gana junto: reconocimiento internacional e ingresos para todos.`,
      linkintro: 'Tu enlace personal:',
      pthink: `No dejes atrás a tu equipo. Llévalos a la mesa de los ganadores.`,
      signoff: `Un abrazo, y a por todas,`,
      team: 'El equipo de MlmPsychology',
      waMsg: `¡Hola! 👋 Sabes lo frustrante que es perder gente justo en el teléfono — no saber cómo abrir o qué responder a “¿esto es MLM?”. Encontré algo que cambió por completo mi forma de hacerlo: te escribe el diálogo palabra por palabra, adaptado a tu producto — invitación, presentación y cierre. Échale un vistazo, quizá te ayude a ti también:`,
      waLabel: `Envía tu enlace por WhatsApp`
    },
    fr: {
      subject: 'Tu es dans la place — Ton abonnement peut être gratuit !',
      greeting: 'Salut et bienvenue 🤝',
      p1: `On est contents que tu sois là. Avant de te lancer dans les scripts, il y a une chose à savoir — elle peut complètement changer ce que tout ça te coûte :`,
      p2: `<b>Ton abonnement peut être gratuit. Entièrement. Et pas juste pour un mois.</b>`,
      p3: `Voici la règle, d’humain à humain : tu recommandes MlmPsychology avec ton lien. Quand <b>4 personnes</b> s’abonnent à ton plan ou supérieur et restent actives, tu ne paies plus rien — ce mois-là et chaque mois où elles restent.`,
      p4: `Ce n’est pas un concours, ni une promo d’une semaine. C’est <b>permanent</b>.`,
      hl: `4 actifs = ton abonnement à 0€`,
      p5: `Selon ton plan, ça fait entre <b>108€ et 348€ par an</b> que tu gardes dans ta poche — pour 4 personnes que tu aurais aidées de toute façon.`,
      p6a: `Et voici ce que beaucoup ratent : tu ne recommandes pas pour avoir ton abonnement gratuit.`,
      p6b: `Tu recommandes parce que tu peux aider chaque personne de ton équipe à <b>mieux inviter, présenter et conclure</b>. Aide-les à gagner de l’argent, et vous y gagnez tous.`,
      hl2: `Le MLM, c’est ensemble. Une équipe qui vend ensemble gagne ensemble : reconnaissance internationale et revenus pour chacun.`,
      linkintro: 'Ton lien personnel :',
      pthink: `Ne laisse pas ton équipe derrière. Amène-les à la table des gagnants.`,
      signoff: `Fonce — on est avec toi,`,
      team: 'L’équipe MlmPsychology',
      waMsg: `Salut ! 👋 Tu sais à quel point c’est frustrant de perdre des gens au téléphone — ne pas savoir comment ouvrir ou quoi répondre à « c’est du MLM ? ». J’ai trouvé un truc qui a complètement changé mon approche : il t’écrit le dialogue mot pour mot, adapté à ton produit — invitation, présentation et conclusion. Jette un œil, ça pourrait t’aider aussi :`,
      waLabel: `Envoie ton lien sur WhatsApp`
    },
    de: {
      subject: 'Du bist dabei — Deine Mitgliedschaft kann gratis sein!',
      greeting: 'Hallo und willkommen 🤝',
      p1: `Schön, dass du hier bist. Bevor du mit den Skripten loslegst, gibt es eine Sache, die du wissen solltest — sie kann komplett verändern, was dich das alles kostet:`,
      p2: `<b>Deine Mitgliedschaft kann kostenlos sein. Komplett. Und nicht nur für einen Monat.</b>`,
      p3: `Hier die Regel, von Mensch zu Mensch: Du empfiehlst MlmPsychology mit deinem Link. Wenn <b>4 Personen</b> deinen Plan oder höher abonnieren und aktiv bleiben, zahlst du nichts mehr — in diesem Monat und in jedem Monat, in dem sie dabei bleiben.`,
      p4: `Kein Gewinnspiel, kein Rabatt für eine Woche. Es ist <b>dauerhaft</b>.`,
      hl: `4 Aktive = deine Mitgliedschaft kostet 0€`,
      p5: `Je nach Plan sind das zwischen <b>108€ und 348€ pro Jahr</b>, die in deiner Tasche bleiben — für 4 Menschen, denen du sowieso geholfen hättest.`,
      p6a: `Und hier ist der Teil, den die meisten übersehen: Du empfiehlst nicht, um deine eigene Mitgliedschaft gratis zu bekommen.`,
      p6b: `Du empfiehlst, weil du jeder Person in deinem Team helfen kannst, <b>besser einzuladen, zu präsentieren und abzuschließen</b>. Hilf ihnen, Geld zu verdienen, und ihr verdient alle.`,
      hl2: `MLM heißt gemeinsam. Ein Team, das gemeinsam verkauft, gewinnt gemeinsam: internationale Anerkennung und Einkommen für alle.`,
      linkintro: 'Dein persönlicher Link:',
      pthink: `Lass dein Team nicht zurück. Hol es an den Tisch der Gewinner.`,
      signoff: `Mach's gut — und leg los,`,
      team: 'Das MlmPsychology-Team',
      waMsg: `Hey! 👋 Du weißt, wie frustrierend es ist, Leute direkt am Telefon zu verlieren — nicht zu wissen, wie man eröffnet oder was man auf „ist das MLM?” antwortet. Ich habe etwas gefunden, das meinen Ansatz komplett verändert hat: Es schreibt dir den Dialog Wort für Wort, zugeschnitten auf dein Produkt — Einladung, Präsentation und Abschluss. Schau’s dir an, vielleicht hilft es dir auch:`,
      waLabel: `Sende deinen Link per WhatsApp`
    }
  };
  const t = T[lang] || T.ro;
  const waUrl = 'https://wa.me/?text=' + encodeURIComponent(t.waMsg + '\n' + link);
  const html = `<div style="background:#f4f2ee;padding:28px 12px;font-family:Arial,Helvetica,sans-serif">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e8e4dc">
      <div style="background:#12182a;padding:18px 28px">
        <span style="color:#ecca7e;font-size:18px;font-weight:700;letter-spacing:.5px">MlmPsychology</span>
      </div>
      <div style="padding:30px 28px;color:#23262e;font-size:15px;line-height:1.7">
        <h1 style="font-size:20px;color:#1a1205;margin:0 0 18px">${t.greeting}</h1>
        <p style="margin:0 0 14px">${t.p1}</p>
        <p style="margin:0 0 14px">${t.p2}</p>
        <p style="margin:0 0 14px">${t.p3}</p>
        <p style="margin:0 0 14px">${t.p4}</p>
        <p style="text-align:center;font-size:18px;font-weight:700;color:#b8903a;margin:8px 0 20px">${t.hl}</p>
        <p style="margin:0 0 22px">${t.p5}</p>
        <p style="margin:0 0 14px">${t.p6a}</p>
        <p style="margin:0 0 14px">${t.p6b}</p>
        <p style="text-align:center;font-size:17px;font-weight:700;color:#b8903a;margin:14px 0 26px;line-height:1.5">${t.hl2}</p>
        <p style="margin:0 0 8px;font-size:14px;color:#666">${t.linkintro}</p>
        <div style="background:#faf7f0;border:1px solid #b8903a;border-radius:10px;padding:14px 16px;margin:0 0 14px;text-align:center">
          <a href="${link}" style="color:#b8903a;font-weight:700;font-size:15px;word-break:break-all;text-decoration:none">${link}</a>
        </div>
        <div style="text-align:center;margin:0 0 24px">
          <a href="${waUrl}" style="display:inline-block;background:#25D366;color:#ffffff;font-weight:700;font-size:15px;text-decoration:none;padding:13px 28px;border-radius:10px">${t.waLabel} →</a>
        </div>
        <p style="margin:0 0 24px">${t.pthink}</p>
        <p style="margin:0;color:#23262e">${t.signoff}<br><b>${t.team}</b></p>
      </div>
    </div>
  </div>`;
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.SUPPORT_FROM || 'Harvard of Sales <onboarding@resend.dev>',
        to: [email],
        subject: t.subject,
        html
      })
    });
  } catch (e) { console.error('[referral email]', e.message); }
}

// ============================================
// AUTH ROUTES
// ============================================

// Înregistrare
app.post('/api/auth/register', async (req, res) => {
  const { email, password, ref, lang } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email și parolă sunt obligatorii' });
  if (password.length < 6) return res.status(400).json({ error: 'Parola trebuie să aibă minim 6 caractere' });

  // păstrăm codul recomandatorului în metadata, ca backup dacă rândul de profil întârzie
  const meta = ref ? { ref: String(ref).trim().toUpperCase().slice(0, 16) } : undefined;
  const { data, error } = await db.auth.signUp({ email, password, options: meta ? { data: meta } : undefined });
  if (error) return res.status(400).json({ error: error.message });

  // best-effort: cod personal + legare de recomandator + email de bun venit (nu blocăm înscrierea dacă pică)
  const uid = data && data.user && data.user.id;
  if (uid) {
    (async () => {
      try {
        // rândul de profil e creat de un trigger; îi dăm câteva încercări
        let code = null;
        for (let i = 0; i < 5 && !code; i++) {
          code = await ensureRefCode(uid);
          if (!code) await new Promise(r => setTimeout(r, 400));
        }
        const referredBy = await resolveReferrer(ref, uid);
        if (referredBy) await db.from('profiles').update({ referred_by: referredBy }).eq('id', uid);
        if (code) await sendReferralWelcomeEmail(email, code, lang || 'ro');
      } catch (e) { console.error('[register referral]', e.message); }
    })();
  }

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

  // REPORT SCRIPTURI: alocarea lunara NU se mai reseteaza pe calendar aici.
  // Sursa unica de alocare = reinnoirea Stripe (webhook invoice.paid), care ADUNA
  // scripturile noi peste cele ramase (report), plafonat la 2x alocarea lunara.
  // Astfel scripturile neutilizate se pastreaza dintr-o luna in alta.

  // REFERRAL — backfill leneș: cod personal + legare de recomandator (din metadata), o singură dată.
  try {
    if (profile && !profile.ref_code) {
      const code = await ensureRefCode(req.user.id);
      if (code) profile.ref_code = code;
    }
    if (profile && !profile.referred_by && req.user.user_metadata && req.user.user_metadata.ref) {
      const referredBy = await resolveReferrer(req.user.user_metadata.ref, req.user.id);
      if (referredBy) {
        await db.from('profiles').update({ referred_by: referredBy }).eq('id', req.user.id);
        profile.referred_by = referredBy;
      }
    }
  } catch (e) { console.error('[user referral backfill]', e.message); }

  res.json(profile);
});

// ---- REFERRAL: stare pentru panoul din cont ----
app.get('/api/referrals', auth, async (req, res) => {
  try {
    const { data: me } = await db.from('profiles').select('ref_code, tier').eq('id', req.user.id).single();
    let code = me && me.ref_code;
    if (!code) code = await ensureRefCode(req.user.id);
    const tier = (me && me.tier) || 'none';
    const host = req.get('host');
    const link = `https://${host}/?ref=${code || ''}`;

    let total = 0, qualifying = 0;
    if (code) {
      const { count: totalCount } = await db
        .from('profiles').select('id', { count: 'exact', head: true })
        .eq('referred_by', code);
      total = totalCount || 0;
      qualifying = await countQualifyingReferrals(req.user.id, tier);
    }
    const eligiblePlan = !!TIER_RANK[tier]; // e pe plan recurent?
    res.json({
      code: code || null,
      link,
      total,
      qualifying,
      threshold: REFERRAL_THRESHOLD,
      eligible_plan: eligiblePlan,
      free_now: eligiblePlan && qualifying >= REFERRAL_THRESHOLD
    });
  } catch (e) {
    console.error('[api/referrals]', e.message);
    res.status(500).json({ error: 'Eroare la citirea recomandărilor' });
  }
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

// ============================================
// FLUX DIRECT ANTHROPIC pentru OBIECTII (sub flag USE_DIRECT_OBJECTIONS)
// Ruleaza in fundal: completeaza promptul, suna Anthropic, actualizeaza jobul.
// Obiectiile NU scad credite (la fel ca fluxul MindStudio).
// ============================================
// Directiva de limba: fortam output 100% italian nativ cand userul e pe /app-it.
// Se adauga ULTIMA in prompt (ultima instructiune are prioritate pentru model).
const IT_DIRECTIVE = '\n\n═══════════ LINGUA OUTPUT — PRIORITÀ ASSOLUTA ═══════════\n' +
  'Scrivi TUTTO l\'output esclusivamente in ITALIANO madrelingua, fluente e naturale. ' +
  'NON tradurre parola per parola: adatta idiomi, tono e ritmo come un vero venditore italiano. ' +
  'Mantieni identica la struttura e la metodologia. Per le etichette di sezione usa "FASE" al posto di "ETAPA" ' +
  'e "[PAUSA ...]" al posto di "[PAUZĂ ...]"; conserva gli emoji 📋 🎬 ✅. ' +
  'I nomi propri e il nome del prodotto restano invariati. ' +
  'Le etichette dei parlanti devono essere sempre "AGENTE" e "CLIENTE" (MAI "CLIENT", MAI "AGENT"). ' +
  'Traduci in italiano ANCHE tutte le didascalie e le indicazioni di regia tra parentesi: ' +
  'nessuna parola rumena come "zâmbet"/"zambet" (usa "sorriso"), "pauză" (usa "pausa"), "voce" resta "voce". ' +
  'Rileggi l\'output prima di consegnarlo: se trovi anche una sola parola in rumeno, correggila. ' +
  'Nell\'output finale non deve comparire NESSUNA parola in rumeno.';

const EN_DIRECTIVE = '\n\n═══════════ OUTPUT LANGUAGE — ABSOLUTE PRIORITY ═══════════\n' +
  'Write the ENTIRE output exclusively in natural, native ENGLISH. ' +
  'Do NOT translate word-for-word: adapt idioms, tone and rhythm like a real English-speaking salesperson. ' +
  'Keep the structure and methodology identical. For section labels use "PHASE" instead of "ETAPA" ' +
  'and "[PAUSE ...]" instead of "[PAUZĂ ...]"; keep the emojis 📋 🎬 ✅. ' +
  'Proper names and the product name stay unchanged. ' +
  'Speaker labels must always be "AGENT" and "CLIENT". ' +
  'Also translate every stage direction in parentheses: no Romanian words (e.g. "zâmbet" → "smile", "voce" → "voice", "pauză" → "pause"). ' +
  'Re-read the output before delivering: if you find a single Romanian word, fix it. ' +
  'No Romanian word may appear in the final output.';

const ES_DIRECTIVE = '\n\n═══════════ IDIOMA DE SALIDA — PRIORIDAD ABSOLUTA ═══════════\n' +
  'Escribe TODO el resultado exclusivamente en ESPAÑOL neutro, fluido y natural (válido para España y Latinoamérica; evita regionalismos marcados). ' +
  'NO traduzcas palabra por palabra: adapta modismos, tono y ritmo como un verdadero vendedor hispanohablante. ' +
  'Mantén idéntica la estructura y la metodología. Para las etiquetas de sección usa "FASE" en lugar de "ETAPA" ' +
  'y "[PAUSA ...]" en lugar de "[PAUZĂ ...]"; conserva los emojis 📋 🎬 ✅. ' +
  'Los nombres propios y el nombre del producto quedan sin cambios. ' +
  'Las etiquetas de los interlocutores deben ser siempre "AGENTE" y "CLIENTE". ' +
  'Traduce también todas las acotaciones entre paréntesis: ninguna palabra en rumano (p. ej. "zâmbet" → "sonrisa", "voce" → "voz", "pauză" → "pausa"). ' +
  'Relee el resultado antes de entregarlo: si encuentras una sola palabra en rumano, corrígela. ' +
  'En el resultado final no debe aparecer NINGUNA palabra en rumano.';

const FR_DIRECTIVE = '\n\n═══════════ LANGUE DE SORTIE — PRIORITÉ ABSOLUE ═══════════\n' +
  'Rédige TOUT le résultat exclusivement en FRANÇAIS natif, fluide et naturel. ' +
  'NE traduis PAS mot à mot : adapte les expressions, le ton et le rythme comme un vrai commercial francophone. ' +
  'Garde la structure et la méthodologie identiques. Pour les étiquettes de section utilise « PHASE » au lieu de « ETAPA » ' +
  'et « [PAUSE ...] » au lieu de « [PAUZĂ ...] » ; conserve les emojis 📋 🎬 ✅. ' +
  'Les noms propres et le nom du produit restent inchangés. ' +
  'Les étiquettes des interlocuteurs doivent toujours être « AGENT » et « CLIENT ». ' +
  'Traduis aussi toutes les didascalies entre parenthèses : aucun mot en roumain (ex. « zâmbet » → « sourire », « voce » → « voix », « pauză » → « pause »). ' +
  'Relis le résultat avant de le livrer : si tu trouves un seul mot en roumain, corrige-le. ' +
  'Aucun mot roumain ne doit apparaître dans le résultat final.';

const DE_DIRECTIVE = '\n\n═══════════ AUSGABESPRACHE — ABSOLUTE PRIORITÄT ═══════════\n' +
  'Schreibe die GESAMTE Ausgabe ausschließlich auf natürlichem, muttersprachlichem DEUTSCH. ' +
  'Übersetze NICHT Wort für Wort: passe Redewendungen, Ton und Rhythmus an wie ein echter deutschsprachiger Verkäufer. ' +
  'Behalte Struktur und Methodik identisch bei. Verwende für Abschnittsbezeichnungen „PHASE" statt „ETAPA" ' +
  'und „[PAUSE ...]" statt „[PAUZĂ ...]"; behalte die Emojis 📋 🎬 ✅. ' +
  'Eigennamen und der Produktname bleiben unverändert. ' +
  'Die Sprecher-Bezeichnungen müssen immer „AGENT" und „KUNDE" sein. ' +
  'Übersetze auch alle Regieanweisungen in Klammern: kein rumänisches Wort (z. B. „zâmbet" → „Lächeln", „voce" → „Stimme", „pauză" → „Pause"). ' +
  'Lies die Ausgabe vor der Übergabe erneut: wenn du auch nur ein rumänisches Wort findest, korrigiere es. ' +
  'In der endgültigen Ausgabe darf KEIN rumänisches Wort erscheinen.';

const OUT_DIRECTIVES = { it: IT_DIRECTIVE, en: EN_DIRECTIVE, es: ES_DIRECTIVE, fr: FR_DIRECTIVE, de: DE_DIRECTIVE };

async function runObjectionDirect(jobId, objNum, allVariables, lang) {
  const fs = require('fs');
  try {
    const file = objNum === 2 ? 'obiectie2.md' : 'obiectie1.md';
    const candidates = [
      path.join(__dirname, 'prompts', file),
      path.join(process.cwd(), 'prompts', file),
      path.join(__dirname, file)
    ];
    const promptPath = candidates.find(p => { try { return fs.existsSync(p); } catch (e) { return false; } });
    if (!promptPath) {
      await db.from('generation_jobs').update({ status: 'error', error: 'prompt_missing' }).eq('id', jobId);
      return;
    }
    let prompt = fs.readFileSync(promptPath, 'utf8');

    // EVITA MULTIPLICAREA: {{22_continut_anterior}} apare de 11x in prompt -> injectat la fiecare = explozie de cost.
    // Inlocuim referintele cu eticheta + adaugam continutul O SINGURA DATA la final.
    const priorContent = allVariables['22_continut_anterior'] || '';
    prompt = prompt.split('{{22_continut_anterior}}').join('scriptul anterior (vezi SCRIPT ANTERIOR la finalul promptului)');

    // restul variabilelor (fara cea mare, deja tratata)
    const vars = { ...allVariables };
    delete vars['22_continut_anterior'];
    for (const [k, v] of Object.entries(vars)) {
      prompt = prompt.split('{{' + k + '}}').join(v == null ? '' : String(v));
    }
    prompt = prompt.replace(/\{\{[^}]+\}\}/g, ''); // variabilele necompletate -> gol (ca in MindStudio)

    // injecteaza BIBLIOTECA DE TEHNICI DE OBIECTIE (ADN) + scriptul anterior, O SINGURA DATA, la final
    const kbObCands = [
      path.join(__dirname, 'prompts', 'kb_obiectii.md'),
      path.join(process.cwd(), 'prompts', 'kb_obiectii.md'),
      path.join(__dirname, 'kb_obiectii.md')
    ];
    const kbObPath = kbObCands.find(p => { try { return fs.existsSync(p); } catch (e) { return false; } });
    const kbObiectii = kbObPath ? fs.readFileSync(kbObPath, 'utf8') : '';
    if (kbObiectii) prompt += '\n\n' + kbObiectii;
    if (priorContent.trim()) {
      prompt += '\n\n═══════════ SCRIPT ANTERIOR (contextul conversatiei de pana acum) ═══════════\n' + priorContent;
    }

    // ROTATIE WHATSAPP: alege aleator una din tehnicile verificate. A 3-a (Reactia pe viu) intra in pool DOAR la produse turistice.
    const waPool = ['Principiul Personal', 'Cadrul Surprizei'];
    const produsObj = (allVariables['07_produs'] || '').toLowerCase();
    if (/vacant|croazier|calatori|turistic|excursi/.test(produsObj)) waPool.push('Reactia pe viu');
    const waTech = waPool[Math.floor(Math.random() * waPool.length)];
    prompt += '\n\n>>> ROTATIE WHATSAPP: foloseste ' + waTech + ' (se aplica DOAR daca obiectia e de tip "trimite pe WhatsApp / mail" si conditia CADRU FIX e indeplinita; pentru orice alta obiectie, ignora complet aceasta linie).';

    if (OUT_DIRECTIVES[lang]) prompt += OUT_DIRECTIVES[lang];

    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 8000,
        temperature: 0.6,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await r.json();
    if (!r.ok) {
      console.error('Anthropic obiectie error:', JSON.stringify(data).slice(0, 500));
      await db.from('generation_jobs').update({ status: 'error', error: 'anthropic_error' }).eq('id', jobId);
      return;
    }
    // cost real per obiectie (apare in Railway logs) — Sonnet 4.6: $3/M in, $15/M out
    try {
      const u = data.usage || {};
      const inTok = u.input_tokens || 0;
      const outTok = u.output_tokens || 0;
      const cost = (inTok * 3 + outTok * 15) / 1e6;
      console.log(`[OBIECTIE COST] obj${objNum || 1} in=${inTok} out=${outTok} cost=$${cost.toFixed(4)}`);
    } catch (_) {}
    const text = (data.content || []).map(b => b.text || '').join('\n').trim();
    if (!text) {
      await db.from('generation_jobs').update({ status: 'error', error: 'empty_result' }).eq('id', jobId);
      return;
    }
    await db.from('generation_jobs').update({ status: 'done', result: text }).eq('id', jobId);
  } catch (e) {
    console.error('runObjectionDirect exception:', e.message);
    try { await db.from('generation_jobs').update({ status: 'error', error: 'direct_exception' }).eq('id', jobId); } catch (_) {}
  }
}

// ============================================
// FLUX DIRECT ANTHROPIC pentru INVITATIE (sub flag USE_DIRECT_INVITATION)
// Injecteaza cele 6 openinguri in {{kb_opening}}, curata randul [DEBUG] din primer,
// si DECREMENTEAZA CREDITE identic cu callback-ul MindStudio (invitatia scade credite).
// ============================================
async function runInvitationDirect(jobId, jobMode, userId, allVariables, lang) {
  const fs = require('fs');
  const findFile = (name) => {
    const cands = [
      path.join(__dirname, 'prompts', name),
      path.join(process.cwd(), 'prompts', name),
      path.join(__dirname, name)
    ];
    return cands.find(p => { try { return fs.existsSync(p); } catch (e) { return false; } });
  };
  try {
    const promptPath = findFile('invitatie.md');
    const kbPath = findFile('kb_openings.md');
    if (!promptPath) {
      await db.from('generation_jobs').update({ status: 'error', error: 'prompt_missing' }).eq('id', jobId);
      return;
    }
    let prompt = fs.readFileSync(promptPath, 'utf8');
    const kbOpenings = kbPath ? fs.readFileSync(kbPath, 'utf8') : '';

    // EVITA MULTIPLICAREA variabilelor mari: {{kb_opening}} apare de 8x si
    // {{31_scripturi_anterioare}} de 6x in prompt. Injectate la fiecare referinta = explozie de cost.
    // Solutie: inlocuim referintele cu o eticheta scurta + adaugam continutul O SINGURA DATA la final.
    let priorScripts = allVariables['31_scripturi_anterioare'] || '';
    if (priorScripts.length > 24000) priorScripts = priorScripts.slice(-24000); // plafon cost (pastram recentele)

    prompt = prompt.split('{{kb_opening}}').join('openingul ales din BIBLIOTECA OPENINGURI (lista la finalul promptului)');
    prompt = prompt.split('{{31_scripturi_anterioare}}').join('scripturile generate anterior (lista la finalul promptului)');

    // restul variabilelor (fara cele doua mari, deja tratate)
    const vars = { ...allVariables };
    delete vars['31_scripturi_anterioare'];
    delete vars['kb_opening'];
    for (const [k, v] of Object.entries(vars)) {
      prompt = prompt.split('{{' + k + '}}').join(v == null ? '' : String(v));
    }
    prompt = prompt.replace(/\{\{[^}]+\}\}/g, ''); // variabile necompletate -> gol

    // continutul mare, O SINGURA DATA, la final
    prompt += '\n\n═══════════ BIBLIOTECA OPENINGURI ═══════════\n' + kbOpenings;
    if (priorScripts.trim()) {
      prompt += '\n\n═══════════ SCRIPTURI GENERATE ANTERIOR (doar pentru variatie — NU repeta openingurile/structurile) ═══════════\n' + priorScripts;
    }

    if (OUT_DIRECTIVES[lang]) prompt += OUT_DIRECTIVES[lang];

    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 16000,
        temperature: 0.6,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await r.json();
    if (!r.ok) {
      console.error('Anthropic invitatie error:', JSON.stringify(data).slice(0, 500));
      await db.from('generation_jobs').update({ status: 'error', error: 'anthropic_error' }).eq('id', jobId);
      return;
    }
    // cost real per invitatie (Railway logs) — Sonnet 4.6: $3/M in, $15/M out
    try {
      const u = data.usage || {};
      const inTok = u.input_tokens || 0, outTok = u.output_tokens || 0;
      const cost = (inTok * 3 + outTok * 15) / 1e6;
      console.log(`[INVITATIE COST] mode=${jobMode} in=${inTok} out=${outTok} cost=$${cost.toFixed(4)}`);
    } catch (_) {}

    let text = (data.content || []).map(b => b.text || '').join('\n').trim();
    if (!text) {
      await db.from('generation_jobs').update({ status: 'error', error: 'empty_result' }).eq('id', jobId);
      return;
    }
    // curata randul [DEBUG] din primer (mode-lock) ca sa nu apara la utilizator
    text = text.replace(/^\[DEBUG\][^\n]*\r?\n\r?\n?/, '').trim();

    // DECREMENTARE CREDITE — IDENTIC cu callback-ul MindStudio (training_left intai, apoi scripts_remaining)
    let newRemaining = null, newTraining = null;
    const { data: profile } = await db.from('profiles').select('*').eq('id', userId).single();
    if (profile) {
      newRemaining = profile.scripts_remaining;
      newTraining  = profile.training_left || 0;
      if (newTraining > 0) {
        newTraining = newTraining - 1;
        await db.from('profiles').update({ training_left: newTraining }).eq('id', userId);
      } else {
        newRemaining = profile.scripts_remaining - 1;
        await db.from('profiles').update({ scripts_remaining: newRemaining }).eq('id', userId);
      }
      await db.from('script_generations').insert({ user_id: userId, mode: jobMode });
    }

    await db.from('generation_jobs').update({
      status: 'done',
      result: text,
      scripts_remaining: newRemaining,
      training_left: newTraining
    }).eq('id', jobId);
  } catch (e) {
    console.error('runInvitationDirect exception:', e.message);
    try { await db.from('generation_jobs').update({ status: 'error', error: 'direct_exception' }).eq('id', jobId); } catch (_) {}
  }
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

  // 2. REPORT SCRIPTURI: fara reset pe calendar. Alocarea lunara vine din reinnoirea
  // Stripe (webhook invoice.paid), aditiv + plafonat la 2x. Aici folosim soldul din DB ca atare.

  // 3. Verificam scripturi disponibile (sau bonus de antrenament)
  const trainingLeft = profile.training_left || 0;
  if (profile.scripts_remaining <= 0 && trainingLeft <= 0) {
    return res.status(403).json({
      error: 'Ai atins limita lunară de scripturi. Fă upgrade pentru mai multe.'
    });
  }

  // 4. Verificam modul permis pentru tier
  const { mode, variables, isObjection, objNum, lang } = req.body;
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

  // 6.5 — FLUX DIRECT ANTHROPIC pentru OBIECTII (sub flag, in paralel cu MindStudio)
  if (isObjection && process.env.USE_DIRECT_OBJECTIONS === '1') {
    runObjectionDirect(jobId, objNum, allVariables, lang); // fundal — NU asteptam
    return res.json({ jobId });
  }

  // 6.6 — FLUX DIRECT ANTHROPIC pentru INVITATIE (sub flag, in paralel cu MindStudio)
  if (!isObjection && process.env.USE_DIRECT_INVITATION === '1') {
    runInvitationDirect(jobId, mode || 'clean', req.user.id, allVariables, lang); // fundal — NU asteptam
    return res.json({ jobId });
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
  const { plan, lang } = req.body;
  const p = STRIPE_PLANS[plan];
  if (!p) return res.status(400).json({ error: 'Plan invalid' });
  const appPath = { it: '/app-it', en: '/app-en', es: '/app-es', fr: '/app-fr', de: '/app-de' }[lang] || '/app'; // userii revin in aplicatia limbii lor

  try {
    const base = `https://${req.get('host')}`;
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      mode: p.mode,
      line_items: [{ price: p.priceId, quantity: 1 }],
      customer_email: req.user.email,
      client_reference_id: req.user.id,
      metadata: { user_id: req.user.id, tier: p.tier, type: (plan === 'consult' ? 'consult' : 'plan') },
      subscription_data: p.mode === 'subscription'
        ? { metadata: { user_id: req.user.id, tier: p.tier } } : undefined,
      invoice_creation: p.mode === 'payment' ? { enabled: true } : undefined,
      return_url: `${base}${appPath}?${plan === 'consult' ? 'consult' : 'paid'}=1&session_id={CHECKOUT_SESSION_ID}`,
    });
    res.json({ clientSecret: session.client_secret });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    res.status(500).json({ error: 'Nu am putut porni plata. Încearcă din nou.' });
  }
});

// ============================================
// GESTIONARE ABONAMENT — info / anulare / reactivare
// ============================================

// Gaseste abonamentul Stripe al userului. Ordine: sub_id salvat -> customer_id salvat
// -> cautare dupa email (pentru abonatii vechi, fara ID-uri in DB). Backfill cand gaseste.
async function findUserSubscription(userId, email) {
  const { data: profile } = await db
    .from('profiles')
    .select('stripe_subscription_id, stripe_customer_id, tier')
    .eq('id', userId).single();

  const isActive = s => ['active', 'trialing', 'past_due'].includes(s.status);

  // 1) avem subscription id salvat
  if (profile && profile.stripe_subscription_id) {
    try {
      const sub = await stripe.subscriptions.retrieve(profile.stripe_subscription_id);
      if (sub && sub.status !== 'canceled') return { sub };
    } catch (e) { /* sub invalid -> fallback */ }
  }

  // 2) avem customer id -> listam abonamentele lui
  if (profile && profile.stripe_customer_id) {
    const subs = await stripe.subscriptions.list({ customer: profile.stripe_customer_id, status: 'all', limit: 10 });
    const sub = subs.data.find(isActive);
    if (sub) {
      await db.from('profiles').update({ stripe_subscription_id: sub.id }).eq('id', userId);
      return { sub };
    }
  }

  // 3) fallback abonati vechi: cautare dupa email
  if (email) {
    const customers = await stripe.customers.list({ email, limit: 10 });
    for (const c of customers.data) {
      const subs = await stripe.subscriptions.list({ customer: c.id, status: 'all', limit: 10 });
      const sub = subs.data.find(isActive);
      if (sub) {
        await db.from('profiles').update({ stripe_customer_id: c.id, stripe_subscription_id: sub.id }).eq('id', userId);
        return { sub };
      }
    }
  }

  return null;
}

// citeste data de final perioada (compatibil cu API-ul nou: poate fi pe item)
function subPeriodEnd(sub) {
  const item = sub.items && sub.items.data && sub.items.data[0];
  const sec = sub.current_period_end || (item && item.current_period_end) || null;
  return sec ? sec * 1000 : null;
}

// GET — info abonament curent
app.get('/api/subscription', auth, async (req, res) => {
  try {
    const found = await findUserSubscription(req.user.id, req.user.email);
    if (!found) return res.json({ has_subscription: false });
    res.json({
      has_subscription: true,
      status: found.sub.status,
      cancel_at_period_end: found.sub.cancel_at_period_end,
      current_period_end: subPeriodEnd(found.sub)
    });
  } catch (err) {
    console.error('subscription info error:', err);
    res.status(500).json({ error: 'Nu am putut citi abonamentul.' });
  }
});

// POST — anuleaza la finalul perioadei (ramane activ pana atunci, fara refund, se poate reactiva)
app.post('/api/subscription/cancel', auth, async (req, res) => {
  try {
    const found = await findUserSubscription(req.user.id, req.user.email);
    if (!found) return res.status(404).json({ error: 'Nu ai un abonament activ de anulat.' });
    const reason = ((req.body && req.body.reason) || '').toString().slice(0, 120);
    const updated = await stripe.subscriptions.update(found.sub.id, {
      cancel_at_period_end: true,
      metadata: { ...(found.sub.metadata || {}), cancel_reason: reason }
    });
    console.log(`[cancel] ${req.user.id} sub=${updated.id} motiv="${reason}"`);
    res.json({ ok: true, cancel_at_period_end: true, current_period_end: subPeriodEnd(updated) });
  } catch (err) {
    console.error('cancel error:', err);
    res.status(500).json({ error: 'Nu am putut anula abonamentul. Incearca din nou.' });
  }
});

// POST — reactiveaza (anuleaza anularea programata)
app.post('/api/subscription/resume', auth, async (req, res) => {
  try {
    const found = await findUserSubscription(req.user.id, req.user.email);
    if (!found) return res.status(404).json({ error: 'Nu ai un abonament de reactivat.' });
    const updated = await stripe.subscriptions.update(found.sub.id, { cancel_at_period_end: false });
    console.log(`[resume] ${req.user.id} sub=${updated.id}`);
    res.json({ ok: true, cancel_at_period_end: false, current_period_end: subPeriodEnd(updated) });
  } catch (err) {
    console.error('resume error:', err);
    res.status(500).json({ error: 'Nu am putut reactiva abonamentul.' });
  }
});

// POST — schimba planul. Upgrade = plata integrala imediat (ciclu repornit) + scripturi cumulate.
// Downgrade = imediat, fara plata acum, pastreaza scripturile, pierde doar feature-urile superioare.
const TIER_RANK = { recruit: 1, builder: 2, leader: 3 };
app.post('/api/subscription/change', auth, async (req, res) => {
  try {
    const target = ((req.body && req.body.tier) || '').toString();
    if (!TIER_RANK[target] || !STRIPE_PLANS[target]) return res.status(400).json({ error: 'Plan invalid.' });

    const found = await findUserSubscription(req.user.id, req.user.email);
    if (!found) return res.status(404).json({ error: 'Nu ai un abonament activ de schimbat.' });
    const sub = found.sub;

    const { data: prof } = await db.from('profiles').select('tier, scripts_remaining').eq('id', req.user.id).single();
    const current = (prof && prof.tier) || (sub.metadata && sub.metadata.tier);
    if (!TIER_RANK[current]) return res.status(400).json({ error: 'Planul curent nu poate fi schimbat de aici.' });
    if (current === target) return res.status(400).json({ error: 'Esti deja pe acest plan.' });

    const itemId    = sub.items.data[0].id;
    const newPrice  = STRIPE_PLANS[target].priceId;
    const isUpgrade = TIER_RANK[target] > TIER_RANK[current];

    const params = {
      items: [{ id: itemId, price: newPrice }],
      proration_behavior: 'none',
      metadata: { ...(sub.metadata || {}), tier: target }
    };
    if (isUpgrade) params.billing_cycle_anchor = 'now'; // plata integrala imediat + ciclu repornit azi

    await stripe.subscriptions.update(sub.id, params);

    const dbUpdate = { tier: target, stripe_subscription_id: sub.id };
    if (isUpgrade) {
      // scripturile noului tier se ADAUGA peste cele existente
      const { data: t } = await db.from('tiers').select('scripts_per_month').eq('id', target).single();
      const add = t ? t.scripts_per_month : 0;
      const cur = (prof && prof.scripts_remaining) || 0;
      dbUpdate.scripts_remaining = cur + add;
      dbUpdate.scripts_reset_at  = new Date().toISOString();
    }
    // downgrade: NU atingem scripts_remaining (pastreaza ce are); doar tier-ul scade -> feature-urile superioare se blocheaza

    await db.from('profiles').update(dbUpdate).eq('id', req.user.id);
    console.log(`[change] ${req.user.id} ${current} -> ${target} (${isUpgrade ? 'upgrade+plata' : 'downgrade'})`);
    res.json({ ok: true, tier: target, upgrade: isUpgrade });
  } catch (err) {
    console.error('change error:', err);
    res.status(500).json({ error: 'Nu am putut schimba planul. Incearca din nou.' });
  }
});

// POST — cumpara inca o data acelasi plan: REPORNESTE ciclul (plata integrala azi pe cardul salvat),
// ramane pe acelasi plan, +X scripturi cumulativ, urmatoarea factura la 30 de zile din acest moment.
app.post('/api/subscription/repurchase', auth, async (req, res) => {
  try {
    const found = await findUserSubscription(req.user.id, req.user.email);
    if (!found) return res.status(404).json({ error: 'Nu ai un abonament activ.' });
    const sub = found.sub;

    const { data: prof } = await db.from('profiles').select('tier, scripts_remaining').eq('id', req.user.id).single();
    const tier = (prof && prof.tier) || (sub.metadata && sub.metadata.tier);
    if (!TIER_RANK[tier]) return res.status(400).json({ error: 'Plan invalid pentru aceasta optiune.' });

    // repornire ciclu pe ACELASI plan: plata integrala imediat pe cardul salvat (off-session),
    // factura generata are billing_reason 'subscription_update' -> NU declanseaza resetul din invoice.paid
    const updated = await stripe.subscriptions.update(sub.id, {
      billing_cycle_anchor: 'now',
      proration_behavior: 'none',
      metadata: { ...(sub.metadata || {}), tier }
    });

    // +X scripturi cumulativ (peste cele existente)
    const { data: t } = await db.from('tiers').select('scripts_per_month').eq('id', tier).single();
    const add = t ? t.scripts_per_month : 0;
    const cur = (prof && prof.scripts_remaining) || 0;
    await db.from('profiles').update({
      scripts_remaining: cur + add,
      scripts_reset_at: new Date().toISOString(),
      stripe_subscription_id: sub.id
    }).eq('id', req.user.id);

    console.log(`[repurchase] ${req.user.id} ${tier} +${add} scripturi (total ${cur + add}), ciclu repornit`);
    res.json({ ok: true, tier, scripts_added: add, scripts_total: cur + add, current_period_end: subPeriodEnd(updated) });
  } catch (err) {
    console.error('repurchase error:', err);
    res.status(500).json({ error: 'Nu am putut procesa plata. Verifica cardul salvat sau incearca din nou.' });
  }
});

// POST — mesaj de ajutor (din fluxul de retentie). Stocheaza in Supabase + email prin Resend daca exista cheia.
app.post('/api/support', auth, async (req, res) => {
  try {
    const reason  = ((req.body && req.body.reason)  || '').toString().slice(0, 60);
    const message = ((req.body && req.body.message) || '').toString().slice(0, 4000);
    if (!message.trim()) return res.status(400).json({ error: 'Scrie un mesaj inainte de a trimite.' });

    let tier = null;
    try {
      const { data: prof } = await db.from('profiles').select('tier').eq('id', req.user.id).single();
      tier = prof ? prof.tier : null;
    } catch (e) { /* irelevant */ }

    // 1) stocare in Supabase (best-effort)
    try {
      await db.from('support_messages').insert({
        user_id: req.user.id, email: req.user.email, tier, reason, message
      });
    } catch (e) { console.error('support store error:', e.message); }

    // 2) email prin Resend (doar daca exista cheia)
    if (process.env.RESEND_API_KEY) {
      try {
        const rr = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: process.env.SUPPORT_FROM || 'Harvard of Sales <onboarding@resend.dev>',
            to: ['contact@octavianalupoaie.biz'],
            reply_to: req.user.email,
            subject: `[Ajutor] ${reason || 'Mesaj'} - ${req.user.email}`,
            text: `Cont: ${req.user.email}\nPlan: ${tier || '-'}\nMotiv: ${reason || '-'}\n\n${message}`
          })
        });
        const rbody = await rr.text();
        if (!rr.ok) console.error('[resend] FAIL status=' + rr.status + ' body=' + rbody);
        else console.log('[resend] OK ' + rbody);
      } catch (e) { console.error('[resend] error:', e.message); }
    } else {
      console.log('[resend] SKIP: lipseste RESEND_API_KEY in env');
    }

    console.log(`[support] ${req.user.id} motiv="${reason}"`);
    res.json({ ok: true });
  } catch (err) {
    console.error('support error:', err);
    res.status(500).json({ error: 'Nu am putut trimite mesajul. Incearca din nou.' });
  }
});

// ============================================
// CONSULTANTA — formular dupa plata (produs + disponibilitate). Stocare + email catre Octavian.
// ============================================
app.post('/api/consult', auth, async (req, res) => {
  try {
    const produs        = ((req.body && req.body.produs)        || '').toString().slice(0, 500);
    const disponibil    = ((req.body && req.body.disponibil)    || '').toString().slice(0, 500);
    const telefon       = ((req.body && req.body.telefon)       || '').toString().slice(0, 60);
    const mesaj         = ((req.body && req.body.mesaj)         || '').toString().slice(0, 3000);
    if (!produs.trim()) return res.status(400).json({ error: 'Spune-ne ce produs vinzi.' });

    // 1) stocare best-effort in Supabase (tabela consult_requests, daca exista)
    try {
      await db.from('consult_requests').insert({
        user_id: req.user.id, email: req.user.email, produs, disponibil, telefon, mesaj
      });
    } catch (e) { console.error('consult store error:', e.message); }

    // 2) email catre Octavian (best-effort, prin Resend)
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: process.env.SUPPORT_FROM || 'Harvard of Sales <onboarding@resend.dev>',
            to: ['contact@octavianalupoaie.biz'],
            reply_to: req.user.email,
            subject: `[CONSULTANȚĂ] Detalii client — ${req.user.email}`,
            text: `Client: ${req.user.email}\nTelefon: ${telefon || '-'}\n\nProdus: ${produs}\n\nDisponibilitate: ${disponibil || '-'}\n\nMesaj: ${mesaj || '-'}`
          })
        });
      } catch (e) { console.error('[consult email] ', e.message); }
    }

    console.log(`[consult] formular de la ${req.user.id}`);
    res.json({ ok: true });
  } catch (err) {
    console.error('consult error:', err);
    res.status(500).json({ error: 'Nu am putut trimite. Încearcă din nou.' });
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
          scripts_reset_at: new Date().toISOString(),
          stripe_customer_id: s.customer || null,
          stripe_subscription_id: s.subscription || null
        }).eq('id', userId);
        console.log(`[webhook] activat ${tier} pentru ${userId} (${s.mode}) cust=${s.customer || '-'} sub=${s.subscription || '-'}`);
      }
      // 1b) CONSULTANTA 1-la-1 — plata de 2.000€. NU schimba planul; doar anunta.
      if (s.metadata && s.metadata.type === 'consult') {
        console.log(`[webhook] CONSULT platit (2000€) de ${s.customer_details && s.customer_details.email || s.customer_email || userId}`);
        if (process.env.RESEND_API_KEY) {
          try {
            await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
              body: JSON.stringify({
                from: process.env.SUPPORT_FROM || 'Harvard of Sales <onboarding@resend.dev>',
                to: ['contact@octavianalupoaie.biz'],
                subject: `[CONSULTANȚĂ 2000€] Plată nouă — ${s.customer_details && s.customer_details.email || userId}`,
                text: `A fost plătită consultanța 1-la-1 (2.000€).\nUser: ${userId}\nEmail: ${s.customer_details && s.customer_details.email || s.customer_email || '-'}\n\nUrmează formularul cu produsul și disponibilitatea.`
              })
            });
          } catch (e) { console.error('[consult email] ', e.message); }
        }
      }
    }

    // 2) REÎNNOIRE LUNARĂ abonament (nu prima plată) — REPORT scripturi (aditiv, plafon 2x), bonus 0
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
            const monthly = t ? t.scripts_per_month : 0;
            // REPORT: adunam alocarea lunii peste soldul ramas, plafonat la 2x alocarea lunara.
            // max(current, ...) => nu confiscam niciodata scripturi cumparate suplimentar (upgrade/repurchase pot depasi plafonul).
            const { data: prof } = await db.from('profiles').select('scripts_remaining').eq('id', userId).single();
            const current = (prof && typeof prof.scripts_remaining === 'number') ? prof.scripts_remaining : 0;
            const capped = Math.max(current, Math.min(current + monthly, monthly * 2));
            await db.from('profiles').update({
              scripts_remaining: capped,
              training_left: 0,
              scripts_reset_at: new Date().toISOString()
            }).eq('id', userId);
            console.log(`[webhook] reînnoit ${tier} pentru ${userId} (report: ${current}+${monthly} -> ${capped}, cap ${monthly * 2})`);
          }
        }
      }
    }

    // 2b) RECOMANDĂRI — factură de reînnoire creată (draft): dacă recomandatorul are
    //     >= 4 recomandați activi cu planul lui sau mai mare, luna asta e GRATIS.
    //     Stripe lasă ~1h până finalizează factura abonamentului -> avem timp să adăugăm creditul.
    if (event.type === 'invoice.created') {
      const inv = event.data.object;
      const isRenewal = inv.billing_reason === 'subscription_cycle' || inv.billing_reason === 'subscription_create';
      if (isRenewal && inv.amount_due > 0 && inv.status === 'draft') {
        const subId = inv.subscription || (inv.parent && inv.parent.subscription_details && inv.parent.subscription_details.subscription);
        if (subId) {
          const sub = await stripe.subscriptions.retrieve(subId);
          const userId = sub.metadata && sub.metadata.user_id;
          const tier   = sub.metadata && sub.metadata.tier;
          if (userId && TIER_RANK[tier]) {
            const qualifying = await countQualifyingReferrals(userId, tier);
            if (qualifying >= REFERRAL_THRESHOLD) {
              // credit egal cu totalul facturii -> luna devine 0
              await stripe.invoiceItems.create({
                customer: inv.customer,
                invoice: inv.id,
                amount: -inv.amount_due,
                currency: inv.currency,
                description: `Recompensă recomandări — ${qualifying} abonați activi (prag ${REFERRAL_THRESHOLD}). Lună gratuită.`
              });
              console.log(`[referral] LUNĂ GRATIS pentru ${userId} (${tier}) — ${qualifying} recomandați activi >= plan`);
            }
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
// TEMPORAR — TEST ANTHROPIC DIRECT (de scos dupa validare)
// ============================================
app.get('/api/test-anthropic', async (req, res) => {
  if (req.query.s !== process.env.ADMIN_SECRET) return res.status(401).send('unauthorized');
  const fs = require('fs');
  const candidates = [
    path.join(__dirname, 'prompts', 'obiectie1.md'),
    path.join(process.cwd(), 'prompts', 'obiectie1.md'),
    path.join(__dirname, 'obiectie1.md')
  ];
  const promptPath = candidates.find(p => { try { return fs.existsSync(p); } catch (e) { return false; } });
  if (!promptPath) {
    let diag = 'NU am gasit obiectie1.md. Diagnostic:\n';
    diag += '__dirname = ' + __dirname + '\n';
    diag += 'cwd = ' + process.cwd() + '\n\n';
    try { diag += 'Fisiere in __dirname:\n  ' + fs.readdirSync(__dirname).join('\n  ') + '\n\n'; } catch (e) { diag += 'eroare __dirname: ' + e.message + '\n\n'; }
    const pd = path.join(__dirname, 'prompts');
    try {
      if (fs.existsSync(pd)) diag += 'Fisiere in prompts/:\n  ' + fs.readdirSync(pd).join('\n  ');
      else diag += 'Folderul prompts/ NU exista.';
    } catch (e) { diag += 'eroare prompts/: ' + e.message; }
    return res.status(500).type('text/plain').send(diag);
  }
  try {
    let prompt = fs.readFileSync(promptPath, 'utf8');
    const sample = {
      '01_agent_gen': 'Feminin', '02_client_gen': 'Feminin', '03_tip_relatie': 'Prieten apropiat',
      '04_detalii_client': 'Prietena din liceu, doi copii, lucreaza in contabilitate, mereu ocupata',
      '05_interactiune_client': 'mi-a scris ca e epuizata si abia mai are timp de ea',
      '07_produs': 'suplimente de energie', '08_folosit_produs': 'Da',
      '09_experienta_produs': 'in 2 saptamani am simtit mai multa energie dimineata',
      '10_intentie': 'Vanzare produs', '11_tip_prezentare': 'Offline (fata in fata)',
      '12_context_intalnire': 'la o cafea', '13_mod_output': 'Clean Mode pentru executie',
      '14_obiectie_1': 'Nu am timp acum, sunt super ocupata',
      '17_calitati_apreciate': 'organizata, tine la oamenii ei',
      '21_durata_prezentare': '20 de minute', '22_continut_anterior': '',
      '26_stil_abordare': 'Cald-respectuos', '32_semnal_tip': '', '33_dorinta': ''
    };
    for (const [k, v] of Object.entries(sample)) prompt = prompt.split('{{' + k + '}}').join(v);
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 8000, temperature: 0.6, messages: [{ role: 'user', content: prompt }] })
    });
    const data = await r.json();
    if (!r.ok) return res.status(500).type('text/plain').send('EROARE API:\n' + JSON.stringify(data, null, 2));
    const text = (data.content || []).map(b => b.text || '').join('\n');
    res.type('text/plain').send(text || JSON.stringify(data, null, 2));
  } catch (e) { res.status(500).type('text/plain').send('EXCEPTIE: ' + e.message); }
});
// ====== SFARSIT TEST TEMPORAR ======

// ============================================
// CONȚINUT PREMIUM GATED — Conectare + Invitația-fulger (doar Builder/Leader)
// Blocare REALĂ: conținutul nu ajunge la client dacă planul e sub Builder.
// ============================================
const MODULE_MIN_TIER = { conectare: 'builder', fulger: 'builder', prezentare: 'leader', inchidere: 'leader', psihologie: 'builder' };
const TIER_ORDER_MOD = ['none', 'unic', 'recruit', 'builder', 'leader'];
app.get('/api/module/:name', auth, async (req, res) => {
  const name = req.params.name;
  const VALID = ['conectare', 'fulger', 'prezentare', 'inchidere', 'psihologie'];
  if (VALID.indexOf(name) === -1) {
    return res.status(404).json({ error: 'Modul inexistent' });
  }
  const { data: profile } = await db.from('profiles').select('tier').eq('id', req.user.id).single();
  const tier = (profile && profile.tier) || 'none';
  const min = MODULE_MIN_TIER[name] || 'builder';
  if (TIER_ORDER_MOD.indexOf(tier) < TIER_ORDER_MOD.indexOf(min)) {
    return res.status(403).json({ error: 'locked', min_tier: min });
  }
  const lang = req.query.lang;
  const source = (lang && PREMIUM[lang] && PREMIUM[lang][name]) ? PREMIUM[lang][name] : PREMIUM[name];
  return res.json({ name, content: source });
});

// ============================================
// FRONTEND — serveste index.html
// ============================================
app.get('*', (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow'); // rutele necunoscute servesc aplicatia -> nu se indexeaza
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
