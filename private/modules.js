// ============================================
// HARVARD OF SALES — CONȚINUT PREMIUM (server-side)
// Servit DOAR prin /api/module/:name (server.js), cu verificare de plan (Builder/Leader).
// NU e accesibil static: folderul /private e blocat la HTTP în server.js.
// ============================================

// ---- MODUL: CONECTARE (1 la 1) — HTML injectat în #conectare-content ----
const conectare = `
  <div class="cn-title-block">
    <h1 class="cn-h1">Conectarea</h1>
    <div class="cn-subtitle">înainte de prezentarea 1 la 1</div>
  </div>
  <p class="cn-lead">Înainte de orice prezentare e nevoie de <b>conectare</b>.</p>
  <p class="cn-lead">Conectarea îți face „harta" clientului: <b>ce îl doare</b> și <b>ce îl bucură</b>. Fără hartă, prezinți în gol.</p>

  <div class="cn-sec">Reguli de performanță înainte de conectare</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Pune-te în stare optimă de performanță</div>
      <div class="cn-rd">
        <p>Creierul într-o stare pozitivă lucrează cu până la <b>31% mai bine</b> decât într-una neutră sau stresată <em>(Shawn Achor, The Happiness Advantage)</em>.</p>
        <p>Înainte să intri în conectare, fă <b>60 de secunde</b> de mișcare energică — râzi, dansează, sări.</p>
        <p>Nu e un moft: starea ta se transmite clientului în primele secunde, înainte de orice cuvânt. Intri din abundență, nu din nevoia de a convinge.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">La prezentarea de grup — conectează-te cu 10–15 minute înainte</div>
      <div class="cn-rd">
        <p>Nu-l băga direct în întâlnirea de grup — riști să-l „opărești" 😊.</p>
        <p>Omul are nevoie de o punte caldă, unu-la-unu, înainte să intre între străini.</p>
        <p class="cn-note"><em>(Regula asta pregătește varianta de grup a scriptului — modul separat.)</em></p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Fă-ți harta clientului</div>
      <div class="cn-rd">
        <p>Înainte să prezinți, ai nevoie de o „hartă" a omului din față.</p>
        <p>Pe hartă sunt două lucruri: <b>ce îl doare</b> și <b>ce îl bucură</b>.</p>
        <p>Pe asta construiești toată prezentarea. Fără ea, prezinți pe întuneric.</p>
        <p>Față în față o ții minte. Online — <b>scrie pe o foaie</b>.</p>
        <p class="cn-note">Dar harta nu apare din senin: o desenezi <b>întrebând</b>. Cum? 👉 punctul 4.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Întrebările care îți construiesc harta</div>
      <div class="cn-rd">
        <p>Harta din punctul 3 o desenezi prin <b>întrebări</b>.</p>
        <p>Cel mai important lucru de aflat este <span class="cn-big">ce îl doare</span> acum, în viața lui.</p>
        <p>Durerea e motivatorul numărul unu: în ~75% din cazuri acționăm ca să <em>scăpăm</em> de o durere — și doar în ~25% ca să <em>câștigăm</em> o plăcere.</p>
        <p>Oamenii caută întâi soluții la probleme, apoi plăcere.</p>
        <p>Deci întreabă întâi ce-l apasă. Ce l-ar bucura vine pe locul doi.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Prezentarea 1 la 1 NU e standard pentru toți</div>
      <div class="cn-rd">
        <p>Prezinți produsul / afacerea ca pe o <b>soluție posibilă</b> la durerea LUI, în cuvintele lui.</p>
        <p>Același produs, altă poartă de intrare pentru fiecare om.</p>
      </div>
    </div>
  </div>

  <div class="cn-golden">
    <div class="cn-gt">Reguli de aur ale scriptului</div>

    <div class="cn-gitem">
      <div class="cn-ghead">1 · Tonalitatea face diferența</div>
      <div class="cn-gbody">Nu contează doar CE spui, ci <b>cum</b> spui. Zâmbet în glas, pauze adevărate (nu grăbite), ton calm pe întrebarea grea, ton jucăuș la glumă. Aceleași cuvinte spuse mecanic aprind radarul; spuse cald, dezarmează. Clientul simte în ton dacă îți pasă cu adevărat sau doar joci.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">2 · Nu te preface că ești la fel ca el</div>
      <div class="cn-gbody">N-ai cum să fii în pielea altuia. Spune doar ce-ai pățit <b>tu</b>. El singur își dă seama dacă seamănă cu el.
        <div class="cn-ban">
          <div class="cn-ban-label">Fraze clasice de MLM — nu le spune niciodată</div>
          <ul>
            <li>„și eu am fost în aceeași situație"</li>
            <li>„știu exact cum este"</li>
            <li>„trebuie neapărat să vezi asta"</li>
            <li>„m-am gândit la tine când am văzut proiectul"</li>
            <li>„o să-ți placă la maxim"</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">3 · Liniștea</div>
      <div class="cn-gbody">După ce întrebi ceva, taci. Chiar dacă e liniște și ți se pare lungă. Așteaptă — <b>el vorbește primul</b>. Cine vorbește primul doar ca să nu fie liniște, pierde.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">4 · Urmează scriptul pas cu pas</div>
      <div class="cn-gbody">Spune cuvintele exact cum sunt scrise. <b>Nu le schimba.</b> Și <b>nu schimba ordinea întrebărilor.</b> Fiecare cuvânt și fiecare întrebare stau într-o anumită ordine dintr-un motiv — le muți, se strică tot efectul.</div>
    </div>

  </div>

  <div class="cn-sec">Scriptul de conectare (1 la 1)</div>

  <div class="cn-precond"><b>⚠️ Acest script începe NUMAI după ce ai identificat deja problemele clientului.</b><br>Întâi conectezi și afli ce îl doare (regulile de mai sus). Abia când știi durerea lui, intri în dialogul de jos.</div>

  <div class="cn-legend">
    <span><span class="cn-lgchip">Aa</span> ce spui</span>
    <span><span class="cn-cue">(italic)</span> = ton / ce faci</span>
    <span><span class="cn-pause">⏸ pauză</span> = taci</span>
    <span><span class="cn-fill">[…]</span> = completezi · A / B = alegi</span>
  </div>

  <div class="cn-box">

    <p class="cn-line"><span class="cn-role">Agent:</span> Te-am auzit spunând că… <span class="cn-fill">[descrie problema pe care o simți că e cea mai mare pentru el]</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Da…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> E o problemă care te <strong>macină</strong> și vrei într-adevăr să-i găsești rezolvare — sau poți trăi cu ea? <span class="cn-pause">⏸ taci — lasă-l pe el să răspundă</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Mă macină și vreau să găsesc rezolvare…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> <span class="cn-fill">[Nume]</span>… de curiozitate te întreb: dacă ar exista o posibilă soluție la <span class="cn-fill">[descrie problema]</span>… ai fi deschis s-o analizezi — sau ai refuza-o complet… pentru că vine de la mine? 😊</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Depinde despre ce e vorba…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> <span class="cn-fill">[Nume]</span>… știm amândoi că oamenii sunt reticenți, suspicioși, când un prieten le prezintă ceva. Și trebuie s-o recunoaștem. <span class="cn-pause">⏸ taci 2 secunde</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Așa este…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Astăzi n-o să-ți spun clasicul „trebuie neapărat să vezi asta! E minunea lumii, n-ai mai întâlnit așa ceva…" <span class="cn-cue">(râzând ușor)</span> <span class="cn-pause">⏸ pauză scurtă</span> Aș fi prea clasic… și nu risc prietenia noastră… pe un produs.</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> <span class="cn-cue">(râde)</span></p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Eu o să vorbesc deschis, ca un adevărat prezentator <span class="cn-cue">(cu zâmbet 😊)</span>… tu analizezi sceptic, pui întrebări, ne distrăm… iar la final cel mai important rămâne tot <strong>prietenia noastră</strong>. E ok așa?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> DA…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Produsul / afacerea <span class="cn-cue">(alegi una, după ce prezinți)</span> pe care urmează s-o vezi e ceva ce am <strong>testat și verificat</strong> în <span class="cn-fill">[descrie condițiile tale — transmite încredere și credibilitate]</span>.</p>

    <p class="cn-line">Și motivul principal care mă determină să vorbesc despre el în fața ta este <strong>încrederea pe care o am</strong>.</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> La fel cum m-a ajutat pe mine în <span class="cn-fill">[X — situația ta]</span>… <span class="cn-pause">⏸ pauză scurtă</span> posibil… să fie o soluție și pentru tine în <span class="cn-fill">[Y — situația / dorința pe care tocmai ți-a spus-o]</span>.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ pauză scurtă</span></p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Ca orice produs, are un cost. <span class="cn-cue">(fără cifră acum — suma vine în prezentare)</span> Dacă vezi valoare în el, rămânem prieteni. Dacă nu vezi valoare în el, la fel rămânem prieteni. 😊</p>

    <span class="cn-zone">✅ Aici se încheie Conectarea. De aici începe Prezentarea unu-la-unu.</span>

  </div>

  <div class="cn-foot">Harvard of Sales · Modul Conectare (1 la 1)</div>
`;

