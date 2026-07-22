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

// ============================================
// VERSIONI IN ITALIANO (servite pentru userii IT prin ?lang=it)
// ============================================

const conectare_it = `
  <div class="cn-title-block">
    <h1 class="cn-h1">La connessione</h1>
    <div class="cn-subtitle">prima della presentazione 1 a 1</div>
  </div>
  <p class="cn-lead">Prima di qualsiasi presentazione serve la <b>connessione</b>.</p>
  <p class="cn-lead">La connessione ti crea la «mappa» del cliente: <b>cosa gli fa male</b> e <b>cosa lo rende felice</b>. Senza mappa, presenti a vuoto.</p>

  <div class="cn-sec">Regole di performance prima della connessione</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Mettiti in stato ottimale di performance</div>
      <div class="cn-rd">
        <p>Il cervello in uno stato positivo lavora fino al <b>31% meglio</b> rispetto a uno neutro o stressato <em>(Shawn Achor, The Happiness Advantage)</em>.</p>
        <p>Prima di entrare nella connessione, fai <b>60 secondi</b> di movimento energico — ridi, balla, salta.</p>
        <p>Non è un capriccio: il tuo stato si trasmette al cliente nei primi secondi, prima di ogni parola. Entri dall’abbondanza, non dal bisogno di convincere.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Alla presentazione di gruppo — connettiti 10–15 minuti prima</div>
      <div class="cn-rd">
        <p>Non buttarlo direttamente nell’incontro di gruppo — rischi di «scottarlo» 😊.</p>
        <p>La persona ha bisogno di un ponte caldo, uno-a-uno, prima di entrare tra estranei.</p>
        <p class="cn-note"><em>(Questa regola prepara la variante di gruppo dello script — modulo separato.)</em></p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Costruisci la mappa del cliente</div>
      <div class="cn-rd">
        <p>Prima di presentare, ti serve una «mappa» della persona che hai davanti.</p>
        <p>Sulla mappa ci sono due cose: <b>cosa gli fa male</b> e <b>cosa lo rende felice</b>.</p>
        <p>Su questo costruisci tutta la presentazione. Senza, presenti al buio.</p>
        <p>Faccia a faccia la tieni a mente. Online — <b>scrivi su un foglio</b>.</p>
        <p class="cn-note">Ma la mappa non appare dal nulla: la disegni <b>facendo domande</b>. Come? 👉 punto 4.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Le domande che ti costruiscono la mappa</div>
      <div class="cn-rd">
        <p>La mappa del punto 3 la disegni con le <b>domande</b>.</p>
        <p>La cosa più importante da scoprire è <span class="cn-big">cosa gli fa male</span> ora, nella sua vita.</p>
        <p>Il dolore è il motivatore numero uno: in ~75% dei casi agiamo per <em>liberarci</em> di un dolore — e solo in ~25% per <em>ottenere</em> un piacere.</p>
        <p>Le persone cercano prima soluzioni ai problemi, poi il piacere.</p>
        <p>Quindi chiedi prima cosa lo pesa. Cosa lo renderebbe felice viene al secondo posto.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">La presentazione 1 a 1 NON è uguale per tutti</div>
      <div class="cn-rd">
        <p>Presenti il prodotto / l’attività come una <b>possibile soluzione</b> al SUO dolore, con le sue parole.</p>
        <p>Stesso prodotto, porta d’ingresso diversa per ogni persona.</p>
      </div>
    </div>
  </div>

  <div class="cn-golden">
    <div class="cn-gt">Regole d’oro dello script</div>

    <div class="cn-gitem">
      <div class="cn-ghead">1 · La tonalità fa la differenza</div>
      <div class="cn-gbody">Non conta solo COSA dici, ma <b>come</b> lo dici. Sorriso nella voce, pause vere (non affrettate), tono calmo sulla domanda difficile, tono giocoso sulla battuta. Le stesse parole dette meccanicamente accendono il radar; dette con calore, disarmano. Il cliente sente dal tono se ti importa davvero o stai solo recitando.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">2 · Non fingere di essere uguale a lui</div>
      <div class="cn-gbody">Non puoi essere nei panni di un altro. Di’ solo ciò che è capitato a <b>te</b>. È lui a capire da solo se ti somiglia.
        <div class="cn-ban">
          <div class="cn-ban-label">Frasi classiche da MLM — non dirle mai</div>
          <ul>
            <li>«anch’io ero nella stessa situazione»</li>
            <li>«so esattamente com’è»</li>
            <li>«devi assolutamente vedere questa cosa»</li>
            <li>«ho pensato a te quando ho visto il progetto»</li>
            <li>«ti piacerà tantissimo»</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">3 · Il silenzio</div>
      <div class="cn-gbody">Dopo aver chiesto qualcosa, taci. Anche se c’è silenzio e ti sembra lungo. Aspetta — <b>parla lui per primo</b>. Chi parla per primo solo per non stare in silenzio, perde.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">4 · Segui lo script passo dopo passo</div>
      <div class="cn-gbody">Di’ le parole esattamente come sono scritte. <b>Non cambiarle.</b> E <b>non cambiare l’ordine delle domande.</b> Ogni parola e ogni domanda stanno in un certo ordine per un motivo — se le sposti, si rovina tutto l’effetto.</div>
    </div>

  </div>

  <div class="cn-sec">Lo script di connessione (1 a 1)</div>

  <div class="cn-precond"><b>⚠️ Questo script inizia SOLO dopo aver già identificato i problemi del cliente.</b><br>Prima ti connetti e scopri cosa gli fa male (le regole sopra). Solo quando conosci il suo dolore, entri nel dialogo qui sotto.</div>

  <div class="cn-legend">
    <span><span class="cn-lgchip">Aa</span> cosa dici</span>
    <span><span class="cn-cue">(corsivo)</span> = tono / cosa fai</span>
    <span><span class="cn-pause">⏸ pausa</span> = taci</span>
    <span><span class="cn-fill">[…]</span> = completi · A / B = scegli</span>
  </div>

  <div class="cn-box">

    <p class="cn-line"><span class="cn-role">Agente:</span> Ti ho sentito dire che… <span class="cn-fill">[descrivi il problema che senti sia il più grande per lui]</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sì…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> È un problema che ti <strong>tormenta</strong> e vuoi davvero trovargli una soluzione — oppure puoi conviverci? <span class="cn-pause">⏸ taci — lascia rispondere lui</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Mi tormenta e voglio trovare una soluzione…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> <span class="cn-fill">[Nome]</span>… per curiosità ti chiedo: se esistesse una possibile soluzione a <span class="cn-fill">[descrivi il problema]</span>… saresti aperto ad analizzarla — o la rifiuteresti del tutto… perché viene da me? 😊</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Dipende di cosa si tratta…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> <span class="cn-fill">[Nome]</span>… sappiamo entrambi che le persone sono restie, sospettose, quando un amico presenta loro qualcosa. E dobbiamo ammetterlo. <span class="cn-pause">⏸ taci 2 secondi</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> È così…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Oggi non ti dirò il classico «devi assolutamente vedere questa cosa! È la meraviglia del mondo, non hai mai visto niente di simile…» <span class="cn-cue">(ridendo leggermente)</span> <span class="cn-pause">⏸ pausa breve</span> Sarei troppo classico… e non rischio la nostra amicizia… per un prodotto.</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> <span class="cn-cue">(ride)</span></p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Io parlerò apertamente, come un vero presentatore <span class="cn-cue">(col sorriso 😊)</span>… tu analizzi con scetticismo, fai domande, ci divertiamo… e alla fine la cosa più importante resta comunque la <strong>nostra amicizia</strong>. Va bene così?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> SÌ…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Il prodotto / l’attività <span class="cn-cue">(scegline uno, dopo che presenti)</span> che stai per vedere è qualcosa che ho <strong>testato e verificato</strong> in <span class="cn-fill">[descrivi le tue condizioni — trasmetti fiducia e credibilità]</span>.</p>

    <p class="cn-line">E il motivo principale che mi spinge a parlarne davanti a te è la <strong>fiducia che ho</strong>.</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Così come ha aiutato me in <span class="cn-fill">[X — la tua situazione]</span>… <span class="cn-pause">⏸ pausa breve</span> è possibile… che sia una soluzione anche per te in <span class="cn-fill">[Y — la situazione / il desiderio che ti ha appena detto]</span>.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ pausa breve</span></p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Come ogni prodotto, ha un costo. <span class="cn-cue">(senza cifra ora — la somma arriva nella presentazione)</span> Se ci vedi valore, restiamo amici. Se non ci vedi valore, restiamo amici lo stesso. 😊</p>

    <span class="cn-zone">✅ Qui finisce la Connessione. Da qui inizia la Presentazione uno-a-uno.</span>

  </div>

  <div class="cn-foot">Harvard of Sales · Modulo Connessione (1 a 1)</div>
`;

const fulger_it = [
  {
    dialog: [
      { vorbitor: "agent",  text: "Ciao, George… Avevo davvero paura di chiamarti." },
      { regie: "pausa drammatica" },
      { vorbitor: "client", text: "Perché… cosa è successo?" },
      { vorbitor: "agent",  text: "Volevo invitarti a un caffè e temevo che mi avresti rifiutato." },
      { regie: "col sorriso nella voce" },
      { vorbitor: "client", text: "Come potrei rifiutarti… Dove ci vediamo?" },
      { vorbitor: "agent",  text: "Martedì alle ___ o mercoledì alle ___ — quale ti va meglio? Dai, mi manca parlare con te…" },
      { regie: "gli dai due opzioni concrete di giorno/ora" }
    ],
    obiectie: {
      titlu: "Se ti chiede «di cosa vuoi parlare?»",
      dialog: [
        { vorbitor: "client", text: "Di cosa vuoi parlare?" },
        { vorbitor: "agent",  text: "Se ti dicessi che è una sorpresa, insisteresti con le domande o mi lasceresti questa gioia?" },
        { vorbitor: "client", text: "No… non voglio rovinarti la sorpresa. Perfetto, ci vediamo martedì alle ___." }
      ]
    },
    psihologie: [
      "La vulnerabilità confessata lo toglie dal ruolo di bersaglio e lo mette in quello di protettore — non ha più da cosa difendersi.",
      "La pausa drammatica sposta il controllo attraverso il silenzio: è lui a chiedere «cosa è successo?», quindi è lui a portare verso l’incontro, non tu.",
      "La «sorpresa» chiude il cerchio senza pronunciare mai la parola MLM — la curiosità prende il posto dell’argomento."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Ciao, George… Sono 3 ore che penso di invitarti a un caffè e avevo davvero paura che mi avresti rifiutato." },
      { regie: "pausa drammatica" },
      { vorbitor: "client", text: "Come potrei rifiutarti…?" },
      { vorbitor: "agent",  text: "Martedì alle ___ o mercoledì alle ___ — quale ti va meglio? Dai, mi manca parlare con te…" },
      { regie: "gli dai due opzioni concrete di giorno/ora" }
    ],
    obiectie: {
      titlu: "Se ti chiede «di cosa vuoi parlare?»",
      dialog: [
        { vorbitor: "client", text: "Di cosa vuoi parlare?" },
        { vorbitor: "agent",  text: "Se ti dicessi che è una sorpresa, insisteresti con le domande o mi lasceresti questa gioia?" },
        { vorbitor: "client", text: "No… non voglio rovinarti la sorpresa. Perfetto, ci vediamo martedì alle ___." }
      ]
    },
    psihologie: [
      "«Sono 3 ore che penso di chiamarti» = segnale di investimento emotivo: gli dici, senza chiederlo, che la chiamata conta, non è casuale. Aumenta il valore dell’invito.",
      "Togli il passaggio intermedio della variante 1 — stesso effetto di disarmo, ma più rapido, con meno spazio per la resistenza.",
      "La chiusura «martedì o mercoledì?» sposta la decisione da SE a QUANDO. Non sceglie più tra «sì» e «no», ma tra due giorni."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Ciao, [nome]… Credo che l’ultima cosa che volevi sentire oggi sia un invito a un caffè…" },
      { regie: "col sorriso nella voce" },
      { vorbitor: "client", text: "Era proprio ciò di cui avevo bisogno… Quando ci vediamo?" },
      { vorbitor: "agent",  text: "Martedì alle ___ o mercoledì alle ___ — dai, mi manca parlare con te…" },
      { vorbitor: "client", text: "Perfetto, ci vediamo alle ___." },
      { vorbitor: "agent",  text: "Che rapidi siamo stati… mi piace di noi. Ci vediamo [giorno]." },
      { regie: "chiudi qui la conversazione — così non fa in tempo a chiedere di cosa si tratta" }
    ],
    obiectie: null,
    psihologie: [
      "Nomini tu la sua resistenza prima che la senta lui («l’ultima cosa che volevi sentire») — disinneschi l’obiezione prima che esista.",
      "L’auto-ironia leggera abbassa la posta: se tu non prendi le cose sul serio, nemmeno lui sente pressione, quindi non ha nulla da rifiutare.",
      "«Che rapidi siamo stati… mi piace di noi» àncora positivamente sul «noi» e ti dà la scusa naturale per chiudere prima del «di cosa si tratta?». La regia «devo chiudere» è disciplina, non fretta."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Ti ho chiamato per dirti che ho preso una decisione molto importante." },
      { vorbitor: "client", text: "Davvero… quale?" },
      { vorbitor: "agent",  text: "So che suona strano… ma la decisione importante è invitarti a un caffè." },
      { regie: "col sorriso nella voce" },
      { vorbitor: "client", text: "Questa sì che è una notizia… vuoi dirmi qualcosa?" },
      { vorbitor: "agent",  text: "Pensi che sarebbe un’idea del tutto sbagliata?" },
      { vorbitor: "client", text: "No…" },
      { vorbitor: "agent",  text: "Quale giorno ti andrebbe bene? O il weekend, che sei più libero?" },
      { vorbitor: "client", text: "Weekend…" },
      { vorbitor: "agent",  text: "La decisione importante è presa. Sabato o domenica?" },
      { regie: "col sorriso nella voce" },
      { vorbitor: "client", text: "Sabato, alle 12:00." },
      { vorbitor: "agent",  text: "Segnato… ci vediamo sabato col sorriso. Ora devo chiudere." }
    ],
    obiectie: null,
    psihologie: [
      "Suspense + anticlimax: «ho preso una decisione importante» apre il cerchio, «la decisione è invitarti a un caffè» lo chiude con umorismo. Tensione piacevole, zero pressione.",
      "«Pensi che sarebbe un’idea del tutto sbagliata?» è una domanda negativa: è molto più difficile dire «sì, è sbagliata» che «no». Sposti il suo cervello verso l’accettazione senza chiedere direttamente.",
      "Fai scegliere a lui il giorno («weekend, che sei più libero») — decisore attivo — poi chiudi con fermezza, col sorriso e «devo chiudere». La curiosità resta intatta per l’incontro."
    ]
  }
];

const prezentare_it = `
  <div class="cn-title-block">
    <h1 class="cn-h1">La presentazione 1 a 1</h1>
    <div class="cn-subtitle">dialogo, non monologo</div>
  </div>
  <p class="cn-lead">La presentazione 1 a 1 deve essere un <b>dialogo</b>, non un monologo. Solo così hai l’attenzione del cliente al 100%.</p>
  <p class="cn-lead">L’errore che molti fanno: presentano senza fare domande di qualità — domande che aiutano il cliente a <b>prendere coscienza</b> del valore del prodotto.</p>

  <div class="cn-precond"><b>⚠️ Perché conta:</b> il cliente compra solo i benefici che ricorda. Se tu presenti e lui ascolta passivamente, la sua mente non trattiene nulla — alla fine <b>non ha modo</b> di giustificare l’acquisto e ricevi «ci penso», «non ho tempo», «devo parlarne con il partner». Un SÌ strappato è un SÌ falso.</div>

  <div class="cn-sec">Come fissi i benefici nella sua mente</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Con domande aperte, non solo con la presentazione</div>
      <div class="cn-rd">
        <p>Fissi i vantaggi non riversando informazioni, ma ponendo domande a cui <b>lui</b> deve pensare la risposta. La mente trattiene ciò che produce da sola, non ciò che sente.</p>
        <p>In più, le domande aperte ti mostrano <b>come ragiona</b> il cliente — così sai su cosa costruire la chiusura.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Usa domande aperte: Come / Cosa / Quale / Chi</div>
      <div class="cn-rd">
        <p>Le domande aperte generano una risposta dettagliata, che ti mostra come ragiona il cliente.</p>
        <p><b>Evita «Perché…?»</b> — suona come un interrogatorio e lo mette sulla difensiva.</p>
        <p><b>Evita «Ma davvero…?»</b> — suona retorico e vago.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Vietate: le domande chiuse e quelle-trappola</div>
      <div class="cn-rd">
        <p><b>Chiusa</b> = risposta sì/no (es: «Ti piacerebbe risparmiare sulle vacanze?»). Non ti dice nulla su come ragiona.</p>
        <p><b>Trappola (leading)</b> = chiusa + gli metti tu la risposta in bocca (es: «Non è vero che i tuoi amici lo vorrebbero?»). Si sente manipolato e si chiude.</p>
        <div class="cn-ban">
          <div class="cn-ban-label">Perché sono pericolose</div>
          <ul>
            <li>Le persone odiano dire SÌ forzato</li>
            <li>Il cliente si sente manipolato e si chiude</li>
            <li>Tu credi di aver ottenuto un SÌ — ma è falso, l’hai obbligato</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">La tonalità fa la differenza</div>
      <div class="cn-rd">
        <p>La stessa domanda suona come un interrogatorio o come curiosità calda solo dal tono.</p>
        <p>Tono <b>discendente</b> alla fine (l’interrogatorio sale), ritmo lento, sorriso nella voce 😊 — poi <b>taci</b>. Parla lui per primo.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Cadenza: niente interrogatorio</div>
      <div class="cn-rd">
        <p>Scegli <b>3–4 domande sulla parte prodotto</b> e <b>3–4 sulla parte business</b>.</p>
        <p>Distribuiscile lungo il percorso — una dopo ogni beneficio, con silenzio dopo — <b>mai a raffica</b>. Altrimenti il cliente si sente sotto interrogatorio.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">6</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Annota le sue risposte</div>
      <div class="cn-rd">
        <p>A mente o per iscritto. Le parole che ti dà ora sono le tue munizioni — le usi alla <b>chiusura</b> (modulo separato).</p>
      </div>
    </div>
  </div>

  <div class="cn-sec">La banca di domande</div>
  <p class="cn-lead">Scegli 3–4 per ogni area. È un menu, non una lista da spuntare.</p>

  <div class="cn-box">

    <span class="cn-zone">🛍️ Parte prodotto</span>

    <p class="cn-line"><span class="cn-role">Per lui:</span></p>
    <p class="cn-line cn-gap">«Quali sarebbero i benefici che tu personalmente avresti usando X?»</p>
    <p class="cn-line cn-gap">«Come potrebbe aiutarti questo prodotto nella tua vita?»</p>
    <p class="cn-line cn-gap">«Cosa ti farebbe dire che un prodotto ha davvero valso i suoi soldi?»</p>
    <p class="cn-line cn-gap">«Come sarebbe una tua giornata in cui <span class="cn-fill">[il problema che il prodotto risolve]</span> non fosse più un pensiero?»</p>
    <p class="cn-line cn-gap">«Quale sarebbe la prima cosa che sentiresti diversa dopo qualche settimana di utilizzo?»</p>
    <p class="cn-line cn-gap">«Cosa significherebbe per te risolvere questo e non pensarci più?»</p>

    <p class="cn-line"><span class="cn-role">Oltre a lui:</span></p>
    <p class="cn-line cn-gap">«Oltre a te, chi altro godrebbe della qualità di questo prodotto / servizio?»</p>
    <p class="cn-line cn-gap">«Oltre a te, chi altro potrebbe godere dei vantaggi X, Y, Z?»</p>
    <p class="cn-line cn-gap">«Chi intorno a te noterebbe per primo il cambiamento in te?»</p>
    <p class="cn-line cn-gap">«Come ti sembrerebbe offrire ad altri qualcosa che ha aiutato te?»</p>

    <span class="cn-zone">💼 Parte business</span>

    <p class="cn-line"><span class="cn-role">Per lui:</span></p>
    <p class="cn-line cn-gap">«Come potrebbe aiutarti un reddito extra di 500–1.000 Eur al mese, sviluppando part-time questo progetto?»</p>
    <p class="cn-line cn-gap">«Quali sono le cose che faresti con un reddito extra di 500–1.000 Eur al mese?»</p>
    <p class="cn-line cn-gap">«Cosa cambierebbe concretamente nella tua vita un reddito extra di 500–1.000 Eur al mese, part-time?»</p>
    <p class="cn-line cn-gap">«Cosa ti piacerebbe fare di più, se il tempo e i soldi non fossero più un problema?»</p>

    <p class="cn-line"><span class="cn-role">Oltre a lui:</span></p>
    <p class="cn-line cn-gap">«Chi altro godrebbe di un reddito mensile di 500–1.000 Eur extra che tu produrresti nella tua famiglia?»</p>
    <p class="cn-line cn-gap">«Chi nella tua famiglia sentirebbe di più la differenza di questo reddito?»</p>
    <p class="cn-line cn-gap">«Oltre a te, chi altro ci guadagnerebbe se costruissi questo progetto?»</p>
    <p class="cn-line cn-gap">«Come sarebbe costruire qualcosa di tuo, al tuo ritmo, senza rinunciare a ciò che hai ora?»</p>

  </div>

  <div class="cn-precond" style="margin-top:18px"><b>📍 Solo per la presentazione 1 a 1.</b> La presentazione di gruppo funziona diversamente ed è trattata separatamente.</div>

  <div class="cn-foot">Harvard of Sales · Modulo Presentazione (1 a 1)</div>
`;

const inchidere_it = `
  <div class="cn-title-block">
    <h1 class="cn-h1">La chiusura</h1>
    <div class="cn-subtitle">inizia con la connessione</div>
  </div>
  <p class="cn-lead">Tutto ciò che fai <b>prima</b> della chiusura conta — è il 90% della chiusura. Se fin qui hai fatto bene il lavoro, la chiusura è facile. Altrimenti, fatichi.</p>

  <div class="cn-sec">Quando la chiusura diventa facile</div>
  <p class="cn-lead">La chiusura è facile solo se sei riuscito, nelle fasi precedenti, a:</p>
  <div class="cn-rule">
    <div class="cn-rule-num">✓</div>
    <div class="cn-rule-txt">
      <div class="cn-rd">
        <p>connetterti con il cliente e farlo sentire rilassato — solo così accetta le tue informazioni;</p>
        <p>scoprire <b>cosa gli fa male</b> e <b>cosa gli piace</b>;</p>
        <p>presentargli il prodotto proprio sul SUO bisogno, non sul tuo;</p>
        <p>fare una presentazione <b>dialogo, non monologo</b>, con cui prende coscienza da solo dei benefici.</p>
        <p class="cn-note">Puoi usare le migliori domande di chiusura — se le cose sopra non sono allineate, ottieni al massimo un SÌ momentaneo, a cui rinuncia subito.</p>
      </div>
    </div>
  </div>

  <div class="cn-block">
    <div class="cn-block-h">Il miglior closer NON può chiudere finché il cliente:</div>
    <ul>
      <li>non ha fiducia nel presentatore;</li>
      <li>non prende coscienza dei benefici;</li>
      <li>non sente che il prodotto / l’idea di business gli risolve il problema ORA o il prima possibile;</li>
      <li>non crede di poterlo sviluppare;</li>
      <li>non vede che il suo rischio è <b>zero</b>;</li>
      <li>non capisce che NON ha nulla da perdere.</li>
    </ul>
  </div>

  <div class="cn-sec">La formula di una vendita di successo</div>
  <p class="cn-lead">Tutto ciò che fai in chiusura punta a massimizzare ciò che il cliente vede di guadagnare e a minimizzare ciò che sente di pagare — finché il rischio diventa zero.</p>
  <div class="if-wrap">
    <div class="if-gl if-max">▲ Massimizzi</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Dream outcome del cliente</div><div class="val">Importante</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Percezione della probabilità di riuscita</div><div class="val">Molto alta</div></div>
    </div>
    <div class="if-bar"></div>
    <div class="if-gl if-min">▼ Minimizzi</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Tempo fino al risultato</div><div class="val">Avviene in fretta</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Sforzo &amp; sacrifici</div><div class="val">Piccoli</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Paura / timore</div><div class="val">Piccola</div></div>
    </div>
    <div class="if-op">×</div>
    <div class="if-risk-wrap"><div class="if-risk">Rischio zero</div></div>
    <div class="if-op">=</div>
    <div class="if-result"><div class="rl">Risultato</div><div class="rv">Cliente reclutato</div></div>
  </div>

  <div class="cn-sec">Regole d’oro della chiusura</div>
  <p class="cn-lead">Le parole le hai qui sotto. Ciò che fa la differenza in chiusura è <b>come</b> le consegni.</p>
  <div class="cn-golden">
    <div class="cn-gt">Come consegni — 6 regole</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Il silenzio è lo strumento #1 &nbsp;⏸</div><div class="cn-gbody">Dopo ogni domanda — soprattutto quella di decisione — taci 5–6 secondi. Chi parla per primo solo per rompere il silenzio, perde.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Tono discendente, non ascendente &nbsp;🔽</div><div class="cn-gbody">Abbassa il tono a fine frase — calmo, quasi distaccato. Una voce affrettata o che sale grida «ho bisogno di questa vendita», e il cliente si difende d’istinto.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Rallenta &nbsp;🐢</div><div class="cn-gbody">Nervosismo = parlare veloce. Deliberatamente lento, con pause anche <em>tra</em> le frasi, non solo dopo le domande. Il ritmo lento trasmette controllo e sicurezza.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Stato di abbondanza / distacco</div><div class="cn-gbody">Sii sinceramente ok con un «no». «Se ci vedi valore, restiamo amici; se no, lo stesso» — dillo <b>credendoci</b>. Se sei attaccato al «sì», il cliente fiuta l’attaccamento.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">5 · Non salvare, non aggiungere</div><div class="cn-gbody">Dopo «lascio decidere a te» — zero parole in più. Il bisogno di buttare un altro beneficio «per aiutare» uccide il momento. La cosa più difficile in chiusura è non dire più nulla.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">6 · Sorriso calibrato &nbsp;😊</div><div class="cn-gbody">Caldo sulle battute di rapport e sulla battuta; ma sulla domanda di decisione — tono neutro, calmo. Un sorriso largo su «gli daresti una possibilità?» suona come vendita, non come curiosità sincera.</div></div>
  </div>
  <div class="cn-legend">
    <span><span class="cn-pause">⏸</span> taci</span>
    <span><span class="cn-cue">😊</span> sorriso nella voce</span>
    <span><span class="cn-cue">🔽</span> abbassa il tono</span>
    <span><span class="cn-cue">🐢</span> lento, senza fretta</span>
  </div>

  <div class="cn-sec">Le fasi della chiusura</div>
  <p class="cn-lead">Tre fasi, con le domande psicologiche che poni in ciascuna.</p>

  <!-- ETAPA 1 -->
  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Il riepilogo dei benefici</div>
      <div class="cn-rd">
        <p>Qui usa <b>un foglio e una penna</b>. Perché? Per aiutare il cliente a <b>vedere</b> i benefici, non solo a sentirli — li integra con due sensi, vista e udito.</p>
        <p>Alla fine gli è molto più facile vedere che ricordare a memoria. Ti semplifichi il lavoro e gli semplifichi lo sforzo.</p>
        <p class="cn-note">Elenchi i benefici che ti ha detto <b>LUI</b> durante la presentazione-dialogo — non i tuoi.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-cue">🐢 lento, caldo</span> <span class="cn-role">Agente:</span> Ora che hai tutto il «quadro», va bene anche per te fare un piccolo riepilogo dei benefici — e se questi benefici ti risolvessero il problema? Altrimenti non avrebbe senso…</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sì…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Ritieni che sarebbe il modo migliore per decidere se il prodotto ti si addice o no?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sì… sono d’accordo.</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Avresti un’altra proposta, o è così che prendi anche tu le decisioni di sì o no?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Faccio lo stesso anch’io…</p>

    <span class="cn-zone">E inizi a elencare i benefici che lui ti ha indicato nella presentazione</span>

    <p class="cn-line"><span class="cn-role">Agente:</span> Mi hai detto che <span class="cn-fill">[X — il beneficio che ha nominato lui]</span>… potrebbe essere una soluzione per te. <span class="cn-pause">⏸ TACI</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sì… è così…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Mi hai detto che <span class="cn-fill">[Y — un altro suo beneficio]</span>… potrebbe essere una soluzione per te. <span class="cn-pause">⏸ TACI</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sì… è così…</p>
  </div>

  <!-- ETAPA 2 -->
  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">La valutazione dei rischi</div>
      <div class="cn-rd">
        <p>Gli agenti MLM temono questa fase. Ma è proprio lei a <b>rilassare</b> il cliente e a eliminare le obiezioni finali: «ci penso», «devo parlarne con il partner».</p>
        <p>Il cliente capisce che sei vulnerabile e non parli solo di benefici, come fa il 99% dei classici dell’MLM.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agente:</span> Ora che conosciamo i benefici, credo sia importante parlare anche dei rischi. Io personalmente prendo decisioni quando metto sulla bilancia guadagni contro rischi. <span class="cn-cue">(sorriso 😊)</span> Aiuterebbe anche te avere un’immagine più chiara alla fine?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sì… va bene… faccio lo stesso anch’io.</p>
  </div>
  <div class="cn-golden">
    <div class="cn-gt">I 4 rischi da disinnescare</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Rischio finanziario</div><div class="cn-gbody">Non perde soldi comprando il prodotto — oppure la somma investita è molto piccola rispetto a ciò che può ottenere.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Rischio di sforzo</div><div class="cn-gbody">Lo sforzo per sviluppare l’attività è piccolo.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Rischio di tempo</div><div class="cn-gbody">Non perde tempo per ritrovarsi alla fine senza alcun risultato.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Rischio d’immagine</div><div class="cn-gbody">Rappresenta un’azienda seria e un buon prodotto — la sua immagine non ne risente davanti agli amici.</div></div>
  </div>
  <p class="cn-note" style="margin-top:12px"><em>Qui non esiste uno script fisso Agente–Cliente: ci sono migliaia di prodotti nel mercato MLM. Adatti i 4 rischi al tuo prodotto / servizio concreto.</em></p>

  <!-- ETAPA 3 -->
  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Raccogliere la decisione senza pressione</div>
      <div class="cn-rd">
        <p>Lo porti nella posizione in cui decide da solo — come allo scaffale — senza sentirsi spinto.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agente:</span> Sia io che te compriamo prodotti <span class="cn-cue">(di salute, pulizia, cura, vacanze — nomini il tuo prodotto)</span> in modo regolare. <span class="cn-pause">⏸ Taci</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> È così…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Andiamo allo scaffale o entriamo online e scegliamo il prodotto. Ci informiamo da soli se è buono e non ci piace essere pressati a comprare. <span class="cn-pause">⏸ TACI</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> È così…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> E ora la domanda sincera: se avessi visto questo prodotto, che può risolvere <span class="cn-fill">[X — ciò che ha precisato lui]</span>, gli daresti una possibilità o lo trascureresti del tutto? <span class="cn-cue">🔽 tono neutro, basso</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Credo che gli darei una possibilità…</p>

    <p class="cn-line"><span class="cn-cue">🐢🔽</span> <span class="cn-role">Agente:</span> Non posso chiederti se compri — l’istinto naturale della persona a una domanda del genere è rifiutare. Anche il mio… <span class="cn-pause">⏸ Taci</span> Lascio a te, come se fossi solo allo scaffale, la decisione, senza aggiungere altro.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ TACI · TACI · TACI — questo è il momento in cui taci</span></p>
    <p class="cn-line" style="text-align:center;color:#6b6f79;font-size:14px"><em>Il cervello ha bisogno di 5–6 secondi per rispondere a una domanda che richiede riflessione. NON riempire la pausa.</em></p>
  </div>

  <div class="cn-golden" style="margin-top:26px">
    <div class="cn-gt">Il risultato, se hai fatto tutti i passi</div>
    <div class="cn-gbody" style="line-height:1.85">Se hai svolto correttamente, secondo MLM Psychology, la <b>Connessione</b>, la <b>Presentazione</b> e la <b>Chiusura</b>, le probabilità di chiudere salgono verso l’<b>80%</b>. 8 invitati su 10 possono diventare o consumatori, o ambasciatori della tua attività.<br><br>Molto raramente compaiono obiezioni — e quando compaiono, le tratti separatamente.</div>
  </div>

  <div class="cn-foot">Harvard of Sales · Modulo Chiusura</div>
`;

// ============================================
// ENGLISH VERSIONS (served for EN users via ?lang=en)
// ============================================

