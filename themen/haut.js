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
      a: "1,5–2 m², 7–10 kg – größtes Organ.\nEpidermis (Oberhaut), Dermis/Corium (Lederhaut), Subcutis/Hypodermis (Unterhaut).\nDazu Adnexorgane: Haare, Nägel, Drüsen.", s: "S. 3" },
    { k: "Aufbau", f: "Nenne die Schichten der Epidermis von außen nach innen – deutsch und lateinisch.",
      a: "Hornschicht – Stratum corneum\nGlanzschicht – Stratum lucidum\nKörnerzellschicht – Stratum granulosum\nStachelzellschicht – Stratum spinosum\nBasalzellschicht – Stratum basale", s: "S. 4–5" },
    { k: "Aufbau", f: "Wo kommt das Stratum lucidum vor?",
      a: "Nur an Handflächen und Fußsohlen. 1–2 Lagen kernloser Keratinozyten.", s: "S. 4" },
    { k: "Aufbau", f: "Was sind Langerhans-Zellen und wo liegen sie?",
      a: "Aus dem Knochenmark stammende Immunzellen in der Stachelzellschicht; ca. 4,5 % der Epidermiszellen, bis 4 Monate Lebensdauer; fangen Pathogene und Antigene ab („Wachposten des Immunsystems“).", s: "S. 4" },
    { k: "Aufbau", f: "Welche Aufgabe hat die Basalzellschicht?",
      a: "Keimzellen teilen sich alle 200–400 h → Regeneration der Epidermis; Wundverschluss geht von hier aus. Enthält Merkelzellen (mechanische Reize).", s: "S. 5" },
    { k: "Aufbau", f: "Wie lange dauert die Erneuerung der Epidermis?",
      a: "27–30 Tage; bei Menschen ab 65 Jahren 5–7 Wochen.\nHandschriftlich: 28 Tage jung, 45–49 Tage alt.", s: "S. 4", h: true },
    { k: "Aufbau", f: "Aus welchen Schichten besteht die Dermis und was enthält sie?",
      a: "Stratum papillare (Zapfenschicht) und Stratum reticulare (Geflechtschicht).\nCa. 70 % Kollagenfasern; Retikulin- und Elastanfasern, Haare, Duft-, Schweiß-, Talgdrüsen, Nervenzellen, Nägel.", s: "S. 6" },
    { k: "Aufbau", f: "Welche Schicht sorgt für Elastizität und Stabilität der Haut?",
      a: "Das Stratum reticulare (Geflechtschicht) durch verflochtene Kollagenfasern; die Matrix enthält viel Hyaluron.", s: "S. 6" },
    { k: "Aufbau", f: "Was ist der Hautturgor und wie wird er getestet?",
      a: "Spannungszustand der Haut (abhängig von Flüssigkeitsgehalt).\nTest: Hautfalte zwischen Daumen und Zeigefinger – bleibt sie stehen, ist der Turgor vermindert → mögliche Exsikkose.", s: "S. 7" },
    { k: "Aufbau", f: "Funktionen der Subcutis?",
      a: "Verschiebbarkeit der Haut, Fettspeicher, Druckpolster, Wärmeisolation. Keine klare Grenze zur Dermis.", s: "S. 7" },
    { k: "Aufbau", f: "Leistenhaut vs. Felderhaut?",
      a: "Leistenhaut: unbehaart, Hohlhand/Fußsohle, Schweißdrüsen, keine Talgdrüsen, Fingerabdruck.\nFelderhaut: ca. 96 % der Haut, behaart, Schweiß- und Talgdrüsen, rhombische Felder.", s: "S. 8–9" },

    { k: "Funktion", f: "Nenne die Funktionen der Haut.",
      a: "Schutz (mechanisch, chemisch, thermisch, Erreger), Lichtabsorption, Temperaturregulation, Wasserhaushalt, Sinneswahrnehmung, Kommunikation, Pheromone, Wundheilung.", s: "S. 9" },
    { k: "Funktion", f: "Was ist der Säureschutzmantel?",
      a: "Hydrolipidfilm auf der Hornschicht, pH ca. 5,5, aus Schweiß, Fettsäuren, Cholesterin und Talg; schützt vor Bakterien und Erregern.", s: "S. 9" },
    { k: "Funktion", f: "Wie verändert sich die Haut im Alter?",
      a: "Atrophie (dünneres Fettgewebe und Papillarschicht), weniger Turgor, Wasserspeicher und Kollagen, mehr Pigmentierung, weniger Schweiß/Talg → trocken.\nFolge: höheres Verletzungsrisiko, langsamere Wundheilung.", s: "S. 10" },

    { k: "Pflege", f: "Welche Reinigungsmittel eignen sich für gesunde Haut?",
      a: "Hautneutrale, leicht saure, zusatzstofffreie Syndets mit Feuchthaltefaktoren (z. B. Urea). Alkalische Seifen greifen den Säureschutzmantel an.", s: "S. 12" },
    { k: "Pflege", f: "Öl-in-Wasser vs. Wasser-in-Öl?",
      a: "O/W: Öltröpfchen in Wasser, ca. 60 % Wasser, Feuchtigkeit verdunstet.\nW/O: Wassertröpfchen in Öl, bildet Fettfilm, luftdurchlässig → für trockene Haut und Altershaut.", s: "S. 12, 14" },
    { k: "Pflege", f: "Faustregel für Hautpflegeprodukte?",
      a: "Feucht auf feucht, fett auf trocken.\nFeuchte Haut → hydrophile Produkte (Lotionen); trockene Haut → hydrophobe Salben.", s: "S. 15" },
    { k: "Pflege", f: "Welche Produkte eignen sich nicht zur täglichen Pflege – und warum keine Pasten am Wundrand?",
      a: "Salben, Puder, Pasten nur therapeutisch.\nPasten decken ab → die Haut kann nicht mehr kontrolliert werden.", s: "S. 14" },
    { k: "Pflege", f: "Wie schützt man den Wundrand vor Mazeration?",
      a: "Transparente Hautschutzfilme (Applikator, Spray, Tuch, Creme); ggf. Transparentfolie, dünner Hydrokolloidverband, Hydrofaser, Stomapaste/-modellierstreifen.", s: "S. 15" },
    { k: "Pflege", f: "Welche Maßnahmen sind ungeeignet oder schädlich?",
      a: "Salben/Pasten in offene Wunden reiben; Zusatz-/Parfümstoffe; Alkohol (Franzbranntwein); abdichtende Pasten; Fette und Öle (Melkfett, Babyöl); Puder; Massieren gefährdeter Stellen.", s: "S. 16" },
    { k: "Pflege", f: "Was ist bei Pergament-, Kortison- oder Altershaut zu beachten?",
      a: "Silikonbeschichtete Wundauflagen oder unbeschichtete Hydrogelkompressen – keine Wundauflagen mit Kleberand.", s: "S. 15" },

    { k: "Schleimhaut", f: "Wodurch unterscheidet sich Schleimhaut von Haut und wo kommt sie vor?",
      a: "Keine Hornschicht, keine Haare; Schleim aus Becherzellen. Mind. zwei Schichten (Epithel, Lamina propria).\nAtemwege, Bindehaut, Mittelohr, Geschlechtsorgane, Harnwege, Verdauungskanal.", s: "S. 16" },
    { k: "Schleimhaut", f: "Wie ist die Gefäßversorgung der Haut aufgebaut?",
      a: "Drei arterielle und venöse Gefäßgebiete übereinander; Kapillarschlingen der Papillen versorgen die gefäßlose Epidermis; viele arteriovenöse Anastomosen (Blutdruck, Wärmeregulation).", s: "S. 17" },

    { k: "Infektion", f: "Was ist ein Erysipel? (Erreger, Klinik, Komplikationen)",
      a: "Akute bakterielle Infektion der Dermis durch β-hämolysierende Streptokokken Gruppe A; häufigste Komplikation des chronischen Lymphödems.\nKlar begrenzte, schmerzhafte, überwärmte Rötung, Fieber.\nKomplikationen: Sepsis, Lymphödem.", s: "S. 20" },
    { k: "Infektion", f: "Erysipel vs. Phlegmone?",
      a: "Phlegmone ist schwerer: einschmelzende Entzündung von Dermis und Subcutis, Strepto-/Staphylokokken, diffus abszedierend, Fisteln, Nekrosen, Sepsis. Ein Erysipel kann in eine Phlegmone übergehen.", s: "S. 20" },
    { k: "Infektion", f: "Erreger und klinische Merkmale des Gasbrands?",
      a: "Clostridien (anaerob), Inkubation 5–48 h.\nÖdem, plötzlicher Wundschmerz, gelbbraun bis blauschwarz, Knistern (Crepitatio), wenig Eiter, kaum Fieber, schneller Puls, fadsüßlicher Geruch.", s: "S. 20–21" },
    { k: "Infektion", f: "Was ist ein Panaritium?",
      a: "Eitrige Entzündung der Finger (selten Zehen) nach Bagatellverletzung; gerötet, pulsierend, druckschmerzhaft. Frühzeitige operative Entlastung.", s: "S. 21" },
    { k: "Infektion", f: "Wie entsteht Herpes zoster und was ist eine Folge?",
      a: "Reaktivierung des Varizella-zoster-Virus aus Nervenzellen; brennender Schmerz, halbseitige bandartige Bläschen im Dermatom.\nFolge: postherpetische Neuralgie.", s: "S. 22" },
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
      a: "A – Asymmetrie\nB – Begrenzung unscharf\nC – Color, Mehrfarbigkeit\nD – Dynamik, Veränderung\nHandschriftlich: E – Erhabenheit.", s: "S. 27", h: true },
    { k: "Tumoren", f: "Risikofaktoren des Plattenepithelkarzinoms?",
      a: "Hohe UV-Dosis, chronische oder infizierte Wunden, Hauterkrankungen, Verbrennungsnarben, strahlengeschädigte Haut, Dauerreizung, Immunsuppression.", s: "S. 27" },

    { k: "Innere", f: "Gicht: Ursache, typische Lokalisation, Therapie?",
      a: "Purinstoffwechselstörung mit Harnsäureablagerung; akuter Anfall nachts, meist Großzehengrundgelenk.\nRuhigstellung, kalte Umschläge, NSAR, Glukokortikoide, Colchicin, ggf. Canakinumab.", s: "S. 28" },
    { k: "Innere", f: "Was kennzeichnet das Pyoderma gangraenosum?",
      a: "Neutrophile Dermatose, oft mit CED oder Neoplasien; schmerzhafte Pustel nach Bagatelltrauma → rasch nekrotisches Geschwür; Rand unterminiert, livide, scharf begrenzt.", s: "S. 29" },

    { k: "MARSI", f: "Was bedeutet MARSI und welche Schäden gehören dazu?",
      a: "Medical Adhesive-Related Skin Injuries.\nEpidermales Stripping, Spannungsblasen, Skin Tears, toxisches und allergisches Kontaktekzem, Mazeration, Follikulitis.", s: "S. 30–31" },
    { k: "MARSI", f: "Wie vermeidet man Spannungsblasen?",
      a: "Dehnbare Produkte nicht unter Spannung anbringen; an Gelenken in Beugung anlegen; faltenfrei applizieren.", s: "S. 30" },
    { k: "MARSI", f: "Toxisches vs. allergisches Kontaktekzem durch Verbandmittel?",
      a: "Toxisch: klar begrenzt, deckungsgleich mit dem Verband.\nAllergisch: gerötet, juckend, nässend, Bläschen, über die Auflagefläche hinaus.", s: "S. 31" },
    { k: "MARSI", f: "Skin-Tear-Kategorien?",
      a: "I – kein Gewebeverlust, Lappen repositionierbar\nII – teilweiser Verlust des Hautlappens\nIII – vollständiger Hautlappenverlust", s: "S. 31" },
    { k: "MARSI", f: "Versorgung eines Skin Tears in 4 Schritten?",
      a: "1. Blutung mit sterilen Kompressen stillen\n2. sanft mit NaCl 0,9 % oder Wundspüllösung reinigen\n3. Hautlappen repositionieren (sterile Pinzette)\n4. mit silikonbeschichteten, nicht klebenden Verbandmitteln fixieren", s: "S. 31" },
    { k: "MARSI", f: "Wie beugt man Follikulitis vor?",
      a: "Haare mit elektrischer Haarschneidemaschine kürzen statt rasieren; Verbandmittel immer in Haarwuchsrichtung abziehen.", s: "S. 31" }
  ],

  quiz: [
    { f: "Welche Reihenfolge der Epidermis-Schichten ist richtig (von außen nach innen)?",
      o: ["Stratum corneum → lucidum → granulosum → spinosum → basale", "Stratum basale → spinosum → granulosum → lucidum → corneum", "Stratum corneum → granulosum → lucidum → basale → spinosum", "Stratum lucidum → corneum → spinosum → granulosum → basale"],
      e: "Hornschicht – Glanzschicht – Körnerzellschicht – Stachelzellschicht – Basalzellschicht.", s: "S. 4–5" },
    { f: "Wo kommt das Stratum lucidum vor?",
      o: ["Nur an Handflächen und Fußsohlen", "An der gesamten Felderhaut", "Nur an der Schleimhaut", "Nur an behaarter Haut"],
      e: "Glanzschicht: 1–2 Lagen kernloser Keratinozyten; nur an Handflächen und Fußsohlen.", s: "S. 4" },
    { f: "In welcher Schicht liegen die Langerhans-Zellen?",
      o: ["Stratum spinosum (Stachelzellschicht)", "Stratum corneum (Hornschicht)", "Stratum reticulare der Dermis", "Subcutis"],
      e: "Die Stachelzellschicht enthält die Langerhans-Zellen („Wachposten des Immunsystems“).", s: "S. 4–5" },
    { f: "Wie lange dauert die Erneuerung der Epidermis laut Drucktext bei jüngeren Menschen?",
      o: ["27–30 Tage", "5–7 Tage", "200–400 Tage", "3–4 Monate"],
      e: "27–30 Tage; ab 65 Jahren 5–7 Wochen. (Handschriftlich: 28 Tage jung, 45–49 Tage alt.)", s: "S. 4" },
    { f: "Welche Schicht ist für die Regeneration der Epidermis zuständig?",
      o: ["Stratum basale – Keimzellen teilen sich alle 200–400 h", "Stratum corneum – tägliche Abschilferung", "Stratum lucidum – kernlose Keratinozyten", "Subcutis – Fettgewebe"],
      e: "Basalzellschicht: Keimzellen, Teilung alle 200–400 h; Wundverschluss geht von hier aus.", s: "S. 5" },
    { f: "Wie hoch ist der Kollagenfaser-Anteil der Dermis?",
      o: ["Ca. 70 %", "Ca. 4,5 %", "Ca. 96 %", "Ca. 30 %"],
      e: "Dermis: Bindegewebe mit ca. 70 % Kollagenfasern.", s: "S. 6" },
    { f: "Was zeigt eine stehenbleibende Hautfalte beim Turgor-Test an?",
      o: ["Verminderten Turgor – mögliches Zeichen einer Exsikkose", "Ein Lymphödem (Stemmer positiv)", "Normalen, altersgerechten Turgor", "Eine Überwässerung"],
      e: "Hautfalte zwischen Daumen und Zeigefinger; bleibt sie stehen → verminderter Turgor, mögliches Zeichen einer Exsikkose.", s: "S. 7" },
    { f: "Welchen pH-Wert hat der Säureschutzmantel der Haut?",
      o: ["Ca. 5,5", "Ca. 7,4", "Ca. 8,5", "Ca. 3,0"],
      e: "Säureschutzmantel (Hydrolipidfilm): pH ca. 5,5, aus Schweiß, Fettsäuren, Cholesterin und Talg.", s: "S. 9" },
    { f: "Welche Faustregel gilt für Hautpflegeprodukte?",
      o: ["Feucht auf feucht, fett auf trocken", "Fett auf feucht, feucht auf trocken", "Immer Salbe, unabhängig vom Hautzustand", "Puder auf trockene Haut"],
      e: "Feuchte Haut → hydrophile Produkte (Lotionen); trockene Haut → hydrophobe Salben.", s: "S. 15" },
    { f: "Welche Creme eignet sich für trockene Haut und Altershaut?",
      o: ["Wasser-in-Öl (W/O)", "Öl-in-Wasser (O/W)", "Gel", "Puder"],
      e: "W/O: Wassertröpfchen in Öl, bildet Fettfilm, luftdurchlässig → für trockene Haut und Altershaut.", s: "S. 12, 14" },
    { f: "Warum sind Pasten als Wundrandschutz ungeeignet?",
      o: ["Sie decken ab – die Haut kann nicht mehr kontrolliert werden", "Sie sind zu flüssig und laufen in die Wunde", "Sie enthalten immer Alkohol", "Sie kühlen die Wunde zu stark"],
      e: "Paste: abdeckend, aufsaugend, austrocknend; nicht als Wundrandschutz – Hautkontrolle unmöglich.", s: "S. 14" },
    { f: "Was ist bei Pergament-, Kortison- oder Altershaut zu beachten?",
      o: ["Keine Wundauflagen mit Kleberand", "Wundauflagen immer zusätzlich mit Pflaster fixieren", "Vor dem Verbandwechsel mit Franzbranntwein einreiben", "Nur Zinkpaste verwenden"],
      e: "Silikonbeschichtete Wundauflagen oder unbeschichtete Hydrogelkompressen – keine Wundauflagen mit Kleberand.", s: "S. 15" },
    { f: "Wie oft müssen Analtampons bei Stuhlinkontinenz mindestens gewechselt werden?",
      o: ["Mindestens 2× täglich (Ileusgefahr)", "Einmal wöchentlich", "Alle 3 Tage", "Nur bei sichtbarer Verschmutzung"],
      e: "Analtampons oder Stuhldrainage bei Stuhlinkontinenz; Tampons mind. 2× täglich wechseln – Ileusgefahr.", s: "S. 15" },
    { f: "Welcher Erreger verursacht typischerweise ein Erysipel?",
      o: ["β-hämolysierende Streptokokken der Gruppe A", "Clostridien", "Varizella-zoster-Virus", "Dermatophyten"],
      e: "Erysipel: akute bakterielle Infektion der Dermis, meist durch β-hämolysierende Streptokokken der Gruppe A.", s: "S. 20" },
    { f: "Was ist die häufigste Komplikation des chronischen Lymphödems?",
      o: ["Erysipel", "Melanom", "Gicht", "Psoriasis"],
      e: "Das Erysipel ist die häufigste Komplikation des chronischen Lymphödems.", s: "S. 20" },
    { f: "Welche Merkmale passen zum Gasbrand?",
      o: ["Knistern (Crepitatio), wenig Eiter, kaum Fieber, schneller Puls", "Viel Eiter, hohes Fieber, langsamer Puls", "Halbseitige bandartige Bläschen", "Silbrig-weiße Schuppung"],
      e: "Gasbrand (Clostridien, anaerob): Ödem, plötzlich verstärkter Wundschmerz, Verfärbung gelbbraun bis blauschwarz, Knistern, wenig Eiter, kaum Fieber, schneller Puls, fadsüßlicher Geruch.", s: "S. 20–21" },
    { f: "Was ist eine typische Folge des Herpes zoster?",
      o: ["Postherpetische Neuralgie", "Atrophie blanche", "Elephantiasis", "Gichttophi"],
      e: "Reaktivierung des Varizella-zoster-Virus; Folge: postherpetische Neuralgie über Monate bis Jahre.", s: "S. 22" },
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
      e: "Asymmetrie · Begrenzung unscharf · Color (Mehrfarbigkeit) · Dynamik.", s: "S. 27" },
    { f: "Die aktinische Keratose ist eine Vorstufe welches Tumors?",
      o: ["Plattenepithelkarzinom", "Basalzellkarzinom", "Melanom", "Angiosarkom"],
      e: "Aktinische Keratose: in-situ-Karzinom, Vorstufe des Plattenepithelkarzinoms.", s: "S. 24–25" },
    { f: "Wo tritt ein akuter Gichtanfall am häufigsten auf?",
      o: ["Im Großzehengrundgelenk", "Im Kniegelenk", "Im Handgelenk", "In der Wirbelsäule"],
      e: "Akuter Anfall meist nachts, am häufigsten Großzehengrundgelenk.", s: "S. 28" },
    { f: "Wie sieht der Ulcusrand beim Pyoderma gangraenosum aus?",
      o: ["Unterminiert, livide, scharf begrenzt", "Perlschnurartig mit Teleangiektasien", "Silbrig-weiß schuppend", "Wie ausgestanzt mit Kalkablagerungen"],
      e: "Pyoderma gangraenosum: schmerzhafte Pustel → rasch nekrotisches Geschwür; Ulcusrand unterminiert, livide, scharf begrenzt.", s: "S. 29" },
    { f: "Woran erkennt man ein toxisches Kontaktekzem durch Verbandmittel?",
      o: ["Klar begrenzt, deckungsgleich mit dem Verband", "Juckend, nässend, über die Auflagefläche hinaus", "Bandförmig im Dermatom", "Nur an Handflächen und Fußsohlen"],
      e: "Toxisch: klar begrenzt, deckungsgleich mit dem Verband. Allergisch: gerötet, juckend, nässend, Bläschen, über die Auflagefläche hinaus.", s: "S. 31" },
    { f: "Ein Skin Tear mit teilweisem Verlust des Hautlappens entspricht …",
      o: ["Kategorie II", "Kategorie I", "Kategorie III", "Kategorie IV"],
      e: "I kein Gewebeverlust · II teilweiser Verlust des Hautlappens · III vollständiger Hautlappenverlust.", s: "S. 31" },
    { f: "Wie beugt man einer Follikulitis durch Verbandmittel vor?",
      o: ["Haare mit elektrischer Schneidemaschine kürzen; Verband in Haarwuchsrichtung abziehen", "Haare vor jedem Verbandwechsel nass rasieren", "Verband gegen die Haarwuchsrichtung schnell abziehen", "Haut vorher mit Babyöl einreiben"],
      e: "Follikulitis durch Rasur oder Haarausriss → Haare mit elektrischer Schneidemaschine kürzen; Verband in Haarwuchsrichtung abziehen.", s: "S. 31" },
    { f: "Was ist bei der Versorgung eines Skin Tears der erste Schritt?",
      o: ["Blutung mit sterilen Kompressen stillen", "Hautlappen mit Pflasterstreifen fixieren", "Hautlappen abtragen", "Wunde mit Alkohol desinfizieren"],
      e: "1. Blutung stillen · 2. sanft mit NaCl 0,9 % oder Wundspüllösung reinigen · 3. Hautlappen repositionieren · 4. mit nicht klebenden, silikonbeschichteten Verbandmitteln fixieren.", s: "S. 30–31" },
    { f: "Wie entstehen die Narben der Livedo-Vaskulopathie?",
      o: ["Als Atrophie blanche", "Als Gichttophi", "Als perlschnurartiger Saum", "Als Papillomatose"],
      e: "Livedo-Vaskulopathie: schmerzhafte thromboembolische Verschlusskrankheit der Hautgefäße mit Ulzerationen an den Unterschenkeln, Narben als Atrophie blanche.", s: "S. 28–30" }
  ],

  zusammenfassung: `
<h3>1. Haut – Aufbau <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 3–9</span></h3>
<ul>
  <li>Größtes Organ: 1,5–2 m², 7–10 kg. Drei Schichten: Epidermis (Oberhaut), Dermis/Corium (Lederhaut), Subcutis/Hypodermis (Unterhaut). Dazu Adnexorgane: Haare, Nägel, Schweiß-, Duft- und Talgdrüsen.</li>
  <li>Epidermis hat keine Blutgefäße (Versorgung per Diffusion aus der oberen Dermis). Sie erneuert sich in 27–30 Tagen, ab 65 Jahren dauert es 5–7 Wochen (S. 4).</li>
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
  <li><b>Langerhans-Zellen:</b> aus dem Knochenmark, ca. 4,5 % der epidermalen Zellen, Lebensdauer bis 4 Monate; fangen mit beweglichen Dendriten Pathogene und Antigene ab – „Wachposten des Immunsystems“ (S. 4).</li>
  <li><b>Dermis:</b> deutlich dicker als die Epidermis, Bindegewebe mit ca. 70 % Kollagenfasern. Zwei Schichten: Stratum papillare (Papillarschicht: Zapfen verankern die Oberhaut, Versorgung der Basalschicht, Transport von Immunzellen) und Stratum reticulare (Geflechtschicht: Kollagenfasern → Elastizität und Stabilität; Matrix mit viel Hyaluron). Enthält Retikulin- und Elastanfasern, Haare, Drüsen, Nervenzellen und Nägel (S. 6).</li>
  <li>Extrazelluläre Matrix (Proteoglykan-Hyaluronat-Komplex) bindet viel Wasser → hauptverantwortlich für den Hautturgor (S. 7).</li>
  <li><b>Hautturgor-Test:</b> Hautfalte zwischen Daumen und Zeigefinger; bleibt sie stehen → verminderter Turgor, mögliches Zeichen einer Exsikkose. Mit dem Alter nimmt der Turgor physiologisch ab (S. 7).</li>
  <li><b>Subcutis:</b> ohne klare Grenze zur Dermis; lockeres Fettgewebe → Verschiebbarkeit, Fettspeicher, Druckpolster, Wärmeisolation (S. 7).</li>
  <li><b>Leistenhaut:</b> unbehaart, Hohlhand und Fußsohle; Merkel-Zellen und Schweißdrüsen, keine Talgdrüsen; genetisch festgelegtes Muster (Fingerabdruck) (S. 8).</li>
  <li><b>Felderhaut:</b> ca. 96 % der Körperoberfläche; behaart, mit Schweiß- und Talgdrüsen, rhombische Felder (S. 9).</li>
</ul>
<p class="hand">Handschriftlich (S. 3): Regeneration „28 Tage“ bei jungen, „45–49 Tage“ bei alten Menschen. Der Drucktext nennt 27–30 Tage bzw. 5–7 Wochen ab 65 Jahren.</p>

<h3>2. Funktionen und Säureschutzmantel <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 9</span></h3>
<ul>
  <li>Funktionen: Schutz vor mechanischen, chemischen und thermischen Einflüssen; Schutz vor Krankheitserregern; Absorbierung von Sonnenlicht; Temperaturregulation; Regulation des Wasserhaushalts; Sinneswahrnehmung; Kommunikation (Erröten, Erblassen); Pheromone; Wundheilung.</li>
  <li>Säureschutzmantel (Hydrolipidfilm): pH ca. 5,5, aus Schweiß, Fettsäuren, Cholesterin und Talg; Schutz vor Bakterien und Erregern.</li>
  <li>Die Haut kann Substanzen resorbieren – bei Wundtherapeutika wie Jod oft unerwünscht.</li>
</ul>

<h3>3. Altershaut <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 10</span></h3>
<ul>
  <li>Haut atrophiert: Fettgewebe und Papillarschicht dünner → weniger Druck- und Zugfestigkeit, geringerer Turgor, weniger Wasserspeicherung, weniger Kollagen → Falten.</li>
  <li>Mehr Pigmentierung (Altersflecken); weniger Schweiß- und Talgproduktion → Hydrolipidfilm geschwächt → trocken, schuppig.</li>
  <li>Folge: erhöhtes Verletzungsrisiko und langsamere Wundheilung.</li>
</ul>

<h3>4. Hautschutz und -pflege <span class="seite">S. 10–16</span></h3>
<ul>
  <li>Hautschutz, -beobachtung und -pflege gehören zur Wundversorgung, nicht nur zur Prävention. Wundrand und -umgebung sind durch Exsudat und Ausscheidungen gefährdet.</li>
  <li>Hautprobleme bei Grunderkrankungen (S. 11): Diabetes (trockene Haut, Eczéma craquelé, Pilzinfektionen bei ca. 80 %, Malum perforans, Rhagaden); CVI (Stauungsekzem, Ödeme, Dermatoliposklerose, Capillaritis alba, Hyperpigmentierung); pAVK (livide, kühle, dünne Haut, Rarefizierung der Hautanhangsgebilde, Nagelmykose); DFS (Hyperkeratosen); Wundexsudat (Mazeration, Erosion, toxisches Kontaktekzem); Alter.</li>
  <li>Reinigung: hautneutrale bis leicht saure, zusatzstofffreie Syndets; alkalische Seifen und Zusatzstoffe greifen den Säureschutzmantel an (S. 12).</li>
  <li>Pflege nach Hautzustand (S. 12): trockene Haut, Xerodermie und Altershaut → Wasser-in-Öl, Urea, Omega-Fettsäuren; fettige Haut → milde Syndets, wässrige Öl-in-Wasser-Produkte; empfindliche Haut → hypoallergen, ohne Farb-, Duft- und Konservierungsstoffe, keine Seifen.</li>
</ul>
<div class="tabelle"><table>
  <caption>Hautpflegeprodukte ★ (S. 14)</caption>
  <thead><tr><th>Produkt</th><th>Merkmale</th></tr></thead>
  <tbody>
    <tr><td>Creme – Öl-in-Wasser (O/W)</td><td>kleinste Öltröpfchen in Wasser, hoher Wasseranteil (ca. 60 %); Hautfeuchtigkeit kann verdampfen</td></tr>
    <tr><td>Creme – Wasser-in-Öl (W/O)</td><td>kleinste Wassertröpfchen in Öl/Fett; Fettfilm auf der Haut, durch Wasseranteile luftdurchlässig</td></tr>
    <tr><td>Lotion</td><td>flüssig, meist O/W; hoher Wassergehalt → oft Konservierungsmittel</td></tr>
    <tr><td>Gel</td><td>fettfrei, durchsichtig, kühlend; kaum hautpflegender Effekt</td></tr>
    <tr><td>Puder</td><td>Streupulver (z. B. Talk, Zinkoxid, Stärke)</td></tr>
    <tr><td>Paste</td><td>abdeckend, aufsaugend, austrocknend (z. B. Mykosen); nicht als Wundrandschutz – Hautkontrolle unmöglich</td></tr>
    <tr><td>Salbe</td><td>wasserfrei, haftet stark, verdunstet nicht</td></tr>
  </tbody>
</table></div>
<p>Emulsion = Gemisch zweier nicht mischbarer Flüssigkeiten, innere Phase in äußerer verteilt. Salben, Puder und Pasten nur therapeutisch, nicht zur täglichen Pflege.</p>
<p class="merke"><b>Faustregel (S. 15):</b> feucht auf feucht, fett auf trocken. Feuchte Haut → hydrophile Produkte (Lotionen); trockene Haut → hydrophobe Salben.</p>
<ul>
  <li><b>Empfohlen bei Wunden (S. 15):</b> Wundrand vor Mazeration schützen (transparente Hautschutzfilme, ggf. Transparentfolie, dünner Hydrokolloidverband, Hydrofaser, Stomapaste); Narbenpflege mit Dexpanthenol; Pflasterspray bei frisch genähten Wunden; Analtampons oder Stuhldrainage bei Stuhlinkontinenz (Tampons mind. 2× täglich wechseln – Ileusgefahr); silikon- oder Soft-Gel-beschichtete Auflagen ohne Klebefläche; bei Pergament-, Kortison- oder Altershaut keine Wundauflagen mit Kleberand; Sakralregion zusätzlich mit semipermeabler Folie fixieren.</li>
  <li><b>Ungeeignet (S. 16):</b> Salben, Cremes, Zinkpasten in offene Wunden reiben; Produkte mit Zusatz- oder Parfümstoffen; Alkohollösungen (Franzbranntwein); abdichtende Pasten; Fette und Öle (Melkfett, Babyöl, Lebertranpaste); Puder; Massieren gefährdeter Hautstellen.</li>
</ul>

<h3>5. Schleimhaut und Gefäßversorgung <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 16–17</span></h3>
<ul>
  <li><b>Schleimhaut:</b> feucht, Schleim aus Becherzellen; keine Hornschicht, keine Haare. Vorkommen dort, wo Hohlorgane mit der Umwelt verbunden sind: Atemwege, Bindehaut, Mittelohr, Geschlechtsorgane, Harnwege, Verdauungskanal. Mindestens zwei Schichten: Epithel und Lamina propria. Schutz gegen Erreger.</li>
  <li><b>Gefäßversorgung:</b> drei arterielle und venöse Gefäßgebiete übereinander (unter der Subcutis, an der Grenze Subcutis/Cutis, unter den Lederhautpapillen). Kapillarschlingen der Papillen versorgen die gefäßlose Epidermis. Viele arteriovenöse Anastomosen in der Dermis → Blutdruck, Organdurchblutung, Wärmeregulation.</li>
</ul>

<h3>6. Hauterkrankungen <span class="seite">S. 18–30</span></h3>
<ul>
  <li>Ca. 2.000–3.000 Dermatosen. Entstehung durch exogene Noxen, Einflüsse aus dem Gesamtorganismus oder Fehlanlagen der Haut selbst (S. 18).</li>
  <li>Hautflora (S. 19): im Mittel 10<sup>6</sup> Bakterien/cm² (10<sup>2</sup> trocken bis 10<sup>8</sup> feucht); residente (Dauerbesiedlung) und transiente Flora (Anflugkeime).</li>
</ul>
<h4>Bakterielle Infektionen</h4>
<ul>
  <li><b>Erysipel</b> <span class="stern">★</span>: akute bakterielle Infektion der Dermis, meist durch β-hämolysierende Streptokokken der Gruppe A; häufigste Komplikation des chronischen Lymphödems. Klar begrenzte, schmerzhafte, sich schnell ausbreitende Rötung und Überwärmung, Krankheitsgefühl. Unbehandelt Lymphknotenschwellung und hohes Fieber; Komplikationen: Sepsis, Entstehung oder Verschlechterung eines Lymphödems (S. 20).</li>
  <li><b>Phlegmone:</b> schwerer als Erysipel; einschmelzende Entzündung von Dermis und oft Subcutis, meist Strepto- und/oder Staphylokokken; diffus abszedierend, Fistelgänge, Nekrosen, Sepsis. Ein Erysipel kann in eine Phlegmone übergehen (S. 20).</li>
  <li><b>Gasbrand:</b> durch Clostridien (anaerob), Inkubation 5–48 h; Ödem, plötzlich verstärkter Wundschmerz, Verfärbung gelbbraun bis blauschwarz, Knistern (Crepitatio), wenig Eiter, kaum Fieber, aber schneller Puls, fadsüßlicher Geruch. Therapie: Antitoxin, radikales Débridement, ggf. Amputation, hyperbare Sauerstofftherapie, Antibiotika (S. 20–21).</li>
  <li><b>Panaritium:</b> eitrige Entzündung der Finger (selten Zehen) nach Bagatellverletzung; frühzeitige operative Entlastung. Formen: cutaneum, subunguale/periunguale, subcutaneum, ossale/articulare, tendinosum (Komplikation: Hohlhand- und V-Phlegmone) (S. 21).</li>
</ul>
<h4>Viren, Pilze, Autoimmun, erblich</h4>
<ul>
  <li><b>Herpes zoster:</b> Reaktivierung des Varizella-zoster-Virus aus den Nervenzellen; brennender Schmerz, dann halbseitige, bandartige Bläschen im Dermatom; Folge: postherpetische Neuralgie über Monate bis Jahre (S. 22).</li>
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
<p class="merke"><b>ABCD-Regel ★ (S. 27):</b> Asymmetrie · Begrenzung unscharf · Color (Mehrfarbigkeit) · Dynamik (Veränderung im Verlauf). <span class="hand-inline">Handschriftlich ergänzt, nicht im Druck: E = Erhabenheit.</span></p>

<h3>8. Haut bei inneren Erkrankungen <span class="seite">S. 28–30</span></h3>
<ul>
  <li>Hautzeichen sind diagnostische Warnzeichen, z. B. Schwitzen bei Hyperthyreose, Infektneigung bei Diabetes, Zyanose bei Herz-/Lungenerkrankungen, Purpura bei Blutungsneigung.</li>
  <li><b>Gicht</b> (Arthritis urica): Purinstoffwechselstörung mit Harnsäureablagerung; akuter Anfall meist nachts, am häufigsten Großzehengrundgelenk. Therapie: Ruhigstellung, kalte Umschläge, NSAR, Glukokortikoide, Colchicin, ggf. Canakinumab. Gichttophi = schmerzfreie Knoten unter der Haut bei lange erhöhter Harnsäure.</li>
  <li><b>Kalziphylaxie:</b> Kalksalzablagerung in Haut und Gefäßen → ischämische Infarkte, steinharte, sehr schmerzhafte Knoten.</li>
  <li><b>Livedo-Vaskulopathie:</b> schmerzhafte thromboembolische Verschlusskrankheit der Hautgefäße mit Ulzerationen an den Unterschenkeln, Narben als Atrophie blanche.</li>
  <li><b>Pyoderma gangraenosum</b> (neutrophile Dermatose): oft mit chronisch-entzündlichen Darmerkrankungen oder Neoplasien; schmerzhafte Pustel, oft nach Bagatelltrauma oder OP, rasch nekrotisches Geschwür; Ulcusrand unterminiert, livide, scharf begrenzt. Therapie systemisch (Glukokortikoide, Ciclosporin u. a.).</li>
</ul>

<h3>9. Hautschäden durch Verbandmittel – MARSI <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 30–31</span></h3>
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
`
});