// ---- MODUL: INVITAȚIA-FULGER — partea premium (dialog + obiecție + psihologie) ----
// Aliniat pe index cu FULGER_INVITATII din index.html (id 1..4, aceeași ordine).
const fulger = [
  {
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

// ---- MODUL: PREZENTARE (1 la 1) — HTML injectat în #prezentare-content · gated LEADER ----
const prezentare = `
  <div class="cn-title-block">
    <h1 class="cn-h1">Prezentarea 1 la 1</h1>
    <div class="cn-subtitle">dialog, nu monolog</div>
  </div>
  <p class="cn-lead">Prezentarea 1 la 1 trebuie să fie un <b>dialog</b>, nu un monolog. Doar așa ai atenția clientului 100%.</p>
  <p class="cn-lead">Greșeala pe care mulți o fac: prezintă fără să adreseze întrebări de calitate — întrebări care îl ajută pe client să <b>conștientizeze</b> valoarea produsului.</p>

  <div class="cn-precond"><b>⚠️ De ce contează:</b> clientul cumpără doar beneficiile pe care și le amintește. Dacă tu prezinți și el ascultă pasiv, mintea lui nu reține nimic — la final <b>nu are cum</b> să justifice cumpărarea și primești „mai mă gândesc", „nu am timp", „trebuie să vorbesc cu partenerul". Un DA smuls e un DA fals.</div>

  <div class="cn-sec">Cum fixezi beneficiile în mintea lui</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Prin întrebări deschise, nu doar prin prezentare</div>
      <div class="cn-rd">
        <p>Fixezi avantajele nu turnând informație, ci punând întrebări la care <b>el</b> trebuie să gândească răspunsul. Mintea reține ce produce singură, nu ce aude.</p>
        <p>În plus, întrebările deschise îți arată <b>cum gândește</b> clientul — deci știi pe ce construiești închiderea.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Folosește întrebări deschise: Cum / Ce / Care / Cine</div>
      <div class="cn-rd">
        <p>Întrebările deschise generează un răspuns detaliat, care îți arată cum gândește clientul.</p>
        <p><b>Evită „De ce…?"</b> — sună a interogatoriu și îl pune în defensivă.</p>
        <p><b>Evită „Oare…?"</b> — sună retoric și vag.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Interzise: întrebările închise și cele-capcană</div>
      <div class="cn-rd">
        <p><b>Închisă</b> = răspuns da/nu (ex: „Ți-ar plăcea să economisești la vacanțe?"). Nu-ți spune nimic despre cum gândește.</p>
        <p><b>Capcană (leading)</b> = închisă + îi bagi tu răspunsul în gură (ex: „Nu-i așa că prietenii tăi ar vrea asta?"). Se simte manipulat și se închide.</p>
        <div class="cn-ban">
          <div class="cn-ban-label">De ce sunt periculoase</div>
          <ul>
            <li>Oamenii urăsc să spună DA forțat</li>
            <li>Clientul se simte manipulat și se închide</li>
            <li>Tu crezi că ai obținut un DA — dar e fals, l-ai obligat</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Tonalitatea face diferența</div>
      <div class="cn-rd">
        <p>Aceeași întrebare sună a interogatoriu sau a curiozitate caldă doar din ton.</p>
        <p>Ton <b>descendent</b> la final (ancheta urcă), ritm lent, zâmbet în glas 😊 — apoi <b>taci</b>. El vorbește primul.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Cadență: fără interogatoriu</div>
      <div class="cn-rd">
        <p>Alege <b>3–4 întrebări la partea de produs</b> și <b>3–4 la partea de afacere</b>.</p>
        <p>Distribuie-le pe parcurs — una după fiecare beneficiu, cu tăcere după — <b>niciodată în rafală</b>. Altfel clientul se simte la interogatoriu.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">6</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Notează-i răspunsurile</div>
      <div class="cn-rd">
        <p>Mental sau în scris. Cuvintele pe care ți le dă acum sunt muniția ta — le folosești la <b>închidere</b> (modul separat).</p>
      </div>
    </div>
  </div>

  <div class="cn-sec">Banca de întrebări</div>
  <p class="cn-lead">Alege 3–4 din fiecare zonă. E un meniu, nu o listă de bifat.</p>

  <div class="cn-box">

    <span class="cn-zone">🛍️ Partea de produs</span>

    <p class="cn-line"><span class="cn-role">Pentru el:</span></p>
    <p class="cn-line cn-gap">„Care ar fi beneficiile pe care tu personal le-ai avea folosind X?"</p>
    <p class="cn-line cn-gap">„Cum te-ar putea ajuta acest produs în viața ta?"</p>
    <p class="cn-line cn-gap">„Ce anume te-ar face să spui că un produs chiar și-a meritat banii?"</p>
    <p class="cn-line cn-gap">„Cum ar arăta o zi de-a ta în care <span class="cn-fill">[problema pe care o rezolvă produsul]</span> n-ar mai fi o grijă?"</p>
    <p class="cn-line cn-gap">„Care ar fi primul lucru pe care l-ai simți diferit după câteva săptămâni în care îl folosești?"</p>
    <p class="cn-line cn-gap">„Ce ar însemna pentru tine să rezolvi asta și să nu te mai gândești la ea?"</p>

    <p class="cn-line"><span class="cn-role">Dincolo de el:</span></p>
    <p class="cn-line cn-gap">„În afară de tine, cine s-ar mai bucura de calitatea acestui produs / serviciu?"</p>
    <p class="cn-line cn-gap">„În afară de tine, cine s-ar mai putea bucura de avantajele X, Y, Z?"</p>
    <p class="cn-line cn-gap">„Cine din jurul tău ar observa primul schimbarea la tine?"</p>
    <p class="cn-line cn-gap">„Cum ți s-ar părea să oferi mai departe ceva care pe tine te-a ajutat?"</p>

    <span class="cn-zone">💼 Partea de afacere</span>

    <p class="cn-line"><span class="cn-role">Pentru el:</span></p>
    <p class="cn-line cn-gap">„Cum te-ar putea ajuta un venit extra de 500–1.000 Eur lunar, dezvoltând part-time acest proiect?"</p>
    <p class="cn-line cn-gap">„Care sunt lucrurile pe care le-ai face cu un venit extra de 500–1.000 Eur lunar?"</p>
    <p class="cn-line cn-gap">„Ce ar schimba concret în viața ta un venit extra de 500–1.000 Eur lunar, part-time?"</p>
    <p class="cn-line cn-gap">„Ce ți-ar plăcea să faci mai mult, dacă timpul și banii n-ar mai fi problema?"</p>

    <p class="cn-line"><span class="cn-role">Dincolo de el:</span></p>
    <p class="cn-line cn-gap">„Cine s-ar mai bucura de un venit lunar de 500–1.000 Eur extra pe care tu l-ai produce în familia ta?"</p>
    <p class="cn-line cn-gap">„Cine din familia ta ar simți cel mai mult diferența acestui venit?"</p>
    <p class="cn-line cn-gap">„În afară de tine, cine ar mai avea de câștigat dacă ai construi proiectul ăsta?"</p>
    <p class="cn-line cn-gap">„Cum ar fi să construiești ceva al tău, în ritmul tău, fără să renunți la ce ai acum?"</p>

  </div>

  <div class="cn-precond" style="margin-top:18px"><b>📍 Doar pentru prezentarea 1 la 1.</b> Prezentarea de grup funcționează diferit și e tratată separat.</div>

  <div class="cn-foot">Harvard of Sales · Modul Prezentare (1 la 1)</div>
`;


// ---- MODUL: ÎNCHIDERE (1 la 1) — HTML injectat în #inchidere-content · gated LEADER ----
const inchidere = `
  <div class="cn-title-block">
    <h1 class="cn-h1">Închiderea</h1>
    <div class="cn-subtitle">începe cu conectarea</div>
  </div>
  <p class="cn-lead">Tot ce faci <b>înainte</b> de închidere contează — e 90% din închidere. Dacă până aici ai făcut treaba bine, închiderea e ușoară. Dacă nu, te chinui.</p>

  <div class="cn-sec">Când închiderea devine ușoară</div>
  <p class="cn-lead">Închiderea e ușoară doar dacă ai reușit, în etapele de dinainte, să:</p>
  <div class="cn-rule">
    <div class="cn-rule-num">✓</div>
    <div class="cn-rule-txt">
      <div class="cn-rd">
        <p>te conectezi cu clientul și îl faci să se simtă relaxat — doar așa îți acceptă informațiile;</p>
        <p>afli <b>ce îl doare</b> și <b>ce îi place</b>;</p>
        <p>îi prezinți produsul fix pe nevoia LUI, nu pe a ta;</p>
        <p>faci o prezentare <b>dialog, nu monolog</b>, prin care el conștientizează singur beneficiile.</p>
        <p class="cn-note">Poți folosi cele mai bune întrebări de closing — dacă cele de mai sus nu sunt aliniate, obții cel mult un DA de moment, la care renunță imediat.</p>
      </div>
    </div>
  </div>

  <div class="cn-block">
    <div class="cn-block-h">Cel mai bun closer NU poate închide cât timp clientul:</div>
    <ul>
      <li>nu are încredere în prezentator;</li>
      <li>nu conștientizează beneficiile;</li>
      <li>nu simte că produsul / ideea de afacere îi rezolvă problema ACUM sau cât mai curând;</li>
      <li>nu crede că el poate să dezvolte;</li>
      <li>nu vede că riscul lui este <b>zero</b>;</li>
      <li>nu realizează că NU are nimic de pierdut.</li>
    </ul>
  </div>

  <div class="cn-sec">Formula unei vânzări de succes</div>
  <p class="cn-lead">Tot ce faci în închidere urmărește să maximizezi ce vede clientul că are de câștigat și să minimizezi ce simte că îl costă — până când riscul devine zero.</p>
  <div class="if-wrap">
    <div class="if-gl if-max">▲ Maximizezi</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Dream outcome al clientului</div><div class="val">Important</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Percepția probabilității de realizare</div><div class="val">Foarte mare</div></div>
    </div>
    <div class="if-bar"></div>
    <div class="if-gl if-min">▼ Minimizezi</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Timp până la rezultat</div><div class="val">Se întâmplă rapid</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Efort &amp; sacrificii</div><div class="val">Mici</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Frică / teamă</div><div class="val">Mică</div></div>
    </div>
    <div class="if-op">×</div>
    <div class="if-risk-wrap"><div class="if-risk">Risc zero</div></div>
    <div class="if-op">=</div>
    <div class="if-result"><div class="rl">Rezultat</div><div class="rv">Client recrutat</div></div>
  </div>

  <div class="cn-sec">Reguli de aur ale închiderii</div>
  <p class="cn-lead">Cuvintele le ai mai jos. Ce face diferența la închidere e <b>cum</b> le livrezi.</p>
  <div class="cn-golden">
    <div class="cn-gt">Cum livrezi — 6 reguli</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Tăcerea e unealta #1 &nbsp;⏸</div><div class="cn-gbody">După fiecare întrebare — mai ales cea de decizie — taci 5–6 secunde. Cine vorbește primul doar ca să spargă liniștea, pierde.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Ton descendent, nu urcat &nbsp;🔽</div><div class="cn-gbody">Coboară tonul la final de frază — calm, aproape detașat. Vocea grăbită sau care urcă strigă „am nevoie de vânzarea asta", iar clientul se apără instinctiv.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Încetinește &nbsp;🐢</div><div class="cn-gbody">Nervozitatea = vorbit repede. Deliberat rar, cu pauze și <em>între</em> fraze, nu doar după întrebări. Ritmul lent transmite control și siguranță.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Stare de abundență / detașare</div><div class="cn-gbody">Fii sincer ok cu un „nu". „Dacă vezi valoare, rămânem prieteni; dacă nu, la fel" — spune-o <b>crezând-o</b>. Dacă ești agățat de „da", clientul miroase agățarea.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">5 · Nu salva, nu adăuga</div><div class="cn-gbody">După „te las pe tine să decizi" — zero cuvinte în plus. Nevoia de a mai arunca un beneficiu „ca să ajuți" ucide momentul. Cel mai greu lucru la închidere e să nu mai spui nimic.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">6 · Zâmbet calibrat &nbsp;😊</div><div class="cn-gbody">Cald pe replicile de rapport și pe glumă; dar pe întrebarea de decizie — ton neutru, calm. Un zâmbet larg pe „i-ai da o șansă?" sună a vânzare, nu a curiozitate sinceră.</div></div>
  </div>
  <div class="cn-legend">
    <span><span class="cn-pause">⏸</span> taci</span>
    <span><span class="cn-cue">😊</span> zâmbet în glas</span>
    <span><span class="cn-cue">🔽</span> coboară tonul</span>
    <span><span class="cn-cue">🐢</span> rar, fără grabă</span>
  </div>

  <div class="cn-sec">Etapele închiderii</div>
  <p class="cn-lead">Trei etape, cu întrebările psihologice pe care le adresezi în fiecare.</p>

  <!-- ETAPA 1 -->
  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Recapitularea beneficiilor</div>
      <div class="cn-rd">
        <p>Aici folosește <b>o foaie și un pix</b>. De ce? Ca să-ți ajuți clientul să-și <b>vadă</b> beneficiile, nu doar să le audă — le integrează prin două simțuri, vizual și auditiv.</p>
        <p>La final îi e mult mai ușor să vadă decât să-și amintească din memorie. Îți ușurezi munca și îi ușurezi efortul.</p>
        <p class="cn-note">Enumeri beneficiile pe care ți le-a spus <b>EL</b> în timpul prezentării-dialog — nu ale tale.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-cue">🐢 rar, cald</span> <span class="cn-role">Agent:</span> Acum că ai tot „tabloul", e ok și pentru tine să facem o mică recapitulare a beneficiilor — și dacă aceste beneficii ți-ar rezolva problema? Altfel n-ar avea sens…</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Da…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Consideri că ar fi cea mai bună metodă de a decide dacă produsul ți se potrivește sau nu?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Da… sunt de acord.</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Ai avea o altă propunere, sau așa iei și tu deciziile de da sau nu?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> La fel fac și eu…</p>

    <span class="cn-zone">Și începi să enumeri beneficiile pe care el ți le-a specificat în prezentare</span>

    <p class="cn-line"><span class="cn-role">Agent:</span> Mi-ai spus că <span class="cn-fill">[X — beneficiul pe care l-a numit el]</span>… ar putea fi o soluție pentru tine. <span class="cn-pause">⏸ TACI</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Da… așa este…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Mi-ai spus că <span class="cn-fill">[Y — alt beneficiu al lui]</span>… ar putea fi o soluție pentru tine. <span class="cn-pause">⏸ TACI</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Da… așa este…</p>
  </div>

  <!-- ETAPA 2 -->
  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Evaluarea riscurilor</div>
      <div class="cn-rd">
        <p>Agenții MLM se tem de această etapă. Tocmai ea însă <b>relaxează</b> clientul și elimină obiecțiile de final: „mă mai gândesc", „trebuie să vorbesc cu partenerul".</p>
        <p>Clientul înțelege că ești vulnerabil și nu vorbești doar de beneficii, cum fac 99% din clasicii de MLM.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agent:</span> Acum că știm beneficiile, cred că e important să vorbim și despre riscuri. Eu personal iau decizii când pun în balanță câștiguri versus riscuri. <span class="cn-cue">(zâmbet 😊)</span> Te-ar ajuta și pe tine să ai o imagine mai clară la final?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Da… e ok… la fel fac și eu.</p>
  </div>
  <div class="cn-golden">
    <div class="cn-gt">Cele 4 riscuri de dezamorsat</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Risc financiar</div><div class="cn-gbody">Nu pierde bani cumpărând produsul — sau suma investită e foarte mică față de ce poate obține.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Risc de efort</div><div class="cn-gbody">Efortul de a dezvolta afacerea este mic.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Risc de timp</div><div class="cn-gbody">Nu pierde timp ca la final să nu aibă niciun rezultat.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Risc de imagine</div><div class="cn-gbody">Reprezintă o companie serioasă și un produs bun — imaginea lui nu are de suferit în fața prietenilor.</div></div>
  </div>
  <p class="cn-note" style="margin-top:12px"><em>Aici nu există un script fix Agent–Client: sunt mii de produse în piața MLM. Adaptezi cele 4 riscuri la produsul / serviciul tău concret.</em></p>

  <!-- ETAPA 3 -->
  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Colectarea deciziei fără presiune</div>
      <div class="cn-rd">
        <p>Îl aduci în postura în care decide singur — ca la raft — fără să simtă că e împins.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agent:</span> Și eu, și tu cumpărăm produse <span class="cn-cue">(de sănătate, curățenie, îngrijire, vacanțe — numești produsul tău)</span> în mod regulat. <span class="cn-pause">⏸ Taci</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Așa este…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Ne ducem la raft sau intrăm online și ne alegem produsul. Ne interesăm singuri dacă e bun și nu ne place să fim presați să cumpărăm. <span class="cn-pause">⏸ TACI</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Așa este…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Și acum întrebarea sinceră: dacă ai fi văzut acest produs, care poate rezolva <span class="cn-fill">[X — ce a precizat el]</span>, i-ai da o șansă sau l-ai neglija total? <span class="cn-cue">🔽 ton neutru, jos</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Cred că i-aș da o șansă…</p>

    <p class="cn-line"><span class="cn-cue">🐢🔽</span> <span class="cn-role">Agent:</span> Nu pot să te întreb dacă cumperi — instinctul natural al omului la o astfel de întrebare e să refuze. Inclusiv al meu… <span class="cn-pause">⏸ Taci</span> Te las pe tine, ca și cum ai fi singur la raft, să decizi, fără să mai adaug nimic.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ TACI · TACI · TACI — acesta e momentul în care taci</span></p>
    <p class="cn-line" style="text-align:center;color:#6b6f79;font-size:14px"><em>Creierul are nevoie de 5–6 secunde ca să răspundă la o întrebare care cere gândire. NU umple pauza.</em></p>
  </div>

  <div class="cn-golden" style="margin-top:26px">
    <div class="cn-gt">Rezultatul, dacă ai făcut toți pașii</div>
    <div class="cn-gbody" style="line-height:1.85">Dacă ai parcurs corect, conform MLM Psychology, <b>Conectarea</b>, <b>Prezentarea</b> și <b>Închiderea</b>, șansele de a închide cresc spre <b>80%</b>. 8 din 10 invitați pot deveni fie consumatori, fie ambasadori ai afacerii tale.<br><br>Foarte rar apar obiecții — iar când apar, le tratezi separat.</div>
  </div>

  <div class="cn-foot">Harvard of Sales · Modul Închidere</div>
`;

module.exports = { conectare, fulger, prezentare, inchidere };