const conectare_en = `
  <div class="cn-title-block">
    <h1 class="cn-h1">The connection</h1>
    <div class="cn-subtitle">before the 1-on-1 presentation</div>
  </div>
  <p class="cn-lead">Before any presentation you need the <b>connection</b>.</p>
  <p class="cn-lead">The connection gives you the client's "map": <b>what hurts them</b> and <b>what makes them happy</b>. Without a map, you present into the void.</p>

  <div class="cn-sec">Performance rules before the connection</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Get into an optimal state of performance</div>
      <div class="cn-rd">
        <p>A brain in a positive state works up to <b>31% better</b> than a neutral or stressed one <em>(Shawn Achor, The Happiness Advantage)</em>.</p>
        <p>Before you step into the connection, do <b>60 seconds</b> of energetic movement — laugh, dance, jump.</p>
        <p>It's not a whim: your state transfers to the client in the first seconds, before a single word. You come in from abundance, not from the need to convince.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">At a group presentation — connect 10–15 minutes beforehand</div>
      <div class="cn-rd">
        <p>Don't drop them straight into the group meeting — you risk "scalding" them 😊.</p>
        <p>A person needs a warm, one-on-one bridge before stepping in among strangers.</p>
        <p class="cn-note"><em>(This rule sets up the group variant of the script — a separate module.)</em></p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Build the client's map</div>
      <div class="cn-rd">
        <p>Before you present, you need a "map" of the person in front of you.</p>
        <p>On the map there are two things: <b>what hurts them</b> and <b>what makes them happy</b>.</p>
        <p>You build the whole presentation on this. Without it, you present in the dark.</p>
        <p>Face to face you keep it in mind. Online — <b>write it on a sheet of paper</b>.</p>
        <p class="cn-note">But the map doesn't appear out of nowhere: you draw it by <b>asking questions</b>. How? 👉 point 4.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">The questions that build your map</div>
      <div class="cn-rd">
        <p>The map from point 3 you draw through <b>questions</b>.</p>
        <p>The most important thing to find out is <span class="cn-big">what hurts them</span> right now, in their life.</p>
        <p>Pain is the number-one motivator: in ~75% of cases we act to <em>escape</em> a pain — and only in ~25% to <em>gain</em> a pleasure.</p>
        <p>People look for solutions to problems first, then pleasure.</p>
        <p>So ask first what weighs on them. What would make them happy comes second.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">The 1-on-1 presentation is NOT the same for everyone</div>
      <div class="cn-rd">
        <p>You present the product / business as a <b>possible solution</b> to THEIR pain, in their own words.</p>
        <p>Same product, a different way in for each person.</p>
      </div>
    </div>
  </div>

  <div class="cn-golden">
    <div class="cn-gt">Golden rules of the script</div>

    <div class="cn-gitem">
      <div class="cn-ghead">1 · Tone makes the difference</div>
      <div class="cn-gbody">It's not only WHAT you say, but <b>how</b> you say it. A smile in your voice, real pauses (not rushed), a calm tone on the hard question, a playful tone on the joke. The same words said mechanically trip the radar; said warmly, they disarm. The client hears in your tone whether you truly care or you're just playing a part.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">2 · Don't pretend you're just like them</div>
      <div class="cn-gbody">You can't be in someone else's shoes. Say only what happened to <b>you</b>. They figure out on their own whether it resembles them.
        <div class="cn-ban">
          <div class="cn-ban-label">Classic MLM lines — never say them</div>
          <ul>
            <li>"I was in the exact same situation"</li>
            <li>"I know exactly how it is"</li>
            <li>"you absolutely have to see this"</li>
            <li>"I thought of you when I saw the project"</li>
            <li>"you're going to love it"</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">3 · Silence</div>
      <div class="cn-gbody">After you ask something, go quiet. Even if it's silent and it feels long. Wait — <b>they speak first</b>. Whoever speaks first just to break the silence, loses.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">4 · Follow the script step by step</div>
      <div class="cn-gbody">Say the words exactly as written. <b>Don't change them.</b> And <b>don't change the order of the questions.</b> Every word and every question is in a certain order for a reason — move them, and the whole effect breaks.</div>
    </div>

  </div>

  <div class="cn-sec">The connection script (1-on-1)</div>

  <div class="cn-precond"><b>⚠️ This script begins ONLY after you have already identified the client's problems.</b><br>First you connect and find out what hurts them (the rules above). Only when you know their pain do you step into the dialogue below.</div>

  <div class="cn-legend">
    <span><span class="cn-lgchip">Aa</span> what you say</span>
    <span><span class="cn-cue">(italic)</span> = tone / what you do</span>
    <span><span class="cn-pause">⏸ pause</span> = go quiet</span>
    <span><span class="cn-fill">[…]</span> = you fill in · A / B = you choose</span>
  </div>

  <div class="cn-box">

    <p class="cn-line"><span class="cn-role">Agent:</span> I heard you say that… <span class="cn-fill">[describe the problem you sense is the biggest one for them]</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Yeah…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Is it a problem that <strong>gnaws</strong> at you and you really want to find a fix for — or can you live with it? <span class="cn-pause">⏸ go quiet — let them answer</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> It gnaws at me and I want to find a fix…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> <span class="cn-fill">[Name]</span>… out of curiosity I'll ask: if there were a possible solution to <span class="cn-fill">[describe the problem]</span>… would you be open to looking at it — or would you turn it down completely… because it comes from me? 😊</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Depends what it's about…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> <span class="cn-fill">[Name]</span>… we both know people are wary, suspicious, when a friend presents them something. And we have to admit it. <span class="cn-pause">⏸ go quiet 2 seconds</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> That's true…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Today I'm not going to give you the classic "you absolutely have to see this! It's the wonder of the world, you've never seen anything like it…" <span class="cn-cue">(laughing lightly)</span> <span class="cn-pause">⏸ short pause</span> I'd be too classic… and I won't risk our friendship… over a product.</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> <span class="cn-cue">(laughs)</span></p>

    <p class="cn-line"><span class="cn-role">Agent:</span> I'll speak openly, like a real presenter <span class="cn-cue">(with a smile 😊)</span>… you analyze it skeptically, ask questions, we have fun… and in the end what matters most is still <strong>our friendship</strong>. Is that okay?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> YES…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> The product / business <span class="cn-cue">(pick one, after you present)</span> you're about to see is something I've <strong>tested and verified</strong> in <span class="cn-fill">[describe your conditions — convey trust and credibility]</span>.</p>

    <p class="cn-line">And the main reason that drives me to talk about it in front of you is the <strong>trust I have</strong> in it.</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Just as it helped me with <span class="cn-fill">[X — your situation]</span>… <span class="cn-pause">⏸ short pause</span> it may… be a solution for you too with <span class="cn-fill">[Y — the situation / wish they just told you]</span>.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ short pause</span></p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Like any product, it has a cost. <span class="cn-cue">(no figure now — the amount comes in the presentation)</span> If you see value in it, we stay friends. If you don't see value in it, we stay friends all the same. 😊</p>

    <span class="cn-zone">✅ This is where the Connection ends. From here the one-on-one Presentation begins.</span>

  </div>

  <div class="cn-foot">Harvard of Sales · Connection Module (1-on-1)</div>
`;

const fulger_en = [
  {
    dialog: [
      { vorbitor: "agent",  text: "Hey George… I was really scared to call you." },
      { regie: "dramatic pause" },
      { vorbitor: "client", text: "Why… what happened?" },
      { vorbitor: "agent",  text: "I wanted to invite you for a coffee and I was afraid you'd turn me down." },
      { regie: "with a smile in your voice" },
      { vorbitor: "client", text: "How could I turn you down… Where do we meet?" },
      { vorbitor: "agent",  text: "Tuesday at ___ or Wednesday at ___ — which one works better for you? Come on, I miss talking with you…" },
      { regie: "you give them two concrete day/time options" }
    ],
    obiectie: {
      titlu: "If they ask \"what do you want to talk about?\"",
      dialog: [
        { vorbitor: "client", text: "What do you want to talk about?" },
        { vorbitor: "agent",  text: "If I told you it's a surprise, would you keep pushing with questions or would you leave me this little joy?" },
        { vorbitor: "client", text: "No… I wouldn't want to spoil your surprise. Perfect, see you Tuesday at ___." }
      ]
    },
    psihologie: [
      "Confessed vulnerability takes them out of the target role and puts them in the protector role — they no longer have anything to defend against.",
      "The dramatic pause shifts control through silence: they ask \"what happened?\", so they're the one steering toward the meeting, not you.",
      "The \"surprise\" closes the loop without ever saying the word MLM — curiosity takes the place of the argument."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Hey George… For 3 hours I've been thinking of inviting you for a coffee and I was really afraid you'd turn me down." },
      { regie: "dramatic pause" },
      { vorbitor: "client", text: "How could I turn you down…?" },
      { vorbitor: "agent",  text: "Tuesday at ___ or Wednesday at ___ — which one works better for you? Come on, I miss talking with you…" },
      { regie: "you give them two concrete day/time options" }
    ],
    obiectie: {
      titlu: "If they ask \"what do you want to talk about?\"",
      dialog: [
        { vorbitor: "client", text: "What do you want to talk about?" },
        { vorbitor: "agent",  text: "If I told you it's a surprise, would you keep pushing with questions or would you leave me this little joy?" },
        { vorbitor: "client", text: "No… I wouldn't want to spoil your surprise. Perfect, see you Tuesday at ___." }
      ]
    },
    psihologie: [
      "\"For 3 hours I've been thinking of calling you\" = a signal of emotional investment: you tell them, without asking, that the call matters, it's not random. It raises the value of the invitation.",
      "You cut the intermediate beat from variant 1 — same disarming effect, but faster, with less room for resistance.",
      "The close \"Tuesday or Wednesday?\" shifts the decision from IF to WHEN. They no longer choose between \"yes\" and \"no\", but between two days."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Hey [name]… I think the last thing you wanted to hear today is an invitation for a coffee…" },
      { regie: "with a smile in your voice" },
      { vorbitor: "client", text: "That's exactly what I needed… When do we meet?" },
      { vorbitor: "agent",  text: "Tuesday at ___ or Wednesday at ___ — come on, I miss talking with you…" },
      { vorbitor: "client", text: "Perfect, see you at ___." },
      { vorbitor: "agent",  text: "That was fast… I like us. See you [day]." },
      { regie: "you close the conversation here — so they don't get the chance to ask what it's about" }
    ],
    obiectie: null,
    psihologie: [
      "You name their resistance before they feel it (\"the last thing you wanted to hear\") — you defuse the objection before it exists.",
      "The light self-irony lowers the stakes: if you don't take things seriously, they don't feel pressure either, so there's nothing to refuse.",
      "\"That was fast… I like us\" anchors positively on \"us\" and gives you the natural excuse to close before \"what is it about?\". The cue \"I have to hang up\" is discipline, not haste."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "I called to tell you I've made a very important decision." },
      { vorbitor: "client", text: "Really… what is it?" },
      { vorbitor: "agent",  text: "I know it sounds odd… but the important decision is to invite you for a coffee." },
      { regie: "with a smile in your voice" },
      { vorbitor: "client", text: "Now that's news… do you want to tell me something?" },
      { vorbitor: "agent",  text: "Do you think it would be a totally wrong idea?" },
      { vorbitor: "client", text: "No…" },
      { vorbitor: "agent",  text: "Which of the days would be okay for you? Or the weekend, since you're freer?" },
      { vorbitor: "client", text: "Weekend…" },
      { vorbitor: "agent",  text: "The important decision has been adopted. Saturday or Sunday?" },
      { regie: "with a smile in your voice" },
      { vorbitor: "client", text: "Saturday, 12:00." },
      { vorbitor: "agent",  text: "Noted… see you Saturday with a smile. Now I have to hang up." }
    ],
    obiectie: null,
    psihologie: [
      "Suspense + anticlimax: \"I've made an important decision\" opens the loop, \"the decision is to invite you for a coffee\" closes it with humor. Pleasant tension, zero pressure.",
      "\"Do you think it would be a totally wrong idea?\" is a negative question: it's much harder to say \"yes, it's wrong\" than \"no\". You move their brain toward acceptance without asking directly.",
      "You make them choose the day (\"weekend, since you're freer\") — an active decider — then you close firmly, with a smile and \"I have to hang up\". Curiosity stays intact for the meeting."
    ]
  }
];

const prezentare_en = `
  <div class="cn-title-block">
    <h1 class="cn-h1">The 1-on-1 presentation</h1>
    <div class="cn-subtitle">dialogue, not monologue</div>
  </div>
  <p class="cn-lead">The 1-on-1 presentation must be a <b>dialogue</b>, not a monologue. Only that way do you have the client's attention 100%.</p>
  <p class="cn-lead">The mistake many make: they present without asking quality questions — questions that help the client <b>become aware</b> of the product's value.</p>

  <div class="cn-precond"><b>⚠️ Why it matters:</b> the client buys only the benefits they remember. If you present and they listen passively, their mind retains nothing — in the end they <b>have no way</b> to justify the purchase and you get "let me think about it", "I don't have time", "I need to talk to my partner". A forced YES is a false YES.</div>

  <div class="cn-sec">How you fix the benefits in their mind</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Through open questions, not just through presenting</div>
      <div class="cn-rd">
        <p>You fix the advantages not by pouring in information, but by asking questions <b>they</b> have to think the answer to. The mind retains what it produces on its own, not what it hears.</p>
        <p>On top of that, open questions show you <b>how the client thinks</b> — so you know what to build the close on.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Use open questions: How / What / Which / Who</div>
      <div class="cn-rd">
        <p>Open questions generate a detailed answer, which shows you how the client thinks.</p>
        <p><b>Avoid "Why…?"</b> — it sounds like an interrogation and puts them on the defensive.</p>
        <p><b>Avoid "I wonder…?"</b> — it sounds rhetorical and vague.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Forbidden: closed questions and trap questions</div>
      <div class="cn-rd">
        <p><b>Closed</b> = yes/no answer (e.g.: "Would you like to save on vacations?"). It tells you nothing about how they think.</p>
        <p><b>Trap (leading)</b> = closed + you put the answer in their mouth (e.g.: "Isn't it true your friends would want this?"). They feel manipulated and shut down.</p>
        <div class="cn-ban">
          <div class="cn-ban-label">Why they're dangerous</div>
          <ul>
            <li>People hate saying a forced YES</li>
            <li>The client feels manipulated and shuts down</li>
            <li>You think you got a YES — but it's false, you forced it</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Tone makes the difference</div>
      <div class="cn-rd">
        <p>The same question sounds like an interrogation or like warm curiosity purely from the tone.</p>
        <p><b>Descending</b> tone at the end (an interrogation rises), slow pace, a smile in your voice 😊 — then <b>go quiet</b>. They speak first.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Cadence: no interrogation</div>
      <div class="cn-rd">
        <p>Pick <b>3–4 questions for the product part</b> and <b>3–4 for the business part</b>.</p>
        <p>Spread them out along the way — one after each benefit, with silence afterward — <b>never in a burst</b>. Otherwise the client feels under interrogation.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">6</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Note down their answers</div>
      <div class="cn-rd">
        <p>Mentally or in writing. The words they give you now are your ammunition — you use them at the <b>close</b> (a separate module).</p>
      </div>
    </div>
  </div>

  <div class="cn-sec">The question bank</div>
  <p class="cn-lead">Pick 3–4 from each area. It's a menu, not a checklist.</p>

  <div class="cn-box">

    <span class="cn-zone">🛍️ Product part</span>

    <p class="cn-line"><span class="cn-role">For them:</span></p>
    <p class="cn-line cn-gap">"What would be the benefits you personally would get by using X?"</p>
    <p class="cn-line cn-gap">"How could this product help you in your life?"</p>
    <p class="cn-line cn-gap">"What exactly would make you say a product truly earned its money?"</p>
    <p class="cn-line cn-gap">"What would a day of yours look like where <span class="cn-fill">[the problem the product solves]</span> was no longer a worry?"</p>
    <p class="cn-line cn-gap">"What would be the first thing you'd feel different after a few weeks of using it?"</p>
    <p class="cn-line cn-gap">"What would it mean to you to solve this and stop thinking about it?"</p>

    <p class="cn-line"><span class="cn-role">Beyond them:</span></p>
    <p class="cn-line cn-gap">"Besides you, who else would enjoy the quality of this product / service?"</p>
    <p class="cn-line cn-gap">"Besides you, who else could enjoy the advantages X, Y, Z?"</p>
    <p class="cn-line cn-gap">"Who around you would be the first to notice the change in you?"</p>
    <p class="cn-line cn-gap">"How would you feel about passing on something that helped you?"</p>

    <span class="cn-zone">💼 Business part</span>

    <p class="cn-line"><span class="cn-role">For them:</span></p>
    <p class="cn-line cn-gap">"How could an extra income of 500–1,000 EUR a month help you, developing this project part-time?"</p>
    <p class="cn-line cn-gap">"What are the things you'd do with an extra income of 500–1,000 EUR a month?"</p>
    <p class="cn-line cn-gap">"What would an extra income of 500–1,000 EUR a month, part-time, concretely change in your life?"</p>
    <p class="cn-line cn-gap">"What would you like to do more of, if time and money were no longer the problem?"</p>

    <p class="cn-line"><span class="cn-role">Beyond them:</span></p>
    <p class="cn-line cn-gap">"Who else would enjoy an extra monthly income of 500–1,000 EUR that you'd produce for your family?"</p>
    <p class="cn-line cn-gap">"Who in your family would feel the difference of this income the most?"</p>
    <p class="cn-line cn-gap">"Besides you, who else would stand to gain if you built this project?"</p>
    <p class="cn-line cn-gap">"How would it be to build something of your own, at your own pace, without giving up what you have now?"</p>

  </div>

  <div class="cn-precond" style="margin-top:18px"><b>📍 For the 1-on-1 presentation only.</b> The group presentation works differently and is handled separately.</div>

  <div class="cn-foot">Harvard of Sales · Presentation Module (1-on-1)</div>
`;

const inchidere_en = `
  <div class="cn-title-block">
    <h1 class="cn-h1">The close</h1>
    <div class="cn-subtitle">it starts with the connection</div>
  </div>
  <p class="cn-lead">Everything you do <b>before</b> the close counts — it's 90% of the close. If you've done the work well up to here, the close is easy. If not, you struggle.</p>

  <div class="cn-sec">When the close becomes easy</div>
  <p class="cn-lead">The close is easy only if, in the earlier stages, you managed to:</p>
  <div class="cn-rule">
    <div class="cn-rule-num">✓</div>
    <div class="cn-rule-txt">
      <div class="cn-rd">
        <p>connect with the client and make them feel relaxed — only then do they accept your information;</p>
        <p>find out <b>what hurts them</b> and <b>what they like</b>;</p>
        <p>present the product exactly on THEIR need, not on yours;</p>
        <p>deliver a presentation that is <b>dialogue, not monologue</b>, through which they become aware of the benefits on their own.</p>
        <p class="cn-note">You can use the best closing questions — if the above isn't aligned, you get at most a momentary YES that they drop immediately.</p>
      </div>
    </div>
  </div>

  <div class="cn-block">
    <div class="cn-block-h">The best closer CANNOT close as long as the client:</div>
    <ul>
      <li>doesn't trust the presenter;</li>
      <li>isn't aware of the benefits;</li>
      <li>doesn't feel the product / business idea solves their problem NOW or as soon as possible;</li>
      <li>doesn't believe they can develop it;</li>
      <li>doesn't see that their risk is <b>zero</b>;</li>
      <li>doesn't realize they have NOTHING to lose.</li>
    </ul>
  </div>

  <div class="cn-sec">The formula of a successful sale</div>
  <p class="cn-lead">Everything you do in the close aims to maximize what the client sees they gain and to minimize what they feel it costs them — until the risk becomes zero.</p>
  <div class="if-wrap">
    <div class="if-gl if-max">▲ You maximize</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">The client's dream outcome</div><div class="val">Important</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Perceived likelihood of achieving it</div><div class="val">Very high</div></div>
    </div>
    <div class="if-bar"></div>
    <div class="if-gl if-min">▼ You minimize</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Time until the result</div><div class="val">Happens fast</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Effort &amp; sacrifices</div><div class="val">Small</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Fear / apprehension</div><div class="val">Small</div></div>
    </div>
    <div class="if-op">×</div>
    <div class="if-risk-wrap"><div class="if-risk">Zero risk</div></div>
    <div class="if-op">=</div>
    <div class="if-result"><div class="rl">Result</div><div class="rv">Client recruited</div></div>
  </div>

  <div class="cn-sec">Golden rules of the close</div>
  <p class="cn-lead">You have the words below. What makes the difference at the close is <b>how</b> you deliver them.</p>
  <div class="cn-golden">
    <div class="cn-gt">How you deliver — 6 rules</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Silence is tool #1 &nbsp;⏸</div><div class="cn-gbody">After every question — especially the decision one — go quiet for 5–6 seconds. Whoever speaks first just to break the silence, loses.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Descending tone, not rising &nbsp;🔽</div><div class="cn-gbody">Lower your tone at the end of the sentence — calm, almost detached. A rushed or rising voice shouts "I need this sale", and the client defends themselves on instinct.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Slow down &nbsp;🐢</div><div class="cn-gbody">Nervousness = speaking fast. Deliberately slow, with pauses <em>between</em> sentences too, not only after questions. A slow pace conveys control and confidence.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · A state of abundance / detachment</div><div class="cn-gbody">Be genuinely okay with a "no". "If you see value, we stay friends; if not, likewise" — say it <b>meaning it</b>. If you're clinging to the "yes", the client smells the clinging.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">5 · Don't rescue, don't add</div><div class="cn-gbody">After "I'll leave it to you to decide" — zero extra words. The urge to toss in one more benefit "to help" kills the moment. The hardest thing at the close is to say nothing more.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">6 · Calibrated smile &nbsp;😊</div><div class="cn-gbody">Warm on the rapport lines and on the joke; but on the decision question — a neutral, calm tone. A broad smile on "would you give it a chance?" sounds like a sale, not like sincere curiosity.</div></div>
  </div>
  <div class="cn-legend">
    <span><span class="cn-pause">⏸</span> go quiet</span>
    <span><span class="cn-cue">😊</span> smile in your voice</span>
    <span><span class="cn-cue">🔽</span> lower the tone</span>
    <span><span class="cn-cue">🐢</span> slow, unhurried</span>
  </div>

  <div class="cn-sec">The stages of the close</div>
  <p class="cn-lead">Three stages, with the psychological questions you ask in each.</p>

  <!-- ETAPA 1 -->
  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Recapping the benefits</div>
      <div class="cn-rd">
        <p>Here use <b>a sheet of paper and a pen</b>. Why? To help your client <b>see</b> the benefits, not just hear them — they integrate them through two senses, sight and hearing.</p>
        <p>At the end it's much easier for them to see than to recall from memory. You make your work easier and their effort lighter.</p>
        <p class="cn-note">You list the benefits <b>THEY</b> told you during the dialogue-presentation — not yours.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-cue">🐢 slow, warm</span> <span class="cn-role">Agent:</span> Now that you have the whole "picture", is it okay with you too to do a small recap of the benefits — and whether these benefits would solve your problem? Otherwise it wouldn't make sense…</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Yes…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Do you consider it would be the best method to decide whether the product suits you or not?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Yes… I agree.</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Would you have another proposal, or is this how you make your yes-or-no decisions too?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> I do the same…</p>

    <span class="cn-zone">And you start listing the benefits they specified during the presentation</span>

    <p class="cn-line"><span class="cn-role">Agent:</span> You told me that <span class="cn-fill">[X — the benefit they named]</span>… could be a solution for you. <span class="cn-pause">⏸ GO QUIET</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Yes… that's right…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> You told me that <span class="cn-fill">[Y — another benefit of theirs]</span>… could be a solution for you. <span class="cn-pause">⏸ GO QUIET</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Yes… that's right…</p>
  </div>

  <!-- ETAPA 2 -->
  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Assessing the risks</div>
      <div class="cn-rd">
        <p>MLM agents fear this stage. Yet it's precisely the one that <b>relaxes</b> the client and eliminates the final objections: "let me think about it", "I need to talk to my partner".</p>
        <p>The client understands that you're vulnerable and don't talk only about benefits, the way 99% of MLM classics do.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agent:</span> Now that we know the benefits, I think it's important to talk about the risks too. I personally make decisions when I weigh gains against risks. <span class="cn-cue">(smile 😊)</span> Would it help you too to have a clearer picture at the end?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> Yes… that's fine… I do the same.</p>
  </div>
  <div class="cn-golden">
    <div class="cn-gt">The 4 risks to defuse</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Financial risk</div><div class="cn-gbody">They don't lose money buying the product — or the amount invested is very small compared to what they can gain.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Effort risk</div><div class="cn-gbody">The effort to develop the business is small.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Time risk</div><div class="cn-gbody">They don't waste time only to end up with no result at all.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Image risk</div><div class="cn-gbody">It represents a serious company and a good product — their image doesn't suffer in front of their friends.</div></div>
  </div>
  <p class="cn-note" style="margin-top:12px"><em>Here there is no fixed Agent–Client script: there are thousands of products in the MLM market. You adapt the 4 risks to your concrete product / service.</em></p>

  <!-- ETAPA 3 -->
  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Collecting the decision without pressure</div>
      <div class="cn-rd">
        <p>You bring them into the position where they decide on their own — like at the shelf — without feeling pushed.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agent:</span> Both you and I buy products <span class="cn-cue">(health, cleaning, care, vacations — you name your product)</span> on a regular basis. <span class="cn-pause">⏸ Go quiet</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> That's right…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> We go to the shelf or go online and pick our product. We check for ourselves whether it's good and we don't like being pressured to buy. <span class="cn-pause">⏸ GO QUIET</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> That's right…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> And now the honest question: if you had seen this product, which can solve <span class="cn-fill">[X — what they specified]</span>, would you give it a chance or ignore it entirely? <span class="cn-cue">🔽 neutral, low tone</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client:</span> I think I'd give it a chance…</p>

    <p class="cn-line"><span class="cn-cue">🐢🔽</span> <span class="cn-role">Agent:</span> I can't ask you whether you're buying — a person's natural instinct to a question like that is to refuse. Mine too… <span class="cn-pause">⏸ Go quiet</span> I leave it to you, as if you were alone at the shelf, to decide, without adding anything more.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ GO QUIET · GO QUIET · GO QUIET — this is the moment you go quiet</span></p>
    <p class="cn-line" style="text-align:center;color:#6b6f79;font-size:14px"><em>The brain needs 5–6 seconds to answer a question that requires thought. DON'T fill the pause.</em></p>
  </div>

  <div class="cn-golden" style="margin-top:26px">
    <div class="cn-gt">The result, if you did all the steps</div>
    <div class="cn-gbody" style="line-height:1.85">If you've gone through it correctly, according to MLM Psychology, the <b>Connection</b>, the <b>Presentation</b> and the <b>Close</b>, the chances of closing rise toward <b>80%</b>. 8 out of 10 invitees can become either consumers or ambassadors of your business.<br><br>Objections appear very rarely — and when they do, you handle them separately.</div>
  </div>

  <div class="cn-foot">Harvard of Sales · Closing Module</div>
`;

// ============================================
// VERSIONES EN ESPAÑOL (servidas para usuarios ES vía ?lang=es)
// ============================================

const conectare_es = `
  <div class="cn-title-block">
    <h1 class="cn-h1">La conexión</h1>
    <div class="cn-subtitle">antes de la presentación 1 a 1</div>
  </div>
  <p class="cn-lead">Antes de cualquier presentación hace falta la <b>conexión</b>.</p>
  <p class="cn-lead">La conexión te crea el "mapa" del cliente: <b>qué le duele</b> y <b>qué le alegra</b>. Sin mapa, presentas en el vacío.</p>

  <div class="cn-sec">Reglas de rendimiento antes de la conexión</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Ponte en un estado óptimo de rendimiento</div>
      <div class="cn-rd">
        <p>El cerebro en un estado positivo trabaja hasta un <b>31% mejor</b> que en uno neutro o estresado <em>(Shawn Achor, The Happiness Advantage)</em>.</p>
        <p>Antes de entrar en la conexión, haz <b>60 segundos</b> de movimiento enérgico: ríe, baila, salta.</p>
        <p>No es un capricho: tu estado se transmite al cliente en los primeros segundos, antes de cualquier palabra. Entras desde la abundancia, no desde la necesidad de convencer.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">En la presentación de grupo, conéctate 10–15 minutos antes</div>
      <div class="cn-rd">
        <p>No lo metas directamente en la reunión de grupo: corres el riesgo de "quemarlo" 😊.</p>
        <p>La persona necesita un puente cálido, uno a uno, antes de entrar entre desconocidos.</p>
        <p class="cn-note"><em>(Esta regla prepara la variante de grupo del guion, un módulo aparte.)</em></p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Haz el mapa del cliente</div>
      <div class="cn-rd">
        <p>Antes de presentar, necesitas un "mapa" de la persona que tienes delante.</p>
        <p>En el mapa hay dos cosas: <b>qué le duele</b> y <b>qué le alegra</b>.</p>
        <p>Sobre esto construyes toda la presentación. Sin él, presentas a oscuras.</p>
        <p>Cara a cara lo recuerdas. En línea, <b>escríbelo en una hoja</b>.</p>
        <p class="cn-note">Pero el mapa no aparece de la nada: lo dibujas <b>preguntando</b>. ¿Cómo? 👉 punto 4.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Las preguntas que te construyen el mapa</div>
      <div class="cn-rd">
        <p>El mapa del punto 3 lo dibujas con <b>preguntas</b>.</p>
        <p>Lo más importante por descubrir es <span class="cn-big">qué le duele</span> ahora, en su vida.</p>
        <p>El dolor es el motivador número uno: en ~75% de los casos actuamos para <em>escapar</em> de un dolor, y solo en ~25% para <em>obtener</em> un placer.</p>
        <p>Las personas buscan primero soluciones a los problemas, luego el placer.</p>
        <p>Así que pregunta primero qué le pesa. Lo que le alegraría viene en segundo lugar.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">La presentación 1 a 1 NO es igual para todos</div>
      <div class="cn-rd">
        <p>Presentas el producto / negocio como una <b>posible solución</b> a SU dolor, con sus propias palabras.</p>
        <p>El mismo producto, una puerta de entrada distinta para cada persona.</p>
      </div>
    </div>
  </div>

  <div class="cn-golden">
    <div class="cn-gt">Reglas de oro del guion</div>

    <div class="cn-gitem">
      <div class="cn-ghead">1 · El tono marca la diferencia</div>
      <div class="cn-gbody">No importa solo QUÉ dices, sino <b>cómo</b> lo dices. Sonrisa en la voz, pausas de verdad (no apresuradas), tono tranquilo en la pregunta difícil, tono juguetón en la broma. Las mismas palabras dichas de forma mecánica encienden el radar; dichas con calidez, desarman. El cliente percibe en el tono si de verdad te importa o solo estás actuando.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">2 · No finjas que eres igual que él</div>
      <div class="cn-gbody">No puedes estar en la piel de otro. Di solo lo que te pasó a <b>ti</b>. Él mismo se da cuenta de si se parece a él.
        <div class="cn-ban">
          <div class="cn-ban-label">Frases clásicas de MLM: no las digas nunca</div>
          <ul>
            <li>"yo también estuve en la misma situación"</li>
            <li>"sé exactamente cómo es"</li>
            <li>"tienes que ver esto sí o sí"</li>
            <li>"pensé en ti cuando vi el proyecto"</li>
            <li>"te va a encantar muchísimo"</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">3 · El silencio</div>
      <div class="cn-gbody">Después de preguntar algo, calla. Aunque haya silencio y te parezca largo. Espera: <b>él habla primero</b>. Quien habla primero solo para no dejar silencio, pierde.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">4 · Sigue el guion paso a paso</div>
      <div class="cn-gbody">Di las palabras exactamente como están escritas. <b>No las cambies.</b> Y <b>no cambies el orden de las preguntas.</b> Cada palabra y cada pregunta están en un orden determinado por una razón: si las mueves, se estropea todo el efecto.</div>
    </div>

  </div>

  <div class="cn-sec">El guion de conexión (1 a 1)</div>

  <div class="cn-precond"><b>⚠️ Este guion empieza SOLO después de haber identificado ya los problemas del cliente.</b><br>Primero te conectas y descubres qué le duele (las reglas de arriba). Solo cuando conoces su dolor entras en el diálogo de abajo.</div>

  <div class="cn-legend">
    <span><span class="cn-lgchip">Aa</span> lo que dices</span>
    <span><span class="cn-cue">(cursiva)</span> = tono / lo que haces</span>
    <span><span class="cn-pause">⏸ pausa</span> = calla</span>
    <span><span class="cn-fill">[…]</span> = completas · A / B = eliges</span>
  </div>

  <div class="cn-box">

    <p class="cn-line"><span class="cn-role">Agente:</span> Te escuché decir que… <span class="cn-fill">[describe el problema que sientes que es el más grande para él]</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sí…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> ¿Es un problema que te <strong>atormenta</strong> y de verdad quieres encontrarle solución, o puedes vivir con él? <span class="cn-pause">⏸ calla — deja que responda él</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Me atormenta y quiero encontrar una solución…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> <span class="cn-fill">[Nombre]</span>… por curiosidad te pregunto: si existiera una posible solución a <span class="cn-fill">[describe el problema]</span>… ¿estarías abierto a analizarla, o la rechazarías por completo… porque viene de mí? 😊</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Depende de qué se trate…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> <span class="cn-fill">[Nombre]</span>… los dos sabemos que la gente es reacia, desconfiada, cuando un amigo le presenta algo. Y hay que reconocerlo. <span class="cn-pause">⏸ calla 2 segundos</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Así es…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Hoy no te voy a decir el clásico "¡tienes que ver esto sí o sí! Es la maravilla del mundo, nunca has visto algo así…" <span class="cn-cue">(riendo ligeramente)</span> <span class="cn-pause">⏸ pausa corta</span> Sería demasiado clásico… y no arriesgo nuestra amistad… por un producto.</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> <span class="cn-cue">(ríe)</span></p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Yo voy a hablar abiertamente, como un verdadero presentador <span class="cn-cue">(con una sonrisa 😊)</span>… tú lo analizas con escepticismo, haces preguntas, nos divertimos… y al final lo más importante sigue siendo <strong>nuestra amistad</strong>. ¿Te parece bien?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> SÍ…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> El producto / negocio <span class="cn-cue">(elige uno, después de presentar)</span> que vas a ver es algo que he <strong>probado y verificado</strong> en <span class="cn-fill">[describe tus condiciones — transmite confianza y credibilidad]</span>.</p>

    <p class="cn-line">Y la razón principal que me impulsa a hablar de él frente a ti es la <strong>confianza que tengo</strong>.</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Igual que me ayudó a mí en <span class="cn-fill">[X — tu situación]</span>… <span class="cn-pause">⏸ pausa corta</span> es posible… que sea también una solución para ti en <span class="cn-fill">[Y — la situación / el deseo que acaba de decirte]</span>.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ pausa corta</span></p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Como todo producto, tiene un costo. <span class="cn-cue">(sin cifra ahora — la suma llega en la presentación)</span> Si le ves valor, seguimos siendo amigos. Si no le ves valor, seguimos siendo amigos igual. 😊</p>

    <span class="cn-zone">✅ Aquí termina la Conexión. Desde aquí empieza la Presentación uno a uno.</span>

  </div>

  <div class="cn-foot">Harvard of Sales · Módulo Conexión (1 a 1)</div>
`;

