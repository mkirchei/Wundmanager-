/*
 * Thema: Schmerzmanagement in der Wundversorgung
 * Quelle: murimed-Lernheft Schmerzmanagement in der Wundversorgung, Modul II
 * (Seitenangaben beziehen sich auf das Heft).
 * Inhalte übernommen aus "Zusammenfassung_Schmerzmanagement_Wundversorgung.pdf" und
 * "Lernkarten_Schmerzmanagement_Wundversorgung.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "schmerz",
  titel: "Schmerzmanagement in der Wundversorgung",
  kurz: "Schmerz",
  quelle: "murimed-Lernheft Schmerzmanagement in der Wundversorgung, Modul II",
  hinweis:
    "Quelle ist ausschließlich das Lernheft; Seitenzahlen in Klammern. ★ = im Heft handschriftlich als „Prüfungsfrage“ markiert. Handschriftliche Notizen sind als solche gekennzeichnet und nicht geprüft. Die im Heft zitierten Primärquellen (DNQP, Feichtner/Kössler u. a.) wurden nicht separat geprüft.",

  karten: [
    { k: "Grundlagen", f: "Wie definiert die IASP Schmerz?",
      a: "„Eine unangenehme sensorische und emotionale Erfahrung, die mit einer tatsächlichen oder potenziellen Gewebeschädigung verbunden ist oder einer solchen ähnelt.“", s: "S. 4" },
    { k: "Grundlagen", f: "Welche Anmerkungen ergänzen die IASP-Definition?",
      a: "Immer persönliche Erfahrung (bio-psycho-sozial) · Schmerz ≠ Nozizeption · Konzept durch Lebenserfahrung gelernt · Schmerzbericht respektieren · nachteilige Folgen möglich · Unfähigkeit zu kommunizieren schließt Schmerz nicht aus.", s: "S. 4" },
    { k: "Grundlagen", f: "Welche Bedeutung hat Schmerztherapie laut Vorwort?",
      a: "„Jede Schmerzerfahrung formt die nächste“ (DNQP) – Verantwortung bei jedem Verbandwechsel. Zugang zur Schmerztherapie ist ein menschliches Grundrecht (IPS/IASP 2010). Schmerz wirkt negativ auf die Wundheilung.", s: "S. 3" },
    { k: "Grundlagen", f: "Nenne die Komponenten der Schmerzempfindung.",
      a: "Sensorisch-diskriminativ (Ort, Intensität) · affektiv-motivational (Unangenehmheit) · kognitiv (Einstellung) · vegetativ (Blutdruck, Pupillen) · motorisch (Reflexe, Muskelverspannung).", s: "S. 5" },
    { k: "Entstehung", f: "Wie entsteht und wird Schmerz weitergeleitet?",
      a: "Nozizeptoren (polymodal) → elektrische Impulse → Rückenmark → Thalamus (Filter) → somatosensorischer Cortex (Was, Wo, Welche Art, Wie stark) und limbisches System (emotionale Bewertung).", s: "S. 5" },
    { k: "Entstehung", f: "Warum heißt der Thalamus „Tor des Bewusstseins“?",
      a: "Er entscheidet, welche (Schmerz-)Reize wahrgenommen werden (Gate-Control-Theorie, Melzack/Wall); Konzentration und Fokussierung entscheiden mit – Ablenkung kann die Wahrnehmung beeinflussen.", s: "S. 6" },
    { k: "Entstehung", f: "Deszendierende vs. segmentale Schmerzhemmung?",
      a: "Deszendierend: Serotonin, Noradrenalin, Endorphine hemmen im Rückenmark; Biorhythmus → abends mehr Schmerz; unterstützt durch Opiate, Antidepressiva, Antikonvulsiva.\nSegmental: Druck-/Reibreiz hemmt im Rückenmark → Basis für TENS, Quaddelung, Akupunktur.", s: "S. 6" },
    { k: "Arten", f: "Was kennzeichnet nozizeptiven Schmerz?",
      a: "Warnsignal aus Gewebeschaden bei intaktem Nervensystem; somatisch oder viszeral (dumpf, kolikartig). Wundschmerz ist häufig nozizeptiv → antipyretische, ggf. morphinhaltige Analgetika.", s: "S. 7" },
    { k: "Arten", f: "Was kennzeichnet neuropathischen Schmerz?",
      a: "Schädigung des somatosensorischen Nervensystems; spitz, hell, einschießend, elektrisierend; Empfindungsort oft ≠ Entstehungsort; häufig bei Tumorwunden → trizyklische Antidepressiva, Antiepileptika.", s: "S. 8" },
    { k: "Arten", f: "Noziplastischer und psychogener Schmerz?",
      a: "Noziplastisch: veränderte Nozizeptoren ohne Gewebe-/Nervenschaden, Sensibilisierung → desensibilisierende Methoden.\nPsychogen: durch Angst/Stress, schon der Gedanke an den Verbandwechsel → genauso ernst nehmen.", s: "S. 8" },
    { k: "Arten", f: "Akuter vs. prozeduraler Schmerz?",
      a: "Akut: normale Reaktion auf Gewebeschaden, Warnsignal, biologischer Nutzen.\nProzedural: Sonderform durch Maßnahmen (Verbandwechsel, Injektion, Spülung) – Kreislauf aus Schmerz, Angst, Stress; positive Erwartung senkt Schmerz.", s: "S. 8–9" },
    { k: "Arten", f: "Primär vs. sekundär chronischer Schmerz?",
      a: "Chronisch = mind. 3 Monate, Warnfunktion verloren.\nPrimär: mit emotionalem Leid/Funktionseinschränkung, nicht durch andere Diagnose erklärbar.\nSekundär: auf Grunderkrankung zurückzuführen (Tumor, postoperativ, neuropathisch).", s: "S. 9" },
    { k: "Arten", f: "Deafferenzierungs- und Phantomschmerz?",
      a: "Deafferenzierung: Unterbrechung großer Nervenstämme (Amputation) oder Bahnen (Querschnitt).\nPhantomschmerz: Schmerz in nicht mehr vorhandenem Körperteil; Umorganisation im sensomotorischen Cortex; ≠ Stumpfschmerz.", s: "S. 9–10" },
    { k: "Arten", f: "Somatischer vs. viszeraler Schmerz?",
      a: "Somatisch: Muskeln/Bindegewebe, dumpf, strahlt aus.\nViszeral: innere Organe, schlecht lokalisierbar, vegetative Reaktionen; Übertragungsschmerz in Head-Zonen (Herzinfarkt → linker Arm, Gallenkolik → Schulter).", s: "S. 10" },
    { k: "Arten", f: "Was ist chronischer Wund- und Durchbruchschmerz?",
      a: "Dauerschmerz: Hintergrundschmerz, Mischform aus nozizeptiv, neuropathisch, psychogen; Ursachen Entzündung, Ischämie, Infektion.\nDurchbruchschmerz: akut, kurz, mittel-hoch, gleicher Ort und Ursache.", s: "S. 11" },
    { k: "Arten", f: "Was ist das Wind-up-Phänomen?",
      a: "Sensibilisierung: Ein sich wiederholender Schmerzreiz führt zu einer Intensivierung der Schmerzreaktion – leichte Berührung/Druck wird stark schmerzhaft; Lernvorgänge im Rückenmark = „Schmerzgedächtnis“, auch nach Beseitigung der Ursache.", s: "S. 11" },
    { k: "Konzepte", f: "Was beschreibt das bio-psycho-sozial-spirituelle Konzept?",
      a: "Bio (Entzündung, Verspannung) · psycho (Angst, Hilflosigkeit) · sozial (Stress, Isolation) · spirituell (Sinnfragen, Zukunftsangst). Schmerz nie nur körperlich – die beste Therapie berücksichtigt alle Ebenen.", s: "S. 12" },
    { k: "Konzepte", f: "Nenne kulturspezifische Schmerzkonzepte.",
      a: "Zeichen Gottes (erdulden) · Familienereignis (Zuwendung, offen geäußert) · eigener Wille (unterdrückt, Rückzug) · Strafe Gottes (stilles Aushalten) · technisch bewältigbar (präzise schildern, sofort handeln) · Stoizismus (verheimlichen).", s: "S. 13–14" },
    { k: "Wundheilung", f: "Wie beeinflusst Schmerz die Wundheilung?",
      a: "Systemischer Einflussfaktor: reduzierte Beweglichkeit/Mobilität, negative Stimmung, Abwehr gegen Maßnahmen. „Wir behandeln nicht die Wunde, sondern immer den ganzen Menschen.“ Simple Maßnahmen: angewärmte Spüllösung, unnötige Berührung vermeiden.", s: "S. 14–15" },
    { k: "Erfassung", f: "Was ist ein Schmerzscreening? ★",
      a: "Handschr. („Prüfungsfrage“): Screening = Ersteinschätzung Ja/Nein. Bei Nein → keine weitere Einschätzung (kein Assessment).", s: "S. 16", h: true },
    { k: "Erfassung", f: "Was erfasst das Schmerzassessment?",
      a: "Zeitliche Dimension · Intensität und akzeptables Schmerzmaß · Lokalisation/Ausstrahlung · Qualität · Begleitsymptome · Bedeutung (Kultur) · verstärkende/lindernde Faktoren · Effekte auf Lebensqualität · Medikamententagebuch (auch OTC) · Stimmung.", s: "S. 16" },
    { k: "Erfassung", f: "Welche Skalen zur Schmerzintensität gibt es?",
      a: "NRS (0–10), VRS (kein … stärkster vorstellbarer Schmerz), Gesichter-Rating-Skala (GRS). Es gibt keine „beste“ Skala – die für die Person passende finden und dokumentieren.", s: "S. 16" },
    { k: "Erfassung", f: "Welche Fremdeinschätzungsinstrumente gibt es?",
      a: "BESD (Beurteilung von Schmerzen bei Demenz: Atmung, Lautäußerung, Mimik, Körpersprache, Verhalten – handschr.), BISAD (alte Menschen mit Demenz), ZOPA (handschr.: Zurich Observation Pain Assessment, z. B. Wachkoma). Handschr. zusätzlich PAIC 15.", s: "S. 15–17", h: true },
    { k: "Erfassung", f: "Wovon ist bei Wunden grundsätzlich auszugehen?",
      a: "Bei Wunden ist so lange davon auszugehen, dass sie schmerzhaft sind, bis der betroffene Mensch das Gegenteil sagt (deutlich macht).\nHandschr.: → Schmerzmittel!", s: "S. 17–18", h: true },
    { k: "Erfassung", f: "Indirekte Schmerzindikatoren: Sprache und Mimik? (Übung I)",
      a: "Verbal: Fragen nach Schmerzmitteln, Bitten um Hilfe, Klagen, Fluchen.\nVokal: Stöhnen, Weinen, Schreien, Wimmern.\nMimik: Grimassen, zugekniffene Augen, Zähne zusammenbeißen, Stirn runzeln.", s: "S. 33" },
    { k: "Erfassung", f: "Indirekte Indikatoren: Körper und Verhalten? (Übung I)",
      a: "Körper: Muskeltonus ↑, Zittern, Blutdruck/Puls verändert, Atmung, Schwitzen, Steifheit, Schlafstörung.\nVerhalten: Unruhe, Zurückschrecken, Schonhaltung, Aggressivität, Nahrungsverweigerung, Teilnahmslosigkeit, Weglauftendenz.", s: "S. 33" },
    { k: "Verbandwechsel", f: "Schmerzreduktion vor dem Verbandwechsel?",
      a: "Informieren, Schmerzen immer ernst nehmen, Erfahrung einbeziehen, absprechen, rechtzeitig Analgetika (Wirkeintritt), Zugluft vermeiden, stressfreie Umgebung, gute Vorbereitung, Stoppsignale vereinbaren.", s: "S. 17–18" },
    { k: "Verbandwechsel", f: "Schmerzreduktion während des Verbandwechsels?",
      a: "Behutsam reinigen (andrücken statt wischen), Reize vermeiden, zügig verbinden, nicht zu stramm, feuchte Auflagen, Ablösen anfeuchten, Débridement nur mit Analgesie, angewärmte Spülung, Auflagen ohne Kleberand, Rückmeldung erfragen.", s: "S. 18" },
    { k: "Verbandwechsel", f: "Welche Verbandmaterialien gelten als atraumatisch?",
      a: "Salbenkompressen; hydroaktive Auflagen (mit Ringerlösung getränkte Wundkissen, Calcium-Alginate, Hydrokolloide, Hydrogele). Muss der Verband eingeweicht werden oder blutet es beim Abnehmen → Material überdenken!", s: "S. 19" },
    { k: "Medikamente", f: "Was ist bei Ibuprofen-Schaumverbänden zu beachten?",
      a: "Geben Ibuprofen langsam lokal frei, geringe systemische Belastung (auch für Ältere). Wunde muss feucht/nass sein (ggf. NaCl 0,9 %). Nicht bei Wunden in tieferen Schichten (Muskel, Sehne, Knochen).", s: "S. 19–20" },
    { k: "Medikamente", f: "Wie werden Lokalanästhetika angewendet?",
      a: "Kurzzeitig bei sehr schmerzhafter Versorgung; nie alleinige Maßnahme; dick auf Wundgrund/-rand, Folie, Taschen/Höhlen aussparen; nach Einwirkzeit Reste entfernen. Eutektische Mischung Lidocain 2,5 %/Prilocain 2,5 %.", s: "S. 20" },
    { k: "Medikamente", f: "Wann kommen topisch Ketamin oder Morphin zum Einsatz?",
      a: "Ketamin: neuropathische, therapieresistente Schmerzen bei Hyperalgesie oder Allodynie. Morphin-Gel 0,1 % oder Morphin-Lösung auf Alginatträger: besonders effektiv lokal.", s: "S. 20" },
    { k: "Medikamente", f: "Erkläre das WHO-Stufenschema.",
      a: "I: Nichtopioid (ASS, NSAR, Metamizol) · II: schwaches Opioid (Tramadol, Tilidin, Codein) · III: starkes Opioid (Morphin, Fentanyl …). Ggf. Koanalgetika/Adjuvantien; Start nach Schmerzstärke; I+II oder I+III, nicht II+III.", s: "S. 20" },
    { k: "Medikamente", f: "Wie wird bei chronischen Schmerzen dosiert?",
      a: "Nach festem Zeitschema (konstanter Spiegel, Durchbruchschmerz vermeiden), individuell angepasst nach Assessment; Bedarfsmedikation vorausschauend verordnet; Begleitmedikation (Laxantien, Antiemetika).", s: "S. 21" },
    { k: "Medikamente", f: "Was hilft bei neuropathischen Schmerzen?",
      a: "Antikonvulsiva (Gabapentin, Pregabalin) und Antidepressiva (Amitriptylin, Nortriptylin, niedrig dosiert). Handschr.: Antidepressiva mit zusätzlicher schmerzhemmender Wirkung.", s: "S. 19, 21", h: true },
    { k: "Medikamente", f: "Prinzipien der systemischen Schmerztherapie?",
      a: "Möglichst oral, nicht i. m. · effektives Dosierschema · Kontraindikationen/Wechselwirkungen · im Alter schrittweise anpassen · Nebenwirkungen beachten · Experten bei Komplexität · mit nicht-medikamentösen Verfahren kombinieren · aufklären · multimodal.", s: "S. 21–22" },
    { k: "Medikamente", f: "Häufige Fehler in der Schmerztherapie?",
      a: "Unterdosierung · nur „bei Bedarf“ · Kombination entgegen WHO (zwei Opioide) · Tranquilizer-Dauermedikation · fehlende Begleitmedikation (Antiemetika/Obstipationsprophylaxe bei Opiatstart, PPI bei Diclofenac).", s: "S. 22" },
    { k: "Medikamente", f: "Opioidtoleranz vs. opioidinduzierte Hyperalgesie?",
      a: "Toleranz: schleichender Wirkungsverlust → Dosiserhöhung, ggf. Opiatrotation.\nHyperalgesie: plötzlich, Schmerzschwelle sinkt, Verstärkung trotz Dosis ↑, Ganzkörperschmerz → Dosis reduzieren.", s: "S. 22" },
    { k: "Medikamente", f: "Merkmale einer Sucht und präventive Maßnahmen?",
      a: "Merkmale: Schmerz ↑ trotz Analgetika, unzuverlässige Angaben, Verordnung nicht eingehalten, frühere Abhängigkeit, psychische Erkrankung.\nPrävention: Anamnese, Aufklärung, oral/retardiert, Ausschleichschema, Fest- vor Bedarfsanordnung, Opiatrotation.", s: "S. 23" },
    { k: "Medikamente", f: "NSAR in der Wundversorgung – was beachten?",
      a: "Wirksam bei entzündlichen, klopfenden Schmerzen; 1–2 Stunden vor Verbandwechsel geben. Vorsicht ab 65 J., Gerinnungsstörungen, Niere, Ulcus duodeni; Risiken GI-Beschwerden, Ulcera, Perforation.", s: "S. 24" },
    { k: "Medikamente", f: "Opioide in der Wundversorgung – Einsatz und Risiken?",
      a: "Mäßige bis starke Schmerzen; Retard für Dauerschmerz; schnell wirksam (sublingual, oral, bukkal) vor Verbandwechsel. Risiken: Obstipation, Reaktionszeit ↓, Atemdepression, Abhängigkeits-/Missbrauchspotenzial.", s: "S. 24" },
    { k: "Medikamente", f: "Opioid-Mythen – richtig oder falsch? (Übung II)",
      a: "Alle falsch: beschleunigen nicht das Sterben · bei stabilen Schmerzen keine Dosissteigerung · Nebenwirkungen (Müdigkeit, Übelkeit) nur anfangs, ca. 6–8 Tage · keine Organschäden (Niere, Leber, Kreislauf, Kognition) bekannt.", s: "S. 33" },
    { k: "Medikamente", f: "Hyperalgesie, Algesie, Allodynie? PRISCUS? (handschr.)",
      a: "Hyperalgesie = übermäßiges Schmerzempfinden · Algesie = normales Schmerzempfinden · Allodynie = Berührung ist schmerzhaft. PRISCUS-Liste: Medikamente, nicht geeignet für Menschen > 65 J.", s: "S. 20 handschr.", h: true },
    { k: "Nicht-medik.", f: "Nenne nicht-medikamentöse Maßnahmen.",
      a: "Positionierung, Kälte/Wärme, TENS, Massagen, Akupunktur, Information, Entspannungstechniken, aufmerksamkeitsbasierte Techniken (Ablenkung), Musik, Aromatherapie; zudem Hypnotherapie.", s: "S. 25, 30" },
    { k: "Nicht-medik.", f: "Kälte vs. Wärme?",
      a: "Kälte: akute, akut-entzündliche Schmerzen, nach Trauma (Hämatom, Prellung); hemmt Rezeptoren und Leitung; aktiv beteiligen.\nWärme: länger andauernde, neuropathische Schmerzen; keine Leitlinie gibt pflegerische Maßnahmen explizit vor.", s: "S. 26" },
    { k: "Nicht-medik.", f: "Was ist bei TENS zu beachten?",
      a: "Niederspannung über Hautelektroden (4 Elektroden, 10–30 mA); setzt Endorphine u. a. frei; gut bei neuropathischen, kaum bei nozizeptiven Schmerzen; nur nach ärztlicher Anordnung und auf intakter Haut.", s: "S. 26–27" },
    { k: "Nicht-medik.", f: "Massagen und Akupunktur?",
      a: "Massage: senkt nachweislich Schmerzintensität, hilfreich vor Verbandwechsel bei Angst; Praxis: Mandelöl mit Narde, Ylang Ylang, Lavendel.\nAkupunktur: wirksam u. a. bei Knie-Arthrose, Rückenschmerz; Scheinakupunktur ebenfalls wirksam; bei starken Schmerzen nicht ausreichend.", s: "S. 27" },
    { k: "Nicht-medik.", f: "Warum ist Information schmerzlindernd?",
      a: "Vorab besprechen und gemeinsam vorgehen wirkt vertrauensbildend und angstreduzierend; Zeit wird durch Kooperation kompensiert. „Stopp“ vereinbaren – muss unbedingt eingehalten werden; gibt Kontrolle.", s: "S. 28" },
    { k: "Nicht-medik.", f: "Entspannung, Ablenkung und Musik?",
      a: "Entspannung (PMR, Imagination, Yoga, autogenes Training) vorab erlernen. Ablenkung (Gespräch, Fantasie, Bezugsperson) – besonders gut bei Kindern.\nMusik: einfach, kostenlos, Musikwunsch beachten.", s: "S. 28–29" },
    { k: "Nicht-medik.", f: "Aromatherapie und Hypnotherapie?",
      a: "Aroma: keine gesicherte Evidenz; Dufttuch 1–2 Tropfen, dezent, max. 1 Stunde.\nHypnose: Angst-, chronische Schmerzreduktion; nur speziell geschultes Personal. Alle nicht-medikamentösen Maßnahmen planen, anwenden, evaluieren.", s: "S. 30" },
    { k: "Mythen", f: "Mythen in der Wundversorgung entkräften (Übung III).",
      a: "Fixierverband schmerzlos? – Nein, Wundumgebung kann sensibilisiert sein. · DFU schmerzfrei? – Nein, auch Nervensensibilität möglich. · Nur Analgetika? – Nein, Suchtrisiko; nicht-medikamentöse Verfahren bedienen Psyche und Soziales.", s: "S. 34" },
    { k: "Zusammenfassung", f: "Kernaussage der Zusammenfassung?",
      a: "Intensive, wiederholte Schmerzen hinterlassen Spuren im Gehirn (Schmerzgedächtnis, Hyperalgesie). Effektive Schmerzlinderung ist oberstes Gebot; der effektivste Ansatz gegen die Angst ist die Vorbereitung der Schmerzepisoden.", s: "S. 32" }
  ],


  quiz: [
    // Die richtigen Antworten stehen immer vorne; die App mischt.
    { f: "Was ist ein Schmerzscreening? ★",
      o: ["Eine Ersteinschätzung Ja/Nein – bei Nein folgt keine weitere Einschätzung (kein Assessment)", "Die ausführliche Erfassung von Intensität, Lokalisation und Qualität des Schmerzes", "Die Fremdeinschätzung mit der BESD", "Das Führen eines Schmerzmedikamententagebuchs"],
      e: "Handschriftlich als „Prüfungsfrage“ markiert: Screening = Ersteinschätzung Ja/Nein; bei Nein → keine weitere Einschätzung (Assessment).", s: "S. 16", h: true },
    { f: "Wie definiert die IASP Schmerz?",
      o: ["Als unangenehme sensorische und emotionale Erfahrung, die mit einer tatsächlichen oder potenziellen Gewebeschädigung verbunden ist oder einer solchen ähnelt", "Als rein körperliche Reaktion auf eine nachweisbare Gewebeschädigung", "Als elektrischen Impuls der Nozizeptoren, der den Cortex erreicht", "Als Empfindung, die nur bei sichtbarer Wunde vorliegt"],
      e: "IASP: „eine unangenehme sensorische und emotionale Erfahrung, die mit einer tatsächlichen oder potenziellen Gewebeschädigung verbunden ist oder einer solchen ähnelt.“", s: "S. 4" },
    { f: "Welche Aussagen gehören zu den Anmerkungen der IASP zur Schmerzdefinition?",
      o: ["Die Unfähigkeit zu kommunizieren schließt Schmerz nicht aus", "Der Schmerzbericht ist zu respektieren", "Schmerz und Nozizeption sind dasselbe", "Das Schmerzkonzept ist angeboren und wird nicht gelernt"], r: 2,
      e: "Anmerkungen: immer persönliche Erfahrung · Schmerz ≠ Nozizeption · Konzept wird durch Lebenserfahrung gelernt · Schmerzbericht respektieren · nachteilige Folgen möglich · Unfähigkeit zu kommunizieren schließt Schmerz nicht aus.", s: "S. 4" },
    { f: "Welche Struktur gilt als „Tor des Bewusstseins“ und entscheidet, welche Reize wahrgenommen werden?",
      o: ["Thalamus", "Limbisches System", "Rückenmark", "Nozizeptoren"],
      e: "Der Thalamus filtert (Gate-Control-Theorie, Melzack/Wall); Konzentration, Fokussierung und Ablenkung beeinflussen die Wahrnehmung. Das limbische System übernimmt die emotionale Bewertung.", s: "S. 5–6" },
    { f: "Auf welchem Mechanismus beruhen TENS, Quaddelung und Akupunktur (Gegenirritation)?",
      o: ["Segmentale Hemmung im Rückenmark", "Wind-up-Phänomen", "Deafferenzierung", "Opioidinduzierte Hyperalgesie"],
      e: "Segmentale Hemmung: Aktivierung der Leitbahnen für Druckempfinden (z. B. Reiben der gestoßenen Stelle) hemmt im Rückenmark – Grundlage für TENS, Quaddelung, Akupunktur.", s: "S. 6" },
    { f: "Welche Schmerzqualität ist typisch für neuropathischen Schmerz?",
      o: ["Spitz, hell, einschießend, elektrisierend", "Dumpf und kolikartig aus inneren Organen", "Dumpf, aus Muskeln und Bindegewebe ausstrahlend", "Ausschließlich durch Angst und Stress ausgelöst"],
      e: "Neuropathisch: Schädigung des somatosensorischen Nervensystems; spitz, hell, einschießend, elektrisierend; Empfindungsort oft ≠ Entstehungsort; häufig bei Tumorwunden.", s: "S. 8" },
    { f: "Was ist prozeduraler Schmerz?",
      o: ["Eine Sonderform des akuten Schmerzes, ausgelöst durch Maßnahmen wie Verbandwechsel, Injektion oder Wundspülung", "Ein primär chronischer Schmerz ohne erkennbare Ursache", "Eine schmerzhafte Empfindung in einem nicht mehr vorhandenen Körperteil", "Ein Übertragungsschmerz in Head-Zonen"],
      e: "Prozedural: Sonderform des akuten Schmerzes durch Maßnahmen; bei chronischen Wunden sehr häufig → Kreislauf aus Schmerz, Angst, Stress; positive Erwartung senkt Schmerz.", s: "S. 8–9" },
    { f: "Ab welcher Dauer spricht man von chronischem Schmerz?",
      o: ["Ab mindestens 3 Monaten", "Ab mindestens 1 Woche", "Ab mindestens 4 Wochen", "Ab mindestens 2 Jahren"],
      e: "Chronisch: mind. 3 Monate, Warnfunktion verloren; zentrale neuroplastische Veränderungen.", s: "S. 9" },
    { f: "Was kennzeichnet sekundär chronischen Schmerz?",
      o: ["Er geht auf eine Grunderkrankung zurück (z. B. Tumor, postoperativ, neuropathisch)", "Er ist durch keine andere Diagnose erklärbar", "Er dauert kürzer als 3 Monate", "Er hat eine biologisch sinnvolle Warnfunktion"],
      e: "Primär chronisch: bedeutsames emotionales Leid/Funktionseinschränkung, nicht durch andere Diagnose erklärbar. Sekundär chronisch: geht auf eine Grunderkrankung zurück.", s: "S. 9" },
    { f: "Ein Übertragungsschmerz in Head-Zonen (z. B. Gallenkolik → Schulter) gehört zu welcher Schmerzform?",
      o: ["Viszeraler Schmerz", "Somatischer Schmerz", "Phantomschmerz", "Psychogener Schmerz"],
      e: "Viszeral: innere Organe, schlecht lokalisierbar, vegetative Begleitreaktion, Übertragungsschmerz in Head-Zonen (Herzinfarkt → linker Arm, Gallenkolik → Schulter).", s: "S. 10" },
    { f: "Was beschreibt das Wind-up-Phänomen?",
      o: ["Ein sich wiederholender Schmerzreiz führt zu einer Intensivierung der Schmerzreaktion („Schmerzgedächtnis“)", "Einen schleichenden Wirkungsverlust von Opioiden", "Die Hemmung des Schmerzes durch Reiben der gestoßenen Stelle", "Die Schmerzlinderung durch Ablenkung"],
      e: "Sensibilisierung (Wind-up): leichte Reize werden als starker Schmerz empfunden; Lernvorgänge v. a. im Rückenmark = Schmerzgedächtnis, das auch nach Beseitigung der Ursache bestehen kann.", s: "S. 11" },
    { f: "Was ordnet das Heft der spirituellen Ebene des Schmerzerlebens zu?",
      o: ["Sinnfragen und Zukunftsangst", "Stress und Isolation", "Hilflosigkeit und unterdrückter Ärger", "Entzündungen und Muskelverspannungen"],
      e: "Bio: Entzündungen, Muskelverspannungen · psycho: Hilflosigkeit, Ängste, unterdrückter Ärger · sozial: Stress, Konflikte, Isolation · spirituell: Sinnfragen, Zukunftsangst, Vergänglichkeit.", s: "S. 12" },
    { f: "Wovon ist bei Wunden grundsätzlich auszugehen?",
      o: ["Dass sie schmerzhaft sind, bis der betroffene Mensch das Gegenteil sagt", "Dass sie schmerzfrei sind, solange nicht geklagt wird", "Dass sie nur bei sichtbarer Infektion schmerzen", "Dass Schmerz sich nur mit Messgeräten feststellen lässt"],
      e: "Bei Wunden ist so lange davon auszugehen, dass sie schmerzhaft sind, bis der betroffene Mensch das Gegenteil sagt (deutlich macht). Schmerz ist subjektiv und nicht durch Geräte messbar.", s: "S. 15, 17" },
    { f: "Welche Aussage zu Schmerzskalen stimmt?",
      o: ["Es gibt keine „beste“ Skala – die für die Person passende wird gefunden und dokumentiert", "Die NRS ist immer die beste Skala", "Die NRS reicht von 0 bis 5", "Schmerz lässt sich mit Geräten objektiv messen"],
      e: "Skalen: NRS (0–10), VRS, Gesichter-Rating-Skala (GRS). Keine „beste“ Skala – die passende finden und dokumentieren. Schmerz ist nicht durch Geräte messbar.", s: "S. 15–16" },
    { f: "Welche Instrumente dienen der Fremdeinschätzung bei eingeschränkter Selbstauskunft?",
      o: ["BESD", "BISAD", "ZOPA", "WHO-Stufenschema"], r: 3,
      e: "Fremdeinschätzung: BESD, BISAD, ZOPA; Fragen vereinfachen, Zeit lassen; sonst Informationen aller Beteiligten bündeln. Das WHO-Stufenschema betrifft die medikamentöse Therapie.", s: "S. 17, 20" },
    { f: "Welche Beispiele zählen laut Lösung Übung I zu den Verhaltens-Indikatoren für Schmerz?",
      o: ["Schonhaltung", "Nahrungsverweigerung", "Stöhnen", "Stirn runzeln"], r: 2,
      e: "Verhalten: Unruhe, Zurückschrecken, Schonhaltung, Aggressivität, Nahrungsverweigerung, Teilnahmslosigkeit, Weglauftendenz. Stöhnen = vokal, Stirn runzeln = Mimik.", s: "S. 33" },
    { f: "Wie wird beim Verbandwechsel schmerzarm gereinigt?",
      o: ["Angefeuchtete Kompressen andrücken, nicht kräftig wischen", "Kräftig wischen, damit es schneller geht", "Kalte Spüllösung mit hohem Druck", "Trocken abreiben und Auflagen mit Kleberand verwenden"],
      e: "Behutsame Reinigung (angefeuchtete Kompressen andrücken, nicht kräftig wischen), angewärmte Spülung mit wenig Druck, Auflagen ohne Kleberand.", s: "S. 18" },
    { f: "Was ist vor dem Verbandwechsel bei der Analgetikagabe besonders zu beachten?",
      o: ["Rechtzeitig geben – Wirkeintritt beachten", "Erst geben, wenn während des Verbandwechsels Schmerz auftritt", "Grundsätzlich keine Analgetika vor dem Verbandwechsel", "Nur Tranquilizer statt Analgetika geben"],
      e: "Maßnahmen vor dem Verbandwechsel: u. a. Schmerzen immer ernst nehmen, rechtzeitig Analgetika (Wirkeintritt!), Stoppsignale vereinbaren.", s: "S. 17–18" },
    { f: "Welche Verbandmaterialien gelten laut Heft als atraumatisch?",
      o: ["Salbenkompressen", "Calcium-Alginate", "Hydrogele", "Auflagen mit Kleberand"], r: 3,
      e: "Atraumatisch: Salbenkompressen, hydroaktive Auflagen (Ringerlösung-Wundkissen, Calcium-Alginate, Hydrokolloide, Hydrogele). Empfohlen sind Auflagen ohne Kleberand (Silikon).", s: "S. 18–19" },
    { f: "Ein Verband muss regelmäßig eingeweicht werden oder das Abnehmen verursacht Blutungen. Was folgt daraus?",
      o: ["Das Verbandmaterial überdenken", "Den Verband künftig trocken abziehen", "Häufiger mit demselben Material wechseln", "Den Sekundärverband strammer anlegen"],
      e: "Muss der Verband eingeweicht werden oder verursacht das Abnehmen Blutungen/Traumata → Material überdenken!", s: "S. 19" },
    { f: "Wann darf ein PU-Schaumverband mit Ibuprofen NICHT eingesetzt werden?",
      o: ["Bei Wunden in tieferen Schichten (Muskel, Sehne, Knochen)", "Bei älteren Menschen", "Bei feuchten oder nassen Wunden", "Wenn eine geringe systemische Belastung gewünscht ist"],
      e: "Ibuprofen-Schaumverband: geringe systemische Belastung, auch für Ältere; Wunde muss feucht/nass sein (ggf. NaCl 0,9 %); nicht bei Wunden in tieferen Schichten.", s: "S. 19–20" },
    { f: "Welche Aussage zu Lokalanästhetika in der Wunde stimmt?",
      o: ["Sie sind nie alleinige Maßnahme", "Sie werden nur hauchdünn auf die Wundumgebung aufgetragen", "Taschen und Höhlen werden damit ausgefüllt", "Sie ersetzen dauerhaft die systemische Schmerztherapie"],
      e: "Lokalanästhetika: dick auf Wundgrund und -rand, Folie, Taschen/Höhlen aussparen, nie alleinige Maßnahme; eutektische Mischung Lidocain 2,5 %/Prilocain 2,5 %.", s: "S. 20" },
    { f: "Welche Kombination ist nach dem WHO-Stufenschema NICHT vorgesehen?",
      o: ["Stufe II + Stufe III", "Stufe I + Stufe II", "Stufe I + Stufe III", "Stufe I + Koanalgetika"],
      e: "Stufe II oder III ist mit Stufe I kombinierbar (handschr.: 1+2 oder 1+3), II + III nicht; jeweils ggf. Koanalgetika/Adjuvantien.", s: "S. 20" },
    { f: "Welche Wirkstoffe nennt das Heft als schwache Opioide (WHO-Stufe II)?",
      o: ["Tramadol", "Tilidin", "Fentanyl", "Metamizol"], r: 2,
      e: "Stufe I: ASS, NSAR, Metamizol · Stufe II: Tramadol, Tilidin, Codein · Stufe III: Morphin, Hydromorphon, Fentanyl, Oxycodon u. a.", s: "S. 20" },
    { f: "Wie wird bei chronischen Schmerzen dosiert?",
      o: ["Nach festem Zeitschema, ergänzt um vorausschauend verfügbare Bedarfsmedikation", "Nur „bei Bedarf“", "Möglichst intramuskulär", "Ohne Begleitmedikation, um Wechselwirkungen zu vermeiden"],
      e: "Festes Zeitschema (konstanter Spiegel, Durchbruchschmerz vermeiden); Bedarfsmedikation vorausschauend; Begleitmedikation (Laxantien, Antiemetika); möglichst oral, nicht i. m.", s: "S. 21–22" },
    { f: "Welche Punkte nennt das Heft als häufige Fehler in der Schmerztherapie?",
      o: ["Unterdosierung", "Fehlende Begleitmedikation (z. B. Obstipationsprophylaxe bei Opiatstart)", "Kombination eines Nichtopioids mit einem Opioid", "Möglichst orale Gabe"], r: 2,
      e: "Häufige Fehler: Unterdosierung · nur „bei Bedarf“ · Kombination entgegen WHO (zwei Opioide) · Tranquilizer-Dauermedikation · fehlende Begleitmedikation. Nichtopioid + Opioid ist nach WHO vorgesehen; oral ist ein Prinzip.", s: "S. 21–22" },
    { f: "Plötzliche Schmerzverstärkung trotz Dosiserhöhung, eher Ganzkörperschmerz – was liegt vor und was ist zu tun?",
      o: ["Opioidinduzierte Hyperalgesie – Opioiddosis reduzieren", "Opioidtoleranz – Dosis weiter erhöhen", "Durchbruchschmerz – ein zweites Opioid hinzufügen", "Psychogener Schmerz – Tranquilizer dauerhaft geben"],
      e: "Toleranz: schleichender Wirkungsverlust → Dosiserhöhung, ggf. Opiatrotation. Hyperalgesie: plötzlich, Schmerzschwelle sinkt, Verstärkung trotz Dosis ↑, eher Ganzkörperschmerz → Opioiddosis reduzieren.", s: "S. 22" },
    { f: "Welche Maßnahmen dienen laut Heft der Suchtprävention?",
      o: ["Fest- vor Bedarfsanordnung", "Oral statt Injektion, retardiert", "Bevorzugt Injektion statt oraler Gabe", "Nur Bedarfsmedikation ohne festes Schema"], r: 2,
      e: "Prävention: Anamnese, informieren, Ausschleichschema, oral statt Injektion, retardiert, Sedierungsgrad erfassen, Fest- vor Bedarfsanordnung, Opiatrotation.", s: "S. 23" },
    { f: "Wann sollten NSAR vor einem Verbandwechsel gegeben werden?",
      o: ["1–2 Stunden vorher", "Unmittelbar nach dem Verbandwechsel", "Etwa 12 Stunden vorher", "Erst wenn während des Verbandwechsels Schmerzen auftreten"],
      e: "NSAR: wirksam bei entzündlichen, klopfenden Schmerzen; 1–2 h vor Verbandwechsel. Vorsicht ≥ 65 J., Gerinnungsstörung, Niere, Ulcus duodeni.", s: "S. 24" },
    { f: "Welche Aussage ist laut Lösung Übung II (Opioid-Mythen) richtig?",
      o: ["Bei stabiler Schmerzsituation ist keine Dosissteigerung nötig", "Opioide beschleunigen in richtiger Dosis das Sterben", "Dauerhafte Einnahme schädigt nachweislich Niere und Leber", "Starke Nebenwirkungen bleiben dauerhaft bestehen"],
      e: "Alle Mythen sind falsch: kein beschleunigtes Sterben · bei stabiler Schmerzsituation keine Steigerung · Nebenwirkungen (Müdigkeit, leichte Übelkeit) nur anfangs, ca. 6–8 Tage · keine Organschäden bekannt.", s: "S. 33" },
    { f: "Was bedeutet Allodynie? (handschriftlich)",
      o: ["Berührung ist schmerzhaft", "Übermäßiges Schmerzempfinden", "Normales Schmerzempfinden", "Schmerz in einem nicht mehr vorhandenen Körperteil"],
      e: "Handschr.: Hyperalgesie = übermäßiges Schmerzempfinden · Algesie = normales Schmerzempfinden · Allodynie = Berührung ist schmerzhaft.", s: "S. 20", h: true },
    { f: "Was ist die PRISCUS-Liste? (handschriftlich)",
      o: ["Eine Liste von Medikamenten, die für Menschen über 65 Jahre nicht geeignet sind", "Ein Fremdeinschätzungsinstrument bei Demenz", "Ein anderer Name für das WHO-Stufenschema", "Eine Liste atraumatischer Verbandmaterialien"],
      e: "Handschr.: PRISCUS-Liste – Medikamente, nicht geeignet für Menschen > 65 J.", s: "S. 20", h: true },
    { f: "Was gilt für TENS laut Heft?",
      o: ["Nur nach ärztlicher Anordnung", "Nur auf intakter Haut", "Besonders wirksam bei nozizeptiven Schmerzen", "Elektroden werden direkt auf den Wundgrund gesetzt"], r: 2,
      e: "TENS: Niederspannung über Hautelektroden (4 Elektroden, 10–30 mA); gut bei neuropathischen, kaum bei nozizeptiven Schmerzen; nur nach ärztlicher Anordnung und auf intakter Haut.", s: "S. 26–27" },
    { f: "Was gilt für ein vereinbartes „Stopp“-Signal beim Verbandwechsel?",
      o: ["Es muss unbedingt eingehalten werden", "Es darf überhört werden, wenn der Verbandwechsel fast fertig ist", "Es wird nur mit Kindern vereinbart", "Es ersetzt die Gabe von Analgetika"],
      e: "Information: vorab besprechen, gemeinsames Vorgehen vereinbaren → vertrauensbildend, angstreduzierend; „Stopp“ vereinbaren und unbedingt einhalten – gibt Kontrolle.", s: "S. 28" },
    { f: "„Ein diabetisches Fußulcus ist immer schmerzfrei.“ – Was ist laut Übung III richtig?",
      o: ["Falsch – neben Sensibilitätsverlust ist auch Nervensensibilität möglich", "Richtig – wegen der Neuropathie immer schmerzfrei", "Richtig – Analgetika sind daher nie nötig", "Falsch – es schmerzt nur bei Kindern"],
      e: "Mythen (S. 34): Diabetisches Fußulcus schmerzfrei? – nein, neben Sensibilitätsverlust auch Nervensensibilität möglich.", s: "S. 34" },
    { f: "Was ist laut Feichtner/Kössler der effektivste Ansatz, die Angst vor einer schmerzhaften Wundversorgung zu reduzieren?",
      o: ["Die Vorbereitung der Schmerzepisoden", "Den Verbandwechsel ohne Ankündigung durchführen", "Ausschließlich Analgetika vor dem Verbandwechsel", "Möglichst seltene, dafür lange Verbandwechsel"],
      e: "„Eine effektive Schmerzlinderung ist oberstes Gebot – und der effektivste Ansatz, um die Angst vor einer schmerzhaften Wundversorgung zu reduzieren, besteht in der Vorbereitung der Schmerzepisoden.“", s: "S. 32" }
  ],

  zusammenfassung: `
<h3>1. Bedeutung und Definition <span class="seite">S. 3–5</span></h3>
<ul>
  <li>„Jede Schmerzerfahrung eines Menschen formt seine Nächste“ (DNQP 2020) – Verantwortung bei jedem Verbandwechsel. Unzureichend gelinderte Schmerzen können zu langanhaltenden Einschränkungen der gesamten Lebenssituation führen; sie wirken negativ auf die Wundheilung (S. 3).</li>
  <li>Zugang zur Schmerztherapie ist ein <b>menschliches Grundrecht</b> (IPS/IASP 2010) (S. 3).</li>
</ul>
<p class="merke"><b>Schmerz (IASP):</b> „eine unangenehme sensorische und emotionale Erfahrung, die mit einer tatsächlichen oder potenziellen Gewebeschädigung verbunden ist oder einer solchen ähnelt.“ (S. 4)</p>
<ul>
  <li><b>Anmerkungen der IASP</b> (S. 4): immer persönliche Erfahrung (biologisch, psychisch, sozial beeinflusst) · Schmerz ≠ Nozizeption · Konzept wird durch Lebenserfahrung gelernt · Schmerzbericht respektieren · trotz adaptiver Rolle nachteilige Folgen möglich · Unfähigkeit zu kommunizieren schließt Schmerz nicht aus.</li>
  <li>Schmerz ist multidimensional: physisch, funktional, psychologisch, sozial, spirituell (S. 5).</li>
  <li><b>Komponenten der Schmerzempfindung</b> (S. 5): sensorisch-diskriminativ (Ort, Intensität) · affektiv-motivational (Unangenehmheit) · kognitiv (Einstellung) · vegetativ (Blutdruck, Pupillen) · motorisch (Reflexe, Muskelverspannung).</li>
</ul>

<h3>2. Schmerzentstehung, -weiterleitung und -hemmung <span class="seite">S. 5–6</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Stufe</th><th>Vorgang (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Aufnahme</td><td>Nozizeptoren (freie Nervenenden, in allen Organen außer Gehirn) reagieren polymodal auf mechanische, chemische, thermische Reize → elektrische Impulse</td></tr>
    <tr><td>Weiterleitung</td><td>über das Rückenmark zum Thalamus</td></tr>
    <tr><td>Filterung</td><td>Thalamus („Tor des Bewusstseins“) entscheidet, welche Reize wahrgenommen werden (Gate-Control-Theorie, Melzack/Wall); Konzentration, Fokussierung, Ablenkung beeinflussen</td></tr>
    <tr><td>Verarbeitung</td><td>somatosensorischer Cortex (Was? Wo? Welche Art? Wie stark?) und limbisches System (emotionale Bewertung, affektiv-motivational)</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Sensibilisierung:</b> wiederholt gereizte Nozizeptoren → Schmerzschwelle sinkt, mehr Impulse → wichtig für chronische Schmerzen (S. 6).</li>
  <li><b>Deszendierende (antinozizeptive) Hemmung:</b> Serotonin, Noradrenalin hemmen Übertragung im Rückenmark; Endorphine; dauerhaft aktiv, aber Biorhythmus → abends stärkere Schmerzen; unterstützbar durch Opiate, Antidepressiva, Antikonvulsiva (S. 6).</li>
  <li><b>Segmentale Hemmung:</b> Aktivierung der Leitbahnen für Druckempfinden (z. B. Reiben der gestoßenen Stelle) hemmt im Rückenmark; Grundlage für Gegenirritation (TENS, Quaddelung, Akupunktur). <b>Gate-Control-Theorie</b> (1965): physische und psychologische Faktoren beeinflussen das Schmerzerleben (S. 6).</li>
</ul>

<h3>3. Schmerzarten und -formen <span class="seite">S. 7–11</span></h3>
<p>Einteilung u. a. nach Dauer (akut, prozedural; chronisch primär/sekundär), Qualität (sensorisch: stechend, brennend …; affektiv: quälend …), Auslöser (Ruhe-, Belastungs-, Druckschmerz), Lokalisation, Pathologie (nozizeptiv, neuropathisch, noziplastisch, psychogen), Ätiologie, Pathophysiologie, Intensität (S. 7).</p>
<div class="tabelle"><table>
  <thead><tr><th>Art</th><th>Kennzeichen (Heft)</th><th>Therapiehinweis</th></tr></thead>
  <tbody>
    <tr><td>nozizeptiv</td><td>Warnsignal aus Gewebeschaden bei intaktem Nervensystem; somatisch oder viszeral; viszeral oft dumpf, schlecht lokalisierbar, kolikartig; Wundschmerz meist nozizeptiv</td><td>antipyretische, ggf. morphinhaltige Analgetika</td></tr>
    <tr><td>neuropathisch</td><td>Schädigung/Erkrankung des somatosensorischen Nervensystems; spitz, hell, einschießend, elektrisierend; Ort oft ≠ Entstehungsort; häufig bei Tumor(-wunden)</td><td>trizyklische Antidepressiva, Antiepileptika</td></tr>
    <tr><td>noziplastisch</td><td>veränderte Nozizeptoren ohne Gewebe-/Nervenschaden; Sensibilisierung, geringe Reize → starker Schmerz; Kombination mit nozizeptiv möglich</td><td>desensibilisierende Methoden</td></tr>
    <tr><td>psychogen</td><td>durch Angst und Stress; schon der Gedanke an den Verbandwechsel → Schwitzen, Puls ↑, reale Schmerzzunahme</td><td>ebenso ernst nehmen und lindern</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Akut:</b> normale physiologische Reaktion auf Gewebeschaden, Warnsignal, biologischer Nutzen. <b>Prozedural:</b> Sonderform des akuten Schmerzes durch Maßnahmen (Verbandwechsel, Injektion, Wundspülung); Kinder besonders betroffen; bei chronischen Wunden sehr häufig → Kreislauf aus Schmerz, Angst, Stress und verstärkter Wahrnehmung; positive Erwartung senkt Schmerz (S. 8–9).</li>
  <li><b>Chronisch:</b> mind. 3 Monate, Warnfunktion verloren; zentrale neuroplastische Veränderungen; wiederkehrende akute Ausbrüche (Minuten bis Tage). <b>Primär chronisch:</b> ≥ 3 Monate, bedeutsames emotionales Leid/Funktionseinschränkung, nicht durch andere Diagnose erklärbar. <b>Sekundär chronisch:</b> geht auf Grunderkrankung zurück (Tumor, postoperativ/posttraumatisch, neuropathisch) (S. 9).</li>
  <li><b>Deafferenzierungsschmerz:</b> komplette Unterbrechung großer Nervenstämme (Amputation) oder Bahnsysteme (Querschnitt). <b>Phantomschmerz</b> = schmerzhafte Empfindung in einer nicht mehr vorhandenen Extremität; Umorganisation im sensomotorischen Cortex; ≠ Stumpfschmerz; Medikamente mit begrenztem Erfolg (S. 9–10).</li>
  <li><b>Somatisch</b> (Muskeln, Bindegewebe; dumpf, strahlt aus) vs. <b>viszeral</b> (innere Organe, vegetative Begleitreaktion, Übertragungsschmerz in Head-Zonen: Herzinfarkt → linker Arm, Gallenkolik → Schulter) (S. 10).</li>
  <li><b>Wundschmerz:</b> alle wundbezogenen Schmerzen (Verletzung, Schwellung, Heilung, Behandlung). Chronischer Wundschmerz = Hintergrund-/Dauerschmerz, Mischform aus nozizeptiv, neuropathisch, psychogen; <b>Durchbruchschmerz</b>: akut, kurz, mittel-hoch, gleicher Ort und Ursache. Folgen: Depression bis Sterbewunsch (S. 10–11).</li>
</ul>
<p class="merke"><b>Sensibilisierung (Wind-up-Phänomen):</b> Ein sich wiederholender Schmerzreiz führt zu einer Intensivierung der Schmerzreaktion. Leichte Reize (Berührung, mäßige Hitze, Druck) werden als starker Schmerz empfunden; Lernvorgänge v. a. im Rückenmark = <b>„Schmerzgedächtnis“</b>, das auch nach Beseitigung der Ursache bestehen kann (S. 11). Ausweg: Schmerzbiografie, zu erwartende Schmerzen zügig behandeln (S. 12).</p>

<h3>4. Multidimensionalität und Kultur <span class="seite">S. 12–14</span></h3>
<p class="merke">Der Mensch ist stets in seiner <b>bio-psycho-sozialen und spirituellen Gesamtheit</b> von Schmerz betroffen → nie nur körperlich → die beste Schmerztherapie berücksichtigt alle Ebenen (S. 12).</p>
<div class="tabelle"><table>
  <thead><tr><th>bio</th><th>psycho</th><th>sozial</th><th>spirituell</th></tr></thead>
  <tbody>
    <tr><td>Entzündungen, Muskelverspannungen, vegetative Störungen, Nerven-/Gelenkschäden</td><td>Hilflosigkeit, Ängste, Sorgen, unterdrückter Ärger, Niedergeschlagenheit</td><td>Stress, Konflikte, Arbeitsunfähigkeit, Ausgrenzung, Isolation</td><td>Sinnfragen, Zukunftsangst, Vergänglichkeit, Begrenztheit, Machtlosigkeit</td></tr>
  </tbody>
</table></div>
<p><b>Kulturspezifische Schmerzkonzepte</b> (S. 13–14): Schmerz als Zeichen Gottes (erdulden, Medikamente teils abgelehnt) · Familienereignis/Kollektivismus (Zuwendung der Familie, Schmerz offen geäußert) · durch eigenen Willen bewältigbar (nicht zugelassen, Rückzug) · Strafe Gottes (stillschweigend ausgehalten) · technisch-fachlich bewältigbar (präzise Beschreibung, sofortiges Handeln) · Stoizismus (Schmerz verheimlicht, als Schwäche gedeutet).</p>
<p><b>Schmerz als Einflussfaktor auf die Wundheilung</b> (S. 14–15): Kausaltherapie zuerst; „Wir behandeln nicht die Wunde, sondern immer den ganzen Menschen.“ Schmerz mindert Beweglichkeit, Mobilität, Stimmung; Abwehr gegen Maßnahmen. Simple Maßnahmen: angewärmte Spüllösung, unnötige Berührungen vermeiden.</p>

<h3>5. Schmerzerfassung <span class="seite">S. 15–17</span></h3>
<ul>
  <li>Subjektiv, nicht durch Geräte messbar → Aussage des Betroffenen maßgeblich; verbale und nonverbale Kommunikation zentral (S. 15).</li>
  <li><b>Screening</b> <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="hand-inline">Handschriftlich („Prüfungsfrage“): Screening = Ersteinschätzung Ja/Nein; bei Nein → keine weitere Einschätzung (Assessment) (S. 16).</span> Bei jeder Schmerzbehandlung bzw. zu erwartenden Schmerzen (vor Wundreinigung, Verbandwechsel) Assessment.</li>
  <li><b>Assessment erfasst</b> (S. 16): zeitliche Dimension (Beginn, Dauer, Rhythmus) · Intensität und akzeptables Schmerzmaß · Lokalisation, Ausstrahlung · Qualität · Begleitsymptome (Taubheit, Hyperalgesie, Krämpfe, Schlafstörung, Übelkeit) · Bedeutung des Schmerzes (Kultur) · verstärkende/lindernde Faktoren · Effekte auf Lebensqualität, Funktion, Teilhabe · Schmerzmedikamententagebuch (auch OTC) · Stimmungslage.</li>
  <li><b>Skalen</b> (S. 16): NRS (0–10), VRS (kein … stärkster vorstellbarer Schmerz), Gesichter-Rating-Skala (GRS). Es gibt keine „beste“ Skala – die passende finden und dokumentieren. <span class="hand-inline">Handschriftlich: NRS – Menschen vergleichen mit dem, was sie erlebt haben.</span></li>
  <li><b>Fremdeinschätzung</b> bei eingeschränkter Selbstauskunft: <b>BESD, BISAD, ZOPA</b>; Fragen vereinfachen, Zeit lassen; sonst Informationen aller Beteiligten bündeln. Danach gemeinsamer Behandlungsplan und Verlaufskontrolle (S. 17).</li>
</ul>
<p class="hand">BESD = Beurteilung von Schmerzen bei Demenz (Atmung, Lautäußerung, Mimik, Körpersprache, Verhalten); BISAD ähnlich – Beobachtungsinstrument für alte Menschen mit Demenz; ZOPA (Zurich Observation Pain Assessment) – z. B. Wachkoma, Vitalwerte; PAIC 15 – Schmerzerfassung bei Demenz/kognitiver Beeinträchtigung (Gesichtsausdruck, Körpersprache, Lautäußerung).</p>
<p class="merke"><b>Bei Wunden ist so lange davon auszugehen, dass sie schmerzhaft sind, bis der betroffene Mensch das Gegenteil sagt (deutlich macht)</b> (S. 17). <span class="hand-inline">Handschriftlich S. 18 wiederholt: „→ Schmerzmittel!“</span></p>
<div class="tabelle"><table>
  <caption>Indirekte Schmerzindikatoren – Beispiele (Lösung Übung I, S. 33)</caption>
  <thead><tr><th>Indikator</th><th>Beispiele</th></tr></thead>
  <tbody>
    <tr><td>verbal</td><td>Fragen nach Schmerzmitteln, abgehackte/stotternde Sprache, Bitten um Hilfe, Klagen, Fluchen, rascher Sprachzerfall, Unbehagen/Protest</td></tr>
    <tr><td>vokal</td><td>Stöhnen, Weinen, Schreien, Seufzen, Grunzen, Wimmern, Jammern, Japsen</td></tr>
    <tr><td>Mimik</td><td>Grimassen, zugekniffene Augen, Gesicht verziehen, Zähne zusammenbeißen, Stirn runzeln, geschlossene Augen, Blinzeln, trauriger Ausdruck</td></tr>
    <tr><td>Körperreaktionen</td><td>Muskeltonus ↑, Zittern, Blutdruckanstieg/-abfall, Herzfrequenz ↑, veränderte Atmung, Übelkeit, Schwitzen, Fieber, Hautfarbe, Steifheit, Schlafstörung</td></tr>
    <tr><td>Verhalten</td><td>Unruhe, Angst, Zurückschrecken vor Berührung, Schonhaltung, Aggressivität, Verwirrtheit, Nahrungsverweigerung, Ablehnung von Bewegung/Behandlung, Teilnahmslosigkeit, Weglauftendenz (Demenz)</td></tr>
  </tbody>
</table></div>

<h3>6. Schmerzreduktion beim Verbandwechsel <span class="seite">S. 17–19</span></h3>
<ul>
  <li>Verbandwechsel = Stresssituation; erwarteter Schmerz → ablehnende Haltung, stellt Behandlungsprozess in Frage (S. 17).</li>
  <li><b>Maßnahmen</b> (S. 17–18): informieren, <b>Schmerzen immer ernst nehmen</b>, Erfahrung einbeziehen, absprechen, <b>rechtzeitig Analgetika (Wirkeintritt!)</b>, Zugluft vermeiden, stressfreie Umgebung, gute Vorbereitung, ansprechen/Pausen, Stoppsignale, behutsame Reinigung (angefeuchtete Kompressen andrücken, nicht kräftig wischen), unnötige Reize vermeiden, zügig verbinden, Sekundärverband nicht zu stramm, feucht haltende Auflagen, Ablösen anfeuchten, Débridement geplant mit Analgesie/Anästhesie, angewärmte Spülung mit wenig Druck, Auflagen ohne Kleberand (Silikon), Rückmeldung erfragen.</li>
  <li>Prozeduraler Schmerz kann Auslöser chronischer Schmerzen sein / Schmerzgedächtnis bilden (S. 18).</li>
  <li><b>Verbandmaterial</b> (S. 19): atraumatisch = Salbenkompressen, hydroaktive Auflagen (Ringerlösung-Wundkissen, Calcium-Alginate, Hydrokolloide, Hydrogele).</li>
</ul>
<p class="warnung"><b>Muss der Verband eingeweicht werden oder verursacht das Abnehmen Blutungen/Traumata → Material überdenken!</b> (S. 19)</p>

<h3>7. Medikamentöse Maßnahmen <span class="seite">S. 19–24</span></h3>
<ul>
  <li>Ursachen behandeln, verschlimmernde Faktoren ausschalten; Therapie aus einer Hand; Nebenwirkungen (Übelkeit, Obstipation, Erbrechen, Benommenheit, Angst, Depression) erfassen und minimieren (S. 19).</li>
  <li><b>Lokal</b> (S. 19–20): <b>PU-Schaumverbände mit Ibuprofen</b> (geringe systemische Belastung, auch für Ältere; Wunde muss feucht/nass sein, ggf. mit NaCl 0,9 % benetzen; <b>nicht</b> bei Wunden in tieferen Schichten – Muskel, Sehne, Knochen) · <b>Lokalanästhetika</b> (dick auf Wundgrund und -rand, Folie, Taschen/Höhlen aussparen, nie alleinige Maßnahme; eutektische Mischung Lidocain 2,5 %/Prilocain 2,5 %) · <b>Ketamin</b> topisch bei therapieresistenten neuropathischen Schmerzen, Hyperalgesie, Allodynie · <b>Morphin-Gel 0,1 %</b> oder Morphin-Lösung auf Alginatträger.</li>
  <li><b>Systemisch – WHO-Stufenschema</b> (S. 20): Stufe I Nichtopioid (ASS, NSAR, Metamizol) · II schwache Opioide (Tramadol, Tilidin, Codein) · III starke Opioide (Morphin, Hydromorphon, Fentanyl, Oxycodon, Pethidin, Tapentadol); jeweils ggf. Koanalgetika/Adjuvantien; Start nach Schmerzstärke; II oder III mit I kombinierbar <span class="hand-inline">(handschriftlich: 1+2 oder 1+3)</span>, <b>II + III nicht</b>; Kombination senkt Opioidbedarf.</li>
  <li>Auswahl nach Schmerzart und -intensität; bei chronischen Schmerzen <b>festes Zeitschema</b> (konstanter Spiegel, Durchbruchschmerz vermeiden); Bedarfsmedikation vorausschauend verfügbar; Begleitmedikation (Laxantien, Antiemetika). Neuropathisch: Antikonvulsiva (Gabapentin, Pregabalin), Antidepressiva (Amitriptylin, Nortriptylin, niedrig dosiert). Opioide: BtM-Rezept, besondere Aufbewahrung (S. 21).</li>
  <li><b>Prinzipien</b> (S. 21–22): möglichst oral, nicht i. m. · effektivstes Dosierungsschema (Wirkdauer, Halbwertszeit) · Kontraindikationen, Komorbiditäten, Wechselwirkungen · Alter: schrittweise anpassen · Nebenwirkungen beachten · Schmerzexpert:innen bei komplexen Situationen · mit nicht-medikamentösen Verfahren verbinden · Aufklärung (u. a. Verkehrstüchtigkeit) · interdisziplinär, multimodal.</li>
  <li><b>Häufige Fehler</b> (S. 22): Unterdosierung · nur „bei Bedarf“ · Kombination entgegen WHO (zwei Opioide/zwei Begleitmedikamente) · Tranquilizer-Dauermedikation · fehlende Begleitmedikation (Antiemetika-/Obstipationsprophylaxe bei Opiatstart, PPI bei Diclofenac).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Opioidtoleranz</th><th>Opioidinduzierte Hyperalgesie</th></tr></thead>
  <tbody>
    <tr><td>schleichender Wirkungsverlust; Rezeptoren adaptieren → Dosiserhöhung, ggf. <b>Opiatrotation</b></td><td>plötzlicher Effekteintritt; Schmerzschwelle sinkt, Schmerzverstärkung trotz Dosiserhöhung, eher Ganzkörperschmerz → Opioiddosis reduzieren, zielgerichtete Wirkungshilfsstoffe</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Sucht</b> (S. 22–23): Abhängigkeit meist durch ärztliches Handeln mitbedingt; Opiate mit hohem Suchtrisiko (euphorisierend). <b>Merkmale:</b> Schmerz ↑ trotz Analgetika, unzuverlässige Angaben, Nichteinhalten der Verordnung, keine Besserung trotz Dosis ↑, frühere Abhängigkeit, familiäre Veranlagung, psychische Erkrankung. <b>Prävention:</b> Abhängigkeit/Familienanamnese/Psyche prüfen, informieren, Alter/Geschlecht beachten, Ausschleichschema, oral statt Injektion, retardiert, Sedierungsgrad erfassen, nicht-medikamentös beraten, Fest- vor Bedarfsanordnung, Opiatrotation.</li>
</ul>
<p class="hand">PRISCUS-Liste – Medikamente, nicht geeignet für Menschen &gt; 65 J. (S. 20); Antidepressiva – zusätzliche schmerzhemmende Wirkung bei neuropathischen Schmerzen (S. 19); Hyperalgesie = übermäßiges Schmerzempfinden, Algesie = normales Schmerzempfinden, Allodynie = Berührung ist schmerzhaft (S. 20).</p>
<div class="tabelle"><table>
  <caption>Analgetika-Klassen (S. 24)</caption>
  <thead><tr><th>Klasse</th><th>Anwendung / Risiken (Heft)</th><th>Beispiele</th></tr></thead>
  <tbody>
    <tr><td>Nichtopioide (NOPA)</td><td>balancierte Analgesie, akute postop., leichte Schmerzen, Fieber; feste Intervalle; Leber-/Nierenschäden</td><td>Metamizol, Paracetamol</td></tr>
    <tr><td>NSAR</td><td>entzündliche Schmerzen (z. B. Knochenmetastasen), klopfend/anhaltend; <b>1–2 h vor Verbandwechsel</b>; Vorsicht ≥ 65 J., Gerinnungsstörung, Niere, Ulcus duodeni; GI-Ulcera, Perforation</td><td>ASS, Diclofenac, Ibuprofen</td></tr>
    <tr><td>Opioide</td><td>mäßige bis starke Schmerzen; Retard für Dauerschmerz; schnell wirksam (sublingual, oral, bukkal) für Verbandwechsel; Obstipation, Reaktionszeit, Atemdepression, Abhängigkeit</td><td>Tramadol, Tilidin, Morphin, Fentanyl, Oxycodon, Hydromorphon, Levomethadon</td></tr>
    <tr><td>Lokalanästhetika</td><td>Verbandwechsel, postoperativ; kutanes/Hydrogelpflaster; nicht als alleinige Therapie</td><td>Lidocain, Capsaicin</td></tr>
    <tr><td>Koanalgetika: Antidepressiva/Antikonvulsiva</td><td>neuropathische, Tumor-, chronische Schmerzen; Suizidrisiko, keine MAO-Hemmer-Kombination, ein-/ausschleichen</td><td>Amitriptylin, Nortriptylin, Duloxetin, Venlafaxin, Carbamazepin, Pregabalin, Gabapentin</td></tr>
    <tr><td>Koanalgetika: Muskelrelaxanzien</td><td>Muskelspasmen, nächtliche Beinkrämpfe, Kontraktur bei MS</td><td>Pridinol, Tolperison, Baclofen, THC, CBD</td></tr>
  </tbody>
</table></div>
<div class="tabelle"><table>
  <caption>Übung II – Opioid-Mythen (Lösung S. 33)</caption>
  <thead><tr><th>Aussage</th><th>Antwort</th></tr></thead>
  <tbody>
    <tr><td>„Opioide beschleunigen das Sterben.“</td><td><b>falsch</b> – in richtiger Dosis weder beschleunigt noch hinausgezögert</td></tr>
    <tr><td>„Wegen Gewöhnung muss die Dosis immer weiter gesteigert werden.“</td><td><b>falsch</b> – bei stabiler Schmerzsituation keine Steigerung nötig</td></tr>
    <tr><td>„Opioide führen zu starken Nebenwirkungen.“</td><td><b>falsch</b> – bei Erstanwendung/Höherdosierung Müdigkeit, Appetitlosigkeit, leichte Übelkeit (6–8 Tage)</td></tr>
    <tr><td>„Dauerhafte Einnahme schädigt innere Organe.“</td><td><b>falsch</b> – keine Auswirkungen auf Niere, Leber, Kreislauf, Kognition bekannt</td></tr>
  </tbody>
</table></div>

<h3>8. Nicht-medikamentöse Maßnahmen <span class="seite">S. 25–30</span></h3>
<p>Wichtige Ergänzung, auch eigenständig; nicht alle ausreichend evidenzbasiert, steigern aber das Wohlbefinden. Modulation im Hinterhorn des Rückenmarks (A-beta-Fasern, absteigende Bahnen); Angst/Spannung verstärken, Ablenkung/Entspannung reduzieren Schmerz (S. 25).</p>
<div class="tabelle"><table>
  <thead><tr><th>Maßnahme</th><th>Kernaussagen (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Positionierung</td><td>entspannte Position nach Wunsch, Kissen/Rollen</td></tr>
    <tr><td>Kälte</td><td>v. a. akute Schmerzen, akut-entzündlich, nach Trauma (Hämatome, Prellungen); hemmt Schmerzrezeptoren/-leitung; Betroffene aktiv beteiligen (Selbstwirksamkeit)</td></tr>
    <tr><td>Wärme</td><td>länger andauernde Schmerzen, innere Verletzungen, neuropathisch; keine Leitlinie gibt pflegerische Maßnahmen explizit vor</td></tr>
    <tr><td>TENS</td><td>Niederspannung über Hautelektroden (4 Elektroden, 10–30 mA); Endorphine, Dopamin, Noradrenalin, Serotonin ↑; gut bei neuropathischen, kaum bei nozizeptiven Schmerzen; <b>nur nach ärztlicher Anordnung und auf intakter Haut</b></td></tr>
    <tr><td>Massagen</td><td>senken nachweislich Schmerzintensität; vor Verbandwechsel bei angstvollen Menschen; Praxis: Öl (30 ml Mandelöl, je 9 Tropfen Narde, Ylang Ylang, Lavendel), Hand-/Fußmassagen</td></tr>
    <tr><td>Akupunktur</td><td>TCM; wirksam bei Kniegelenkarthrose, chronischen Rückenschmerzen, Ergänzung bei Spannungskopfschmerz/Migräne; Scheinakupunktur ebenfalls wirksam; bei starken Schmerzen nicht ausreichend</td></tr>
    <tr><td>Information</td><td>vorab besprechen, gemeinsam Vorgehen vereinbaren → vertrauensbildend, angstreduzierend; Zeit wird durch Kooperation kompensiert; ggf. Bezugsperson; <b>„Stopp“ vereinbaren und unbedingt einhalten</b></td></tr>
    <tr><td>Entspannung</td><td>PMR nach Jacobson, Imagination, Meditation, Yoga, autogenes Training – vorab erlernen</td></tr>
    <tr><td>Ablenkung</td><td>aufmerksamkeitsbasiert (Gespräch, Fantasie, Bezugsperson); besonders gut bei Kindern</td></tr>
    <tr><td>Musik</td><td>reduziert Angst/Schmerz; einfach, kostenlos, kein Mehraufwand; Musikwunsch beachten</td></tr>
    <tr><td>Aromatherapie</td><td>Inhalation, Massage; keine gesicherte Evidenz zur Schmerzreduktion; Dufttuch 1–2 Tropfen; dezent, max. 1 Stunde</td></tr>
    <tr><td>Hypnotherapie</td><td>Angst-, chronische Schmerzreduktion, Entspannung, Analgesie; nur speziell geschultes Personal</td></tr>
  </tbody>
</table></div>
<p class="merke">Alle nicht-medikamentösen Maßnahmen müssen ebenso wie medikamentöse <b>geplant, angewendet und evaluiert</b> werden (S. 30).</p>

<h3>9. Übung III und Zusammenfassung <span class="seite">S. 31–34</span></h3>
<ul>
  <li><b>Redewendungen</b> (Lösung S. 34): z. B. „Ein Indianer kennt keinen Schmerz“, „Stellen Sie sich nicht so an!“, „Es wird gar nicht weh tun …“ – kulturell/familiär geprägte Glaubenssätze.</li>
  <li><b>Mythen</b> (S. 34): Fixierverband schmerzlos? – nein, gesteigerte Nervenempfindung in der Wundumgebung kann jedes Abnehmen schmerzhaft machen · Diabetisches Fußulcus schmerzfrei? – nein, neben Sensibilitätsverlust auch Nervensensibilität möglich · Analgetika vor dem Verbandwechsel einzige Methode? – nein, Suchtrisiko; nicht-medikamentöse Verfahren bedienen psychische und soziale Komponenten.</li>
  <li><b>Zusammenfassung</b> (S. 32): Schmerz ist oft größte Belastung; unzureichende Linderung → Sensibilisierung, auch Wundumgebung hyperalgetisch; „Umprogrammierung“ der Neuronen → Hyperalgesie. Intensive, wiederholte Schmerzen hinterlassen Spuren im Gehirn (Schmerzgedächtnis). Erwartete Schmerzen präventiv mit Analgetika und nicht-medikamentös behandeln.</li>
</ul>
<p class="hand">Handschriftlich (S. 22): Opioide – Dosis muss nicht wegen Gewöhnung gesteigert werden; verkürzen das Leben nicht.</p>
<p class="merke">„Eine effektive Schmerzlinderung ist oberstes Gebot – und der effektivste Ansatz, um die Angst vor einer schmerzhaften Wundversorgung zu reduzieren, besteht in der Vorbereitung der Schmerzepisoden.“ (Feichtner/Kössler, S. 32)</p>
`
});
