// ============================================================
// INVITAȚIA-FULGER — strat de conținut (date)
// Se inserează în index.html. Gate-ul (builder/leader deblocat,
// recruit/unic lacăt-teaser) + render-ul în format scenariu se
// fac în funcția de randare, NU aici. Datele rămân agnostice
// față de prezentare.
//
// Regulă casă: diacritice complete (e copy de HTML).
// Replicile sunt {vorbitor:'agent'|'client', text} sau {regie:'...'}.
// "___" = loc de completat de către agent (zi/oră/nume).
// ============================================================

const FULGER_INTRO = {
  titlu: "Invitația-fulger — citește asta întâi",

  // Avertisment scurt, pus în CAPUL subtab-ului (vizibil primul, nu îngropat).
  avertisment:
    "Doar pentru prieteni apropiați. Pe o cunoștință, un coleg sau un contact rece, " +
    "vulnerabilitatea sună fals și pornește exact detectorul de manipulare pe care vrei " +
    "să-l eviți. Pentru ei, folosește generatorul.",

  puncte: [
    {
      q: "Cui se adresează — și DOAR cui",
      a: "Doar prietenilor apropiați. Punct. Pentru oricine altcineva ai scripturile normale " +
         "din generator. Astea patru sunt pentru oamenii care te iubesc deja."
    },
    {
      q: "Ce frici îți scoate ȚIE din cap",
      a: "Nu celălalt e problema — tu ești. Frica de refuz, de „ce-o să creadă”, de momentul " +
         "stânjenitor. Variantele mărturisesc frica în loc s-o ascundă — și fix asta o dezarmează. " +
         "N-ai ce ascunde, deci n-ai de ce să te blochezi."
    },
    {
      q: "De ce funcționează pe celălalt",
      a: "Nu vinzi nimic, nu ceri nimic, nu explici nimic. Creezi o buclă de curiozitate și-l pui " +
         "în rol de aliat, nu de țintă. Spune „da” la cafea înainte să apuce să ridice scutul."
    },
    {
      q: "Capcana care le strică pe toate",
      a: "Momentul „bine, dar despre ce e vorba?”. Toate patru sunt construite să închidă apelul " +
         "ÎNAINTE de întrebarea asta. Dacă te apuci să explici la telefon, ai pierdut întâlnirea. " +
         "Răspunzi cu surpriza, zâmbești, închizi. Niciun cuvânt în plus."
    },
    {
      q: "Contează ritmul, nu cuvintele",
      a: "Aceleași replici spuse robotic și repede sună a script și mor. Spuse lent, cu pauze reale " +
         "(3-5 secunde) și cu zâmbetul în glas, sună a prezență. Pauza dramatică nu e decor — e " +
         "unealta principală. Citește-le cu voce tare de câteva ori înainte să suni."
    },
    {
      q: "Unde se opresc — și unde începi tu",
      a: "Fulgerul îți aduce „da”-ul la cafea, atât. Nu prezentarea, nu înscrierea. Nu încărca " +
         "invitația cu argumente despre produs sau business — strici tot. Ce faci la întâlnire e " +
         "altă etapă."
    }
  ]
};