const fulger_es = [
  {
    dialog: [
      { vorbitor: "agent",  text: "Hola, George… Tenía mucho miedo de llamarte." },
      { regie: "pausa dramática" },
      { vorbitor: "client", text: "¿Por qué… qué pasó?" },
      { vorbitor: "agent",  text: "Quería invitarte a un café y temía que me rechazaras." },
      { regie: "con una sonrisa en la voz" },
      { vorbitor: "client", text: "¿Cómo te voy a rechazar…? ¿Dónde nos vemos?" },
      { vorbitor: "agent",  text: "El martes a las ___ o el miércoles a las ___, ¿cuál te viene mejor? Dale, que extraño hablar contigo…" },
      { regie: "le das dos opciones concretas de día/hora" }
    ],
    obiectie: {
      titlu: "Si te pregunta \"¿de qué quieres hablar?\"",
      dialog: [
        { vorbitor: "client", text: "¿De qué quieres hablar?" },
        { vorbitor: "agent",  text: "Si te dijera que es una sorpresa, ¿insistirías con las preguntas o me dejarías esa alegría?" },
        { vorbitor: "client", text: "No… cómo te voy a arruinar la sorpresa. Perfecto, nos vemos el martes a las ___." }
      ]
    },
    psihologie: [
      "La vulnerabilidad confesada lo saca del papel de objetivo y lo pone en el de protector: ya no tiene de qué defenderse.",
      "La pausa dramática traslada el control mediante el silencio: él pregunta \"¿qué pasó?\", así que es él quien lleva hacia el encuentro, no tú.",
      "La \"sorpresa\" cierra el ciclo sin pronunciar nunca la palabra MLM: la curiosidad ocupa el lugar del argumento."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Hola, George… Llevo 3 horas pensando en invitarte a un café y tenía mucho miedo de que me rechazaras." },
      { regie: "pausa dramática" },
      { vorbitor: "client", text: "¿Cómo te voy a rechazar…?" },
      { vorbitor: "agent",  text: "El martes a las ___ o el miércoles a las ___, ¿cuál te viene mejor? Dale, que extraño hablar contigo…" },
      { regie: "le das dos opciones concretas de día/hora" }
    ],
    obiectie: {
      titlu: "Si te pregunta \"¿de qué quieres hablar?\"",
      dialog: [
        { vorbitor: "client", text: "¿De qué quieres hablar?" },
        { vorbitor: "agent",  text: "Si te dijera que es una sorpresa, ¿insistirías con las preguntas o me dejarías esa alegría?" },
        { vorbitor: "client", text: "No… cómo te voy a arruinar la sorpresa. Perfecto, nos vemos el martes a las ___." }
      ]
    },
    psihologie: [
      "\"Llevo 3 horas pensando en llamarte\" = señal de inversión emocional: le dices, sin pedirlo, que la llamada importa, no es casual. Aumenta el valor de la invitación.",
      "Quitas el paso intermedio de la variante 1: el mismo efecto de desarme, pero más rápido, con menos espacio para la resistencia.",
      "El cierre \"¿martes o miércoles?\" traslada la decisión de SI a CUÁNDO. Ya no elige entre \"sí\" y \"no\", sino entre dos días."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Hola, [nombre]… Creo que lo último que querías escuchar hoy es una invitación a un café…" },
      { regie: "con una sonrisa en la voz" },
      { vorbitor: "client", text: "Justo eso necesitaba… ¿Cuándo nos vemos?" },
      { vorbitor: "agent",  text: "El martes a las ___ o el miércoles a las ___, dale, que extraño hablar contigo…" },
      { vorbitor: "client", text: "Perfecto, nos vemos a las ___." },
      { vorbitor: "agent",  text: "Qué rápidos fuimos… me gusta lo nuestro. Nos vemos el [día]." },
      { regie: "cierras la conversación aquí — para que no le dé tiempo a preguntar de qué se trata" }
    ],
    obiectie: null,
    psihologie: [
      "Nombras tú su resistencia antes de que la sienta él (\"lo último que querías escuchar\"): le desactivas la objeción antes de que exista.",
      "La leve autoironía baja la apuesta: si tú no te tomas las cosas en serio, él tampoco siente presión, así que no tiene nada que rechazar.",
      "\"Qué rápidos fuimos… me gusta lo nuestro\" ancla en positivo sobre el \"nosotros\" y te da la excusa natural para cerrar antes del \"¿de qué se trata?\". La indicación \"tengo que colgar\" es disciplina, no prisa."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Te llamé para decirte que tomé una decisión muy importante." },
      { vorbitor: "client", text: "¿En serio… qué cosa?" },
      { vorbitor: "agent",  text: "Sé que suena raro… pero la decisión importante es invitarte a un café." },
      { regie: "con una sonrisa en la voz" },
      { vorbitor: "client", text: "Vaya noticia… ¿quieres decirme algo?" },
      { vorbitor: "agent",  text: "¿Crees que sería una idea totalmente equivocada?" },
      { vorbitor: "client", text: "No…" },
      { vorbitor: "agent",  text: "¿Cuál de los días te vendría bien? ¿O el fin de semana, que estás más libre?" },
      { vorbitor: "client", text: "El fin de semana…" },
      { vorbitor: "agent",  text: "La decisión importante quedó adoptada. ¿Sábado o domingo?" },
      { regie: "con una sonrisa en la voz" },
      { vorbitor: "client", text: "El sábado, a las 12:00." },
      { vorbitor: "agent",  text: "Anotado… nos vemos el sábado con una sonrisa. Ahora tengo que colgar." }
    ],
    obiectie: null,
    psihologie: [
      "Suspenso + anticlímax: \"tomé una decisión importante\" abre el ciclo, \"la decisión es invitarte a un café\" lo cierra con humor. Tensión agradable, cero presión.",
      "\"¿Crees que sería una idea totalmente equivocada?\" es una pregunta negativa: es mucho más difícil decir \"sí, está equivocada\" que \"no\". Mueves su cerebro hacia la aceptación sin pedirlo directamente.",
      "Haces que elija él el día (\"el fin de semana, que estás más libre\"): decisor activo; luego cierras con firmeza, con una sonrisa y \"tengo que colgar\". La curiosidad queda intacta para el encuentro."
    ]
  }
];

const prezentare_es = `
  <div class="cn-title-block">
    <h1 class="cn-h1">La presentación 1 a 1</h1>
    <div class="cn-subtitle">diálogo, no monólogo</div>
  </div>
  <p class="cn-lead">La presentación 1 a 1 debe ser un <b>diálogo</b>, no un monólogo. Solo así tienes la atención del cliente al 100%.</p>
  <p class="cn-lead">El error que muchos cometen: presentan sin hacer preguntas de calidad, preguntas que ayudan al cliente a <b>tomar conciencia</b> del valor del producto.</p>

  <div class="cn-precond"><b>⚠️ Por qué importa:</b> el cliente compra solo los beneficios que recuerda. Si tú presentas y él escucha de forma pasiva, su mente no retiene nada; al final <b>no tiene manera</b> de justificar la compra y recibes "lo pienso", "no tengo tiempo", "tengo que hablar con mi pareja". Un SÍ arrancado a la fuerza es un SÍ falso.</div>

  <div class="cn-sec">Cómo fijas los beneficios en su mente</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Con preguntas abiertas, no solo con la presentación</div>
      <div class="cn-rd">
        <p>Fijas las ventajas no vertiendo información, sino haciendo preguntas cuya respuesta <b>él</b> tiene que pensar. La mente retiene lo que produce por sí misma, no lo que oye.</p>
        <p>Además, las preguntas abiertas te muestran <b>cómo piensa</b> el cliente, así que sabes sobre qué construir el cierre.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Usa preguntas abiertas: Cómo / Qué / Cuál / Quién</div>
      <div class="cn-rd">
        <p>Las preguntas abiertas generan una respuesta detallada, que te muestra cómo piensa el cliente.</p>
        <p><b>Evita "¿Por qué…?"</b> — suena a interrogatorio y lo pone a la defensiva.</p>
        <p><b>Evita "¿Acaso…?"</b> — suena retórico y vago.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Prohibidas: las preguntas cerradas y las trampa</div>
      <div class="cn-rd">
        <p><b>Cerrada</b> = respuesta sí/no (ej.: "¿Te gustaría ahorrar en las vacaciones?"). No te dice nada sobre cómo piensa.</p>
        <p><b>Trampa (dirigida)</b> = cerrada + le pones tú la respuesta en la boca (ej.: "¿A que tus amigos querrían esto?"). Se siente manipulado y se cierra.</p>
        <div class="cn-ban">
          <div class="cn-ban-label">Por qué son peligrosas</div>
          <ul>
            <li>La gente odia decir un SÍ forzado</li>
            <li>El cliente se siente manipulado y se cierra</li>
            <li>Tú crees que obtuviste un SÍ, pero es falso, lo obligaste</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">El tono marca la diferencia</div>
      <div class="cn-rd">
        <p>La misma pregunta suena a interrogatorio o a curiosidad cálida solo por el tono.</p>
        <p>Tono <b>descendente</b> al final (el interrogatorio sube), ritmo lento, sonrisa en la voz 😊, y luego <b>calla</b>. Él habla primero.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Cadencia: sin interrogatorio</div>
      <div class="cn-rd">
        <p>Elige <b>3–4 preguntas para la parte de producto</b> y <b>3–4 para la parte de negocio</b>.</p>
        <p>Distribúyelas a lo largo del camino — una después de cada beneficio, con silencio después — <b>nunca en ráfaga</b>. De lo contrario el cliente se siente en un interrogatorio.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">6</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Anota sus respuestas</div>
      <div class="cn-rd">
        <p>Mentalmente o por escrito. Las palabras que te da ahora son tu munición: las usas en el <b>cierre</b> (módulo aparte).</p>
      </div>
    </div>
  </div>

  <div class="cn-sec">El banco de preguntas</div>
  <p class="cn-lead">Elige 3–4 de cada zona. Es un menú, no una lista para tachar.</p>

  <div class="cn-box">

    <span class="cn-zone">🛍️ Parte de producto</span>

    <p class="cn-line"><span class="cn-role">Para él:</span></p>
    <p class="cn-line cn-gap">"¿Cuáles serían los beneficios que tú personalmente tendrías usando X?"</p>
    <p class="cn-line cn-gap">"¿Cómo podría ayudarte este producto en tu vida?"</p>
    <p class="cn-line cn-gap">"¿Qué exactamente te haría decir que un producto de verdad valió su dinero?"</p>
    <p class="cn-line cn-gap">"¿Cómo sería un día tuyo en el que <span class="cn-fill">[el problema que resuelve el producto]</span> ya no fuera una preocupación?"</p>
    <p class="cn-line cn-gap">"¿Cuál sería lo primero que sentirías distinto tras unas semanas usándolo?"</p>
    <p class="cn-line cn-gap">"¿Qué significaría para ti resolver esto y dejar de pensar en ello?"</p>

    <p class="cn-line"><span class="cn-role">Más allá de él:</span></p>
    <p class="cn-line cn-gap">"Aparte de ti, ¿quién más disfrutaría de la calidad de este producto / servicio?"</p>
    <p class="cn-line cn-gap">"Aparte de ti, ¿quién más podría disfrutar de las ventajas X, Y, Z?"</p>
    <p class="cn-line cn-gap">"¿Quién a tu alrededor sería el primero en notar el cambio en ti?"</p>
    <p class="cn-line cn-gap">"¿Qué te parecería ofrecer a otros algo que a ti te ayudó?"</p>

    <span class="cn-zone">💼 Parte de negocio</span>

    <p class="cn-line"><span class="cn-role">Para él:</span></p>
    <p class="cn-line cn-gap">"¿Cómo podría ayudarte un ingreso extra de 500–1.000 EUR al mes, desarrollando este proyecto a tiempo parcial?"</p>
    <p class="cn-line cn-gap">"¿Cuáles son las cosas que harías con un ingreso extra de 500–1.000 EUR al mes?"</p>
    <p class="cn-line cn-gap">"¿Qué cambiaría concretamente en tu vida un ingreso extra de 500–1.000 EUR al mes, a tiempo parcial?"</p>
    <p class="cn-line cn-gap">"¿Qué te gustaría hacer más, si el tiempo y el dinero ya no fueran el problema?"</p>

    <p class="cn-line"><span class="cn-role">Más allá de él:</span></p>
    <p class="cn-line cn-gap">"¿Quién más disfrutaría de un ingreso mensual de 500–1.000 EUR extra que tú generarías en tu familia?"</p>
    <p class="cn-line cn-gap">"¿Quién en tu familia sentiría más la diferencia de este ingreso?"</p>
    <p class="cn-line cn-gap">"Aparte de ti, ¿quién más saldría ganando si construyeras este proyecto?"</p>
    <p class="cn-line cn-gap">"¿Cómo sería construir algo tuyo, a tu ritmo, sin renunciar a lo que tienes ahora?"</p>

  </div>

  <div class="cn-precond" style="margin-top:18px"><b>📍 Solo para la presentación 1 a 1.</b> La presentación de grupo funciona de forma distinta y se trata por separado.</div>

  <div class="cn-foot">Harvard of Sales · Módulo Presentación (1 a 1)</div>
`;

const inchidere_es = `
  <div class="cn-title-block">
    <h1 class="cn-h1">El cierre</h1>
    <div class="cn-subtitle">empieza con la conexión</div>
  </div>
  <p class="cn-lead">Todo lo que haces <b>antes</b> del cierre cuenta: es el 90% del cierre. Si hasta aquí hiciste bien el trabajo, el cierre es fácil. Si no, te cuesta.</p>

  <div class="cn-sec">Cuándo el cierre se vuelve fácil</div>
  <p class="cn-lead">El cierre es fácil solo si lograste, en las etapas anteriores:</p>
  <div class="cn-rule">
    <div class="cn-rule-num">✓</div>
    <div class="cn-rule-txt">
      <div class="cn-rd">
        <p>conectarte con el cliente y hacer que se sienta relajado — solo así acepta tu información;</p>
        <p>descubrir <b>qué le duele</b> y <b>qué le gusta</b>;</p>
        <p>presentarle el producto justo sobre SU necesidad, no la tuya;</p>
        <p>hacer una presentación de <b>diálogo, no monólogo</b>, con la que él toma conciencia de los beneficios por sí mismo.</p>
        <p class="cn-note">Puedes usar las mejores preguntas de cierre — si lo anterior no está alineado, obtienes como mucho un SÍ momentáneo, al que renuncia enseguida.</p>
      </div>
    </div>
  </div>

  <div class="cn-block">
    <div class="cn-block-h">El mejor closer NO puede cerrar mientras el cliente:</div>
    <ul>
      <li>no confía en el presentador;</li>
      <li>no toma conciencia de los beneficios;</li>
      <li>no siente que el producto / la idea de negocio le resuelve el problema AHORA o lo antes posible;</li>
      <li>no cree que él pueda desarrollarlo;</li>
      <li>no ve que su riesgo es <b>cero</b>;</li>
      <li>no se da cuenta de que NO tiene nada que perder.</li>
    </ul>
  </div>

  <div class="cn-sec">La fórmula de una venta exitosa</div>
  <p class="cn-lead">Todo lo que haces en el cierre busca maximizar lo que el cliente ve que gana y minimizar lo que siente que le cuesta, hasta que el riesgo se vuelve cero.</p>
  <div class="if-wrap">
    <div class="if-gl if-max">▲ Maximizas</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Dream outcome del cliente</div><div class="val">Importante</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Percepción de la probabilidad de lograrlo</div><div class="val">Muy alta</div></div>
    </div>
    <div class="if-bar"></div>
    <div class="if-gl if-min">▼ Minimizas</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Tiempo hasta el resultado</div><div class="val">Ocurre rápido</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Esfuerzo &amp; sacrificios</div><div class="val">Pequeños</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Miedo / temor</div><div class="val">Pequeño</div></div>
    </div>
    <div class="if-op">×</div>
    <div class="if-risk-wrap"><div class="if-risk">Riesgo cero</div></div>
    <div class="if-op">=</div>
    <div class="if-result"><div class="rl">Resultado</div><div class="rv">Cliente reclutado</div></div>
  </div>

  <div class="cn-sec">Reglas de oro del cierre</div>
  <p class="cn-lead">Las palabras las tienes abajo. Lo que marca la diferencia en el cierre es <b>cómo</b> las entregas.</p>
  <div class="cn-golden">
    <div class="cn-gt">Cómo entregas — 6 reglas</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · El silencio es la herramienta #1 &nbsp;⏸</div><div class="cn-gbody">Después de cada pregunta — sobre todo la de decisión — calla 5–6 segundos. Quien habla primero solo para romper el silencio, pierde.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Tono descendente, no ascendente &nbsp;🔽</div><div class="cn-gbody">Baja el tono al final de la frase — tranquilo, casi distante. Una voz apresurada o que sube grita "necesito esta venta", y el cliente se defiende por instinto.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Ve más lento &nbsp;🐢</div><div class="cn-gbody">Nerviosismo = hablar rápido. Deliberadamente lento, con pausas <em>entre</em> frases también, no solo después de las preguntas. El ritmo lento transmite control y seguridad.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Estado de abundancia / desapego</div><div class="cn-gbody">Estate sinceramente en paz con un "no". "Si le ves valor, seguimos siendo amigos; si no, igual" — dilo <b>creyéndolo</b>. Si estás aferrado al "sí", el cliente huele el apego.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">5 · No rescates, no añadas</div><div class="cn-gbody">Después de "te dejo a ti que decidas" — cero palabras de más. La necesidad de lanzar otro beneficio "para ayudar" mata el momento. Lo más difícil en el cierre es no decir nada más.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">6 · Sonrisa calibrada &nbsp;😊</div><div class="cn-gbody">Cálida en las frases de rapport y en la broma; pero en la pregunta de decisión — tono neutro, tranquilo. Una sonrisa amplia en "¿le darías una oportunidad?" suena a venta, no a curiosidad sincera.</div></div>
  </div>
  <div class="cn-legend">
    <span><span class="cn-pause">⏸</span> calla</span>
    <span><span class="cn-cue">😊</span> sonrisa en la voz</span>
    <span><span class="cn-cue">🔽</span> baja el tono</span>
    <span><span class="cn-cue">🐢</span> lento, sin prisa</span>
  </div>

  <div class="cn-sec">Las etapas del cierre</div>
  <p class="cn-lead">Tres etapas, con las preguntas psicológicas que planteas en cada una.</p>

  <!-- ETAPA 1 -->
  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">El repaso de los beneficios</div>
      <div class="cn-rd">
        <p>Aquí usa <b>una hoja y un bolígrafo</b>. ¿Por qué? Para ayudar a tu cliente a <b>ver</b> los beneficios, no solo a oírlos — los integra por dos sentidos, vista y oído.</p>
        <p>Al final le resulta mucho más fácil ver que recordar de memoria. Te facilitas el trabajo y le facilitas el esfuerzo.</p>
        <p class="cn-note">Enumeras los beneficios que te dijo <b>ÉL</b> durante la presentación-diálogo — no los tuyos.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-cue">🐢 lento, cálido</span> <span class="cn-role">Agente:</span> Ahora que tienes todo el "cuadro", ¿te parece bien también a ti que hagamos un pequeño repaso de los beneficios — y si estos beneficios te resolverían el problema? Si no, no tendría sentido…</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sí…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> ¿Consideras que sería el mejor método para decidir si el producto te conviene o no?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sí… estoy de acuerdo.</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> ¿Tendrías otra propuesta, o así es como tomas tú también las decisiones de sí o no?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Yo hago lo mismo…</p>

    <span class="cn-zone">Y empiezas a enumerar los beneficios que él te especificó en la presentación</span>

    <p class="cn-line"><span class="cn-role">Agente:</span> Me dijiste que <span class="cn-fill">[X — el beneficio que nombró él]</span>… podría ser una solución para ti. <span class="cn-pause">⏸ CALLA</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sí… así es…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Me dijiste que <span class="cn-fill">[Y — otro beneficio suyo]</span>… podría ser una solución para ti. <span class="cn-pause">⏸ CALLA</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sí… así es…</p>
  </div>

  <!-- ETAPA 2 -->
  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">La evaluación de los riesgos</div>
      <div class="cn-rd">
        <p>Los agentes de MLM temen esta etapa. Pero es justamente ella la que <b>relaja</b> al cliente y elimina las objeciones finales: "lo pienso", "tengo que hablar con mi pareja".</p>
        <p>El cliente entiende que eres vulnerable y no hablas solo de beneficios, como hace el 99% de los clásicos del MLM.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agente:</span> Ahora que conocemos los beneficios, creo que es importante hablar también de los riesgos. Yo personalmente tomo decisiones cuando pongo en la balanza ganancias contra riesgos. <span class="cn-cue">(sonrisa 😊)</span> ¿Te ayudaría a ti también tener una imagen más clara al final?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Sí… está bien… yo hago lo mismo.</p>
  </div>
  <div class="cn-golden">
    <div class="cn-gt">Los 4 riesgos que hay que desactivar</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Riesgo financiero</div><div class="cn-gbody">No pierde dinero al comprar el producto — o la suma invertida es muy pequeña frente a lo que puede obtener.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Riesgo de esfuerzo</div><div class="cn-gbody">El esfuerzo para desarrollar el negocio es pequeño.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Riesgo de tiempo</div><div class="cn-gbody">No pierde tiempo para acabar al final sin ningún resultado.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Riesgo de imagen</div><div class="cn-gbody">Representa una empresa seria y un buen producto — su imagen no se resiente ante sus amigos.</div></div>
  </div>
  <p class="cn-note" style="margin-top:12px"><em>Aquí no existe un guion fijo Agente–Cliente: hay miles de productos en el mercado MLM. Adaptas los 4 riesgos a tu producto / servicio concreto.</em></p>

  <!-- ETAPA 3 -->
  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Recoger la decisión sin presión</div>
      <div class="cn-rd">
        <p>Lo llevas a la postura en la que decide por sí mismo — como en el estante — sin sentir que lo empujan.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agente:</span> Tanto tú como yo compramos productos <span class="cn-cue">(de salud, limpieza, cuidado, vacaciones — nombras tu producto)</span> de forma regular. <span class="cn-pause">⏸ Calla</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Así es…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Vamos al estante o entramos en línea y elegimos el producto. Nos informamos por nosotros mismos de si es bueno y no nos gusta que nos presionen a comprar. <span class="cn-pause">⏸ CALLA</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Así es…</p>

    <p class="cn-line"><span class="cn-role">Agente:</span> Y ahora la pregunta sincera: si hubieras visto este producto, que puede resolver <span class="cn-fill">[X — lo que precisó él]</span>, ¿le darías una oportunidad o lo dejarías del todo de lado? <span class="cn-cue">🔽 tono neutro, bajo</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Cliente:</span> Creo que le daría una oportunidad…</p>

    <p class="cn-line"><span class="cn-cue">🐢🔽</span> <span class="cn-role">Agente:</span> No puedo preguntarte si compras — el instinto natural de la persona ante una pregunta así es rechazar. Incluso el mío… <span class="cn-pause">⏸ Calla</span> Te dejo a ti, como si estuvieras solo en el estante, que decidas, sin añadir nada más.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ CALLA · CALLA · CALLA — este es el momento en que callas</span></p>
    <p class="cn-line" style="text-align:center;color:#6b6f79;font-size:14px"><em>El cerebro necesita 5–6 segundos para responder a una pregunta que exige reflexión. NO llenes la pausa.</em></p>
  </div>

  <div class="cn-golden" style="margin-top:26px">
    <div class="cn-gt">El resultado, si hiciste todos los pasos</div>
    <div class="cn-gbody" style="line-height:1.85">Si has recorrido correctamente, según MLM Psychology, la <b>Conexión</b>, la <b>Presentación</b> y el <b>Cierre</b>, las probabilidades de cerrar suben hacia el <b>80%</b>. 8 de cada 10 invitados pueden convertirse en consumidores o en embajadores de tu negocio.<br><br>Muy rara vez aparecen objeciones — y cuando aparecen, las tratas por separado.</div>
  </div>

  <div class="cn-foot">Harvard of Sales · Módulo Cierre</div>
`;

// ============================================
// VERSIONS EN FRANÇAIS (servies pour les utilisateurs FR via ?lang=fr)
// ============================================

const conectare_fr = `
  <div class="cn-title-block">
    <h1 class="cn-h1">La connexion</h1>
    <div class="cn-subtitle">avant la présentation en tête-à-tête</div>
  </div>
  <p class="cn-lead">Avant toute présentation, il faut la <b>connexion</b>.</p>
  <p class="cn-lead">La connexion te dresse la « carte » du client : <b>ce qui lui fait mal</b> et <b>ce qui le réjouit</b>. Sans carte, tu présentes dans le vide.</p>

  <div class="cn-sec">Règles de performance avant la connexion</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Mets-toi dans un état optimal de performance</div>
      <div class="cn-rd">
        <p>Un cerveau dans un état positif travaille jusqu'à <b>31 % mieux</b> qu'un cerveau neutre ou stressé <em>(Shawn Achor, The Happiness Advantage)</em>.</p>
        <p>Avant d'entrer dans la connexion, fais <b>60 secondes</b> de mouvement énergique — ris, danse, saute.</p>
        <p>Ce n'est pas un caprice : ton état se transmet au client dès les premières secondes, avant le moindre mot. Tu entres depuis l'abondance, pas depuis le besoin de convaincre.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">À la présentation de groupe — connecte-toi 10–15 minutes avant</div>
      <div class="cn-rd">
        <p>Ne le jette pas directement dans la réunion de groupe — tu risques de le « brûler » 😊.</p>
        <p>La personne a besoin d'un pont chaleureux, en tête-à-tête, avant d'entrer parmi des inconnus.</p>
        <p class="cn-note"><em>(Cette règle prépare la variante de groupe du script — un module à part.)</em></p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Dresse la carte du client</div>
      <div class="cn-rd">
        <p>Avant de présenter, tu as besoin d'une « carte » de la personne en face de toi.</p>
        <p>Sur la carte, il y a deux choses : <b>ce qui lui fait mal</b> et <b>ce qui le réjouit</b>.</p>
        <p>C'est là-dessus que tu construis toute la présentation. Sans elle, tu présentes dans le noir.</p>
        <p>En face à face, tu la gardes en tête. En ligne — <b>écris-la sur une feuille</b>.</p>
        <p class="cn-note">Mais la carte n'apparaît pas de nulle part : tu la dessines en <b>posant des questions</b>. Comment ? 👉 point 4.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Les questions qui te construisent la carte</div>
      <div class="cn-rd">
        <p>La carte du point 3, tu la dessines par des <b>questions</b>.</p>
        <p>Le plus important à découvrir, c'est <span class="cn-big">ce qui lui fait mal</span> maintenant, dans sa vie.</p>
        <p>La douleur est le motivateur numéro un : dans ~75 % des cas, nous agissons pour <em>échapper</em> à une douleur — et seulement dans ~25 % pour <em>obtenir</em> un plaisir.</p>
        <p>Les gens cherchent d'abord des solutions à leurs problèmes, puis le plaisir.</p>
        <p>Alors demande d'abord ce qui pèse sur lui. Ce qui le réjouirait vient en second.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">La présentation en tête-à-tête N'EST PAS la même pour tous</div>
      <div class="cn-rd">
        <p>Tu présentes le produit / l'activité comme une <b>solution possible</b> à SA douleur, avec ses propres mots.</p>
        <p>Même produit, une porte d'entrée différente pour chaque personne.</p>
      </div>
    </div>
  </div>

  <div class="cn-golden">
    <div class="cn-gt">Règles d'or du script</div>

    <div class="cn-gitem">
      <div class="cn-ghead">1 · La tonalité fait la différence</div>
      <div class="cn-gbody">Ce n'est pas seulement CE que tu dis, mais <b>comment</b> tu le dis. Le sourire dans la voix, de vraies pauses (pas précipitées), un ton calme sur la question difficile, un ton joueur sur la blague. Les mêmes mots dits mécaniquement allument le radar ; dits avec chaleur, ils désarment. Le client entend dans ton ton si tu tiens vraiment à lui ou si tu joues seulement un rôle.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">2 · Ne fais pas semblant d'être comme lui</div>
      <div class="cn-gbody">Tu ne peux pas être dans la peau d'un autre. Dis seulement ce que <b>toi</b>, tu as vécu. C'est lui qui décide tout seul s'il te ressemble.
        <div class="cn-ban">
          <div class="cn-ban-label">Phrases classiques de MLM — ne les dis jamais</div>
          <ul>
            <li>« moi aussi j'ai été dans la même situation »</li>
            <li>« je sais exactement ce que c'est »</li>
            <li>« il faut absolument que tu voies ça »</li>
            <li>« j'ai pensé à toi quand j'ai vu le projet »</li>
            <li>« tu vas adorer »</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">3 · Le silence</div>
      <div class="cn-gbody">Après avoir demandé quelque chose, tais-toi. Même s'il y a un silence et qu'il te paraît long. Attends — <b>c'est lui qui parle en premier</b>. Celui qui parle en premier juste pour ne pas laisser le silence, perd.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">4 · Suis le script pas à pas</div>
      <div class="cn-gbody">Dis les mots exactement comme ils sont écrits. <b>Ne les change pas.</b> Et <b>ne change pas l'ordre des questions.</b> Chaque mot et chaque question sont dans un ordre précis pour une raison — si tu les déplaces, tout l'effet est cassé.</div>
    </div>

  </div>

  <div class="cn-sec">Le script de connexion (en tête-à-tête)</div>

  <div class="cn-precond"><b>⚠️ Ce script commence UNIQUEMENT après avoir déjà identifié les problèmes du client.</b><br>D'abord tu te connectes et tu découvres ce qui lui fait mal (les règles ci-dessus). Ce n'est qu'une fois sa douleur connue que tu entres dans le dialogue ci-dessous.</div>

  <div class="cn-legend">
    <span><span class="cn-lgchip">Aa</span> ce que tu dis</span>
    <span><span class="cn-cue">(italique)</span> = ton / ce que tu fais</span>
    <span><span class="cn-pause">⏸ pause</span> = tais-toi</span>
    <span><span class="cn-fill">[…]</span> = tu complètes · A / B = tu choisis</span>
  </div>

  <div class="cn-box">

    <p class="cn-line"><span class="cn-role">Agent :</span> Je t'ai entendu dire que… <span class="cn-fill">[décris le problème que tu sens être le plus grand pour lui]</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Oui…</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Est-ce un problème qui te <strong>ronge</strong> et auquel tu veux vraiment trouver une solution — ou peux-tu vivre avec ? <span class="cn-pause">⏸ tais-toi — laisse-le répondre</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Ça me ronge et je veux trouver une solution…</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> <span class="cn-fill">[Prénom]</span>… par curiosité je te demande : s'il existait une solution possible à <span class="cn-fill">[décris le problème]</span>… serais-tu ouvert à l'examiner — ou la refuserais-tu complètement… parce qu'elle vient de moi ? 😊</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Ça dépend de quoi il s'agit…</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> <span class="cn-fill">[Prénom]</span>… nous savons tous les deux que les gens sont réticents, méfiants, quand un ami leur présente quelque chose. Et il faut le reconnaître. <span class="cn-pause">⏸ tais-toi 2 secondes</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> C'est vrai…</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Aujourd'hui, je ne vais pas te sortir le classique « il faut absolument que tu voies ça ! C'est la merveille du monde, tu n'as jamais rien vu de pareil… » <span class="cn-cue">(en riant légèrement)</span> <span class="cn-pause">⏸ courte pause</span> Je serais trop classique… et je ne risque pas notre amitié… pour un produit.</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> <span class="cn-cue">(rit)</span></p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Moi, je vais parler ouvertement, comme un vrai présentateur <span class="cn-cue">(avec le sourire 😊)</span>… toi, tu analyses avec scepticisme, tu poses des questions, on s'amuse… et à la fin, le plus important reste quand même <strong>notre amitié</strong>. Ça te va ?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> OUI…</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Le produit / l'activité <span class="cn-cue">(choisis-en un, après ta présentation)</span> que tu vas voir est quelque chose que j'ai <strong>testé et vérifié</strong> dans <span class="cn-fill">[décris tes conditions — transmets confiance et crédibilité]</span>.</p>

    <p class="cn-line">Et la principale raison qui me pousse à en parler devant toi, c'est la <strong>confiance que j'ai</strong> en lui.</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Tout comme il m'a aidé dans <span class="cn-fill">[X — ta situation]</span>… <span class="cn-pause">⏸ courte pause</span> il se peut… que ce soit une solution pour toi aussi dans <span class="cn-fill">[Y — la situation / le souhait qu'il vient de te dire]</span>.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ courte pause</span></p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Comme tout produit, il a un coût. <span class="cn-cue">(sans chiffre maintenant — le montant vient dans la présentation)</span> Si tu y vois de la valeur, on reste amis. Si tu n'y vois pas de valeur, on reste amis tout autant. 😊</p>

    <span class="cn-zone">✅ C'est ici que se termine la Connexion. À partir d'ici commence la Présentation en tête-à-tête.</span>

  </div>

  <div class="cn-foot">Harvard of Sales · Module Connexion (en tête-à-tête)</div>
`;

const fulger_fr = [
  {
    dialog: [
      { vorbitor: "agent",  text: "Salut, George… J'avais vraiment peur de t'appeler." },
      { regie: "pause dramatique" },
      { vorbitor: "client", text: "Pourquoi… qu'est-ce qui s'est passé ?" },
      { vorbitor: "agent",  text: "Je voulais t'inviter à prendre un café et je craignais que tu me refuses." },
      { regie: "avec le sourire dans la voix" },
      { vorbitor: "client", text: "Comment pourrais-je te refuser… Où est-ce qu'on se voit ?" },
      { vorbitor: "agent",  text: "Mardi à ___ ou mercredi à ___ — laquelle te convient le mieux ? Allez, ça me manque de te parler…" },
      { regie: "tu lui donnes deux options concrètes de jour/heure" }
    ],
    obiectie: {
      titlu: "S'il te demande « de quoi veux-tu parler ? »",
      dialog: [
        { vorbitor: "client", text: "De quoi veux-tu parler ?" },
        { vorbitor: "agent",  text: "Si je te disais que c'est une surprise, insisterais-tu avec les questions ou me laisserais-tu ce plaisir ?" },
        { vorbitor: "client", text: "Non… je ne veux pas te gâcher la surprise. Parfait, on se voit mardi à ___." }
      ]
    },
    psihologie: [
      "La vulnérabilité avouée le sort du rôle de cible et le place dans celui de protecteur — il n'a plus rien contre quoi se défendre.",
      "La pause dramatique déplace le contrôle par le silence : c'est lui qui demande « qu'est-ce qui s'est passé ? », donc c'est lui qui mène vers le rendez-vous, pas toi.",
      "La « surprise » referme la boucle sans jamais prononcer le mot MLM — la curiosité prend la place de l'argument."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Salut, George… Depuis 3 heures je pense à t'inviter à prendre un café et j'avais vraiment peur que tu me refuses." },
      { regie: "pause dramatique" },
      { vorbitor: "client", text: "Comment pourrais-je te refuser… ?" },
      { vorbitor: "agent",  text: "Mardi à ___ ou mercredi à ___ — laquelle te convient le mieux ? Allez, ça me manque de te parler…" },
      { regie: "tu lui donnes deux options concrètes de jour/heure" }
    ],
    obiectie: {
      titlu: "S'il te demande « de quoi veux-tu parler ? »",
      dialog: [
        { vorbitor: "client", text: "De quoi veux-tu parler ?" },
        { vorbitor: "agent",  text: "Si je te disais que c'est une surprise, insisterais-tu avec les questions ou me laisserais-tu ce plaisir ?" },
        { vorbitor: "client", text: "Non… je ne veux pas te gâcher la surprise. Parfait, on se voit mardi à ___." }
      ]
    },
    psihologie: [
      "« Depuis 3 heures je pense à t'appeler » = signal d'investissement émotionnel : tu lui dis, sans le demander, que l'appel compte, qu'il n'est pas dû au hasard. Cela augmente la valeur de l'invitation.",
      "Tu coupes le temps intermédiaire de la variante 1 — même effet de désarmement, mais plus rapide, avec moins de place pour la résistance.",
      "La clôture « mardi ou mercredi ? » déplace la décision de SI à QUAND. Il ne choisit plus entre « oui » et « non », mais entre deux jours."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Salut, [prénom]… Je crois que la dernière chose que tu voulais entendre aujourd'hui, c'est une invitation à prendre un café…" },
      { regie: "avec le sourire dans la voix" },
      { vorbitor: "client", text: "C'est exactement ce dont j'avais besoin… Quand est-ce qu'on se voit ?" },
      { vorbitor: "agent",  text: "Mardi à ___ ou mercredi à ___ — allez, ça me manque de te parler…" },
      { vorbitor: "client", text: "Parfait, on se voit à ___." },
      { vorbitor: "agent",  text: "Comme on a été rapides… j'aime bien nous. On se voit [jour]." },
      { regie: "tu clôtures la conversation ici — pour qu'il n'ait pas le temps de demander de quoi il s'agit" }
    ],
    obiectie: null,
    psihologie: [
      "Tu nommes toi-même sa résistance avant qu'il ne la ressente (« la dernière chose que tu voulais entendre ») — tu désamorces l'objection avant qu'elle n'existe.",
      "La légère autodérision baisse l'enjeu : si toi tu ne prends pas les choses au sérieux, lui non plus ne ressent pas de pression, donc il n'a rien à refuser.",
      "« Comme on a été rapides… j'aime bien nous » ancre positivement sur le « nous » et te donne l'excuse naturelle pour clôturer avant le « de quoi il s'agit ? ». La consigne « je dois raccrocher » relève de la discipline, pas de la hâte."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Je t'ai appelé pour te dire que j'ai pris une décision très importante." },
      { vorbitor: "client", text: "Sérieux… quoi donc ?" },
      { vorbitor: "agent",  text: "Je sais que ça paraît bizarre… mais la décision importante, c'est de t'inviter à prendre un café." },
      { regie: "avec le sourire dans la voix" },
      { vorbitor: "client", text: "Ça c'est une nouvelle… tu veux me dire quelque chose ?" },
      { vorbitor: "agent",  text: "Tu crois que ce serait une idée totalement mauvaise ?" },
      { vorbitor: "client", text: "Non…" },
      { vorbitor: "agent",  text: "Lequel des jours t'irait ? Ou le week-end, puisque tu es plus libre ?" },
      { vorbitor: "client", text: "Le week-end…" },
      { vorbitor: "agent",  text: "La décision importante est adoptée. Samedi ou dimanche ?" },
      { regie: "avec le sourire dans la voix" },
      { vorbitor: "client", text: "Samedi, à 12 h 00." },
      { vorbitor: "agent",  text: "Noté… on se voit samedi avec le sourire. Maintenant je dois raccrocher." }
    ],
    obiectie: null,
    psihologie: [
      "Suspense + anticlimax : « j'ai pris une décision importante » ouvre la boucle, « la décision, c'est de t'inviter à prendre un café » la referme avec humour. Tension agréable, zéro pression.",
      "« Tu crois que ce serait une idée totalement mauvaise ? » est une question négative : il est bien plus difficile de dire « oui, c'est mauvais » que « non ». Tu orientes son cerveau vers l'acceptation sans le demander directement.",
      "Tu le fais choisir lui-même le jour (« le week-end, puisque tu es plus libre ») — décideur actif — puis tu clôtures avec fermeté, avec le sourire et « je dois raccrocher ». La curiosité reste intacte pour le rendez-vous."
    ]
  }
];

