/*
 * Thema: Hygienemaßnahmen in der Wundversorgung
 * Quelle: murimed-Kursheft Wundexperte Modul I (Seitenangaben beziehen sich auf das Heft).
 * Inhalte übernommen aus "Zusammenfassung_Hygienemassnahmen.pdf" und
 * "Lernkarten_Hygienemassnahmen.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "hygiene",
  titel: "Hygienemaßnahmen in der Wundversorgung",
  kurz: "Hygiene",
  quelle: "murimed-Kursheft Wundexperte Modul I",
  hinweis:
    "Quelle ist ausschließlich das Kursheft; Seitenzahlen in Klammern. „Kein Prüfungsstoff“ = im Heft handschriftlich mit „Ø Prüfung“ markiert. Die im Heft zitierten Regelwerke und Primärquellen wurden nicht separat geprüft.",

  karten: [
    { k: "Grundlagen", f: "Was bedeutet der Begriff Hygiene?",
      a: "Umgangssprachlich Sauberkeit, Keimfreiheit, Entfernung schädlicher Substanzen durch Reinigung und Desinfektion. Als Fachgebiet: Einfluss von Erregern und Noxen auf die Gesundheit und Präventionsmaßnahmen.", s: "S. 3" },
    { k: "Grundlagen", f: "Welche Regelwerke sind für die Hygiene maßgeblich?",
      a: "Arbeitsschutzgesetz, Biostoffverordnung, TRBA, RKI-Richtlinien, Fachgesellschaften (z. B. DGKH); Hygienepläne z. B. des NLGA.", s: "S. 4" },
    { k: "Infektion", f: "Entzündung vs. Infektion? (Übung I)",
      a: "Entzündung: Abwehrreaktion auf Reize (chemisch, physikalisch, Zellzerfall, Erreger); Teil der Wundheilung.\nInfektion: Eindringen und Vermehrung pathogener Erreger; anfangs unsichtbar, Nachweis per Wundabstrich.", s: "S. 6, 33" },
    { k: "Infektion", f: "Nenne die Entzündungszeichen.",
      a: "Rubor – Rötung · Calor – Überwärmung · Tumor – Schwellung · Dolor – Schmerz · Functio laesa – Funktionseinschränkung.", s: "S. 33" },
    { k: "Infektion", f: "Wie wird eine Infektion nach Ausbreitung unterteilt?",
      a: "Lokale Infektion · sich ausbreitende Infektion · generalisierte (systemische) Infektion/Sepsis. Möglich in jeder Wundheilungsphase.", s: "S. 6" },
    { k: "Infektion", f: "Was ist bei Infektionszeichen an der Wunde zuerst zu tun?",
      a: "Immer zuerst einen Wundabstrich durchführen (nach Absprache mit dem Arzt), um den Erreger zu bestimmen.", s: "S. 6, 10" },
    { k: "Prävention", f: "Hygienische Präventionsmethoden? (Übung I)",
      a: "Händedesinfektion, Non-Touch-Methode, Händewaschen, Ablauf von aseptisch zu systemisch infiziert („von sauber zu unrein“), Einmalschürze, Händehygiene (kein Schmuck, keine langen Nägel), sterile Materialien.", s: "S. 33" },
    { k: "Ablauf", f: "Welche Grundregel gilt bei der Versorgung mehrerer Wunden?",
      a: "Von sauber zu unrein: zuerst keimfreie/keimarme, dann kontaminierte und kolonisierte, dann infizierte Wunden, zum Schluss Wunden mit MRE.", s: "S. 7" },
    { k: "Ablauf", f: "Nenne die Reihenfolge der Wundinspektionen.",
      a: "1. aseptisch\n2. kontaminiert\n3. kolonisiert\n4. kritisch kolonisiert\n5. lokal infiziert\n6. systemisch infiziert", s: "S. 7" },
    { k: "Ablauf", f: "Kontaminiert vs. kolonisiert vs. kritisch kolonisiert?",
      a: "Kontaminiert: Keime vermehren sich nicht.\nKolonisiert: vermehrungsfähige Keime, Heilung nicht nachhaltig gestört.\nKritisch kolonisiert: erhöhte Besiedlung, infektgefährdet.", s: "S. 7" },
    { k: "Ablauf", f: "Maßnahmen bei kritisch kolonisierter und lokal infizierter Wunde?",
      a: "Kritisch kolonisiert: aseptischer Verband + Wundabstrich.\nLokal infiziert: aseptischer Verband; je nach Abstrich Antiseptika/antimikrobielle Lokaltherapie.", s: "S. 8" },
    { k: "Ablauf", f: "Maßnahmen bei systemischer Infektion?",
      a: "Aseptischer Wundverband, wiederholter Wundabstrich, Antiseptika/antimikrobielle Lokaltherapie, systemische antimikrobielle Therapie.", s: "S. 8" },
    { k: "Risiko", f: "Welche Faktoren begünstigen eine Wundinfektion?",
      a: "Lokalisation (Anus, Sakralbereich, Füße, Inkontinenz), Umgebungsfaktoren (Hygiene, Haustiere), (Begleit-)Erkrankungen (Immunschwäche, Diabetes, Aids, terminale Phase), Wundart (Verbrennung, DFU, Tumorexulzeration).", s: "S. 9" },
    { k: "Risiko", f: "Anzeichen infektgefährdeter Wunden?",
      a: "Entzündungszeichen, viel/trübes/zäh-eitriges Exsudat, Geruch, bröckeliges blutendes Granulationsgewebe, Verfärbung, Taschen, Vergrößerung, Erythem, Verhärtung, Ödem, Zellulitis, Leukozytose, Abszess.", s: "S. 10" },
    { k: "Risiko", f: "Infektionszeichen bei pAVK und diabetischer Neuropathie?",
      a: "pAVK: Rötung kaum, Überwärmung eingeschränkt – Schmerz ist das aussagekräftigste Zeichen.\nNeuropathie: kaum Schmerz, Fieber höchstens subfebril.", s: "S. 10–11" },
    { k: "Risiko", f: "Was beschreibt die PEDIS-Klassifikation?",
      a: "Schwere der (diabetischen) Fußinfektion nach Lipsky 2006:\n1 nicht infiziert · 2 leicht (≤ 2 cm, oberflächlich) · 3 moderat (tief, Abszess, Knochen) · 4 schwer (systemische Zeichen).", s: "S. 11" },
    { k: "Keime", f: "Was ist eine nosokomiale Infektion?",
      a: "Infektion, die Patient:innen im Zusammenhang mit einer medizinischen Maßnahme erwerben – z. B. im Krankenhaus, in Pflegeeinrichtungen oder ambulanten Praxen (RKI).", s: "S. 12" },
    { k: "Keime", f: "Eiterbild von Staphylo-, Streptokokken und Pseudomonas?",
      a: "Staphylokokken: rahmig, gelblich, geruchlos\nStreptokokken: gelbgrau, dünnflüssig\nPseudomonas: blau-grünlich, süßlich riechend", s: "S. 12" },
    { k: "Keime", f: "Was sind Mikroorganismen (BioStoffV)?",
      a: "Zelluläre oder nichtzelluläre mikroskopisch kleine biologische Einheiten, die sich vermehren oder genetisches Material weitergeben können: Bakterien, Viren, Protozoen, Pilze.", s: "S. 12" },
    { k: "MRE", f: "Was bedeutet „multiresistent“? (Übung II)",
      a: "Keime haben eine Resistenz gegenüber mehreren Antibiotikagruppen entwickelt.", s: "S. 33" },
    { k: "MRE", f: "Helfen Antiseptika und Händedesinfektion gegen MRE?",
      a: "Ja. Resistenz bezieht sich nur auf Antibiotika. Händedesinfektion vernichtet alle MRE; Alkohol, PVP-Jod, Chlorhexidin, Polihexanid, Octenidin wirken. Ausnahme: H₂O₂ und Silber (Lücken; manche Pseudomonas silberresistent).", s: "S. 13–14" },
    { k: "MRE", f: "Was ist MRSA und wie wird er übertragen?",
      a: "Methicillin-resistenter Staphylococcus aureus; v. a. direkter Kontakt über die Hände, auch Niesen, Kleidung, Bettwäsche, Oberflächen; gefährlich bei Immunschwäche.", s: "S. 14" },
    { k: "MRE", f: "Was kennzeichnet VRE und MRGN/ESBL?",
      a: "VRE: Vancomycin-resistente Enterokokken aus der Darmflora; bis 1 Woche außerhalb des Menschen überlebensfähig.\nMRGN/ESBL: gramnegative Erreger aus Darm/Umwelt; gefährlich für Abwehrgeschwächte.", s: "S. 14" },
    { k: "MRE", f: "Was ist das Besondere an Clostridium difficile?",
      a: "Anaerobes grampositives Stäbchen im Darm; unter Antibiotika Vermehrung mit Toxin- und Sporenbildung – Sporen werden durch gängige Desinfektionsmittel nicht abgetötet; starker Durchfall.", s: "S. 14" },
    { k: "MRE", f: "Wann sind MRE meldepflichtig, welche Maßnahmen bei MRSA/VRE?",
      a: "Erst bei Nachweis in Blut oder Liquor.\nMRSA/VRE: Einzelisolierung, Mund-Nasen-Schutz, Schutzkittel, Handschuhe, Händedesinfektion vor und nach Kontakt.", s: "S. 15" },
    { k: "MRE", f: "Was gehört zur Basishygiene? (Übung II)",
      a: "Händedesinfektion, Flächendesinfektion, Schutzkleidung, Isolation.", s: "S. 33" },
    { k: "VW", f: "Was ist vor jedem Verbandwechsel rechtlich erforderlich?",
      a: "Schriftliche ärztliche Anordnung (Häufigkeit, Vorgehen, Medikamente, Wundauflage) und Einverständnis der aufgeklärten Person.", s: "S. 15" },
    { k: "VW", f: "Was ist das Remonstrationsrecht?",
      a: "Recht und Pflicht, eine gefahrengeneigte Versorgung (z. B. veraltete oder gefährdende Verordnung) schriftlich und nachweislich anzuzeigen; Gespräch mit dem Arzt dokumentieren.", s: "S. 15" },
    { k: "VW", f: "Welche Ziele hat ein Verbandwechsel?",
      a: "Wundkontrolle, Wundbeurteilung und Therapieanpassung, Vorbeugung von Keimeinschleppung, Bekämpfung bestehender Infektion, Schmerzvermeidung, Unterstützung der Heilung.", s: "S. 16" },
    { k: "VW", f: "Welche Grundmaßnahmen und Schutzkleidung sind beim Verbandwechsel obligatorisch?",
      a: "Uhren/Schmuck ab, Haare zurück, keine langen Ärmel; Einmalhandschuhe und Einmalschürze/-kittel, nach jedem Patientenkontakt wechseln; bei MRE/großflächigen Wunden zusätzlich MNS.", s: "S. 16" },
    { k: "VW", f: "Was gilt für Spüllösungen und festklebende Kompressen?",
      a: "Spüllösung steril, Haltbarkeit beachten (handschriftlich: Raumtemperatur, nicht kalt).\nFestklebende Kompressen mit steriler Pinzette entfernen.", s: "S. 17", h: true },
    { k: "Hände", f: "Warum ist die Händedesinfektion so wichtig?",
      a: "Grundlegendste Hygienemaßnahme; laut RKI die wichtigste Maßnahme gegen nosokomiale Infektionen; 100- bis 1000-mal wirksamer als Händewaschen.", s: "S. 18" },
    { k: "Hände", f: "Wer war Ignaz Semmelweis?",
      a: "Arzt (geb. 1818) am Wiener Allgemeinen Krankenhaus; erkannte die Übertragung von Kindbettfieber über Ärztehände nach Sektionen; Chlorkalklösung; „Retter der Mütter“. Händedesinfektion vor OPs erst 1867 eingeführt.", s: "S. 18, 32" },
    { k: "Hände", f: "Gegen was wirken alkoholische Händedesinfektionsmittel – und gegen was nicht?",
      a: "Wirksam: Bakterien inkl. MRSA, Pilze, Hefen, M. tuberculosis, behüllte Viren.\nEingeschränkt: unbehüllte Viren (Noro) → Spezialpräparat.\nUnwirksam: Sporen → danach Hände waschen.", s: "S. 19" },
    { k: "Hände", f: "Was fordert die TRBA 250 für die Hände?",
      a: "Keine Schmuckstücke, Ringe, Armbanduhren, Piercings, künstlichen Fingernägel oder Armbänder an Händen und Unterarmen; Nägel kurz und rund geschnitten.", s: "S. 19" },
    { k: "Hände", f: "Nenne die 5 Indikationen der Händedesinfektion (RKI).",
      a: "1. vor Patientenkontakt\n2. vor aseptischen Tätigkeiten\n3. nach Kontakt mit infektiösem Material\n4. nach Patientenkontakt\n5. nach Kontakt mit der Patientenumgebung", s: "S. 20" },
    { k: "Hände", f: "Menge und Einwirkzeit bei der Händedesinfektion?",
      a: "So viel, wie in eine hohle Hand passt (3–5 ml); Hände über die gesamte Einreibezeit (üblicherweise 30 s) benetzt halten. Ablauf nach DIN EN 1500.", s: "S. 20" },
    { k: "Hände", f: "Fehlerquellen bei der Händedesinfektion? (Übung III)",
      a: "Händewaschen statt Desinfektion, zu kurze Einwirkzeit, zu wenig Mittel, zu selten, vorgeschädigte Haut, Schmuck oder lange Nägel nicht abgelegt.", s: "S. 33" },
    { k: "Kosten", f: "Was steht Pflegebedürftigen nach § 40 Abs. 2 SGB XI zu?",
      a: "Pflegehilfsmittel-Paket bis max. 40 € monatlich ab Pflegegrad 1 bei häuslicher Versorgung: MNS, Einmalhandschuhe, Einmalschürzen, Bettschutzeinlagen, Hände-/Flächendesinfektion.", s: "S. 22" },
    { k: "Durchführung", f: "Was ist stationär am Krankenbett zu beachten?",
      a: "Informieren, Einverständnis, Stoppsignale, Analgetika rechtzeitig; Arbeitsfläche schaffen, sterile Materialien patientenfern, Bett ist keine Ablage; Licht, Arbeitshöhe, Türen/Fenster zu, Besucher raus.", s: "S. 23–24" },
    { k: "Durchführung", f: "Besonderheiten im ambulanten Bereich?",
      a: "Material staub-, hitze-, feuchtgeschützt in Kunststoffboxen; Licht (Stirnlampe); Haustiere raus; desinfiziertes Kunststofftablett; Bett/Fußboden keine Ablage; Abwurfbehälter nicht aus Glas.", s: "S. 24" },
    { k: "Durchführung", f: "Wie wird die Wunde gereinigt?",
      a: "Aseptisch mit sterilen Instrumenten und Tupfern/Kompressen; wischen, nicht tupfen; pro Wischgang ein neuer Tupfer bzw. eine neue Kompresse.", s: "S. 25" },
    { k: "Durchführung", f: "Wann erfolgen Handschuhwechsel und Händedesinfektion beim Verbandwechsel?",
      a: "Zu Beginn; nach Entfernen des alten Verbands; vor der Wundreinigung (nach ggf. Abstrich); nach der Inspektion vor dem neuen Verband; am Ende nach Entsorgung.", s: "S. 25" },
    { k: "Technik", f: "Was ist die Non-Touch-Technik?",
      a: "Nur steriles Material berührt die Wunde: unsterile Handschuhe + sterile Instrumente, Wunde nie mit den Händen berühren; alternativ sterile Handschuhe oder sterile/unsterile Hand. Unsauberes Material nie zurück zur Wunde.", s: "S. 26" },
    { k: "Abstrich", f: "Wie wird ein Wundabstrich vorbereitet?",
      a: "Aus der Wundtiefe; vorher mechanische Reinigung mit angefeuchteten Kompressen und/oder Spülung mit NaCl – keine Antiseptika.\nAusnahme: Verdacht auf MRE → ohne vorherige Säuberung.", s: "S. 26" },
    { k: "Abstrich", f: "Was ist beim Wundabstrich zu dokumentieren und zu beachten?",
      a: "Entnahmestelle, Wundart, Grunderkrankung, bisherige Antibiose; Begleitschein und Etikett vollständig; gewünschte Untersuchung; Lagerung bei Zimmertemperatur; zeitnaher Transport.", s: "S. 27" },
    { k: "Abstrich", f: "Essener Wundkreisel vs. Levine-Technik?",
      a: "Essener Wundkreisel: kreisend von außen nach innen, großes Areal – MRE-Screening.\nLevine: ca. 1 cm² unter leichtem Druck – Erregersuche bei Infektverdacht, Taschen/Unterminierungen.", s: "S. 27" },
    { k: "Nach", f: "Was gehört zur Nachbereitung des Verbandwechsels?",
      a: "Instrumente sicher entsorgen, Handschuhe/Kittel ab, Händedesinfektion inkl. Unterarme, Patient lagern, nach Beschwerden fragen, Flächen desinfizieren, Müll außerhalb entsorgen, Dokumentation, Wagen auffüllen.", s: "S. 28" },
    { k: "Nach", f: "Komplikationen mangelnder Hygiene beim Verbandwechsel? (Übung III)",
      a: "Schmerzhafte Entzündungen, Ausbreitung zur systemischen Infektion, Sepsis, Organinfektionen (Pneumonie), MRE-Ausbreitung auf Immungeschwächte, Wundheilungsstörung.", s: "S. 34" },
    { k: "Nach", f: "Fehlerquellen beim Umgang mit Material und Spüllösungen? (Übung III)",
      a: "Geöffnete Materialien, Haltbarkeit (auch nach Öffnen) nicht beachtet, unsteril oder feucht gelagert, keine Non-Touch-Technik, keine aseptische Wundreinigung.", s: "S. 34" }
  ],

  quiz: [
    { f: "In welcher Reihenfolge werden mehrere Wunden versorgt?",
      o: ["Von sauber zu unrein: aseptisch zuerst, Wunden mit MRE zum Schluss", "Die größte Wunde immer zuerst", "Infizierte Wunden zuerst, damit sie schnell versorgt sind", "Von unten nach oben am Körper"],
      e: "Zuerst keimfreie/keimarme, dann kontaminierte und kolonisierte, dann infizierte Wunden, zum Schluss Wunden mit MRE.", s: "S. 7" },
    { f: "Welche Maßnahme gehört bei einer kritisch kolonisierten Wunde zusätzlich zum aseptischen Verband?",
      o: ["Wundabstrich", "Systemische Antibiotikatherapie", "Sofortige Einzelisolierung", "Keine weitere Maßnahme"],
      e: "Kontaminiert/kolonisiert: aseptischer Wundverband · kritisch kolonisiert: aseptischer Verband + Wundabstrich.", s: "S. 8" },
    { f: "Was ist bei Infektionszeichen an einer Wunde immer zuerst zu tun?",
      o: ["Einen Wundabstrich durchführen (nach Absprache mit dem Arzt)", "Sofort ein Antiseptikum auftragen", "Die Wunde mit Zinkpaste abdecken", "Den Verbandwechsel ausfallen lassen"],
      e: "Bei Infektionszeichen immer zuerst Wundabstrich, um den Erreger zu bestimmen.", s: "S. 6, 10" },
    { f: "Was beschreibt die Maßnahmen bei einer systemisch infizierten Wunde?",
      o: ["Aseptischer Verband, wiederholter Abstrich, Antiseptika/Lokaltherapie und systemische antimikrobielle Therapie", "Nur ein aseptischer Wundverband", "Nur ein einmaliger Wundabstrich", "Nur Händewaschen vor dem Verbandwechsel"],
      e: "Systemisch infiziert: aseptischer Wundverband, wiederholter Wundabstrich, Antiseptika/antimikrobielle Lokaltherapie, systemische antimikrobielle Therapie.", s: "S. 8" },
    { f: "Wie viel wirksamer ist die Händedesinfektion als Händewaschen?",
      o: ["100- bis 1000-mal", "2- bis 3-mal", "Gleich wirksam", "10-mal"],
      e: "Grundlegendste Hygienemaßnahme; laut RKI die wichtigste Maßnahme gegen nosokomiale Infektionen; 100- bis 1000-mal wirksamer als Händewaschen.", s: "S. 18" },
    { f: "Wie viel Händedesinfektionsmittel und wie lange?",
      o: ["Eine hohle Hand voll (3–5 ml), Hände über die gesamte Einreibezeit (meist 30 s) benetzt halten", "Ein Tropfen, 5 Sekunden", "10 ml, 3 Minuten", "So viel wie nötig, bis die Hände trocken sind, ca. 5 s"],
      e: "So viel, wie in eine hohle Hand passt (3–5 ml); Hände über die gesamte Einreibezeit (üblicherweise 30 s) benetzt halten. Ablauf nach DIN EN 1500.", s: "S. 20" },
    { f: "Wogegen wirken alkoholische Händedesinfektionsmittel NICHT?",
      o: ["Gegen Sporen – danach Hände waschen", "Gegen MRSA", "Gegen behüllte Viren", "Gegen Hefen und Pilze"],
      e: "Wirksam: Bakterien inkl. MRSA, Pilze, Hefen, M. tuberculosis, behüllte Viren. Eingeschränkt: unbehüllte Viren (Noro). Unwirksam: Sporen.", s: "S. 19" },
    { f: "Was ist bei Noroviren (unbehüllte Viren) zu beachten?",
      o: ["Alkoholische Mittel wirken nur eingeschränkt → spezielles Präparat verwenden", "Händedesinfektion ist überflüssig", "Nur Händewaschen ohne Desinfektion", "Alkoholische Mittel wirken besonders gut"],
      e: "Unbehüllte Viren (Noroviren) nur eingeschränkt → spezielle Präparate (Auswahl nach VAH).", s: "S. 19" },
    { f: "Welche ist eine der 5 Indikationen der Händedesinfektion (RKI)?",
      o: ["Nach Kontakt mit der Patientenumgebung", "Nur bei sichtbarer Verschmutzung", "Einmal zu Schichtbeginn", "Nur nach dem Toilettengang"],
      e: "1. vor Patientenkontakt · 2. vor aseptischen Tätigkeiten · 3. nach Kontakt mit infektiösem Material · 4. nach Patientenkontakt · 5. nach Kontakt mit der Patientenumgebung.", s: "S. 20" },
    { f: "Was fordert die TRBA 250 für die Hände?",
      o: ["Keine Ringe, Uhren, Armbänder, künstlichen Nägel; Nägel kurz und rund", "Ringe sind erlaubt, wenn sie glatt sind", "Nagellack ist erlaubt, künstliche Nägel nicht", "Uhren sind erlaubt, wenn sie wasserdicht sind"],
      e: "Keine Schmuckstücke, Ringe, Armbanduhren, Piercings, künstlichen Fingernägel oder Armbänder an Händen und Unterarmen; Nägel kurz und rund geschnitten.", s: "S. 19" },
    { f: "Helfen Antiseptika und Händedesinfektion gegen multiresistente Erreger (MRE)?",
      o: ["Ja – Resistenz bezieht sich nur auf Antibiotika", "Nein – MRE sind auch gegen Desinfektionsmittel resistent", "Nur Wasserstoffperoxid wirkt", "Nur Silber wirkt sicher"],
      e: "Händedesinfektion vernichtet alle MRE; Alkohol, PVP-Jod, Chlorhexidin, Polihexanid, Octenidin wirken. Ausnahmen mit Lücken: H₂O₂ und Silber.", s: "S. 13–14" },
    { f: "Welche Wirkstoffe haben laut Heft Wirklücken bei MRE?",
      o: ["Wasserstoffperoxid und Silber", "Octenidin und Polihexanid", "Alkohol und Chlorhexidin", "Polyvidonjod und Alkohol"],
      e: "Ausnahmen mit Wirklücken: Wasserstoffperoxid und Silber (manche Pseudomonas-Stämme sind silberresistent).", s: "S. 13–14" },
    { f: "Wie wird MRSA vor allem übertragen?",
      o: ["Durch direkten Kontakt über die Hände", "Nur über das Trinkwasser", "Nur durch Insektenstiche", "Ausschließlich über Blutprodukte"],
      e: "MRSA: v. a. direkter Kontakt über die Hände, auch Niesen, Kleidung, Bettwäsche, Oberflächen; gefährlich bei Immunschwäche.", s: "S. 14" },
    { f: "Wie lange können VRE außerhalb des Menschen überleben?",
      o: ["Bis zu 1 Woche", "Nur wenige Minuten", "Maximal 1 Stunde", "Bis zu 10 Jahre"],
      e: "VRE (Vancomycin-resistente Enterokokken) aus der Darmflora; bis zu 1 Woche außerhalb des Menschen überlebensfähig.", s: "S. 14" },
    { f: "Was ist das Besondere an Clostridium difficile?",
      o: ["Es bildet Sporen, die gängige Desinfektionsmittel nicht abtöten", "Es ist gegen alle Antiseptika resistent, aber nicht gegen Antibiotika", "Es kommt nur auf der Haut vor", "Es ist ein behülltes Virus"],
      e: "Anaerobes grampositives Stäbchen im Darm; unter Antibiotika Vermehrung mit Toxin- und Sporenbildung; starker Durchfall.", s: "S. 14" },
    { f: "Wann sind MRE meldepflichtig?",
      o: ["Erst bei Nachweis in Blut oder Liquor", "Bei jedem Nachweis in einer Wunde", "Nie", "Nur bei Kindern"],
      e: "MRE sind erst bei Nachweis in Blut oder Liquor meldepflichtig; Nachweis in der Wunde nur per Abstrich.", s: "S. 15" },
    { f: "Welches Eiterbild passt zu Staphylokokken?",
      o: ["Rahmig, gelblich, geruchlos", "Gelbgrau, dünnflüssig", "Blau-grünlich, süßlich riechend", "Klar und bernsteinfarben"],
      e: "Staphylokokken: rahmig, gelblich, geruchlos · Streptokokken: gelbgrau, dünnflüssig · Pseudomonas: blau-grünlich, süßlich.", s: "S. 12" },
    { f: "Was ist eine nosokomiale Infektion?",
      o: ["Eine Infektion im Zusammenhang mit einer medizinischen Maßnahme", "Jede Infektion mit einem multiresistenten Erreger", "Eine Infektion, die nur zu Hause auftritt", "Eine angeborene Immunschwäche"],
      e: "Infektion, die Patient:innen im Zusammenhang mit einer medizinischen Maßnahme erwerben – z. B. im Krankenhaus, in Pflegeeinrichtungen oder ambulanten Praxen (RKI).", s: "S. 12" },
    { f: "Was ist vor jedem Verbandwechsel rechtlich erforderlich?",
      o: ["Schriftliche ärztliche Anordnung und Einverständnis der aufgeklärten Person", "Nur eine mündliche Absprache im Team", "Ein Wundabstrich", "Eine Zustimmung der Krankenkasse"],
      e: "Schriftliche ärztliche Anordnung (Häufigkeit, Vorgehen, Medikamente, Wundauflage) und Einverständnis der aufgeklärten Person.", s: "S. 15" },
    { f: "Was beschreibt das Remonstrationsrecht?",
      o: ["Recht und Pflicht, eine gefahrengeneigte Versorgung schriftlich und nachweislich anzuzeigen", "Das Recht der Patient:innen, den Verbandwechsel abzulehnen", "Die Pflicht, MRE dem Gesundheitsamt zu melden", "Das Recht, Verbandmaterial selbst auszuwählen"],
      e: "Entspricht die Verordnung nicht dem Wissensstand oder gefährdet sie Patient:innen → schriftlich anzeigen; Gespräch mit dem Arzt dokumentieren.", s: "S. 15" },
    { f: "Wie wird eine Wunde gereinigt?",
      o: ["Aseptisch mit sterilen Instrumenten; wischen, nicht tupfen; pro Wischgang ein neuer Tupfer", "Mit einem Tupfer kräftig hin und her reiben", "Mit den Fingern in Handschuhen ausstreichen", "Mit derselben Kompresse mehrfach wischen"],
      e: "Aseptisch mit sterilen Instrumenten und Tupfern/Kompressen; wischen, nicht tupfen; pro Wischgang ein neuer Tupfer bzw. eine neue Kompresse.", s: "S. 25" },
    { f: "Was bedeutet Non-Touch-Technik?",
      o: ["Nur steriles Material berührt die Wunde – nie die Hände", "Die Wunde wird gar nicht versorgt", "Der Verband wird ohne Handschuhe gewechselt", "Patient:innen dürfen den Verband nicht berühren"],
      e: "Unsterile Handschuhe + sterile Instrumente; alternativ sterile Handschuhe oder sterile/unsterile Hand. Unsauberes Material nie zurück zur Wunde.", s: "S. 26" },
    { f: "Was ist vor einem Wundabstrich zu beachten?",
      o: ["Mechanische Reinigung bzw. Spülung mit NaCl – keine Antiseptika", "Wunde vorher mit Octenidin desinfizieren", "Abstrich nur von der Wundoberfläche ohne Reinigung", "Vorher Zinkpaste auftragen"],
      e: "Abstrich aus der Wundtiefe; Antiseptika verfälschen das Ergebnis. Ausnahme: Verdacht auf MRE → ohne vorherige Säuberung.", s: "S. 26" },
    { f: "Wofür wird der Essener Wundkreisel eingesetzt?",
      o: ["Für das MRE-Screening – kreisend von außen nach innen über ein großes Areal", "Für die Erregersuche in Wundtaschen unter Druck", "Zur Messung der Wundtiefe", "Zur Händedesinfektion"],
      e: "Essener Wundkreisel: MRE-Screening. Levine-Technik: ca. 1 cm² unter leichtem Druck bei Infektverdacht, Taschen/Unterminierungen.", s: "S. 27" },
    { f: "Wie wird ein Wundabstrich bis zum Transport gelagert?",
      o: ["Bei Zimmertemperatur, zeitnaher Transport", "Im Gefrierfach", "Im Brutschrank bei 37 °C", "In Desinfektionslösung"],
      e: "Dokumentieren: Entnahmestelle, Wundart, Grunderkrankung, bisherige Antibiose; Lagerung bei Zimmertemperatur; zeitnaher Transport.", s: "S. 27" },
    { f: "Was beschreibt PEDIS-Grad 2?",
      o: ["Leichte Infektion: Entzündungszeichen bis 2 cm um die Wunde, nur oberflächlich", "Nicht infiziert", "Tiefer Abszess oder Knochenbeteiligung", "Systemische Zeichen wie Fieber und Hypotonie"],
      e: "PEDIS (Lipsky 2006): 1 nicht infiziert · 2 leicht (≤ 2 cm, oberflächlich) · 3 moderat (tief, Abszess, Knochen) · 4 schwer (systemische Zeichen).", s: "S. 11" },
    { f: "Was steht Pflegebedürftigen nach § 40 Abs. 2 SGB XI zu?",
      o: ["Ein Pflegehilfsmittel-Paket bis max. 40 € monatlich ab Pflegegrad 1 bei häuslicher Versorgung", "Unbegrenzt Verbandmaterial ohne Verordnung", "Ein Pflegehilfsmittel-Paket ab Pflegegrad 3 für 100 €", "Eine kostenlose Pflegekraft für Verbandwechsel"],
      e: "MNS, Einmalhandschuhe, Einmalschürzen, Bettschutzeinlagen, Hände-/Flächendesinfektion – bis max. 40 € monatlich ab Pflegegrad 1.", s: "S. 22" },
    { f: "Woraus soll der Abwurfbehälter im ambulanten Bereich sein?",
      o: ["Aus Kunststoff, nicht aus Glas", "Aus Glas", "Aus Papier", "Das ist egal"],
      e: "Ambulant: Abwurfbehälter aus Kunststoff, nicht aus Glas (Unfallverhütungsvorschrift); Bett und Fußboden sind keine Ablage.", s: "S. 24" },
    { f: "Was erkannte Ignaz Semmelweis?",
      o: ["Kindbettfieber wurde über die Hände der Ärzte nach Sektionen übertragen", "Dass Wunden feucht heilen", "Die Ursache des Lymphödems", "Dass Silber gegen alle Keime wirkt"],
      e: "Arzt (geb. 1818) am Wiener Allgemeinen Krankenhaus; Chlorkalklösung senkte die Sterblichkeit; „Retter der Mütter“.", s: "S. 18" },
    { f: "Wann erfolgen beim Verbandwechsel Handschuhwechsel und Händedesinfektion u. a.?",
      o: ["Nach dem Entfernen des alten Verbands und vor dem Anlegen des neuen", "Nur einmal ganz am Ende", "Nur vor Beginn", "Gar nicht, wenn sterile Instrumente benutzt werden"],
      e: "Zu Beginn; nach Entfernen des alten Verbands; vor der Wundreinigung (nach ggf. Abstrich); nach der Inspektion vor dem neuen Verband; am Ende nach Entsorgung.", s: "S. 25" }
  ],

  zusammenfassung: `
<h3>1. Grundlagen <span class="seite">S. 3–4</span></h3>
<p class="merke"><b>Hygiene</b> (Pschyrembel 2020): umgangssprachlich Sauberkeit, Keimfreiheit, Entfernung (vermeintlich) gesundheitsschädlicher Substanzen durch Reinigung und Desinfektion; als Fachgebiet befasst sie sich mit dem Einfluss von Krankheitserregern und biologischen, chemischen, physikalischen Noxen auf die Gesundheit und erarbeitet Präventionsmaßnahmen.</p>
<ul>
  <li>Bedeutung wächst: mehr ältere, multimorbide, immungeschwächte Menschen; Verlagerung in ambulante Versorgung und Langzeitpflege; multiresistente „Problemkeime“; Resistenzbildung durch Breitbandantibiotika.</li>
  <li>Wundinfektionen gehören laut EWMA (2008) weiterhin zu den häufigsten nosokomialen Infektionen in Deutschland.</li>
  <li>Regelwerke: Arbeitsschutzgesetz (ArbSchG), Biostoffverordnung (BioStoffV), TRBA, RKI-Richtlinien, Fachgesellschaften (z. B. DGKH); Hygienepläne z. B. des Niedersächsischen Landesgesundheitsamts (NLGA).</li>
</ul>

<h3>2. Entzündung vs. Infektion <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 5–6, Lösung S. 33</span></h3>
<div class="tabelle"><table>
  <thead><tr><th></th><th>Entzündung</th><th>Infektion</th></tr></thead>
  <tbody>
    <tr><td>Definition</td><td>Abwehrreaktion des Körpers auf Reize; gehört zu den ersten Wundheilungsphasen</td><td>Eindringen und Vermehrung pathogener Erreger (Bakterien, Viren, Pilze)</td></tr>
    <tr><td>Auslöser</td><td>chemisch/physikalisch (Druck, Fremdkörper, Säuren, Reibung, Temperatur), Zellzerfall (Tumor), eingedrungene Mikroorganismen; in der Wunde durch die Gewebeschädigung selbst</td><td>Erreger bei herabgesetzter Immunität und erhöhter Pathogenität; anfangs nicht sichtbar</td></tr>
    <tr><td>Nachweis</td><td>Entzündungszeichen</td><td>erst nachfolgende Entzündungsreaktion und auffälliges Exsudat; Erreger nur per Wundabstrich</td></tr>
  </tbody>
</table></div>
<p>Infektion: lokal → sich ausbreitend → generalisiert (systemisch, Sepsis); möglich in jeder Wundheilungsphase. <b>Bei Infektionszeichen immer zuerst Wundabstrich.</b></p>
<p class="merke"><b>Entzündungszeichen:</b> Rubor (Rötung) · Calor (Überwärmung) · Tumor (Schwellung) · Dolor (Schmerz) · Functio laesa (Funktionseinschränkung).</p>
<p class="hand">Calor fehlt bei pAVK, Dolor bei Polyneuropathie; Fieber bei Diabetes nur subfebril (so auch S. 10–11 im Druck).</p>
<ul>
  <li><b>Hygienische Präventionsmethoden</b> (Lösung S. 33): Händedesinfektion, Non-Touch-Methode, Händewaschen, Ablauf der Wundinspektionen von aseptisch zu systemisch infiziert, „von sauber zu unrein“, Einmalschürze, Händehygiene (Schmuck ablegen, keine langen Fingernägel), sterile Materialien. <span class="hand-inline">Handschriftlich: keine künstlichen Fingernägel, keine Tiere.</span></li>
</ul>

<h3>3. Hygienischer Ablauf der Wundinspektionen <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 7–8</span></h3>
<p class="merke"><b>Grundregel: von sauber zu unrein.</b> Zuerst keimfreie/keimarme Wunden, dann kontaminierte und kolonisierte, dann infizierte/septische, zum Schluss Wunden mit multiresistenten Keimen (MRSA, MRGN, VRE).<br>Reihenfolge: 1 aseptisch · 2 kontaminiert · 3 kolonisiert · 4 kritisch kolonisiert · 5 lokal infiziert · 6 systemisch infiziert.</p>
<ul>
  <li><b>Aseptisch:</b> fast keimfrei, keine Entzündungszeichen; OP-Wunden oder frische Verletzungen (nicht älter als 4–6 h), primär verschlossen. <b>Kontaminiert:</b> Keime vorhanden, vermehren sich nicht. <b>Kolonisiert:</b> vermehrungsfähige Keime, Heilung nicht nachhaltig gestört (nur mikrobiologisch von kontaminiert unterscheidbar). <b>Kritisch kolonisiert:</b> erhöhte Besiedlung, infektgefährdet. <b>Infiziert:</b> bakterielles Wachstum mit immunologischer Reaktion → Entzündungszeichen; lokal oder systemisch über den Blutkreislauf.</li>
</ul>
<div class="tabelle"><table>
  <caption>Kolonisationsstadien und Maßnahmen ★ (S. 8)</caption>
  <thead><tr><th>Besiedlung</th><th>Symptome</th><th>Infektionsrisiko</th><th>Maßnahmen</th></tr></thead>
  <tbody>
    <tr><td>kontaminiert</td><td>symptomlos</td><td>nicht infektionsgefährdet</td><td>aseptischer Wundverband</td></tr>
    <tr><td>kolonisiert</td><td>symptomlos</td><td>nicht infektionsgefährdet</td><td>aseptischer Wundverband</td></tr>
    <tr><td>kritisch kolonisiert</td><td>Zeichen sichtbar, Exsudat</td><td>infektionsgefährdet</td><td>aseptischer Verband + Wundabstrich</td></tr>
    <tr><td>lokal infiziert</td><td>Keimvermehrung, lokale Entzündungszeichen, auffälliges Exsudat (Eiter)</td><td>lokale Infektion</td><td>aseptischer Verband; je nach Abstrich Antiseptika/antimikrobielle Lokaltherapie</td></tr>
    <tr><td>systemisch infiziert</td><td>systemische Entzündungszeichen, Eiter</td><td>systemische Infektion</td><td>aseptischer Verband, wiederholter Abstrich, Antiseptika/Lokaltherapie, systemische antimikrobielle Therapie</td></tr>
  </tbody>
</table></div>

<h3>4. Begünstigende Faktoren und Infektionsanzeichen <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 9–11</span></h3>
<ul>
  <li><b>Faktoren:</b> Lokalisation (Anus-/Sakralbereich, Analfalte, Füße; Inkontinenz), Umgebungsfaktoren (mangelnde Hygiene durch Personal oder Umfeld, Haustiere), (Begleit-)Erkrankungen (geschwächte Abwehr, Diabetes, Aids, terminale Lebensphase), Wundart (Verbrennungen, diabetisches Fußulkus, Tumorexulzerationen besonders gefährdet).</li>
  <li><b>Anzeichen infektgefährdeter Wunden ★ (S. 10):</b> Rubor, Dolor, Calor, Tumor, Functio laesa; viel Exsudat; trübes, zäh-eitriges, ggf. blutiges Exsudat; unangenehmer Geruch; bröckeliges, leicht blutendes Granulationsgewebe; Verfärbung; Taschenbildung; Vergrößerung/Zersetzung; Erythem und Verhärtung; Ödeme; Zellulitis; Leukozytose; Abszess. → nach Absprache mit dem Hausarzt Wundabstrich; mikrobiologischer Befund allein reicht nicht, holistische Beurteilung nötig.</li>
  <li><b>pAVK:</b> Rötung kaum, Überwärmung eingeschränkt – Schmerz ist das aussagekräftigste Infektionszeichen. <b>Diabetische Neuropathie:</b> Schmerz kaum, Fieber höchstens subfebril. <b>Infektion in Wundtaschen:</b> geröteter, verhärteter, ödematöser, schmerzhafter Rand, starke eitrige Exsudation, Geruch, oft Auslöser systemischer Infektion (S. 10–11).</li>
</ul>
<div class="tabelle"><table>
  <caption>PEDIS-Klassifikation der Fußinfektion (Lipsky 2006) (S. 11) – laut Experten auch bei pAVK oder CVI sinnvoll</caption>
  <thead><tr><th>Grad</th><th>Schwere</th><th>Klinik</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>nicht infiziert</td><td>keine Eiterung, keine Entzündungszeichen</td></tr>
    <tr><td>2</td><td>leicht</td><td>Entzündungszeichen bis 2 cm um die Wunde; nur Haut/oberflächliche Subcutis; keine Komplikationen</td></tr>
    <tr><td>3</td><td>moderat</td><td>systemisch stabil; Ausbreitung unter die Faszie, tiefer Abszess, Gangrän, Muskel/Sehne/Gelenk/Knochen betroffen</td></tr>
    <tr><td>4</td><td>schwer</td><td>systemische Zeichen oder instabiler Kreislauf (Fieber, Schüttelfrost, Tachykardie, Hypotonie, Verwirrtheit, Leukozytose, Azidose, Hyperglykämie, Azotämie)</td></tr>
  </tbody>
</table></div>
<p>Kritische Ischämie verschiebt den Schweregrad Richtung „schwer“, kann aber die klinischen Zeichen abmildern.</p>

<h3>5. Keime in Wunden <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 12–15</span></h3>
<ul>
  <li>Infektion entsteht durch Erreger der eigenen Hautflora oder exogene Übertragung in Epidermis/Dermis; abhängig von Pathogenität und Immunkompetenz. Übertragung u. a. beim Verbandwechsel durch Personal.</li>
  <li><b>Mikroorganismen</b> (BioStoffV § 2): zelluläre oder nichtzelluläre mikroskopisch kleine biologische Einheiten, die sich vermehren oder genetisches Material weitergeben können – Bakterien, Viren, Protozoen, Pilze.</li>
</ul>
<p class="merke"><b>Nosokomiale Infektion ★</b> (RKI 2020): Infektion, die Patient:innen im Zusammenhang mit einer medizinischen Maßnahme erwerben – z. B. in Krankenhaus, Pflegeeinrichtung oder ambulanter Praxis. Ältere Menschen besonders gefährdet.</p>
<p class="merke"><b>Bakterienstämme ★ (S. 12):</b> Staphylokokken → rahmig, gelblicher Eiter, geruchlos · Streptokokken → gelbgrauer, dünnflüssiger Eiter · Pseudomonas → blau-grünlicher Eiter, süßlich riechend.</p>
<ul>
  <li><b>Multiresistent</b> = Keime mit Resistenz gegen mehrere Antibiotikagruppen (Lösung S. 33). Resistenz bezieht sich immer nur auf Antibiotika, nie auf Antiseptika/Desinfektiva: hygienische Händedesinfektion vernichtet alle MRE; Alkohol, Polyvidonjod, Chlorhexidin, Polihexanid, Octenidin wirken. Ausnahmen mit Wirklücken: Wasserstoffperoxid und Silber (manche Pseudomonas-Stämme silberresistent) (S. 13–14).</li>
  <li><b>MRSA ★</b> (Methicillin-resistenter Staphylococcus aureus): Übertragung v. a. durch direkten Kontakt über die Hände, auch über Niesen, Kleidung, Bettwäsche, Oberflächen; gefährlich bei Immunschwäche. (Im Heft „Methycilli-“ geschrieben.)</li>
  <li><b>VRE</b> (Vancomycin-resistente Enterokokken): aus der Darmflora oder über Kontakt; besiedeln Wunden, Haut, Hände, Sonden, Katheter; bis zu 1 Woche außerhalb des Menschen überlebensfähig.</li>
  <li><b>MRGN/ESBL-Bildner:</b> multiresistente gramnegative Erreger aus Darm oder Umwelt (z. B. Wasser); machen nicht zwingend krank, gefährlich für Abwehrgeschwächte (Harnwegs-, Wund-, Atemwegsinfektionen); Übertragung über Hände, Nahrung, Gegenstände.</li>
  <li><b>Clostridium difficile:</b> anaerobes grampositives Stäbchen im Darm; unter Antibiotika Vermehrung, Toxin- und Sporenbildung (umweltresistent, durch gängige Desinfektionsmittel nicht abgetötet) → starker Durchfall.</li>
  <li>MRE sind erst bei Nachweis in Blut oder Liquor meldepflichtig; Nachweis in der Wunde nur per Abstrich. MRSA, VRE: Einzelisolierung, Mund-Nasen-Schutz, Schutzkittel, Handschuhe, Händedesinfektion vor und nach Patientenkontakt (S. 15).</li>
  <li><b>Basishygiene</b> (Lösung S. 33): Händedesinfektion, Flächendesinfektion, Schutzkleidung, Isolation.</li>
</ul>

<h3>6. Verbandwechsel – Voraussetzungen und Ziele <span class="seite">S. 15–17</span></h3>
<ul>
  <li>Immer schriftliche ärztliche Anordnung (Häufigkeit, Vorgehen, Medikamente, Wundauflage) und Einverständnis des aufgeklärten Betroffenen.</li>
  <li>Entspricht die Verordnung nicht dem Wissensstand oder gefährdet sie Patient:innen → Pflicht zum <b>Remonstrationsrecht</b> (Recht und Pflicht, eine gefahrengeneigte Versorgung schriftlich und nachweislich anzuzeigen); Austausch dokumentieren.</li>
  <li>Bei Schmerzen Analgetika auf ärztliche Anordnung rechtzeitig vorher geben (Wirkeintritt beachten). <span class="hand-inline">Handschriftlich: 30–60 min vorher.</span> Dokumentation von Wundverhältnissen, Vorkommnissen, Maßnahmen, Medikamenten.</li>
  <li><b>Ziele:</b> Wundkontrolle, Wundbeurteilung und ggf. Therapieanpassung, Vorbeugung der Keimeinschleppung, Bekämpfung bestehender Infektion, Schmerzvermeidung, Unterstützung der Heilung.</li>
  <li><b>Grundmaßnahmen:</b> Uhren und Schmuck ablegen, Haare zurückbinden/Haube, Schutzkleidung, keine ungeeignete langärmlige Kleidung. Obligatorisch: Einmalhandschuhe und Einmalschürze/-kittel, nach jedem Patientenkontakt wechseln; bei großflächigen, infektionsgefährdeten oder MRE-Wunden zusätzlich Mund-Nasen-Schutz. (Studie Wiener-Well 2011: an 63 % der Kleidungsstücke pathogene Bakterien.)</li>
</ul>
<p class="merke"><b>Checkliste vor dem Verbandwechsel (S. 17–18):</b> ärztliche Anordnung · Einverständnis · Wunddokumentation · alles mit Wundkontakt steril (Instrumente, Spüllösungen, Handschuhe, Material) · richtige Reihenfolge (kolonisierte/infizierte Wunden zuletzt) · aufwändige Verbandwechsel zu zweit · Kontakt mit Exsudat vermeiden (Handschuhe, Kittel, MNS) · sterile, gut sitzende, bakteriendichte Wundauflage · Non-Touch-Technik (RKI) · sterile Spüllösung, Haltbarkeit beachten · festklebende Kompressen mit steriler Pinzette lösen · Händedesinfektion vor und nach · Arbeitsfläche desinfizieren · keine künstlichen Nägel, Nagellack, Schmuck.</p>
<p class="hand">Spüllösung nicht kalt, Raumtemperatur (Zellteilung erst ab 28 °C).</p>

<h3>7. Händedesinfektion <span class="seite">S. 18–21</span></h3>
<ul>
  <li>Grundlegendste Hygienemaßnahme; laut RKI die wichtigste Maßnahme zur Prävention nosokomialer Infektionen; <b>100- bis 1000-mal wirksamer als Händewaschen</b>. Rechtliche Pflicht; Orientierung an RKI und TRBA.</li>
  <li><b>Ignaz Semmelweis</b> (geb. 1818, Wiener Allgemeines Krankenhaus): Kindbettfieber durch Ärzte nach Leichensektion; Chlorkalklösung senkte die Sterblichkeit; „Retter der Mütter“. Händedesinfektion vor OPs erst 1867 eingeführt.</li>
  <li><b>Ziele:</b> Eigen- und Fremdschutz, Beseitigung der transienten Flora, Reduktion der resistenten Keimflora, Unterbrechung von Infektionsketten, weniger Folgekosten.</li>
  <li><b>Wirkstoff:</b> fast immer Alkohol (n-Propanol, Iso-Propanol, Ethanol) – schädigt Zellwände; oft rückfettend. Wirksam gegen gramnegative und grampositive Bakterien inkl. MRSA, Pilze, Hefen, Mycobacterium tuberculosis, behüllte Viren (HSV, HBV, HIV, Influenza); unbehüllte Viren (Noroviren) nur eingeschränkt → spezielle Präparate (Auswahl nach VAH). Keine Wirkung gegen Sporen → danach Händewaschen (RKI).</li>
  <li><b>TRBA 250:</b> bei Tätigkeiten mit Händedesinfektion keine Schmuckstücke, Ringe, Uhren, Piercings, künstlichen Nägel oder Armbänder an Händen/Unterarmen; Nägel kurz und rund.</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>5 Indikationen (RKI)</th><th>Technik (DIN EN 1500, RKI, VAH)</th></tr></thead>
  <tbody>
    <tr><td style="font-weight:400;white-space:normal">1. vor direktem Patientenkontakt<br>2. vor aseptischen Tätigkeiten<br>3. nach Kontakt mit potenziell infektiösem Material<br>4. nach direktem Patientenkontakt<br>5. nach Kontakt mit der direkten Patientenumgebung<br><br>Wundversorgung = aseptische Tätigkeit → Händedesinfektion vor jedem Kontakt mit nicht intakter Haut, auch vor dem Richten von Material und Instrumenten.</td>
    <td>1. Uhren und Schmuck ablegen<br>2. eine hohle Hand voll (3–5 ml)<br>3. Hände über die gesamte Einreibezeit (meist 30 s) benetzt halten<br>4. Handfläche auf Handfläche inkl. Handgelenk<br>5. Fingerkuppen kreisend in der Handfläche (Fingerspitzen, Nagelfalze, Daumen, Zwischenräume)<br>6. Handfläche auf Handrücken<br>7. Handflächen mit verschränkten, gespreizten Fingern<br>8. Außenseite der verschränkten Finger auf gegenüberliegende Handfläche<br>9. Daumen kreisend in der geschlossenen Handfläche</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Fehlerquellen</b> (Lösung Übung III, S. 33): Händewaschen statt Desinfektion, zu kurze Einwirkzeit, zu wenig Mittel, zu selten, vorgeschädigte Haut/Läsionen, Störutensilien wie Schmuck und lange Nägel.</li>
</ul>

<h3>8. Kosten und Durchführung <span class="seite">S. 22–25</span></h3>
<ul>
  <li>Stationär stellt der Arbeitgeber die Hygieneausstattung. Ambulant: Pflegehilfsmittel-Paket nach § 40 Abs. 2 SGB XI, max. 40 € monatlich, ab Pflegegrad 1 bei häuslicher Versorgung (MNS, Einmalhandschuhe, Einmalschürzen, Bettschutzeinlagen, Hände-/Flächendesinfektion). Hilfsmittel sind für die Patient:innen, nicht für die Pflegekraft. Kassen veranschlagen meist 10 min bzw. ca. 10 € je Verbandwechsel. Laut HKP-Richtlinie sollen chronische Wunden nur noch von spezialisierten Leistungserbringern versorgt werden.</li>
  <li><b>Stationär (S. 23–24):</b> Verbandwagen oder Tablettsystem (RKI); Wagen vor Kontamination schützen, Flächen desinfiziert. Instrumente mit ZSVA „trocken“, sonst „nass“ in Desinfektionslösung transportieren. Abwurfbehälter für Spitzes. Nach Benutzung wischdesinfizieren, auffüllen; Routinereinigung wöchentlich. Am Bett: informieren, Einverständnis, Stoppsignale vereinbaren, Analgetika rechtzeitig; Arbeitsfläche (Beistelltisch), sterile Materialien patientenfern, Bett ist keine Ablage; gute Ausleuchtung, Bett auf Arbeitshöhe, Fenster/Türen zu, Besucher raus.</li>
  <li><b>Ambulant (S. 24):</b> Materialien staub-, hitze-, feuchtgeschützt in Kunststoffboxen lagern; Licht (Stirnlampe); Haustiere aus dem Zimmer; Arbeitsfläche aus wischdesinfiziertem Kunststofftablett, Bett und Fußboden sind keine Ablage; Abwurfbehälter aus Kunststoff, nicht aus Glas (Unfallverhütungsvorschrift).</li>
</ul>
<p class="merke"><b>Eigentlicher Verbandwechsel (S. 25):</b> 1 Händedesinfektion · 2 alten Verband mit sterilem Wasser/NaCl 0,9 % lösen · 3 Tamponaden mit steriler Pinzette entfernen · 4 Verband auf Eiter, Blut, Sekret prüfen · 5 im Abwurf entsorgen · 6 Handschuhe verwerfen · 7 Händedesinfektion · 8 ggf. Wundabstrich · 9 Handschuhwechsel + Händedesinfektion · 10 Wunde und Rand aseptisch mit sterilen Instrumenten reinigen · 11 wischen, nicht tupfen, pro Wischgang neuer Tupfer · 12 Wundinspektion · 13 Handschuhwechsel + Händedesinfektion · 14 Fäden/Klammern mit neuen sterilen Instrumenten · 15 Taschen austamponieren · 16 Verband nach AO und Phase auflegen und fixieren · 17 Abfall, Handschuhe, Kittel entsorgen · 18 Händedesinfektion.</p>

<h3>9. Non-Touch-Technik und Wundabstrich <span class="seite">S. 26–27</span></h3>
<ul>
  <li><b>Non-Touch-Technik</b> („nicht berühren“): nur steriles Material berührt die Wunde. Arbeiten mit unsterilen Handschuhen und sterilen Instrumenten; Wunde nie mit den Händen berühren. Alternativ sterile Handschuhe (zweite Person oder gute Vorbereitung) oder Aufteilung in sterile und unsterile Hand. Unsaubere Materialien gehen nie zur sauberen Wunde zurück; aufwändige Verbandwechsel zu zweit.</li>
  <li><b>Wundabstrich</b> aus der Wundtiefe (eigentlicher Wundkeim statt Oberflächenkeime). Vorher mechanische Reinigung mit angefeuchteten Kompressen und/oder Spülung mit Kochsalzlösung – keine Antiseptika oder chemischen Zusätze (verfälschen das Ergebnis). Ausnahme: Verdacht auf MRE → ohne vorherige Säuberung abstreichen.</li>
  <li>Deklariertes Abstrichröhrchen, Herstellerangaben; Information, Händedesinfektion, Einmalhandschuhe. Dokumentieren: Entnahmestelle, Wundart, Grunderkrankung, bisherige Antibiotikatherapie; Begleitschein und Etikett vollständig; gewünschte Untersuchung; Lagerung bei Zimmertemperatur; zeitnaher Transport.</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Technik</th><th>Durchführung</th><th>Indikation</th></tr></thead>
  <tbody>
    <tr><td style="white-space:normal">Essener Wundkreisel</td><td>kreisend von außen nach innen über möglichst großes Areal</td><td>gezielte MRE-Suche, z. B. bei Neuaufnahme</td></tr>
    <tr><td style="white-space:normal">Levine-Technik</td><td>ca. 1 cm² eines klinisch infizierten Areals unter leichtem Druck</td><td>Erregersuche in Unterminierungen/Taschen bei Verdacht auf Wundinfektion</td></tr>
  </tbody>
</table></div>

<h3>10. Nachbereitung <span class="seite">S. 28–29</span></h3>
<ul>
  <li>Instrumente sofort kontaminationsfrei in Auffangbehälter; Handschuhe und Kittel entsorgen; Händedesinfektion inkl. Unterarme; Patient:in angenehm lagern, Trinkbecher, Brille, Klingel bereitlegen; nach Druckgefühl, Schmerz, Juckreiz fragen; Arbeitsflächen desinfizieren; Müllbeutel außerhalb des Zimmers entsorgen; Händedesinfektion; Dokumentation; stationär Verbandwagen wischdesinfizieren und auffüllen.</li>
  <li><b>Komplikationen mangelnder Hygiene</b> (Lösung Übung III, S. 34): schmerzhafte Entzündungen, Ausbreitung lokaler zu systemischer Infektion, Sepsis, Organinfektionen (Pneumonie), Ausbreitung von MRE auf immungeschwächte Patient:innen, Wundheilungsstörung (Vergrößerung, Stagnation).</li>
  <li><b>Fehlerquellen bei Material (S. 34):</b> geöffnete Materialien verwendet, Haltbarkeit (auch nach Öffnen) nicht beachtet, unsteriles oder feucht gelagertes Material, keine Non-Touch-Technik, keine aseptische Wundreinigung.</li>
</ul>
<p class="hand">Kein Prüfungsstoff: Umgang mit Verbandmaterial (Verfallsdatum prüfen, keine angebrochenen Materialien, nicht unsteril lagern, Wechselintervall nach Exsudat und Herstellerangaben – nicht nach Tourenplan) und die Symboltabelle (z. B. LOT = Charge, SN = Seriennummer, REF = Bestellnummer, durchgestrichene 2 = nicht zur Wiederverwendung).</p>
`
});
