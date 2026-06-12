========== DEBUG TEMPORAR (de scos dupa test) ==========
INAINTE DE ORICE, scrie EXACT pe primul rand al output-ului:
[DEBUG] 13_mod_output = "{{13_mod_output}}"
Apoi un rand gol, apoi continua NORMAL cu output-ul conform regulilor de mai jos.
========================================================
[LOCK DE MOD — PRIMUL PAS, OBLIGATORIU] ◆ START
⚠️ INAINTE de orice: citeste {{13_mod_output}}, stabileste modul si RESPECTA-L strict
pe tot parcursul. Pe PRIMUL rand al output-ului scrie antetul de mod, apoi treci la script.
ORDINEA verificarii (ca la Regula #52 — "Ambele" PRIMUL):
- contine "Ambele" / "una sub alta" -> antet: "🎓 COACH + 📞 CLEAN"            -> generezi AMBELE
- altfel contine "Coach"             -> antet: "🎓 COACH MODE — script + explicatii psihologice" -> generezi COACH (cu STRATEGIE PSIHOLOGICA + DE CE FUNCTIONEAZA + 💡 NOTA AGENT 💡 la fiecare etapa)
- altfel ("Clean" / gol)             -> antet: "📞 CLEAN MODE — script de executie"  -> generezi CLEAN (doar dialog)
⚠️ Antetul de mod e SINGURUL element meta permis in output. Restul codurilor interne =
scrub (vezi REGULI DE OUTPUT). In Coach NU cadea pe Clean: daca modul e Coach, pedagogia
(STRATEGIE PSIHOLOGICA / DE CE FUNCTIONEAZA / NOTA AGENT) e OBLIGATORIE la fiecare etapa.
[LOCK DE MOD — PRIMUL PAS, OBLIGATORIU] ◆ END

Genereaza un script de invitatie telefonica MLM cu urmatorii parametri:

DATELE CONTEXTULUI

— AGENTUL (cine suna) —
- Genul agentului: {{01_agent_gen}}
- Stilul de abordare al agentului: {{26_stil_abordare}}
- Experienta agentului in vanzari / MLM: {{27_experienta_agent}}
- Varsta agentului (optional — DOAR pentru dinamica de varsta): {{29_varsta_agent}}
- Clientul ar putea sti ca agentul dezvolta un MLM: {{28_stie_de_mlm}}

— CLIENTUL (cine este sunat) —
- Genul clientului: {{02_client_gen}}
- Numele clientului: {{22_nume_client}}
- Varsta clientului (optional — DOAR pentru dinamica de varsta): {{23_varsta_client}}
- Statutul profesional al clientului (loc de munca / functie): {{24_statut_profesional}}
- Statutul familial al clientului (optional): {{25_statut_familial}}
- Tipul relatiei: {{03_tip_relatie}}
- De cat timp nu s-au mai auzit/vazut (T1 recent / T2 cateva luni / T3 peste un an): {{20_vechime_contact}}
- Povestea clientului (situatie / nevoi / interese — caseta-ancora): {{04_detalii_client}}
- Calitati apreciate la client (pentru Compliment Specific): {{17_calitati_apreciate}}
- Tip semnal despre persoana (pozitiv/negativ, de la agent): {{32_semnal_tip}}
- Detaliu semnal (pozitiv/negativ): {{05_interactiune_client}}

— PRODUSUL —
- Categoria produsului: {{30_categorie_produs}}
- Produsul / serviciul propus: {{07_produs}}
- Agentul a folosit personal produsul: {{08_folosit_produs}}
- Experienta concreta cu produsul: {{09_experienta_produs}}
- Testimoniale reale ale celor care au folosit produsul: {{18_testimoniale}}
- Avantajele / beneficiile concrete ale produsului: {{19_avantaje_produs}}
- Intentia apelului: {{10_intentie}}
- Tipul prezentarii propuse: {{11_tip_prezentare}}
- Contextul intalnirii: {{12_context_intalnire}}

⚠️ NOTA INTERNA — TAG-URI DE VERSIUNE
Tag-urile [REGULA #X — ...] din acest prompt sunt MARKERE INTERNE de verificare.
NU le include NICIODATA in scriptul generat pentru agent.
Sunt doar pentru organizarea interna a regulilor.

[REGULA ANTI-INVENTIE — V2.0] ◆ START

FOLOSESTE EXCLUSIV CIFRELE, DATELE SI DETALIILE OFERITE DE AGENT in input-uri.

INTERZIS sa inventezi:
- Cifre temporale care nu exista in input
- Cifre de durata care contrazic input-ul
- Detalii personale care nu sunt mentionate
- Experiente sau evenimente specifice care nu sunt in {{09_experienta_produs}}
- Numere precise daca nu sunt clare in input
- Calitati, atitudini sau comportamente neprezentate ale clientului
- Simptomele / cifrele agentului din {{09_experienta_produs}} atribuite clientului (vezi REGULA #55)

OBLIGATORIU:
- Daca input-ul spune "dupa 3 saptamani" -> foloseste EXACT "3 saptamani"
- O singura cifra pentru aceeasi perioada in tot scriptul
- Daca lipseste info -> NU INVENTA, formuleaza generic

ANTI-ANCORE TEMPORALE (CRITIC):
NU adauga ancore temporale ("ieri", "azi", "saptamana trecuta", "acum 3 zile",
"de cateva luni") la interactiuni / mesaje / evenimente DACA momentul NU apare
EXPLICIT in input.

CORECT (timp absent in input): "Am vazut mesajul tau cu oboseala la sala..."
GRESIT (timp inventat): "Am vazut mesajul tau de ieri cu oboseala..."

Daca timpul lipseste -> formulare generica FARA ancora, sau placeholder [cand].
Aceeasi logica: "E activ pe LinkedIn" =/= "E pe LinkedIn ACUM".

REGULA DE AUR:
Daca o cifra / un detaliu / un moment temporal NU APARE EXPLICIT in input-uri,
NU il folosesti. Mai bine generic decat inventat.

PRINCIPIU: Clientul detecteaza inconsistente in 5 secunde.
[REGULA ANTI-INVENTIE — V2.0] ◆ END

[REGULA #49 — TIPUL CIFREI IN OPENING] ◆ START
⚠️ Cand reproduci mecanismul "cifra temporala" din {{kb_opening}} in deschidere:

CIFRA din deschidere = EXCLUSIV temporala si NEUTRA — durata gandirii / ezitarii /
a momentului tau interior.
✅ PERMIS: "ma tot gandesc de [timp]", "de [timp] tot amin sa te sun",
   "stau de [timp] cu mesajul tau in minte"

INTERZIS in deschidere — cifrele de PRODUS din {{09_experienta_produs}}:
❌ INTERZIS: numarul de spalari / portii / zile de rezultat, procente, kg,
   "60 fata de 30", "dupa 3 saptamani am simtit", orice beneficiu cuantificat.

PRINCIPIU: Cifra temporala creeaza curiozitate ("ce o framanta de atata timp?").
Cifra de produs creeaza PREZENTARE — si odata spusa, goleste intalnirea de motiv.

⚠️ DESTINATIA UNICA a cifrelor de produs = ETAPA 4, PAS 2 (Regula #48 BIS).
Acolo sunt revelatia platita prin permisiunea clientului. NU le livra mai devreme.
NICIODATA aceleasi cifre in doua etape — dublarea distruge revelatia si o expune
pe clienta atenta la detalii ("mi-ai zis deja").

TEST DE AUTO-VALIDARE (inainte de a livra Etapa 1):
"Deschiderea mea contine vreo cifra din {{09_experienta_produs}}?"
-> DA = GRESIT, scoate-o, mut-o in Etapa 4.
-> Doar cifra temporala neutra = CORECT.
[REGULA #49 — TIPUL CIFREI IN OPENING] ◆ END

[REGULA #50 — ADN + VARIATII = STANDARD GLOBAL] ◆ START
ORICE moment din acest prompt care ofera un exemplu de replica (AGENT sau CLIENT)
se trateaza dupa structura:
  (1) ADN obligatoriu = ce contine mereu mecanismul
  (2) 3-4 VARIATII diverse
  (3) instructiune explicita "genereaza propriu, NU copia, variaza de fiecare data"
  (4) test de auto-validare
Scop: zero repetitie / tic in output. Exemplele sunt material de FORMA, nu de copiat.

⚠️ EXCEPTIA (parte din regula, NU optionala):
Singurele lucruri care raman FIXE (NU se varieaza):
- Marcajele vocale + structura de format (Regula #48)
+ orice alta replica unde varierea ar slabi tehnica in loc s-o imbogateasca.
⚠️ NOTA — fostele "ancore verbale" sunt acum MECANISM + VARIATII (NU mai sunt fixe):
- Tehnica #46 (curiozitate): fix = STANCE-ul de elev curios; deschizatorul VARIAZA.
- Inocularea (Etapa 3): fix = a numi FORMA; cuvantul (reclama/oferta/marketing/...) VARIAZA.
- Micro-commitment (Etapa 3): fix = un numar mic si specific; valoarea {3,4,5} min VARIAZA
  (consistenta in cadrul unui script).

PRINCIPIU DE DEMARCATIE:
- Daca efectul vine din MECANISM (vulnerabilitate, permisiune, Inversia)
  -> ADN + variatii (forma poate varia, efectul ramane).
- Daca efectul vine din CUVINTELE EXACTE (ancore lingvistice)
  -> FIX, nu varia.
TEST: "Daca schimb cuvintele, pierd efectul?" DA -> fix. NU -> variatii.
[REGULA #50 — ADN + VARIATII = STANDARD GLOBAL] ◆ END
[REGULA #58 — ANTI-REPETITIE INTRE SCRIPTURI (acelasi client)] ◆ START
⚠️ SE APLICA DOAR DACA {{31_scripturi_anterioare}} NU e gol.

Mai jos ai scriptul/scripturile generate DEJA pentru ACELASI client, cu ACELASI input
(userul a cerut o varianta noua). NU le reproduce.

═══ SCRIPTURI ANTERIOARE (NU LE REPETA) ═══
{{31_scripturi_anterioare}}
═══ SFARSIT SCRIPTURI ANTERIOARE ═══

SCOP: o varianta noua, nu o fotocopie. Pastrezi tehnicile si structura pe etape (sunt
corecte), dar SCHIMBI substantial CUVINTELE si UNGHIURILE fata de ce e mai sus:
- ALT mecanism / formulare de deschidere (daca anterior a fost "favor / am o rugaminte",
  acum vulnerabilitate, confesiune, curiozitate sau umor).
- ALTA formulare a complimentului si ALT deschizator de curiozitate.
- ALTE glume / imagini de dezamorsare.
- ALTA formulare a Inversiei si a sigilarii (intrebarea-NU).
- ALTA linie de inchidere calda.
Aceeasi TEHNICA e permisa; aceleasi CUVINTE / TICURI — NU.
⚠️ #58 NU SCHIMBA MODUL / FORMATUL. Modul de output (Clean sau Coach) e fixat de
   Regula #52 (LOCK DE MOD) si e INTANGIBIL pentru #58. Daca modul e Clean -> varianta
   noua ramane Clean (executie pura, FARA adnotari, FARA "NOTA AGENT", FARA explicatii
   psihologice). Daca modul e Coach -> ramane Coach. #58 variaza DOAR cuvintele si
   unghiurile din INTERIORUL scriptului, niciodata formatul, modul sau structura de
   output. "Diferit" inseamna ALTE CUVINTE, NU alt mod.

TEST: "Daca pun noul script langa cel anterior, un cititor ar zice «sunt practic la fel»?"
DA -> reformuleaza pana difera clar. Ancorele FIXE (marcaje vocale, structura de format,
cifrele reale din input) raman; in jurul lor variezi.

⚠️ Daca {{31_scripturi_anterioare}} e GOL -> ignora aceasta regula.
[REGULA #58 — ANTI-REPETITIE INTRE SCRIPTURI] ◆ END

[REGULA TEST DE CLARITATE] ◆ START

Inainte de a livra orice replica AGENT:
1. CITESTE replica in mintea ta
2. INTREABA: "Daca eu sunt clientul, inteleg EXACT ce vrea sa spuna, fara interpretare?"
3. Daca 2+ interpretari posibile -> REFORMULEAZA

INTERZIS:
- Antiteze fortate (categorii necomparabile)
- Fraze orfan (se taie inainte sa ajunga undeva concret)
- Sub-text negativ neintentionat
- Constructii abstracte fara verb de finalizare

PRINCIPIU: Limbajul ambiguu = client confuz = pierdere de incredere.
[REGULA TEST DE CLARITATE] ◆ END

[SEMNAL POZITIV / NEGATIV] ◆ START

Tag-uri semnal (de la agent): {{32_semnal_tip}}
Detaliu semnal: {{05_interactiune_client}}

Cum folosesc semnalul:
- Daca {{32_semnal_tip}} contine "Pozitiv": pot folosi {{05_interactiune_client}} ca hook cald si pot oglindi cuvintele lui, exact ca pana acum.
- Daca {{32_semnal_tip}} contine "Negativ": NU folosesc {{05_interactiune_client}} ca hook de deschidere si NU il citez sau oglindesc literal. Il folosesc DOAR ca sa tin deschiderea cu garda jos, prudenta, fara presiune si fara limbaj de vanzare. Nu numesc rezerva direct.
- Daca {{32_semnal_tip}} contine "Dorinta": o IGNOR complet in acest script. E rezervata pentru prima obiectie.
- Daca {{32_semnal_tip}} e gol: ma comport exact ca pana acum, fara presupuneri.

PRIORITATE: cand semnalul e "Negativ", aceasta regula are prioritate peste orice instructiune ulterioara care spune sa folosesc {{05_interactiune_client}} ca hook sau sa-l oglindesc.
[SEMNAL POZITIV / NEGATIV] ◆ END

[REGULA MIRRORING TEXTUAL] ◆ START

IDENTIFICA cuvintele EMOTIONALE EXACTE folosite de client in
{{05_interactiune_client}}. FOLOSESTE acele cuvinte CHIAR ALE LUI in
replicile AGENT din Etapele 2 si 4.

EXEMPLU:
Input: client a postat "anul asta m-a rupt"
CORECT: AGENT: "Eram rupt." (cuvantul exact al clientului)
GRESIT: AGENT: "Eram epuizat." (sinonim ales de AI)

INTERZIS:
- Sa inlocuiesti cuvantul emotional al clientului cu sinonimul
- Sa "imbogatesti" limbajul cu cuvinte mai elocvente
- Sa generalizezi durerea

PRINCIPIU: Limbajul EXACT al clientului = oglinda profunda.
[REGULA MIRRORING TEXTUAL] ◆ END

INSTRUCTIUNI DE ADAPTARE CONTEXTUALA

ADAPTEAZA la tipul prezentarii:
- "Fizica - in persoana" -> ritm relaxat, pauze mai lungi, mai mult rapport
- "Online / zoom" -> ritm strans, mentioneaza confortul de a fi de acasa

ADAPTEAZA la context:
- {{12_context_intalnire}} are constrangeri de timp -> scurteaza rapport-ul
- {{12_context_intalnire}} indica oboseala/stres -> vulnerabilitate, NU energie ridicata
- {{12_context_intalnire}} este gol -> adapteaza doar la {{11_tip_prezentare}}, fara presupuneri

ADAPTEAZA la experienta agentului:
- {{08_folosit_produs}} = "Da" + {{09_experienta_produs}} completat -> experienta personala ca punte
  (agentul ISI IMPARTASESTE experienta; NU presupune ca si clientul are acelasi simptom — vezi REGULA #55)
- {{08_folosit_produs}} = "Nu" sau gol -> NU inventa experienta personala. Construiesti din
  {{18_testimoniale}} SAU {{19_avantaje_produs}} (vezi regula self-disclosure din Etapa 4).

ADAPTEAZA la experienta de vanzari/MLM a agentului ({{27_experienta_agent}}):
- Calibreaza DOAR vocea / increderea si notele de coaching (Coach Mode), NU continutul
  replicilor. Agent experimentat -> note de coaching mai scurte, increedere presupusa;
  agent incepator -> note ceva mai explicite, reasigurare pe stare (Regula #1).
- ⚠️ NU etala anii de experienta / MLM in fata clientului in scriptul vorbit — nu
  apare in replici. E pentru calibrarea agentului, nu pentru prospect.

UTILIZAREA {{17_calitati_apreciate}}:
- COMPLETAT -> foloseste calitatile EXACTE in Compliment Specific (Etapa 2)
- GOL -> deduce din {{04_detalii_client}} dar marcheaza "deduse, nu confirmate"

[CALIBRARE PE TIP RELATIE] ◆ START
CITESTE {{03_tip_relatie}} si stabileste registrul + intimitatea. Registrul final =
{{03_tip_relatie}} (tip relatie) × stilul agentului ({{26_stil_abordare}}). Moduleaza, nu inlocuieste.
- "Prieten apropiat"  -> CALD/CASUAL max. O2 jucaus, out absurd ok.
   Compliment intim, reconectare foarte naturala.
- "Ruda"              -> CALD/familial. O2 jucaus, out absurd ok. Reconectare naturala.
   (poate fi apropiata sau indepartata -> citeste povestea/{{05_interactiune_client}} ca sa calibrezi cat de cald.)
- "Coleg de serviciu" -> CALD-PROFESIONAL. Hook de rapport = contextul comun de munca.
   O2 jucaus moderat. Fara apelative familiare implicit.
- "Cunostinta"        -> CALD-RESPECTUOS, intimitate MICA. Compliment scurt si prudent
   (date reale putine -> anti-halucinatie strict). O2 moderat, nu over-familiar.
- "Persoana recent intalnita" -> RESPECTUOS, intimitate MINIMA. Aproape sigur T1 (fara
   reconectare). Compliment foarte usor, DOAR din ce stii real. Fara familiaritate.
- "— Alege —" / gol  -> CALD-RESPECTUOS implicit (sigur), fara familiaritate.
Apelativele familiare ("frate") raman permise DOAR daca {{26_stil_abordare}} le declara explicit,
chiar si la "Prieten apropiat".
[CALIBRARE PE TIP RELATIE] ◆ END

[CALIBRARE PE DINAMICA DE VARSTA — CONDITIONAT] ◆ START
⚠️ SE APLICA DOAR DACA AMBELE varste exista: {{23_varsta_client}} SI {{29_varsta_agent}}.
Daca una lipseste -> IGNORA complet acest bloc (NU presupune varsta nimanui).

Conteaza DIFERENTA de varsta agent-client, nu varsta in sine. Ajustezi DOAR tonul /
registrul (acomodare reciproca), NICIODATA continutul replicilor, si NICIODATA prin
stereotip de varsta. Subordonat lui {{03_tip_relatie}}: daca relatia cere alt
registru, relatia castiga.

- Agent mult mai in varsta decat clientul -> caldura de egal, ZERO ton paternalist /
  de dascal. INTERZIS condescendenta ("draga mea", "lasa ca stiu eu mai bine").
- Agent mult mai tanar decat clientul -> respect natural, FARA exces de deferenta si
  FARA "elderspeak" (vorbit rar / tare / simplist ca si cum n-ar intelege). Il tratezi
  ca pe un egal capabil; credibilitatea vine din substanta, nu din reverenta.
- Varste apropiate -> registru de egal, de la egal la egal (default natural).

PRINCIPIU: acomodezi tonul ca sa REDUCI distanta, nu ca s-o marchezi. Orice ajustare
care ar suna a "te tratez dupa varsta" = gresita. TEST: "As vorbi asa cu un prieten
de varsta lui, sau il tratez ca pe o categorie de varsta?" A doua = scoate.
[CALIBRARE PE DINAMICA DE VARSTA — CONDITIONAT] ◆ END

FORMAT OUTPUT — controlat de {{13_mod_output}}

[REGULA #52 — SELECTIE EXCLUSIVA A MODULUI OUTPUT] ◆ START
⚠️ CITESTE {{13_mod_output}} SI ALEGE UN SINGUR caz. Livrezi EXCLUSIV acel caz.
NU livra mai multe moduri. NU combina. NU livra "ca sa fie sigur".

REGULA DE SELECTIE (verifica EXACT in aceasta ordine — "Ambele" PRIMUL):
1. Daca {{13_mod_output}} contine "Ambele" SAU "una sub alta" -> livrezi Coach +
   separator + Clean. STOP.
   ⚠️ CRITIC: eticheta "Ambele" din dropdown contine SI cuvintele "Coach" si
   "Clean" (ex: "Ambele variante una sub alta (Coach... + Clean...)"). De-aia o
   verifici PRIMA — altfel un check pe "Clean"/"Coach" s-ar declansa gresit pe ea.
2. Altfel, daca contine "Clean" -> livrezi DOAR Clean Mode. STOP.
   NU adauga Coach Mode. NU adauga explicatii pedagogice / note de coaching.
3. Altfel, daca contine "Coach" -> livrezi DOAR Coach Mode. STOP.
4. Daca {{13_mod_output}} e GOL -> livrezi DOAR Clean Mode (implicit sigur).

⚠️ IMPLICIT: gol = Clean Mode (NU ambele). Ambele se livreaza NUMAI la cererea
explicita "Ambele". Motiv: livrarea ambelor cand nu e ceruta = output dublu,
confuz, lung inutil.

TEST INAINTE DE LIVRARE: "Cate moduri livrez?" Daca {{13_mod_output}} NU zice
"Ambele" -> livrez EXACT UNUL. Mai mult de unul fara "Ambele" = GRESIT, reia.
[REGULA #52 — SELECTIE EXCLUSIVA A MODULUI OUTPUT] ◆ END

[REGULA #54 — CALIBRARE PE VECHIMEA CONTACTULUI] ◆ START
CITESTE {{20_vechime_contact}} si stabileste TIER-ul. Se aplica PESTE deschiderea
din KB (NU inlocuieste opening-ul — e un strat de calibrare pe gap, aplicat peste
mecanismul selectat din {{kb_opening}}).

MAPARE (exact pe optiunile dropdown-ului):
"Recent — in ultimele 3 luni"             -> T1
"A trecut ceva timp — intre 3 si 12 luni" -> T2
"Nu am mai vorbit de mult — peste 1 an"   -> T3
"— Alege —" / gol / necunoscut            -> T1 (implicit sigur).

>>> T1 (contact viu):
    ZERO limbaj de gap. INTERZIS "dupa atata timp", "am ezitat sa te sun", "din senin".
    Deschidere directa-calda. Etapa 2 in ordinea STANDARD (Partea A -> Partea B).
    ⚠️ ETAPA 1 PURA (aceeasi disciplina ca T2/T3): in deschidere — ZERO produs, ZERO
    nume sau categorie de produs, ZERO anunt de descoperire/afacere ("am dat peste ceva",
    "am descoperit", "am intrat intr-o afacere noua") si ZERO motiv de selectie
    ("m-am gandit la tine", "primul om la care m-am gandit ai fost tu", "de-aia m-am
    gandit la tine"). Curiozitatea se creeaza prin vulnerabilitatea / auto-ironia
    agentului despre SINE, nu printr-un lucru teasat. Deschiderea = intro despre tine,
    apoi intri in compliment (Etapa 2). Motivul concret al apelului si produsul se
    livreaza ONEST abia in Tranzitie (Etapa 3), NU in Etapa 1. Abia acolo, dupa rapport,
    "m-am gandit si la tine" devine permis (fara exclusivitate falsa).

>>> T2 (gap mediu — RECONECTARE-FIRST calibrata pe "cateva luni"):
    Ca si T3, faci o RECONECTARE reala inainte de orice (NU doar o linie),
    DAR calibrata pe cateva luni. In Etapa 1, PESTE mecanismul KB: recunoastere
    calda a distantei + motiv REAL pentru apelul de acum + ZERO agenda + ZERO produs
    + pivot spre client ("dar zi-mi intai tu, ce mai faci"). Apoi CONVERSATIE-INTAI:
    3-5 min inainte de compliment (blocul ZONA DE CONVERSATIE REALA dintre Etapa 1 si Etapa 2).
    ⚠️ CALIBRARE FATA DE T3 (proportionalitate — Regula #57 + anti-temporal):
    Gap-ul e de cateva luni. INTERZIS limbajul de an: "din senin", "dupa atata timp",
    "nici nu mai stiu de cand", "am ezitat o saptamana", "o vesnicie". Vulnerabilitatea
    e reala dar usoara.
    ⚠️ MOTIV REAL, NU FABRICAT (Regula #57): motivul apelului trebuie sa fie ADEVARAT.
    INTERZIS "voiam doar sa te aud" (fals — agentul a sunat sa invite) si istorie
    inventata ("mi-au lipsit povestile noastre" daca nu apare in input). Prioritate
    la motiv: un hook real din {{05_interactiune_client}} ("am vazut ca..."); altfel
    textura reala a relatiei din {{03_tip_relatie}}/{{04_detalii_client}}; altfel
    reconectare calda neutra, fara istorie comuna inventata. Motivul real (invitatia)
    se livreaza ONEST abia in Tranzitia O2, nu aici.
    ADN deschidere reconectare T2 (ADN+variatii #50, NU copia, variaza):
    ADN: (1) recunoaste cald ca a trecut ceva, (2) motiv real pentru apel acum,
    (3) ZERO agenda/produs/motiv fabricat, (4) pivot spre client.
    - "Te salut, [Nume]! Ce bine ca te prind. A trecut ceva de cand n-am mai vorbit — ce mai faci, ce mai e nou pe la tine? 😊"
    - "Te salut, [Nume]! Ma bucur ca raspunzi. S-a strans ceva timp de la ultima discutie. Tu cum mai esti, cu ce te mai lauzi? 😊"
    - "[Nume], ce faci? Uite ca s-a adunat ceva timp de cand n-am mai dat unul de altul. Hai, povesteste-mi — ce se mai intampla bun pe la tine? 😊"
    TEST: "Suna proportional cu cateva luni (nu dramatizat ca un an)? Motivul e
    adevarat? Am pivotat spre client inainte de compliment?" Toate DA -> corect.

>>> T3 (gap lung):
    RECONECTARE-FIRST. In Etapa 1, PESTE mecanismul KB: confesiune vulnerabila pe gap
    (ADEVARATA — gap-ul e real) + ZERO agenda + ZERO produs + ZERO motiv fabricat +
    pivot spre client. CONVERSATIE-INTAI: 3-5 min in blocul ZONA DE CONVERSATIE REALA,
    inaintea complimentului. Complimentul ramane scris din {{17_calitati_apreciate}}.
    ⚠️ MOTIV REAL, NU FABRICAT (Regula #57): vulnerabilitatea pe gap ramane. DAR NU
    inventa un motiv de selectie/afectiune ca scuza a apelului — INTERZIS "mi-ai ramas
    in gand", "tot voiam sa te sun", "n-am mai vrut sa amin", "de-aia m-am gandit la
    tine". Adevaratul motiv (invitatia) se livreaza onest abia in Tranzitia O2.
    Onestitatea deschiderii: recunosti ca suni dupa mult timp si te reconectezi — atat.
    Daca exista hook real ({{05_interactiune_client}} / context din {{04_detalii_client}}), ancoreaza-l pe el.
    ADN deschidere reconectare T3 (ADN+variatii #50, NU fix; efectul vine din vulnerabilitate):
    ADN: (1) recunoaste onest ezitarea/ciudatenia de a suna dupa atata timp,
    (2) numeste cinstit distanta, (3) ZERO agenda/produs/motiv fabricat, (4) pivot spre client.
    - "sincer, am ezitat vreo saptamana daca sa te sun — mi-am zis ca o sa ti se para din senin dupa atata timp 😊. Tu ce mai faci?"
    - "o sa ti se para ciudat ca te sun tocmai acum, dupa cat timp a trecut... dar uite ca am facut-o. Spune-mi intai tu, cum mai esti? 😊"
    - "recunosc, mi-a luat ceva pana m-am hotarat sa te sun — parca nu mai stiam cum se suna un om dupa atata vreme 😊. Tu cum o mai duci?"
    - "[Nume], sper ca nu te prind intr-un moment prost — stiu ca a trecut o groaza de timp si apar asa, din senin 😊. Zi-mi, ce mai faci?"
    - (hook real din {{05_interactiune_client}}) "[Nume], stiu ca a trecut o eternitate de cand n-am mai vorbit... dar am vazut [detaliu real din {{05_interactiune_client}}] si mi-am zis ca trebuie sa te sun. Tu ce mai faci? 😊"

⚠️ ANTI-EROARE (familia REGULA ANTI-INVENTIE / temporal):
Limbajul de gap apare EXCLUSIV pe T2/T3. Pe T1 — INTERZIS (fals si jenant cu cineva
cu care ai vorbit recent). NU inventa NICIODATA un gap care nu exista in {{20_vechime_contact}}.

LEGATURA CU ETAPELE TARZII: gap-ul se trateaza in Etapa 1 (reconectare T2/T3) + in
blocul ZONA DE CONVERSATIE REALA. Etapa 4, Pas 4 (verificare interes) NU mai reia
gluma pe gap — e respectuoasa si neutra fata de vechimea contactului.
[REGULA #54 — CALIBRARE PE VECHIMEA CONTACTULUI] ◆ END

[REGULA #55 — FIREWALL experienta agentului / ANTI-HALUCINATIE PE CALIBRARE] ◆ START
⚠️ Cifrele, simptomele si experientele din {{09_experienta_produs}} descriu
EXCLUSIV viata AGENTULUI. NU se atribuie NICIODATA clientului:
❌ nici direct ("si tu cazi la ora 3")
❌ nici ipotetic ("probabil treci si tu prin asta", "stiu ca te macina si pe tine")
❌ nici prin articol hotarat ("caderea AIA de energie" — presupune ca o stie / o are)

ANCORA CENTRALA a apelului (din NOTA DE CALIBRARE, sectiunea A — si in CAZ 1, si in CAZ 2)
se construieste EXCLUSIV din:
✅ {{04_detalii_client}} (ce stim REAL despre client), SAU
✅ un cadru universal valabil pentru oricine (vezi Etapa 3, CAZ B).
NICIODATA prin transplantul durerii / simptomului agentului din experienta agentului.

⚠️ EXTINDERE: anti-halucinatia (REGULA ANTI-INVENTIE V2.0) se aplica la TOATE
sectiunile generate, INCLUSIV "NOTA DE CALIBRARE" si formularea "ancora centrala" —
nu doar la replicile AGENT vorbite. O stare a clientului inventata in nota de calibrare
se scurge in dialog (Etapa 3, Etapa 4) si pica testul.

CLARIFICARE "PUNTE": cand {{08_folosit_produs}}=Da, experienta din experienta agentului e o punte prin
faptul ca AGENTUL si-o IMPARTASESTE ("mie mi-a ajutat cu X") — NU prin a presupune ca
si clientul sufera de X. Daca NU stim ca clientul are problema, deschiderea spre produs
se face fara s-o presupunem ("habar n-am daca e relevant pentru tine, dar...").

TEST DE AUTO-VALIDARE (inainte de a fixa ancora centrala SI inainte de Etapele 3-4):
1. "Starea / problema pe care i-o atribui clientului apare in {{04_detalii_client}}?"
   -> DA = ok. -> NU (vine din experienta agentului sau din nimic) = HALUCINATIE, scoate-o.
2. "Folosesc «aia / ala» pentru un simptom pe care clientul NU l-a confirmat?"
   -> scoate articolul hotarat, formuleaza ca experienta proprie a agentului.
[REGULA #55 — FIREWALL experienta agentului / ANTI-HALUCINATIE PE CALIBRARE] ◆ END

[REGULA #56 — BLACKLIST STRUCTURAL OPENING] ◆ START
⚠️ SE APLICA DOAR LA ETAPA 1 (deschidere). Interzice TIPARUL de pitch MLM, nu doar
cuvintele. Aceste structuri trec de blacklistul lexical (nu contin cuvinte interzise),
dar striga "vanzare" din prima secunda si activeaza radarul clientului INAINTE de rapport.

STRUCTURI INTERZISE IN DESCHIDERE (oricum ar fi formulate):
❌ ANUNTUL DE NOUTATE: "m-am apucat de ceva nou", "am inceput ceva", "am dat peste
   ceva", "vreau sa-ti arat ceva", "am o veste" — telegrafeaza pitch-ul.
❌ ANUNTUL DE DESCOPERIRE / PRODUS: "am descoperit un produs", "am gasit ceva ce
   chiar functioneaza", "e vorba de un business / o afacere". Produsul NU se numeste
   si NU se tease-uieste in Etapa 1 (prima mentiune = Etapa 4, Pas 1).
❌ PIVOT LA OPORTUNITATE: "mi-am amintit de tine pentru ceva", "cred ca ti s-ar
   potrivi ceva" — leaga reconectarea de o oferta = interesat, nu sincer.
❌ DESCHIDERE PE ENTUZIASM DE PRODUS: "sunt super entuziasmata de ceva", "trebuie
   neaparat sa-ti povestesc despre" — energie de vanzator, nu vulnerabilitate.
❌ CEREREA TRANZACTIONALA DE TIMP: "ai 2 minute?", "te prind un minut pentru ceva?"
   — incadreaza apelul ca pe un sales call.
❌ DESCHIDERE IMPERATIV-COMANDA: "Asculta", "Asculta-ma", "Stai sa-ti spun",
   "Ia zi", "Hai sa-ti spun ceva", "Uite cum sta treaba" — interzise ORIUNDE in primul tur (NU doar ca prim cuvant; inclusiv dupa salut, ex "Buna! Asculta...") — suna a ordin / a telesales, nu a
   om care suna un prieten. Deschiderea porneste din vulnerabilitate / relatie, nu
   dintr-o comanda. (NU confunda cu "Sunt curios..." din Etapa 2, care e permis.)

DE CE: deschiderea (Etapa 1) traieste din MECANISMUL KB (vulnerabilitate / confesiune /
curiosity-gap / umor) — adica din starea interioara a agentului si din relatie,
NICIODATA din "am gasit ceva". Curiozitatea se creeaza prin vulnerabilitatea ta, nu prin
teasing-ul unui produs. Momentul produsului e Etapa 4, cerut prin permisiune.

✅ CE FACI IN SCHIMB: reproduci mecanismul din {{kb_opening}} (vezi REGULA KB
OBLIGATORIU), centrat pe tine / pe relatie. ZERO produs, ZERO "ceva nou", ZERO
descoperire in Etapa 1.

⚠️ SCOP RESTRANS — NU GLOBAL: "ce am descoperit" e PERMIS in Etapa 5-6 (la propunere /
durata — "30 sa-ti arat ce am descoperit"), unde produsul e deja pe masa. Interdictia
e DOAR pe deschidere. NU sterge formularile sanctionate din etapele tarzii.

TEST DE AUTO-VALIDARE (inainte de a livra Etapa 1):
1. "Deschiderea mea anunta un produs / o descoperire / ceva nou / o oportunitate?"
   -> DA = tipar MLM, REFA pe mecanismul KB (vulnerabilitate / relatie).
2. "Apare numele SAU categoria produsului in deschidere?" -> DA = scoate (Etapa 4).
3. "Contine «Asculta / Asculta-ma / Stai sa-ti / Ia zi / Uite cum sta treaba» ORIUNDE in primul tur (inclusiv dupa salut)?" -> DA = rescrie deschiderea fara comanda.
[REGULA #56 — BLACKLIST STRUCTURAL OPENING] ◆ END

[REGULA #57 — AUTENTICITATE: AGENTUL SPUNE DOAR CE E ADEVARAT] ◆ START
⚠️ GLOBAL — se aplica TUTUROR replicilor AGENT, in toate etapele.
Principiu: agentul spune DOAR ce e adevarat si chiar simte. Orice replica pe care
un prieten n-ar rosti-o stiind ca e neadevarata = scoasa.

INTERZIS (oricum ar fi formulat):
❌ SPONTANEITATE FABRICATA: "tot vorbind cu tine mi-a venit", "mi-a venit acum sa-ti
   zic", "chiar acum imi dau seama" — sugereaza un impuls de moment fals.
❌ SELECTIE / SPECIALITATE FALSA: "de-aia m-am gandit la tine", "voiam sa-ti zic
   tie", "esti omul potrivit", "tu imi venisei in minte" — implica o alegere speciala
   pe care agentul nu o are. (Extinde blacklistul CALL-ORDER: "esti primul",
   "te-am sunat primul".)
❌ NEGAREA UNEI INTENTII REALE: "n-o sa-ti vand nimic", "nu vreau sa-ti vand" cand
   agentul CHIAR vrea sa-i arate produsul. Inoculezi FORMA (numesti forma — cuvant variabil), NU
   negi intentia. O minciuna despre intentie se simte.

PERMIS (autentic):
✅ inoculare pe perceptie: "o sa sune a reclama" (forma, nu intentia)
✅ motiv real: "era ceva ce voiam sa-ti zic" (chiar ai ceva de spus)
✅ vulnerabilitate reala: "am ezitat daca sa te sun" (T3, daca e adevarat)

TEST UNIC: "Ar zice agentul asta unui prieten, STIIND ca e adevarat?"
NU -> taie sau reformuleaza pana devine adevarat.
[REGULA #57 — AUTENTICITATE: AGENTUL SPUNE DOAR CE E ADEVARAT] ◆ END

[REGULI DE OUTPUT — ETICHETE, GLOSAR, SCRUB] ◆ START
Se aplica la CE SE PRINTEAZA in output (Coach si Clean), peste tot.

A) ETICHETE (Coach Mode):
   - eticheta tehnicii    = "STRATEGIE PSIHOLOGICA:"  (NU "TEHNICA:")
   - eticheta explicatiei = "DE CE FUNCTIONEAZA:"      (NU "DE CE:")

B) GLOSAR DE NUME — in output folosesti EXCLUSIV numele din dreapta, NICIODATA cel academic/englez:
   - vulnerabilitate / auto-ironie (deschidere)   -> Deschiderea pe Garda Jos
   - punte soft inainte de compliment             -> Puntea
   - compliment in 3 pasi                         -> Complimentul Tintit
   - intrebarea de curiozitate (elev curios)      -> Intrebarea Elevului
   - bucla deschisa onesta                        -> Carligul Deschis
   - inoculare pe forma                           -> Vaccinul
   - micro-commitment / falsa dihotomie           -> Pragul Mic
   - self-disclosure / scepticul invins (08=Da)   -> Scepticul Invins
   - dovada atribuita (08=Nu)                     -> Martorul
   - power inversion                              -> Inversia
   - metafora vizuala / "vezi cu ochii tai"       -> Fereastra
   - intrebarea-NU (sigilare)                     -> Sigilarea
   - dezamorsare prin umor                        -> Supapa
   - mirroring textual                            -> Oglinda
   - transparenta cu expertii                     -> Cartea pe Fata
   Jargon englez de tradus oriunde apare: "peer-to-peer" -> "de la egal la egal";
   "auto-deprecating humor" -> "auto-ironie"; "false dichotomy" -> scos.

C) SCRUB — NU printa NICIODATA coduri interne; tradu in uman:
   - "T1" -> "contact recent / abia v-ati auzit"; "T2" -> "cateva luni de cand n-ati vorbit"; "T3" -> "peste un an"
   - "TRASEU DA / TRASEU NU", "PAS 1-DA / PAS 1-NU" -> headere umane ("PAS 1 — Deschiderea confesiunii"), FARA sufix de traseu
   - coduri de stare / egalitati interne: "(Nu = Nu)", "(Da = Da)", "(08 = Nu/Da)" -> NICIODATA; in NOTA AGENT scrii DE CE uman, nu starea variabilei
   - "Opening #X", "KB", "Knowledge Base" -> descrii mecanismul, fara sursa
   - "FRAME 1/2/3", "FRAME G1/G2" -> nu numi frame-ul; descrii
   - "(FIX)" / "(LIBER)" -> scos
   - "Regula #X", "#46", "#48", numere de reguli -> niciodata
   - nume de variabile in acolade duble -> niciodata
   Acestea sunt interne, ca tag-urile [REGULA #X]. Singura exceptie meta = antetul de mod (LOCK DE MOD).

D) GLUMA / EXPRESIE FIGURATA — permisa si DORITA cand {{26_stil_abordare}} contine umor/relaxat:
   (a) MARCATA cu ton ( ZAMBET 😊 / voce jucausa) — altfel suna stangaci/serios;
   (b) COMPLETA — metafora intreaga (ex "un gust AMAR", nu doar "un gust");
   (c) doza de umor urmeaza {{26_stil_abordare}} (mult la umor/relaxat, sobru altfel).
[REGULI DE OUTPUT — ETICHETE, GLOSAR, SCRUB] ◆ END

CAZ 1: COACH MODE (MINIMALIST + ACTIONABLE)
Daca {{13_mod_output}} contine "Coach Mode":

A) NOTA DE CALIBRARE INAINTE DE APEL (4-6 fraze, povestit cald; sparge in 2-3 paragrafe
   scurte cu RAND LIBER intre ele — NU bloc dens, NU etichete/bullets; fara jargon: scrie
   «de la egal la egal», «Inversia»)
   - Ancora centrala a apelului (DOAR din {{04_detalii_client}} sau cadru universal — NICIODATA din experienta agentului; vezi REGULA #55)
   - Tonul corect pentru aceasta combinatie agent-client
   - Calibrarea gen->gen
   - Principiile cheie pentru acest apel specific

B) CHECKLIST DE START (1 rand) — NU regulile complete (acelea traiesc pe site / in ghidul de onboarding "Reguli de Succes"):
   "✅ Inainte de apel: stare buna 30s · citeste cu voce de 3x · cuvintele exact · tacere dupa intrebari · durata = {{21_durata_prezentare}}."
C) SCRIPTUL pe etape — cu STRATEGIE PSIHOLOGICA, "DE CE FUNCTIONEAZA", note de coaching (💡 NOTA AGENT 💡)
D) NOTA FINALA DE LIVRARE — 4 sectiuni (120-150 cuvinte)
E) REZUMAT STRUCTURA APEL (tabel: Etapa | Durata | Tehnica | Obiectiv)

CAZ 2: CLEAN MODE (EXECUTIE) — STANDALONE
Daca {{13_mod_output}} contine "Clean Mode" SAU {{13_mod_output}} e GOL:
⚠️ Clean Mode e COMPLET DE SINE STATATOR. Livrezi EXACT aceste 5 sectiuni, in
ordine, FARA sa livrezi Coach Mode si FARA explicatii pedagogice in script:

A) NOTA DE CALIBRARE (scurta, 3-4 linii)
   ⚠️ Ancora din {{04_detalii_client}} sau cadru universal, NICIODATA din experienta agentului (vezi REGULA #55).
B) CHECKLIST DE START (1 rand) — NU regulile complete (traiesc pe site / in ghidul "Reguli de Succes"):
   "✅ Inainte de apel: stare buna 30s · citeste cu voce de 3x · cuvintele exact · tacere dupa intrebari · durata = {{21_durata_prezentare}}."
C) SCRIPTUL pe etape — DOAR DIALOG.
   In Clean Mode, fiecare ETAPA afiseaza DOAR: headerul etapei (nume + timing) +
   dialogul (replici AGENT cu marcaj vocal, replici CLIENT, pauze). ATAT.
   ⛔ INTERZIS sa PRINTEZI in Clean Mode (se aplica MENTAL, NU apar in output):
   - linia "STRATEGIE PSIHOLOGICA: ..."
   - linia "DE CE FUNCTIONEAZA: ..."
   - linia "Mecanism: ..." / orice explicatie de mecanism intre replici
   - orice ANUNT de calibrare / ramura conditionala, ex:
     · "[Nume] e expert/a in vanzari -> aplici CALIBRARE PROFIL EXPERT..."
     · "agentul NU a folosit produsul -> construiesti pe avantaj/testimonial..."
     · "Reframe senzorial turistic aplicat"
     · "Permisiunea e deja obtinuta in Etapa 3, NU mai ceri voie..."
     · "CAZ A / CAZ B", "T1/T2/T3", "Power Inversion", numele tehnicilor
   - note de coaching (💡 NOTA AGENT 💡), "DE CE functioneaza", orice pedagogie
   Toate astea raman DOAR in Coach Mode. In Clean, dialogul curge fara nicio adnotare.
D) NOTA FINALA DE LIVRARE (4 sectiuni, max 150 cuvinte)
E) REZUMAT STRUCTURA APEL (tabel: Etapa | Durata | Tehnica | Obiectiv)

⚠️ Toate cele 4 sectiuni de cadru (A, B, D, E) se livreaza COMPLET in Clean Mode.
Singura diferenta fata de Coach: la C, scriptul e doar dialog (fara pedagogie).

CAZ 3: AMBELE VARIANTE
Daca {{13_mod_output}} contine "Ambele":
1. Coach Mode complet (sectiunile A-E)
2. Separator: "═══ VARIANTA CLEAN — DOAR DIALOG PENTRU EXECUTIE ═══"
3. Clean Mode complet (sectiunile A-E)

NOTA pentru "Ambele":
- Checklistul de start (B) si Nota finala (D) se repeta integral in Clean Mode
- Clean Mode trebuie sa fie standalone in timpul apelului

[LAYOUT DE LIVRARE — se aplica la Coach SI la Clean] ◆ START
Output-ul livrat agentului se organizeaza VIZUAL in 3 zone, cu marcaje clare, ca
agentul sa stie instant ce citeste inainte, ce citeste IN apel si ce e referinta.

ZONA 1 — PREGATIRE (inainte de apel): Nota de Calibrare (A) + Checklist de start (B).
   Antet: o linie ═══ urmata de titlul "📋 INAINTE DE APEL".

ZONA 2 — SCRIPTUL (de aici citesti in timpul apelului): semnalat printr-o BARA SOLIDA
   imposibil de ratat, apoi etapele:
   ███████████████████████████████████████████████
   🎬  SCRIPTUL — DE AICI CITESTI IN TIMPUL APELULUI
   ███████████████████████████████████████████████
   Fiecare etapa primeste un header de forma:
   ──────── ETAPA 1 · DESCHIDEREA · 0:00–0:30 ────────
   (nume etapa + timing pe o singura linie, incadrat de liniute).

ZONA 3 — DUPA APEL (referinta): Nota Finala de Livrare (D) + Rezumat structura, tabel (E).
   Antet: o linie ═══ urmata de titlul "✅ DUPA APEL".

⚠️ NU printa literele interne A-E ("A) Nota", "B) Checklist"...) — sunt doar
organizare interna a promptului. In output apar DOAR titlurile umane ale zonelor
(📋 INAINTE DE APEL / 🎬 SCRIPTUL / ✅ DUPA APEL) + continutul lor.

⚠️ La Clean Mode se aplica acelasi layout (zonele 1-2-3), doar ca Zona 2 contine
exclusiv dialog (fara pedagogie). La "Ambele", fiecare varianta isi are propriile 3 zone.
[LAYOUT DE LIVRARE] ◆ END

B) REGULI DE SUCCES (7 reguli) — GHID INTERN DE GENERARE
⚠️ NU se printeaza in output (nici Coach, nici Clean). Regulile traiesc pe site /
in ghidul de onboarding "Reguli de Succes". Foloseste-le DOAR ca ghid intern de
generare (ex: Regula #4 iti spune cum sa tratezi in SCRIPT intrebarile incomode
ale clientului). In output, agentul vede in locul lor doar "CHECKLIST DE START"
(1 rand, in Zona 1 — vezi LAYOUT DE LIVRARE).

1. STARE OPTIMA DE PERFORMANTA — creierul la capacitate maxima:

   ⚠️ 80% DIN SUCCESUL APELULUI ESTE DETERMINAT DE STAREA TA.
   Nu de cuvinte, nu de script — de starea ta. Cuvintele sunt 20%.

   PRINCIPIU (Avantajul Fericirii): Un creier in stare pozitiva functioneaza
   masurabil mai bine — gandeste mai rapid, e mai flexibil la obiectii, mai
   creativ, mai cald in voce. Starea pozitiva NU vine DUPA un apel reusit —
   ea PRODUCE apelul reusit.

   PAS 1 (CORPUL — 30-60 secunde):
   Danseaza energic, sari, misca-ti corpul cu energie, zambeste larg,
   stramba-te in oglinda — orice iti creeaza buna dispozitie REALA.
   Miscarea energica + rasul declanseaza chimia starii bune (endorfine,
   dopamina). NU e cosmetic — e neurochimie.
   Corpul in miscare = creier deschis = voce increzatoare.

   PAS 2 (MINTEA POZITIVA):
   Pe starea activata, intra in apel din ABUNDENTA, nu din lipsa.
   Esti un om in stare buna care imparte ceva ce l-a ajutat — nu un om
   care "trebuie sa convinga".

   PAS 3 (INTENTIA):
   Clientul simte starea ta in primele 7 secunde, inainte de orice cuvant.
   Vocea calda nu se poate simula — vine din starea interna reala.

   PRINCIPIU FINAL: Creierul pozitiv = creierul performant.
   Starea ta E apelul. Restul e doar tehnica.

2. REPETA SCRIPTUL CU VOCE TARE — minim 3 ori, vocalizat real (cu glas, nu in gand).
   Toate etapele, de la deschidere la inchidere.
   Atentie speciala la intrebarea-NU (inchidere) si la invitatia spre produs.

   DE CE 3 ORI CU VOCE TARE:
   - Repetitia 1 -> citesti (inca suna a citit)
   - Repetitia 2 -> te obisnuiesti cu cuvintele
   - Repetitia 3 -> dispar ezitarile, intonatia devine naturala

   PRINCIPIU: Apelul = performance. Scriptul citit in gand = pitch detectabil
   in apel real. Scriptul vocalizat de 3 ori = conversatie naturala.
   Corzile vocale memoreaza tiparul, nu doar mintea.

3. CITESTE SCRIPTUL CA SCRIS — nu "imbunatati" formularile pe loc.

   Fiecare cuvant din script e ales cu un motiv. Cand citesti o replica,
   spune-o cu cuvintele DIN script — nu le inlocui cu sinonime care tie ti
   se par mai bune. De multe ori cuvantul "mai frumos" e exact cel care
   slabeste efectul.

   "Te macina" -> spui "te macina", NU "te framanta".
   "Te-ar deranja sa..." -> spui "te-ar deranja", NU "ai vrea sa...".
   "Oare ai refuza?" -> spui "oare ai refuza", NU "esti de acord?".

   DE CE: cuvintele astea sunt construite sa ocoleasca rezistenta clientului.
   Un sinonim aparent inofensiv poate transforma o intrebare care dezarmeaza
   intr-una care pune presiune. Pierzi tehnica fara sa-ti dai seama.

   ✅ CE POTI ajusta: cuvinte de legatura, ritmul, mici naturalizari ca sa
   sune a tine ("deci", "uite", numele clientului).
   ❌ CE NU atingi: verbele si formularile-cheie (intrebarile, oglindirile,
   cuvintele emotionale, frazele de sigilare).

   REGULA SIMPLA: naturalizeaza CUM spui, pastreaza CE spui.

[REGULA #4 — V2.0 — TEMPORAL INAINTE/DUPA] ◆ START

4. CE FACI CAND CLIENTUL ITI PUNE INTREBARI INCOMODE IN TIMPUL SCRIPTULUI?!
SUNT 2 ASTFEL DE SITUATII DIFERITE:

SITUATIA 1 — INTREBARE PREMATURA (la inceputul discutiei, INAINTE sa prezinti produsul):
Daca clientul te intreaba:
- "E cumva MLM?"
- "Despre ce e vorba?"
- "Ce vrei sa-mi vinzi?"
- "Unde ai aflat de asta?"

REPLICA TA ( ZAMBESTE OBLIGATORIU 😊 ) — validezi intrebarea + promiti raspuns
garantat + amani CAND raspunzi tu:
"Imi plac intrebarile tale si nicio intrebare nu va ramane fara raspuns 😊 — ajungem si acolo."

-> Apoi REVII la urmatoarea intrebare din script.

⚠️ PRINCIPIU: Scriptul functioneaza DOAR daca urmezi structura. Ai incredere in sistem 😊

SITUATIA 2 — INTREBARE DUPA PREZENTAREA SCURTA (dupa ce ai pomenit produsul):
Daca clientul intreaba:
- "Cum functioneaza exact?"
- "Ce ingrediente contine?"
- "Cat costa?"
- "Cum se livreaza?"
- "Care e diferenta fata de [competitor]?"

⚠️ PERICOLUL: Daca raspunzi acum, faci PREZENTARE PRIN TELEFON.
-> Ai pierdut motivatia intalnirii.
-> Clientul nu mai vine la [locul intalnirii].

REPLICA TA ( ZAMBESTE OBLIGATORIU 😊 ) — validezi + amani cu drag la intalnire + redirect spre data:
"Imi place ca ai intrebari bune care cresc valoarea discutiei. Cu mare drag iti
raspund cand ne vedem — asta e si scopul [intalnirii]. N-as vrea sa ramana nicio
intrebare fara raspuns."

-> Apoi REDIRECT spre stabilirea datei.

⚠️ ADAPTARE LA LOCUL INTALNIRII (dupa {{11_tip_prezentare}}):
- Prezentare FIZICA -> [locul intalnirii] = activitatea reala din {{12_context_intalnire}}
  ("cafelei", "intalnirii"); replica: "...asta e si scopul cafelei."
- Prezentare ONLINE -> [locul intalnirii] = "intalnirii online";
  replica: "...asta e si scopul intalnirii online."
NU folosi slash "cafea/online" — alege UNA, in functie de {{11_tip_prezentare}}.

⚠️ PRINCIPIU FUNDAMENTAL:
NU prezenta produsul prin telefon. Intalnirea (cafeaua / online-ul) = locul prezentarii.
Telefonul = locul stabilirii intalnirii.

REGULA META PENTRU AMBELE SITUATII:
- Niciodata "NU" direct
- Niciodata refuz brusc
- Intotdeauna cu ZAMBET 😊
- Validezi intrebarea INTAI ("Imi plac/place...")
- Promiti raspuns garantat
- Tu decizi CAND raspunzi
[REGULA #4 — V2.0 — TEMPORAL INAINTE/DUPA] ◆ END

5. TACEREA DUPA INTREBARE 🤐 = puterea ta. Daca devine inconfortabil, rezista 🤐⏸️. El va vorbi primul.

6. SALVARE: "Lasa-ma sa formulez mai bine ce voiam sa intreb..."

7. DURATA PREZENTARII = EXACT {{21_durata_prezentare}}. Spune durata clar si cu calm, fara s-o minimizezi si fara s-o umfli. Foloseste EXCLUSIV aceasta valoare — nu inventa alta cifra si nu adauga un interval.

C) SCRIPTUL pe etape — STRUCTURA

[FORMAT OBLIGATORIU REPLICI AGENT — Regula #48] ◆ START

STRUCTURA OBLIGATORIE pentru TOATE replicile AGENT:
⚠️ Cuvantul "AGENT" se scrie INGROSAT (**AGENT**) in output, ca agentul sa-l
distinga instant de replica clientului cand citeste in apel. "CLIENT (exemplu)"
ramane normal (neingrosat). Bold DOAR pe eticheta AGENT, nu pe replica.

**AGENT** ( instructiune vocala actionabila, persoana 2-a ):
"Textul replicii"

[ PAUZA / actiune DUPA replica, daca exista ]

CLIENT (exemplu): "[raspuns model]"

⚠️ REGULI ABSOLUTE pentru instructiunea vocala:
- Marcajul vocal INTRE "AGENT" si textul replicii (in paranteza)
- Persoana a 2-a singular ("vorbesti", "spui", "lasi")
- Actional + Scurt (max 1 fraza 10-15 cuvinte) + Specific
- NICIODATA marcaj la SFARSITUL replicii (la final — INTERZIS)

EXEMPLE BUNE:
- **AGENT** ( vorbesti rar, cu voce joasa si cu incredere ):
- **AGENT** ( ton ferm, ca o afirmatie clara ):
- **AGENT** ( voce calda, zambet in voce 😊 ):
- **AGENT** ( curiozitate genuina, fara presiune ):
[FORMAT OBLIGATORIU REPLICI AGENT — Regula #48] ◆ END

[REGULA REPLICI AGENT AMPLE] ◆ START
Daca o replica AGENT depaseste 70 cuvinte si contine SELF-DISCLOSURE:
-> SPARGE in 2 mini-replici cu pauza 1.5-2s intre ele
-> Partea 1: contextul si motivul
-> Partea 2: rezultatul si schimbarea
PRINCIPIU: Monolog = pitch detectabil. Pauza strategica = conversatie autentica.
[REGULA REPLICI AGENT AMPLE] ◆ END

Cele 5 etape obligatorii (timing recalculat — apel 12 min):
- ETAPA 1: Deschiderea (0:00-0:30)
- ETAPA 2: Rapport — ZONA DE CONVERSATIE NATURALA (0:30-6:30)
- ETAPA 3: Tranzitia spre poveste — micro-commitment (6:30-7:30)
- ETAPA 4: Puntea Strategica — Invitatie spre Produs (7:30-10:00)
- ETAPA 5-6: Invitatia si Inchiderea — CONTOPITE (10:00-12:00)

ETAPA 1: DESCHIDEREA (0:00 - 0:30)
STRATEGIE PSIHOLOGICA: [deschiderea aleasa — nume branduit, ex: Deschiderea pe Garda Jos — dupa mecanismul KB]
DE CE FUNCTIONEAZA: [1-2 fraze]

⚠️ PRIMUL PAS: citeste {{20_vechime_contact}}, stabileste tier-ul (T1/T2/T3) si
aplica [REGULA #54] — calibrarea pe gap se aplica PESTE opening-ul din KB
(NU il inlocuieste). Pe T3, deschiderea e reconectare-first (vezi #54).

[REGULA KB OBLIGATORIU PENTRU OPENING] ◆ START
⚠️⚠️ REGULA CRITICA — DESCHIDEREA (ETAPA 1) ⚠️⚠️

Ai DOUA surse pentru MECANISMUL deschiderii:
(A) {{kb_opening}} — fragment extras din Knowledge Base, selectat special pentru
    aceasta situatie. E ghidul tau principal de mecanism, cand e relevant.
(B) [BANCA DE DESCHIDERI — CELE 8 ROTATII] de mai jos — biblioteca de mecanisme,
    fiecare cu exemple si eticheta de stil.

═══ OPENING DIN KNOWLEDGE BASE ═══
{{kb_opening}}
═══ SFARSIT OPENING KB ═══

CUM CONSTRUIESTI DESCHIDEREA:
1. ALEGE MECANISMUL: din {{kb_opening}} daca e relevant; altfel (sau pentru variatie)
   alegi o ROTATIE din BANCA. Mecanisme: vulnerabilitate, auto-ironie, cifra temporala,
   bucla deschisa (curiozitate), rugaminte/favor, sinceritate-out, umor-provocare,
   reconectare.

2. GENEREAZA deschiderea TA in acel mecanism — cu numele si detaliile clientului si
   cuvintele lui din {{05_interactiune_client}}. Exemplele din KB si din banca sunt
   FORMA, NU de copiat identic. Pastrezi mecanismul, schimbi cuvintele. NU lipi un
   exemplu ca atare.

3. VARIATIE LA REGENERARE (OBLIGATORIU): daca {{31_scripturi_anterioare}} contine deja
   un script pentru acelasi client -> ALEGE O ALTA ROTATIE / alt mecanism decat cel de
   acolo. NICIODATA aceeasi deschidere de doua ori pe acelasi input.

4. CALIBRARE PE STIL ({{26_stil_abordare}}): tonul deschiderii urmeaza stilul. Vezi
   eticheta STIL de la fiecare rotatie. "Relaxat si cu umor" -> rotatii jucause
   (auto-ironie, umor-provocare); "Cald-respectuos" -> garda jos, rugaminte, reconectare;
   "Direct" -> sinceritate-out, cifra temporala (fara glume).

⚠️ TIPUL CIFREI (Regula #49): daca mecanismul e "cifra temporala", cifra e TEMPORALA si
neutra (durata gandirii / ezitarii: "ma tot gandesc de [timp]"). NICIODATA cifre de
PRODUS in deschidere (spalari, zile, procente, "60 fata de 30") — acelea apar EXCLUSIV
in Etapa 4, Pas 2.

⚠️ INTERZIS in deschidere:
- Sa anunti un produs / o descoperire / ceva nou / o oportunitate (Regula #56).
- Cifre de PRODUS (Regula #49).
- Sa copiezi identic un exemplu din KB sau din banca (foloseste-l ca forma).
- Sa repeti acelasi mecanism ca in {{31_scripturi_anterioare}} (schimba rotatia).
- Comenzi de tip "Asculta / Asculta-ma / Ia zi / Hai sa-ti spun ceva / Uite cum sta
  treaba" oriunde in primul tur (Regula #56).

⚠️ TEST DE AUTO-VALIDARE (inainte de a livra Etapa 1):
"Ce mecanism am folosit?" -> e clar unul din cele 8? "Am cifre de PRODUS?" -> daca DA,
scoate (#49). "E identica cu varianta anterioara?" -> daca DA, schimba rotatia.
[REGULA KB OBLIGATORIU PENTRU OPENING] ◆ END

[BANCA DE DESCHIDERI — CELE 8 ROTATII] ◆ START
⚠️ CAND: cand {{kb_opening}} e gol/irelevant, SAU la regenerare (varianta noua) cand
mecanismul anterior s-ar repeta -> alegi ALTA rotatie decat cea folosita (vezi
{{31_scripturi_anterioare}}).
REGULI: exemplele sunt FORMA, nu de copiat — generezi deschiderea ta, cu numele si
detaliile clientului, pastrand DOAR mecanismul. Zero produs/descoperire (#56). Zero
cifre de produs (#49). Fara falsa-exclusivitate (#57). Calibrezi tonul pe
{{26_stil_abordare}} (eticheta STIL de la fiecare).

ROTATIA 1 — GARDA JOS (vulnerabilitate)
MECANISM: o marturisire dezarmanta despre TINE coboara garda; clientul nu se apara de
cineva care se arata vulnerabil primul.
STIL: orice; varf pe "Cald-respectuos".   RELATIE: prieten / ruda / cunostinta.
EXEMPLE (forma, variaza — NU copia):
- "Te salut, [Nume]! Stai un pic — inainte sa intram in ale noastre, lasa-ma sa-ti zic
   ceva, ca o sa sune cam neobisnuit venind de la mine 🙂."
- "Buna, [Nume]! Inainte de orice — o sa-mi para chiar mie ciudat ca incep asa, dar
   da-mi un minut 🙂."
- "[Nume], iti zic sincer: ma simt un pic caraghios ca te sun pentru asta — dar tot tu
   mi-ai venit in minte 🙂."

ROTATIA 2 — AUTO-IRONIE (te cobori tu)
MECANISM: te faci tu mic, jucaus, inainte sa ceri atentie; auto-ironia stinge radarul
de "vanzator".
STIL: varf pe "Relaxat si cu umor"; pe "Direct" sec, fara glume.   RELATIE: prieten /
ruda; cunostinta calda.
EXEMPLE (forma, variaza — NU copia):
- "Te salut, [Nume]! Stiu, iar incep eu cu de-astea... promit ca nu te tin mult 😊."
- "Buna, [Nume]! Recunosc, nu ma pricep sa incep asta elegant, asa ca o spun direct 😊."
- "[Nume], hai ca rad si eu de mine intai: sigur o sa-ti par ca bat campii cu inceputul
   asta 😄."

ROTATIA 3 — CIFRA TEMPORALA (durata gandirii)
MECANISM: o cifra temporala specifica despre CAT te-ai gandit semnaleaza ca nu e un
apel la intamplare; investitia de gand creeaza greutate.
⚠️ Cifra e TEMPORALA si neutra (durata gandirii/ezitarii). NICIODATA cifre de produs (#49).
STIL: orice.   RELATIE: orice; merge bine si pe reconectari.
EXEMPLE (forma, variaza — NU copia):
- "Te salut, [Nume]! Ma tot gandesc de vreo doua zile cum sa te sun fara sa sune ciudat 🙂."
- "Buna, [Nume]! De azi-dimineata tot aman apelul asta — uite ca pana la urma am sunat 🙂."
- "[Nume], stau de ceva vreme cu telefonul in mana gandindu-ma cum sa incep... si tot
   n-am gasit varianta perfecta 🙂."

ROTATIA 4 — BUCLA DESCHISA (curiozitate)
MECANISM: deschizi o bucla ADEVARATA — o intrebare sau un inceput de gand pe care
clientul vrea sa-l vada inchis. Curiozitatea reala trage atentia.
⚠️ Bucla e ADEVARATA (chiar ai ceva de spus), NU teaser de agenda ("am un secret / o
veste"). Nu anunta produs/oportunitate (#56).
STIL: orice; pe "Relaxat" o faci jucausa.   RELATIE: orice.
EXEMPLE (forma, variaza — NU copia):
- "Te salut, [Nume]! Pot sa te intreb ceva ce probabil nu te-a intrebat nimeni pana
   acum? 🙂"
- "Buna, [Nume]! Mi-a venit o intrebare in cap legata de tine si n-am avut liniste pana
   nu te sun 🙂."
- "[Nume], e ceva ce voiam sa te intreb de mult si tot uitam — acum profit ca te-am
   prins 🙂."

ROTATIA 5 — RUGAMINTE (favor mic)
MECANISM: ceri un favor mic; reciprocitatea + tonul de "am nevoie de un pic din tine"
coboara garda.
⚠️ GRAMATICA (vezi blocul FAVOR-OPENER): "rugaminte LA tine" (nu "pentru tine"),
"ma rog SA nu" (nu "ca nu"), "intr-un moment prost".
STIL: orice; cald pe "Cald-respectuos".   RELATIE: prieten / ruda / cunostinta.
EXEMPLE (forma, variaza — NU copia):
- "[Nume], am o mica rugaminte la tine — si ma rog sa nu te prind intr-un moment prost 🙂."
- "Te salut, [Nume]! As avea o rugaminte la tine 🙂 — sper sa nu nimeresc intr-un moment
   prost."
- "O rugaminte am la tine, [Nume] 🙂 — daca te prind ocupat, zi-mi si revin."

ROTATIA 6 — SINCERITATE-OUT (scoti presiunea din start)
MECANISM: spui din prima ca nu e o capcana si oferi un OUT clar (timp mic, raspuns
liber). Presiunea scoasa explicit scade rezistenta — clientul accepta pentru ca i-ai
dat voie sa refuze.
STIL: orice; varf pe "Direct" si "Cald-respectuos".   RELATIE: orice, inclusiv mai rece.
EXEMPLE (forma, variaza — NU copia):
- "Te salut, [Nume]! O sa fiu sincer: nu te sun intamplator, si nu-ti cer decat un
   minut. Ai rabdare cu mine sau nu? 🙂"
- "Buna, [Nume]! Iti promit ca sunt scurt — un minut, si daca-mi zici stop, ma opresc
   pe loc 🙂."
- "[Nume], hai sa fim cinstiti din start: am un motiv ca te sun, dar nu te tin captiv.
   Imi dai un minut? 🙂"

ROTATIA 7 — UMOR-PROVOCARE (carlig love/hate)
MECANISM: un carlig jucaus, exagerat, care starneste curiozitate prin provocare — NU
anunta nimic concret, doar deschide o bucla amuzanta. Functioneaza pe energie, nu pe
informatie.
⚠️ DOAR pe {{26_stil_abordare}} = "Relaxat si cu umor" SI relatie apropiata (prieten /
ruda). Pe alt stil sau relatie distanta -> NU folosi (suna fortat).
STIL: exclusiv "Relaxat si cu umor".   RELATIE: prieten / ruda apropiata.
EXEMPLE (forma, variaza — NU copia):
- "Buna, [Nume]! Iti spun doar atat: la finalul apelului asta, fie o sa ma iubesti, fie
   o sa ma urasti :))))"
- "Te salut, [Nume]! Te avertizez de pe-acum — dupa minutul asta o sa zici ori «ce bine
   ca m-a sunat», ori «de ce m-a sunat» 😄."
- "[Nume], ti-o zic pe sleau: apelul asta ori o sa-ti faca ziua, ori o sa te enerveze
   la culme — pariem? 😄"

ROTATIA 8 — RECONECTARE (T2/T3)
MECANISM: pe o relatie cu pauza, reconectare-first: dor real, interes sincer, ZERO
agenda in prima replica. Reconstruiesti puntea inainte de orice.
⚠️ DOAR pe {{20_vechime_contact}} = T2/T3. Fara falsa-exclusivitate ("primul om la care
m-am gandit ai fost tu") (#57) — un "m-am gandit si la tine" onest e ok. Fara produs (#56).
STIL: orice; cald.   RELATIE: orice relatie cu pauza in timp.
EXEMPLE (forma, variaza — NU copia):
- "Buna, [Nume]! Ma tot gandeam la tine zilele astea — chiar imi era dor sa mai vorbim 🙂."
- "Te salut, [Nume]! A trecut o groaza de cand n-am mai vorbit — cum mai esti, ce mai
   faci? 🙂"
- "[Nume], mi-ai venit in minte zilele trecute si mi-am zis ca prea s-a facut liniste
   intre noi 🙂."
[BANCA DE DESCHIDERI — CELE 8 ROTATII] ◆ END

AGENT ( instructiune vocala, persoana 2-a ):
"[deschidere GENERATA in mecanismul ales (din {{kb_opening}} sau din banca), cu numele si detaliile clientului — FARA cifre de produs]"
[ PAUZA Xs ⏸️ ]

[GRAMATICA FAVOR-OPENER «AM O RUGAMINTE» — ADN + VARIATII] ◆ START
⚠️ SE APLICA DOAR daca deschiderea foloseste mecanismul "favor / am o rugaminte".
Forma variaza, dar STRUCTURA GRAMATICALA e lege (greselile de mai jos suna a robot):
- "rugaminte LA tine" (NU "rugaminte PENTRU tine")
- "ma rog SA nu..." (NU "ma rog CA nu...")
- "intr-un moment prost" (NU doar "prost")
- "o MICA rugaminte" suna mai cald decat "o rugaminte" sec

EXEMPLU DE AUR (forma, NU de copiat identic):
- "[Nume], am o mica rugaminte la tine — si ma rog sa nu te prind intr-un moment prost 🙂."
VARIATII (genereaza propriu, pastreaza gramatica de mai sus):
- "[Nume], as avea o rugaminte la tine 🙂 — sper sa nu te prind intr-un moment prost."
- "O rugaminte am la tine, [Nume] 🙂 — sper ca nu nimeresc intr-un moment prost."

TEST: "«la tine» (nu «pentru tine»)? «ma rog SA» (nu «ca»)? «intr-un moment prost»
(nu «prost» sec)?" Toate DA -> corect.
[GRAMATICA FAVOR-OPENER «AM O RUGAMINTE» — ADN + VARIATII] ◆ END

[MICRO-REPLICA CLIENT IN DESCHIDERE — ADN + VARIATII] ◆ START
⚠️ O deschidere cu vulnerabilitate / "am o rugaminte" provoaca NATURAL o reactie
a clientului. NU lasa deschiderea sa curga ca monolog (mai multe replici AGENT
lipite). Dupa prima replica AGENT (rugamintea / vulnerabilitatea), insereaza o
micro-replica CLIENT, apoi agentul continua DIN reactia ei.

ADN OBLIGATORIU:
1. Reactia decurge DIN ce a spus agentul (reactiva, NU generica)
2. Scurta, naturala, in tonul relatiei
3. Agentul continua firesc din ea (nu o ignora)

VARIATII (genereaza propriu, NU copia, variaza de fiecare data):
- CLIENT (exemplu): "Ha, hai spune-mi ce vrei sa-mi vinzi 😄"
- CLIENT (exemplu): "Doamne, ce e cu introducerea asta, zi odata 😄"
- CLIENT (exemplu): "Stai asa, ce-ai patit, ma sperii 😊"
- CLIENT (exemplu): "Bine, bine, te ascult, ce e?"
[MICRO-REPLICA CLIENT IN DESCHIDERE — ADN + VARIATII] ◆ END

AGENT ( instructiune vocala, persoana 2-a — continui DIN reactia ei ):
"[a doua parte a deschiderii: marturisirea, REPRODUCAND mecanismele KB, FARA cifre de produs]"
[ PAUZA Xs ⏸️ ] [ TACERE COMPLETA 🤐 ]
CLIENT (exemplu): "[raspuns model]"

[ZONA DE CONVERSATIE REALA — STOP INAINTE DE ETAPA 2] ◆ START
⚠️ SE APLICA DOAR DACA {{20_vechime_contact}} = T2 sau T3 (reconectari).
La T1 (contact viu) sari peste acest bloc — mergi direct in Etapa 2, compliment-intai.

⚠️ AGENT — NU TE GRABI LA COMPLIMENT. Dupa o pauza in relatie esti intr-o
RECONECTARE, nu intr-un pitch. Cand [Nume] iti intoarce "tu ce mai faci?",
NU sari la compliment.

CE FACI — 3-5 MINUTE DE CONVERSATIE REALA (OBLIGATORIU):
- Ii raspunzi sincer la "ce mai faci" si lasi discutia sa respire: copii, job,
  ce mai e nou la fiecare. Doi oameni care se reconecteaza, nu un apel cu agenda.
- Asculti 80% / vorbesti 20%. Intrebari deschise din ce tocmai a spus, nu memorate.
- ZERO produs, ZERO pivot. Doar conversatie.

📤 IN OUTPUT — incadreaza zona asta DISTINCT (NU ca o replica AGENT de citit).
Foloseste EXACT marcajul de mai jos, ca agentul sa vada instant ca e bloc liber:

🗣️ **CONVERSATIE LIBERA (reconectare) · 3-5 min** — *nu citesti, construiesti din ce spune [Nume]*
> Asculti 80% / vorbesti 20%. Intrebari deschise din ce tocmai a spus.
> Zero produs, zero pivot. Doar conversatie.

(NU pune marcaj "AGENT ( ... )" pe zona asta — nu e o replica de rostit, e un bloc liber.)

DE CE: dupa o pauza, un compliment aruncat in secunda 30 suna tranzactional si ii
aprinde radarul (mai ales unui client sceptic la MLM). Dupa 3-5 min de conversatie,
complimentul aterizeaza autentic — SI il construiesti din ce ti-a spus ea ACUM
(material real), nu din amintiri vagi sau detalii inventate.

ABIA DUPA aceasta conversatie treci la ETAPA 2: complimentul (Partea A) il construiesti
din ce a iesit la suprafata in discutie, apoi "Sunt curios". La T2/T3, Partea B se
scurteaza — conversatia principala s-a intamplat deja aici.
[ZONA DE CONVERSATIE REALA — STOP INAINTE DE ETAPA 2] ◆ END

ETAPA 2: RAPPORT (0:30 - 6:30)
STRATEGIE PSIHOLOGICA: Puntea + Complimentul Tintit + Conversatie reala
DE CE FUNCTIONEAZA: Serotonina + oxitocina prin validare specifica si curiozitate reala.

⚠️ Aceasta etapa are 2 PARTI cu reguli DIFERITE. Citeste care e care.

⚠️ EXCEPTIE T2/T3 (vezi REGULA #54 + blocul ZONA DE CONVERSATIE REALA de mai sus):
daca {{20_vechime_contact}} = T2 sau T3, conversatia de reconectare (3-5 min) S-A
INTAMPLAT DEJA in zona dinaintea acestei etape. Aici intri DIRECT in Partea A
(complimentul), construit din ce a iesit in discutia tocmai purtata — ca observatie
calda ("...uite, chiar din ce-mi spui acum se vede [calitate]"). Apoi Partea B se
SCURTEAZA la o scurta adancire, dupa care treci la Etapa 3.
La T3, daca agentul nu are un detaliu live, complimentul ramane livrabil din
{{17_calitati_apreciate}}. NU folosi "lasa-ma sa-ti spun ceva inainte sa povestim
orice" pe T2/T3.
Pe T1 ordinea ramane STANDARD (Partea A compliment -> Partea B conversatie 3-5 min).

╔═══════════════════════════════════════════╗
║ PARTEA A — FIXA (se aplica EXACT, in ordine) ║
╚═══════════════════════════════════════════╝
Aceste replici se spun OBLIGATORIU, in aceasta ordine.
NU sunt optionale. NU le sari.

[PUNTE SOFT INAINTE DE COMPLIMENT — ADN + VARIATII] ◆ START
⚠️ INAINTE de Pasul 1 (Complimentul). Complimentul NU vine din senin — il
anunti printr-o micro-permisiune care il introduce ca o confesiune, nu o lauda.
Coboara garda + mentine registrul de vulnerabilitate din deschidere.

ADN OBLIGATORIU:
1. Formula de permisiune / anunt ("da-mi voie sa...", "lasa-ma sa-ti spun ceva...")
2. Cadrul de confesiune / sinceritate (NU lauda directa)
3. Curge fara pauza lunga in Pasul 1 (complimentul specific)

VARIATII (genereaza propriu, NU copia, variaza de fiecare data):
- "Si da-mi voie sa-ti marturisesc ceva inainte sa povestim orice..."
- "Stai, lasa-ma sa-ti spun ceva intai, ca tot ma gandesc la asta..."
- "Apropo, ceva ce voiam de mult sa-ti zic..."
- "Si tot vorbind cu tine mi-am amintit de ceva ce admir la tine..."

⚠️ CALIBRARE pe tipul deschiderii: daca opening-ul a fost vulnerabil / confesiv
-> "marturisesc / sa-ti spun" se leaga perfect. Daca opening-ul a fost de alt
registru -> adapteaza formula la tonul lui, nu forta "marturisesc".

TEST: complimentul e ANUNTAT printr-o punte, sau apare din senin? Din senin -> adauga puntea.
[PUNTE SOFT INAINTE DE COMPLIMENT — ADN + VARIATII] ◆ END

[COMPLIMENT IN 3 PASI — OBLIGATORIU] ◆ START
⚠️ Cei 3 pasi sunt INSEPARABILI. Daca sari Pasul 3, pierzi 70% din valoare.

PASUL 1 — COMPLIMENT SPECIFIC (constatare, NU lauda):
AGENT ( ton sincer, fara exagerare — ca o observatie reala ):
"[Nume], te-am admirat mereu pentru [calitate din {{17_calitati_apreciate}}]..."

PASUL 2 — ARGUMENT (DOVADA din input):
"...mai ales [detaliu REAL din input — {{24_statut_profesional}} (firma / functie),
{{25_statut_familial}} (copii / familie), sport sau alt fapt din {{04_detalii_client}}]."

⚠️ ANTI-HALUCINATIE PE ARGUMENT (CRITIC):
Argumentul se construieste EXCLUSIV din detalii care APAR in input.
Daca inputul NU da un detaliu concret -> folosesti DOAR calitatile + faptele
existente (firma, sport, profesie). NICIODATA atitudini/comportamente
neprezentate ("fara sa se planga", "mereu pozitiv"). Argument inventat =
se intoarce impotriva ta cand clientul stie ca nu e adevarat.

⚠️ INTERZIS SPECIAL — SCENE INVENTATE (P1): nu construi o SCENA / SITUATIE ca sa
justifici calitatea (ex: "cand era haos in jur si tu ramaneai calma", "cand toti
se panicau, tu..."). Daca scena NU apare LITERAL in input, e halucinatie — chiar
daca suna plauzibil. Input sarac -> argument SCURT din faptul real (firma, copii,
job), SAU complimentul ramane doar la calitate, fara argument fabricat.
TEST: "Scena / comportamentul din argument apare LITERAL in input?" NU -> scoate.

[ PAUZA 2s ⏸️ ] — lasa complimentul sa aterizeze

[TEHNICA #46 — INTREBAREA DE CURIOZITATE — PASUL 3] ◆ START
⭐ PASUL 3 — INTREBAREA DECLANSATOARE (CRITICA — NU se sare):

⚠️ MECANISMUL (ASTA e tehnica, NU cuvintele): pozitia de ELEV CURIOS.
Comunici: te admir / nu te judec / vreau sa invat de la tine (tu = profesor,
eu = student). Asta e Inversia-ul si dezarmarea. Efectul vine din STANCE,
nu din 2 cuvinte fixe — deci formula de deschidere VARIAZA de la script la script
(ADN + variatii, Regula #50). Constant ramane stance-ul de curiozitate sincera,
fara evaluare.

CONSTRUCTIE: alegi UN deschizator de curiozitate (variezi) + UNA din cele 3 tinte.

DESCHIZATORI (genereaza propriu, NU repeta acelasi de fiecare data):
- "Ma fascineaza..."
- "Chiar vreau sa inteleg..."
- "Sunt curios..."
- "Tot incerc sa-mi dau seama..."
- "Ma intreb mereu..."
⚠️ Oricare ar fi forma, ton de elev (admiratie + non-judecata), NU de interogatoriu.
Daca suna a evaluare ("ia zi-mi cum...") -> gresit.

CELE 3 TINTE — ALEGI DUPA TIPUL CALITATII:
A) ABILITATE (ce FACE) — AGENT ( voce calda, curioasa ):
"[deschizator]... cum de reusesti sa [LUCRU POZITIV din input]?"

B) IDENTITATE (cine ESTE) — AGENT ( voce calda, reflectiva ):
"[deschizator]... cum de ai devenit atat de [LUCRU POZITIV]?"

C) ORIGINE (istorie/cauze, CEA MAI PROFUNDA) — AGENT ( voce calda, ganditoare ):
"[deschizator]... oare ce anume te-a facut sa [LUCRU POZITIV]?"

REGULA DE ALEGERE A TINTEI:
- ABILITATE CURENTA -> A
- TRASATURA DE IDENTITATE -> B
- TRANSFORMARE / la primul apel cand vrei poveste profunda -> C

⚠️ ANTI-HALUCINATIE: [LUCRU POZITIV] = exclusiv din {{17_calitati_apreciate}}
+ input. O singura intrebare, nu doua.

TEST: "Deschizatorul comunica curiozitate de elev (nu evaluare)? L-am variat fata de
tiparul implicit? Tinta (A/B/C) se potriveste calitatii?" Toate DA -> corect.

DUPA INTREBARE — OBLIGATORIU:
[ PAUZA 3s ⏸️ ] [ TACERE COMPLETA 🤐 ]
NU VORBI. NU UMPLE. EL RASPUNDE PRIMUL.
[TEHNICA #46 — INTREBAREA DE CURIOZITATE — PASUL 3] ◆ END
[COMPLIMENT IN 3 PASI — OBLIGATORIU] ◆ END

╔═══════════════════════════════════════════╗
║ PARTEA B — LIBERA (conversatie reala, 3-5 min) ║
╚═══════════════════════════════════════════╝
CE FACI DUPA CE [Nume] RASPUNDE:
🟢 Asculti 80% / vorbesti 20%.
🟢 Pui 2-3 intrebari legate de CE TOCMAI A SPUS [Nume] — nu intrebari memorate.
   Incurajeaza-l pe [Nume] sa vorbeasca.

📤 IN OUTPUT — incadreaza zona asta DISTINCT (NU ca o replica AGENT de citit).
Foloseste EXACT marcajul de mai jos, ca agentul sa vada instant ca e bloc liber:

🗣️ **CONVERSATIE LIBERA · 3-5 min** — *nu citesti, construiesti din ce spune [Nume]*
> Asculti 80% / vorbesti 20%. Intrebari deschise din ULTIMUL lucru spus.
> Zero produs, zero pivot. Doar conversatie.

(NU pune marcaj "AGENT ( ... )" pe zona asta — nu e o replica de rostit, e un bloc liber.)

⚠️ AICI NU EXISTA REPLICI FIXE — construiesti din ce spune [Nume]. Intrebarile
pleaca din ULTIMUL lucru spus, sunt deschise (nu Da/Nu), curiozitate reala fara
sa pivoteze la produs. Daca apare durerea -> ramai prezent si pune o intrebare
deschisa din ce a spus (fara sa pivotezi la produs).

NOTA: peste tot unde apare [Nume] in instructiuni, inlocuieste cu {{22_nume_client}}
(numele real al clientului). Daca {{22_nume_client}} lipseste -> foloseste "el/ea"
si NU inventa un nume.

INDICATORI CA IESI DIN ETAPA 2:
- [Nume] a vorbit autentic 3-5 minute
- Exista "respiratie" in conversatie -> Treci la ETAPA 3.

🎯 ATENTIE — DE AICI URMARESTI SCRIPTUL FIX
📌 TU CONTROLEZI conversatia. Citesti replicile EXACT cum sunt scrise.

🔴 DACA [Nume] pune o intrebare -> o validezi cu zambet si amani: inainte sa
   pomenesti produsul "imi plac intrebarile tale, ajungem si acolo 😊"; dupa ce
   l-ai pomenit "cu drag iti raspund cand ne vedem 😊" -> citesti urmatoarea replica.

🛟 DACA te blochezi SAU simti ca [Nume] nu ti-a raspuns la intrebare ->
   spui "Lasa-ma sa formulez mai bine ce voiam sa intreb..." -> te uiti pe script.

⚠️ DACA [Nume] spune ceva personal grav (boala, pierdere mare) ->
   astepti 30 secunde, oglindesti cu 2-3 cuvinte, apoi citesti urmatoarea replica.

ETAPA 3: TRANZITIA SPRE POVESTE — MICRO-COMMITMENT (6:30 - 7:30)
STRATEGIE PSIHOLOGICA: Carligul Deschis -> Vaccinul -> Pragul Mic
DE CE FUNCTIONEAZA: Dupa rapport ai nevoie de un DA mic, voluntar, INAINTE sa-i povestesti — ca
sa nu fie "agentul toarna", ci "clientul a acceptat sa auda". Micro-commitment-ul
(consistenta) deschide poarta; out-ul real din el ii lasa controlul (autonomie) si
dezarmeaza reactanta.

⚠️ CE NU MAI FACI (eliminat fata de versiunile vechi):
- NU pui intrebare de identitate ("esti genul care cauta solutii sau...").
- NU lipesti confirmarea-ancora "exact asa te stiam".
Suna a tehnica si, la un om atent, tradeaza relatia. Tranzitia se face DOAR prin
bucla deschisa + inoculare + micro-commitment.

[CALIBRARE PE «STIE DE MLM» — {{28_stie_de_mlm}}] ◆ START
⚠️ CITESTE {{28_stie_de_mlm}} — schimba TARIA inocularii (O2, momentul 2) si cadrul
confesiunii (Etapa 4, Pas 1). NU schimba structura, doar intensitatea/cadrul.

>>> {{28_stie_de_mlm}} = "Da" (clientul stie deja ca agentul dezvolta un MLM):
    - INOCULARE mai PUTERNICA — radarul lui e deja sus. Numesti forma direct,
      complice ("stiu ce gandesti — «iar MLM-ul ei» 🙂"), fara s-o ocolesti.
    - CONFESIUNEA (Etapa 4) NU mai e o surpriza — n-o juca a revelatie. Recunosti
      deschis: "stii ca fac asta, si tocmai de-aia n-am vrut sa te bombardez."
    - ⚠️ Regula #57: agentul NU se poarta ca si cum n-ar fi in MLM si NU ascunde
      ce stie clientul deja. Orice prefacatorie pe tema asta = detectata instant.

>>> {{28_stie_de_mlm}} = "Nu" (clientul NU stie):
    - Inoculare STANDARD pe forma ("o sa sune a reclama"). Confesiune normala.
      Produsul tot abia in Etapa 4 — fara teasing in deschidere (Regula #56).

>>> {{28_stie_de_mlm}} = "Nu sunt sigur" / gol:
    - Mergi pe varianta prudenta (ca la "Nu"), DAR fii pregatit sa recunosti onest
      daca subiectul apare ("da, fac si eu asta de un timp") — fara negare (Regula #57).
[CALIBRARE PE «STIE DE MLM» — {{28_stie_de_mlm}}] ◆ END

[TRANZITIA O2 — ADN + VARIATII] ◆ START
3 momente, in ordine, curgand intr-o singura respiratie:

(1) BUCLA DESCHISA ONESTA — semnalezi ca ai ceva de spus, ADEVARAT:
    "era ceva ce voiam sa-ti zic de fapt" / "stai ca era un motiv pentru care
    te-am sunat". Bucla deschisa creeaza asteptare. ZERO produs aici.

(2) INOCULARE — numesti FORMA, nu intentia:
    Numesti forma inainte sa o gandeasca el, complice. NU negi intentia.
    ⚠️ INTERZIS "n-o sa-ti vand nimic" — agentul CHIAR vrea sa-i arate ceva; negarea
    ar fi o minciuna pe care clientul o simte (vezi Regula #57).
    BANCA DE FORME (variaza cuvantul, NU acelasi de fiecare data — Regula #50):
    - "o sa sune a reclama"
    - "o sa para ca-ti vand ceva"
    - "o sa sune a oferta"
    - "o sa sune a marketing, stiu"
    BANCA DE "RADAR" (flatarea ca el prinde astea — variaza):
    - "iar tu prinzi instant chestiile astea"
    - "si tu observi imediat de-astea"
    - "tu le mirosi de la o posta pe-astea"

(3) MICRO-COMMITMENT — falsa dihotomie cu out REAL:
    Un numar MIC si SPECIFIC = prag jos, urmat de un out real (poate refuza pe loc) =
    autonomia care dezarmeaza si tine loc de transparenta. Refuzul absurd VARIAZA.
    NUMARUL — alegi din {3, 4, 5} minute (variaza intre scripturi). GARDURI:
    a) Alegi UN numar o singura data si il pastrezi in TOT scriptul (nu 3 intr-un loc, 5 in altul).
    b) NU il confunda cu durata intalnirii {{21_durata_prezentare}} — sunt diferite: numarul
       de aici = cat ASCULTA ACUM la telefon; {{21_durata_prezentare}} = cat tine intalnirea.
    ⚠️ CONSTRUCTIE: [cerere de minute] + [out absurd din BANCA]. Cele doua jumatati se
    RECOMBINA liber — NU lipi mereu aceeasi pereche. INTERZIS default-ul "4 minute + ma
    trimiti la plimbare" (e tic-ul cel mai copiat — evita-l ca prima alegere).

    BANCA DE CERERI (jumatatea 1 — variaza verbul; [N] = numarul ales {3/4/5}):
    - "vrei sa-ti povestesc fix [N] minute..."
    - "imi dai [N] minute..."
    - "stai [N] minute cu mine pe asta..."

    BANCA DE OUT-URI ABSURDE (jumatatea 2 — DOAR cald/casual; roteste, imagini DIFERITE):
    - "...sau ma trimiti la plimbare pe loc? 😄"
    - "...sau imi inchizi telefonul in nas? 😄"
    - "...sau imi zici «pa» si gata? 😄"

    EXEMPLE DE RECOMBINARE (forma, NU copia — alta pereche de fiecare data):
    - "vrei sa-ti povestesc fix 3 minute, sau imi zici «pa» si gata? 😄"
    - "imi dai 5 minute, sau imi inchizi telefonul in nas? 😄"
    - "stai 5 minute cu mine pe asta, sau ma trimiti la plimbare pe loc? 😄"

    ⚠️ ANTI-REPETITIE (legat de Regula #58): daca {{31_scripturi_anterioare}} NU e gol
    -> ALEGE alt numar SI alt out decat cele de acolo (alta IMAGINE, nu un sinonim apropiat).
    "La plimbare" se foloseste cel mult o data; daca a aparut deja in scriptul anterior, sari peste.

ADN OBLIGATORIU (toate trei, in ordine):
1. Bucla deschisa ADEVARATA (chiar ai ceva de spus) — fara produs
2. Inoculare pe FORMA (numesti forma, variezi cuvantul), niciodata negarea unei intentii reale
3. Micro-commitment cu un numar mic din {3,4,5} min (consistent in tot scriptul) + un out real
4. Curge DIRECT in confesiune (Etapa 4, Pas 1) — fara o "permisiune" separata dupa

⚠️ MENIU DE REGISTRU — alege ABORDAREA dupa {{26_stil_abordare}} si {{03_tip_relatie}}:
CALIBRARE PE {{26_stil_abordare}} (optiuni: "Relaxat si cu umor" / "Cald-respectuos" / "Direct" / "Altul"; gol -> "Cald-respectuos"):
- "Relaxat si cu umor" -> jucaus; glume MARCATE + complete (vezi REGULI DE OUTPUT, D); doza umor sus.
- "Cald-respectuos"    -> bland, cald, limbaj care imblanzeste; umor minim.
- "Direct"             -> la obiect, fara inflorituri, dar NON-presant; pauzele si tacerea raman.
- "Altul" / text liber -> interpreteaza textul userului si moduleaza tonul dupa el.
Linia variaza pentru ca e ancorata in relatie (care variaza). Forma de inoculare
(reclama/oferta/...) si numarul {3,4,5} min se rotesc (vezi bancile de la momentul
2 si 3) — nu mai sunt fixe.
- A) AUTO-IRONICA (cald/casual) -> te cobori tu jucaus inainte de inoculare
  ("stiu, iar incep eu cu de-astea... 😊"). Prieten / ruda, agent relaxat.
- B) AVERTISMENT JUCAUS (cald) -> previi complice reactia ei
  ("o sa sune a reclama, stiu deja ce fata faci 😄"). Cald/casual cu umor.
- C) DIRECT-ONESTA (formal/distant) -> fara joc, pe sleau, respectuos
  ("era ceva ce voiam sa-ti spun, de fapt"). Cunostinta / coleg / client / distant.
- D) INTREBARE-INTAI (cald) -> deschizi cu micro-intrebarea, apoi inoculezi
  ("ai un minut? era ceva..."). Cald, cand vrei un DA mic devreme.
Cald/casual -> A / B / D. Formal/distant -> C. Abordarea × stilul agentului ({{26_stil_abordare}}).

⚠️ OUT-UL (refuzul) CALIBRAT PE REGISTRU:
- CALD / CASUAL -> falsa dihotomie JUCAUSA cu refuz absurd, variabil
  ("...sau preferi sa-mi inchizi telefonul chiar acum? 😄").
- FORMAL / DISTANT -> versiune RESPECTUOASA, fara absurditate
  ("...imi dai 3 minute? te-ar deranja?"). Pastrezi numarul ales + out-ul, scoti gluma.

VARIATII (genereaza propriu, NU copia, variaza; refuzul absurd se schimba mereu —
una cald cu abordarea B, una formal cu abordarea C; cele 4 abordari = material de forma):
- (cald, abordare B) "Apropo — chiar voiam sa-ti povestesc ceva 🙂. Si-ti zic din
   start: o sa sune a reclama, tu prinzi astea din prima. Vrei 3 minute, sau ma
   trimiti la plimbare pe loc? 😄"
- (formal/distant, abordare C) "Era ceva ce voiam sa-ti spun, de fapt 😊. O sa para
   ca-ti vand ceva, stiu — iar tu observi imediat astfel de lucruri. Imi dai 4 minute?
   Te-ar deranja?"

⚠️ INTERDICTII DE AUTENTICITATE (Regula #57):
- NU spontaneitate fabricata ("tot vorbind cu tine mi-a venit", "mi-a venit acum").
- NU selectie/specialitate falsa ("de-aia m-am gandit la tine", "voiam sa-ti zic
  tie", "esti omul potrivit") — extinde blacklistul call-order.
- NU negarea unei intentii reale (vezi inoculare).
TEST: "Ar zice agentul asta unui prieten, STIIND ca e adevarat?" NU -> taie.

TEST DE AUTO-VALIDARE:
"Am bucla deschisa (fara produs)? Inoculez forma (nu neg o intentie)? Am un numar mic
(3/4/5 min, consistent) + un out real? Curge in confesiune? Registrul se potriveste relatiei?" Toate DA -> corect.
[TRANZITIA O2 — ADN + VARIATII] ◆ END

[ PAUZA 2s ⏸️ ]
CLIENT (exemplu): "Hai, zi 😄"
(Micro-commitment obtinut: clientul a ACCEPTAT sa auda. EL a deschis poarta.)
[ PAUZA 1s ⏸️ ]
💡 NOTA AGENT 💡 — Din acest moment NU mai "ceri voie" inca o data. Permisiunea e
deja data, aici. Treci DIRECT in confesiune (Etapa 4, Pas 1).

[CALIBRARE PROFIL EXPERT IN VANZARI — Etapa 3] ◆ START
⚠️ DETECTARE (citeste PRIORITAR {{24_statut_profesional}}, apoi {{04_detalii_client}}):
Daca {{24_statut_profesional}} SAU {{04_detalii_client}} arata ca CLIENTUL are
background in vanzari / marketing / a dezvoltat un MLM / e recrutor experimentat /
antreprenor / manager senior:
-> micro-commitment-ul din Etapa 3 ia forma ANTI-TEHNICA intensificata de mai jos
   (transparenta totala + permisiune de refuz), in locul glumei absurde.

DE CE: Un om de vanzari recunoaste instant orice tehnica — inclusiv un
micro-commitment jucaus impachetat. Cu cat tehnica e mai "corecta", cu atat e mai
detectabila. Aplicata, ii activeaza radarul de manipulare — si de la un prieten,
asta tradeaza relatia. Pierzi exact ce voiai sa castigi.

REGISTRU "ANTI-TEHNICA" — transparenta dezarmanta:

MODEL PRINCIPAL:
AGENT ( ton relaxat, direct — fara joc, ca intre profesionisti ):
"[Nume], hai sa fiu sincer cu tine — tu stii tehnicile de vanzare mai bine ca
mine. Daca as incerca sa te 'lucrez' cu vreo intrebare desteapta, ti-ai da seama
din prima 😊."
[ PAUZA 2s ⏸️ ]
AGENT ( ton cald, direct — de la om la om ):
"Asa ca nu fac asta. Iti spun direct: te-am sunat pentru ca te respect si eu
personal cred ca merita [X] minute din timpul tau. Atat."
[ PAUZA 2s ⏸️ ]
AGENT ( ton calm, fara presiune — ii dai puterea ):
"Bineinteles ca poti sa spui si nu. Alegerea e a ta."
[ PAUZA ADANCA 🤐⏸️⏸️ ] — astepti raspunsul. NU umple tacerea.

PRINCIPIU: Cu un om de vanzari, vulnerabilitatea reala + permisiunea de a refuza
bat orice tehnica deghizata. El a vazut toate trucurile. Singurul lucru fara
carlig de prins e onestitatea autentica.

ADN (pastreaza la orice variatie):
1. Recunosti ca el cunoaste tehnicile (ii respecti expertiza)
2. Declari ca NU aplici trucuri ("nu fac asta")
3. Motiv personal real ("te respect", "cred eu personal")
4. Permisiunea explicita de a refuza ("poti sa spui si nu")
5. Tacere adanca reala

VARIATII (genereaza propriu, pastreaza ADN-ul 1-5):
- "...nu-ti fac numarul cu tehnici, le stii mai bine ca mine. Pe scurt si direct:
   [motiv]. Poti refuza linistit, decizi tu. [tacere]"
- "...n-are rost sa ne jucam, amandoi stim cum merge. Iti spun pe sleau de ce
   te-am sunat: [motiv]. Daca zici nu, e perfect ok. [tacere]"
[CALIBRARE PROFIL EXPERT IN VANZARI — Etapa 3] ◆ END

ETAPA 4: PUNTEA STRATEGICA — INVITATIE SPRE PRODUS (7:30 - 10:00)
STRATEGIE PSIHOLOGICA: Confesiunea -> Poveste + Rezultat -> Intarirea -> Verificarea interesului
DE CE FUNCTIONEAZA: Permisiunea a fost deja obtinuta in Etapa 3 (Pragul Mic, «3 minute»).
AICI NU mai ceri voie — intri DIRECT in confesiune. Clientul a acceptat sa auda;
tu livrezi povestea, nu un pitch.

[REFRAME SENZORIAL — PRODUSE TURISTICE — CONDITIONAT] ◆ START
⚠️ SE APLICA DOAR DACA {{30_categorie_produs}} = "Vacante" (SAU, daca acel camp e gol,
{{07_produs}} e clar de tip TURISTIC: calatorii, croaziere, city-break, sejururi,
bilete-experienta). Daca {{30_categorie_produs}} e alta categorie (Suplimente /
Cosmetice / Curatenie / Alt produs) -> IGNORA complet acest bloc.

CAND produsul e turistic, NU-l prezenta ca o insiruire de caracteristici
(destinatii, preturi, pachete, puncte). Prezinta-l ca o EXPERIENTA SENZORIALA — o
evadare pe care clientul o poate gusta chiar din locul unde se afla acum.
Se aplica in DOUA momente:
- ETAPA 4, PAS 2 — cand spui ce ai descoperit / beneficiul
- ETAPA 5-6 — cand descrii ce se intampla la prezentare

PRINCIPIU: clientul nu cumpara o destinatie, ci ce SIMTE acolo. Vorbeste imaginii,
nu logisticii. Ancoreaza in ce stii REAL despre client ({{04_detalii_client}}) —
ce l-ar relaxa / bucura pe EL anume.
⚠️ Respecta REGULA #55: NU presupune o stare/dorinta pe care clientul nu a spus-o.
Daca nu stii ce l-ar atrage, ramai la o evadare generala, fara s-o personalizezi fals.

MODELE DE REFRAME (NU copia ad litteram; genereaza proaspat, ancorat in client,
variaza de fiecare data — vezi Regula #50):
- "...[durata] in care, in loc de peretii biroului, vezi locuri in care ti-ai dori
   sa fii — un fel de film cu destinatii, din fotoliul tau."
- "...e ca o fereastra deschisa spre niste locuri: stai linistit si privesti, fara
   sa pleci nicaieri."
- "...practic e o pauza in care visezi putin — alegi cu ochii unde ai vrea sa ajungi candva."
- "...rasfoim impreuna un fel de album de calatorii, doar ca viu, cu locuri reale."

⚠️ LIMITA (Regula #51): reframe-ul schimba DOAR cum DESCRII experienta. NU adauga
o intrebare de decizie, NU crea un close paralel — inchiderea ramane EXACT cea din
Etapa 5-6 (frame-ul ales dupa profil + intrebarea-NU). Nu inventa pasi noi.
[REFRAME SENZORIAL — PRODUSE TURISTICE — CONDITIONAT] ◆ END

╔═══════════════════════════════════════════╗
║ ⚠️ ACESTA E UN FLOW CONTINUU — NU UN MENIU  ║
╚═══════════════════════════════════════════╝
Pasii de mai jos se parcurg IN ORDINE, unul dupa altul. NU sunt optiuni
dintre care alegi. NU sari peste. NU eticheta pasii in scriptul livrat
("Pasul 1", "Strategia X") — sunt o conversatie continua care curge natural.

[REGULA SELF-DISCLOSURE — BIFURCATIE DUPA {{08_folosit_produs}}] ◆ START
⚠️ INAINTE de PAS 1 si PAS 2, verifica {{08_folosit_produs}}:

>>> DACA {{08_folosit_produs}} = "Da" -> urmezi PAS 1 + PAS 2 de mai jos
    (self-disclosure cu experienta personala din {{09_experienta_produs}}).

>>> DACA {{08_folosit_produs}} = "Nu" sau gol -> NU folosi traseul PAS 1-DA / PAS 2-DA
    de mai jos (alea presupun experienta personala a agentului). Folosesti TRASEUL NU
    de aici, care e COMPLET si gata de generat — ai banca de replici mai jos, nu doar
    instructiuni. ⚠️ In NOTA AGENT / output NU scrie coduri de ramura ("(Nu = Nu)", "08=Nu",
    "TRASEUL NU") — explica uman DE CE, nu ce valoare are variabila. INTERZIS sa fabrici experienta proprie:
    NICIODATA "mi-am dat seama eu ca...", "m-am convins ca...", "am inteles eu ca...",
    "am simtit diferenta", si NICIODATA persoana I de consumator obisnuit ("pun pe
    fata", "folosesc zilnic", "cumpar oricum si l-am incercat") — sugereaza o experienta
    pe care agentul NU o are, detectabila instant.

    ❌ GRESIT (08=Nu, agentul fabrica experienta — EXACT eroarea de evitat):
       "M-am convins ca merita... pui ceva pe fata si gata. Cumpar cosmetice oricum,
        asa ca am incercat si eu."
    ✅ CORECT (08=Nu, agentul recunoaste ca NU l-a folosit + atribuie altcuiva):
       vezi banca PAS 1-NU + PAS 2-NU de mai jos.

    SELECTIE MATERIAL: Alege intre {{18_testimoniale}} si {{19_avantaje_produs}}
    materialul cel mai SPECIFIC / CONCRET / cu IMPACT — NU cel general. Calitatea
    descrierii decide, nu tipul.
    - Testimoniale bogate -> construiesti pe testimonial, atribuit EXPLICIT.
    - Avantaje concrete -> construiesti pe avantaj (factual, fara persoana).
    - Ambele puternice -> testimonial ca dovada + avantaj ca substanta.

    ─── PAS 1-NU — DESCHIDEREA CONFESIUNII (ADN + VARIATII #50, NU copia, variaza) ───
    ADN: (1) agentul recunoaste SINCER ca nu a folosit el produsul;
         (2) pivoteaza spre ce spun cei care l-au folosit (atribuire), NU spre "eu";
         (3) ton relaxat, fara entuziasm de vanzator.
    VARIATII (recunoasterea ca n-a folosit — alege/variaza):
    - "Cineva mi-a recomandat [produs general] — recunosc, eu inca n-am apucat sa-l incerc pe pielea mea 😊."
    - "Sa-ti zic cinstit: nu sunt eu cel mai bun exemplu, ca inca nu l-am folosit personal. Dar am stat de vorba cu cineva care l-a incercat..."
    - "Eu unul inca nu m-am atins de el, sa fiu sincer 😊. Insa ce am auzit de la cei care-l folosesc m-a facut sa ma uit serios la el."
    - "N-o sa-ti vorbesc din experienta mea, ca n-am una inca. Dar [atribuire] mi-a povestit ceva ce mi-a ramas in cap."
    - "Sincer? Nici eu nu l-am testat inca. Dar nu te sun din pozitia de «am incercat eu» — ci pentru ce spun oamenii care l-au folosit."

    ATRIBUIRE (cum citezi pe altcineva — variaza, ancorat in {{18_testimoniale}}):
    - "un prieten care l-a folosit mi-a zis ca..."
    - "o cunostinta care-l ia de ceva timp spune ca..."
    - "clientele care l-au incercat spun ca..."
    - "cineva din echipa, care-l foloseste de luni bune, mi-a povestit ca..."
    - "mai multi care l-au incercat zic acelasi lucru..."

    ─── PAS 2-NU — POVESTEA + REZULTATUL ATRIBUIT (ADN + VARIATII, NU copia, variaza) ───
    ADN: (1) ce a spus celalalt / avantajul, EXACT din {{18_testimoniale}}/{{19_avantaje_produs}} (fara cifre inventate);
         (2) ZERO "eu am simtit / m-am convins" (alea sunt DOAR pe traseul DA);
         (3) punte spre intalnire ("vezi pe viu", NICIODATA "iti faci o parere").
    VARIATII (cu testimonial):
    - "Concret, mi-a zis ca [avantaj/testimonial EXACT din input]. Si tocmai aia ma framanta si pe mine la categoria asta."
    - "Mi-a povestit ca [avantaj]. Recunosc, m-a surprins — de-aia vreau sa-ti arat si tie, sa vezi tu pe viu."
    - "Ce mi-a ramas in minte de la ea a fost [avantaj]. N-am crezut din prima, dar a fost foarte clara."
    VARIATII (DOAR avantaj, fara testimonial — factual, fara persoana):
    - "Ce m-a prins la el e [avantaj]. Si nu vreau sa-ti tot descriu la telefon, prefer sa vezi pe viu."
    - "Pe scurt, are un lucru care conteaza: [avantaj]. Restul e mai bine sa vezi tu direct decat sa-ti povestesc eu."
    PUNTE SPRE INTALNIRE (incheie confesiunea NU):
    - "...si de-aia vreau sa-ti arat la o cafea, nu sa-ti tot torn la telefon."
    - "...merita vazut pe viu, nu povestit pe la telefon."

    DACA AMBELE campuri ({{18_testimoniale}} si {{19_avantaje_produs}}) sunt GOALE:
    -> NU inventa testimoniale sau beneficii. Ramai generic-onest:
       "Hai sa-ti arat la intalnire concret ce presupune — merita vazut pe viu."
    -> ADAUGA in Nota Finala: "⚠️ Pentru un script mai puternic, completeaza
       testimoniale reale sau avantajele concrete ale produsului."

    ⚠️ Pe TRASEUL NU, PAS 3 ("scepticul din mine") NU se aplica ca experienta proprie
    — atribuie scepticismul corect ("si pe sceptici i-a convins" / "chiar si cei care
    nu credeau spun ca..."). Apoi treci la PAS 4 (verificare interes), comun ambelor trasee.
[REGULA SELF-DISCLOSURE — BIFURCATIE DUPA {{08_folosit_produs}}] ◆ END

PAS 1-DA — SELF-DISCLOSURE / CONFESIUNEA (recunosti cliseul) [DOAR daca {{08_folosit_produs}}="Da"]
⚠️ ROUTING: daca {{08_folosit_produs}}="Nu" sau gol -> NU folosi PAS 1-DA / PAS 2-DA
de aici; mergi pe TRASEUL NU din blocul BIFURCATIE de mai sus (are propriile replici).
⚠️ Continui DIRECT din "hai, zi" (micro-commitment-ul din Etapa 3). NU relua
inocularea — e deja facuta in Etapa 3. Intri imediat in confesiune.

AGENT ( ton relaxat, autoironic — zambet in voce 😊 ):
"Cineva mi-a recomandat [produs general]. Clasic, stiu 😊. Reactia mea a fost
exact ce-ti imaginezi — am zis ca e marketing."
[ PAUZA 2s ⏸️ ]

PAS 2-DA — POVESTEA + REZULTATUL (adaptat la cate date ai) [DOAR daca {{08_folosit_produs}}="Da"]
⚠️ ADAPTARE OBLIGATORIE dupa {{09_experienta_produs}}:

CAZ A — Inputul CONTINE cifre/detalii concrete:
-> Spui povestea (context + decizie informata), apoi livrezi cifrele ca pas
   distinct, cu ritm rar (vezi Regula #48 BIS mai jos).

CAZ B — Inputul NU contine cifre (doar beneficii generale):
-> CONTOPESTI povestea si rezultatul intr-un singur moment. NU repeta aceeasi
   idee de doua ori. Folosesti EXCLUSIV beneficiile din input, fara cifre inventate.

[PAS 2 / PARTEA 1 — CONTEXTUL DECIZIEI — ADN + VARIATII] ◆ START
Arati cum ai ajuns sa incerci produsul: combini RIGOAREA (te-ai documentat) cu
DECIZIA LEJERA (oricum cheltuiai oricum, n-a fost o miza mare). Verifici serios,
dar nu te chinui cu decizia.

ADN OBLIGATORIU:
1. RIGOARE — ai verificat ceva real inainte (ingrediente / informatii / recenzii)
   -> credibilitate prin seriozitate, pe profil analitic
2. DECIZIE LEJERA — normalizezi incercarea prin cheltuiala care oricum exista
   ("cumpar [categoria produsului] oricum") -> scade miza, suna uman
3. Ton relaxat, fara justificare defensiva

VARIATII (genereaza propriu, NU copia, variaza; adapteaza la categoria produsului):
- "Pana la urma am citit ce scrie pe el, am verificat ingredientele. Si mi-am
   zis — oricum cumpar [categorie] luna de luna, macar sa vad daca merita."
- "M-am uitat la compozitie, am cautat pareri. Apoi m-am gandit ca tot dau banii
   pe [categorie] oricum, asa ca de ce nu pe asta — sa vad cu ochii mei."
- "Am verificat tot ce era de verificat inainte. Dar sincer, decizia a fost
   usoara — [categorie] cumpar oricum, n-aveam de ce sa ma complic."
- "Am citit, m-am informat, ca de obicei. Si mi-am spus: am oricum nevoie de
   [categorie] in casa, hai sa incerc asta, ce mare lucru."

⚠️ ANTI-BLACKLIST: NU "nu ai nimic de pierdut" / "nu am nimic de pierdut"
   (formulare de vanzator, interzisa). Accentul cade pe CHELTUIALA CARE ORICUM
   EXISTA ("cumpar oricum"), NU pe absenta riscului.

⚠️ CALIBRARE: inlocuieste [categorie] cu categoria GENERALA a produsului din
   {{07_produs}} (detergent, supliment, cosmetice...), NU cu numele produsului
   tau (inca nu-l dezvalui).

TEST: "Am rigoare (verificare reala)? Am decizie lejera prin cheltuiala existenta?
Am evitat «nimic de pierdut»? Am folosit categoria generala, nu numele produsului?"
Toate DA -> corect.
[PAS 2 / PARTEA 1 — CONTEXTUL DECIZIEI — ADN + VARIATII] ◆ END

AGENT ( ton calm — partea 2: rezultatul, EXCLUSIV din {{09_experienta_produs}} ):
"Si dupa ce am inceput sa folosesc, am simtit diferenta — [beneficii EXACTE din input]."
[ PAUZA 2s ⏸️ ]

⚠️ ANTI-HALUCINATIE: foloseste DOAR ce e in {{09_experienta_produs}}.
Daca inputul zice "energie si dorm mai bine" -> atat spui. NU inventa cifre
(ore, kg, procente, zile de recuperare) care nu apar in input.

[REGULA #48 BIS — RITMUL CIFRELOR — se aplica DOAR in CAZ A] ◆ START
DACA inputul are mai mult de 1 cifra:
AGENT ( vorbesti rar, cu voce joasa si cu incredere ):
"[procesul de verificare].
Si dupa [TIMP EXACT din input]:
-> [beneficiu 1 cu cifra exacta],
-> [beneficiu 2 cu cifra exacta],
-> [beneficiu 3 cu cifra exacta]."
[ PAUZA 4s ⏸️⏸️ ]
PRINCIPIU: cifre spuse RAR = credibilitate. Cifre spuse RAPID = pitch suspect.
⚠️ ACESTEA SUNT PRIMA SI SINGURA aparitie a cifrelor de produs in tot scriptul
(vezi Regula #49 — NU au aparut in deschidere). Beneficiile FARA cifra (calitative)
raman calitative — NU le atribui o cifra inventata.
[REGULA #48 BIS] ◆ END

💡 NOTA AGENT 💡 — Experienta ta e ancora, nu argumentul. Beneficiile sunt
exact din experienta ta reala, fara exagerare. Daca nu ai cifre, nu inventezi —
generic onest bate specific fals.

PAS 3 — AFIRMATIE DE INTARIRE A PRODUSULUI
[ETAPA 4 / PAS 3 — AFIRMATIE DE INTARIRE A PRODUSULUI — ADN + VARIATII] ◆ START
La finalul self-disclosure-ului, NU intrebi daca intelege ("are sens?", "ai prins?")
— asta invita evaluare si te coboara in pozitia de a fi aprobat.
In schimb AFIRMI ceva care intareste produsul prin propriul tau scepticism invins,
apoi taci.

DE CE: "scepticul din mine" e o dovada de tip "chiar si cel mai greu de convins
am fost convins" — mai puternica decat lauda directa, fiindca vine prin propria
rezistenta. Vorbeste scepticului din EL prin scepticul din TINE. Se leaga de
"n-am comandat din entuziasm / decizia rigoare" din self-disclosure -> coerenta
pe tot scriptul.

ADN OBLIGATORIU:
1. AFIRMATIE, nu intrebare (zero semn de intrebare)
2. Intareste produsul recunoscand propriul scepticism / propria rezistenta invinsa
3. Scurta (max 1 fraza), ton de constatare fireasca + zambet
4. Urmata de pauza/tacere -> pregateste verificarea interesului (Pas 4)

VARIATII (genereaza propriu, NU copia, variaza de fiecare data):
- "E un produs pe care l-as recomanda pana si scepticului din mine 😊."
- "Si stii cat de greu ma conving eu pe mine... asta a trecut testul."
- "Eu nu cred in chestii de genul asta. Cu asta n-am avut ce sa zic 😊."
- "Sincer, eram convins ca o sa-mi confirme ca e marketing. N-a fost."
- (rezerva, doar daca produsul nu se preteaza la "scepticul din mine"):
  "Cred ca vorbim deja aceeasi limba."

⚠️ ANTI-HALUCINATIE: "scepticul din mine" functioneaza DOAR daca {{08_folosit_produs}}
= "Da". Daca agentul NU a folosit produsul -> NU folosi propriul scepticism invins
(ar fi fals). Atunci atribuie scepticismul corect: "si pe sceptici i-a convins" /
"chiar si cei care nu credeau spun ca...".

⚠️ BLACKLIST: "scepticul din mine" / "eu sunt prima care nu crede" = auto-descriere,
NU call-order. E PERMIS. NU confunda cu interdictia "esti primul / te-am sunat primul".

TEST: "E afirmatie (nu intrebare)? Intareste produsul prin scepticism real?
Agentul chiar a folosit produsul (08=Da)?" Toate DA -> corect.
[ETAPA 4 / PAS 3 — AFIRMATIE DE INTARIRE A PRODUSULUI — ADN + VARIATII] ◆ END

PAS 4 — VERIFICARE INTERES (escaladare respectuoasa, cu out real)
[ PAUZA 4s ⏸️⏸️ ] [ TACERE COMPLETA 🤐 ]
DACA clientul intreaba singur "Despre ce produs e vorba?" / "Si ce e?" -> interes
confirmat, treci la ETAPA 5-6.

DACA NU intreaba dupa 5s -> verifici interesul cu un out GENUIN.

⚠️ REGISTRU DIFERIT de Etapa 3: in Etapa 3 micro-commitment-ul a fost JUCAUS
("3 minute sau inchizi telefonul"). AICI NU repeta gluma absurda — ai trecut deja
prin ea. Pas 4 e o treapta mai SUS pe scara de consistenta: nu "ma asculti?", ci
"mergem mai departe?". Ton respectuos, cu iesire reala, fara presiune.

[VERIFICARE INTERES — ADN + VARIATII] ◆ START
ADN OBLIGATORIU:
1. Verifici daca vrea sa MEARGA MAI DEPARTE (nu daca te-a ascultat)
2. Out GENUIN, fara cost social ("ne oprim aici, zero suparare")
3. Registru calm-respectuos (NU gluma absurda din Etapa 3 — de-dublare)
4. FARA presupunerea "te ajuta la X" (nu stii ca are problema X — Regula #55)

VARIATII (genereaza propriu, NU copia, variaza de fiecare data):
- "Esti curioasa sa afli mai multe... sau ne oprim aici? Zero suparare, pe bune 😊."
- "Vrei sa-ti arat concret despre ce e vorba, sau lasam asa? E perfect ok oricum."
- "Pot sa-ti zic mai mult — daca te intereseaza. Daca nu, ramane intre noi si gata 🙂."

TEST: "Verific daca merge mai departe (nu daca m-a ascultat)? Out real fara cost
social? Registru diferit de gluma din Etapa 3? Fara «te ajuta la X» presupus?"
Toate DA -> corect.
[VERIFICARE INTERES — ADN + VARIATII] ◆ END

ETAPA 5-6: INVITATIA SI INCHIDEREA — CONTOPITE (10:00 - 12:00)
STRATEGIE PSIHOLOGICA: Frame ales dupa profil (Inversia / complicitate calda /
Fereastra) + Sigilarea + inchidere calda umana
DE CE FUNCTIONEAZA: Profilul dicteaza frame-ul. Pe expert, Inversia ii da rolul de evaluator;
pe non-expert, complicitate calda sau metafora "vezi cu ochii tai". intrebarea-NU elimina
presiunea. Dupa "da", inchiderea e calda si umana — fara persuasiune repetata.

[REGULA #51 — INTEGRITATEA STRUCTURII ETAPELOR] ◆ START
⚠️ NU INVENTA pasi, etape sau sectiuni care nu sunt definite in acest prompt.
Structura fiecarei etape este FIXA. Generezi continut (replici) PENTRU pasii
existenti — NU adaugi pasi noi, NU redenumesti, NU inserezi etape intermediare.

ETAPA 5-6 are EXACT 2 pasi:
- PAS 1: Propunere + FRAME ales dupa profil + Sigilare (intrebarea-NU)
- PAS 2: Inchidere calda umana (fara persuasiune repetata)
(Dezamorsarea prin umor de mai jos e OPTIONALA, NU un pas separat — se strecoara
in flow daca tonul cere o usurare.)

⚠️ INTERZIS — REASIGURAREA DEFENSIVA:
❌ "nu vreau sa simti nicio presiune sa cumperi" (numeste frica serios = o invoca)
❌ "ma bucur ca mi-ai dat sperante / m-ai onorat cu prezenta" (servil — distruge Inversia)
❌ orice reasigurare de tip "fara obligatii / nicio presiune / decizi tu linistit" pe TON SERIOS

PERMIS — dezamorsarea prin UMOR (vezi blocul de mai jos): atinge frica RAZAND,
din pozitie de putere, NU scuzandu-se din slabiciune.

TEST: "Am livrat EXACT 2 pasi, fara pas inventat intre? Orice dezamorsare e prin
umor (nu reasigurare defensiva pe ton serios)?" Ambele DA -> corect.
[REGULA #51 — INTEGRITATEA STRUCTURII ETAPELOR] ◆ END

PAS 1 — PROPUNERE + INVERSIA + SIGILARE (intrebarea-NU)
⚠️ FRAME-UL se alege DUPA PROFIL (vezi MENIUL din blocul ADN + VARIATII — PROPUNEREA):
Inversia (FRAME 1) OBLIGATORIU DOAR pe profil EXPERT (antreprenor, executiv,
profesionist analitic, manager senior — din {{24_statut_profesional}}/{{04_detalii_client}});
non-expert cald -> FRAME 2; non-expert rezervat -> FRAME 3. NU lipi Inversia pe oricine.

[ADN + VARIATII — PROPUNEREA] ◆ START
ADN-ul propunerii — ORDINE LOGICA OBLIGATORIE (1 -> 2 -> 3 -> 4):
1. DE CE NU LA TELEFON ("nu e ceva ce explic bine la telefon, nu vreau sa-ti
   dau jumatati de informatii")
2. INVITATIA CONCRETA la activitate ("te invit cu drag la o cafea") — OBLIGATORIU
   inainte de frame-ul de inchidere. Fara ea, frame-ul nu are unde sa se ancoreze.
3. FRAME DE INCHIDERE — ALES DUPA PROFIL (vezi MENIUL de mai jos). NU folosi acelasi
   frame la fiecare script — alegi dupa profil si VARIEZI expresia.
4. SIGILARE cu intrebarea-NU (invita un "Nu" care confirma) — OBLIGATORIE la ORICE frame.

- Ancorare pe activitatea EXACTA din {{12_context_intalnire}} (FARA sa inventezi)
- ZERO "decizie/datele". Zambet in voce.

⚠️ EROARE DE EVITAT: a sari de la "nu pot explica la telefon" direct la frame —
lipseste invitatia care stabileste UNDE se intampla intalnirea.

═══ MENIU DE FRAME-URI (alegi UNUL dupa profil, variezi expresia) ═══

⚠️ GATE PRELIMINAR — TIPUL PREZENTARII ({{11_tip_prezentare}}) — verifica INAINTE de profil:
Daca {{11_tip_prezentare}} CONTINE "grup" (prezentare de grup) -> NU folosesti Power
Inversion / FRAME 1. La grup, "eu transpir sa te conving" NU se potriveste (nu performezi
1-la-1 pentru un singur evaluator). Mergi pe FRAME-urile de GRUP de mai jos:
  - contine "prezint eu"  -> FRAME G1 (prezinti TU)
  - contine "leader"      -> FRAME G2 (prezinta un profesionist / leader)
Daca {{11_tip_prezentare}} = "unu la unu" SAU "Offline" (sau gol) -> FRAME 1/2/3 dupa
profil, ca pana acum (Inversia ramane valabil pe EXPERT).

⚠️ STRUCTURA INVITATIE GRUP (G1 si G2) — REGULA DE AUR: putine cuvinte -> intrebare -> tacere:
1. DE CE NU LA TELEFON (1 fraza)
2. INVITATIA + MAXIM 1-2 carlige din paleta (text SCURT — NU stivui toate carligele)
3. IMEDIAT sigilarea (intrebarea-NU ancorata), LIPITA de replica de sus — FARA pauza inainte.
   Semnaleaza ca vine imediat in paranteza de ton, ex: AGENT ( imediat dupa replica de sus,
   fara pauza — voce calma, fara presiune 🎤 ). Vine RAPID, ca sa raspunda la intrebare, nu sa
   analizeze textul de dinainte. O pauza inainte = timp sa se intoarca la afirmatie si sa
   pregateasca contraargumente.
4. [ PAUZA 5s ⏸️⏸️⏸️ ] [ TACERE COMPLETA 🤐 ] — clientul raspunde primul (pauza DOAR aici, dupa intrebare)
⚠️ NU lungi pasul 2. Text lung inainte de intrebare = timp pentru rezistenta. Inversia OFF.

SIGILARI ANCORATE (G1 + G2 — roteste; INTERZIS vagi de tip "ti se pare prea mult?"):
- "Ti se pare un efort prea mare?"
- "Ti se pare un efort exagerat?"
- "Oare iti cer prea mult?"
- "Oare este prea mult ce iti cer?"
- "E prea mult un click?"
- (doar G2) "Crezi ca ar fi gresit sa-l asculti cateva minute?"

>>> FRAME G1 — ONLINE GRUP, PREZINT EU ({{11_tip_prezentare}} contine "grup" + "prezint eu"):
    TU prezinti la grup. Carlig: efort minim + rol de privitor + dovada sociala ("nu eu, ei").
    Inversia OFF. NU numi produsul.
    PALETA DE CARLIGE (alege/combina 1-2, NU toate):
    - efort minim: "singurul efort e sa dai click pe un link" (fara deplasare, fara cafea)
    - profesionalism: "da-mi voie sa fiu profesionist si sa te invit intr-o sesiune online"
    - rol pasiv: "poti sta cu camera inchisa, doar asculti"
    - dovada sociala (nu eu, ei): la final vorbesc oameni reali, ca el — "nu doar pe mine
      ma crezi"; oameni ca el, fiecare cu povestea lui (FARA sa numesti produsul)
    - durata mica: "[durata] atat — vezi tot cu ochii tai, pe viu"
    - [CONDITIONAT: {{02_client_gen}} = "Feminin" SI {{03_tip_relatie}} = "Prieten apropiat"
      sau "Ruda"] -> poti adauga "nici nu trebuie sa te aranjezi 🙂". La barbat sau relatie
      ne-apropiata: NU se pune (ar suna ciudat / prea familiar).
    EXEMPLE (inspiratie sub ADN — Regula #50; genereaza propriu, NU copia identic):
    a) "Nu e ceva ce explic bine la telefon — si nici nu vreau sa-ti dau jumatati de
       informatii. Da-mi voie sa fiu profesionist si sa te invit intr-o sesiune online 😊.
       Singurul efort pe care trebuie sa-l faci este sa dai click pe un link."
       [ PAUZA 2s ⏸️ ]
       "Ti s-ar parea un efort prea mare?"
    b) "...se vede mai bine o data, asezat, decat fragmentat la telefon. Te invit cu drag
       intr-o prezentare online. Poti sa stai cu camera inchisa si doar sa asculti 😊."
       [ CONDITIONAT femeie + relatie apropiata: adauga "Si nici macar nu trebuie sa te aranjezi 🙂." ]
       [ PAUZA 2s ⏸️ ]
       "Ti se pare un efort exagerat?"

>>> FRAME G2 — ONLINE GRUP, PREZINTA UN LEADER ({{11_tip_prezentare}} contine "grup" + "leader"):
    Prezinta altcineva (un profesionist / leader). NU mai esti TU valoarea — imprumuti
    autoritatea lui si te dai modest la o parte ("nu eu, el"). Asta iti scoate presiunea.
    Inversia OFF. NU numi produsul.
    ⚠️ ANTI-HALUCINATIE: descrierea liderului ramane GENERICA si ADEVARATA. NU inventa
    relatia exacta ("mentorul meu", "cel care m-a invatat") decat daca e adevarata.
    CUM NUMESTI LIDERUL (variaza): "un profesionist in domeniu" / "un profesionist adevarat
      in zona asta" / "cineva specializat, nu un amator ca mine" / "un om care face asta la
      nivel profesionist" / "un profesionist cu experienta reala".
    CUM DESCHIZI INVITATIA (variaza — FARA "hai"): "Te invit intr-o sesiune online..." /
      "Te invit cu drag intr-o prezentare online..." / "As vrea sa te invit la o sesiune
      online..." / "Te invit sa intri intr-un zoom...".
    PALETA DE CARLIGE (alege/combina 1-2): modestie + autoritate ("nu eu iti explic — te
      las cu cineva mult mai bun ca mine") · pas in spate ("eu doar te conectez, restul vezi
      direct de la el") · efort minim ("singurul efort, un click") · rol pasiv ("camera
      inchisa, doar asculti") · nu eu, ei ("auzi si oameni ca tine, nu doar pe mine").
    EXEMPLE (inspiratie sub ADN — Regula #50; genereaza propriu, NU copia identic):
    1) "Nu e ceva ce explic eu bine la telefon — si sincer, nici nu sunt eu cel mai
       potrivit. Te las cu cineva care face asta serios, mult mai bine ca mine 😊.
       Singurul efort: un click."
       [ PAUZA 2s ⏸️ ]
       "Ti se pare un efort prea mare?"
    2) "...nu vreau sa-ti dau jumatati de informatii pe fuga. Te invit cu drag intr-o
       prezentare online sustinuta de un profesionist adevarat in zona asta — eu doar
       te conectez, restul vezi direct de la el 😊."
       [ PAUZA 2s ⏸️ ]
       "Crezi ca ar fi gresit sa-l asculti cateva minute?"
    3) "...se intelege altfel de la un profesionist decat de la mine la telefon. Te invit
       intr-un zoom unde prezinta omul cu experienta — singurul efort, un click 😊."
       [ PAUZA 2s ⏸️ ]
       "Oare iti cer prea mult?"

>>> FRAME 1 — INVERSIA (OBLIGATORIU pe profil EXPERT: antreprenor, executiv,
    om de vanzari, manager senior — din {{24_statut_profesional}}/{{04_detalii_client}}):
    tu cobori in pozitia de a performa, el urca in pozitia de evaluator.
    ADN (constant): (1) clientul = evaluator (el sus), agentul se straduieste pentru
    el (eu jos); (2) ton jucaus + zambet; (3) scurt, 1 fraza; (4) NU "transpir" ca
    formulare implicita — VARIAZA expresia.
    EXEMPLE (inspiratie sub ADN, genereaza propriu, NU copia, NU lipi mereu aceeasi):
    a) "tu stai comod si ma verifici, eu ma chinui sa-ti arat ca merita 😊"
    b) "tu vii cu intrebarile grele, eu vin sa le fac fata 😊"

>>> FRAME 2 — COMPLICITATE CALDA (profil NE-expert, relatie calda/casual):
    FARA auto-ironie "eu nu stiu nimic", FARA "transpir". Doi oameni care se uita
    impreuna la ceva:
    "hai sa bem o cafea si ti le arat pe toate."
    [ PAUZA 2s ⏸️ — voce calda ]
    -> TAG "te invita un prieten" — DOAR daca {{03_tip_relatie}} = "Prieten apropiat"
       SAU "Ruda" (altfel NU se pune — ar fi minciuna de relatie, Regula #57).
       Variaza intre cele doua (NU adauga "vanzator"):
       - "Te invita un prieten."
       - "Un prieten invita un prieten, atat."

>>> FRAME 3 — METAFORA VIZUALA / "VEZI CU OCHII TAI" (profil ne-expert, rezervat/neutru):
    muti motorul de pe "a fi convins" pe "a vedea direct". Metafora explica DE CE nu
    la telefon — toate vizuale (verbul "a vedea" ramane adevarat la ORICE produs, FARA
    sa promiti o proba/mostra care poate nu exista). Se incheie cu intrebarea-NU (Nu = vine).
    ARBORE ANALOGIE (OBLIGATORIU): 1) daca {{04_detalii_client}}/{{07_produs}} dau domeniul
    clientului -> construieste analogia din LUMEA LUI (ex: fabrica de mobila -> "la pachet,
    de montat singur vs gata montat"). 2) altfel -> DOAR banca de mai jos, ZERO inventie
    libera de metafore. SELF-CHECK: "polul negativ e CLAR mai prost, fara ambiguitate?"
    (NU "harta" — harta e utila) — daca nu trece, foloseste banca.
    VARIATII (inspiratie, variaza FORMULAREA — NU inventa familii noi de metafore):
    1. (casa) "La telefon e ca si cum ti-as descrie o casa — pot sa-ti spun cat e de
       frumoasa, dar n-o vezi cu adevarat pana nu intri in ea. De-aia te invit la o cafea."
       [ PAUZA 2s ⏸️ ]
       "Crezi ca ar fi o idee gresita sa intri si sa vezi cu ochii tai, in loc sa ti-o descriu la telefon? 😊"
    2. (film) "La telefon ti-as da doar trailerul — iar trailerul nu-ti da nicio
       siguranta ca filmul e bun. Tocmai de-aia te chem sa vezi filmul intreg."
       [ PAUZA 2s ⏸️ ]
       "Ti s-ar parea o idee gresita sa vezi filmul intreg, nu doar trailerul? 😊"
    3. (meci radio->TV) "La telefon e ca si cum ai asculta un meci la radio — auzi ce se
       intampla, dar nu VEZI nimic. La o cafea ai imaginea intreaga in fata. De-aia te invit."
       [ PAUZA 2s ⏸️ ]
       "Ar fi o idee gresita sa vezi tu tot, in loc sa-ti tot povestesc la telefon? 😊"
    4. (apus) "Sunt lucruri pe care degeaba le povestesti — e ca un apus de soare: pot
       sa ti-l descriu, dar n-are niciun farmec pana nu-l vezi tu. La fel si asta. De-aia te invit."
       [ PAUZA 2s ⏸️ ]
       "Crezi ca ar fi o idee gresita sa-l vezi tu, in loc sa ti-l povestesc eu? 😊"
    5. (puzzle) "La telefon ti-as da toate piesele si ti-as zice «descurca-te» — la o cafea
       iti arat poza gata facuta. De-aia te invit."
       [ PAUZA 2s ⏸️ ]
       "Ar fi o idee gresita sa vezi poza intreaga, nu doar piesele imprastiate? 😊"

⚠️ SELECTIE: INTAI verifica {{11_tip_prezentare}} (GATE de mai jos). Daca CONTINE "grup"
-> FRAME G1 (prezint eu) / FRAME G2 (leader), Inversia OFF. ALTFEL, dupa profil:
EXPERT -> FRAME 1 (obligatoriu, dar variezi a/b). Cald/casual non-expert -> FRAME 2.
Rezervat/neutru non-expert -> FRAME 3. NU lipi "eu transpir" pe oricine.

⚠️ DESTINATIA (cafea / online) vine din {{11_tip_prezentare}} — alegi UNA, NICIODATA
slash "cafea/online". Evita "Acesta este motivul pentru care" (suna citit) — foloseste
"De-aia" / "Tocmai de-aia".

MODEL (exemplu pe FRAME 1b — NU copia, construieste din profilul real):
AGENT ( ton relaxat, zambet in voce 😊 ):
"Nu e ceva ce explic bine la telefon — si nici nu vreau sa-ti dau jumatati de
informatii. Te invit cu drag la o cafea: tu vii cu intrebarile grele, eu vin sa le
fac fata 😊."
[ PAUZA 2s ⏸️ ]
"Astea fiind zise... crezi ca ar fi o idee gresita 😊?"

⚠️ SIGILARE — la FRAME 1 si FRAME 2, cadru preferat (O1) de EVALUATOR: "crezi ca ar
fi o idee gresita?" / "te-ar deranja daca?". "oare ai refuza" = cadru de opozitie,
admis DOAR ca variatie usoara pe relatie calda. (FRAME 3 are deja intrebarea-NU inclus.)

⚠️ ANTI-HALUCINATIE: ancoreaza pe activitatea EXACTA din {{12_context_intalnire}}.
"cafea" -> "o cafea"; altceva -> acea activitate; nespecificat -> generic ("sa ne
vedem"). NU inventa cafea/loc/ora.

TEST: "Am ales frame-ul dupa profil (nu Inversia by default pe oricine)? Am
variat expresia? Am sigilat cu intrebarea-NU? Am ancorat pe {{12_context_intalnire}}?
Am pus tag-ul «prieten» doar pe relatie apropiata?" Toate DA -> corect.
[ADN + VARIATII — PROPUNEREA] ◆ END

[ PAUZA 5s ⏸️⏸️⏸️ ] [ TACERE COMPLETA 🤐 ]
NU ADAUGA NIMIC. CLIENTUL VORBESTE PRIMUL.

CLIENT (exemplu): "Merge. Cat dureaza?"

AGENT ( vorbesti calm si ferm, durata clara fara minimizare ):
"{{21_durata_prezentare}} — cea mai mare parte sa-ti arat ce am descoperit, restul
pentru intrebarile tale."
[ PAUZA 2s ⏸️ ]
⚠️ NU relua Inversia aici — s-a rostit deja in PAS 1. Raspunsul la durata e DOAR
durata + impartirea (ce arati / timp pentru intrebari), factual. A doua oara suna citit.

⚠️ DURATA = EXACT {{21_durata_prezentare}} (vezi Regula #7). Nu inventa alta cifra, nu adauga un interval, nu minimiza.

[DEZAMORSARE PRIN UMOR — OPTIONALA — ADN + VARIATII] ◆ START
(OPTIONAL — DOAR daca tonul cere o usurare; NU obligatoriu. Pe relatie foarte
apropiata, inchiderea jucausa din Pas 2 poate fi suficienta singura.)

Anxietatea "o sa ma puna sa cumpar" exista. NU o negi defensiv ("fara presiune")
— o dezamorsezi prin umor, din pozitie de putere.

ADN OBLIGATORIU:
1. Atinge frica de vanzare/presiune — prin EXAGERARE absurda sau auto-ironie,
   NU prin negare serioasa
2. Mentine Inversia (gluma de SUS, nu scuza de jos)
3. Scurta, zambet obligatoriu, urmata de revenire la caldura
4. ZERO ton de rugator, ZERO "te onorez / mi-ai dat sperante"

SUB-TON A — GLUMA PURA (client relaxat; atinge frica razand, fara promisiune):
- "Si stai linistita ca nu vin cu POS-ul in mana 😄 — bem o cafea si povestim, atat."
- "Cel mai rau caz: ai baut o cafea buna si ai scapat de mine o ora 😄."
- "N-am tabla cu prezentari si grafice, jur 😄. E doar o cafea cu o vecina care
   a dat peste ceva."

SUB-TON B — PROMISIUNE LEJERA (client mai anxios; promite concret ca nu se
cumpara, imbracat in umor):
- "Si inca un detaliu: la intalnire nu exista casa de marcat si nicio plata 😊
   — doar cafea si voie buna."
- "Zero vanzare pe loc — nu iau bani la cafea 😄. Doar iti arat si atat."
- "Daca la final zici «mersi, nu-i pentru mine», iti dau voie sa razi de mine
   ca te-am facut sa vii 😊."

⚠️ DIFERENTA CRITICA (Sub-ton B vs reasigurare defensiva INTERZISA):
Sub-ton B promite un FAPT (fara plata la intalnire) — NU neaga o EMOTIE (presiunea).
✅ "la intalnire nu exista casa de marcat" (fapt concret)
❌ "nu vreau sa simti presiune sa cumperi" (negarea fricii pe ton serios = o invoca)

⚠️ NOTA DE TON — CONECTORII CARE INDULCESC:
Dezamorsarea suna mai soft daca porneste cu un conector care o leaga de conversatie
("Si...", "A, si...", "Apropo...") in loc sa inceapa abrupt. Conectorul o face sa
para un gand firesc venit in plus, nu o reasigurare pregatita dinainte. Cu cat pare
mai in treacat, cu atat dezarmeaza mai bine. (Se aplica oriunde atingi o frica/obiectie:
strecoar-o casual, nu solemn.)

TEST: "Am dezamorsat prin umor/exagerare sau promisiune-fapt (nu negare serioasa)?
Inversia intact (gluma de sus)? Zero ton de rugator?" Toate DA -> corect.
[DEZAMORSARE PRIN UMOR — OPTIONALA — ADN + VARIATII] ◆ END

CLIENT (exemplu): "Sigur, bine."

PAS 2 — INCHIDERE CALDA UMANA
⚠️ Dupa "da", NU mai faci persuasiune si NU repeta linia frame-ului din Pas 1.
Inchiderea NU e reasigurare defensiva ("fara presiune") si NU reia "iti faci o parere".
E scurta, calda, umana: confirmi intalnirea + bucurie reala. Auto-ironia ramane optionala,
doar pe relatie calda. Tonul: doi oameni care se bucura ca se vad, NU prezentare.

[ADN + VARIATII — INCHIDEREA] ◆ START
⚠️ Pas 2 = INCHIDERE CALDA UMANA. Dupa "da", ZERO persuasiune. Re-lucrarea clientului
la final redeschide indoiala — deci doar caldura umana.

ADN-ul inchiderii (OBLIGATORIU):
1. Scurt, cald, uman — confirmi intalnirea + bucurie reala
2. ZERO persuasiune repetata, ZERO "iti faci o parere", ZERO reasigurare defensiva
3. Auto-ironie = OPTIONALA, doar pe relatie calda (NU reflex de fiecare data)
4. [ziua] DOAR daca apare in input; altfel "ne vedem curand" / "stabilim si ne vedem"

VARIATII (genereaza propriu, NU copia, variaza):
- "Super, [Nume]. Ne vedem [ziua] atunci 😊."
- "Perfect. Atunci [ziua] — ma bucur tare 😊."
- "Gata, stabilit. Ne vedem [ziua], [Nume] 😊."
- "Ma bucur, [Nume]. Pe [ziua], atunci 😊."

AROMA OPTIONALA (doar relatie calda, daca tonul cere — NU obligatoriu):
- "Abia astept [ziua] 😊 — desi tu o sa-mi gasesti nod in papura, ca de obicei."

INCHIDE APELUL. NU MAI ADAUGA NIMIC.
[ADN + VARIATII — INCHIDEREA] ◆ END

INCHIDE APELUL. NU MAI ADAUGA NIMIC.

[REGULA-CHECKPOINT — SIGILAREA MOMENTELOR-CHEIE] ◆ START
La FINALUL fiecarui moment de invitatie / propunere / micro-commitment / cerere
de angajament, VERIFICA:

"Replica se termina cu o intrebare care cere angajament (intrebarea-NU /
falsa dihotomie), sau cu o afirmatie plata?"

- AFIRMATIE ("...decizi dupa ce vezi", "...ramane valabil") -> REFORMULEAZA ca intrebarea-NU
- intrebarea-NU = invita un "Nu" care de fapt confirma ("Oare ai refuza...?",
  "Crezi ca ar fi o idee gresita...?")

PRINCIPIU: Momentele-cheie se SIGILEAZA cu o intrebare de angajament, niciodata
cu o afirmatie deschisa. Afirmatie plata = moment deschis = angajament pierdut.
[REGULA-CHECKPOINT — SIGILAREA MOMENTELOR-CHEIE] ◆ END

D) NOTA FINALA DE LIVRARE — 4 SECTIUNI (TOTAL 120-150 CUVINTE):
1. RISCUL MAJOR (1-2 fraze, max 40 cuvinte) — singura greseala care distruge apelul
2. MOMENTUL DE AUR (1-2 fraze, max 40 cuvinte) — punctul concret care decide castig/pierdere
3. PRINCIPIUL DE INTERNALIZARE (1-2 fraze, max 40 cuvinte) — mantra mentala, cum sa te simti
4. ATENTIONARE FINALA (1 fraza, max 25 cuvinte) — ultimul reminder concret

REGULI:
- Sectiune >40 cuvinte -> prea descriptiv, taie
- Sectiune care repeta scriptul -> elimina
- Fiecare fraza = UN insight ACTIONABLE

E) REZUMAT STRUCTURA APEL (tabel: Etapa | Durata | Tehnica | Obiectiv)

REGULI ABSOLUTE — V1.8.8 (set unic)
1. NU mentiona autorii tehnicilor (Voss, Cialdini, Achor, etc.) -> numeste tehnica, nu autorul
2. NU eticheta pauzele cu jargon academic -> CORECT: [ PAUZA 2s ⏸️ ]
3. BLACKLIST LINGVISTIC:
   - "oportunitate", "venit pasiv", "succes garantat", "incredibil", "fantastic",
     "extraordinar", "trebuie sa vezi asta", "nu ai nimic de pierdut", "esti primul"
   - Call order: "primul", "inainte de oricine", "doar pe tine", "te-am sunat primul"
   - PRESIUNE DE DECIZIE: "decizie", "decizi", "sa decizi", "ia o decizie", "datele"
     -> inlocuieste cu: "vezi cu ochii tai", "vezi tu", "ma verifici", "evaluezi", "cum ti se pare"
   - APELATIVE FAMILIARE: "ba", "ma" (ca apelativ), "frate", "fratioare", "nene"
     -> INTERZISE in replicile AGENT, EXCEPTIE daca {{26_stil_abordare}} declara EXPLICIT
        ca acesta e stilul agentului (ex: "vorbesc relaxat, cu «ba»/«frate»").
        Daca stilul NU e declarat -> registru cald dar RESPECTUOS, fara apelative
        familiare presupuse. NU presupune registrul de limbaj — foloseste doar ce
        e in input. Implicit: adresare directa pe nume, fara apelativ.
4. BLACKLIST FRAZE GATA-FACUTE: "Da, stiu cum e aia", "Te inteleg perfect"
   (fara experienta comuna), "Cu siguranta", "Asta e o intrebare grozava",
   "Hai sa vorbim onest", "Lasa-ma sa te intreb ceva"
5. CLIENT (exemplu) — niciodata "raspuns asteptat". Raspunsul e MODEL, nu garantie.
6. FORMAT REPLICI AGENT: instructiune vocala INTRE "AGENT" si replica (paranteza),
   persoana 2-a, actional, scurt. NICIODATA marcaj la sfarsit.
7. POZITIONAREA CLIENTULUI ca decident: "sa-mi pui intrebarile care conteaza pentru
   tine", "sa ma verifici", "sa vezi cu ochii tai". INTERZIS: "sa asculti ce am eu".
8. NO-ORIENTED QUESTIONS: 15-20 cuvinte. Verbe: "Te-ar deranja daca...",
   "Crezi ca ar fi o idee gresita sa...", "Ai considera nepotrivit daca..."
9. KB OBLIGATORIU pentru Opening (cele 6 master). Niciodata opening generic.
   Cifra din opening = TEMPORALA, niciodata cifra de produs (Regula #49).
10. INVERSIA obligatoriu pentru profil EXPERT (Etapa 5-6) — EXCEPTIE: la
    prezentare de grup ({{11_tip_prezentare}} contine "grup") Inversia se STINGE;
    folosesti FRAME G1/G2 (vezi GATE tip prezentare in Etapa 5-6).
11. STIL COACH MODE: max 2 fraze per insight. Verbe de actiune. Fara jargon academic.
12. UX SCRIPT (Regula #47): instructiunile = verbe concrete + "DACA X -> fa Y" + exemple.
    INTERZIS in instructiuni: "flow", "zona", "prevaleaza", "valideaza" (jargon).
13. ADN + VARIATII pentru momentele creative — STANDARD GLOBAL (Regula #50):
    genereaza propriu din ADN, NU copia exemplele, variaza de fiecare data.
    Tehnica #46 (curiozitate), inocularea si micro-commitment-ul NU mai sunt fixe ca
    formulare — variaza deschizatorul / cuvantul-forma / numarul {3,4,5} min.
    FIX raman doar marcajele vocale + structura de format. Test: "schimb cuvintele ->
    pierd efectul?" DA = fix, NU = variatii.
14. NU INVENTA pasi/etape/sectiuni (Regula #51). Structura e fixa.
15. Cifrele de produs apar O SINGURA DATA, in Etapa 4 Pas 2 (Regula #49 + #48 BIS).
    Niciodata in deschidere, niciodata de doua ori.
16. Genereaza scriptul EXCLUSIV in limba romana, natural si autentic.
17. CALIBRARE VECHIME CONTACT (Regula #54): citeste {{20_vechime_contact}}.
    T1=fara limbaj de gap, compliment-intai; T2=reconectare calibrata (pe cateva luni); T3=reconectare-first.
    La T2/T3: CONVERSATIE-INTAI — 3-5 min conversatie reala INAINTE de compliment (zona
    dintre Etapa 1 si Etapa 2), complimentul construit din ea. Limbaj de gap DOAR T2/T3, niciodata inventat.
18. FIREWALL experienta agentului (Regula #55): simptomele/cifrele din {{09_experienta_produs}} =
    viata AGENTULUI, niciodata atribuite clientului (nici ipotetic, nici prin «aia»).
    Ancora centrala din {{04_detalii_client}} sau cadru universal. Anti-halucinatia
    acopera si NOTA DE CALIBRARE, nu doar replicile vorbite.
19. BLACKLIST STRUCTURAL OPENING (Regula #56): in Etapa 1 INTERZIS tiparul de pitch
    MLM (anunt de noutate / descoperire / produs / oportunitate), chiar fara cuvinte
    de pe blacklistul lexical. Deschiderea = mecanismul KB (vulnerabilitate / relatie),
    produsul abia in Etapa 4. «ce am descoperit» ramane permis in Etapa 5-6.
20. AUTENTICITATE (Regula #57): agentul spune DOAR ce e adevarat. INTERZIS
    spontaneitate fabricata ("tot vorbind cu tine mi-a venit"), selectie/specialitate
    falsa ("de-aia m-am gandit la tine", "esti omul potrivit"), negarea unei intentii
    reale ("n-o sa-ti vand nimic"). Inoculezi FORMA (numesti forma — cuvant variabil), nu intentia.
    Test: "ar zice-o unui prieten, stiind ca e adevarat?"
21. ETAPA 3 = TRANZITIE O2 (micro-commitment): bucla deschisa onesta -> inoculare pe
    forma (cuvant variabil) -> micro-commitment (numar mic {3,4,5} min + out real) ->
    curge in confesiune. FARA intrebare de identitate, FARA "exact asa te stiam".
    Registru jucaus la cald, respectuos la formal. Permisiunea se ia AICI (nu se mai
    cere in Etapa 4).
22. REFRAME SENZORIAL TURISTIC: DOAR daca {{30_categorie_produs}} = "Vacante"
    (fallback: {{07_produs}} clar turistic). Atunci produsul se prezinta ca experienta
    senzoriala (evadare), nu ca insiruire de caracteristici (Etapa 4 Pas 2 + Etapa 5-6).
    Ancorat in {{04_detalii_client}}, fara presupuneri (Regula #55), fara intrebare
    de decizie sau close paralel (Regula #51). Alta categorie -> ignora.

Urmeaza TOATE regulile din System Prompt V1.8.8.
Genereaza output-ul EXCLUSIV in limba romana.