const prezentare_fr = `
  <div class="cn-title-block">
    <h1 class="cn-h1">La présentation en tête-à-tête</h1>
    <div class="cn-subtitle">dialogue, pas monologue</div>
  </div>
  <p class="cn-lead">La présentation en tête-à-tête doit être un <b>dialogue</b>, pas un monologue. Ce n'est qu'ainsi que tu obtiens 100 % de l'attention du client.</p>
  <p class="cn-lead">L'erreur que beaucoup font : ils présentent sans poser de questions de qualité — des questions qui aident le client à <b>prendre conscience</b> de la valeur du produit.</p>

  <div class="cn-precond"><b>⚠️ Pourquoi c'est important :</b> le client n'achète que les bénéfices dont il se souvient. Si tu présentes et qu'il écoute passivement, son esprit ne retient rien — à la fin, il <b>n'a aucun moyen</b> de justifier l'achat et tu reçois « je vais réfléchir », « je n'ai pas le temps », « je dois en parler à mon conjoint ». Un OUI arraché est un OUI faux.</div>

  <div class="cn-sec">Comment tu fixes les bénéfices dans son esprit</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Par des questions ouvertes, pas seulement par la présentation</div>
      <div class="cn-rd">
        <p>Tu fixes les avantages non pas en déversant de l'information, mais en posant des questions dont <b>lui</b> doit penser la réponse. L'esprit retient ce qu'il produit lui-même, pas ce qu'il entend.</p>
        <p>En plus, les questions ouvertes te montrent <b>comment le client raisonne</b> — ainsi tu sais sur quoi construire ta clôture.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Utilise des questions ouvertes : Comment / Quoi / Lequel / Qui</div>
      <div class="cn-rd">
        <p>Les questions ouvertes génèrent une réponse détaillée, qui te montre comment le client raisonne.</p>
        <p><b>Évite « Pourquoi… ? »</b> — ça sonne comme un interrogatoire et le met sur la défensive.</p>
        <p><b>Évite « Est-ce que par hasard… ? »</b> — ça sonne rhétorique et vague.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Interdites : les questions fermées et les questions-pièges</div>
      <div class="cn-rd">
        <p><b>Fermée</b> = réponse oui/non (ex. : « Aimerais-tu économiser sur les vacances ? »). Ça ne te dit rien sur sa façon de penser.</p>
        <p><b>Piège (orientée)</b> = fermée + tu lui mets la réponse dans la bouche (ex. : « N'est-ce pas que tes amis voudraient ça ? »). Il se sent manipulé et se ferme.</p>
        <div class="cn-ban">
          <div class="cn-ban-label">Pourquoi elles sont dangereuses</div>
          <ul>
            <li>Les gens détestent dire un OUI forcé</li>
            <li>Le client se sent manipulé et se ferme</li>
            <li>Tu crois avoir obtenu un OUI — mais il est faux, tu l'as forcé</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">La tonalité fait la différence</div>
      <div class="cn-rd">
        <p>La même question sonne comme un interrogatoire ou comme une curiosité chaleureuse, uniquement par le ton.</p>
        <p>Ton <b>descendant</b> en fin de phrase (l'interrogatoire monte), rythme lent, sourire dans la voix 😊 — puis <b>tais-toi</b>. C'est lui qui parle en premier.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Cadence : pas d'interrogatoire</div>
      <div class="cn-rd">
        <p>Choisis <b>3–4 questions pour la partie produit</b> et <b>3–4 pour la partie activité</b>.</p>
        <p>Répartis-les au fil de l'échange — une après chaque bénéfice, avec un silence ensuite — <b>jamais en rafale</b>. Sinon le client se sent en interrogatoire.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">6</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Note ses réponses</div>
      <div class="cn-rd">
        <p>Mentalement ou par écrit. Les mots qu'il te donne maintenant sont tes munitions — tu les utilises à la <b>clôture</b> (module à part).</p>
      </div>
    </div>
  </div>

  <div class="cn-sec">La banque de questions</div>
  <p class="cn-lead">Choisis 3–4 par zone. C'est un menu, pas une liste à cocher.</p>

  <div class="cn-box">

    <span class="cn-zone">🛍️ Partie produit</span>

    <p class="cn-line"><span class="cn-role">Pour lui :</span></p>
    <p class="cn-line cn-gap">« Quels seraient les bénéfices que toi, personnellement, tu tirerais en utilisant X ? »</p>
    <p class="cn-line cn-gap">« Comment ce produit pourrait-il t'aider dans ta vie ? »</p>
    <p class="cn-line cn-gap">« Qu'est-ce qui, exactement, te ferait dire qu'un produit a vraiment valu son prix ? »</p>
    <p class="cn-line cn-gap">« À quoi ressemblerait une de tes journées où <span class="cn-fill">[le problème que le produit résout]</span> ne serait plus un souci ? »</p>
    <p class="cn-line cn-gap">« Quelle serait la première chose que tu sentirais différente après quelques semaines d'utilisation ? »</p>
    <p class="cn-line cn-gap">« Qu'est-ce que ça représenterait pour toi de résoudre ça et de ne plus y penser ? »</p>

    <p class="cn-line"><span class="cn-role">Au-delà de lui :</span></p>
    <p class="cn-line cn-gap">« À part toi, qui d'autre profiterait de la qualité de ce produit / service ? »</p>
    <p class="cn-line cn-gap">« À part toi, qui d'autre pourrait profiter des avantages X, Y, Z ? »</p>
    <p class="cn-line cn-gap">« Qui, autour de toi, serait le premier à remarquer le changement chez toi ? »</p>
    <p class="cn-line cn-gap">« Que penserais-tu de transmettre à d'autres quelque chose qui t'a aidé toi ? »</p>

    <span class="cn-zone">💼 Partie activité</span>

    <p class="cn-line"><span class="cn-role">Pour lui :</span></p>
    <p class="cn-line cn-gap">« Comment un revenu supplémentaire de 500–1 000 EUR par mois pourrait-il t'aider, en développant ce projet à temps partiel ? »</p>
    <p class="cn-line cn-gap">« Quelles sont les choses que tu ferais avec un revenu supplémentaire de 500–1 000 EUR par mois ? »</p>
    <p class="cn-line cn-gap">« Qu'est-ce qu'un revenu supplémentaire de 500–1 000 EUR par mois, à temps partiel, changerait concrètement dans ta vie ? »</p>
    <p class="cn-line cn-gap">« Qu'est-ce que tu aimerais faire davantage, si le temps et l'argent n'étaient plus un problème ? »</p>

    <p class="cn-line"><span class="cn-role">Au-delà de lui :</span></p>
    <p class="cn-line cn-gap">« Qui d'autre profiterait d'un revenu mensuel de 500–1 000 EUR supplémentaires que tu produirais dans ta famille ? »</p>
    <p class="cn-line cn-gap">« Qui, dans ta famille, ressentirait le plus la différence de ce revenu ? »</p>
    <p class="cn-line cn-gap">« À part toi, qui d'autre aurait à y gagner si tu construisais ce projet ? »</p>
    <p class="cn-line cn-gap">« Comment ce serait de construire quelque chose à toi, à ton rythme, sans renoncer à ce que tu as maintenant ? »</p>

  </div>

  <div class="cn-precond" style="margin-top:18px"><b>📍 Uniquement pour la présentation en tête-à-tête.</b> La présentation de groupe fonctionne différemment et est traitée séparément.</div>

  <div class="cn-foot">Harvard of Sales · Module Présentation (en tête-à-tête)</div>
`;

const inchidere_fr = `
  <div class="cn-title-block">
    <h1 class="cn-h1">La clôture</h1>
    <div class="cn-subtitle">elle commence avec la connexion</div>
  </div>
  <p class="cn-lead">Tout ce que tu fais <b>avant</b> la clôture compte — c'est 90 % de la clôture. Si jusqu'ici tu as bien fait le travail, la clôture est facile. Sinon, tu galères.</p>

  <div class="cn-sec">Quand la clôture devient facile</div>
  <p class="cn-lead">La clôture n'est facile que si tu as réussi, dans les étapes précédentes, à :</p>
  <div class="cn-rule">
    <div class="cn-rule-num">✓</div>
    <div class="cn-rule-txt">
      <div class="cn-rd">
        <p>te connecter avec le client et le mettre à l'aise — ce n'est qu'ainsi qu'il accepte tes informations ;</p>
        <p>découvrir <b>ce qui lui fait mal</b> et <b>ce qui lui plaît</b> ;</p>
        <p>lui présenter le produit pile sur SON besoin, pas sur le tien ;</p>
        <p>faire une présentation en <b>dialogue, pas en monologue</b>, grâce à laquelle il prend conscience des bénéfices tout seul.</p>
        <p class="cn-note">Tu peux utiliser les meilleures questions de clôture — si ce qui précède n'est pas aligné, tu obtiens au mieux un OUI momentané, auquel il renonce aussitôt.</p>
      </div>
    </div>
  </div>

  <div class="cn-block">
    <div class="cn-block-h">Le meilleur closeur NE peut PAS clôturer tant que le client :</div>
    <ul>
      <li>n'a pas confiance dans le présentateur ;</li>
      <li>ne prend pas conscience des bénéfices ;</li>
      <li>ne sent pas que le produit / l'idée d'activité résout son problème MAINTENANT ou au plus vite ;</li>
      <li>ne croit pas qu'il peut le développer ;</li>
      <li>ne voit pas que son risque est <b>nul</b> ;</li>
      <li>ne réalise pas qu'il n'a RIEN à perdre.</li>
    </ul>
  </div>

  <div class="cn-sec">La formule d'une vente réussie</div>
  <p class="cn-lead">Tout ce que tu fais dans la clôture vise à maximiser ce que le client voit qu'il gagne et à minimiser ce qu'il sent que ça lui coûte — jusqu'à ce que le risque devienne nul.</p>
  <div class="if-wrap">
    <div class="if-gl if-max">▲ Tu maximises</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Le dream outcome du client</div><div class="val">Important</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Perception de la probabilité de réussite</div><div class="val">Très élevée</div></div>
    </div>
    <div class="if-bar"></div>
    <div class="if-gl if-min">▼ Tu minimises</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Temps jusqu'au résultat</div><div class="val">Ça arrive vite</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Effort &amp; sacrifices</div><div class="val">Faibles</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Peur / crainte</div><div class="val">Faible</div></div>
    </div>
    <div class="if-op">×</div>
    <div class="if-risk-wrap"><div class="if-risk">Risque nul</div></div>
    <div class="if-op">=</div>
    <div class="if-result"><div class="rl">Résultat</div><div class="rv">Client recruté</div></div>
  </div>

  <div class="cn-sec">Règles d'or de la clôture</div>
  <p class="cn-lead">Les mots, tu les as ci-dessous. Ce qui fait la différence à la clôture, c'est <b>comment</b> tu les livres.</p>
  <div class="cn-golden">
    <div class="cn-gt">Comment tu livres — 6 règles</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Le silence est l'outil n°1 &nbsp;⏸</div><div class="cn-gbody">Après chaque question — surtout celle de décision — tais-toi 5–6 secondes. Celui qui parle en premier juste pour briser le silence, perd.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Ton descendant, pas montant &nbsp;🔽</div><div class="cn-gbody">Baisse le ton en fin de phrase — calme, presque détaché. Une voix précipitée ou qui monte crie « j'ai besoin de cette vente », et le client se défend d'instinct.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Ralentis &nbsp;🐢</div><div class="cn-gbody">La nervosité = parler vite. Délibérément lent, avec des pauses <em>entre</em> les phrases aussi, pas seulement après les questions. Le rythme lent transmet le contrôle et l'assurance.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · État d'abondance / détachement</div><div class="cn-gbody">Sois sincèrement en paix avec un « non ». « Si tu y vois de la valeur, on reste amis ; sinon, pareil » — dis-le <b>en le pensant</b>. Si tu es accroché au « oui », le client sent l'accrochage.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">5 · Ne sauve pas, n'ajoute pas</div><div class="cn-gbody">Après « je te laisse décider » — zéro mot de plus. Le besoin de balancer un bénéfice de plus « pour aider » tue le moment. Le plus difficile à la clôture, c'est de ne plus rien dire.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">6 · Sourire calibré &nbsp;😊</div><div class="cn-gbody">Chaleureux sur les répliques de rapport et sur la blague ; mais sur la question de décision — ton neutre, calme. Un large sourire sur « tu lui donnerais une chance ? » sonne comme une vente, pas comme une curiosité sincère.</div></div>
  </div>
  <div class="cn-legend">
    <span><span class="cn-pause">⏸</span> tais-toi</span>
    <span><span class="cn-cue">😊</span> sourire dans la voix</span>
    <span><span class="cn-cue">🔽</span> baisse le ton</span>
    <span><span class="cn-cue">🐢</span> lent, sans hâte</span>
  </div>

  <div class="cn-sec">Les étapes de la clôture</div>
  <p class="cn-lead">Trois étapes, avec les questions psychologiques que tu poses à chacune.</p>

  <!-- ETAPA 1 -->
  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">La récapitulation des bénéfices</div>
      <div class="cn-rd">
        <p>Ici, utilise <b>une feuille et un stylo</b>. Pourquoi ? Pour aider ton client à <b>voir</b> les bénéfices, pas seulement à les entendre — il les intègre par deux sens, la vue et l'ouïe.</p>
        <p>À la fin, il lui est bien plus facile de voir que de se rappeler de mémoire. Tu te facilites le travail et tu lui allèges l'effort.</p>
        <p class="cn-note">Tu énumères les bénéfices que <b>LUI</b> t'a dits pendant la présentation-dialogue — pas les tiens.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-cue">🐢 lent, chaleureux</span> <span class="cn-role">Agent :</span> Maintenant que tu as tout le « tableau », est-ce que ça te va aussi qu'on fasse une petite récapitulation des bénéfices — et de voir si ces bénéfices résoudraient ton problème ? Sinon, ça n'aurait pas de sens…</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Oui…</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Estimes-tu que ce serait la meilleure méthode pour décider si le produit te convient ou non ?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Oui… je suis d'accord.</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Aurais-tu une autre proposition, ou est-ce ainsi que toi aussi tu prends tes décisions de oui ou non ?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Je fais pareil…</p>

    <span class="cn-zone">Et tu commences à énumérer les bénéfices qu'il t'a précisés pendant la présentation</span>

    <p class="cn-line"><span class="cn-role">Agent :</span> Tu m'as dit que <span class="cn-fill">[X — le bénéfice qu'il a nommé]</span>… pourrait être une solution pour toi. <span class="cn-pause">⏸ TAIS-TOI</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Oui… c'est vrai…</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Tu m'as dit que <span class="cn-fill">[Y — un autre de ses bénéfices]</span>… pourrait être une solution pour toi. <span class="cn-pause">⏸ TAIS-TOI</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Oui… c'est vrai…</p>
  </div>

  <!-- ETAPA 2 -->
  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">L'évaluation des risques</div>
      <div class="cn-rd">
        <p>Les agents MLM redoutent cette étape. Pourtant, c'est précisément elle qui <b>détend</b> le client et élimine les objections finales : « je vais réfléchir », « je dois en parler à mon conjoint ».</p>
        <p>Le client comprend que tu es vulnérable et que tu ne parles pas seulement de bénéfices, comme le font 99 % des classiques du MLM.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agent :</span> Maintenant qu'on connaît les bénéfices, je crois qu'il est important de parler aussi des risques. Personnellement, je prends mes décisions quand je mets en balance les gains et les risques. <span class="cn-cue">(sourire 😊)</span> Est-ce que ça t'aiderait toi aussi d'avoir une image plus claire à la fin ?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Oui… c'est bon… je fais pareil.</p>
  </div>
  <div class="cn-golden">
    <div class="cn-gt">Les 4 risques à désamorcer</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Risque financier</div><div class="cn-gbody">Il ne perd pas d'argent en achetant le produit — ou la somme investie est très petite par rapport à ce qu'il peut obtenir.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Risque d'effort</div><div class="cn-gbody">L'effort pour développer l'activité est faible.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Risque de temps</div><div class="cn-gbody">Il ne perd pas de temps pour se retrouver au final sans aucun résultat.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Risque d'image</div><div class="cn-gbody">Il représente une entreprise sérieuse et un bon produit — son image ne souffre pas devant ses amis.</div></div>
  </div>
  <p class="cn-note" style="margin-top:12px"><em>Ici, il n'existe pas de script fixe Agent–Client : il y a des milliers de produits sur le marché du MLM. Tu adaptes les 4 risques à ton produit / service concret.</em></p>

  <!-- ETAPA 3 -->
  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Recueillir la décision sans pression</div>
      <div class="cn-rd">
        <p>Tu l'amènes dans la position où il décide tout seul — comme au rayon — sans se sentir poussé.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agent :</span> Toi comme moi, on achète des produits <span class="cn-cue">(de santé, d'entretien, de soin, de vacances — tu nommes ton produit)</span> de façon régulière. <span class="cn-pause">⏸ Tais-toi</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> C'est vrai…</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> On va au rayon ou on va en ligne et on choisit son produit. On se renseigne soi-même pour savoir s'il est bon et on n'aime pas être poussé à acheter. <span class="cn-pause">⏸ TAIS-TOI</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> C'est vrai…</p>

    <p class="cn-line"><span class="cn-role">Agent :</span> Et maintenant la question sincère : si tu avais vu ce produit, qui peut résoudre <span class="cn-fill">[X — ce qu'il a précisé]</span>, lui donnerais-tu une chance ou le négligerais-tu complètement ? <span class="cn-cue">🔽 ton neutre, bas</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Client :</span> Je crois que je lui donnerais une chance…</p>

    <p class="cn-line"><span class="cn-cue">🐢🔽</span> <span class="cn-role">Agent :</span> Je ne peux pas te demander si tu achètes — l'instinct naturel de l'humain face à une telle question est de refuser. Le mien aussi… <span class="cn-pause">⏸ Tais-toi</span> Je te laisse, comme si tu étais seul au rayon, décider, sans rien ajouter de plus.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ TAIS-TOI · TAIS-TOI · TAIS-TOI — c'est le moment où tu te tais</span></p>
    <p class="cn-line" style="text-align:center;color:#6b6f79;font-size:14px"><em>Le cerveau a besoin de 5–6 secondes pour répondre à une question qui demande de réfléchir. NE remplis PAS la pause.</em></p>
  </div>

  <div class="cn-golden" style="margin-top:26px">
    <div class="cn-gt">Le résultat, si tu as fait toutes les étapes</div>
    <div class="cn-gbody" style="line-height:1.85">Si tu as parcouru correctement, selon MLM Psychology, la <b>Connexion</b>, la <b>Présentation</b> et la <b>Clôture</b>, les chances de clôturer montent vers <b>80 %</b>. 8 invités sur 10 peuvent devenir soit consommateurs, soit ambassadeurs de ton activité.<br><br>Les objections apparaissent très rarement — et quand elles apparaissent, tu les traites séparément.</div>
  </div>

  <div class="cn-foot">Harvard of Sales · Module Clôture</div>
`;

// ============================================
// DEUTSCHE VERSIONEN (ausgeliefert für DE-Nutzer über ?lang=de)
// ============================================

const conectare_de = `
  <div class="cn-title-block">
    <h1 class="cn-h1">Die Verbindung</h1>
    <div class="cn-subtitle">vor der Eins-zu-eins-Präsentation</div>
  </div>
  <p class="cn-lead">Vor jeder Präsentation braucht es die <b>Verbindung</b>.</p>
  <p class="cn-lead">Die Verbindung erstellt Ihnen die „Landkarte" des Kunden: <b>was ihm wehtut</b> und <b>was ihn freut</b>. Ohne Landkarte präsentieren Sie ins Leere.</p>

  <div class="cn-sec">Leistungsregeln vor der Verbindung</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Versetzen Sie sich in einen optimalen Leistungszustand</div>
      <div class="cn-rd">
        <p>Ein Gehirn in einem positiven Zustand arbeitet bis zu <b>31 % besser</b> als ein neutrales oder gestresstes <em>(Shawn Achor, The Happiness Advantage)</em>.</p>
        <p>Bevor Sie in die Verbindung eintreten, machen Sie <b>60 Sekunden</b> energische Bewegung — lachen, tanzen, springen.</p>
        <p>Das ist keine Marotte: Ihr Zustand überträgt sich in den ersten Sekunden auf den Kunden, noch vor jedem Wort. Sie treten aus der Fülle heraus auf, nicht aus dem Bedürfnis zu überzeugen.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Bei der Gruppenpräsentation — verbinden Sie sich 10–15 Minuten vorher</div>
      <div class="cn-rd">
        <p>Werfen Sie ihn nicht direkt in das Gruppentreffen — Sie riskieren, ihn zu „verbrühen" 😊.</p>
        <p>Der Mensch braucht eine warme Brücke, eins zu eins, bevor er unter Fremde tritt.</p>
        <p class="cn-note"><em>(Diese Regel bereitet die Gruppenvariante des Skripts vor — ein eigenes Modul.)</em></p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Erstellen Sie die Landkarte des Kunden</div>
      <div class="cn-rd">
        <p>Bevor Sie präsentieren, brauchen Sie eine „Landkarte" des Menschen vor Ihnen.</p>
        <p>Auf der Landkarte stehen zwei Dinge: <b>was ihm wehtut</b> und <b>was ihn freut</b>.</p>
        <p>Darauf bauen Sie die gesamte Präsentation auf. Ohne sie präsentieren Sie im Dunkeln.</p>
        <p>Von Angesicht zu Angesicht behalten Sie sie im Kopf. Online — <b>schreiben Sie sie auf ein Blatt</b>.</p>
        <p class="cn-note">Doch die Landkarte erscheint nicht aus dem Nichts: Sie zeichnen sie, indem Sie <b>Fragen stellen</b>. Wie? 👉 Punkt 4.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Die Fragen, die Ihnen die Landkarte bauen</div>
      <div class="cn-rd">
        <p>Die Landkarte aus Punkt 3 zeichnen Sie durch <b>Fragen</b>.</p>
        <p>Das Wichtigste, das Sie herausfinden müssen, ist <span class="cn-big">was ihm wehtut</span> — jetzt, in seinem Leben.</p>
        <p>Der Schmerz ist der Motivator Nummer eins: In ~75 % der Fälle handeln wir, um einem Schmerz zu <em>entkommen</em> — und nur in ~25 %, um ein Vergnügen zu <em>gewinnen</em>.</p>
        <p>Menschen suchen zuerst Lösungen für Probleme, dann Vergnügen.</p>
        <p>Fragen Sie also zuerst, was ihn bedrückt. Was ihn freuen würde, kommt an zweiter Stelle.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Die Eins-zu-eins-Präsentation ist NICHT für alle gleich</div>
      <div class="cn-rd">
        <p>Sie präsentieren das Produkt / das Geschäft als eine <b>mögliche Lösung</b> für SEINEN Schmerz, in seinen eigenen Worten.</p>
        <p>Dasselbe Produkt, ein anderes Eingangstor für jeden Menschen.</p>
      </div>
    </div>
  </div>

  <div class="cn-golden">
    <div class="cn-gt">Goldene Regeln des Skripts</div>

    <div class="cn-gitem">
      <div class="cn-ghead">1 · Die Tonalität macht den Unterschied</div>
      <div class="cn-gbody">Es zählt nicht nur, WAS Sie sagen, sondern <b>wie</b> Sie es sagen. Ein Lächeln in der Stimme, echte Pausen (nicht gehetzt), ein ruhiger Ton bei der schweren Frage, ein spielerischer Ton beim Scherz. Dieselben Worte mechanisch gesagt lassen das Radar anspringen; warm gesagt entwaffnen sie. Der Kunde hört am Ton, ob es Ihnen wirklich wichtig ist oder ob Sie nur eine Rolle spielen.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">2 · Tun Sie nicht so, als wären Sie wie er</div>
      <div class="cn-gbody">Sie können nicht in der Haut eines anderen stecken. Sagen Sie nur, was <b>Ihnen</b> widerfahren ist. Er merkt selbst, ob es ihm ähnelt.
        <div class="cn-ban">
          <div class="cn-ban-label">Klassische MLM-Sätze — sagen Sie sie niemals</div>
          <ul>
            <li>„ich war in genau derselben Situation"</li>
            <li>„ich weiß genau, wie das ist"</li>
            <li>„das müssen Sie sich unbedingt ansehen"</li>
            <li>„ich habe an Sie gedacht, als ich das Projekt sah"</li>
            <li>„das werden Sie absolut lieben"</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">3 · Die Stille</div>
      <div class="cn-gbody">Nachdem Sie etwas gefragt haben, schweigen Sie. Auch wenn Stille herrscht und sie Ihnen lang vorkommt. Warten Sie — <b>er spricht zuerst</b>. Wer zuerst spricht, nur um die Stille nicht auszuhalten, verliert.</div>
    </div>

    <div class="cn-gitem">
      <div class="cn-ghead">4 · Folgen Sie dem Skript Schritt für Schritt</div>
      <div class="cn-gbody">Sagen Sie die Worte genau so, wie sie geschrieben stehen. <b>Ändern Sie sie nicht.</b> Und <b>ändern Sie nicht die Reihenfolge der Fragen.</b> Jedes Wort und jede Frage steht aus einem Grund in einer bestimmten Reihenfolge — verschieben Sie sie, ist die ganze Wirkung dahin.</div>
    </div>

  </div>

  <div class="cn-sec">Das Verbindungsskript (eins zu eins)</div>

  <div class="cn-precond"><b>⚠️ Dieses Skript beginnt ERST, nachdem Sie die Probleme des Kunden bereits erkannt haben.</b><br>Zuerst verbinden Sie sich und finden heraus, was ihm wehtut (die Regeln oben). Erst wenn Sie seinen Schmerz kennen, treten Sie in den Dialog unten ein.</div>

  <div class="cn-legend">
    <span><span class="cn-lgchip">Aa</span> was Sie sagen</span>
    <span><span class="cn-cue">(kursiv)</span> = Ton / was Sie tun</span>
    <span><span class="cn-pause">⏸ Pause</span> = schweigen</span>
    <span><span class="cn-fill">[…]</span> = Sie füllen aus · A / B = Sie wählen</span>
  </div>

  <div class="cn-box">

    <p class="cn-line"><span class="cn-role">Agent:</span> Ich habe Sie sagen hören, dass… <span class="cn-fill">[beschreiben Sie das Problem, das Sie als sein größtes empfinden]</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Ja…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Ist es ein Problem, das Sie <strong>quält</strong> und für das Sie wirklich eine Lösung finden wollen — oder können Sie damit leben? <span class="cn-pause">⏸ schweigen — lassen Sie ihn antworten</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Es quält mich und ich will eine Lösung finden…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> <span class="cn-fill">[Name]</span>… aus Neugier frage ich Sie: Wenn es eine mögliche Lösung für <span class="cn-fill">[beschreiben Sie das Problem]</span> gäbe… wären Sie offen, sie sich anzusehen — oder würden Sie sie völlig ablehnen… weil sie von mir kommt? 😊</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Kommt darauf an, worum es geht…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> <span class="cn-fill">[Name]</span>… wir wissen beide, dass Menschen zurückhaltend und misstrauisch sind, wenn ein Freund ihnen etwas präsentiert. Und das müssen wir zugeben. <span class="cn-pause">⏸ schweigen Sie 2 Sekunden</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> So ist es…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Heute sage ich Ihnen nicht das klassische „das müssen Sie sich unbedingt ansehen! Es ist das Weltwunder, so etwas haben Sie noch nie gesehen…" <span class="cn-cue">(leicht lachend)</span> <span class="cn-pause">⏸ kurze Pause</span> Das wäre mir zu klassisch… und ich riskiere unsere Freundschaft nicht… für ein Produkt.</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> <span class="cn-cue">(lacht)</span></p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Ich spreche offen, wie ein echter Präsentator <span class="cn-cue">(mit einem Lächeln 😊)</span>… Sie analysieren skeptisch, stellen Fragen, wir haben Spaß… und am Ende bleibt das Wichtigste doch <strong>unsere Freundschaft</strong>. Ist das in Ordnung so?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> JA…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Das Produkt / das Geschäft <span class="cn-cue">(wählen Sie eines, nachdem Sie präsentiert haben)</span>, das Sie gleich sehen, ist etwas, das ich <strong>getestet und überprüft</strong> habe in <span class="cn-fill">[beschreiben Sie Ihre Bedingungen — vermitteln Sie Vertrauen und Glaubwürdigkeit]</span>.</p>

    <p class="cn-line">Und der Hauptgrund, der mich dazu bewegt, vor Ihnen darüber zu sprechen, ist das <strong>Vertrauen, das ich</strong> darin habe.</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> So wie es mir bei <span class="cn-fill">[X — Ihre Situation]</span> geholfen hat… <span class="cn-pause">⏸ kurze Pause</span> ist es möglich… dass es auch für Sie eine Lösung ist bei <span class="cn-fill">[Y — die Situation / der Wunsch, den er Ihnen gerade genannt hat]</span>.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ kurze Pause</span></p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Wie jedes Produkt hat es einen Preis. <span class="cn-cue">(jetzt ohne Zahl — die Summe kommt in der Präsentation)</span> Wenn Sie einen Wert darin sehen, bleiben wir Freunde. Wenn Sie keinen Wert darin sehen, bleiben wir genauso Freunde. 😊</p>

    <span class="cn-zone">✅ Hier endet die Verbindung. Von hier beginnt die Eins-zu-eins-Präsentation.</span>

  </div>

  <div class="cn-foot">Harvard of Sales · Modul Verbindung (eins zu eins)</div>
`;

