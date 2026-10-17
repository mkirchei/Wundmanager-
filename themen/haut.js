/*
 * Thema: Erkrankungen der Haut
 * Quelle: murimed-Kursheft Wundexperte Modul I (Seitenangaben beziehen sich auf das Heft).
 * Inhalte übernommen aus "Zusammenfassung_Hauterkrankungen.pdf" und
 * "Lernkarten_Hauterkrankungen.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "haut",
  titel: "Erkrankungen der Haut",
  kurz: "Haut",
  quelle: "murimed-Kursheft Wundexperte Modul I",
  hinweis:
    "Quelle ist ausschließlich das Kursheft; Seitenzahlen in Klammern. Die im Heft zitierten Primärquellen wurden nicht separat geprüft.",

  karten: [
    { k: "Aufbau", f: "Wie groß und schwer ist die Haut und aus welchen drei Schichten besteht sie?",
      a: "1,5–2 m², 7–10 kg – größtes Organ.\nEpidermis (Oberhaut), Dermis/Corium (Lederhaut), Subcutis/Hypodermis (Unterhaut).\nDazu Adnexorgane: Haare, Nägel, Drüsen.", s: "S. 3", sp: ["haut: Aufbau der Haut"] },
    { k: "Aufbau", f: "Nenne die Schichten der Epidermis von außen nach innen – deutsch und lateinisch.",
      a: "Hornschicht – Stratum corneum\nGlanzschicht – Stratum lucidum\nKörnerzellschicht – Stratum granulosum\nStachelzellschicht – Stratum spinosum\nBasalzellschicht – Stratum basale", s: "S. 4–5", sp: ["haut: Aufbau der Epidermis"] },
    { k: "Aufbau", f: "Wo kommt das Stratum lucidum vor?",
      a: "Nur an Handflächen und Fußsohlen. 1–2 Lagen kernloser Keratinozyten.", s: "S. 4", sp: ["haut: Aufbau der Epidermis"] },
    { k: "Aufbau", f: "Was sind Langerhans-Zellen und wo liegen sie?",
      a: "Aus dem Knochenmark stammende Immunzellen in der Stachelzellschicht; ca. 4,5 % der Epidermiszellen, bis 4 Monate Lebensdauer; fangen Pathogene und Antigene ab („Wachposten des Immunsystems“).", s: "S. 4", sp: ["haut: Def. Langerhanszellen"] },
    { k: "Aufbau", f: "Welche Aufgabe hat die Basalzellschicht?",
      a: "Keimzellen teilen sich alle 200–400 h → Regeneration der Epidermis; Wundverschluss geht von hier aus. Enthält Merkelzellen (mechanische Reize).", s: "S. 5", sp: ["haut: Aufbau der Epidermis"] },
    { k: "Aufbau", f: "Wie lange dauert die Erneuerung der Epidermis?",
      a: "27–30 Tage; bei Menschen ab 65 Jahren 5–7 Wochen.\nHandschriftlich: 28 Tage jung, 45–49 Tage alt.", s: "S. 4", h: true },
    { k: "Aufbau", f: "Aus welchen Schichten besteht die Dermis und was enthält sie?",
      a: "Stratum papillare (Zapfenschicht) und Stratum reticulare (Geflechtschicht).\nCa. 70 % Kollagenfasern; Retikulin- und Elastanfasern, Haare, Duft-, Schweiß-, Talgdrüsen, Nervenzellen, Nägel.", s: "S. 6", sp: ["haut: Aufbau der Dermis"] },
    { k: "Aufbau", f: "Welche Schicht sorgt für Elastizität und Stabilität der Haut?",
      a: "Das Stratum reticulare (Geflechtschicht) durch verflochtene Kollagenfasern; die Matrix enthält viel Hyaluron.", s: "S. 6", sp: ["haut: Aufbau der Dermis"] },
    { k: "Aufbau", f: "Was ist der Hautturgor und wie wird er getestet?",
      a: "Spannungszustand der Haut (abhängig von Flüssigkeitsgehalt).\nTest: Hautfalte zwischen Daumen und Zeigefinger – bleibt sie stehen, ist der Turgor vermindert → mögliche Exsikkose.", s: "S. 7", sp: ["haut: Def. Hauttugor"] },
    { k: "Aufbau", f: "Funktionen der Subcutis?",
      a: "Verschiebbarkeit der Haut, Fettspeicher, Druckpolster, Wärmeisolation. Keine klare Grenze zur Dermis.", s: "S. 7", sp: ["haut: Aufbau der Subcutis"] },
    { k: "Aufbau", f: "Leistenhaut vs. Felderhaut?",
      a: "Leistenhaut: unbehaart, Hohlhand/Fußsohle, Schweißdrüsen, keine Talgdrüsen, Fingerabdruck.\nFelderhaut: ca. 96 % der Haut, behaart, Schweiß- und Talgdrüsen, rhombische Felder.", s: "S. 8–9", sp: ["haut: Def. Leistenhaut", "haut: Def. Felderhaut"] },

    { k: "Funktion", f: "Nenne die Funktionen der Haut.",
      a: "Schutz (mechanisch, chemisch, thermisch, Erreger), Lichtabsorption, Temperaturregulation, Wasserhaushalt, Sinneswahrnehmung, Kommunikation, Pheromone, Wundheilung.", s: "S. 9", sp: ["haut: Funktionen der Haut"] },
    { k: "Funktion", f: "Was ist der Säureschutzmantel?",
      a: "Hydrolipidfilm auf der Hornschicht, pH ca. 5,5, aus Schweiß, Fettsäuren, Cholesterin und Talg; schützt vor Bakterien und Erregern.", s: "S. 9" },
    { k: "Funktion", f: "Wie verändert sich die Haut im Alter?",
      a: "Atrophie (dünneres Fettgewebe und Papillarschicht), weniger Turgor, Wasserspeicher und Kollagen, mehr Pigmentierung, weniger Schweiß/Talg → trocken.\nFolge: höheres Verletzungsrisiko, langsamere Wundheilung.", s: "S. 10", sp: ["haut: Was gibt es für altersbedingte Hautveränderungen?"] },

    { k: "Pflege", f: "Welche Reinigungsmittel eignen sich für gesunde Haut?",
      a: "Hautneutrale, leicht saure, zusatzstofffreie Syndets mit Feuchthaltefaktoren (z. B. Urea). Alkalische Seifen greifen den Säureschutzmantel an.", s: "S. 12", sp: ["haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?"] },
    { k: "Pflege", f: "Öl-in-Wasser vs. Wasser-in-Öl?",
      a: "O/W: Öltröpfchen in Wasser, ca. 60 % Wasser, Feuchtigkeit verdunstet.\nW/O: Wassertröpfchen in Öl, bildet Fettfilm, luftdurchlässig → für trockene Haut und Altershaut.", s: "S. 12, 14", sp: ["haut: Was gibt es für Hautpflegeprodukte?"] },
    { k: "Pflege", f: "Faustregel für Hautpflegeprodukte?",
      a: "Feucht auf feucht, fett auf trocken.\nFeuchte Haut → hydrophile Produkte (Lotionen); trockene Haut → hydrophobe Salben.", s: "S. 15", sp: ["haut: Was gibt es für Hautpflegeprodukte?"] },
    { k: "Pflege", f: "Welche Produkte eignen sich nicht zur täglichen Pflege – und warum keine Pasten am Wundrand?",
      a: "Salben, Puder, Pasten nur therapeutisch.\nPasten decken ab → die Haut kann nicht mehr kontrolliert werden.", s: "S. 14", sp: ["haut: Was gibt es für Hautpflegeprodukte?", "haut: Welche Hautschutz- und Hautpflegemaßnahmen sind ungeeignet?"] },
    { k: "Pflege", f: "Wie schützt man den Wundrand vor Mazeration?",
      a: "Transparente Hautschutzfilme (Applikator, Spray, Tuch, Creme); ggf. Transparentfolie, dünner Hydrokolloidverband, Hydrofaser, Stomapaste/-modellierstreifen.", s: "S. 15", sp: ["haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?"] },
    { k: "Pflege", f: "Welche Maßnahmen sind ungeeignet oder schädlich?",
      a: "Salben/Pasten in offene Wunden reiben; Zusatz-/Parfümstoffe; Alkohol (Franzbranntwein); abdichtende Pasten; Fette und Öle (Melkfett, Babyöl); Puder; Massieren gefährdeter Stellen.", s: "S. 16", sp: ["haut: Welche Hautschutz- und Hautpflegemaßnahmen sind ungeeignet?"] },
    { k: "Pflege", f: "Was ist bei Pergament-, Kortison- oder Altershaut zu beachten?",
      a: "Silikonbeschichtete Wundauflagen oder unbeschichtete Hydrogelkompressen – keine Wundauflagen mit Kleberand.", s: "S. 15", sp: ["haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?"] },

    { k: "Schleimhaut", f: "Wodurch unterscheidet sich Schleimhaut von Haut und wo kommt sie vor?",
      a: "Keine Hornschicht, keine Haare; Schleim aus Becherzellen. Mind. zwei Schichten (Epithel, Lamina propria).\nAtemwege, Bindehaut, Mittelohr, Geschlechtsorgane, Harnwege, Verdauungskanal.", s: "S. 16" },
    { k: "Schleimhaut", f: "Wie ist die Gefäßversorgung der Haut aufgebaut?",
      a: "Drei arterielle und venöse Gefäßgebiete übereinander; Kapillarschlingen der Papillen versorgen die gefäßlose Epidermis; viele arteriovenöse Anastomosen (Blutdruck, Wärmeregulation).", s: "S. 17", sp: ["haut: Wie ist die Gefäßversorgung in der Haut?"] },

    { k: "Infektion", f: "Was ist ein Erysipel? (Erreger, Klinik, Komplikationen)",
      a: "Akute bakterielle Infektion der Dermis durch β-hämolysierende Streptokokken Gruppe A; häufigste Komplikation des chronischen Lymphödems.\nKlar begrenzte, schmerzhafte, überwärmte Rötung, Fieber.\nKomplikationen: Sepsis, Lymphödem.", s: "S. 20", sp: ["haut: Beispiel für bakterielle Infektionskrankheit der Haut"] },
    { k: "Infektion", f: "Erysipel vs. Phlegmone?",
      a: "Phlegmone ist schwerer: einschmelzende Entzündung von Dermis und Subcutis, Strepto-/Staphylokokken, diffus abszedierend, Fisteln, Nekrosen, Sepsis. Ein Erysipel kann in eine Phlegmone übergehen.", s: "S. 20", sp: ["haut: Beispiel für bakterielle Infektionskrankheit der Haut"] },
    { k: "Infektion", f: "Erreger und klinische Merkmale des Gasbrands?",
      a: "Clostridien (anaerob), Inkubation 5–48 h.\nÖdem, plötzlicher Wundschmerz, gelbbraun bis blauschwarz, Knistern (Crepitatio), wenig Eiter, kaum Fieber, schneller Puls, fadsüßlicher Geruch.", s: "S. 20–21", sp: ["haut: Beispiel für bakterielle Infektionskrankheit der Haut"] },
    { k: "Infektion", f: "Was ist ein Panaritium?",
      a: "Eitrige Entzündung der Finger (selten Zehen) nach Bagatellverletzung; gerötet, pulsierend, druckschmerzhaft. Frühzeitige operative Entlastung.", s: "S. 21", sp: ["haut: Beispiel für bakterielle Infektionskrankheit der Haut"] },
    { k: "Infektion", f: "Wie entsteht Herpes zoster und was ist eine Folge?",
      a: "Reaktivierung des Varizella-zoster-Virus aus Nervenzellen; brennender Schmerz, halbseitige bandartige Bläschen im Dermatom.\nFolge: postherpetische Neuralgie.", s: "S. 22", sp: ["haut: Beispiel für Virusinfektion der Haut"] },
    { k: "Infektion", f: "Was ist eine Mykose und was begünstigt Onychomykose?",
      a: "Pilzinfektion (Dermatophyten, Schimmel-, Hefepilze) von Haut, Schleimhaut, Nägeln oder systemisch.\nOnychomykose: vorgeschädigte Nägel, enge Schuhe, Durchblutungsstörungen.", s: "S. 22" },
    { k: "Infektion", f: "Kennzeichen der Psoriasis?",
      a: "Chronisch-entzündlich, polygen vererbt; symmetrische, scharf begrenzte rote Papeln und Plaques mit silbrig-weißer Schuppung; Beginn in 50 % vor dem 25. Lebensjahr.", s: "S. 23" },

    { k: "Tumoren", f: "Neoplasie vs. Tumor? (Übung II)",
      a: "Neoplasie: autonome Gewebeneubildung (benigne, semimaligne, maligne).\nTumor: jede örtliche Zunahme des Gewebevolumens (Schwellung) – weiter gefasst.", s: "S. 33" },
    { k: "Tumoren", f: "Was ist eine aktinische Keratose?",
      a: "In-situ-Karzinom, Vorstufe des Plattenepithelkarzinoms; lichtexponierte Stellen, hellhäutige Menschen, meist ab 60; raue, scharf begrenzte, rötliche Herde, später Krusten; meist kein Jucken.", s: "S. 24–25" },
    { k: "Tumoren", f: "Kennzeichen des Basalzellkarzinoms?",
      a: "Häufigster maligner Tumor Mitteleuropas; lokal zerstörend, metastasiert äußerst selten. Perlschnurartiger Saum mit Teleangiektasien.\nTherapie: vollständige operative Entfernung.", s: "S. 25–26" },
    { k: "Tumoren", f: "Melanom: Bedeutung und Typen?",
      a: "Höchste Metastasierungsrate, > 90 % der Hauttumor-Todesfälle.\nSuperfiziell spreitend ca. 60 %, nodulär ca. 20 %, Lentigo-maligna ca. 10 %, akrolentiginös ca. 5 %.", s: "S. 26" },
    { k: "Tumoren", f: "Erkläre die ABCD-Regel.",
      a: "A – Asymmetrie\nB – Begrenzung unscharf\nC – Color, Mehrfarbigkeit\nD – Dynamik, Veränderung\nHandschriftlich: E – Erhabenheit.", s: "S. 27", h: true, sp: ["haut: Was ist die A-B-C-D-Regel?"] },
    { k: "Tumoren", f: "Risikofaktoren des Plattenepithelkarzinoms?",
      a: "Hohe UV-Dosis, chronische oder infizierte Wunden, Hauterkrankungen, Verbrennungsnarben, strahlengeschädigte Haut, Dauerreizung, Immunsuppression.", s: "S. 27" },

    { k: "Innere", f: "Gicht: Ursache, typische Lokalisation, Therapie?",
      a: "Purinstoffwechselstörung mit Harnsäureablagerung; akuter Anfall nachts, meist Großzehengrundgelenk.\nRuhigstellung, kalte Umschläge, NSAR, Glukokortikoide, Colchicin, ggf. Canakinumab.", s: "S. 28", sp: ["haut: Beispiel für Hauterscheinungen bei Krankheiten innerer Organe und Stoffwechselstörungen"] },
    { k: "Innere", f: "Was kennzeichnet das Pyoderma gangraenosum?",
      a: "Neutrophile Dermatose, oft mit CED oder Neoplasien; schmerzhafte Pustel nach Bagatelltrauma → rasch nekrotisches Geschwür; Rand unterminiert, livide, scharf begrenzt.", s: "S. 29", sp: ["haut: Beispiel für Hauterscheinungen bei Krankheiten innerer Organe und Stoffwechselstörungen"] },

    { k: "MARSI", f: "Was bedeutet MARSI und welche Schäden gehören dazu?",
      a: "Medical Adhesive-Related Skin Injuries.\nEpidermales Stripping, Spannungsblasen, Skin Tears, toxisches und allergisches Kontaktekzem, Mazeration, Follikulitis.", s: "S. 30–31", sp: ["haut: Welche Hautschädigungen durch Verbandmittel können entstehen?"] },
    { k: "MARSI", f: "Wie vermeidet man Spannungsblasen?",
      a: "Dehnbare Produkte nicht unter Spannung anbringen; an Gelenken in Beugung anlegen; faltenfrei applizieren.", s: "S. 30", sp: ["haut: Welche Hautschädigungen durch Verbandmittel können entstehen?"] },
    { k: "MARSI", f: "Toxisches vs. allergisches Kontaktekzem durch Verbandmittel?",
      a: "Toxisch: klar begrenzt, deckungsgleich mit dem Verband.\nAllergisch: gerötet, juckend, nässend, Bläschen, über die Auflagefläche hinaus.", s: "S. 31", sp: ["haut: Welche Hautschädigungen durch Verbandmittel können entstehen?"] },
    { k: "MARSI", f: "Skin-Tear-Kategorien?",
      a: "I – kein Gewebeverlust, Lappen repositionierbar\nII – teilweiser Verlust des Hautlappens\nIII – vollständiger Hautlappenverlust", s: "S. 31", sp: ["haut: Welche Hautschädigungen durch Verbandmittel können entstehen?"] },
    { k: "MARSI", f: "Versorgung eines Skin Tears in 4 Schritten?",
      a: "1. Blutung mit sterilen Kompressen stillen\n2. sanft mit NaCl 0,9 % oder Wundspüllösung reinigen\n3. Hautlappen repositionieren (sterile Pinzette)\n4. mit silikonbeschichteten, nicht klebenden Verbandmitteln fixieren", s: "S. 31" },
    { k: "MARSI", f: "Wie beugt man Follikulitis vor?",
      a: "Haare mit elektrischer Haarschneidemaschine kürzen statt rasieren; Verbandmittel immer in Haarwuchsrichtung abziehen.", s: "S. 31", sp: ["haut: Welche Hautschädigungen durch Verbandmittel können entstehen?"] },
    { k: "Folien", f: "Welche Funktion haben die einzelnen Hautanhangsgebilde?",
      a: "Haare: mechanischer Schutz, Temperaturregulation\nNägel: Schutz der Finger-/Zehenspitzen, Greifen\nSchweißdrüsen: Temperaturregulation, Ausscheidung\nTalgdrüsen: Hautfett für den Säureschutzmantel", s: "Foliensatz Haut" },
    { k: "Folien", f: "Wie wird der Hautfaltentest beurteilt?",
      a: "Hautfalte (z. B. Handrücken) zusammenkneifen und loslassen. Normal: glättet sich sofort bzw. in 1–2 s. Bleibt sie länger → verminderter Turgor (Dehydration, Alter, Gewichtsverlust).", s: "Foliensatz Haut", sp: ["haut: Def. Hauttugor"] },
    { k: "Folien", f: "Welche Aufgaben haben die Bestandteile des Säureschutzmantels?",
      a: "Schweiß: wässriger Anteil mit Salzen\nFettsäuren: antimikrobiell\nCholesterin: stabilisiert die Barriere\nTalg: Geschmeidigkeit, Wasserschutz", s: "Foliensatz Haut" },
    { k: "Folien", f: "Was bedeuten sebostatisch und seborrhoisch – und wie pflegt man?",
      a: "Sebostatisch = trocken: W/O-Produkte + Urea.\nSeborrhoisch = fettig: milde Syndets, wässrige O/W-Produkte.", s: "Foliensatz Haut", sp: ["haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?"] },
    { k: "Folien", f: "Panaritium: Formen und Therapie?",
      a: "Cutaneum – Abtragung und Inspektion\nSubcutaneum – seitliche Inzision\nTendinosum (Sehnenscheide) – sofortige operative Eröffnung", s: "Foliensatz Haut", sp: ["haut: Beispiel für bakterielle Infektionskrankheit der Haut"] },
    { k: "Folien", f: "Wo treten Lentigo-maligna- und akrolentiginöses Melanom auf?",
      a: "Lentigo-maligna: meist bei Älteren im Gesicht.\nAkrolentiginös: Handflächen, Fußsohlen, Nägel.", s: "Foliensatz Haut" },
    { k: "Folien", f: "Welche Verbandmittel bei Alters-, Pergament-, Kortison- und Ödemhaut?",
      a: "Altershaut: Silikon, keine Kleberänder\nPergamenthaut: Hydrogelkompressen\nKortisonhaut: minimale Klebekraft, häufige Kontrollen\nÖdemhaut: dehnbare Materialien, Druckentlastung", s: "Foliensatz Haut", sp: ["haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?"] },
    { k: "Folien", f: "Wie dokumentiert man verbandmittelbedingte Hautschäden?",
      a: "Erstbeurteilung vor Verbandanlage · Kontrolle bei jedem Verbandwechsel · Fotodokumentation · Maßnahmen und Produktwechsel dokumentieren.", s: "Foliensatz Haut" },
    { k: "Folien", f: "Welche rechtlichen Aspekte gelten bei MARSI?",
      a: "Sorgfaltspflicht, Dokumentationspflicht, Aufklärungspflicht, Haftung – vermeidbare Hautschäden können Schadensersatzforderungen nach sich ziehen.", s: "Foliensatz Haut" },
    { k: "Folien", f: "Was sind neutrophile Dermatosen?",
      a: "Seltene, nicht infektiöse Hauterkrankungen unklarer Ursache mit Ansammlung neutrophiler Granulozyten: sterile Pusteln, Nekrosen; z. B. Pyoderma gangraenosum.", s: "Foliensatz Haut" }
  ],

  quiz: [
    { f: "Welche Reihenfolge der Epidermis-Schichten ist richtig (von außen nach innen)?",
      o: ["Stratum corneum → lucidum → granulosum → spinosum → basale", "Stratum basale → spinosum → granulosum → lucidum → corneum", "Stratum corneum → granulosum → lucidum → basale → spinosum", "Stratum lucidum → corneum → spinosum → granulosum → basale"],
      e: "Hornschicht – Glanzschicht – Körnerzellschicht – Stachelzellschicht – Basalzellschicht.", s: "S. 4–5", sp: ["haut: Aufbau der Epidermis"] },
    { f: "Wo kommt das Stratum lucidum vor?",
      o: ["Nur an Handflächen und Fußsohlen", "An der gesamten Felderhaut", "Nur an der Schleimhaut", "Nur an behaarter Haut"],
      e: "Glanzschicht: 1–2 Lagen kernloser Keratinozyten; nur an Handflächen und Fußsohlen.", s: "S. 4", sp: ["haut: Aufbau der Epidermis"] },
    { f: "In welcher Schicht liegen die Langerhans-Zellen?",
      o: ["Stratum spinosum (Stachelzellschicht)", "Stratum corneum (Hornschicht)", "Stratum reticulare der Dermis", "Subcutis"],
      e: "Die Stachelzellschicht enthält die Langerhans-Zellen („Wachposten des Immunsystems“).", s: "S. 4–5", sp: ["haut: Def. Langerhanszellen"] },
    { f: "Wie lange dauert die Erneuerung der Epidermis laut Drucktext bei jüngeren Menschen?",
      o: ["27–30 Tage", "5–7 Tage", "200–400 Tage", "3–4 Monate"],
      e: "27–30 Tage; ab 65 Jahren 5–7 Wochen. (Handschriftlich: 28 Tage jung, 45–49 Tage alt.)", s: "S. 4" },
    { f: "Welche Schicht ist für die Regeneration der Epidermis zuständig?",
      o: ["Stratum basale – Keimzellen teilen sich alle 200–400 h", "Stratum corneum – tägliche Abschilferung", "Stratum lucidum – kernlose Keratinozyten", "Subcutis – Fettgewebe"],
      e: "Basalzellschicht: Keimzellen, Teilung alle 200–400 h; Wundverschluss geht von hier aus.", s: "S. 5", sp: ["haut: Aufbau der Epidermis"] },
    { f: "Wie hoch ist der Kollagenfaser-Anteil der Dermis?",
      o: ["Ca. 70 %", "Ca. 4,5 %", "Ca. 96 %", "Ca. 30 %"],
      e: "Dermis: Bindegewebe mit ca. 70 % Kollagenfasern.", s: "S. 6", sp: ["haut: Aufbau der Dermis"] },
    { f: "Was zeigt eine stehenbleibende Hautfalte beim Turgor-Test an?",
      o: ["Verminderten Turgor – mögliches Zeichen einer Exsikkose", "Ein Lymphödem (Stemmer positiv)", "Normalen, altersgerechten Turgor", "Eine Überwässerung"],
      e: "Hautfalte zwischen Daumen und Zeigefinger; bleibt sie stehen → verminderter Turgor, mögliches Zeichen einer Exsikkose.", s: "S. 7", sp: ["haut: Def. Hauttugor"] },
    { f: "Welchen pH-Wert hat der Säureschutzmantel der Haut?",
      o: ["Ca. 5,5", "Ca. 7,4", "Ca. 8,5", "Ca. 3,0"],
      e: "Säureschutzmantel (Hydrolipidfilm): pH ca. 5,5, aus Schweiß, Fettsäuren, Cholesterin und Talg.", s: "S. 9" },
    { f: "Welche Faustregel gilt für Hautpflegeprodukte?",
      o: ["Feucht auf feucht, fett auf trocken", "Fett auf feucht, feucht auf trocken", "Immer Salbe, unabhängig vom Hautzustand", "Puder auf trockene Haut"],
      e: "Feuchte Haut → hydrophile Produkte (Lotionen); trockene Haut → hydrophobe Salben.", s: "S. 15", sp: ["haut: Was gibt es für Hautpflegeprodukte?"] },
    { f: "Welche Creme eignet sich für trockene Haut und Altershaut?",
      o: ["Wasser-in-Öl (W/O)", "Öl-in-Wasser (O/W)", "Gel", "Puder"],
      e: "W/O: Wassertröpfchen in Öl, bildet Fettfilm, luftdurchlässig → für trockene Haut und Altershaut.", s: "S. 12, 14", sp: ["haut: Was gibt es für Hautpflegeprodukte?"] },
    { f: "Warum sind Pasten als Wundrandschutz ungeeignet?",
      o: ["Sie decken ab – die Haut kann nicht mehr kontrolliert werden", "Sie sind zu flüssig und laufen in die Wunde", "Sie enthalten immer Alkohol", "Sie kühlen die Wunde zu stark"],
      e: "Paste: abdeckend, aufsaugend, austrocknend; nicht als Wundrandschutz – Hautkontrolle unmöglich.", s: "S. 14", sp: ["haut: Welche Hautschutz- und Hautpflegemaßnahmen sind ungeeignet?"] },
    { f: "Was ist bei Pergament-, Kortison- oder Altershaut zu beachten?",
      o: ["Keine Wundauflagen mit Kleberand", "Wundauflagen immer zusätzlich mit Pflaster fixieren", "Vor dem Verbandwechsel mit Franzbranntwein einreiben", "Nur Zinkpaste verwenden"],
      e: "Silikonbeschichtete Wundauflagen oder unbeschichtete Hydrogelkompressen – keine Wundauflagen mit Kleberand.", s: "S. 15", sp: ["haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?"] },
    { f: "Wie oft müssen Analtampons bei Stuhlinkontinenz mindestens gewechselt werden?",
      o: ["Mindestens 2× täglich (Ileusgefahr)", "Einmal wöchentlich", "Alle 3 Tage", "Nur bei sichtbarer Verschmutzung"],
      e: "Analtampons oder Stuhldrainage bei Stuhlinkontinenz; Tampons mind. 2× täglich wechseln – Ileusgefahr.", s: "S. 15", sp: ["haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?"] },
    { f: "Welcher Erreger verursacht typischerweise ein Erysipel?",
      o: ["β-hämolysierende Streptokokken der Gruppe A", "Clostridien", "Varizella-zoster-Virus", "Dermatophyten"],
      e: "Erysipel: akute bakterielle Infektion der Dermis, meist durch β-hämolysierende Streptokokken der Gruppe A.", s: "S. 20", sp: ["haut: Beispiel für bakterielle Infektionskrankheit der Haut"] },
    { f: "Was ist die häufigste Komplikation des chronischen Lymphödems?",
      o: ["Erysipel", "Melanom", "Gicht", "Psoriasis"],
      e: "Das Erysipel ist die häufigste Komplikation des chronischen Lymphödems.", s: "S. 20" },
    { f: "Welche Merkmale passen zum Gasbrand?",
      o: ["Knistern (Crepitatio), wenig Eiter, kaum Fieber, schneller Puls", "Viel Eiter, hohes Fieber, langsamer Puls", "Halbseitige bandartige Bläschen", "Silbrig-weiße Schuppung"],
      e: "Gasbrand (Clostridien, anaerob): Ödem, plötzlich verstärkter Wundschmerz, Verfärbung gelbbraun bis blauschwarz, Knistern, wenig Eiter, kaum Fieber, schneller Puls, fadsüßlicher Geruch.", s: "S. 20–21", sp: ["haut: Beispiel für bakterielle Infektionskrankheit der Haut"] },
    { f: "Was ist eine typische Folge des Herpes zoster?",
      o: ["Postherpetische Neuralgie", "Atrophie blanche", "Elephantiasis", "Gichttophi"],
      e: "Reaktivierung des Varizella-zoster-Virus; Folge: postherpetische Neuralgie über Monate bis Jahre.", s: "S. 22", sp: ["haut: Beispiel für Virusinfektion der Haut"] },
    { f: "Welcher ist der häufigste maligne Tumor in Mitteleuropa?",
      o: ["Basalzellkarzinom", "Melanom", "Plattenepithelkarzinom", "Angiosarkom"],
      e: "Basalzellkarzinom: häufigster maligner Tumor in Mitteleuropa; lokal infiltrierend, metastasiert äußerst selten.", s: "S. 25–26" },
    { f: "Welcher Hauttumor hat die höchste Metastasierungsrate?",
      o: ["Melanom", "Basalzellkarzinom", "Aktinische Keratose", "Psoriasis-Plaque"],
      e: "Melanom: höchste Metastasierungsrate, > 90 % der Hauttumor-Todesfälle.", s: "S. 26" },
    { f: "Welcher Melanom-Typ ist am häufigsten?",
      o: ["Superfiziell spreitend (ca. 60 %)", "Nodulär (ca. 20 %)", "Lentigo-maligna (ca. 10 %)", "Akrolentiginös (ca. 5 %)"],
      e: "Superfiziell spreitend ca. 60 %, nodulär ca. 20 %, Lentigo-maligna ca. 10 %, akrolentiginös ca. 5 %.", s: "S. 26" },
    { f: "Wofür steht das „D“ in der ABCD-Regel?",
      o: ["Dynamik (Veränderung im Verlauf)", "Durchmesser", "Dicke", "Druckschmerz"],
      e: "Asymmetrie · Begrenzung unscharf · Color (Mehrfarbigkeit) · Dynamik.", s: "S. 27", sp: ["haut: Was ist die A-B-C-D-Regel?"] },
    { f: "Die aktinische Keratose ist eine Vorstufe welches Tumors?",
      o: ["Plattenepithelkarzinom", "Basalzellkarzinom", "Melanom", "Angiosarkom"],
      e: "Aktinische Keratose: in-situ-Karzinom, Vorstufe des Plattenepithelkarzinoms.", s: "S. 24–25" },
    { f: "Wo tritt ein akuter Gichtanfall am häufigsten auf?",
      o: ["Im Großzehengrundgelenk", "Im Kniegelenk", "Im Handgelenk", "In der Wirbelsäule"],
      e: "Akuter Anfall meist nachts, am häufigsten Großzehengrundgelenk.", s: "S. 28", sp: ["haut: Beispiel für Hauterscheinungen bei Krankheiten innerer Organe und Stoffwechselstörungen"] },
    { f: "Wie sieht der Ulcusrand beim Pyoderma gangraenosum aus?",
      o: ["Unterminiert, livide, scharf begrenzt", "Perlschnurartig mit Teleangiektasien", "Silbrig-weiß schuppend", "Wie ausgestanzt mit Kalkablagerungen"],
      e: "Pyoderma gangraenosum: schmerzhafte Pustel → rasch nekrotisches Geschwür; Ulcusrand unterminiert, livide, scharf begrenzt.", s: "S. 29", sp: ["haut: Beispiel für Hauterscheinungen bei Krankheiten innerer Organe und Stoffwechselstörungen"] },
    { f: "Woran erkennt man ein toxisches Kontaktekzem durch Verbandmittel?",
      o: ["Klar begrenzt, deckungsgleich mit dem Verband", "Juckend, nässend, über die Auflagefläche hinaus", "Bandförmig im Dermatom", "Nur an Handflächen und Fußsohlen"],
      e: "Toxisch: klar begrenzt, deckungsgleich mit dem Verband. Allergisch: gerötet, juckend, nässend, Bläschen, über die Auflagefläche hinaus.", s: "S. 31", sp: ["haut: Welche Hautschädigungen durch Verbandmittel können entstehen?"] },
    { f: "Ein Skin Tear mit teilweisem Verlust des Hautlappens entspricht …",
      o: ["Kategorie II", "Kategorie I", "Kategorie III", "Kategorie IV"],
      e: "I kein Gewebeverlust · II teilweiser Verlust des Hautlappens · III vollständiger Hautlappenverlust.", s: "S. 31", sp: ["haut: Welche Hautschädigungen durch Verbandmittel können entstehen?"] },
    { f: "Wie beugt man einer Follikulitis durch Verbandmittel vor?",
      o: ["Haare mit elektrischer Schneidemaschine kürzen; Verband in Haarwuchsrichtung abziehen", "Haare vor jedem Verbandwechsel nass rasieren", "Verband gegen die Haarwuchsrichtung schnell abziehen", "Haut vorher mit Babyöl einreiben"],
      e: "Follikulitis durch Rasur oder Haarausriss → Haare mit elektrischer Schneidemaschine kürzen; Verband in Haarwuchsrichtung abziehen.", s: "S. 31", sp: ["haut: Welche Hautschädigungen durch Verbandmittel können entstehen?"] },
    { f: "Was ist bei der Versorgung eines Skin Tears der erste Schritt?",
      o: ["Blutung mit sterilen Kompressen stillen", "Hautlappen mit Pflasterstreifen fixieren", "Hautlappen abtragen", "Wunde mit Alkohol desinfizieren"],
      e: "1. Blutung stillen · 2. sanft mit NaCl 0,9 % oder Wundspüllösung reinigen · 3. Hautlappen repositionieren · 4. mit nicht klebenden, silikonbeschichteten Verbandmitteln fixieren.", s: "S. 30–31" },
    { f: "Wie entstehen die Narben der Livedo-Vaskulopathie?",
      o: ["Als Atrophie blanche", "Als Gichttophi", "Als perlschnurartiger Saum", "Als Papillomatose"],
      e: "Livedo-Vaskulopathie: schmerzhafte thromboembolische Verschlusskrankheit der Hautgefäße mit Ulzerationen an den Unterschenkeln, Narben als Atrophie blanche.", s: "S. 28–30", sp: ["haut: Beispiel für Hauterscheinungen bei Krankheiten innerer Organe und Stoffwechselstörungen"] },
    { f: "Welche Funktion haben die Talgdrüsen laut Foliensatz?",
      o: ["Produktion von Hautfett für den Säureschutzmantel", "Temperaturregulation und Ausscheidung", "Schutz der Finger- und Zehenspitzen", "Abfangen von Antigenen"],
      e: "Haare: mechanischer Schutz, Temperaturregulation · Nägel: Schutz, Greifen · Schweißdrüsen: Temperaturregulation, Ausscheidung · Talgdrüsen: Hautfett für den Säureschutzmantel.", s: "Foliensatz Haut" },
    { f: "Was ist beim Hautfaltentest normal?",
      o: ["Die Hautfalte glättet sich sofort bzw. innerhalb von 1–2 Sekunden", "Die Hautfalte bleibt mindestens 30 Sekunden stehen", "Die Hautfalte färbt sich weiß", "Die Hautfalte lässt sich gar nicht abheben"],
      e: "Bleibt die Falte länger stehen → verminderter Turgor (Dehydration, Alter, Gewichtsverlust).", s: "Foliensatz Haut", sp: ["haut: Def. Hauttugor"] },
    { f: "Welche Aussagen zu den Bestandteilen des Säureschutzmantels stimmen?",
      o: ["Fettsäuren wirken antimikrobiell", "Cholesterin stabilisiert die Barriere", "Talg sorgt für Geschmeidigkeit und Wasserschutz", "Schweiß macht die Haut alkalisch"], r: 3,
      e: "Schweiß liefert den wässrigen Anteil mit Salzen; der Säureschutzmantel hat einen pH von ca. 5,5.", s: "Foliensatz Haut; S. 9" },
    { f: "Wie pflegt man sebostatische (trockene) Haut?",
      o: ["W/O-Produkte mit Urea", "Milde Syndets und wässrige O/W-Produkte", "Alkoholische Lösungen", "Puder"],
      e: "Sebostatisch = trocken: W/O + Urea. Seborrhoisch = fettig: milde Syndets, O/W. Xerodermie: wie trocken, höherer Urea-Anteil.", s: "Foliensatz Haut", sp: ["haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?"] },
    { f: "Wie wird ein Panaritium tendinosum behandelt?",
      o: ["Sofortige operative Eröffnung", "Nur Abtragung und Inspektion", "Abwarten und kühlen", "Nur Salbenverband"],
      e: "Cutaneum: Abtragung · Subcutaneum: seitliche Inzision · Tendinosum (Sehnenscheide): sofortige operative Eröffnung.", s: "Foliensatz Haut", sp: ["haut: Beispiel für bakterielle Infektionskrankheit der Haut"] },
    { f: "Wo tritt das akrolentiginöse Melanom auf?",
      o: ["An Handflächen, Fußsohlen und Nägeln", "Meist bei Älteren im Gesicht", "Nur am Rumpf", "Nur an der Schleimhaut"],
      e: "Lentigo-maligna: meist Ältere im Gesicht · akrolentiginös: Handflächen, Fußsohlen, Nägel · nodulär: aggressiv.", s: "Foliensatz Haut" },
    { f: "Welche Verbandmittel-Empfehlungen nennt der Foliensatz?",
      o: ["Altershaut: silikonbeschichtete Auflagen ohne Kleberand", "Kortisonhaut: minimale Klebekraft, häufige Kontrollen", "Ödemhaut: dehnbare Materialien, Druckentlastung", "Pergamenthaut: stark klebende Pflaster"], r: 3,
      e: "Pergamenthaut: Hydrogelkompressen, sehr schonende Entfernung.", s: "Foliensatz Haut", sp: ["haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?"] },
    { f: "Welche rechtlichen Aspekte gelten bei MARSI?",
      o: ["Sorgfaltspflicht", "Dokumentationspflicht", "Aufklärungspflicht", "Meldepflicht an das Gesundheitsamt"], r: 3,
      e: "Dazu Haftung – vermeidbare Hautschäden können Schadensersatzforderungen nach sich ziehen.", s: "Foliensatz Haut" }
  ],

  zusammenfassung: `
<h3>1. Haut – Aufbau <span class="sp" data-sp="haut: Aufbau der Haut">Schwerpunkt</span> <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 3–9</span></h3>
<ul>
  <li>Größtes Organ: 1,5–2 m², 7–10 kg. Drei Schichten: Epidermis (Oberhaut), Dermis/Corium (Lederhaut), Subcutis/Hypodermis (Unterhaut). Dazu Adnexorgane: Haare, Nägel, Schweiß-, Duft- und Talgdrüsen.</li>
  <li><span class="sp" data-sp="haut: Aufbau der Epidermis">Schwerpunkt</span>Epidermis hat keine Blutgefäße (Versorgung per Diffusion aus der oberen Dermis). Sie erneuert sich in 27–30 Tagen, ab 65 Jahren dauert es 5–7 Wochen (S. 4).</li>
</ul>
<div class="tabelle"><table>
  <caption>Schichten der Epidermis – von außen nach innen (S. 4–5)</caption>
  <thead><tr><th>Schicht</th><th>Latein</th><th>Merkmale</th></tr></thead>
  <tbody>
    <tr><td>Hornschicht</td><td>Stratum corneum</td><td>bis 20 Lagen abgestorbener Korneozyten, dachziegelartig; Kittmasse schützt vor Wasserverlust; tägliche Abschilferung</td></tr>
    <tr><td>Glanzschicht</td><td>Stratum lucidum</td><td>1–2 Lagen kernloser Keratinozyten; nur an Handflächen und Fußsohlen</td></tr>
    <tr><td>Körnerzellschicht</td><td>Stratum granulosum</td><td>Keratinozyten flachen ab und beginnen zu verhornen</td></tr>
    <tr><td>Stachelzellschicht</td><td>Stratum spinosum</td><td>lebende Zellen, Desmosomen → mechanische Stabilität; enthält die Langerhans-Zellen</td></tr>
    <tr><td>Basalzellschicht</td><td>Stratum basale</td><td>Keimzellen, Teilung alle 200–400 h; Merkelzellen (mechanische Reize); grenzt über die Basalmembran an die Dermis</td></tr>
  </tbody>
</table></div>
<ul>
  <li><span class="sp" data-sp="haut: Def. Langerhanszellen">Schwerpunkt</span><b>Langerhans-Zellen:</b> aus dem Knochenmark, ca. 4,5 % der epidermalen Zellen, Lebensdauer bis 4 Monate; fangen mit beweglichen Dendriten Pathogene und Antigene ab – „Wachposten des Immunsystems“ (S. 4).</li>
  <li><span class="sp" data-sp="haut: Aufbau der Dermis">Schwerpunkt</span><b>Dermis:</b> deutlich dicker als die Epidermis, Bindegewebe mit ca. 70 % Kollagenfasern. Zwei Schichten: Stratum papillare (Papillarschicht: Zapfen verankern die Oberhaut, Versorgung der Basalschicht, Transport von Immunzellen) und Stratum reticulare (Geflechtschicht: Kollagenfasern → Elastizität und Stabilität; Matrix mit viel Hyaluron). Enthält Retikulin- und Elastanfasern, Haare, Drüsen, Nervenzellen und Nägel (S. 6).</li>
  <li>Extrazelluläre Matrix (Proteoglykan-Hyaluronat-Komplex) bindet viel Wasser → hauptverantwortlich für den Hautturgor (S. 7).</li>
  <li><span class="sp" data-sp="haut: Def. Hauttugor">Schwerpunkt</span><b>Hautturgor-Test:</b> Hautfalte zwischen Daumen und Zeigefinger; bleibt sie stehen → verminderter Turgor, mögliches Zeichen einer Exsikkose. Mit dem Alter nimmt der Turgor physiologisch ab (S. 7).</li>
  <li><span class="sp" data-sp="haut: Aufbau der Subcutis">Schwerpunkt</span><b>Subcutis:</b> ohne klare Grenze zur Dermis; lockeres Fettgewebe → Verschiebbarkeit, Fettspeicher, Druckpolster, Wärmeisolation (S. 7).</li>
  <li><span class="sp" data-sp="haut: Def. Leistenhaut">Schwerpunkt</span><b>Leistenhaut:</b> unbehaart, Hohlhand und Fußsohle; Merkel-Zellen und Schweißdrüsen, keine Talgdrüsen; genetisch festgelegtes Muster (Fingerabdruck) (S. 8).</li>
  <li><span class="sp" data-sp="haut: Def. Felderhaut">Schwerpunkt</span><b>Felderhaut:</b> ca. 96 % der Körperoberfläche; behaart, mit Schweiß- und Talgdrüsen, rhombische Felder (S. 9).</li>
</ul>
<p class="hand">Handschriftlich (S. 3): Regeneration „28 Tage“ bei jungen, „45–49 Tage“ bei alten Menschen. Der Drucktext nennt 27–30 Tage bzw. 5–7 Wochen ab 65 Jahren.</p>

<h3>2. Funktionen und Säureschutzmantel <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 9</span></h3>
<ul>
  <li><span class="sp" data-sp="haut: Funktionen der Haut">Schwerpunkt</span>Funktionen: Schutz vor mechanischen, chemischen und thermischen Einflüssen; Schutz vor Krankheitserregern; Absorbierung von Sonnenlicht; Temperaturregulation; Regulation des Wasserhaushalts; Sinneswahrnehmung; Kommunikation (Erröten, Erblassen); Pheromone; Wundheilung.</li>
  <li>Säureschutzmantel (Hydrolipidfilm): pH ca. 5,5, aus Schweiß, Fettsäuren, Cholesterin und Talg; Schutz vor Bakterien und Erregern.</li>
  <li>Die Haut kann Substanzen resorbieren – bei Wundtherapeutika wie Jod oft unerwünscht.</li>
</ul>

<h3>3. Altershaut <span class="sp" data-sp="haut: Was gibt es für altersbedingte Hautveränderungen?">Schwerpunkt</span> <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 10</span></h3>
<ul>
  <li>Haut atrophiert: Fettgewebe und Papillarschicht dünner → weniger Druck- und Zugfestigkeit, geringerer Turgor, weniger Wasserspeicherung, weniger Kollagen → Falten.</li>
  <li>Mehr Pigmentierung (Altersflecken); weniger Schweiß- und Talgproduktion → Hydrolipidfilm geschwächt → trocken, schuppig.</li>
  <li>Folge: erhöhtes Verletzungsrisiko und langsamere Wundheilung.</li>
</ul>

<h3>4. Hautschutz und -pflege <span class="seite">S. 10–16</span></h3>
<ul>
  <li><span class="sp" data-sp="haut: Bedeutung von Hautschutz und Hautpflege">Schwerpunkt</span>Hautschutz, -beobachtung und -pflege gehören zur Wundversorgung, nicht nur zur Prävention. Wundrand und -umgebung sind durch Exsudat und Ausscheidungen gefährdet.</li>
  <li>Hautprobleme bei Grunderkrankungen (S. 11): Diabetes (trockene Haut, Eczéma craquelé, Pilzinfektionen bei ca. 80 %, Malum perforans, Rhagaden); CVI (Stauungsekzem, Ödeme, Dermatoliposklerose, Capillaritis alba, Hyperpigmentierung); pAVK (livide, kühle, dünne Haut, Rarefizierung der Hautanhangsgebilde, Nagelmykose); DFS (Hyperkeratosen); Wundexsudat (Mazeration, Erosion, toxisches Kontaktekzem); Alter.</li>
  <li><span class="sp" data-sp="haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?">Schwerpunkt</span>Reinigung: hautneutrale bis leicht saure, zusatzstofffreie Syndets; alkalische Seifen und Zusatzstoffe greifen den Säureschutzmantel an (S. 12).</li>
  <li><span class="sp" data-sp="haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?">Schwerpunkt</span>Pflege nach Hautzustand (S. 12): trockene Haut, Xerodermie und Altershaut → Wasser-in-Öl, Urea, Omega-Fettsäuren; fettige Haut → milde Syndets, wässrige Öl-in-Wasser-Produkte; empfindliche Haut → hypoallergen, ohne Farb-, Duft- und Konservierungsstoffe, keine Seifen.</li>
</ul>
<div class="tabelle"><table>
  <caption>Hautpflegeprodukte ★ (S. 14)</caption>
  <thead><tr><th>Produkt</th><th>Merkmale</th></tr></thead>
  <tbody>
    <tr><td><span class="sp" data-sp="haut: Was gibt es für Hautpflegeprodukte?">Schwerpunkt</span>Creme – Öl-in-Wasser (O/W)</td><td>kleinste Öltröpfchen in Wasser, hoher Wasseranteil (ca. 60 %); Hautfeuchtigkeit kann verdampfen</td></tr>
    <tr><td>Creme – Wasser-in-Öl (W/O)</td><td>kleinste Wassertröpfchen in Öl/Fett; Fettfilm auf der Haut, durch Wasseranteile luftdurchlässig</td></tr>
    <tr><td>Lotion</td><td>flüssig, meist O/W; hoher Wassergehalt → oft Konservierungsmittel</td></tr>
    <tr><td>Gel</td><td>fettfrei, durchsichtig, kühlend; kaum hautpflegender Effekt</td></tr>
    <tr><td>Puder</td><td>Streupulver (z. B. Talk, Zinkoxid, Stärke)</td></tr>
    <tr><td>Paste</td><td>abdeckend, aufsaugend, austrocknend (z. B. Mykosen); nicht als Wundrandschutz – Hautkontrolle unmöglich</td></tr>
    <tr><td>Salbe</td><td>wasserfrei, haftet stark, verdunstet nicht</td></tr>
  </tbody>
</table></div>
<p>Emulsion = Gemisch zweier nicht mischbarer Flüssigkeiten, innere Phase in äußerer verteilt. Salben, Puder und Pasten nur therapeutisch, nicht zur täglichen Pflege.</p>
<p class="merke"><span class="sp" data-sp="haut: Was gibt es für Hautpflegeprodukte?">Schwerpunkt</span><b>Faustregel (S. 15):</b> feucht auf feucht, fett auf trocken. Feuchte Haut → hydrophile Produkte (Lotionen); trockene Haut → hydrophobe Salben.</p>
<ul>
  <li><span class="sp" data-sp="haut: Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?">Schwerpunkt</span><b>Empfohlen bei Wunden (S. 15):</b> Wundrand vor Mazeration schützen (transparente Hautschutzfilme, ggf. Transparentfolie, dünner Hydrokolloidverband, Hydrofaser, Stomapaste); Narbenpflege mit Dexpanthenol; Pflasterspray bei frisch genähten Wunden; Analtampons oder Stuhldrainage bei Stuhlinkontinenz (Tampons mind. 2× täglich wechseln – Ileusgefahr); silikon- oder Soft-Gel-beschichtete Auflagen ohne Klebefläche; bei Pergament-, Kortison- oder Altershaut keine Wundauflagen mit Kleberand; Sakralregion zusätzlich mit semipermeabler Folie fixieren.</li>
  <li><span class="sp" data-sp="haut: Welche Hautschutz- und Hautpflegemaßnahmen sind ungeeignet?">Schwerpunkt</span><b>Ungeeignet (S. 16):</b> Salben, Cremes, Zinkpasten in offene Wunden reiben; Produkte mit Zusatz- oder Parfümstoffen; Alkohollösungen (Franzbranntwein); abdichtende Pasten; Fette und Öle (Melkfett, Babyöl, Lebertranpaste); Puder; Massieren gefährdeter Hautstellen.</li>
</ul>

<h3>5. Schleimhaut und Gefäßversorgung <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 16–17</span></h3>
<ul>
  <li><b>Schleimhaut:</b> feucht, Schleim aus Becherzellen; keine Hornschicht, keine Haare. Vorkommen dort, wo Hohlorgane mit der Umwelt verbunden sind: Atemwege, Bindehaut, Mittelohr, Geschlechtsorgane, Harnwege, Verdauungskanal. Mindestens zwei Schichten: Epithel und Lamina propria. Schutz gegen Erreger.</li>
  <li><span class="sp" data-sp="haut: Wie ist die Gefäßversorgung in der Haut?">Schwerpunkt</span><b>Gefäßversorgung:</b> drei arterielle und venöse Gefäßgebiete übereinander (unter der Subcutis, an der Grenze Subcutis/Cutis, unter den Lederhautpapillen). Kapillarschlingen der Papillen versorgen die gefäßlose Epidermis. Viele arteriovenöse Anastomosen in der Dermis → Blutdruck, Organdurchblutung, Wärmeregulation.</li>
</ul>

<h3>6. Hauterkrankungen <span class="seite">S. 18–30</span></h3>
<ul>
  <li><span class="sp" data-sp="haut: Ursachen für Hauterkrankungen">Schwerpunkt</span>Ca. 2.000–3.000 Dermatosen. Entstehung durch exogene Noxen, Einflüsse aus dem Gesamtorganismus oder Fehlanlagen der Haut selbst (S. 18).</li>
  <li>Hautflora (S. 19): im Mittel 10<sup>6</sup> Bakterien/cm² (10<sup>2</sup> trocken bis 10<sup>8</sup> feucht); residente (Dauerbesiedlung) und transiente Flora (Anflugkeime).</li>
</ul>
<h4><span class="sp" data-sp="haut: Beispiel für bakterielle Infektionskrankheit der Haut">Schwerpunkt</span>Bakterielle Infektionen</h4>
<ul>
  <li><b>Erysipel</b> <span class="stern">★</span>: akute bakterielle Infektion der Dermis, meist durch β-hämolysierende Streptokokken der Gruppe A; häufigste Komplikation des chronischen Lymphödems. Klar begrenzte, schmerzhafte, sich schnell ausbreitende Rötung und Überwärmung, Krankheitsgefühl. Unbehandelt Lymphknotenschwellung und hohes Fieber; Komplikationen: Sepsis, Entstehung oder Verschlechterung eines Lymphödems (S. 20).</li>
  <li><b>Phlegmone:</b> schwerer als Erysipel; einschmelzende Entzündung von Dermis und oft Subcutis, meist Strepto- und/oder Staphylokokken; diffus abszedierend, Fistelgänge, Nekrosen, Sepsis. Ein Erysipel kann in eine Phlegmone übergehen (S. 20).</li>
  <li><b>Gasbrand:</b> durch Clostridien (anaerob), Inkubation 5–48 h; Ödem, plötzlich verstärkter Wundschmerz, Verfärbung gelbbraun bis blauschwarz, Knistern (Crepitatio), wenig Eiter, kaum Fieber, aber schneller Puls, fadsüßlicher Geruch. Therapie: Antitoxin, radikales Débridement, ggf. Amputation, hyperbare Sauerstofftherapie, Antibiotika (S. 20–21).</li>
  <li><b>Panaritium:</b> eitrige Entzündung der Finger (selten Zehen) nach Bagatellverletzung; frühzeitige operative Entlastung. Formen: cutaneum, subunguale/periunguale, subcutaneum, ossale/articulare, tendinosum (Komplikation: Hohlhand- und V-Phlegmone) (S. 21).</li>
</ul>
<h4>Viren, Pilze, Autoimmun, erblich</h4>
<ul>
  <li><span class="sp" data-sp="haut: Beispiel für Virusinfektion der Haut">Schwerpunkt</span><b>Herpes zoster:</b> Reaktivierung des Varizella-zoster-Virus aus den Nervenzellen; brennender Schmerz, dann halbseitige, bandartige Bläschen im Dermatom; Folge: postherpetische Neuralgie über Monate bis Jahre (S. 22).</li>
  <li><b>Mykose</b> <span class="stern">★</span>: Pilzinfektion von Haut, Schleimhaut, Nägeln oder systemisch; Dermatophyten, Schimmel- und Hefepilze; begünstigt durch verminderte Abwehr (z. B. im Lymphödem). Onychomykose: ca. ¼ aller Nagelkrankheiten, oft bei vorgeschädigten Nägeln, engen Schuhen oder Durchblutungsstörungen (S. 22).</li>
  <li><b>Bullöse Autoimmundermatosen:</b> Autoantikörper gegen Haut- und Schleimhaut-Antigene → Blasen; Pemphigusgruppe (Akantholyse), Pemphigoidgruppe (Abhebung in der Junktionszone), Epidermolysis bullosa acquisita (S. 23).</li>
  <li><b>Psoriasis:</b> chronisch-entzündlich, polygen vererbt; symmetrische, scharf begrenzte rote Papeln und Plaques mit silbrig-weißer Schuppung; Beginn in 50 % vor dem 25. Lebensjahr (S. 23).</li>
</ul>

<h3>7. Neoplasien und Hauttumoren <span class="seite">S. 23–27</span></h3>
<ul>
  <li><b>Neoplasie</b> = autonome Gewebeneubildung (benigne, semimaligne, maligne). <b>Tumor</b> = jede örtliche Zunahme des Gewebevolumens (lat. Schwellung), weiter gefasst; Kardinalsymptom der Entzündung (Lösung Übung II, S. 33).</li>
  <li><b>Aktinische Keratose:</b> in-situ-Karzinom, Vorstufe des Plattenepithelkarzinoms; hellhäutige Menschen, lichtexponierte Stellen, meist ab 60 Jahren, Männer häufiger; raue, scharf begrenzte, rötliche Herde, später dicke Krusten; meist kein Jucken (S. 24–25).</li>
  <li><b>Basalzellkarzinom:</b> häufigster maligner Tumor in Mitteleuropa; lokal infiltrierend und zerstörend, metastasiert äußerst selten. Häufigste Form ulzero-nodulär (60–80 %). Perlschnurartiger Saum mit Teleangiektasien, ggf. zentrales Ulcus. Risiko: UV (v. a. Kindheit), heller Hauttyp, Männer. Therapie: vollständige operative Entfernung (5-Jahres-Rezidivrate 2–8 %) (S. 25–26).</li>
  <li><b>Melanom:</b> höchste Metastasierungsrate, &gt; 90 % der Hauttumor-Todesfälle. Typen: superfiziell spreitend ca. 60 %, nodulär ca. 20 %, Lentigo-maligna ca. 10 %, akrolentiginös ca. 5 %. Risiko: Hauttyp I/II, viele Naevi, Sonnenbrände, Immunsuppression, positive Familienanamnese (S. 26).</li>
  <li><b>Plattenepithelkarzinom</b> (veraltet Spinaliom): Kopf-Hals-Region; Risiko u. a. UV, chronische oder infizierte Wunden, Narben, Immunsuppression; hyperkeratotische Papel; Biopsie sichert die Diagnose; Therapie: vollständige Exzision (S. 27).</li>
</ul>
<p class="merke"><span class="sp" data-sp="haut: Was ist die A-B-C-D-Regel?">Schwerpunkt</span><b>ABCD-Regel ★ (S. 27):</b> Asymmetrie · Begrenzung unscharf · Color (Mehrfarbigkeit) · Dynamik (Veränderung im Verlauf). <span class="hand-inline">Handschriftlich ergänzt, nicht im Druck: E = Erhabenheit.</span></p>

<h3>8. Haut bei inneren Erkrankungen <span class="sp" data-sp="haut: Beispiel für Hauterscheinungen bei Krankheiten innerer Organe und Stoffwechselstörungen">Schwerpunkt</span> <span class="seite">S. 28–30</span></h3>
<ul>
  <li>Hautzeichen sind diagnostische Warnzeichen, z. B. Schwitzen bei Hyperthyreose, Infektneigung bei Diabetes, Zyanose bei Herz-/Lungenerkrankungen, Purpura bei Blutungsneigung.</li>
  <li><b>Gicht</b> (Arthritis urica): Purinstoffwechselstörung mit Harnsäureablagerung; akuter Anfall meist nachts, am häufigsten Großzehengrundgelenk. Therapie: Ruhigstellung, kalte Umschläge, NSAR, Glukokortikoide, Colchicin, ggf. Canakinumab. Gichttophi = schmerzfreie Knoten unter der Haut bei lange erhöhter Harnsäure.</li>
  <li><b>Kalziphylaxie:</b> Kalksalzablagerung in Haut und Gefäßen → ischämische Infarkte, steinharte, sehr schmerzhafte Knoten.</li>
  <li><b>Livedo-Vaskulopathie:</b> schmerzhafte thromboembolische Verschlusskrankheit der Hautgefäße mit Ulzerationen an den Unterschenkeln, Narben als Atrophie blanche.</li>
  <li><b>Pyoderma gangraenosum</b> (neutrophile Dermatose): oft mit chronisch-entzündlichen Darmerkrankungen oder Neoplasien; schmerzhafte Pustel, oft nach Bagatelltrauma oder OP, rasch nekrotisches Geschwür; Ulcusrand unterminiert, livide, scharf begrenzt. Therapie systemisch (Glukokortikoide, Ciclosporin u. a.).</li>
</ul>

<h3>9. Hautschäden durch Verbandmittel – MARSI <span class="sp" data-sp="haut: Welche Hautschädigungen durch Verbandmittel können entstehen?">Schwerpunkt</span> <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 30–31</span></h3>
<ul>
  <li><b>MARSI</b> = Medical Adhesive-Related Skin Injuries: Schäden durch Aufbringen und Ablösen von Verbandmitteln.</li>
  <li><b>Epidermales Stripping:</b> Abziehen von Hornschichtlagen beim Entfernen; Kleberreste immer entfernen.</li>
  <li><b>Spannungsblasen:</b> Scherkräfte durch Hautdehnung → Produkte nicht unter Spannung, an Gelenken in Beugung, faltenfrei anlegen.</li>
  <li><b>Toxisches Kontaktekzem:</b> klar begrenzt, deckungsgleich mit dem Verband. <b>Allergisches Kontaktekzem:</b> gerötet, juckend, nässend, Bläschen, über die Auflagefläche hinaus.</li>
  <li><b>Mazeration:</b> Feuchtigkeit unter der Klebefläche; folienbeschichtete Verbände nicht übereinanderkleben (feuchte Kammer).</li>
  <li><b>Follikulitis:</b> durch Rasur oder Haarausriss → Haare mit elektrischer Schneidemaschine kürzen; Verband in Haarwuchsrichtung abziehen.</li>
</ul>
<p><b>Skin Tears (S. 30–31)</b> – akute traumatische Hauteinrisse, v. a. bei älteren Menschen; nicht als Bagatelle behandeln, dokumentieren.</p>
<div class="tabelle"><table>
  <caption>Skin-Tear-Kategorien</caption>
  <thead><tr><th>Kategorie</th><th>Befund</th></tr></thead>
  <tbody>
    <tr><td>I</td><td>kein Gewebeverlust; Hautlappen kann repositioniert werden</td></tr>
    <tr><td>II</td><td>teilweiser Verlust des Hautlappens</td></tr>
    <tr><td>III</td><td>vollständiger Hautlappenverlust</td></tr>
  </tbody>
</table></div>
<p class="merke"><b>Versorgung:</b> 1. Blutung mit sterilen Kompressen stillen · 2. sanft mit NaCl 0,9 % oder Wundspüllösung reinigen · 3. Hautlappen mit steriler Pinzette repositionieren (Anfeuchten 5–10 min) · 4. mit nicht klebenden, silikonbeschichteten Verbandmitteln fixieren.</p>
<h3>10. Abgleich mit dem Foliensatz „Haut und Hauterkrankungen“ <span class="seite">57 Folien</span></h3>
<p class="leise">✔ = deckt sich mit dem Heft · ➜ = neu oder präzisiert · ⚠ = Abweichung</p>
<div class="tabelle"><table>
  <caption>Hautanhangsgebilde (Adnexorgane) mit Funktion ★</caption>
  <thead><tr><th>Gebilde</th><th>Funktion laut Foliensatz</th></tr></thead>
  <tbody>
    <tr><td>Haare</td><td>Schutz vor mechanischen Einwirkungen, Temperaturregulation</td></tr>
    <tr><td>Nägel</td><td>Schutz der Finger- und Zehenspitzen, Unterstützung beim Greifen</td></tr>
    <tr><td>Schweißdrüsen</td><td>Temperaturregulation, Ausscheidung von Stoffwechselprodukten</td></tr>
    <tr><td>Talgdrüsen</td><td>Produktion von Hautfett für den Säureschutzmantel</td></tr>
  </tbody>
</table></div>
<div class="tabelle"><table>
  <thead><tr><th>Thema</th><th>Ergebnis</th></tr></thead>
  <tbody>
    <tr><td style="white-space:normal">Erneuerung ab 65 Jahren</td><td>✔ F: 35–49 Tage = Heft „5–7 Wochen“. ⚠ Deine Randnotiz „45–49 Tage“ weicht davon ab.</td></tr>
    <tr><td style="white-space:normal"><span class="sp" data-sp="haut: Aufbau der Epidermis">Schwerpunkt</span>Glanzschicht</td><td>➜ verstärkt die Barrierefunktion, erhöht die mechanische Widerstandsfähigkeit, schützt vor Wasserverlust.</td></tr>
    <tr><td style="white-space:normal"><span class="sp" data-sp="haut: Def. Hauttugor">Schwerpunkt</span>Hautturgor</td><td>➜ Normal glättet sich die Hautfalte sofort bzw. innerhalb von 1–2 Sekunden; bleibt sie länger stehen → verminderter Turgor (Dehydration, Alter, Gewichtsverlust).</td></tr>
    <tr><td style="white-space:normal"><span class="sp" data-sp="haut: Def. Leistenhaut">Schwerpunkt</span>Leistenhaut</td><td>➜ ca. 4 % der Körperoberfläche (Felderhaut 96 %); viele Hautrezeptoren.</td></tr>
    <tr><td style="white-space:normal">Säureschutzmantel</td><td>➜ Schweiß (wässriger Anteil, Salze) · Fettsäuren (antimikrobiell) · Cholesterin (stabilisiert die Barriere) · Talg (Geschmeidigkeit, Wasserschutz).</td></tr>
    <tr><td style="white-space:normal">Hautzustände</td><td>➜ Normale Haut: Pflege nicht zwingend, höchstens O/W · trockene (sebostatische) Haut: W/O + Urea · fettige (seborrhoische) Haut: milde Syndets, O/W · Xerodermie: wie trocken, höherer Urea-Anteil.</td></tr>
    <tr><td style="white-space:normal"><span class="sp" data-sp="haut: Beispiel für bakterielle Infektionskrankheit der Haut">Schwerpunkt</span>Erysipel / Phlegmone</td><td>➜ Erysipel: rechtzeitige Antibiose entscheidend. Phlegmone entsteht nach tiefen Traumen, OP- und Stichwunden, Substanzdefekten wie Ulcus cruris.</td></tr>
    <tr><td style="white-space:normal"><span class="sp" data-sp="haut: Beispiel für bakterielle Infektionskrankheit der Haut">Schwerpunkt</span>Panaritium</td><td>➜ Cutaneum: Abtragung · Subcutaneum: seitliche Inzision · Tendinosum: sofortige operative Eröffnung.</td></tr>
    <tr><td style="white-space:normal">Psoriasis</td><td>➜ streckseitig betont; auch Nägel, Lymphknoten und Gelenke beteiligt.</td></tr>
    <tr><td style="white-space:normal">Basalzellkarzinom</td><td>➜ ca. 200 Neuerkrankungen/100.000/Jahr, Lebenszeitprävalenz ca. 10 %; OP mit ca. 95 % Erfolgsrate (Heft: 5-Jahres-Rezidivrate 2–8 %).</td></tr>
    <tr><td style="white-space:normal">Melanom-Typen</td><td>➜ Lentigo-maligna: meist Ältere im Gesicht · akrolentiginös: Handflächen, Fußsohlen, Nägel · nodulär: aggressiv.</td></tr>
    <tr><td style="white-space:normal">Plattenepithelkarzinom</td><td>➜ bei Metastasen systemische Chemotherapie.</td></tr>
    <tr><td style="white-space:normal">Calcinosis cutis</td><td>➜ Kalksalzablagerung durch gestörten Kalzium-Phosphat-Stoffwechsel; vorwiegend Nieren, Lunge, Herz, seltener Haut; Therapie: Grunderkrankung, ggf. Exzision.</td></tr>
    <tr><td style="white-space:normal"><span class="sp" data-sp="haut: Beispiel für Hauterscheinungen bei Krankheiten innerer Organe und Stoffwechselstörungen">Schwerpunkt</span>Livedo-Vaskulopathie</td><td>➜ blitzförmige Ulzera; Therapie mit Gerinnungshemmern, IVIG, Immunsuppressiva.</td></tr>
    <tr><td style="white-space:normal">Neutrophile Dermatosen</td><td>➜ selten, nicht infektiös, sterile Pusteln, Nekrosen; Pyoderma gangraenosum breitet sich zentrifugal aus, schubartig-rezidivierend.</td></tr>
  </tbody>
</table></div>
<div class="tabelle"><table>
  <caption>Besondere Hauttypen und Verbandmittel (Foliensatz)</caption>
  <thead><tr><th>Hauttyp</th><th>Merkmale</th><th>Empfehlung</th></tr></thead>
  <tbody>
    <tr><td>Altershaut</td><td>dünn, trocken, verschiebbar</td><td>silikonbeschichtete Auflagen, keine Kleberänder</td></tr>
    <tr><td>Pergamenthaut</td><td>extrem dünn und fragil</td><td>Hydrogelkompressen, sehr schonende Entfernung</td></tr>
    <tr><td>Kortisonhaut</td><td>atrophisch durch Langzeittherapie</td><td>minimale Klebekraft, häufige Kontrollen</td></tr>
    <tr><td>Ödemhaut</td><td>gespannt, verletzungsanfällig</td><td>dehnbare Materialien, Druckentlastung</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>MARSI-Prävention:</b> atraumatische Entfernung (Silikon), regelmäßige Hautbeurteilung unter Verbänden, korrekte Applikation (nicht unter Spannung), Hautvorbereitung mit Hautschutzfilm.</li>
  <li><b>Dokumentation von Hautschäden:</b> Erstbeurteilung vor Verbandanlage · Kontrolle bei jedem Verbandwechsel · Fotodokumentation · eingeleitete Maßnahmen und Produktwechsel.</li>
  <li><b>Rechtliche Aspekte:</b> Sorgfaltspflicht (Verbandmittel nach Stand der Technik), Dokumentationspflicht, Aufklärungspflicht, Haftung – vermeidbare Hautschäden können zu Schadensersatz führen.</li>
</ul>
`
});