const FULGER_INVITATII = [
  {
    id: 1,
    nume: "Frica mărturisită",
    durata: "≈ 30 secunde",
    context: "doar prieteni apropiați",
    dialog: [
      { vorbitor: "agent",  text: "Te salut, George… Mi-a fost tare frică să te sun." },
      { regie: "pauză dramatică" },
      { vorbitor: "client", text: "De ce… ce s-a întâmplat?" },
      { vorbitor: "agent",  text: "Voiam să te invit la o cafea și îmi era teamă că mă vei refuza." },
      { regie: "cu zâmbetul în glas" },
      { vorbitor: "client", text: "Cum să te refuz… Unde ne vedem?" },
      { vorbitor: "agent",  text: "Marți la ___ sau miercuri la ___ — care variantă e mai bună pentru tine? Hai că mi-e dor să vorbim…" },
      { regie: "îi dai două variante concrete de zi/oră" }
    ],
    obiectie: {
      titlu: "Dacă te întreabă „despre ce vrei să vorbim?”",
      dialog: [
        { vorbitor: "client", text: "Despre ce vrei să vorbim?" },
        { vorbitor: "agent",  text: "Dacă ți-aș spune că e o surpriză, ai insista cu întrebările sau mi-ai lăsa bucuria asta?" },
        { vorbitor: "client", text: "Nu… cum să-ți stric surpriza. Perfect, ne vedem marți la ___." }
      ]
    },
    psihologie: [
      "Vulnerabilitatea mărturisită îl scoate din rol de țintă și-l pune în rol de protector — nu mai are de ce să se apere.",
      "Pauza dramatică mută controlul prin tăcere: el întreabă „ce s-a întâmplat?”, deci el conduce spre întâlnire, nu tu.",
      "„Surpriza” închide bucla fără să rostești vreodată cuvântul MLM — curiozitatea ține locul argumentului."
    ]
  },

  {
    id: 2,
    nume: "Mărturisirea concentrată",
    durata: "≈ 25 secunde",
    context: "doar prieteni apropiați",
    dialog: [
      { vorbitor: "agent",  text: "Te salut, George… De 3 ore mă gândesc să te invit la o cafea și tare îmi era frică că mă vei refuza." },
      { regie: "pauză dramatică" },
      { vorbitor: "client", text: "Cum să te refuz…?" },
      { vorbitor: "agent",  text: "Marți la ___ sau miercuri la ___ — care variantă e mai bună pentru tine? Hai că mi-e dor să vorbim…" },
      { regie: "îi dai două variante concrete de zi/oră" }
    ],
    obiectie: {
      titlu: "Dacă te întreabă „despre ce vrei să vorbim?”",
      dialog: [
        { vorbitor: "client", text: "Despre ce vrei să vorbim?" },
        { vorbitor: "agent",  text: "Dacă ți-aș spune că e o surpriză, ai insista cu întrebările sau mi-ai lăsa bucuria asta?" },
        { vorbitor: "client", text: "Nu… cum să-ți stric surpriza. Perfect, ne vedem marți la ___." }
      ]
    },
    psihologie: [
      "„De 3 ore mă gândesc să te sun” = semnal de investiție emoțională: îi spui, fără s-o ceri, că apelul contează, nu e întâmplător. Crește valoarea invitației.",
      "Tai beat-ul intermediar din varianta 1 — același efect de dezarmare, dar mai rapid, cu mai puțin loc de rezistență.",
      "Închiderea „marți sau miercuri?” mută decizia de la DACĂ la CÂND. Nu mai alege între „da” și „nu”, ci între două zile."
    ]
  },

  {
    id: 3,
    nume: "Răsturnarea așteptării",
    durata: "≈ 30 secunde",
    context: "doar prieteni apropiați",
    dialog: [
      { vorbitor: "agent",  text: "Te salut, [nume]… Cred că ultimul lucru pe care voiai să-l auzi azi e o invitație la o cafea…" },
      { regie: "cu zâmbetul în glas" },
      { vorbitor: "client", text: "Fix de asta aveam nevoie… Când ne vedem?" },
      { vorbitor: "agent",  text: "Marți la ___ sau miercuri la ___ — hai că mi-e dor să vorbim…" },
      { vorbitor: "client", text: "Perfect, ne vedem la ___." },
      { vorbitor: "agent",  text: "Ce rapizi am fost… îmi place de noi. Ne vedem [zi]." },
      { regie: "închizi discuția aici — ca să nu apuce să întrebe despre ce e vorba" }
    ],
    obiectie: null,
    psihologie: [
      "Numești tu rezistența lui înainte s-o simtă el („ultimul lucru pe care voiai să-l auzi”) — îi dezamorsezi obiecția înainte să existe.",
      "Auto-ironia ușoară coboară miza: dacă tu nu iei lucrurile în serios, nici el nu simte presiune, deci n-are ce refuza.",
      "„Ce rapizi am fost… îmi place de noi” ancorează pozitiv pe „noi” și îți dă scuza naturală să închizi înainte de „despre ce e vorba?”. Regia „trebuie să închid” e disciplina, nu graba."
    ]
  },

  {
    id: 4,
    nume: "Decizia importantă",
    durata: "≈ 35 secunde",
    context: "doar prieteni apropiați",
    dialog: [
      { vorbitor: "agent",  text: "Te-am sunat să-ți spun că am luat o decizie foarte importantă." },
      { vorbitor: "client", text: "Serios… ce anume?" },
      { vorbitor: "agent",  text: "Știu că sună ciudat… dar decizia importantă e să te invit la o cafea." },
      { regie: "cu zâmbetul în glas" },
      { vorbitor: "client", text: "Asta da veste… vrei să-mi spui ceva?" },
      { vorbitor: "agent",  text: "Crezi că ar fi o idee total greșită?" },
      { vorbitor: "client", text: "Nu…" },
      { vorbitor: "agent",  text: "Care dintre zile ar fi ok pentru tine? Sau weekendul, că ești mai liber?" },
      { vorbitor: "client", text: "Weekend…" },
      { vorbitor: "agent",  text: "Decizia importantă a fost adoptată. Sâmbătă sau duminică?" },
      { regie: "cu zâmbetul în glas" },
      { vorbitor: "client", text: "Sâmbătă, ora 12:00." },
      { vorbitor: "agent",  text: "Notat… ne vedem sâmbătă cu zâmbetul pe față. Acum trebuie să închid." }
    ],
    obiectie: null,
    psihologie: [
      "Suspans + anticlimax: „am luat o decizie importantă” deschide bucla, „decizia e să te invit la o cafea” o închide cu umor. Tensiune plăcută, zero presiune.",
      "„Crezi că ar fi o idee total greșită?” e o întrebare-negativă: e mult mai greu să spui „da, e greșită” decât „nu”. Îi muți creierul spre acceptare fără să ceri direct.",
      "Îl pui pe el să aleagă ziua („weekend, că ești mai liber”) — decident activ — apoi închizi ferm, cu zâmbet și „trebuie să închid”. Curiozitatea rămâne neatinsă pentru întâlnire."
    ]
  }
];