const fulger_de = [
  {
    dialog: [
      { vorbitor: "agent",  text: "Ich grüße Sie, George… Ich hatte richtig Angst, Sie anzurufen." },
      { regie: "dramatische Pause" },
      { vorbitor: "client", text: "Warum… was ist passiert?" },
      { vorbitor: "agent",  text: "Ich wollte Sie auf einen Kaffee einladen und hatte Angst, dass Sie mir absagen." },
      { regie: "mit einem Lächeln in der Stimme" },
      { vorbitor: "client", text: "Wie könnte ich Ihnen absagen… Wo treffen wir uns?" },
      { vorbitor: "agent",  text: "Dienstag um ___ oder Mittwoch um ___ — welche Variante passt Ihnen besser? Kommen Sie, ich vermisse unsere Gespräche…" },
      { regie: "Sie geben ihm zwei konkrete Tag/Uhrzeit-Optionen" }
    ],
    obiectie: {
      titlu: "Wenn er Sie fragt „worüber möchten Sie sprechen?”",
      dialog: [
        { vorbitor: "client", text: "Worüber möchten Sie sprechen?" },
        { vorbitor: "agent",  text: "Wenn ich Ihnen sagen würde, dass es eine Überraschung ist, würden Sie mit Fragen nachbohren oder mir diese Freude lassen?" },
        { vorbitor: "client", text: "Nein… ich will Ihnen die Überraschung nicht verderben. Perfekt, wir sehen uns Dienstag um ___." }
      ]
    },
    psihologie: [
      "Die eingestandene Verletzlichkeit holt ihn aus der Rolle der Zielscheibe und versetzt ihn in die Rolle des Beschützers — er hat nichts mehr, wogegen er sich wehren müsste.",
      "Die dramatische Pause verlagert die Kontrolle durch das Schweigen: Er fragt „was ist passiert?”, also führt er zum Treffen hin, nicht Sie.",
      "Die „Überraschung” schließt die Schleife, ohne je das Wort MLM auszusprechen — die Neugier tritt an die Stelle des Arguments."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Ich grüße Sie, George… Seit 3 Stunden überlege ich, Sie auf einen Kaffee einzuladen, und ich hatte richtig Angst, dass Sie mir absagen." },
      { regie: "dramatische Pause" },
      { vorbitor: "client", text: "Wie könnte ich Ihnen absagen…?" },
      { vorbitor: "agent",  text: "Dienstag um ___ oder Mittwoch um ___ — welche Variante passt Ihnen besser? Kommen Sie, ich vermisse unsere Gespräche…" },
      { regie: "Sie geben ihm zwei konkrete Tag/Uhrzeit-Optionen" }
    ],
    obiectie: {
      titlu: "Wenn er Sie fragt „worüber möchten Sie sprechen?”",
      dialog: [
        { vorbitor: "client", text: "Worüber möchten Sie sprechen?" },
        { vorbitor: "agent",  text: "Wenn ich Ihnen sagen würde, dass es eine Überraschung ist, würden Sie mit Fragen nachbohren oder mir diese Freude lassen?" },
        { vorbitor: "client", text: "Nein… ich will Ihnen die Überraschung nicht verderben. Perfekt, wir sehen uns Dienstag um ___." }
      ]
    },
    psihologie: [
      "„Seit 3 Stunden überlege ich, Sie anzurufen” = ein Signal emotionaler Investition: Sie sagen ihm, ohne es zu verlangen, dass der Anruf zählt, dass er nicht zufällig ist. Das steigert den Wert der Einladung.",
      "Sie streichen den Zwischenschritt aus Variante 1 — dieselbe entwaffnende Wirkung, aber schneller, mit weniger Raum für Widerstand.",
      "Der Abschluss „Dienstag oder Mittwoch?” verschiebt die Entscheidung von OB zu WANN. Er wählt nicht mehr zwischen „ja” und „nein”, sondern zwischen zwei Tagen."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Ich grüße Sie, [Name]… Ich glaube, das Letzte, was Sie heute hören wollten, ist eine Einladung auf einen Kaffee…" },
      { regie: "mit einem Lächeln in der Stimme" },
      { vorbitor: "client", text: "Genau das habe ich gebraucht… Wann sehen wir uns?" },
      { vorbitor: "agent",  text: "Dienstag um ___ oder Mittwoch um ___ — kommen Sie, ich vermisse unsere Gespräche…" },
      { vorbitor: "client", text: "Perfekt, wir sehen uns um ___." },
      { vorbitor: "agent",  text: "Wie schnell wir waren… ich mag uns. Wir sehen uns [Tag]." },
      { regie: "Sie beenden das Gespräch hier — damit er keine Gelegenheit bekommt zu fragen, worum es geht" }
    ],
    obiectie: null,
    psihologie: [
      "Sie benennen selbst seinen Widerstand, bevor er ihn spürt („das Letzte, was Sie heute hören wollten”) — Sie entschärfen den Einwand, bevor er entsteht.",
      "Die leichte Selbstironie senkt den Einsatz: Wenn Sie die Dinge nicht ernst nehmen, spürt auch er keinen Druck, also hat er nichts abzulehnen.",
      "„Wie schnell wir waren… ich mag uns” verankert positiv auf dem „wir” und gibt Ihnen die natürliche Ausrede, aufzulegen, bevor das „worum geht es?” kommt. Die Regieanweisung „ich muss auflegen” ist Disziplin, nicht Eile."
    ]
  },
  {
    dialog: [
      { vorbitor: "agent",  text: "Ich habe Sie angerufen, um Ihnen zu sagen, dass ich eine sehr wichtige Entscheidung getroffen habe." },
      { vorbitor: "client", text: "Im Ernst… was denn?" },
      { vorbitor: "agent",  text: "Ich weiß, es klingt seltsam… aber die wichtige Entscheidung ist, Sie auf einen Kaffee einzuladen." },
      { regie: "mit einem Lächeln in der Stimme" },
      { vorbitor: "client", text: "Das ist mal eine Neuigkeit… wollen Sie mir etwas sagen?" },
      { vorbitor: "agent",  text: "Glauben Sie, das wäre eine völlig falsche Idee?" },
      { vorbitor: "client", text: "Nein…" },
      { vorbitor: "agent",  text: "Welcher der Tage würde Ihnen passen? Oder das Wochenende, da Sie freier sind?" },
      { vorbitor: "client", text: "Wochenende…" },
      { vorbitor: "agent",  text: "Die wichtige Entscheidung ist angenommen. Samstag oder Sonntag?" },
      { regie: "mit einem Lächeln in der Stimme" },
      { vorbitor: "client", text: "Samstag, um 12:00 Uhr." },
      { vorbitor: "agent",  text: "Notiert… wir sehen uns Samstag mit einem Lächeln im Gesicht. Jetzt muss ich auflegen." }
    ],
    obiectie: null,
    psihologie: [
      "Spannung + Antiklimax: „ich habe eine wichtige Entscheidung getroffen” öffnet die Schleife, „die Entscheidung ist, Sie auf einen Kaffee einzuladen” schließt sie mit Humor. Angenehme Spannung, null Druck.",
      "„Glauben Sie, das wäre eine völlig falsche Idee?” ist eine Negativfrage: Es ist viel schwerer, „ja, sie ist falsch” zu sagen als „nein”. Sie lenken sein Gehirn zur Zustimmung, ohne direkt zu fragen.",
      "Sie lassen ihn selbst den Tag wählen („das Wochenende, da Sie freier sind”) — aktiver Entscheider — dann schließen Sie fest ab, mit einem Lächeln und „ich muss auflegen”. Die Neugier bleibt für das Treffen unberührt."
    ]
  }
];

const prezentare_de = `
  <div class="cn-title-block">
    <h1 class="cn-h1">Die Eins-zu-eins-Präsentation</h1>
    <div class="cn-subtitle">Dialog, kein Monolog</div>
  </div>
  <p class="cn-lead">Die Eins-zu-eins-Präsentation muss ein <b>Dialog</b> sein, kein Monolog. Nur so haben Sie die Aufmerksamkeit des Kunden zu 100 %.</p>
  <p class="cn-lead">Der Fehler, den viele machen: Sie präsentieren, ohne hochwertige Fragen zu stellen — Fragen, die dem Kunden helfen, sich des Werts des Produkts <b>bewusst zu werden</b>.</p>

  <div class="cn-precond"><b>⚠️ Warum das zählt:</b> Der Kunde kauft nur die Vorteile, an die er sich erinnert. Wenn Sie präsentieren und er passiv zuhört, behält sein Verstand nichts — am Ende <b>kann er nicht</b> den Kauf rechtfertigen und Sie erhalten „ich überlege es mir", „ich habe keine Zeit", „ich muss mit meinem Partner sprechen". Ein erzwungenes JA ist ein falsches JA.</div>

  <div class="cn-sec">Wie Sie die Vorteile in seinem Kopf verankern</div>

  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Durch offene Fragen, nicht nur durch die Präsentation</div>
      <div class="cn-rd">
        <p>Sie verankern die Vorteile nicht, indem Sie Informationen ausschütten, sondern indem Sie Fragen stellen, deren Antwort <b>er</b> selbst denken muss. Der Verstand behält, was er selbst hervorbringt, nicht was er hört.</p>
        <p>Außerdem zeigen Ihnen offene Fragen, <b>wie der Kunde denkt</b> — so wissen Sie, worauf Sie den Abschluss aufbauen.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Nutzen Sie offene Fragen: Wie / Was / Welche / Wer</div>
      <div class="cn-rd">
        <p>Offene Fragen erzeugen eine ausführliche Antwort, die Ihnen zeigt, wie der Kunde denkt.</p>
        <p><b>Vermeiden Sie „Warum…?"</b> — es klingt nach einem Verhör und bringt ihn in die Defensive.</p>
        <p><b>Vermeiden Sie „Ob wohl…?"</b> — es klingt rhetorisch und vage.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Verboten: geschlossene und Fangfragen</div>
      <div class="cn-rd">
        <p><b>Geschlossen</b> = Ja/Nein-Antwort (z. B.: „Würden Sie gern bei den Urlauben sparen?"). Sie sagt Ihnen nichts darüber, wie er denkt.</p>
        <p><b>Fangfrage (suggestiv)</b> = geschlossen + Sie legen ihm die Antwort in den Mund (z. B.: „Nicht wahr, Ihre Freunde würden das wollen?"). Er fühlt sich manipuliert und verschließt sich.</p>
        <div class="cn-ban">
          <div class="cn-ban-label">Warum sie gefährlich sind</div>
          <ul>
            <li>Menschen hassen es, ein erzwungenes JA zu sagen</li>
            <li>Der Kunde fühlt sich manipuliert und verschließt sich</li>
            <li>Sie glauben, ein JA bekommen zu haben — aber es ist falsch, Sie haben ihn gezwungen</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">4</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Die Tonalität macht den Unterschied</div>
      <div class="cn-rd">
        <p>Dieselbe Frage klingt allein durch den Ton nach einem Verhör oder nach warmer Neugier.</p>
        <p><b>Absteigender</b> Ton am Ende (ein Verhör steigt an), langsames Tempo, ein Lächeln in der Stimme 😊 — dann <b>schweigen</b>. Er spricht zuerst.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">5</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Kadenz: kein Verhör</div>
      <div class="cn-rd">
        <p>Wählen Sie <b>3–4 Fragen für den Produktteil</b> und <b>3–4 für den Geschäftsteil</b>.</p>
        <p>Verteilen Sie sie über den Verlauf — eine nach jedem Vorteil, mit Stille danach — <b>niemals in Salven</b>. Sonst fühlt sich der Kunde wie im Verhör.</p>
      </div>
    </div>
  </div>

  <div class="cn-rule">
    <div class="cn-rule-num">6</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Notieren Sie seine Antworten</div>
      <div class="cn-rd">
        <p>Im Kopf oder schriftlich. Die Worte, die er Ihnen jetzt gibt, sind Ihre Munition — Sie nutzen sie beim <b>Abschluss</b> (eigenes Modul).</p>
      </div>
    </div>
  </div>

  <div class="cn-sec">Die Fragenbank</div>
  <p class="cn-lead">Wählen Sie 3–4 aus jedem Bereich. Es ist ein Menü, keine Abhakliste.</p>

  <div class="cn-box">

    <span class="cn-zone">🛍️ Produktteil</span>

    <p class="cn-line"><span class="cn-role">Für ihn:</span></p>
    <p class="cn-line cn-gap">„Welche Vorteile hätten gerade Sie persönlich, wenn Sie X nutzen?"</p>
    <p class="cn-line cn-gap">„Wie könnte Ihnen dieses Produkt in Ihrem Leben helfen?"</p>
    <p class="cn-line cn-gap">„Was genau würde Sie sagen lassen, dass ein Produkt sein Geld wirklich wert war?"</p>
    <p class="cn-line cn-gap">„Wie würde ein Tag von Ihnen aussehen, an dem <span class="cn-fill">[das Problem, das das Produkt löst]</span> keine Sorge mehr wäre?"</p>
    <p class="cn-line cn-gap">„Was wäre das Erste, das sich für Sie anders anfühlt, nach ein paar Wochen, in denen Sie es nutzen?"</p>
    <p class="cn-line cn-gap">„Was würde es für Sie bedeuten, das zu lösen und nicht mehr daran zu denken?"</p>

    <p class="cn-line"><span class="cn-role">Über ihn hinaus:</span></p>
    <p class="cn-line cn-gap">„Wer außer Ihnen würde sich noch über die Qualität dieses Produkts / dieser Dienstleistung freuen?"</p>
    <p class="cn-line cn-gap">„Wer außer Ihnen könnte sich noch über die Vorteile X, Y, Z freuen?"</p>
    <p class="cn-line cn-gap">„Wer in Ihrem Umfeld würde die Veränderung an Ihnen zuerst bemerken?"</p>
    <p class="cn-line cn-gap">„Wie fänden Sie es, etwas weiterzugeben, das Ihnen selbst geholfen hat?"</p>

    <span class="cn-zone">💼 Geschäftsteil</span>

    <p class="cn-line"><span class="cn-role">Für ihn:</span></p>
    <p class="cn-line cn-gap">„Wie könnte Ihnen ein Zusatzeinkommen von 500–1.000 EUR im Monat helfen, wenn Sie dieses Projekt in Teilzeit aufbauen?"</p>
    <p class="cn-line cn-gap">„Was sind die Dinge, die Sie mit einem Zusatzeinkommen von 500–1.000 EUR im Monat tun würden?"</p>
    <p class="cn-line cn-gap">„Was würde ein Zusatzeinkommen von 500–1.000 EUR im Monat, in Teilzeit, konkret in Ihrem Leben verändern?"</p>
    <p class="cn-line cn-gap">„Was würden Sie gern mehr tun, wenn Zeit und Geld nicht mehr das Problem wären?"</p>

    <p class="cn-line"><span class="cn-role">Über ihn hinaus:</span></p>
    <p class="cn-line cn-gap">„Wer würde sich noch über ein monatliches Zusatzeinkommen von 500–1.000 EUR freuen, das Sie in Ihrer Familie erwirtschaften würden?"</p>
    <p class="cn-line cn-gap">„Wer in Ihrer Familie würde den Unterschied dieses Einkommens am meisten spüren?"</p>
    <p class="cn-line cn-gap">„Wer außer Ihnen hätte noch etwas davon, wenn Sie dieses Projekt aufbauen würden?"</p>
    <p class="cn-line cn-gap">„Wie wäre es, etwas Eigenes aufzubauen, in Ihrem Tempo, ohne aufzugeben, was Sie jetzt haben?"</p>

  </div>

  <div class="cn-precond" style="margin-top:18px"><b>📍 Nur für die Eins-zu-eins-Präsentation.</b> Die Gruppenpräsentation funktioniert anders und wird gesondert behandelt.</div>

  <div class="cn-foot">Harvard of Sales · Modul Präsentation (eins zu eins)</div>
`;

const inchidere_de = `
  <div class="cn-title-block">
    <h1 class="cn-h1">Der Abschluss</h1>
    <div class="cn-subtitle">er beginnt mit der Verbindung</div>
  </div>
  <p class="cn-lead">Alles, was Sie <b>vor</b> dem Abschluss tun, zählt — es sind 90 % des Abschlusses. Wenn Sie bis hierher gute Arbeit geleistet haben, ist der Abschluss leicht. Wenn nicht, quälen Sie sich.</p>

  <div class="cn-sec">Wann der Abschluss leicht wird</div>
  <p class="cn-lead">Der Abschluss ist nur dann leicht, wenn es Ihnen in den vorherigen Phasen gelungen ist:</p>
  <div class="cn-rule">
    <div class="cn-rule-num">✓</div>
    <div class="cn-rule-txt">
      <div class="cn-rd">
        <p>sich mit dem Kunden zu verbinden und ihn entspannt fühlen zu lassen — nur so nimmt er Ihre Informationen an;</p>
        <p>herauszufinden, <b>was ihm wehtut</b> und <b>was ihm gefällt</b>;</p>
        <p>ihm das Produkt genau auf SEINEN Bedarf zu präsentieren, nicht auf Ihren;</p>
        <p>eine Präsentation als <b>Dialog, kein Monolog</b> zu halten, durch die er sich der Vorteile selbst bewusst wird.</p>
        <p class="cn-note">Sie können die besten Abschlussfragen nutzen — wenn das Obige nicht stimmt, erhalten Sie höchstens ein momentanes JA, das er sofort wieder aufgibt.</p>
      </div>
    </div>
  </div>

  <div class="cn-block">
    <div class="cn-block-h">Der beste Closer KANN nicht abschließen, solange der Kunde:</div>
    <ul>
      <li>kein Vertrauen in den Präsentator hat;</li>
      <li>sich der Vorteile nicht bewusst ist;</li>
      <li>nicht spürt, dass das Produkt / die Geschäftsidee sein Problem JETZT oder so bald wie möglich löst;</li>
      <li>nicht glaubt, dass er es aufbauen kann;</li>
      <li>nicht sieht, dass sein Risiko <b>null</b> ist;</li>
      <li>nicht erkennt, dass er NICHTS zu verlieren hat.</li>
    </ul>
  </div>

  <div class="cn-sec">Die Formel eines erfolgreichen Verkaufs</div>
  <p class="cn-lead">Alles, was Sie im Abschluss tun, zielt darauf ab, zu maximieren, was der Kunde als Gewinn sieht, und zu minimieren, was er als Kosten empfindet — bis das Risiko null wird.</p>
  <div class="if-wrap">
    <div class="if-gl if-max">▲ Sie maximieren</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Dream Outcome des Kunden</div><div class="val">Wichtig</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Wahrgenommene Wahrscheinlichkeit des Erreichens</div><div class="val">Sehr hoch</div></div>
    </div>
    <div class="if-bar"></div>
    <div class="if-gl if-min">▼ Sie minimieren</div>
    <div class="if-row">
      <div class="if-card"><div class="lab">Zeit bis zum Ergebnis</div><div class="val">Geschieht schnell</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Aufwand &amp; Opfer</div><div class="val">Gering</div></div>
      <div class="if-x">×</div>
      <div class="if-card"><div class="lab">Angst / Furcht</div><div class="val">Gering</div></div>
    </div>
    <div class="if-op">×</div>
    <div class="if-risk-wrap"><div class="if-risk">Null Risiko</div></div>
    <div class="if-op">=</div>
    <div class="if-result"><div class="rl">Ergebnis</div><div class="rv">Kunde gewonnen</div></div>
  </div>

  <div class="cn-sec">Goldene Regeln des Abschlusses</div>
  <p class="cn-lead">Die Worte haben Sie unten. Was beim Abschluss den Unterschied macht, ist <b>wie</b> Sie sie liefern.</p>
  <div class="cn-golden">
    <div class="cn-gt">Wie Sie liefern — 6 Regeln</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Die Stille ist Werkzeug #1 &nbsp;⏸</div><div class="cn-gbody">Nach jeder Frage — vor allem der Entscheidungsfrage — schweigen Sie 5–6 Sekunden. Wer zuerst spricht, nur um die Stille zu brechen, verliert.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Absteigender Ton, nicht ansteigend &nbsp;🔽</div><div class="cn-gbody">Senken Sie den Ton am Satzende — ruhig, fast gelassen. Eine gehetzte oder ansteigende Stimme schreit „ich brauche diesen Verkauf", und der Kunde wehrt sich instinktiv.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Langsamer &nbsp;🐢</div><div class="cn-gbody">Nervosität = schnelles Sprechen. Bewusst langsam, mit Pausen auch <em>zwischen</em> den Sätzen, nicht nur nach den Fragen. Das langsame Tempo vermittelt Kontrolle und Sicherheit.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Zustand der Fülle / Gelassenheit</div><div class="cn-gbody">Seien Sie ehrlich einverstanden mit einem „nein". „Wenn Sie einen Wert sehen, bleiben wir Freunde; wenn nicht, ebenso" — sagen Sie es und <b>meinen Sie es</b>. Wenn Sie am „ja" hängen, wittert der Kunde das Klammern.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">5 · Nicht retten, nicht nachlegen</div><div class="cn-gbody">Nach „ich überlasse Ihnen die Entscheidung" — kein einziges Wort mehr. Der Drang, noch einen Vorteil „zum Helfen" hinterherzuwerfen, tötet den Moment. Das Schwerste beim Abschluss ist, nichts mehr zu sagen.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">6 · Kalibriertes Lächeln &nbsp;😊</div><div class="cn-gbody">Warm bei den Rapport-Zeilen und beim Scherz; aber bei der Entscheidungsfrage — ein neutraler, ruhiger Ton. Ein breites Lächeln bei „würden Sie ihm eine Chance geben?" klingt nach Verkauf, nicht nach aufrichtiger Neugier.</div></div>
  </div>
  <div class="cn-legend">
    <span><span class="cn-pause">⏸</span> schweigen</span>
    <span><span class="cn-cue">😊</span> Lächeln in der Stimme</span>
    <span><span class="cn-cue">🔽</span> Ton senken</span>
    <span><span class="cn-cue">🐢</span> langsam, ohne Eile</span>
  </div>

  <div class="cn-sec">Die Phasen des Abschlusses</div>
  <p class="cn-lead">Drei Phasen, mit den psychologischen Fragen, die Sie in jeder stellen.</p>

  <!-- ETAPA 1 -->
  <div class="cn-rule">
    <div class="cn-rule-num">1</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Die Zusammenfassung der Vorteile</div>
      <div class="cn-rd">
        <p>Hier verwenden Sie <b>ein Blatt und einen Stift</b>. Warum? Um Ihrem Kunden zu helfen, die Vorteile zu <b>sehen</b>, nicht nur zu hören — er nimmt sie über zwei Sinne auf, sehen und hören.</p>
        <p>Am Ende fällt es ihm viel leichter zu sehen als aus dem Gedächtnis abzurufen. Sie erleichtern sich die Arbeit und ihm die Mühe.</p>
        <p class="cn-note">Sie zählen die Vorteile auf, die <b>ER</b> Ihnen während der Dialog-Präsentation genannt hat — nicht Ihre.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-cue">🐢 langsam, warm</span> <span class="cn-role">Agent:</span> Jetzt, da Sie das ganze „Bild" haben, ist es auch für Sie in Ordnung, eine kleine Zusammenfassung der Vorteile zu machen — und ob diese Vorteile Ihr Problem lösen würden? Sonst hätte es keinen Sinn…</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Ja…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Halten Sie es für die beste Methode, um zu entscheiden, ob das Produkt zu Ihnen passt oder nicht?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Ja… ich bin einverstanden.</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Hätten Sie einen anderen Vorschlag, oder treffen auch Sie so Ihre Ja-oder-Nein-Entscheidungen?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Ich mache es genauso…</p>

    <span class="cn-zone">Und Sie beginnen, die Vorteile aufzuzählen, die er Ihnen in der Präsentation genannt hat</span>

    <p class="cn-line"><span class="cn-role">Agent:</span> Sie haben mir gesagt, dass <span class="cn-fill">[X — der Vorteil, den er genannt hat]</span>… eine Lösung für Sie sein könnte. <span class="cn-pause">⏸ SCHWEIGEN</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Ja… so ist es…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Sie haben mir gesagt, dass <span class="cn-fill">[Y — ein weiterer seiner Vorteile]</span>… eine Lösung für Sie sein könnte. <span class="cn-pause">⏸ SCHWEIGEN</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Ja… so ist es…</p>
  </div>

  <!-- ETAPA 2 -->
  <div class="cn-rule">
    <div class="cn-rule-num">2</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Die Bewertung der Risiken</div>
      <div class="cn-rd">
        <p>MLM-Agenten fürchten diese Phase. Doch gerade sie <b>entspannt</b> den Kunden und beseitigt die letzten Einwände: „ich überlege es mir", „ich muss mit meinem Partner sprechen".</p>
        <p>Der Kunde versteht, dass Sie verletzlich sind und nicht nur von Vorteilen sprechen, wie es 99 % der MLM-Klassiker tun.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agent:</span> Jetzt, da wir die Vorteile kennen, halte ich es für wichtig, auch über die Risiken zu sprechen. Ich persönlich treffe Entscheidungen, wenn ich Gewinne gegen Risiken abwäge. <span class="cn-cue">(Lächeln 😊)</span> Würde es auch Ihnen helfen, am Ende ein klareres Bild zu haben?</p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Ja… das ist in Ordnung… ich mache es genauso.</p>
  </div>
  <div class="cn-golden">
    <div class="cn-gt">Die 4 zu entschärfenden Risiken</div>
    <div class="cn-gitem"><div class="cn-ghead">1 · Finanzielles Risiko</div><div class="cn-gbody">Er verliert kein Geld durch den Kauf des Produkts — oder die investierte Summe ist sehr klein im Vergleich zu dem, was er gewinnen kann.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">2 · Aufwandsrisiko</div><div class="cn-gbody">Der Aufwand, das Geschäft aufzubauen, ist gering.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">3 · Zeitrisiko</div><div class="cn-gbody">Er verliert keine Zeit, um am Ende ohne jedes Ergebnis dazustehen.</div></div>
    <div class="cn-gitem"><div class="cn-ghead">4 · Imagerisiko</div><div class="cn-gbody">Er vertritt ein seriöses Unternehmen und ein gutes Produkt — sein Image leidet vor seinen Freunden nicht.</div></div>
  </div>
  <p class="cn-note" style="margin-top:12px"><em>Hier gibt es kein festes Agent-Kunde-Skript: Es gibt Tausende Produkte auf dem MLM-Markt. Sie passen die 4 Risiken an Ihr konkretes Produkt / Ihre Dienstleistung an.</em></p>

  <!-- ETAPA 3 -->
  <div class="cn-rule">
    <div class="cn-rule-num">3</div>
    <div class="cn-rule-txt">
      <div class="cn-rt">Die Entscheidung ohne Druck einholen</div>
      <div class="cn-rd">
        <p>Sie bringen ihn in die Lage, in der er selbst entscheidet — wie am Regal — ohne sich gedrängt zu fühlen.</p>
      </div>
    </div>
  </div>
  <div class="cn-box">
    <p class="cn-line"><span class="cn-role">Agent:</span> Sowohl Sie als auch ich kaufen regelmäßig Produkte <span class="cn-cue">(Gesundheit, Reinigung, Pflege, Urlaub — Sie nennen Ihr Produkt)</span>. <span class="cn-pause">⏸ Schweigen</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> So ist es…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Wir gehen zum Regal oder gehen online und wählen unser Produkt. Wir erkundigen uns selbst, ob es gut ist, und wir mögen es nicht, zum Kauf gedrängt zu werden. <span class="cn-pause">⏸ SCHWEIGEN</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> So ist es…</p>

    <p class="cn-line"><span class="cn-role">Agent:</span> Und jetzt die aufrichtige Frage: Wenn Sie dieses Produkt gesehen hätten, das <span class="cn-fill">[X — was er angegeben hat]</span> lösen kann, würden Sie ihm eine Chance geben oder es völlig ignorieren? <span class="cn-cue">🔽 neutraler, tiefer Ton</span></p>
    <p class="cn-line cn-client cn-gap"><span class="cn-role">Kunde:</span> Ich glaube, ich würde ihm eine Chance geben…</p>

    <p class="cn-line"><span class="cn-cue">🐢🔽</span> <span class="cn-role">Agent:</span> Ich kann Sie nicht fragen, ob Sie kaufen — der natürliche Instinkt des Menschen bei einer solchen Frage ist, abzulehnen. Auch meiner… <span class="cn-pause">⏸ Schweigen</span> Ich überlasse es Ihnen, als wären Sie allein am Regal, zu entscheiden, ohne noch etwas hinzuzufügen.</p>

    <p class="cn-line" style="text-align:center"><span class="cn-pause">⏸ SCHWEIGEN · SCHWEIGEN · SCHWEIGEN — das ist der Moment, in dem Sie schweigen</span></p>
    <p class="cn-line" style="text-align:center;color:#6b6f79;font-size:14px"><em>Das Gehirn braucht 5–6 Sekunden, um eine Frage zu beantworten, die Nachdenken erfordert. Füllen Sie die Pause NICHT.</em></p>
  </div>

  <div class="cn-golden" style="margin-top:26px">
    <div class="cn-gt">Das Ergebnis, wenn Sie alle Schritte getan haben</div>
    <div class="cn-gbody" style="line-height:1.85">Wenn Sie, gemäß MLM Psychology, die <b>Verbindung</b>, die <b>Präsentation</b> und den <b>Abschluss</b> korrekt durchlaufen haben, steigen die Chancen abzuschließen auf <b>80 %</b>. 8 von 10 Eingeladenen können entweder Konsumenten oder Botschafter Ihres Geschäfts werden.<br><br>Sehr selten treten Einwände auf — und wenn sie auftreten, behandeln Sie sie gesondert.</div>
  </div>

  <div class="cn-foot">Harvard of Sales · Modul Abschluss</div>
`;

