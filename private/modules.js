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

module.exports = {
  conectare, fulger, prezentare, inchidere,
  it: { conectare: conectare_it, fulger: fulger_it, prezentare: prezentare_it, inchidere: inchidere_it },
  en: { conectare: conectare_en, fulger: fulger_en, prezentare: prezentare_en, inchidere: inchidere_en },
  es: { conectare: conectare_es, fulger: fulger_es, prezentare: prezentare_es, inchidere: inchidere_es }
};
