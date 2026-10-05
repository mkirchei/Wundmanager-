/*
 * Thema: Gefäßsysteme & Gefäßerkrankungen
 * Quelle: murimed-Lernheft (Seitenangaben beziehen sich auf das Heft).
 * Inhalte übernommen aus "Zusammenfassung_Gefaesserkrankungen.pdf" und
 * "Lernkarten_Gefaesserkrankungen.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "gefaesse",
  titel: "Gefäßsysteme & Gefäßerkrankungen",
  kurz: "Gefäße",
  quelle: "murimed-Lernheft",
  hinweis:
    "Quelle ist ausschließlich das Lernheft; Seitenzahlen in Klammern. Die im Heft zitierten Primärquellen wurden nicht separat geprüft.",

  karten: [
    { k: "Grundlagen", f: "Wie viel Prozent der chronischen Wunden haben eine Gefäßursache – und was folgt daraus?",
      a: "Über 70 % (v. a. pAVK, CVI).\nJede chronische Wunde muss auf eine Gefäßerkrankung abgeklärt werden. Ohne Kausaltherapie keine Abheilung (DGG 2022).", s: "S. 2, 33" },
    { k: "Grundlagen", f: "Welche drei Kreisläufe gibt es und was ist das Besondere am Pfortaderkreislauf?",
      a: "Lungenkreislauf, Körperkreislauf, Pfortaderkreislauf.\nPfortader: Blut durchströmt zwei Kapillargebiete (Bauchorgane, dann Leber); Venenblut enthält resorbierte Nährstoffe.", s: "S. 3–4" },
    { k: "Grundlagen", f: "Was ist die Windkesselfunktion?",
      a: "Arterien des elastischen Typs (herznah) wandeln die stoßweise Blutströmung am Aortenanfang in eine annähernd kontinuierliche Strömung um.", s: "S. 6" },
    { k: "Grundlagen", f: "Was sind Endarterien und wo kommen sie vor?",
      a: "Arterien ohne Anastomosen – bei Verschluss keine Umgehung möglich → Absterben des Gewebes.\nVorkommen: Herz, Lunge, Niere, Leber, Gehirn.", s: "S. 6" },
    { k: "Grundlagen", f: "Welche drei Wandschichten haben Blutgefäße? Wie sind Kapillaren aufgebaut?",
      a: "Externa (außen), Media (Mitte), Intima (innen).\nKapillaren: 4–30 µm, nur Intima (einschichtig) → Stoffaustausch.", s: "S. 5–6" },
    { k: "Grundlagen", f: "Flüssigkeitsbilanz der Kapillaren pro Tag?",
      a: "Ca. 20 l filtriert, ca. 18 l reabsorbiert; die restlichen 2 l gelangen als Lymphe über das Lymphgefäßsystem zurück.", s: "S. 7" },
    { k: "Grundlagen", f: "Was sind Anastomosen? (Übung II)",
      a: "Natürliche Verbindungen zwischen zwei Blut- oder Lymphgefäßen (z. B. arteriovenöse Anastomose) oder operativ angelegte Verbindungen von Hohlorganen bzw. Gefäßen (z. B. Shunt zur Hämodialyse).", s: "S. 34" },
    { k: "Grundlagen", f: "Wie ist das Lymphgefäßsystem aufgebaut und wohin mündet es?",
      a: "Halboffenes System ohne Pumporgan; Transport durch Gefäßmuskulatur, Pulsdruck, Atem- und Körperbewegung; Klappen.\nDuctus thoracicus → linke V. subclavia.", s: "S. 7–8" },

    { k: "Arteriell", f: "Beschreibe die Entstehung der Arteriosklerose.",
      a: "Wandverletzung (z. B. Hypertonie) → Monozyten → Makrophagen → Cholesterin → Schaumzellen → Plaques → Plaqueriss → Thrombozytenaggregation → Thrombus → ggf. Embolus.", s: "S. 8–9" },
    { k: "Arteriell", f: "Definition und Hauptursache der pAVK?",
      a: "Einschränkung der Durchblutung der Extremitätenarterien (seltener Aorta), graduell (Stenose) oder komplett (Okklusion).\nUrsache: Atherosklerose in ca. 95 %.", s: "S. 9" },
    { k: "Arteriell", f: "Nenne die Fontaine-Stadien der pAVK.",
      a: "I asymptomatisch\nIIa Gehstrecke > 200 m\nIIb Gehstrecke < 200 m\nIII ischämischer Ruheschmerz\nIV Ulcus, Gangrän", s: "S. 10" },
    { k: "Arteriell", f: "Warum heißt die pAVK „Schaufensterkrankheit“?",
      a: "Betroffene müssen wegen Schmerzen beim Gehen (Claudicatio intermittens) nach kurzen Strecken stehen bleiben.", s: "S. 10" },
    { k: "Arteriell", f: "Risikofaktoren der pAVK?",
      a: "Nikotinkonsum, Diabetes mellitus, Hypertonie, hohe Blutfettwerte, Übergewicht, Bewegungsmangel.", s: "S. 11" },
    { k: "Arteriell", f: "Welche Anzeichen deuten auf eine pAVK hin?",
      a: "Kühle, bleiche, marmorierte, trockene Haut; Gehschmerz (Wade, Oberschenkel, Gesäß); starke Verhornung der Fußsohlen; langsames Nagelwachstum; Verlust der Beinbehaarung; Erektionsstörungen; schlechte Wundheilung.", s: "S. 11" },
    { k: "Arteriell", f: "Wie wird der ABI bestimmt und ab wann liegt eine pAVK vor?",
      a: "Dopplerdruckmessung: ABI = syst. Blutdruck Knöchel ÷ syst. Blutdruck Arm.\nGesund ca. 1,0; ≤ 0,9 = pAVK.", s: "S. 12" },
    { k: "Arteriell", f: "Therapieoptionen bei pAVK?",
      a: "Risikofaktoren reduzieren; Gehtraining; ASS/Clopidogrel (alle Stadien); Cilostazol/Naftidrofuryl (Stad. II, < 200 m, wenn kein Gehtraining); Stent-Angioplastie, Thrombolyse; Thrombendarteriektomie, Bypass, Amputation (Ultima Ratio).", s: "S. 13" },
    { k: "Arteriell", f: "Prävalenz und Prognose der pAVK?",
      a: "3–10 % der < 70-Jährigen, 15–20 % der > 70-Jährigen.\nLebenserwartung ca. 10 Jahre kürzer, Sterblichkeit doppelt so hoch.", s: "S. 10–11" },

    { k: "Venös", f: "Welche Mechanismen sichern den venösen Rückfluss?",
      a: "Muskelpumpe (Fuß- und Beinmuskulatur) und Venenklappen (verhindern Rückfluss). Venen transportieren ca. 7.000 l Blut täglich.", s: "S. 14" },
    { k: "Venös", f: "Was ist die CVI und welche Ursachen hat sie?",
      a: "Sammelbegriff für fortgeschrittene Störungen des venösen Rückflusses.\nUrsachen: Varikosis, Phlebothrombose, Thrombophlebitis, posttraumatische Verletzungen, Angiodysplasie.", s: "S. 14" },
    { k: "Venös", f: "Phlebothrombose vs. Thrombophlebitis?",
      a: "Phlebothrombose: Verschluss einer tiefen Vene; Klappen bleiben geschädigt.\nThrombophlebitis: oberflächlich, entzündlich; roter, harter, schmerzhafter Strang; kann zu TVT/Lungenembolie führen.", s: "S. 14–15" },
    { k: "Venös", f: "Nenne die Widmer-Grade der CVI.",
      a: "I Corona phlebectatica, Phlebödem\nII Ödem, Dermatoliposklerose, Atrophie blanche, Purpura jaune d’ocre, Stauungsekzem\nIIIa abgeheiltes Ulcus\nIIIb florides Ulcus", s: "S. 16" },
    { k: "Venös", f: "Woran erkennt man ein Phlebödem?",
      a: "Delle bleibt nach Daumendruck auf das Schienbein (Pitting edema); meist unsymmetrisch; Haut im Sinne einer CVI verändert.", s: "S. 16" },
    { k: "Venös", f: "Hach-Stadien der Varikose?",
      a: "1 nur Mündungsklappe\n2 bis Mitte Oberschenkel\n3 bis unterhalb Knie\n4 bis Sprunggelenk", s: "S. 15", h: true },

    { k: "Lymphe", f: "Definition des Lymphödems?",
      a: "Chronisch entzündliche Erkrankung des Interstitiums als Folge einer primären (anlagebedingten) oder sekundären (erworbenen) Schädigung des Lymphdrainagesystems (Wilting 2017).\nEiweißreich, frühe Verhärtung.", s: "S. 17–18" },
    { k: "Lymphe", f: "Primäres vs. sekundäres Lymphödem?",
      a: "Primär: genetisch; meist einseitig; beginnt distal; bis spätestens 5. Lebensjahrzehnt.\nSekundär: nach OP, Lymphknotenentfernung, Bestrahlung, Tumor, Trauma, Adipositas, CVI; beginnt meist proximal.", s: "S. 18–21" },
    { k: "Lymphe", f: "Warum ist jedes Lymphödem krebsverdächtig?",
      a: "Der Lymphabfluss kann durch Lymphangiosis carcinomatosa (Tumorbefall der Lymphgefäße) und Lymphknotenbefall massiv behindert werden.", s: "S. 20" },
    { k: "Lymphe", f: "Nenne die Stadien des Lymphödems.",
      a: "0 latent, kein sichtbares Ödem\nI weich, spontan reversibel, Hochlagern hilft\nII verhärtet, nicht reversibel, Hochlagern hilft nicht\nIII deformierend hart, Elephantiasis", s: "S. 20" },
    { k: "Lymphe", f: "Wie wird das Stemmer-Zeichen ermittelt und wann ist es positiv?",
      a: "Hautfalte über dem 2./3. Zehen- bzw. Fingergrundgelenk anheben.\nPositiv, wenn sie sich nicht abheben lässt.", s: "S. 34" },
    { k: "Lymphe", f: "Was bedeutet „Stemmer nie falsch positiv“?",
      a: "Ein positives Zeichen beweist eine lymphatische Abflussstörung (Lymphostase). Ein negatives Zeichen schließt sie nicht aus (kann falsch negativ sein).", s: "S. 21–22, 34" },
    { k: "Lymphe", f: "Komplikationen des chronischen Lymphödems?",
      a: "Erysipel, Mykose; Lymphzysten, -fisteln, Papillomatose, Ulcera, Ekzeme; Fibrose; Formveränderungen; orthopädische Beschwerden; Angiosarkom, Stewart-Treves-Syndrom.\n„Lymphostase = Immunostase“", s: "S. 23" },
    { k: "Lymphe", f: "Komponenten der KPE?",
      a: "Hautpflege · manuelle Lymphdrainage · Kompression · entstauende Bewegungstherapie · Aufklärung/Schulung zur Selbsttherapie.\n2 Phasen: Entstauung, dann Erhaltung.", s: "S. 25–26" },

    { k: "Lipödem", f: "Typische Merkmale des Lipödems?",
      a: "Fast nur Frauen; Beginn Pubertät/Schwangerschaft/Menopause; symmetrisch; Hände und Füße frei; Druckschmerz; Hämatomneigung; Ödeme nehmen tagsüber zu; Stemmer negativ.", s: "S. 30" },
    { k: "Lipödem", f: "Stadien des Lipödems?",
      a: "1 glatte Haut, gleichmäßig verdickte Subkutis\n2 unebene, wellige Haut, Knoten\n3 Wammenbildung, häufig X-Beinstellung", s: "S. 29" },
    { k: "Lipödem", f: "Lipödem vs. Lymphödem – wichtigste Unterschiede?",
      a: "Lipödem: symmetrisch, Hände/Füße frei, Druckschmerz, Hämatome, Stemmer negativ.\nLymphödem: asymmetrisch, Zehen/Finger beteiligt, schmerzlos, Stemmer positiv.", s: "S. 21–30" },
    { k: "Lipödem", f: "Therapie des Lipödems?",
      a: "Symptomatisch (Ursache unbekannt): Kompression, MLD, IPK/AIK, Bewegung, Liposuktion. Sport/Diät helfen nicht gegen die typischen Fettpolster; Übergewicht verschlechtert den Verlauf.", s: "S. 26–32" }
  ],

  quiz: [
    { f: "Welcher Anteil aller chronischen Wunden hat laut Lernheft eine Gefäßursache?",
      o: ["Über 70 %", "Etwa 30 %", "Etwa 50 %", "Unter 10 %"],
      e: "Über 70 % aller chronischen Wunden haben eine Gefäßursache, vor allem pAVK und CVI.", s: "S. 2, 33" },
    { f: "Was ist die häufigste Ursache der pAVK?",
      o: ["Atherosklerose (ca. 95 %)", "Gefäßentzündungen (ca. 95 %)", "Angeborene Fehlbildungen (ca. 50 %)", "Venöse Insuffizienz"],
      e: "Ursache in ca. 95 % Atherosklerose; ca. 5 % Gefäßentzündungen oder angeborene Fehlbildungen.", s: "S. 9" },
    { f: "Ein Patient kann schmerzfrei nur noch etwa 150 m gehen. Welches Fontaine-Stadium liegt vor?",
      o: ["IIb", "IIa", "III", "I"],
      e: "IIa: Gehstrecke > 200 m · IIb: Gehstrecke < 200 m · III: ischämischer Ruheschmerz.", s: "S. 10" },
    { f: "Welches Fontaine-Stadium beschreibt den ischämischen Ruheschmerz?",
      o: ["III", "IIb", "IV", "IIa"],
      e: "Stadium III: Schmerzen in Ruhe, besonders im Liegen. Stadium IV: Ulcus, Gangrän.", s: "S. 10" },
    { f: "Wie wird der ABI (Knöchel-Arm-Index) berechnet?",
      o: ["Syst. Blutdruck Knöchel ÷ syst. Blutdruck Arm", "Syst. Blutdruck Arm ÷ syst. Blutdruck Knöchel", "Diast. Blutdruck Knöchel ÷ diast. Blutdruck Arm", "Syst. Blutdruck Knöchel − syst. Blutdruck Arm"],
      e: "Dopplerdruckmessung: ABI = syst. Druck Knöchel ÷ syst. Druck Arm.", s: "S. 12" },
    { f: "Ab welchem ABI-Wert liegt laut Lernheft eine pAVK vor?",
      o: ["≤ 0,9", "≤ 1,2", "≥ 1,0", "≤ 0,5"],
      e: "Gesund ca. 1,0; ≤ 0,9 = pAVK.", s: "S. 12" },
    { f: "Wann kommen Cilostazol oder Naftidrofuryl bei pAVK in Frage?",
      o: ["Stadium II bei Gehstrecke < 200 m, wenn Gehtraining nicht möglich ist", "In allen Stadien als Basistherapie", "Nur in Stadium IV vor einer Amputation", "Nur in Stadium I als Vorbeugung"],
      e: "ASS/Clopidogrel in allen Stadien; Cilostazol/Naftidrofuryl in Stadium II bei Gehstrecke < 200 m, wenn Gehtraining nicht möglich.", s: "S. 13" },
    { f: "Warum heißt die pAVK „Schaufensterkrankheit“?",
      o: ["Wegen Schmerzen beim Gehen (Claudicatio intermittens) müssen Betroffene nach kurzen Strecken stehen bleiben", "Weil die Haut an den Beinen glasig-durchscheinend wird", "Weil die Erkrankung meist zufällig bei Routineuntersuchungen auffällt", "Weil Betroffene nachts nur im Sitzen schlafen können"],
      e: "„Schaufensterkrankheit“ = Claudicatio intermittens.", s: "S. 10" },
    { f: "Wo kommen Endarterien vor?",
      o: ["Herz, Lunge, Niere, Leber, Gehirn", "Haut, Muskulatur, Fettgewebe", "Nur in den Extremitäten", "Nur im Pfortaderkreislauf"],
      e: "Endarterien haben keine Anastomosen → Verschluss führt zum Gewebstod.", s: "S. 6" },
    { f: "Welche Arterien übernehmen die Windkesselfunktion?",
      o: ["Herznahe Arterien vom elastischen Typ", "Periphere Arterien vom muskulären Typ", "Arteriolen", "Kapillaren"],
      e: "Elastischer Arterientyp (herznah): stoßweiser wird kontinuierlicher Fluss. Muskulärer Typ (peripher) regelt die Organdurchblutung.", s: "S. 6" },
    { f: "Wie viel Flüssigkeit fließt täglich als Lymphe ab?",
      o: ["Ca. 2 l", "Ca. 18 l", "Ca. 20 l", "Ca. 7.000 l"],
      e: "Täglich ca. 20 l filtriert, 18 l reabsorbiert, 2 l fließen als Lymphe ab.", s: "S. 7" },
    { f: "Wohin mündet der Ductus thoracicus?",
      o: ["In die linke V. subclavia", "In die rechte Herzkammer", "In die Pfortader", "In die V. cava inferior"],
      e: "Ductus thoracicus → linke V. subclavia.", s: "S. 7–8" },
    { f: "Welche Befunde gehören zum Widmer-Grad II der CVI?",
      o: ["Ödem, Dermatoliposklerose, Atrophie blanche, Purpura jaune d’ocre, Stauungsekzem", "Corona phlebectatica und Phlebödem", "Abgeheiltes Ulcus (Ulcusnarbe)", "Florides Ulcus"],
      e: "I: Corona phlebectatica, Phlebödem · II: Ödem, Dermatoliposklerose, Atrophie blanche, Purpura jaune d’ocre, Stauungsekzem · IIIa: abgeheiltes Ulcus · IIIb: florides Ulcus.", s: "S. 16" },
    { f: "Ein florides Ulcus cruris venosum entspricht welchem Widmer-Grad?",
      o: ["IIIb", "IIIa", "II", "I"],
      e: "IIIa = abgeheiltes Ulcus, IIIb = florides Ulcus.", s: "S. 16" },
    { f: "Was beschreibt eine Thrombophlebitis?",
      o: ["Oberflächliche Entzündung mit rotem, hartem, schmerzhaftem Strang", "Verschluss einer tiefen Beinvene", "Knäuelartig erweiterte oberflächliche Venen ohne Entzündung", "Ödem mit bleibender Delle nach Daumendruck"],
      e: "Thrombophlebitis (oberflächlich): roter, harter, schmerzhafter Strang; Übergang in TVT oder Lungenembolie möglich.", s: "S. 14–15" },
    { f: "Was sichert den venösen Rückfluss zum Herzen?",
      o: ["Muskelpumpe und Venenklappen", "Windkesselfunktion der Venen", "Der Ductus thoracicus", "Die Kontraktion der Kapillaren"],
      e: "Venen transportieren täglich ca. 7.000 l Blut zum Herzen; Hilfe durch Muskelpumpe und Venenklappen.", s: "S. 14" },
    { f: "Wo beginnt ein primäres Lymphödem typischerweise?",
      o: ["Distal, breitet sich nach oben aus", "Proximal, breitet sich nach unten aus", "Immer beidseitig symmetrisch an Oberschenkeln", "Am Rumpf"],
      e: "Primär: beginnt distal, breitet sich nach oben aus. Sekundär: beginnt meist proximal.", s: "S. 18–21" },
    { f: "Was trifft auf das Lymphödem-Stadium II zu?",
      o: ["Verhärtet, nicht spontan reversibel, Hochlagern hilft nicht", "Weich, spontan reversibel, Hochlagern hilft", "Latent, kein sichtbares Ödem", "Deformierend hart, Elephantiasis"],
      e: "0 latent · I weich, reversibel · II verhärtet, nicht reversibel · III deformierend hart, Elephantiasis.", s: "S. 20" },
    { f: "Was bedeutet ein positives Stemmer-Zeichen?",
      o: ["Es beweist eine lymphatische Abflussstörung (Lymphostase)", "Es schließt ein Lymphödem aus", "Es beweist ein Lipödem", "Es ist häufig falsch positiv und daher wenig aussagekräftig"],
      e: "Stemmer ist nie falsch positiv; ein negatives Zeichen schließt eine Lymphostase nicht aus (kann falsch negativ sein).", s: "S. 21–22, 34" },
    { f: "Warum gilt jedes Lymphödem als krebsverdächtig?",
      o: ["Wegen einer möglichen Lymphangiosis carcinomatosa", "Weil Lymphödeme immer durch Tumoren entstehen", "Weil der Stemmer-Test bei Krebs positiv wird", "Weil die KPE Tumoren auslösen kann"],
      e: "Der Lymphabfluss kann durch Tumorbefall der Lymphgefäße (Lymphangiosis carcinomatosa) und Lymphknotenbefall massiv behindert werden.", s: "S. 20" },
    { f: "Welche Maßnahme gehört NICHT zu den fünf Komponenten der KPE?",
      o: ["Liposuktion", "Manuelle Lymphdrainage", "Kompression", "Hautpflege"],
      e: "KPE: Hautpflege · manuelle Lymphdrainage · Kompression · entstauende Bewegungstherapie · Schulung zur Selbsttherapie.", s: "S. 25–26" },
    { f: "Welche Kombination passt zum Lipödem?",
      o: ["Symmetrisch, Hände und Füße frei, Druckschmerz, Stemmer negativ", "Asymmetrisch, Zehen beteiligt, schmerzlos, Stemmer positiv", "Einseitig, beginnt distal, Stemmer positiv", "Fast nur Männer, schmerzlos, keine Hämatomneigung"],
      e: "Lipödem: symmetrisch, Hände/Füße frei, Druckschmerz, Hämatomneigung, Stemmer negativ.", s: "S. 30" },
    { f: "Welche Maßnahme reduziert als einzige das krankhaft vermehrte Fettgewebe beim Lipödem?",
      o: ["Liposuktion", "Diät", "Sport", "Manuelle Lymphdrainage"],
      e: "Therapie rein symptomatisch; Sport/Diät helfen nicht gegen die typischen Fettpolster. Liposuktion ist die einzige Maßnahme, die das krankhaft vermehrte Fettgewebe reduziert.", s: "S. 26–32" },
    { f: "Welches Lipödem-Stadium zeigt Wammenbildung und häufig eine X-Beinstellung?",
      o: ["Stadium 3", "Stadium 2", "Stadium 1", "Stadium 0"],
      e: "1 glatte Haut · 2 wellige Haut mit Knoten · 3 Wammenbildung, häufig X-Beinstellung.", s: "S. 29" },
    { f: "Welche Prognose hat die pAVK laut Lernheft?",
      o: ["Lebenserwartung ca. 10 Jahre kürzer, Sterblichkeit doppelt so hoch", "Normale Lebenserwartung bei Gehtraining", "Lebenserwartung ca. 2 Jahre kürzer", "Sterblichkeit zehnfach erhöht"],
      e: "Prognose: Lebenserwartung ca. 10 Jahre kürzer, Sterblichkeit doppelt so hoch.", s: "S. 10–11" },
    { f: "Hach-Stadium 3 der Varikose bedeutet …",
      o: ["Insuffizienz bis unterhalb des Knies", "Nur die Mündungsklappe ist betroffen", "Insuffizienz bis Mitte Oberschenkel", "Insuffizienz bis zum Sprunggelenk"],
      e: "1: nur Mündungsklappe · 2: bis Mitte Oberschenkel · 3: bis unterhalb des Knies · 4: bis zum Sprunggelenk.", s: "S. 15", h: true }
  ],

  zusammenfassung: `
<h3>1. Kernaussage <span class="seite">S. 2, 33</span></h3>
<ul>
  <li>Über 70 % aller chronischen Wunden haben eine Gefäßursache, vor allem pAVK und CVI. Die Wunde ist nur das sichtbare Symptom.</li>
  <li>Jede chronische Wunde muss auf eine Gefäßerkrankung abgeklärt werden – je früher, desto besser.</li>
  <li>Ohne Kausaltherapie heilt keine chronische Wunde ab (DGG 2022).</li>
</ul>

<h3>2. Gesundes Gefäßsystem <span class="seite">S. 3–8</span></h3>
<ul>
  <li>Drei Kreisläufe:
    <ul>
      <li><b>Lungenkreislauf:</b> rechte Kammer → Lungenarterien → Gasaustausch → Lungenvenen → linker Vorhof.</li>
      <li><b>Körperkreislauf:</b> linke Kammer → Aorta → Kapillaren → Venen → Hohlvenen → rechter Vorhof.</li>
      <li><b>Pfortaderkreislauf:</b> Blut durchströmt zwei Kapillargebiete (Bauchorgane, dann Leber); Venenblut enthält zusätzlich resorbierte Nährstoffe.</li>
    </ul>
  </li>
  <li>Arterien führen vom Herzen weg (kleinste: Arteriolen), Venen zum Herzen (kleinste: Venolen), Kapillaren (4–30 µm, nur Intima) sind der Ort des Stoffaustauschs.</li>
  <li>Wandschichten: Externa, Media, Intima.</li>
  <li>Elastischer Arterientyp (herznah) → Windkesselfunktion: stoßweiser wird kontinuierlicher Fluss. Muskulärer Typ (peripher) regelt die Organdurchblutung.</li>
  <li>Endarterien haben keine Anastomosen → Verschluss führt zum Gewebstod (Herz, Lunge, Niere, Leber, Gehirn).</li>
  <li>Venen: dünnere Media, Venenklappen.</li>
  <li>Arteriovenöse Anastomosen umgehen die Kapillaren, z. B. zur Wärmeregulation.</li>
  <li>Flüssigkeitsbilanz: täglich ca. 20 l filtriert, 18 l reabsorbiert, 2 l fließen als Lymphe ab.</li>
  <li>Lymphsystem: halboffen, ohne Pumporgan; Transport über Gefäßmuskulatur, Pulsdruck, Atem- und Körperbewegung. Ductus thoracicus → linke V. subclavia. Lymphknoten bilden Lymphozyten.</li>
</ul>

<h3>3. Arteriosklerose <span class="seite">S. 8–9</span></h3>
<ul>
  <li>Verhärtung, Verdickung und Elastizitätsverlust der Arterien; klinisch meist synonym mit Atherosklerose.</li>
  <li>Ablauf: Wandverletzung (z. B. Hypertonie) → Monozyten → Makrophagen → mit Cholesterin beladen zu Schaumzellen → Plaques → Plaqueruptur → Thrombozytenaggregation → Thrombus → abgelöst als Embolus → Gefäßverschluss.</li>
  <li>Manifestationen: Herzinfarkt, Schlaganfall, pAVK.</li>
</ul>

<h3>4. pAVK <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 9–13</span></h3>
<ul>
  <li><b>Definition</b> (S3-Leitlinie): Durchblutungseinschränkung der Extremitätenarterien, seltener der Aorta; graduell (Stenose) oder komplett (Okklusion). Meist Becken- und Beinarterien.</li>
  <li><b>Ursache:</b> in ca. 95 % Atherosklerose; ca. 5 % Gefäßentzündungen oder angeborene Fehlbildungen.</li>
</ul>
<div class="tabelle"><table>
  <caption>Fontaine-Klassifikation (S. 10)</caption>
  <thead><tr><th>Stadium</th><th>Klinik</th><th>Folgen</th></tr></thead>
  <tbody>
    <tr><td>I</td><td>asymptomatisch</td><td>keine Beschwerden, meist Zufallsbefund</td></tr>
    <tr><td>IIa</td><td>Gehstrecke &gt; 200 m</td><td>leichte Claudicatio intermittens</td></tr>
    <tr><td>IIb</td><td>Gehstrecke &lt; 200 m</td><td>mäßige Claudicatio intermittens</td></tr>
    <tr><td>III</td><td>ischämischer Ruheschmerz</td><td>Schmerzen in Ruhe, besonders im Liegen</td></tr>
    <tr><td>IV</td><td>Ulcus, Gangrän</td><td>Gewebeuntergang, ggf. Amputation</td></tr>
  </tbody>
</table></div>
<ul>
  <li>„Schaufensterkrankheit“ = Claudicatio intermittens.</li>
  <li>Häufigkeit: 3–10 % der unter 70-Jährigen, 15–20 % der über 70-Jährigen.</li>
  <li>Prognose: Lebenserwartung ca. 10 Jahre kürzer, Sterblichkeit doppelt so hoch.</li>
  <li>Risikofaktoren: Nikotin, Diabetes mellitus, Hypertonie, hohe Blutfette, Übergewicht, Bewegungsmangel.</li>
  <li>Anzeichen: kühle, blasse, marmorierte, trockene Haut; Gehschmerz in Wade, Oberschenkel oder Gesäß; starke Verhornung der Fußsohlen; langsames Nagelwachstum; Verlust der Beinbehaarung; Erektionsstörungen; schlechte Wundheilung.</li>
  <li><b>Diagnostik:</b> Dopplerdruckmessung, ABI = syst. Druck Knöchel ÷ syst. Druck Arm. Gesund ca. 1,0; ≤ 0,9 = pAVK. Weitere: Ratschow-Lagerungsprobe, Ultraschall, Laufband, MRT, Angiographie, CT.</li>
  <li><b>Therapie:</b> Reduktion der Risikofaktoren (Lebensstil); regelmäßiges, lebenslanges Gehtraining; Thrombozytenaggregationshemmer (ASS, Clopidogrel) in allen Stadien; Cilostazol/Naftidrofuryl in Stadium II bei Gehstrecke &lt; 200 m, wenn Gehtraining nicht möglich; endovaskulär: Stent-Angioplastie, lokale Thrombolyse; operativ: Thrombendarteriektomie, Bypass, Amputation als Ultima Ratio.</li>
</ul>
<p class="warnung">S. 13: Im Druck steht, die pAVK sei Ursache des „Ulcus cruris venosum“. Handschriftlich zu „arteriosum“ korrigiert – die Korrektur ist fachlich richtig. Rund 15 % des Diabetischen Fußsyndroms gehen auf eine pAVK zurück.</p>

<h3>5. Venöse Erkrankungen <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 14–16</span></h3>
<ul>
  <li>Venen transportieren täglich ca. 7.000 l Blut zum Herzen; Hilfe durch Muskelpumpe und Venenklappen.</li>
  <li><b>CVI</b> = Sammelbegriff für fortgeschrittene Störungen des venösen Rückflusses. Ursachen:
    <ul>
      <li>Varikosis: oberflächliche Venen, knäuelartig erweitert, insuffiziente Klappen.</li>
      <li>Phlebothrombose (tiefe Beinvenenthrombose): Klappen bleiben nach Auflösung des Thrombus geschädigt.</li>
      <li>Thrombophlebitis (oberflächlich): roter, harter, schmerzhafter Strang; Übergang in TVT oder Lungenembolie möglich.</li>
    </ul>
  </li>
  <li>Folgen der CVI: Ödem, Juckreiz; später Ekzeme, Verhärtung, Braunverfärbung; unbehandelt Ulcus cruris venosum.</li>
</ul>
<div class="tabelle"><table>
  <caption>Widmer-Klassifikation der CVI (S. 16)</caption>
  <thead><tr><th>Grad</th><th>Klinik</th></tr></thead>
  <tbody>
    <tr><td>I</td><td>Corona phlebectatica (Fußrand), Phlebödem</td></tr>
    <tr><td>II</td><td>Ödem, Dermatoliposklerose, Atrophie blanche, Purpura jaune d’ocre, Stauungsekzem</td></tr>
    <tr><td>IIIa</td><td>abgeheiltes Ulcus (Ulcusnarbe)</td></tr>
    <tr><td>IIIb</td><td>florides Ulcus</td></tr>
  </tbody>
</table></div>
<ul>
  <li>Phlebödem: Auf Daumendruck bleibt eine Delle (Pitting edema); meist unsymmetrisch, Haut im Sinne einer CVI verändert.</li>
</ul>
<p class="hand">Nur handschriftlich als „Prüfungsfrage“ vermerkt, nicht im Drucktext: Hach-Stadien der Varikose – 1: nur Mündungsklappe betroffen · 2: bis Mitte Oberschenkel · 3: bis unterhalb des Knies · 4: bis zum Sprunggelenk.</p>

<h3>6. Lymphödem <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 17–26</span></h3>
<ul>
  <li><b>Definition</b> (Wilting 2017): chronisch entzündliche Erkrankung des Interstitiums infolge primärer oder sekundärer Schädigung des Lymphdrainagesystems. Eiweißreich, verhärtet früh.</li>
  <li><b>Primär:</b> genetische Fehlanlage (z. B. Aplasie, Hypoplasie, Lymphknotenfibrose); meist einseitig, meist erste Lebenshälfte, spätestens bis zum 5. Lebensjahrzehnt; beginnt distal, breitet sich nach oben aus.</li>
  <li><b>Sekundär:</b> z. B. Operation, Lymphknotenentfernung, Bestrahlung, maligne Prozesse, Trauma, Adipositas, fortgeschrittene CVI; beginnt meist proximal.</li>
  <li>Kompensation (sekundär): Nachbar-Lymphgefäße, Kollateralen, prälymphatische Kanäle, lympho-lymphatische und lympho-venöse Anastomosen, Makrophagen.</li>
  <li>Häufigkeit: ca. 120.000 Betroffene in Deutschland, ⅓ primär, ⅔ sekundär; in Industrieländern meist Tumor oder Krebs-OP als Ursache.</li>
</ul>
<p class="warnung">Jedes Lymphödem ist per se krebsverdächtig (mögliche Lymphangiosis carcinomatosa).</p>
<div class="tabelle"><table>
  <caption>Stadien des Lymphödems (S. 20)</caption>
  <thead><tr><th>Stadium</th><th>Klinik</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>latent, subklinisch, kein sichtbares Ödem</td></tr>
    <tr><td>I</td><td>weich, spontan reversibel, Hochlagern reduziert die Schwellung</td></tr>
    <tr><td>II</td><td>verhärtet, nicht spontan reversibel, Hochlagern hilft nicht</td></tr>
    <tr><td>III</td><td>deformierend hart („kautschukartig“), extreme Formveränderung (Elephantiasis), Hautveränderungen</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Stemmer-Zeichen:</b> Hautfalte über dem 2./3. Zehen- bzw. Fingergrundgelenk anheben – nicht abhebbar = positiv. Nie falsch positiv (positiv beweist Lymphostase), kann falsch negativ sein (z. B. proximaler Beginn).</li>
  <li>Weitere Merkmale: asymmetrisch, säulenförmige Deformität, Zehen/Finger beteiligt, unauffällige Hautfarbe, benigne Lymphödeme sind schmerzlos.</li>
  <li>Komplikationen: lokale Infekte (Erysipel, Mykose); Hautveränderungen (Lymphzysten, Fisteln, Papillomatose, Ulcera, Ekzeme); Fibrose; Entartung: Angiosarkom, Stewart-Treves-Syndrom. Merksatz: „Lymphostase = Immunostase“.</li>
  <li><b>Therapie:</b> Komplexe Physikalische Entstauungstherapie (KPE), 2 Phasen (Entstauung, dann Erhaltung) mit 5 Komponenten: Hautpflege · manuelle Lymphdrainage · Kompression · entstauende Bewegungstherapie · Schulung zur Selbsttherapie. Oft lebenslang.</li>
</ul>

<h3>7. Lipödem <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 26–32</span></h3>
<ul>
  <li>Fettverteilungsstörung, fast ausschließlich bei Frauen; Beginn in hormonellen Umbruchphasen (Pubertät, Schwangerschaft, Menopause).</li>
  <li>Merkmale (S. 30): symmetrisch; Hände und Füße frei, Kalibersprung; Druckschmerz, Hämatomneigung; Ödeme nehmen im Tagesverlauf zu; Stemmer negativ.</li>
  <li>Ursachen: weitgehend unbekannt; genetische Komponente in bis zu 60 % (DGP 2015). <span class="hand-inline">Die handschriftliche Notiz „90 %“ widerspricht dem Drucktext.</span></li>
  <li>Häufigkeit: Schätzungen 8–18 %, keine gesicherten Studiendaten.</li>
  <li>Übergewicht ist nicht die Ursache, verschlechtert aber den Verlauf.</li>
  <li>Stadien: 1 glatte Haut · 2 wellige Haut mit Knoten · 3 Wammenbildung, häufig X-Beinstellung.</li>
  <li>Typen: Beine: Oberschenkel-, Unterschenkel-, Ganzbeintyp · Arme: Oberarm-, Unterarm-, Ganzarmtyp.</li>
  <li>Komplikationen: dermatologisch (Mazeration, Infektionen), lymphatisch (Erysipel, Lipolymphödem), orthopädisch (Gangbild-, Achsenfehlstellungen).</li>
  <li><b>Therapie:</b> rein symptomatisch; Sport/Diät helfen nicht gegen die typischen Fettpolster. Kompression, MLD, IPK/AIK, Bewegung, Liposuktion (einzige Maßnahme, die das krankhaft vermehrte Fettgewebe reduziert).</li>
</ul>
<div class="tabelle"><table>
  <caption>Abgrenzung (S. 30) · + bis +++ vorhanden · (+) möglich · Ø nicht vorhanden</caption>
  <thead><tr><th>Merkmal</th><th>Lipödem</th><th>Lipohypertrophie</th><th>Adipositas</th><th>Lymphödem</th></tr></thead>
  <tbody>
    <tr><td>Fettvermehrung</td><td>+++</td><td>+++</td><td>+++</td><td>(+)</td></tr>
    <tr><td>Disproportion</td><td>+++</td><td>+++</td><td>(+)</td><td>+</td></tr>
    <tr><td>Ödem</td><td>+++</td><td>Ø</td><td>(+)</td><td>+++</td></tr>
    <tr><td>Druckschmerz</td><td>+++</td><td>Ø</td><td>Ø</td><td>Ø</td></tr>
    <tr><td>Hämatomneigung</td><td>+++</td><td>(+)</td><td>Ø</td><td>Ø</td></tr>
  </tbody>
</table></div>
`
});