const psihologie = `
<div class="cn-title-block">
    <h1 class="cn-h1">Cum cumpără femeia &amp; bărbatul</h1>
    <div class="cn-subtitle">psihologia de cumpărare în MLM</div>
  </div>

  <p class="cn-lead">Înainte de orice script, întâi înțelegi <b>cine</b> e în fața ta. Apoi îi vorbești pe limba lui.</p>

  <div class="cn-sec">📊 Cifre oficiale</div>
  <div class="stats">
    <div class="stile"><div class="n">85%</div><div class="l">din deciziile de cumpărare sunt influențate de femei</div><div class="s">Forbes, 2024</div></div>
    <div class="stile"><div class="n">73%</div><div class="l">dintre distribuitorii din vânzări directe / MLM sunt femei</div><div class="s">DSA, 2024</div></div>
    <div class="stile"><div class="n">+30%</div><div class="l">mai atente la recenzii și păreri înainte să cumpere</div><div class="s">Capital One · BLS/Pew</div></div>
    <div class="stile"><div class="n">58<span style="font-size:16px">/44</span></div><div class="l">minute per sesiune de cumpărături — femei vs bărbați</div><div class="s">BLS · Statista</div></div>
  </div>
  <div class="statsnote">Cifrele arată cât de mult <b>influențează</b> femeile cumpărăturile. „Decide emoțional vs. rațional" e o tendință de vânzări, nu o statistică oficială — de aceea rămâne sub avertismentul de sus.</div>
  <div class="hero-line">Cine înțelege psihologia de cumpărare a unei femei —<br><b>vinde mai repede, mai bine, mai mult.</b></div>

  <div class="cn-ban">
    <div class="ic">⚠️</div>
    <div class="t"><b>Astea sunt doar TENDINȚE, nu reguli.</b> Nu contează dacă e bărbat sau femeie — contează <b>ENERGIA</b>. Există femei cu energie masculină și bărbați cu energie feminină. <b>Energia cumpără, nu sexul.</b> Uită-te la OM, nu la etichetă.</div>
  </div>

  <div class="cn-precond">
    <div class="h">🧒 Pe înțelesul oricui</div>
    Unii oameni cumpără cu <b>INIMA</b> — vor să se simtă bine, în siguranță, înțeleși. Alții cumpără cu <b>MINTEA</b> — vor să câștige, să aibă dreptate, să fie cei mai buni. De obicei femeile merg pe inimă, bărbații pe minte — <b>dar nu întotdeauna.</b> Tu ghicești: omul din față cumpără cu inima sau cu mintea? Și îi vorbești pe limba lui.
  </div>


  <div class="cn-sec">Cum cumpără fiecare</div>
  <div class="ps-cmp">
    <div class="row head">
      <div class="cell lbl"></div>
      <div class="cell f"><span class="ttl">🌸 FEMEIA</span><span class="en">energie feminină · „inima"</span><span class="say">„Vreau să mă simt în siguranță și înțeleasă."</span></div>
      <div class="cell m"><span class="ttl">⚡ BĂRBATUL</span><span class="en">energie masculină · „mintea"</span><span class="say">„Vreau să câștig și să fiu cel mai bun."</span></div>
    </div>
    <div class="row">
      <div class="cell lbl">Cum decide</div>
      <div class="cell f"><div class="g"><ul><li>Simte întâi, gândește după</li><li>Inima conduce — mintea caută scuze frumoase</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Gândește întâi, simte după</li><li>Mintea conduce: vrea cifre, dovezi, logică</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">De ce se teme (în general)</div>
      <div class="cell f"><div class="g"><ul><li>Să greșească</li><li>Să fie judecată</li><li>Să se facă de râs</li><li>Să dezamăgească pe cei dragi</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Să pară slab</li><li>Să fie păcălit</li><li>Să piardă timp și bani</li><li>Să nu mai aibă controlul</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Frica față de MLM</div>
      <div class="cell f"><div class="g"><ul><li>„O să vând agresiv la prieteni"</li><li>„O să par penibilă / disperată"</li><li>„O să-mi pierd prietenii"</li><li>„Nu-s eu genul care vinde"</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>„E o schemă piramidală?"</li><li>„O să râdă lumea de mine"</li><li>„Îmi pierd timpul degeaba"</li><li>„Nu vreau să cerșesc la oameni"</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Ce își dorește</div>
      <div class="cell f"><div class="g"><ul><li>Siguranță</li><li>O comunitate caldă</li><li>Ceva al ei, fără să-și neglijeze familia</li><li>Să ajute și pe alții</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Să câștige</li><li>Libertate financiară</li><li>Control pe timpul lui</li><li>Statut și respect</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Ce vrea să simtă printr-o activitate nouă</div>
      <div class="cell f"><div class="g"><ul><li>În siguranță, înțeleasă, susținută</li><li>Că aparține unui grup frumos</li><li>Liniște că nu greșește</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Puternic, câștigător, în control</li><li>Că a luat o decizie inteligentă — că investește, nu că e păcălit</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Cuvinte care îi conving</div>
      <div class="cell f"><div class="g"><span class="tag">siguranță</span><span class="tag">împreună</span><span class="tag">în ritmul tău</span><span class="tag">fără presiune</span><span class="tag">familie</span><span class="tag">grijă</span></div></div>
      <div class="cell m"><div class="g"><span class="tag">rezultat</span><span class="tag">câștig</span><span class="tag">control</span><span class="tag">cel mai bun</span><span class="tag">libertate</span><span class="tag">cifre</span></div></div>
    </div>
  </div>

  <div class="detect-h">💡 Cum recunoști energia — pe loc</div>
  <div class="detect">
    <div class="det f">
      <div class="det-h">🌸 Energie feminină</div>
      <div class="det-row"><span class="det-l">Vorbește despre</span><span class="det-v">oameni, sentimente, familie · îți cere părerea</span></div>
      <div class="det-row"><span class="det-l">Tu răspunzi</span><span class="det-v">cald · despre <b>siguranță</b> și <b>„împreună"</b></span></div>
    </div>
    <div class="det m">
      <div class="det-h">⚡ Energie masculină</div>
      <div class="det-row"><span class="det-l">Vorbește despre</span><span class="det-v">cifre, rezultate, timp · vrea să conducă discuția</span></div>
      <div class="det-row"><span class="det-l">Tu răspunzi</span><span class="det-v">scurt · despre <b>câștig</b> și <b>control</b></span></div>
    </div>
  </div>

  <!-- ===== SCRIPT ===== -->
  <div class="cn-sec">Scriptul</div>

  <div class="spine">
    <div class="ic">🗝️</div>
    <div>
      <div class="t">Principiul care ține tot scriptul</div>
      <div class="d">Nu o convingi niciodată — o faci să simtă că <b>EA alege</b>. Fiecare replică îi dă ei controlul și siguranța, nu ție dreptatea. Un agent care înțelege asta închide de două ori mai des decât unul care doar citește replicile.</div>
    </div>
  </div>

  <div class="tabguide">Alege scriptul după <b>energia clientului</b> din fața ta:</div>
  <div class="navtabs">
    <button class="navtab active" onclick="psTab('women',this)">Client · energie feminină</button>
    <button class="navtab soon" onclick="psTab('men',this)">Client · energie masculină <span class="soon-badge">în pregătire</span></button>
  </div>

  <div class="womenScript">
    <div class="ctx-slim">
      <div class="ic">🗣️</div>
      <div>
        <div class="ch"><b>De la femeie la femeie</b> — agentă femeie → clientă femeie.</div>
        <div class="cd">Forța scriptului vine din complicitatea „de femeie la femeie". Dacă agentul e bărbat, framing-ul se schimbă — îl construim separat.</div>
      </div>
    </div>

    <div class="modebar">
      <div class="lbl">Cum vrei să vezi materialul?</div>
      <div class="seg">
        <button id="b-full" class="on" onclick="psMode('full')">Script + psihologie</button>
        <button id="b-clean" onclick="psMode('clean')">Doar scriptul</button>
      </div>
    </div>

    <div class="exch">
      <div class="preopen">
        <div class="preopen-h">🎯 Chiar înainte să începi (înainte de Deschidere)</div>
        <div class="preopen-b">Nu deschide gura până nu ești în starea potrivită. 30 de secunde: respiră adânc, coboară ritmul, pune-ți zâmbetul pe față. Intri <b>caldă și calmă</b> — nu grăbită, nu din nevoia de a convinge. Primul lucru pe care i-l transmiți nu e o vorbă, e o stare.</div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 De ce — psihologic</div><div class="strat">Starea ta vorbește prima</div><ul><li>O femeie îți simte energia înainte să-ți audă cuvintele.</li><li>În primele secunde, creierul ei limbic decide un singur lucru: „e sigur aici sau nu?".</li><li>Intri din presiune → îți simte nevoia și ridică scutul. Intri din calm → te percepe ca aliat, nu ca vânzător.</li></ul><div class="impact"><b>Regula de aur:</b> scriptul de mai jos își face efectul doar dacă starea ta îl susține.</div></div>
    </div>

    <div class="phase-band">▸ Pașii 1–4 · ÎNAINTE de prezentare — conectare + cadru de siguranță</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">1 · Deschidere</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Draga mea… știu exact cum te simți… și știu că noi, ca femei, vrem înainte de orice să știm că suntem în siguranță cu deciziile noastre. Vrem să știm că nu vom eșua, că nu ne vom face de râs, că nu vom fi penibile.”</div></div>
        <span class="cn-pause">⏸ TACI — ai nevoie de confirmare</span>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Validare emoțională + nevoia de siguranță</div><ul><li>Îi validezi emoțiile înainte să-i prezinți oportunitatea.</li><li>Îi spui ce simte deja, dar nu verbalizează → se simte înțeleasă, nu vândută.</li><li>Dezarmezi frica de eșec și de rușine.</li><li>Pauza o lasă să proceseze; când confirmă, devine implicată emoțional.</li></ul><div class="impact"><b>Impact:</b> o femeie se deschide doar când se simte înțeleasă.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">2 · Cererea permisiunii</span>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„Așa este…”</div></div>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Pot să-ți pun o întrebare?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„Da…”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Cererea permisiunii</div><ul><li>Femeia reacționează excelent la întrebări cu permisiune.</li><li>Creezi respect, siguranță și zero presiune.</li><li>O pui în poziția de control.</li></ul><div class="impact"><b>Impact:</b> devine mult mai receptivă.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">3 · Identitate feminină<span class="nu-badge">🔁 NU strategic</span></span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Crezi că eu, ca femeie, știind ce valorează cel mai mult o femeie pe lumea asta, m-aș fi aruncat într-un proiect unde să mă fac de râs, unde o să eșuez, unde aș fi părut penibilă?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„Nu… nu cred…”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Identitate feminină + postura similară</div><ul><li>Te pui în aceeași categorie: „de femeie la femeie”.</li><li>Mesajul subtil: „dacă eu nu m-aș expune, nu te-aș expune nici pe tine”.</li></ul><div class="impact"><b>Impact:</b> se simte protejată, nu manipulată.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">4 · Întrebarea cu „nu”<span class="nu-badge">🔁 NU strategic</span></span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Crezi cu toată ființa ta că ți-aș prezenta ție, ca femeie, un proiect unde te-aș împinge către eșec, către penibil… sau simți că înțeleg care sunt nevoile unei femei când trebuie să aleagă?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„Simți care sunt nevoile…”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Întrebare cu „nu” + accesarea nevoilor</div><ul><li>O întrebare făcută să obțină un „NU” care în realitate e un „DA”.</li><li>Îi confirmi subtil că înțelegi psihologia feminină.</li></ul><div class="impact"><b>Impact:</b> când o femeie spune „simt că mă înțelegi”, ai deja 70% din decizie.</div></div>
    </div>

    <div class="present-card">
      <div class="ic">🎤</div>
      <div class="t">PREZENTAREA 1 LA 1</div>
      <div class="d">Aici prezinți produsul / oportunitatea, față în față. Pașii 1–4 au pregătit terenul; abia acum, când ea are toate detaliile, continui cu întrebările de închidere.</div>
      <div class="lk">→ vezi modulul „Prezentare"</div>
    </div>

    <div class="phase-band">▸ Pașii 5–11 · DUPĂ prezentare — dezamorsezi frica → închizi vânzarea</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">5 · Dezamorsarea fricii</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Acum că ai toate detaliile, crezi că o decizie de <span class="fill">X bani</span> <span class="cue">(spui suma pachetului de start)</span>, unde primești <span class="fill">X, Y, Z</span> <span class="cue">(enumeri ce primește — produse / beneficii)</span> — este riscantă pentru tine, te va face de râs sau te va expune eșecului?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„eee… nuuu…”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Dezamorsarea fricii + reducerea riscului</div><ul><li>Readuci fricile la dimensiunea reală: „chiar e risc aici?”.</li><li>Micro-întrebări care fac temerea să pară exagerată.</li><li>Activezi logica blând.</li></ul><div class="impact"><b>Impact:</b> minimizezi riscul → decizia devine ușoară.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">6 · Ironie blândă<span class="nu-badge">🔁 NU strategic</span></span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Crezi că ar fi o decizie greșită să testezi calitatea produselor… și vei fi dată afară din casă dacă încerci? 😄”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„nuuu…”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Ironie blândă + reducerea presiunii</div><ul><li>Exagerezi intenționat frica → devine absurdă și o face să râdă.</li><li>Umor empatic, nu sarcastic — femeia reacționează excelent.</li></ul><div class="impact"><b>Impact:</b> frica dispare, apare relaxarea.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">7 · Complicitate feminină</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Atâta le trebuie… să ne mai și reproșeze că îi lăsăm numai cu mâncare rece… 😄”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„…Daaa 😄”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Complicitate feminină + umor conectiv</div><ul><li>Creezi un „inside joke” feminin.</li><li>Ea simte că vorbește cu o prietenă, nu cu o recrutare MLM.</li><li>Creezi apartenență: „suntem din aceeași lume”.</li></ul><div class="impact"><b>Impact:</b> crește enorm conexiunea și încrederea.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">8 · Întrebare de control</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Cum te-ai simți confortabilă? Să alegi tu produsele, sau ești deschisă să-ți sugerez ce folosesc eu și nu există în comerț la o astfel de calitate?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„Sugerează-mi tu…”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Întrebare de control + validarea expertizei</div><ul><li>Îi oferi control total → femeile decid ușor când simt libertate.</li><li>Îi insufli indirect că ai experiență și expertiză.</li></ul><div class="impact"><b>Impact:</b> siguranță + deschidere → îți dă voie să o ghidezi.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">9 · Două alegeri</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Din ce zonă dorești? Parfumuri care îți scot și mai mult în evidență feminitatea și senzualitatea… sau zona de curățenie, unde nu mai înjuri că aragazul a rămas pătat după ce ai frecat la el 30 de minute? 😄”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„Ambele…”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Întrebare cu două alegeri + identitate feminină</div><ul><li>Metoda „either/or” → ambele opțiuni duc tot la „DA”.</li><li>Activezi două identități: femeia senzuală (parfumuri) și gospodina eficientă (curățenie).</li></ul><div class="impact"><b>Impact:</b> alegerea devine ușoară și plăcută.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">10 · Activarea simțurilor</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Perfect… Avem parfumul X, care… (descrii doar 2 parfumuri, senzorial)”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„Excelent… sună bine…”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Activarea simțurilor + feminitate simbolică</div><ul><li>Limbaj senzorial → imaginație → emoție.</li><li>O femeie cumpără parfumuri emoțional: o legi de „cum se simte”, nu de „cât costă”.</li></ul><div class="impact"><b>Impact:</b> decizie emoțională.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">11 · Închidere soft</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">„Câte ai fi bucuroasă să-ți trec pe comandă…?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Ea</div><div class="cn-say client">„…X…”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Psihologia din spate</div><div class="strat">Întrebarea de decizie soft</div><ul><li>Nu întrebi „vrei să comanzi?”, ci „câte îți trec?” → presupui decizia luată.</li><li>„Bucuroasă” lovește zona emoțională, nu logică → crește conversia.</li></ul><div class="impact"><b>Impact:</b> finalizezi elegant, fără presiune.</div></div>
    </div>

    <div class="cn-sec">Reguli importante</div>
    <div class="cn-rule"><div class="cn-rule-num">1</div><div><div class="cn-rt">Citește scriptul cu VOCE TARE înainte.</div><div class="cn-rd">De minim 11 ori — ca mintea să se acomodeze cu el.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">2</div><div><div class="cn-rt">În Zoom, scriptul e lângă tine, scris clar.</div><div class="cn-rd">Să nu te chinui să-l citești.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">3</div><div><div class="cn-rt">Nu schimba cuvintele.</div><div class="cn-rd">Cuvintele schimbate schimbă sensul propoziției.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">4</div><div><div class="cn-rt">Urmărește ca EA să răspundă FIX la întrebarea ta.</div><div class="cn-rd">Exact la întrebarea adresată, nu la altceva.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">5</div><div><div class="cn-rt">Dacă răspunde cu altceva, readresezi aceeași întrebare.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">6</div><div><div class="cn-rt">Doar în Zoom / 1-la-1, niciodată prin mesaje text.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">7</div><div><div class="cn-rt">Înainte de apel, intră în stare optimă de performanță.</div></div></div>

    <div class="cn-sec">Greșeli care omoară scriptul</div>
    <div class="mistakes">
      <div class="mistake"><div class="x">✕</div><div>Te grăbești și sari peste <b>TACI</b> / pauze. Tăcerea e unealta, nu golul — dacă o umpli, pierzi confirmarea.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Explici produsul la telefon, înainte de întâlnire. Prezentarea se face față în față — la telefon doar obții „da"-ul la cafea.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Schimbi cuvintele „ca să sune mai bine". Cuvintele schimbate schimbă sensul — structura e testată exact așa.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Împingi. O femeie ridică scutul instant la presiune — dacă simte agenda înaintea grijii, se închide.</div></div>
    </div>
    <div class="note">Acesta e scriptul complet, integrat — de la femeie la femeie (11 schimburi + reguli + greșeli).</div>
  </div>

  <div class="men">
    <h3>Energie masculină · în pregătire</h3>
    <p>Tabelul de sus arată deja tiparul. Scriptul pentru energie masculină îl construim pe aceeași structură — direct, cu cifre, câștig și control.</p>
    <p style="margin-top:14px;font-size:13px;color:var(--muted2)">Urcă-mi un material, sau spune-mi să-l schițez eu pe tiparul din tabel.</p>
  </div>
`;

const psihologie_it = `
<div class="cn-title-block">
    <h1 class="cn-h1">Come compra la donna &amp; l'uomo</h1>
    <div class="cn-subtitle">la psicologia d'acquisto nel MLM</div>
  </div>

  <p class="cn-lead">Prima di qualsiasi script, prima capisci <b>chi</b> hai davanti. Poi gli parli nella sua lingua.</p>

  <div class="cn-sec">📊 Dati ufficiali</div>
  <div class="stats">
    <div class="stile"><div class="n">85%</div><div class="l">delle decisioni d'acquisto sono influenzate dalle donne</div><div class="s">Forbes, 2024</div></div>
    <div class="stile"><div class="n">73%</div><div class="l">dei distributori nella vendita diretta / MLM sono donne</div><div class="s">DSA, 2024</div></div>
    <div class="stile"><div class="n">+30%</div><div class="l">più attente a recensioni e opinioni prima di comprare</div><div class="s">Capital One · BLS/Pew</div></div>
    <div class="stile"><div class="n">58<span style="font-size:16px">/44</span></div><div class="l">minuti per sessione di shopping — donne vs uomini</div><div class="s">BLS · Statista</div></div>
  </div>
  <div class="statsnote">I dati mostrano quanto le donne <b>influenzino</b> gli acquisti. «Decide con l'emozione vs. con la ragione» è una tendenza di vendita, non una statistica ufficiale — per questo resta sotto l'avvertenza in alto.</div>
  <div class="hero-line">Chi capisce la psicologia d'acquisto di una donna —<br><b>vende più in fretta, meglio, di più.</b></div>

  <div class="cn-ban">
    <div class="ic">⚠️</div>
    <div class="t"><b>Queste sono solo TENDENZE, non regole.</b> Non conta se è uomo o donna — conta l'<b>ENERGIA</b>. Esistono donne con energia maschile e uomini con energia femminile. <b>È l'energia che compra, non il sesso.</b> Guarda la PERSONA, non l'etichetta.</div>
  </div>

  <div class="cn-precond">
    <div class="h">🧒 Spiegato in parole semplici</div>
    Alcune persone comprano con il <b>CUORE</b> — vogliono sentirsi bene, al sicuro, capite. Altre comprano con la <b>TESTA</b> — vogliono vincere, avere ragione, essere le migliori. Di solito le donne vanno di cuore, gli uomini di testa — <b>ma non sempre.</b> Il tuo compito è intuire: la persona che hai davanti compra con il cuore o con la testa? E le parli nella sua lingua.
  </div>


  <div class="cn-sec">Come compra ciascuno</div>
  <div class="ps-cmp">
    <div class="row head">
      <div class="cell lbl"></div>
      <div class="cell f"><span class="ttl">🌸 LA DONNA</span><span class="en">energia femminile · «il cuore»</span><span class="say">«Voglio sentirmi al sicuro e capita.»</span></div>
      <div class="cell m"><span class="ttl">⚡ L'UOMO</span><span class="en">energia maschile · «la testa»</span><span class="say">«Voglio vincere ed essere il migliore.»</span></div>
    </div>
    <div class="row">
      <div class="cell lbl">Come decide</div>
      <div class="cell f"><div class="g"><ul><li>Prima sente, poi pensa</li><li>Guida il cuore — la testa cerca belle scuse</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Prima pensa, poi sente</li><li>Guida la testa: vuole numeri, prove, logica</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Di cosa ha paura (in generale)</div>
      <div class="cell f"><div class="g"><ul><li>Di sbagliare</li><li>Di essere giudicata</li><li>Di fare una brutta figura</li><li>Di deludere le persone care</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Di sembrare debole</li><li>Di essere fregato</li><li>Di perdere tempo e soldi</li><li>Di non avere più il controllo</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">La paura verso l'MLM</div>
      <div class="cell f"><div class="g"><ul><li>«Venderò in modo aggressivo agli amici»</li><li>«Sembrerò patetica / disperata»</li><li>«Perderò le amicizie»</li><li>«Non sono il tipo che vende»</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>«È uno schema piramidale?»</li><li>«La gente riderà di me»</li><li>«Perdo tempo per niente»</li><li>«Non voglio elemosinare dalle persone»</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Cosa desidera</div>
      <div class="cell f"><div class="g"><ul><li>Sicurezza</li><li>Una comunità calorosa</li><li>Qualcosa di suo, senza trascurare la famiglia</li><li>Aiutare anche gli altri</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Vincere</li><li>Libertà finanziaria</li><li>Controllo sul proprio tempo</li><li>Status e rispetto</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Cosa vuole provare con un'attività nuova</div>
      <div class="cell f"><div class="g"><ul><li>Al sicuro, capita, sostenuta</li><li>Di appartenere a un bel gruppo</li><li>La serenità di non sbagliare</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Forte, vincente, in controllo</li><li>Di aver preso una decisione intelligente — di investire, non di essere fregato</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Parole che la convincono</div>
      <div class="cell f"><div class="g"><span class="tag">sicurezza</span><span class="tag">insieme</span><span class="tag">al tuo ritmo</span><span class="tag">senza pressione</span><span class="tag">famiglia</span><span class="tag">cura</span></div></div>
      <div class="cell m"><div class="g"><span class="tag">risultato</span><span class="tag">guadagno</span><span class="tag">controllo</span><span class="tag">il migliore</span><span class="tag">libertà</span><span class="tag">numeri</span></div></div>
    </div>
  </div>

  <div class="detect-h">💡 Come riconosci l'energia — sul momento</div>
  <div class="detect">
    <div class="det f">
      <div class="det-h">🌸 Energia femminile</div>
      <div class="det-row"><span class="det-l">Parla di</span><span class="det-v">persone, sentimenti, famiglia · ti chiede il parere</span></div>
      <div class="det-row"><span class="det-l">Tu rispondi</span><span class="det-v">con calore · di <b>sicurezza</b> e <b>«insieme»</b></span></div>
    </div>
    <div class="det m">
      <div class="det-h">⚡ Energia maschile</div>
      <div class="det-row"><span class="det-l">Parla di</span><span class="det-v">numeri, risultati, tempo · vuole guidare la conversazione</span></div>
      <div class="det-row"><span class="det-l">Tu rispondi</span><span class="det-v">breve · di <b>guadagno</b> e <b>controllo</b></span></div>
    </div>
  </div>

  <!-- ===== SCRIPT ===== -->
  <div class="cn-sec">Lo script</div>

  <div class="spine">
    <div class="ic">🗝️</div>
    <div>
      <div class="t">Il principio che regge tutto lo script</div>
      <div class="d">Non la convinci mai — le fai sentire che è <b>LEI a scegliere</b>. Ogni battuta dà a lei il controllo e la sicurezza, non a te la ragione. Un agente che capisce questo chiude il doppio delle volte rispetto a uno che si limita a leggere le battute.</div>
    </div>
  </div>

  <div class="tabguide">Scegli lo script in base all'<b>energia del cliente</b> che hai davanti:</div>
  <div class="navtabs">
    <button class="navtab active" onclick="psTab('women',this)">Cliente · energia femminile</button>
    <button class="navtab soon" onclick="psTab('men',this)">Cliente · energia maschile <span class="soon-badge">in preparazione</span></button>
  </div>

  <div class="womenScript">
    <div class="ctx-slim">
      <div class="ic">🗣️</div>
      <div>
        <div class="ch"><b>Da donna a donna</b> — agente donna → cliente donna.</div>
        <div class="cd">La forza dello script nasce dalla complicità «da donna a donna». Se l'agente è un uomo, il framing cambia — lo costruiamo a parte.</div>
      </div>
    </div>

    <div class="modebar">
      <div class="lbl">Come vuoi vedere il materiale?</div>
      <div class="seg">
        <button id="b-full" class="on" onclick="psMode('full')">Script + psicologia</button>
        <button id="b-clean" onclick="psMode('clean')">Solo lo script</button>
      </div>
    </div>

    <div class="exch">
      <div class="preopen">
        <div class="preopen-h">🎯 Proprio prima di iniziare (prima dell'Apertura)</div>
        <div class="preopen-b">Non aprire bocca finché non sei nello stato giusto. 30 secondi: respira a fondo, abbassa il ritmo, mettiti il sorriso sul viso. Entri <b>calorosa e calma</b> — non di fretta, non dal bisogno di convincere. La prima cosa che le trasmetti non è una parola, è uno stato d'animo.</div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Perché — a livello psicologico</div><div class="strat">Il tuo stato d'animo parla per primo</div><ul><li>Una donna sente la tua energia prima ancora di ascoltare le tue parole.</li><li>Nei primi secondi il suo cervello limbico decide una cosa sola: «qui sono al sicuro o no?».</li><li>Entri dalla pressione → sente il tuo bisogno e alza lo scudo. Entri dalla calma → ti percepisce come alleata, non come venditrice.</li></ul><div class="impact"><b>Regola d'oro:</b> lo script qui sotto fa effetto solo se il tuo stato d'animo lo sostiene.</div></div>
    </div>

    <div class="phase-band">▸ Passi 1–4 · PRIMA della presentazione — connessione + cornice di sicurezza</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">1 · Apertura</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Cara mia… so esattamente come ti senti… e so che noi, come donne, prima di ogni cosa vogliamo sapere di essere al sicuro con le nostre decisioni. Vogliamo sapere che non falliremo, che non faremo brutta figura, che non risulteremo patetiche.»</div></div>
        <span class="cn-pause">⏸ TACI — hai bisogno di una conferma</span>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Validazione emotiva + bisogno di sicurezza</div><ul><li>Le validi le emozioni prima di presentarle l'opportunità.</li><li>Le dici ciò che già prova ma non mette in parole → si sente capita, non venduta.</li><li>Disinneschi la paura di fallire e di vergognarsi.</li><li>La pausa la lascia elaborare; quando conferma, si coinvolge emotivamente.</li></ul><div class="impact"><b>Impatto:</b> una donna si apre solo quando si sente capita.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">2 · Chiedere il permesso</span>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«È proprio così…»</div></div>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Posso farti una domanda?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«Sì…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Chiedere il permesso</div><ul><li>La donna reagisce benissimo alle domande con permesso.</li><li>Crei rispetto, sicurezza e zero pressione.</li><li>La metti in posizione di controllo.</li></ul><div class="impact"><b>Impatto:</b> diventa molto più ricettiva.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">3 · Identità femminile<span class="nu-badge">🔁 NO strategico</span></span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Credi che io, come donna, sapendo qual è la cosa più preziosa al mondo per una donna, mi sarei buttata in un progetto in cui fare brutta figura, in cui fallire, in cui sembrare patetica?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«No… non credo…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Identità femminile + posizione condivisa</div><ul><li>Ti metti nella stessa categoria: «da donna a donna».</li><li>Il messaggio implicito: «se io non mi esporrei, non esporrei nemmeno te».</li></ul><div class="impact"><b>Impatto:</b> si sente protetta, non manipolata.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">4 · La domanda col «no»<span class="nu-badge">🔁 NO strategico</span></span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Credi con tutta te stessa che io presenterei a te, come donna, un progetto in cui ti spingerei verso il fallimento, verso la figuraccia… oppure senti che capisco quali sono i bisogni di una donna quando deve scegliere?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«Senti quali sono i bisogni…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Domanda col «no» + accesso ai bisogni</div><ul><li>Una domanda costruita per ottenere un «NO» che in realtà è un «SÌ».</li><li>Le confermi sottilmente che capisci la psicologia femminile.</li></ul><div class="impact"><b>Impatto:</b> quando una donna dice «sento che mi capisci», hai già il 70% della decisione.</div></div>
    </div>

    <div class="present-card">
      <div class="ic">🎤</div>
      <div class="t">LA PRESENTAZIONE 1 A 1</div>
      <div class="d">Qui presenti il prodotto / l'opportunità, faccia a faccia. I passi 1–4 hanno preparato il terreno; solo adesso, quando lei ha tutti i dettagli, prosegui con le domande di chiusura.</div>
      <div class="lk">→ vedi il modulo «Presentazione»</div>
    </div>

    <div class="phase-band">▸ Passi 5–11 · DOPO la presentazione — disinneschi la paura → chiudi la vendita</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">5 · Disinnescare la paura</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Adesso che hai tutti i dettagli, credi che una decisione da <span class="fill">X euro</span> <span class="cue">(dici la cifra del pacchetto iniziale)</span>, in cui ricevi <span class="fill">X, Y, Z</span> <span class="cue">(elenchi ciò che riceve — prodotti / vantaggi)</span> — sia rischiosa per te, ti farà fare brutta figura o ti esporrà al fallimento?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«eee… nooo…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Disinnescare la paura + ridurre il rischio</div><ul><li>Riporti le paure alla loro dimensione reale: «c'è davvero un rischio qui?».</li><li>Micro-domande che fanno sembrare esagerato il timore.</li><li>Attivi la logica con dolcezza.</li></ul><div class="impact"><b>Impatto:</b> minimizzi il rischio → la decisione diventa facile.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">6 · Ironia leggera<span class="nu-badge">🔁 NO strategico</span></span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Credi che sarebbe una decisione sbagliata provare la qualità dei prodotti… e ti sbatteranno fuori di casa se ci provi? 😄»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«nooo…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Ironia leggera + riduzione della pressione</div><ul><li>Esageri di proposito la paura → diventa assurda e la fa ridere.</li><li>Umorismo empatico, non sarcastico — la donna reagisce benissimo.</li></ul><div class="impact"><b>Impatto:</b> la paura sparisce, arriva il rilassamento.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">7 · Complicità femminile</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Non chiedono altro… così poi ci rimproverano pure di lasciarli solo con la cena fredda… 😄»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«…Sìì 😄»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Complicità femminile + umorismo che connette</div><ul><li>Crei una battuta «tra di noi» al femminile.</li><li>Lei sente di parlare con un'amica, non con un reclutamento MLM.</li><li>Crei appartenenza: «siamo dello stesso mondo».</li></ul><div class="impact"><b>Impatto:</b> cresce enormemente la connessione e la fiducia.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">8 · Domanda di controllo</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Come ti sentiresti più a tuo agio? Scegliere tu i prodotti, oppure sei aperta a farti suggerire ciò che uso io e che non trovi in commercio a una qualità del genere?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«Suggeriscimeli tu…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Domanda di controllo + validazione della competenza</div><ul><li>Le dai il controllo totale → le donne decidono facilmente quando sentono libertà.</li><li>Le trasmetti indirettamente che hai esperienza e competenza.</li></ul><div class="impact"><b>Impatto:</b> sicurezza + apertura → ti dà il permesso di guidarla.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">9 · Due scelte</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Da quale area preferisci partire? Profumi che mettono ancora più in risalto la tua femminilità e sensualità… oppure l'area pulizia, dove non impreghi più perché il piano cottura è rimasto macchiato dopo che ci hai strofinato su per 30 minuti? 😄»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«Tutte e due…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Domanda a due scelte + identità femminile</div><ul><li>Il metodo «either/or» → entrambe le opzioni portano comunque al «SÌ».</li><li>Attivi due identità: la donna sensuale (profumi) e la padrona di casa efficiente (pulizia).</li></ul><div class="impact"><b>Impatto:</b> la scelta diventa facile e piacevole.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">10 · Attivazione dei sensi</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Perfetto… Abbiamo il profumo X, che… (descrivi solo 2 profumi, in modo sensoriale)»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«Ottimo… suona bene…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">Attivazione dei sensi + femminilità simbolica</div><ul><li>Linguaggio sensoriale → immaginazione → emozione.</li><li>Una donna compra i profumi con l'emozione: la leghi a «come ti fa sentire», non a «quanto costa».</li></ul><div class="impact"><b>Impatto:</b> decisione emotiva.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">11 · Chiusura soft</span>
        <div class="cn-line"><div class="cn-role">Tu</div><div class="cn-say">«Quante saresti felice di segnarti sull'ordine…?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Lei</div><div class="cn-say client">«…X…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicologia dietro</div><div class="strat">La domanda di decisione soft</div><ul><li>Non chiedi «vuoi ordinare?», ma «quante te ne segno?» → dai per fatta la decisione presa.</li><li>«Felice» colpisce la zona emotiva, non quella logica → aumenta la conversione.</li></ul><div class="impact"><b>Impatto:</b> concludi con eleganza, senza pressione.</div></div>
    </div>

    <div class="cn-sec">Regole importanti</div>
    <div class="cn-rule"><div class="cn-rule-num">1</div><div><div class="cn-rt">Leggi lo script ad ALTA VOCE prima.</div><div class="cn-rd">Almeno 11 volte — così la mente ci prende confidenza.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">2</div><div><div class="cn-rt">Su Zoom, lo script è accanto a te, scritto chiaro.</div><div class="cn-rd">Così non fai fatica a leggerlo.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">3</div><div><div class="cn-rt">Non cambiare le parole.</div><div class="cn-rd">Le parole cambiate cambiano il senso della frase.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">4</div><div><div class="cn-rt">Fai in modo che sia LEI a rispondere ESATTAMENTE alla tua domanda.</div><div class="cn-rd">Proprio alla domanda posta, non ad altro.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">5</div><div><div class="cn-rt">Se risponde con altro, riproponi la stessa domanda.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">6</div><div><div class="cn-rt">Solo su Zoom / 1-a-1, mai via messaggi di testo.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">7</div><div><div class="cn-rt">Prima della chiamata, entra nello stato ottimale di performance.</div></div></div>

    <div class="cn-sec">Errori che uccidono lo script</div>
    <div class="mistakes">
      <div class="mistake"><div class="x">✕</div><div>Vai di fretta e salti i <b>TACI</b> / le pause. Il silenzio è lo strumento, non il vuoto — se lo riempi, perdi la conferma.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Spieghi il prodotto al telefono, prima dell'incontro. La presentazione si fa faccia a faccia — al telefono ottieni solo il «sì» al caffè.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Cambi le parole «per farle suonare meglio». Le parole cambiate cambiano il senso — la struttura è testata esattamente così.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Spingi. Una donna alza lo scudo all'istante di fronte alla pressione — se sente l'agenda prima della cura, si chiude.</div></div>
    </div>
    <div class="note">Questo è lo script completo, integrato — da donna a donna (11 scambi + regole + errori).</div>
  </div>

  <div class="men">
    <h3>Energia maschile · in preparazione</h3>
    <p>La tabella qui sopra mostra già lo schema. Lo script per l'energia maschile lo costruiamo sulla stessa struttura — diretto, con numeri, guadagno e controllo.</p>
    <p style="margin-top:14px;font-size:13px;color:var(--muted2)">Caricami un materiale, oppure dimmi di abbozzarlo io sullo schema della tabella.</p>
  </div>
`;

const psihologie_en = `
<div class="cn-title-block">
    <h1 class="cn-h1">How Women &amp; Men Buy</h1>
    <div class="cn-subtitle">the buying psychology behind MLM</div>
  </div>

  <p class="cn-lead">Before any script, first you understand <b>who</b> is in front of you. Then you speak their language.</p>

  <div class="cn-sec">📊 Official numbers</div>
  <div class="stats">
    <div class="stile"><div class="n">85%</div><div class="l">of buying decisions are influenced by women</div><div class="s">Forbes, 2024</div></div>
    <div class="stile"><div class="n">73%</div><div class="l">of direct-sales / MLM distributors are women</div><div class="s">DSA, 2024</div></div>
    <div class="stile"><div class="n">+30%</div><div class="l">more likely to check reviews and opinions before buying</div><div class="s">Capital One · BLS/Pew</div></div>
    <div class="stile"><div class="n">58<span style="font-size:16px">/44</span></div><div class="l">minutes per shopping session — women vs men</div><div class="s">BLS · Statista</div></div>
  </div>
  <div class="statsnote">The numbers show just how much women <b>influence</b> buying. "Decides emotionally vs. rationally" is a sales tendency, not an official statistic — which is why it stays under the disclaimer above.</div>
  <div class="hero-line">Whoever understands a woman's buying psychology —<br><b>sells faster, better, and more.</b></div>

  <div class="cn-ban">
    <div class="ic">⚠️</div>
    <div class="t"><b>These are only TENDENCIES, not rules.</b> It doesn't matter whether it's a man or a woman — what matters is the <b>ENERGY</b>. There are women with masculine energy and men with feminine energy. <b>Energy buys, not gender.</b> Look at the person, not the label.</div>
  </div>

  <div class="cn-precond">
    <div class="h">🧒 In plain terms</div>
    Some people buy with the <b>HEART</b> — they want to feel good, safe, understood. Others buy with the <b>HEAD</b> — they want to win, to be right, to be the best. Women usually go with the heart, men with the head — <b>but not always.</b> Your job is to read it: does the person in front of you buy with the heart or the head? And then you speak their language.
  </div>


  <div class="cn-sec">How each one buys</div>
  <div class="ps-cmp">
    <div class="row head">
      <div class="cell lbl"></div>
      <div class="cell f"><span class="ttl">🌸 THE WOMAN</span><span class="en">feminine energy · "the heart"</span><span class="say">"I want to feel safe and understood."</span></div>
      <div class="cell m"><span class="ttl">⚡ THE MAN</span><span class="en">masculine energy · "the head"</span><span class="say">"I want to win and be the best."</span></div>
    </div>
    <div class="row">
      <div class="cell lbl">How they decide</div>
      <div class="cell f"><div class="g"><ul><li>Feels first, thinks after</li><li>The heart leads — the head looks for nice excuses</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Thinks first, feels after</li><li>The head leads: wants numbers, proof, logic</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">What they fear (in general)</div>
      <div class="cell f"><div class="g"><ul><li>Getting it wrong</li><li>Being judged</li><li>Embarrassing themselves</li><li>Letting down the people they love</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Looking weak</li><li>Being fooled</li><li>Wasting time and money</li><li>Losing control</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Their fear about MLM</div>
      <div class="cell f"><div class="g"><ul><li>"I'll have to hard-sell to my friends"</li><li>"I'll look cringey / desperate"</li><li>"I'll lose my friends"</li><li>"I'm just not the selling type"</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>"Is this a pyramid scheme?"</li><li>"People will laugh at me"</li><li>"I'm wasting my time for nothing"</li><li>"I don't want to beg people"</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">What they want</div>
      <div class="cell f"><div class="g"><ul><li>Security</li><li>A warm community</li><li>Something of their own, without neglecting their family</li><li>To help others too</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>To win</li><li>Financial freedom</li><li>Control over their own time</li><li>Status and respect</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">What they want to feel from a new venture</div>
      <div class="cell f"><div class="g"><ul><li>Safe, understood, supported</li><li>That they belong to a beautiful group</li><li>The peace of mind that they're not making a mistake</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Strong, winning, in control</li><li>That they made a smart decision — that they're investing, not getting fooled</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Words that win them over</div>
      <div class="cell f"><div class="g"><span class="tag">safe</span><span class="tag">together</span><span class="tag">at your own pace</span><span class="tag">no pressure</span><span class="tag">family</span><span class="tag">care</span></div></div>
      <div class="cell m"><div class="g"><span class="tag">results</span><span class="tag">win</span><span class="tag">control</span><span class="tag">the best</span><span class="tag">freedom</span><span class="tag">numbers</span></div></div>
    </div>
  </div>

  <div class="detect-h">💡 How to read the energy — on the spot</div>
  <div class="detect">
    <div class="det f">
      <div class="det-h">🌸 Feminine energy</div>
      <div class="det-row"><span class="det-l">Talks about</span><span class="det-v">people, feelings, family · asks for your opinion</span></div>
      <div class="det-row"><span class="det-l">You respond</span><span class="det-v">warm · about <b>safety</b> and <b>"together"</b></span></div>
    </div>
    <div class="det m">
      <div class="det-h">⚡ Masculine energy</div>
      <div class="det-row"><span class="det-l">Talks about</span><span class="det-v">numbers, results, time · wants to lead the conversation</span></div>
      <div class="det-row"><span class="det-l">You respond</span><span class="det-v">short · about <b>winning</b> and <b>control</b></span></div>
    </div>
  </div>

  <!-- ===== SCRIPT ===== -->
  <div class="cn-sec">The Script</div>

  <div class="spine">
    <div class="ic">🗝️</div>
    <div>
      <div class="t">The principle that holds the whole script together</div>
      <div class="d">You never convince her — you make her feel that <b>SHE chooses</b>. Every line hands her control and safety, not you the last word. An agent who gets this closes twice as often as one who just reads the lines.</div>
    </div>
  </div>

  <div class="tabguide">Pick the script based on the <b>client's energy</b> in front of you:</div>
  <div class="navtabs">
    <button class="navtab active" onclick="psTab('women',this)">Client · feminine energy</button>
    <button class="navtab soon" onclick="psTab('men',this)">Client · masculine energy <span class="soon-badge">coming soon</span></button>
  </div>

  <div class="womenScript">
    <div class="ctx-slim">
      <div class="ic">🗣️</div>
      <div>
        <div class="ch"><b>Woman to woman</b> — female agent → female client.</div>
        <div class="cd">The power of this script comes from the "woman to woman" complicity. If the agent is a man, the framing changes — we build that one separately.</div>
      </div>
    </div>

    <div class="modebar">
      <div class="lbl">How do you want to view the material?</div>
      <div class="seg">
        <button id="b-full" class="on" onclick="psMode('full')">Script + psychology</button>
        <button id="b-clean" onclick="psMode('clean')">Script only</button>
      </div>
    </div>

    <div class="exch">
      <div class="preopen">
        <div class="preopen-h">🎯 Right before you start (before the Opening)</div>
        <div class="preopen-b">Don't open your mouth until you're in the right state. 30 seconds: breathe deep, slow your rhythm, put the smile on your face. You come in <b>warm and calm</b> — not rushed, not out of a need to convince. The first thing you transmit to her isn't a word, it's a state.</div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Why — psychologically</div><div class="strat">Your state speaks first</div><ul><li>A woman feels your energy before she hears your words.</li><li>In the first few seconds, her limbic brain decides one thing only: "is it safe here or not?".</li><li>You come in from pressure → she feels your need and raises her guard. You come in from calm → she reads you as an ally, not a salesperson.</li></ul><div class="impact"><b>Golden rule:</b> the script below only works if your state backs it up.</div></div>
    </div>

    <div class="phase-band">▸ Steps 1–4 · BEFORE the presentation — connection + a frame of safety</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">1 · Opening</span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"Sweetheart… I know exactly how you feel… and I know that we, as women, want above all else to know that we're safe with our decisions. We want to know we won't fail, that we won't embarrass ourselves, that we won't look foolish."</div></div>
        <span class="cn-pause">⏸ STAY SILENT — you need her to confirm</span>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">Emotional validation + the need for safety</div><ul><li>You validate her emotions before you present the opportunity.</li><li>You say what she already feels but doesn't put into words → she feels understood, not sold to.</li><li>You disarm the fear of failure and of shame.</li><li>The pause lets her process; when she confirms, she becomes emotionally invested.</li></ul><div class="impact"><b>Impact:</b> a woman opens up only when she feels understood.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">2 · Asking permission</span>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"That's true…"</div></div>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"Can I ask you a question?"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"Sure…"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">Asking permission</div><ul><li>A woman responds beautifully to questions asked with permission.</li><li>You create respect, safety, and zero pressure.</li><li>You put her in the position of control.</li></ul><div class="impact"><b>Impact:</b> she becomes far more receptive.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">3 · Feminine identity<span class="nu-badge">🔁 Strategic NO</span></span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"Do you really think that I, as a woman — knowing what a woman values most in this world — would have thrown myself into a project where I'd embarrass myself, where I'd fail, where I'd look foolish?"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"No… I don't think so…"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">Feminine identity + matched stance</div><ul><li>You put yourself in the same category: "woman to woman".</li><li>The subtle message: "if I wouldn't expose myself, I wouldn't expose you either".</li></ul><div class="impact"><b>Impact:</b> she feels protected, not manipulated.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">4 · The "no" question<span class="nu-badge">🔁 Strategic NO</span></span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"Do you honestly believe, with every fiber of your being, that I would show you — as a woman — a project where I'd push you toward failure, toward embarrassment… or do you feel that I understand what a woman needs when she has to make a choice?"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"You feel what she needs…"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">A "no" question + tapping into her needs</div><ul><li>A question built to get a "NO" that is really a "YES".</li><li>You subtly confirm that you understand female psychology.</li></ul><div class="impact"><b>Impact:</b> when a woman says "I feel that you understand me", you already have 70% of the decision.</div></div>
    </div>

    <div class="present-card">
      <div class="ic">🎤</div>
      <div class="t">THE 1-ON-1 PRESENTATION</div>
      <div class="d">This is where you present the product / opportunity, face to face. Steps 1–4 set the ground; only now, when she has all the details, do you go on to the closing questions.</div>
      <div class="lk">→ see the "Presentation" module</div>
    </div>

    <div class="phase-band">▸ Steps 5–11 · AFTER the presentation — defuse the fear → close the sale</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">5 · Defusing the fear</span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"Now that you have all the details, do you think a decision of <span class="fill">X dollars</span> <span class="cue">(you say the price of the starter pack)</span>, where you get <span class="fill">X, Y, Z</span> <span class="cue">(you list what she gets — products / benefits)</span> — is risky for you, will embarrass you, or set you up to fail?"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"uhh… nooo…"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">Defusing the fear + shrinking the risk</div><ul><li>You bring the fears back to their real size: "is there really any risk here?".</li><li>Micro-questions that make the worry look exaggerated.</li><li>You activate logic, gently.</li></ul><div class="impact"><b>Impact:</b> you minimize the risk → the decision becomes easy.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">6 · Gentle irony<span class="nu-badge">🔁 Strategic NO</span></span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"Do you really think it'd be a wrong decision to test the quality of the products… and that you'll get thrown out of the house if you try them? 😄"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"nooo…"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">Gentle irony + lowering the pressure</div><ul><li>You deliberately exaggerate the fear → it turns absurd and makes her laugh.</li><li>Empathetic humor, not sarcastic — women respond to it beautifully.</li></ul><div class="impact"><b>Impact:</b> the fear disappears, relaxation sets in.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">7 · Feminine complicity</span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"As if they need more ammo… so they can nag us for leaving them with nothing but cold dinners… 😄"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"…Yeah 😄"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">Feminine complicity + connective humor</div><ul><li>You create a feminine "inside joke".</li><li>She feels she's talking to a friend, not an MLM recruitment.</li><li>You create belonging: "we're from the same world".</li></ul><div class="impact"><b>Impact:</b> connection and trust go way up.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">8 · Control question</span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"What would feel comfortable for you? To pick the products yourself, or are you open to me suggesting what I use — things you won't find in stores at this kind of quality?"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"You suggest for me…"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">Control question + validating your expertise</div><ul><li>You give her full control → women decide easily when they feel free.</li><li>You indirectly signal that you have experience and expertise.</li></ul><div class="impact"><b>Impact:</b> safety + openness → she lets you guide her.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">9 · Two choices</span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"Which area would you like? Perfumes that bring out your femininity and sensuality even more… or the cleaning range, where you're not cursing anymore because the stove is still stained after you've scrubbed it for 30 minutes? 😄"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"Both…"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">A two-choice question + feminine identity</div><ul><li>The "either/or" method → both options still lead to a "YES".</li><li>You activate two identities: the sensual woman (perfumes) and the efficient homemaker (cleaning).</li></ul><div class="impact"><b>Impact:</b> the choice becomes easy and enjoyable.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">10 · Engaging the senses</span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"Perfect… We have perfume X, which… (describe just 2 perfumes, sensory)"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"Wonderful… that sounds good…"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">Engaging the senses + symbolic femininity</div><ul><li>Sensory language → imagination → emotion.</li><li>A woman buys perfume emotionally: you tie it to "how it makes her feel", not to "what it costs".</li></ul><div class="impact"><b>Impact:</b> an emotional decision.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">11 · Soft close</span>
        <div class="cn-line"><div class="cn-role">You</div><div class="cn-say">"How many would you be happy for me to put down on your order…?"</div></div>
        <div class="cn-line client"><div class="cn-role client">Her</div><div class="cn-say client">"…X…"</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 The psychology behind it</div><div class="strat">The soft decision question</div><ul><li>You don't ask "do you want to order?", you ask "how many shall I put down?" → you assume the decision is made.</li><li>"Happy" hits the emotional zone, not the logical one → it lifts conversion.</li></ul><div class="impact"><b>Impact:</b> you close elegantly, with no pressure.</div></div>
    </div>

    <div class="cn-sec">Important rules</div>
    <div class="cn-rule"><div class="cn-rule-num">1</div><div><div class="cn-rt">Read the script OUT LOUD beforehand.</div><div class="cn-rd">At least 11 times — so your mind gets comfortable with it.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">2</div><div><div class="cn-rt">On Zoom, keep the script next to you, written clearly.</div><div class="cn-rd">So you're not struggling to read it.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">3</div><div><div class="cn-rt">Don't change the words.</div><div class="cn-rd">Changed words change the meaning of the sentence.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">4</div><div><div class="cn-rt">Make sure SHE answers EXACTLY the question you asked.</div><div class="cn-rd">Exactly the question you put to her, not something else.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">5</div><div><div class="cn-rt">If she answers with something else, ask the same question again.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">6</div><div><div class="cn-rt">Only on Zoom / 1-on-1, never over text messages.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">7</div><div><div class="cn-rt">Before the call, get into your optimal performance state.</div></div></div>

    <div class="cn-sec">Mistakes that kill the script</div>
    <div class="mistakes">
      <div class="mistake"><div class="x">✕</div><div>You rush and skip the <b>STAY SILENT</b> / pauses. Silence is the tool, not the gap — if you fill it, you lose the confirmation.</div></div>
      <div class="mistake"><div class="x">✕</div><div>You explain the product on the phone, before the meeting. The presentation is done face to face — on the phone you only get the "yes" to coffee.</div></div>
      <div class="mistake"><div class="x">✕</div><div>You change the words "to make them sound better". Changed words change the meaning — the structure is tested exactly as it is.</div></div>
      <div class="mistake"><div class="x">✕</div><div>You push. A woman raises her guard instantly under pressure — if she senses the agenda ahead of the care, she shuts down.</div></div>
    </div>
    <div class="note">This is the complete, integrated script — woman to woman (11 exchanges + rules + mistakes).</div>
  </div>

  <div class="men">
    <h3>Masculine energy · coming soon</h3>
    <p>The table above already shows the pattern. We build the masculine-energy script on the same structure — direct, with numbers, winning, and control.</p>
    <p style="margin-top:14px;font-size:13px;color:var(--muted2)">Upload me some material, or tell me to sketch it out myself from the pattern in the table.</p>
  </div>
`;

const psihologie_es = `
<div class="cn-title-block">
    <h1 class="cn-h1">Cómo compra la mujer &amp; el hombre</h1>
    <div class="cn-subtitle">la psicología de compra en el MLM</div>
  </div>

  <p class="cn-lead">Antes de cualquier guion, primero entiendes <b>quién</b> tienes delante. Después le hablas en su idioma.</p>

  <div class="cn-sec">📊 Cifras oficiales</div>
  <div class="stats">
    <div class="stile"><div class="n">85%</div><div class="l">de las decisiones de compra están influidas por mujeres</div><div class="s">Forbes, 2024</div></div>
    <div class="stile"><div class="n">73%</div><div class="l">de los distribuidores de venta directa / MLM son mujeres</div><div class="s">DSA, 2024</div></div>
    <div class="stile"><div class="n">+30%</div><div class="l">más atentas a las reseñas y opiniones antes de comprar</div><div class="s">Capital One · BLS/Pew</div></div>
    <div class="stile"><div class="n">58<span style="font-size:16px">/44</span></div><div class="l">minutos por sesión de compras — mujeres vs hombres</div><div class="s">BLS · Statista</div></div>
  </div>
  <div class="statsnote">Las cifras muestran cuánto <b>influyen</b> las mujeres en las compras. «Decide de forma emocional vs. racional» es una tendencia de ventas, no una estadística oficial — por eso queda bajo la advertencia de arriba.</div>
  <div class="hero-line">Quien entiende la psicología de compra de una mujer —<br><b>vende más rápido, mejor y más.</b></div>

  <div class="cn-ban">
    <div class="ic">⚠️</div>
    <div class="t"><b>Esto son solo TENDENCIAS, no reglas.</b> No importa si es hombre o mujer — importa la <b>ENERGÍA</b>. Hay mujeres con energía masculina y hombres con energía femenina. <b>La energía compra, no el sexo.</b> Mira a la PERSONA, no a la etiqueta.</div>
  </div>

  <div class="cn-precond">
    <div class="h">🧒 Para que lo entienda cualquiera</div>
    Hay personas que compran con el <b>CORAZÓN</b> — quieren sentirse bien, seguras, comprendidas. Otras compran con la <b>CABEZA</b> — quieren ganar, tener razón, ser los mejores. Por lo general las mujeres van con el corazón y los hombres con la cabeza — <b>pero no siempre.</b> Tú adivinas: la persona que tienes delante, ¿compra con el corazón o con la cabeza? Y le hablas en su idioma.
  </div>


  <div class="cn-sec">Cómo compra cada uno</div>
  <div class="ps-cmp">
    <div class="row head">
      <div class="cell lbl"></div>
      <div class="cell f"><span class="ttl">🌸 LA MUJER</span><span class="en">energía femenina · «el corazón»</span><span class="say">«Quiero sentirme segura y comprendida.»</span></div>
      <div class="cell m"><span class="ttl">⚡ EL HOMBRE</span><span class="en">energía masculina · «la cabeza»</span><span class="say">«Quiero ganar y ser el mejor.»</span></div>
    </div>
    <div class="row">
      <div class="cell lbl">Cómo decide</div>
      <div class="cell f"><div class="g"><ul><li>Siente primero, piensa después</li><li>El corazón manda — la cabeza busca excusas bonitas</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Piensa primero, siente después</li><li>La cabeza manda: quiere cifras, pruebas, lógica</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Qué teme (en general)</div>
      <div class="cell f"><div class="g"><ul><li>Equivocarse</li><li>Que la juzguen</li><li>Hacer el ridículo</li><li>Decepcionar a sus seres queridos</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Parecer débil</li><li>Que le engañen</li><li>Perder tiempo y dinero</li><li>Perder el control</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Su miedo hacia el MLM</div>
      <div class="cell f"><div class="g"><ul><li>«Voy a vender de forma agresiva a mis amigas»</li><li>«Voy a parecer patética / desesperada»</li><li>«Voy a perder a mis amigas»</li><li>«No soy del tipo que vende»</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>«¿Es un esquema piramidal?»</li><li>«La gente se va a reír de mí»</li><li>«Pierdo el tiempo para nada»</li><li>«No quiero andar mendigando a la gente»</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Qué desea</div>
      <div class="cell f"><div class="g"><ul><li>Seguridad</li><li>Una comunidad cálida</li><li>Algo suyo, sin descuidar a su familia</li><li>Ayudar también a los demás</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Ganar</li><li>Libertad financiera</li><li>Control sobre su tiempo</li><li>Estatus y respeto</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Qué quiere sentir con una actividad nueva</div>
      <div class="cell f"><div class="g"><ul><li>Segura, comprendida, apoyada</li><li>Que pertenece a un grupo bonito</li><li>Tranquilidad de no equivocarse</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Fuerte, ganador, con el control</li><li>Que ha tomado una decisión inteligente — que invierte, no que le engañan</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Palabras que la convencen</div>
      <div class="cell f"><div class="g"><span class="tag">seguridad</span><span class="tag">juntas</span><span class="tag">a tu ritmo</span><span class="tag">sin presión</span><span class="tag">familia</span><span class="tag">cuidado</span></div></div>
      <div class="cell m"><div class="g"><span class="tag">resultado</span><span class="tag">ganancia</span><span class="tag">control</span><span class="tag">el mejor</span><span class="tag">libertad</span><span class="tag">cifras</span></div></div>
    </div>
  </div>

  <div class="detect-h">💡 Cómo reconoces la energía — al instante</div>
  <div class="detect">
    <div class="det f">
      <div class="det-h">🌸 Energía femenina</div>
      <div class="det-row"><span class="det-l">Habla de</span><span class="det-v">personas, sentimientos, familia · te pide tu opinión</span></div>
      <div class="det-row"><span class="det-l">Tú respondes</span><span class="det-v">con calidez · sobre <b>seguridad</b> y <b>«juntas»</b></span></div>
    </div>
    <div class="det m">
      <div class="det-h">⚡ Energía masculina</div>
      <div class="det-row"><span class="det-l">Habla de</span><span class="det-v">cifras, resultados, tiempo · quiere llevar la conversación</span></div>
      <div class="det-row"><span class="det-l">Tú respondes</span><span class="det-v">breve · sobre <b>ganancia</b> y <b>control</b></span></div>
    </div>
  </div>

  <!-- ===== SCRIPT ===== -->
  <div class="cn-sec">El guion</div>

  <div class="spine">
    <div class="ic">🗝️</div>
    <div>
      <div class="t">El principio que sostiene todo el guion</div>
      <div class="d">Nunca la convences — haces que sienta que <b>ELLA elige</b>. Cada frase le da a ella el control y la seguridad, no a ti la razón. Un agente que entiende esto cierra el doble de veces que uno que solo lee las frases.</div>
    </div>
  </div>

  <div class="tabguide">Elige el guion según la <b>energía del cliente</b> que tienes delante:</div>
  <div class="navtabs">
    <button class="navtab active" onclick="psTab('women',this)">Cliente · energía femenina</button>
    <button class="navtab soon" onclick="psTab('men',this)">Cliente · energía masculina <span class="soon-badge">en preparación</span></button>
  </div>

  <div class="womenScript">
    <div class="ctx-slim">
      <div class="ic">🗣️</div>
      <div>
        <div class="ch"><b>De mujer a mujer</b> — agenta mujer → clienta mujer.</div>
        <div class="cd">La fuerza del guion viene de la complicidad «de mujer a mujer». Si el agente es hombre, el enfoque cambia — ese lo construimos aparte.</div>
      </div>
    </div>

    <div class="modebar">
      <div class="lbl">¿Cómo quieres ver el material?</div>
      <div class="seg">
        <button id="b-full" class="on" onclick="psMode('full')">Guion + psicología</button>
        <button id="b-clean" onclick="psMode('clean')">Solo el guion</button>
      </div>
    </div>

    <div class="exch">
      <div class="preopen">
        <div class="preopen-h">🎯 Justo antes de empezar (antes de la Apertura)</div>
        <div class="preopen-b">No abras la boca hasta que estés en el estado adecuado. 30 segundos: respira hondo, baja el ritmo, ponte la sonrisa en la cara. Entras <b>cálida y tranquila</b> — sin prisa, sin la necesidad de convencer. Lo primero que le transmites no es una palabra, es un estado.</div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Por qué — a nivel psicológico</div><div class="strat">Tu estado habla primero</div><ul><li>Una mujer siente tu energía antes de oír tus palabras.</li><li>En los primeros segundos, su cerebro límbico decide una sola cosa: «¿aquí estoy segura o no?».</li><li>Entras desde la presión → siente tu necesidad y levanta el escudo. Entras desde la calma → te percibe como aliada, no como vendedora.</li></ul><div class="impact"><b>La regla de oro:</b> el guion de abajo solo hace efecto si tu estado lo sostiene.</div></div>
    </div>

    <div class="phase-band">▸ Pasos 1–4 · ANTES de la presentación — conexión + marco de seguridad</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">1 · Apertura</span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«Cariño… sé exactamente cómo te sientes… y sé que nosotras, como mujeres, antes que nada queremos saber que estamos seguras con nuestras decisiones. Queremos saber que no vamos a fracasar, que no vamos a hacer el ridículo, que no vamos a quedar en evidencia.»</div></div>
        <span class="cn-pause">⏸ CÁLLATE — necesitas su confirmación</span>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Validación emocional + necesidad de seguridad</div><ul><li>Le validas las emociones antes de presentarle la oportunidad.</li><li>Le dices lo que ya siente, pero no verbaliza → se siente comprendida, no vendida.</li><li>Desarmas el miedo al fracaso y a la vergüenza.</li><li>La pausa la deja procesar; cuando confirma, se implica emocionalmente.</li></ul><div class="impact"><b>Impacto:</b> una mujer solo se abre cuando se siente comprendida.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">2 · Pedir permiso</span>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«Así es…»</div></div>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«¿Puedo hacerte una pregunta?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«Sí…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Pedir permiso</div><ul><li>La mujer reacciona de maravilla a las preguntas con permiso.</li><li>Creas respeto, seguridad y cero presión.</li><li>La pones en posición de control.</li></ul><div class="impact"><b>Impacto:</b> se vuelve mucho más receptiva.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">3 · Identidad femenina<span class="nu-badge">🔁 NO estratégico</span></span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«¿Crees que yo, como mujer, sabiendo lo que más valora una mujer en este mundo, me habría lanzado a un proyecto donde fuera a hacer el ridículo, donde fuera a fracasar, donde fuera a parecer patética?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«No… no creo…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Identidad femenina + postura de igual a igual</div><ul><li>Te pones en la misma categoría: «de mujer a mujer».</li><li>El mensaje sutil: «si yo no me expondría, tampoco te expondría a ti».</li></ul><div class="impact"><b>Impacto:</b> se siente protegida, no manipulada.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">4 · La pregunta con «no»<span class="nu-badge">🔁 NO estratégico</span></span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«¿Crees con toda tu alma que a ti, como mujer, te presentaría un proyecto donde te empujaría hacia el fracaso, hacia el ridículo… o sientes que entiendo cuáles son las necesidades de una mujer cuando tiene que elegir?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«Sientes cuáles son las necesidades…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Pregunta con «no» + acceso a las necesidades</div><ul><li>Una pregunta hecha para obtener un «NO» que en realidad es un «SÍ».</li><li>Le confirmas de forma sutil que entiendes la psicología femenina.</li></ul><div class="impact"><b>Impacto:</b> cuando una mujer dice «siento que me entiendes», ya tienes el 70% de la decisión.</div></div>
    </div>

    <div class="present-card">
      <div class="ic">🎤</div>
      <div class="t">LA PRESENTACIÓN 1 A 1</div>
      <div class="d">Aquí presentas el producto / la oportunidad, cara a cara. Los pasos 1–4 han preparado el terreno; solo ahora, cuando ella tiene todos los detalles, continúas con las preguntas de cierre.</div>
      <div class="lk">→ ver el módulo «Presentación»</div>
    </div>

    <div class="phase-band">▸ Pasos 5–11 · DESPUÉS de la presentación — desactivas el miedo → cierras la venta</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">5 · Desactivar el miedo</span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«Ahora que tienes todos los detalles, ¿crees que una decisión de <span class="fill">X dinero</span> <span class="cue">(dices el importe del pack de inicio)</span>, donde recibes <span class="fill">X, Y, Z</span> <span class="cue">(enumeras lo que recibe — productos / beneficios)</span> — es arriesgada para ti, te va a hacer el ridículo o te va a exponer al fracaso?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«eeh… nooo…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Desactivar el miedo + reducir el riesgo</div><ul><li>Devuelves los miedos a su dimensión real: «¿de verdad hay riesgo aquí?».</li><li>Micro-preguntas que hacen que el temor parezca exagerado.</li><li>Activas la lógica con suavidad.</li></ul><div class="impact"><b>Impacto:</b> minimizas el riesgo → la decisión se vuelve fácil.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">6 · Ironía suave<span class="nu-badge">🔁 NO estratégico</span></span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«¿Crees que sería una decisión equivocada probar la calidad de los productos… y te van a echar de casa por intentarlo? 😄»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«nooo…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Ironía suave + reducción de la presión</div><ul><li>Exageras el miedo a propósito → se vuelve absurdo y la hace reír.</li><li>Humor empático, no sarcástico — la mujer reacciona de maravilla.</li></ul><div class="impact"><b>Impacto:</b> el miedo desaparece, aparece la relajación.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">7 · Complicidad femenina</span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«Lo que les faltaba… que encima nos echen en cara que solo les dejamos comida fría… 😄»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«…Síí 😄»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Complicidad femenina + humor que conecta</div><ul><li>Creas un «chiste interno» femenino.</li><li>Ella siente que habla con una amiga, no con un reclutamiento MLM.</li><li>Creas pertenencia: «somos del mismo mundo».</li></ul><div class="impact"><b>Impacto:</b> crece enormemente la conexión y la confianza.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">8 · Pregunta de control</span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«¿Cómo te sentirías más cómoda? ¿Eligiendo tú los productos, o estás abierta a que te sugiera los que uso yo y que no encuentras en el comercio con esta calidad?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«Sugiéreme tú…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Pregunta de control + validación de la experiencia</div><ul><li>Le ofreces control total → las mujeres deciden fácil cuando sienten libertad.</li><li>Le transmites de forma indirecta que tienes experiencia y conocimiento.</li></ul><div class="impact"><b>Impacto:</b> seguridad + apertura → te da permiso para guiarla.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">9 · Dos opciones</span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«¿Qué zona prefieres? ¿Perfumes que resalten aún más tu feminidad y tu sensualidad… o la zona de limpieza, donde ya no maldices porque la placa se quedó manchada después de frotar 30 minutos? 😄»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«Las dos…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Pregunta con dos opciones + identidad femenina</div><ul><li>El método «una u otra» → ambas opciones llevan igual a un «SÍ».</li><li>Activas dos identidades: la mujer sensual (perfumes) y el ama de casa eficiente (limpieza).</li></ul><div class="impact"><b>Impacto:</b> la elección se vuelve fácil y agradable.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">10 · Activar los sentidos</span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«Perfecto… Tenemos el perfume X, que… (describes solo 2 perfumes, de forma sensorial)»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«Excelente… suena bien…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">Activar los sentidos + feminidad simbólica</div><ul><li>Lenguaje sensorial → imaginación → emoción.</li><li>Una mujer compra perfumes de forma emocional: lo vinculas a «cómo se siente», no a «cuánto cuesta».</li></ul><div class="impact"><b>Impacto:</b> decisión emocional.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">11 · Cierre suave</span>
        <div class="cn-line"><div class="cn-role">Tú</div><div class="cn-say">«¿Cuántos te haría ilusión que te anote en el pedido…?»</div></div>
        <div class="cn-line client"><div class="cn-role client">Ella</div><div class="cn-say client">«…X…»</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psicología detrás</div><div class="strat">La pregunta de decisión suave</div><ul><li>No preguntas «¿quieres pedir?», sino «¿cuántos te anoto?» → das por hecho que la decisión ya está tomada.</li><li>«Te haría ilusión» toca la zona emocional, no la lógica → sube la conversión.</li></ul><div class="impact"><b>Impacto:</b> cierras con elegancia, sin presión.</div></div>
    </div>

    <div class="cn-sec">Reglas importantes</div>
    <div class="cn-rule"><div class="cn-rule-num">1</div><div><div class="cn-rt">Lee el guion en VOZ ALTA antes.</div><div class="cn-rd">Al menos 11 veces — para que la mente se acostumbre a él.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">2</div><div><div class="cn-rt">En Zoom, el guion está a tu lado, escrito con claridad.</div><div class="cn-rd">Que no tengas que pelearte para leerlo.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">3</div><div><div class="cn-rt">No cambies las palabras.</div><div class="cn-rd">Las palabras cambiadas cambian el sentido de la frase.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">4</div><div><div class="cn-rt">Vigila que ELLA responda EXACTAMENTE a tu pregunta.</div><div class="cn-rd">Justo a la pregunta que le haces, no a otra cosa.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">5</div><div><div class="cn-rt">Si responde con otra cosa, vuelves a hacer la misma pregunta.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">6</div><div><div class="cn-rt">Solo en Zoom / 1 a 1, nunca por mensajes de texto.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">7</div><div><div class="cn-rt">Antes de la llamada, entra en tu estado óptimo de rendimiento.</div></div></div>

    <div class="cn-sec">Errores que matan el guion</div>
    <div class="mistakes">
      <div class="mistake"><div class="x">✕</div><div>Vas con prisa y te saltas los <b>CÁLLATE</b> / las pausas. El silencio es la herramienta, no el vacío — si lo rellenas, pierdes la confirmación.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Explicas el producto por teléfono, antes del encuentro. La presentación se hace cara a cara — por teléfono solo consigues el «sí» a un café.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Cambias las palabras «para que suene mejor». Las palabras cambiadas cambian el sentido — la estructura está probada justo así.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Empujas. Una mujer levanta el escudo al instante ante la presión — si nota la agenda por delante del cuidado, se cierra.</div></div>
    </div>
    <div class="note">Este es el guion completo, integrado — de mujer a mujer (11 intercambios + reglas + errores).</div>
  </div>

  <div class="men">
    <h3>Energía masculina · en preparación</h3>
    <p>La tabla de arriba ya muestra el patrón. El guion para energía masculina lo construimos sobre la misma estructura — directo, con cifras, ganancia y control.</p>
    <p style="margin-top:14px;font-size:13px;color:var(--muted2)">Súbeme un material, o dime que lo esboce yo sobre el patrón de la tabla.</p>
  </div>
`;

const psihologie_fr = `
<div class="cn-title-block">
    <h1 class="cn-h1">Comment achètent la femme &amp; l'homme</h1>
    <div class="cn-subtitle">la psychologie d'achat en MLM</div>
  </div>

  <p class="cn-lead">Avant tout script, tu comprends d'abord <b>qui</b> tu as en face. Ensuite tu lui parles dans sa langue.</p>

  <div class="cn-sec">📊 Chiffres officiels</div>
  <div class="stats">
    <div class="stile"><div class="n">85%</div><div class="l">des décisions d'achat sont influencées par les femmes</div><div class="s">Forbes, 2024</div></div>
    <div class="stile"><div class="n">73%</div><div class="l">des distributeurs en vente directe / MLM sont des femmes</div><div class="s">DSA, 2024</div></div>
    <div class="stile"><div class="n">+30%</div><div class="l">plus attentives aux avis et aux retours avant d'acheter</div><div class="s">Capital One · BLS/Pew</div></div>
    <div class="stile"><div class="n">58<span style="font-size:16px">/44</span></div><div class="l">minutes par session de shopping — femmes vs hommes</div><div class="s">BLS · Statista</div></div>
  </div>
  <div class="statsnote">Les chiffres montrent à quel point les femmes <b>influencent</b> les achats. « Décide de façon émotionnelle vs. rationnelle » est une tendance de vente, pas une statistique officielle — c'est pourquoi cela reste sous l'avertissement du haut.</div>
  <div class="hero-line">Celle qui comprend la psychologie d'achat d'une femme —<br><b>vend plus vite, mieux, davantage.</b></div>

  <div class="cn-ban">
    <div class="ic">⚠️</div>
    <div class="t"><b>Ce ne sont que des TENDANCES, pas des règles.</b> Peu importe si c'est un homme ou une femme — ce qui compte, c'est l'<b>ÉNERGIE</b>. Il y a des femmes à l'énergie masculine et des hommes à l'énergie féminine. <b>C'est l'énergie qui achète, pas le sexe.</b> Regarde la PERSONNE, pas l'étiquette.</div>
  </div>

  <div class="cn-precond">
    <div class="h">🧒 À la portée de tous</div>
    Certaines personnes achètent avec le <b>CŒUR</b> — elles veulent se sentir bien, en sécurité, comprises. D'autres achètent avec la <b>TÊTE</b> — elles veulent gagner, avoir raison, être les meilleures. En général les femmes vont vers le cœur, les hommes vers la tête — <b>mais pas toujours.</b> À toi de deviner : la personne en face achète-t-elle avec le cœur ou avec la tête ? Et tu lui parles dans sa langue.
  </div>


  <div class="cn-sec">Comment chacun achète</div>
  <div class="ps-cmp">
    <div class="row head">
      <div class="cell lbl"></div>
      <div class="cell f"><span class="ttl">🌸 LA FEMME</span><span class="en">énergie féminine · « le cœur »</span><span class="say">« Je veux me sentir en sécurité et comprise. »</span></div>
      <div class="cell m"><span class="ttl">⚡ L'HOMME</span><span class="en">énergie masculine · « la tête »</span><span class="say">« Je veux gagner et être le meilleur. »</span></div>
    </div>
    <div class="row">
      <div class="cell lbl">Comment elle décide</div>
      <div class="cell f"><div class="g"><ul><li>Elle ressent d'abord, réfléchit ensuite</li><li>Le cœur mène — la tête cherche de belles excuses</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Il réfléchit d'abord, ressent ensuite</li><li>La tête mène : il veut des chiffres, des preuves, de la logique</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Ce qu'il ou elle craint (en général)</div>
      <div class="cell f"><div class="g"><ul><li>Se tromper</li><li>Être jugée</li><li>Se ridiculiser</li><li>Décevoir ses proches</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Paraître faible</li><li>Se faire avoir</li><li>Perdre du temps et de l'argent</li><li>Ne plus avoir le contrôle</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">La peur face au MLM</div>
      <div class="cell f"><div class="g"><ul><li>« Je vais vendre de façon agressive à mes amies »</li><li>« Je vais avoir l'air ridicule / désespérée »</li><li>« Je vais perdre mes amies »</li><li>« Ce n'est pas mon genre de vendre »</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>« C'est un système pyramidal ? »</li><li>« Les gens vont se moquer de moi »</li><li>« Je perds mon temps pour rien »</li><li>« Je ne veux pas mendier auprès des gens »</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Ce qu'il ou elle désire</div>
      <div class="cell f"><div class="g"><ul><li>La sécurité</li><li>Une communauté chaleureuse</li><li>Quelque chose à elle, sans négliger sa famille</li><li>Aider les autres aussi</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Gagner</li><li>La liberté financière</li><li>Le contrôle de son temps</li><li>Le statut et le respect</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Ce qu'il ou elle veut ressentir grâce à une nouvelle activité</div>
      <div class="cell f"><div class="g"><ul><li>En sécurité, comprise, soutenue</li><li>Qu'elle appartient à un beau groupe</li><li>Rassurée de ne pas se tromper</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Fort, gagnant, aux commandes</li><li>Qu'il a pris une décision intelligente — qu'il investit, qu'il ne se fait pas avoir</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Les mots qui les convainquent</div>
      <div class="cell f"><div class="g"><span class="tag">sécurité</span><span class="tag">ensemble</span><span class="tag">à ton rythme</span><span class="tag">sans pression</span><span class="tag">famille</span><span class="tag">attention</span></div></div>
      <div class="cell m"><div class="g"><span class="tag">résultat</span><span class="tag">gain</span><span class="tag">contrôle</span><span class="tag">le meilleur</span><span class="tag">liberté</span><span class="tag">chiffres</span></div></div>
    </div>
  </div>

  <div class="detect-h">💡 Comment reconnaître l'énergie — sur le vif</div>
  <div class="detect">
    <div class="det f">
      <div class="det-h">🌸 Énergie féminine</div>
      <div class="det-row"><span class="det-l">Elle parle de</span><span class="det-v">gens, sentiments, famille · elle te demande ton avis</span></div>
      <div class="det-row"><span class="det-l">Tu réponds</span><span class="det-v">chaleureusement · de <b>sécurité</b> et d'<b>« ensemble »</b></span></div>
    </div>
    <div class="det m">
      <div class="det-h">⚡ Énergie masculine</div>
      <div class="det-row"><span class="det-l">Il parle de</span><span class="det-v">chiffres, résultats, temps · il veut mener la discussion</span></div>
      <div class="det-row"><span class="det-l">Tu réponds</span><span class="det-v">brièvement · de <b>gain</b> et de <b>contrôle</b></span></div>
    </div>
  </div>

  <!-- ===== SCRIPT ===== -->
  <div class="cn-sec">Le script</div>

  <div class="spine">
    <div class="ic">🗝️</div>
    <div>
      <div class="t">Le principe qui tient tout le script</div>
      <div class="d">Tu ne la convaincs jamais — tu lui fais sentir que c'est <b>ELLE qui choisit</b>. Chaque réplique lui donne à elle le contrôle et la sécurité, pas à toi la raison. Une agente qui comprend cela conclut deux fois plus souvent que celle qui se contente de lire les répliques.</div>
    </div>
  </div>

  <div class="tabguide">Choisis le script selon l'<b>énergie du client</b> que tu as en face :</div>
  <div class="navtabs">
    <button class="navtab active" onclick="psTab('women',this)">Client · énergie féminine</button>
    <button class="navtab soon" onclick="psTab('men',this)">Client · énergie masculine <span class="soon-badge">en préparation</span></button>
  </div>

  <div class="womenScript">
    <div class="ctx-slim">
      <div class="ic">🗣️</div>
      <div>
        <div class="ch"><b>De femme à femme</b> — agente femme → cliente femme.</div>
        <div class="cd">La force du script vient de la complicité « de femme à femme ». Si l'agent est un homme, le cadrage change — on le construit à part.</div>
      </div>
    </div>

    <div class="modebar">
      <div class="lbl">Comment veux-tu voir le matériel ?</div>
      <div class="seg">
        <button id="b-full" class="on" onclick="psMode('full')">Script + psychologie</button>
        <button id="b-clean" onclick="psMode('clean')">Le script seul</button>
      </div>
    </div>

    <div class="exch">
      <div class="preopen">
        <div class="preopen-h">🎯 Juste avant de commencer (avant l'Ouverture)</div>
        <div class="preopen-b">N'ouvre pas la bouche tant que tu n'es pas dans le bon état. 30 secondes : respire profondément, ralentis le rythme, mets le sourire sur ton visage. Tu entres <b>chaleureuse et calme</b> — pas pressée, pas depuis le besoin de convaincre. La première chose que tu lui transmets n'est pas un mot, c'est un état.</div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Pourquoi — psychologiquement</div><div class="strat">Ton état parle en premier</div><ul><li>Une femme sent ton énergie avant d'entendre tes mots.</li><li>Dans les premières secondes, son cerveau limbique ne décide qu'une seule chose : « est-ce sûr ici ou non ? ».</li><li>Tu entres depuis la pression → elle sent ton besoin et lève son bouclier. Tu entres depuis le calme → elle te perçoit comme une alliée, pas comme une vendeuse.</li></ul><div class="impact"><b>La règle d'or :</b> le script ci-dessous ne fait effet que si ton état le soutient.</div></div>
    </div>

    <div class="phase-band">▸ Étapes 1–4 · AVANT la présentation — connexion + cadre de sécurité</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">1 · Ouverture</span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Ma belle… je sais exactement comment tu te sens… et je sais que nous, les femmes, on veut avant tout savoir qu'on est en sécurité avec nos décisions. On veut savoir qu'on ne va pas échouer, qu'on ne va pas se ridiculiser, qu'on ne va pas avoir l'air gênées. »</div></div>
        <span class="cn-pause">⏸ TAIS-TOI — tu as besoin d'une confirmation</span>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Validation émotionnelle + besoin de sécurité</div><ul><li>Tu valides ses émotions avant de lui présenter l'opportunité.</li><li>Tu lui dis ce qu'elle ressent déjà mais ne formule pas → elle se sent comprise, pas « vendue ».</li><li>Tu désamorces la peur de l'échec et de la honte.</li><li>La pause la laisse traiter ; quand elle confirme, elle devient émotionnellement impliquée.</li></ul><div class="impact"><b>Impact :</b> une femme s'ouvre seulement quand elle se sent comprise.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">2 · Demander la permission</span>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« C'est vrai… »</div></div>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Je peux te poser une question ? »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« Oui… »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Demander la permission</div><ul><li>La femme réagit à merveille aux questions avec permission.</li><li>Tu crées du respect, de la sécurité et zéro pression.</li><li>Tu la mets en position de contrôle.</li></ul><div class="impact"><b>Impact :</b> elle devient beaucoup plus réceptive.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">3 · Identité féminine<span class="nu-badge">🔁 NON stratégique</span></span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Tu crois que moi, en tant que femme, sachant ce qui compte le plus au monde pour une femme, je me serais lancée dans un projet où je me serais ridiculisée, où j'allais échouer, où j'aurais eu l'air gênée ? »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« Non… je ne crois pas… »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Identité féminine + posture semblable</div><ul><li>Tu te places dans la même catégorie : « de femme à femme ».</li><li>Le message subtil : « si je ne m'exposais pas moi-même, je ne t'exposerais pas non plus ».</li></ul><div class="impact"><b>Impact :</b> elle se sent protégée, pas manipulée.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">4 · La question avec « non »<span class="nu-badge">🔁 NON stratégique</span></span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Tu crois de tout ton être que je te présenterais à toi, en tant que femme, un projet où je te pousserais vers l'échec, vers le ridicule… ou tu sens que je comprends quels sont les besoins d'une femme quand elle doit choisir ? »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« Tu sens quels sont les besoins… »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Question avec « non » + accès aux besoins</div><ul><li>Une question conçue pour obtenir un « NON » qui est en réalité un « OUI ».</li><li>Tu lui confirmes subtilement que tu comprends la psychologie féminine.</li></ul><div class="impact"><b>Impact :</b> quand une femme dit « je sens que tu me comprends », tu tiens déjà 70 % de la décision.</div></div>
    </div>

    <div class="present-card">
      <div class="ic">🎤</div>
      <div class="t">LA PRÉSENTATION EN TÊTE-À-TÊTE</div>
      <div class="d">C'est ici que tu présentes le produit / l'opportunité, face à face. Les étapes 1 à 4 ont préparé le terrain ; c'est maintenant seulement, quand elle a tous les détails, que tu continues avec les questions de closing.</div>
      <div class="lk">→ voir le module « Présentation »</div>
    </div>

    <div class="phase-band">▸ Étapes 5–11 · APRÈS la présentation — tu désamorces la peur → tu conclus la vente</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">5 · Désamorcer la peur</span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Maintenant que tu as tous les détails, crois-tu qu'une décision de <span class="fill">X euros</span> <span class="cue">(tu dis le montant du pack de démarrage)</span>, où tu reçois <span class="fill">X, Y, Z</span> <span class="cue">(tu énumères ce qu'elle reçoit — produits / bénéfices)</span> — est risquée pour toi, va te ridiculiser ou va t'exposer à l'échec ? »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« euh… non… »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Désamorcer la peur + réduire le risque</div><ul><li>Tu ramènes les peurs à leur taille réelle : « y a-t-il vraiment un risque ici ? ».</li><li>Des micro-questions qui font paraître la crainte exagérée.</li><li>Tu actives la logique en douceur.</li></ul><div class="impact"><b>Impact :</b> tu minimises le risque → la décision devient facile.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">6 · Ironie douce<span class="nu-badge">🔁 NON stratégique</span></span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Tu crois que ce serait une mauvaise décision de tester la qualité des produits… et qu'on va te mettre à la porte de chez toi si tu essaies ? 😄 »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« non… »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Ironie douce + réduction de la pression</div><ul><li>Tu exagères volontairement la peur → elle devient absurde et la fait rire.</li><li>Humour empathique, pas sarcastique — la femme y réagit à merveille.</li></ul><div class="impact"><b>Impact :</b> la peur disparaît, la détente s'installe.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">7 · Complicité féminine</span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Il ne manquerait plus que ça… qu'en plus ils nous reprochent de ne leur servir que des plats froids… 😄 »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« …Ouiii 😄 »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Complicité féminine + humour connecteur</div><ul><li>Tu crées une « blague entre nous » féminine.</li><li>Elle a le sentiment de parler à une amie, pas à un recrutement MLM.</li><li>Tu crées l'appartenance : « on est du même monde ».</li></ul><div class="impact"><b>Impact :</b> la connexion et la confiance montent énormément.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">8 · Question de contrôle</span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Comment te sentirais-tu à l'aise ? Choisir toi-même les produits, ou es-tu ouverte à ce que je te suggère ce que j'utilise, moi, et qu'on ne trouve pas dans le commerce à une telle qualité ? »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« Suggère-moi, toi… »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Question de contrôle + validation de l'expertise</div><ul><li>Tu lui offres le contrôle total → les femmes décident facilement quand elles sentent de la liberté.</li><li>Tu lui insuffles indirectement que tu as de l'expérience et de l'expertise.</li></ul><div class="impact"><b>Impact :</b> sécurité + ouverture → elle t'autorise à la guider.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">9 · Deux choix</span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Quel univers te tente ? Des parfums qui mettent encore plus en valeur ta féminité et ta sensualité… ou l'univers du ménage, où tu ne pestes plus parce que la plaque est restée tachée après avoir frotté 30 minutes dessus ? 😄 »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« Les deux… »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Question à deux choix + identité féminine</div><ul><li>La méthode « soit/soit » → les deux options mènent quand même à « OUI ».</li><li>Tu actives deux identités : la femme sensuelle (parfums) et la maîtresse de maison efficace (ménage).</li></ul><div class="impact"><b>Impact :</b> le choix devient facile et agréable.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">10 · Activer les sens</span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Parfait… On a le parfum X, qui… (tu décris seulement 2 parfums, de façon sensorielle) »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« Excellent… ça sonne bien… »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">Activer les sens + féminité symbolique</div><ul><li>Un langage sensoriel → imagination → émotion.</li><li>Une femme achète les parfums émotionnellement : tu la relies à « comment ça se ressent », pas à « combien ça coûte ».</li></ul><div class="impact"><b>Impact :</b> décision émotionnelle.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">11 · Closing en douceur</span>
        <div class="cn-line"><div class="cn-role">Toi</div><div class="cn-say">« Combien serais-tu heureuse que je t'en note sur la commande… ? »</div></div>
        <div class="cn-line client"><div class="cn-role client">Elle</div><div class="cn-say client">« …X… »</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 La psychologie derrière</div><div class="strat">La question de décision en douceur</div><ul><li>Tu ne demandes pas « tu veux commander ? », mais « combien je t'en note ? » → tu présupposes la décision prise.</li><li>« Heureuse » frappe la zone émotionnelle, pas logique → la conversion monte.</li></ul><div class="impact"><b>Impact :</b> tu finalises avec élégance, sans pression.</div></div>
    </div>

    <div class="cn-sec">Règles importantes</div>
    <div class="cn-rule"><div class="cn-rule-num">1</div><div><div class="cn-rt">Lis le script à VOIX HAUTE avant.</div><div class="cn-rd">Au moins 11 fois — pour que l'esprit s'y habitue.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">2</div><div><div class="cn-rt">En Zoom, le script est à côté de toi, écrit clairement.</div><div class="cn-rd">Pour que tu n'aies pas à peiner à le lire.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">3</div><div><div class="cn-rt">Ne change pas les mots.</div><div class="cn-rd">Les mots changés changent le sens de la phrase.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">4</div><div><div class="cn-rt">Veille à ce qu'ELLE réponde PILE à ta question.</div><div class="cn-rd">Exactement à la question posée, pas à autre chose.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">5</div><div><div class="cn-rt">Si elle répond autre chose, tu reposes la même question.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">6</div><div><div class="cn-rt">Seulement en Zoom / en tête-à-tête, jamais par messages écrits.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">7</div><div><div class="cn-rt">Avant l'appel, entre dans un état optimal de performance.</div></div></div>

    <div class="cn-sec">Erreurs qui tuent le script</div>
    <div class="mistakes">
      <div class="mistake"><div class="x">✕</div><div>Tu te presses et tu sautes les <b>TAIS-TOI</b> / les pauses. Le silence est l'outil, pas le vide — si tu le remplis, tu perds la confirmation.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Tu expliques le produit au téléphone, avant la rencontre. La présentation se fait en face à face — au téléphone, tu obtiens seulement le « oui » pour le café.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Tu changes les mots « pour que ça sonne mieux ». Les mots changés changent le sens — la structure est testée exactement ainsi.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Tu pousses. Une femme lève son bouclier à l'instant sous la pression — si elle sent l'agenda avant l'attention, elle se ferme.</div></div>
    </div>
    <div class="note">Voici le script complet, intégré — de femme à femme (11 échanges + règles + erreurs).</div>
  </div>

  <div class="men">
    <h3>Énergie masculine · en préparation</h3>
    <p>Le tableau du haut montre déjà le schéma. Le script pour l'énergie masculine, on le construit sur la même structure — direct, avec des chiffres, du gain et du contrôle.</p>
    <p style="margin-top:14px;font-size:13px;color:var(--muted2)">Envoie-moi un support, ou dis-moi de l'esquisser moi-même sur le schéma du tableau.</p>
  </div>
`;

const psihologie_de = `
<div class="cn-title-block">
    <h1 class="cn-h1">Wie Frau &amp; Mann kaufen</h1>
    <div class="cn-subtitle">die Kaufpsychologie im MLM</div>
  </div>

  <p class="cn-lead">Vor jedem Skript verstehst du zuerst, <b>wer</b> dir gegenübersitzt. Dann sprichst du seine Sprache.</p>

  <div class="cn-sec">📊 Offizielle Zahlen</div>
  <div class="stats">
    <div class="stile"><div class="n">85%</div><div class="l">aller Kaufentscheidungen werden von Frauen beeinflusst</div><div class="s">Forbes, 2024</div></div>
    <div class="stile"><div class="n">73%</div><div class="l">der Vertriebspartner im Direktvertrieb / MLM sind Frauen</div><div class="s">DSA, 2024</div></div>
    <div class="stile"><div class="n">+30%</div><div class="l">achten stärker auf Bewertungen und Meinungen, bevor sie kaufen</div><div class="s">Capital One · BLS/Pew</div></div>
    <div class="stile"><div class="n">58<span style="font-size:16px">/44</span></div><div class="l">Minuten pro Einkaufssitzung — Frauen vs. Männer</div><div class="s">BLS · Statista</div></div>
  </div>
  <div class="statsnote">Die Zahlen zeigen, wie stark Frauen den Einkauf <b>beeinflussen</b>. „Entscheidet emotional vs. rational" ist eine Verkaufstendenz, keine offizielle Statistik — deshalb bleibt sie unter dem Hinweis oben.</div>
  <div class="hero-line">Wer die Kaufpsychologie einer Frau versteht —<br><b>verkauft schneller, besser, mehr.</b></div>

  <div class="cn-ban">
    <div class="ic">⚠️</div>
    <div class="t"><b>Das sind nur TENDENZEN, keine Regeln.</b> Es kommt nicht darauf an, ob Mann oder Frau — es kommt auf die <b>ENERGIE</b> an. Es gibt Frauen mit männlicher Energie und Männer mit weiblicher Energie. <b>Die Energie kauft, nicht das Geschlecht.</b> Schau auf den MENSCHEN, nicht auf das Etikett.</div>
  </div>

  <div class="cn-precond">
    <div class="h">🧒 Ganz einfach erklärt</div>
    Manche Menschen kaufen mit dem <b>HERZEN</b> — sie wollen sich gut fühlen, sicher, verstanden. Andere kaufen mit dem <b>KOPF</b> — sie wollen gewinnen, recht haben, die Besten sein. Meist gehen Frauen übers Herz, Männer über den Kopf — <b>aber nicht immer.</b> Du erkennst: Kauft der Mensch vor dir mit dem Herzen oder mit dem Kopf? Und du sprichst seine Sprache.
  </div>


  <div class="cn-sec">Wie jeder kauft</div>
  <div class="ps-cmp">
    <div class="row head">
      <div class="cell lbl"></div>
      <div class="cell f"><span class="ttl">🌸 DIE FRAU</span><span class="en">weibliche Energie · „das Herz"</span><span class="say">„Ich will mich sicher und verstanden fühlen."</span></div>
      <div class="cell m"><span class="ttl">⚡ DER MANN</span><span class="en">männliche Energie · „der Kopf"</span><span class="say">„Ich will gewinnen und der Beste sein."</span></div>
    </div>
    <div class="row">
      <div class="cell lbl">Wie sie/er entscheidet</div>
      <div class="cell f"><div class="g"><ul><li>Fühlt zuerst, denkt danach</li><li>Das Herz führt — der Kopf sucht schöne Ausreden</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Denkt zuerst, fühlt danach</li><li>Der Kopf führt: will Zahlen, Beweise, Logik</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Wovor sie/er sich fürchtet (allgemein)</div>
      <div class="cell f"><div class="g"><ul><li>Einen Fehler zu machen</li><li>Verurteilt zu werden</li><li>Sich zu blamieren</li><li>Die Liebsten zu enttäuschen</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Schwach zu wirken</li><li>Übers Ohr gehauen zu werden</li><li>Zeit und Geld zu verlieren</li><li>Die Kontrolle zu verlieren</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Die Angst vor MLM</div>
      <div class="cell f"><div class="g"><ul><li>„Ich werde meinen Freunden etwas aufdrängen"</li><li>„Ich wirke peinlich / verzweifelt"</li><li>„Ich verliere meine Freunde"</li><li>„Ich bin nicht der Typ, der verkauft"</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>„Ist das ein Schneeballsystem?"</li><li>„Die Leute lachen mich aus"</li><li>„Ich vergeude meine Zeit"</li><li>„Ich will bei niemandem betteln"</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Was sie/er sich wünscht</div>
      <div class="cell f"><div class="g"><ul><li>Sicherheit</li><li>Eine warme Gemeinschaft</li><li>Etwas Eigenes, ohne die Familie zu vernachlässigen</li><li>Auch anderen helfen</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Gewinnen</li><li>Finanzielle Freiheit</li><li>Kontrolle über seine Zeit</li><li>Status und Respekt</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Was sie/er durch eine neue Tätigkeit fühlen will</div>
      <div class="cell f"><div class="g"><ul><li>Sicher, verstanden, unterstützt</li><li>Dass sie zu einer schönen Gruppe gehört</li><li>Die Gewissheit, keinen Fehler zu machen</li></ul></div></div>
      <div class="cell m"><div class="g"><ul><li>Stark, siegreich, in Kontrolle</li><li>Dass er eine kluge Entscheidung getroffen hat — dass er investiert, nicht dass er reingelegt wird</li></ul></div></div>
    </div>
    <div class="row">
      <div class="cell lbl">Worte, die überzeugen</div>
      <div class="cell f"><div class="g"><span class="tag">Sicherheit</span><span class="tag">gemeinsam</span><span class="tag">in deinem Tempo</span><span class="tag">ohne Druck</span><span class="tag">Familie</span><span class="tag">Fürsorge</span></div></div>
      <div class="cell m"><div class="g"><span class="tag">Ergebnis</span><span class="tag">Gewinn</span><span class="tag">Kontrolle</span><span class="tag">der Beste</span><span class="tag">Freiheit</span><span class="tag">Zahlen</span></div></div>
    </div>
  </div>

  <div class="detect-h">💡 Wie du die Energie erkennst — sofort</div>
  <div class="detect">
    <div class="det f">
      <div class="det-h">🌸 Weibliche Energie</div>
      <div class="det-row"><span class="det-l">Spricht über</span><span class="det-v">Menschen, Gefühle, Familie · fragt nach deiner Meinung</span></div>
      <div class="det-row"><span class="det-l">Du antwortest</span><span class="det-v">warm · über <b>Sicherheit</b> und <b>„gemeinsam"</b></span></div>
    </div>
    <div class="det m">
      <div class="det-h">⚡ Männliche Energie</div>
      <div class="det-row"><span class="det-l">Spricht über</span><span class="det-v">Zahlen, Ergebnisse, Zeit · will das Gespräch führen</span></div>
      <div class="det-row"><span class="det-l">Du antwortest</span><span class="det-v">kurz · über <b>Gewinn</b> und <b>Kontrolle</b></span></div>
    </div>
  </div>

  <!-- ===== SCRIPT ===== -->
  <div class="cn-sec">Das Skript</div>

  <div class="spine">
    <div class="ic">🗝️</div>
    <div>
      <div class="t">Das Prinzip, das das ganze Skript trägt</div>
      <div class="d">Du überzeugst sie nie — du lässt sie fühlen, dass <b>SIE wählt</b>. Jede Replik gibt ihr Kontrolle und Sicherheit, nicht dir das Rechthaben. Ein Berater, der das versteht, schließt doppelt so oft ab wie einer, der nur die Zeilen abliest.</div>
    </div>
  </div>

  <div class="tabguide">Wähle das Skript nach der <b>Energie des Kunden</b>, der dir gegenübersitzt:</div>
  <div class="navtabs">
    <button class="navtab active" onclick="psTab('women',this)">Kunde · weibliche Energie</button>
    <button class="navtab soon" onclick="psTab('men',this)">Kunde · männliche Energie <span class="soon-badge">in Vorbereitung</span></button>
  </div>

  <div class="womenScript">
    <div class="ctx-slim">
      <div class="ic">🗣️</div>
      <div>
        <div class="ch"><b>Von Frau zu Frau</b> — Beraterin → Kundin.</div>
        <div class="cd">Die Kraft des Skripts kommt aus der Verbundenheit „von Frau zu Frau". Ist der Berater ein Mann, ändert sich das Framing — das bauen wir separat auf.</div>
      </div>
    </div>

    <div class="modebar">
      <div class="lbl">Wie willst du das Material sehen?</div>
      <div class="seg">
        <button id="b-full" class="on" onclick="psMode('full')">Skript + Psychologie</button>
        <button id="b-clean" onclick="psMode('clean')">Nur das Skript</button>
      </div>
    </div>

    <div class="exch">
      <div class="preopen">
        <div class="preopen-h">🎯 Kurz bevor du beginnst (vor der Eröffnung)</div>
        <div class="preopen-b">Mach den Mund nicht auf, bevor du im richtigen Zustand bist. 30 Sekunden: tief durchatmen, das Tempo runterfahren, ein Lächeln aufsetzen. Du gehst <b>warm und ruhig</b> rein — nicht gehetzt, nicht aus dem Drang, überzeugen zu müssen. Das Erste, was du ihr vermittelst, ist kein Wort, sondern ein Zustand.</div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Warum — psychologisch</div><div class="strat">Dein Zustand spricht zuerst</div><ul><li>Eine Frau spürt deine Energie, bevor sie deine Worte hört.</li><li>In den ersten Sekunden entscheidet ihr limbisches Gehirn nur eines: „Ist es hier sicher oder nicht?".</li><li>Du gehst aus Druck rein → sie spürt deinen Bedarf und zieht den Schutzschild hoch. Du gehst aus Ruhe rein → sie nimmt dich als Verbündete wahr, nicht als Verkäuferin.</li></ul><div class="impact"><b>Die goldene Regel:</b> Das Skript unten wirkt nur, wenn dein Zustand es trägt.</div></div>
    </div>

    <div class="phase-band">▸ Schritte 1–4 · VOR der Präsentation — Verbindung + Sicherheitsrahmen</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">1 · Eröffnung</span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Meine Liebe … ich weiß genau, wie du dich fühlst … und ich weiß, dass wir Frauen vor allem eines wollen: die Gewissheit, dass wir mit unseren Entscheidungen sicher sind. Wir wollen wissen, dass wir nicht scheitern, dass wir uns nicht blamieren, dass wir nicht peinlich wirken.”</div></div>
        <span class="cn-pause">⏸ SCHWEIG — du brauchst eine Bestätigung</span>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Emotionale Bestätigung + das Bedürfnis nach Sicherheit</div><ul><li>Du bestätigst ihre Gefühle, bevor du ihr die Chance präsentierst.</li><li>Du sprichst aus, was sie längst fühlt, aber nicht in Worte fasst → sie fühlt sich verstanden, nicht bequatscht.</li><li>Du entwaffnest die Angst vor dem Scheitern und der Blamage.</li><li>Die Pause lässt sie verarbeiten; wenn sie bestätigt, wird sie emotional beteiligt.</li></ul><div class="impact"><b>Wirkung:</b> Eine Frau öffnet sich nur, wenn sie sich verstanden fühlt.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">2 · Um Erlaubnis bitten</span>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„Genau so ist es …”</div></div>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Darf ich dir eine Frage stellen?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„Ja …”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Um Erlaubnis bitten</div><ul><li>Eine Frau reagiert hervorragend auf Fragen mit Erlaubnis.</li><li>Du schaffst Respekt, Sicherheit und null Druck.</li><li>Du gibst ihr die Kontrolle.</li></ul><div class="impact"><b>Wirkung:</b> Sie wird viel empfänglicher.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">3 · Weibliche Identität<span class="nu-badge">🔁 Strategisches NEIN</span></span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Glaubst du, dass ich als Frau — die weiß, was einer Frau auf dieser Welt am meisten wert ist — mich in ein Projekt gestürzt hätte, in dem ich mich blamiere, in dem ich scheitere, in dem ich peinlich wirke?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„Nein … glaube ich nicht …”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Weibliche Identität + gleiche Haltung</div><ul><li>Du stellst dich in dieselbe Kategorie: „von Frau zu Frau”.</li><li>Die feine Botschaft: „Wenn ich mich nicht bloßstellen würde, würde ich dich auch nicht bloßstellen”.</li></ul><div class="impact"><b>Wirkung:</b> Sie fühlt sich beschützt, nicht manipuliert.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">4 · Die Frage mit dem „Nein"<span class="nu-badge">🔁 Strategisches NEIN</span></span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Glaubst du mit deinem ganzen Herzen, dass ich dir als Frau ein Projekt vorstellen würde, das dich ins Scheitern, ins Peinliche treibt … oder spürst du, dass ich verstehe, was eine Frau braucht, wenn sie sich entscheiden muss?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„Du spürst, was ich brauche …”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Frage mit „Nein" + Zugang zu den Bedürfnissen</div><ul><li>Eine Frage, die darauf angelegt ist, ein „NEIN" zu bekommen, das in Wahrheit ein „JA" ist.</li><li>Du bestätigst ihr fein, dass du die weibliche Psychologie verstehst.</li></ul><div class="impact"><b>Wirkung:</b> Wenn eine Frau sagt „Ich spüre, dass du mich verstehst", hast du schon 70% der Entscheidung.</div></div>
    </div>

    <div class="present-card">
      <div class="ic">🎤</div>
      <div class="t">DIE 1-ZU-1-PRÄSENTATION</div>
      <div class="d">Hier präsentierst du das Produkt / die Chance, von Angesicht zu Angesicht. Die Schritte 1–4 haben den Boden bereitet; erst jetzt, wenn sie alle Details hat, gehst du mit den Abschlussfragen weiter.</div>
      <div class="lk">→ siehe Modul „Präsentation"</div>
    </div>

    <div class="phase-band">▸ Schritte 5–11 · NACH der Präsentation — Angst entschärfen → Verkauf abschließen</div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">5 · Die Angst entschärfen</span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Jetzt, wo du alle Details hast — glaubst du, dass eine Entscheidung über <span class="fill">X Euro</span> <span class="cue">(du nennst den Betrag des Startpakets)</span>, bei der du <span class="fill">X, Y, Z</span> <span class="cue">(du zählst auf, was sie bekommt — Produkte / Vorteile)</span> bekommst — riskant für dich ist, dich blamieren oder ins Scheitern führen wird?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„Ähm … neein …”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Angst entschärfen + Risiko reduzieren</div><ul><li>Du bringst die Ängste auf ihre reale Größe zurück: „Ist da wirklich ein Risiko?".</li><li>Mikro-Fragen, die die Sorge übertrieben wirken lassen.</li><li>Du aktivierst die Logik sanft.</li></ul><div class="impact"><b>Wirkung:</b> Du minimierst das Risiko → die Entscheidung wird leicht.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">6 · Sanfte Ironie<span class="nu-badge">🔁 Strategisches NEIN</span></span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Glaubst du, es wäre eine falsche Entscheidung, die Qualität der Produkte zu testen … und wirst du aus dem Haus geworfen, wenn du es versuchst? 😄”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„neein …”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Sanfte Ironie + Druck reduzieren</div><ul><li>Du übertreibst die Angst bewusst → sie wird absurd und bringt sie zum Lachen.</li><li>Empathischer Humor, nicht sarkastisch — eine Frau reagiert hervorragend darauf.</li></ul><div class="impact"><b>Wirkung:</b> Die Angst verschwindet, Entspannung stellt sich ein.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">7 · Weibliche Verbundenheit</span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Das fehlte noch … dass sie uns auch noch vorwerfen, wir würden ihnen nur kaltes Essen hinstellen … 😄”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„… Jaa 😄”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Weibliche Verbundenheit + verbindender Humor</div><ul><li>Du schaffst einen weiblichen „Insider-Witz”.</li><li>Sie fühlt, dass sie mit einer Freundin spricht, nicht mit einer MLM-Rekrutierung.</li><li>Du schaffst Zugehörigkeit: „Wir sind aus derselben Welt”.</li></ul><div class="impact"><b>Wirkung:</b> Verbindung und Vertrauen wachsen enorm.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">8 · Die Kontrollfrage</span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Womit würdest du dich wohlfühlen? Wählst du die Produkte selbst aus, oder bist du offen dafür, dass ich dir vorschlage, was ich selbst benutze — und was es in dieser Qualität im Handel nicht gibt?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„Schlag du mir was vor …”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Kontrollfrage + Bestätigung der Expertise</div><ul><li>Du gibst ihr volle Kontrolle → Frauen entscheiden leicht, wenn sie Freiheit spüren.</li><li>Du vermittelst ihr indirekt, dass du Erfahrung und Expertise hast.</li></ul><div class="impact"><b>Wirkung:</b> Sicherheit + Offenheit → sie erlaubt dir, sie zu führen.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">9 · Zwei Möglichkeiten</span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Aus welchem Bereich möchtest du? Düfte, die deine Weiblichkeit und Sinnlichkeit noch mehr zur Geltung bringen … oder der Bereich Reinigung, wo du nicht mehr fluchst, weil der Herd nach 30 Minuten Schrubben immer noch fleckig ist? 😄”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„Beides …”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Frage mit zwei Möglichkeiten + weibliche Identität</div><ul><li>Die „Entweder/Oder”-Methode → beide Optionen führen ohnehin zu „JA".</li><li>Du aktivierst zwei Identitäten: die sinnliche Frau (Düfte) und die effiziente Hausfrau (Reinigung).</li></ul><div class="impact"><b>Wirkung:</b> Die Wahl wird leicht und angenehm.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">10 · Die Sinne aktivieren</span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Perfekt … Wir haben den Duft X, der … (du beschreibst nur 2 Düfte, sinnlich)”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„Ausgezeichnet … klingt gut …”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Die Sinne aktivieren + symbolische Weiblichkeit</div><ul><li>Sinnliche Sprache → Vorstellung → Emotion.</li><li>Eine Frau kauft Düfte emotional: Du verbindest es mit „wie es sich anfühlt", nicht mit „was es kostet".</li></ul><div class="impact"><b>Wirkung:</b> emotionale Entscheidung.</div></div>
    </div>

    <div class="exch">
      <div class="cn-box">
        <span class="cn-zone">11 · Sanfter Abschluss</span>
        <div class="cn-line"><div class="cn-role">Du</div><div class="cn-say">„Wie viele darf ich dir mit Freude auf die Bestellung setzen …?”</div></div>
        <div class="cn-line client"><div class="cn-role client">Sie</div><div class="cn-say client">„… X …”</div></div>
      </div>
      <div class="fc-psy"><div class="pt">🔒 Die Psychologie dahinter</div><div class="strat">Die sanfte Entscheidungsfrage</div><ul><li>Du fragst nicht „Willst du bestellen?", sondern „Wie viele setze ich dir auf?" → du setzt die Entscheidung voraus.</li><li>„Mit Freude" trifft die emotionale Zone, nicht die logische → die Konversion steigt.</li></ul><div class="impact"><b>Wirkung:</b> Du schließt elegant ab, ohne Druck.</div></div>
    </div>

    <div class="cn-sec">Wichtige Regeln</div>
    <div class="cn-rule"><div class="cn-rule-num">1</div><div><div class="cn-rt">Lies das Skript vorher LAUT vor.</div><div class="cn-rd">Mindestens 11 Mal — damit sich dein Kopf daran gewöhnt.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">2</div><div><div class="cn-rt">Im Zoom liegt das Skript neben dir, klar geschrieben.</div><div class="cn-rd">Damit du dich nicht abmühen musst, es zu lesen.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">3</div><div><div class="cn-rt">Ändere die Worte nicht.</div><div class="cn-rd">Geänderte Worte ändern den Sinn des Satzes.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">4</div><div><div class="cn-rt">Achte darauf, dass SIE GENAU auf deine Frage antwortet.</div><div class="cn-rd">Genau auf die gestellte Frage, nicht auf etwas anderes.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">5</div><div><div class="cn-rt">Antwortet sie mit etwas anderem, stellst du dieselbe Frage erneut.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">6</div><div><div class="cn-rt">Nur im Zoom / 1-zu-1, niemals per Textnachricht.</div></div></div>
    <div class="cn-rule"><div class="cn-rule-num">7</div><div><div class="cn-rt">Vor dem Anruf gehst du in deinen optimalen Leistungszustand.</div></div></div>

    <div class="cn-sec">Fehler, die das Skript töten</div>
    <div class="mistakes">
      <div class="mistake"><div class="x">✕</div><div>Du bist in Eile und überspringst das <b>SCHWEIG</b> / die Pausen. Die Stille ist das Werkzeug, nicht die Leere — füllst du sie, verlierst du die Bestätigung.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Du erklärst das Produkt am Telefon, vor dem Treffen. Die Präsentation läuft von Angesicht zu Angesicht — am Telefon holst du dir nur das „Ja" zum Kaffee.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Du änderst die Worte, „damit es besser klingt". Geänderte Worte ändern den Sinn — die Struktur ist genau so getestet.</div></div>
      <div class="mistake"><div class="x">✕</div><div>Du drängst. Eine Frau zieht bei Druck sofort den Schutzschild hoch — spürt sie die Agenda vor der Fürsorge, verschließt sie sich.</div></div>
    </div>
    <div class="note">Das ist das vollständige, integrierte Skript — von Frau zu Frau (11 Austausche + Regeln + Fehler).</div>
  </div>

  <div class="men">
    <h3>Männliche Energie · in Vorbereitung</h3>
    <p>Die Tabelle oben zeigt das Muster bereits. Das Skript für männliche Energie bauen wir auf derselben Struktur auf — direkt, mit Zahlen, Gewinn und Kontrolle.</p>
    <p style="margin-top:14px;font-size:13px;color:var(--muted2)">Lade mir ein Material hoch, oder sag mir, dass ich es nach dem Muster aus der Tabelle skizzieren soll.</p>
  </div>
`;

module.exports = {
  conectare, fulger, prezentare, inchidere, psihologie,
  it: { conectare: conectare_it, fulger: fulger_it, prezentare: prezentare_it, inchidere: inchidere_it, psihologie: psihologie_it },
  en: { conectare: conectare_en, fulger: fulger_en, prezentare: prezentare_en, inchidere: inchidere_en, psihologie: psihologie_en },
  es: { conectare: conectare_es, fulger: fulger_es, prezentare: prezentare_es, inchidere: inchidere_es, psihologie: psihologie_es },
  fr: { conectare: conectare_fr, fulger: fulger_fr, prezentare: prezentare_fr, inchidere: inchidere_fr, psihologie: psihologie_fr },
  de: { conectare: conectare_de, fulger: fulger_de, prezentare: prezentare_de, inchidere: inchidere_de, psihologie: psihologie_de }
};
