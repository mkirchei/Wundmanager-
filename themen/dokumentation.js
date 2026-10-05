/*
 * Thema: Wundbetreuung und Dokumentation
 * Quelle: murimed-Kursheft Wundexperte Modul I (Seitenangaben beziehen sich auf das Heft).
 * Inhalte übernommen aus "Zusammenfassung_Wundbetreuung_Dokumentation.pdf" und
 * "Lernkarten_Wundbetreuung_Dokumentation.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "wundbetreuung-dokumentation",
  titel: "Wundbetreuung und Dokumentation",
  kurz: "Dokumentation",
  quelle: "murimed-Kursheft Wundexperte Modul I",
  hinweis:
    "Quelle ist ausschließlich das Kursheft; Seitenzahlen in Klammern. Die im Heft zitierten Gesetze und Primärquellen wurden nicht separat geprüft.",

  karten: [
    { k: "Recht", f: "Welche Gesetze und Vorschriften regeln die Pflege- bzw. Wunddokumentation?",
      a: "PflBG (§ 4, § 5), SGB XI (§§ 85, 104, 105, 112–114, 140), SGB V (§ 70, § 135a), Heimgesetz § 13, Transparenzvereinbarungen PTV-S/PTV-A, Expertenstandards.", s: "S. 3" },
    { k: "Recht", f: "Wie lange muss die Wunddokumentation aufbewahrt werden?",
      a: "§ 630f BGB: Pflegedokumentation 10 Jahre.\n§ 199 BGB: 30 Jahre Verjährungsfrist für Schadensersatz bei Körperverletzung → Empfehlung: Wunddoku inkl. Fotos 30 Jahre.", s: "S. 10" },
    { k: "Recht", f: "Darf die Krankenkasse die Wunddokumentation anfordern?",
      a: "Nein. Auszüge aus Pflegedokumentation und Patientenunterlagen dürfen ausschließlich an den Medizinischen Dienst (MD) übermittelt werden (§ 275 SGB V).", s: "S. 10" },
    { k: "Recht", f: "Wunddokumentation vs. Leistungsnachweis?",
      a: "Wunddoku: Teil der Pflegedokumentation.\nLeistungs-/Durchführungsnachweis: separates Formular (Anzahl, Art, Datum, Uhrzeit, Handzeichen); ambulant Abrechnungsgrundlage. Nicht auf einem Bogen kombinieren.", s: "S. 3" },
    { k: "Ziele", f: "Welche Aufgaben und Ziele hat die Wunddokumentation?",
      a: "Heilungsverlauf nachvollziehbar machen, Basis koordinierter Therapie, Doppeluntersuchungen und Versorgungsbrüche vermeiden, Probleme schnell sichtbar machen, rechtliche Absicherung, Kommunikation, Qualitätssicherung.", s: "S. 4" },
    { k: "Anforderung", f: "Nenne die vier Grundanforderungen an die Dokumentation.",
      a: "Richtig, vollständig, nachvollziehbar, objektiv.\nDazu: dokumentenecht, persönlich, zeitnah, nicht im Voraus, mit Handzeichen.", s: "S. 4" },
    { k: "Anforderung", f: "Wie werden Korrekturen in der Dokumentation vorgenommen?",
      a: "Einmal durchstreichen, sodass es lesbar bleibt, mit aktuellem Datum und Handzeichen.\nVerboten: Korrekturfluid, Überkleben, Schwärzen, Seiten austauschen – ggf. Urkundenfälschung.", s: "S. 4" },
    { k: "Anforderung", f: "Was gilt für Handzeichen und Delegation von Einträgen?",
      a: "Jeder Eintrag mit Unterschrift oder Handzeichen (Handzeichenlegende mind. jährlich aktualisieren, neue Mitarbeitende sofort eintragen). Einträge nicht im Voraus und nicht an Kolleg:innen delegieren.", s: "S. 4" },
    { k: "Bestandteile", f: "Was gehört nach dem Expertenstandard zur Wunddokumentation?",
      a: "1. pflegerische Anamnese\n2. wundspezifisches Assessment inkl. Heilungsverlauf/Wundbericht\n3. idealerweise Fotodokumentation", s: "S. 6, 11" },
    { k: "Bestandteile", f: "Braucht jede Wunde eine eigene Dokumentation?",
      a: "Ja – auch bei identischen Wunden mit ähnlichem Verlauf (z. B. Dekubitus Nr. 1 am Steißbein, Nr. 2 am Schulterblatt).", s: "S. 7" },
    { k: "Anamnese", f: "Welche vier Kriterien umfasst die pflegerische Anamnese nach Expertenstandard?",
      a: "1. Verständnis des Krankseins\n2. wund- und therapiebedingte Einschränkungen\n3. vorhandene wundbezogene Hilfsmittel\n4. Selbstmanagementkompetenzen", s: "S. 7" },
    { k: "Anamnese", f: "Was gehört zu den wund- und therapiebedingten Einschränkungen?",
      a: "Schmerz (Ort, Stärke, Qualität, Auslöser), Mobilität, Schlaf, psychosoziale Aspekte, Abhängigkeit von Hilfe, Juckreiz/Beinschwellung, Kleidung/Schuhe, persönliche Hygiene.", s: "S. 7" },
    { k: "Anamnese", f: "Was gehört zu den Selbstmanagementkompetenzen?",
      a: "Umgang mit Einschränkungen, Einstellung zu Wunde und Verbandwechsel, Alltagsaktivitäten, krankheitsspezifische Maßnahmen (Entstauung, Gefäßtraining, Fußpflege, Druckentlastung), Hautschutz, Ernährung, Blutzucker, Raucherentwöhnung.", s: "S. 7" },
    { k: "Assessment", f: "Nenne die Kriterien des wundspezifischen Assessments.",
      a: "Med. Wunddiagnose, Lokalisation, Dauer, Rezidive, Größe, Wundgrund/Gewebeart, Exsudat, Geruch, Wundrand, Wundumgebung, Entzündungszeichen, Wundschmerz.", s: "S. 8–9, 11" },
    { k: "Assessment", f: "Wann muss das wundspezifische Assessment wiederholt werden?",
      a: "Nach Verlauf und Prognose, bei Verschlechterung, nach Interventionen (z. B. Débridement, Infektion), spätestens nach 4 Wochen.", s: "S. 9" },
    { k: "Foto", f: "Welche Regeln gelten für die Fotodokumentation?",
      a: "Einwilligung nach Aufklärung; gleiche Bedingungen (Abstand, Winkel, Licht, Kamera, Lagerung); nach der Reinigung; dunkler einfarbiger Hintergrund; Wunde ≥ ⅓ des Bildes; Lineal; eindeutige Zuordnung.", s: "S. 10" },
    { k: "Foto", f: "Kann die Fotodokumentation die schriftliche ersetzen?",
      a: "Nein. Fotos dienen nur zur Unterstützung; Dreidimensionalität, Unterminierungen, Farben werden mangelhaft dargestellt.", s: "S. 6, 10" },
    { k: "Diagnose", f: "Welche Klassifikation gehört zu welcher Wunde?",
      a: "Dekubitus – EPUAP/NPUAP\nUlcus cruris venosum – Widmer, CEAP\nUlcus cruris arteriosum – Fontaine, TASC, Rutherford\nDiab. Fußulkus – Wagner-Armstrong", s: "S. 8, 13" },
    { k: "Lokalisation", f: "Wie beeinflusst die Lokalisation die Heilung?",
      a: "Gut durchblutete Stellen (Gesicht) heilen schneller als z. B. Haut über dem Schienbein; Muskulatur schneller als Faszien/Sehnen; über Gelenken Zugkräfte und Reibung.", s: "S. 13" },
    { k: "Lokalisation", f: "Kranial, kaudal, proximal, distal?",
      a: "Kranial – kopfwärts\nKaudal – zum Steißbein hin\nProximal – zur Körpermitte/zum Rumpf\nDistal – vom Rumpf weg", s: "S. 14" },
    { k: "Lokalisation", f: "Medial, lateral, dexter, sinister, palmar, plantar?",
      a: "Medial – zur Körpermitte · lateral – seitlich · dexter – rechts · sinister – links · palmar – zur Handfläche · plantar – zur Fußsohle.", s: "S. 14" },
    { k: "Lokalisation", f: "Anterior, posterior, radial, ulnar, tibial, fibular?",
      a: "Anterior/ventral – vorne · posterior/dorsal – hinten · radial – zur Speiche · ulnar – zur Elle · tibial – zum Schienbein · fibular – zum Wadenbein.", s: "S. 14" },
    { k: "Dauer", f: "Warum ist die Wunddauer relevant?",
      a: "Je älter die Wunde, desto länger die Heilung und desto höher die Wahrscheinlichkeit fehlerhafter Zellteilung/Entartung; bei länger bestehenden Wunden neuen Gefäßstatus erheben. Rezidive auf Narben heilen schlechter.", s: "S. 14" },
    { k: "Größe", f: "Welche Größenangaben sind ungeeignet?",
      a: "Vergleiche wie handtellergroß, tomatengroß, erbsengroß, Ein-Euro-Stück-groß sowie „Wunde schaut prima aus“ oder „ohne Befund“.", s: "S. 15" },
    { k: "Größe", f: "Wie werden Länge und Breite gemessen?",
      a: "Länge = größter Abstand in Kopf-Fuß-Achse (vertikal), Breite = größter horizontaler Abstand; beide im 90°-Winkel. Messpunkte im Team einheitlich.", s: "S. 15" },
    { k: "Größe", f: "Wie funktioniert die Uhrmethode?",
      a: "Für Taschen, Fisteln, Unterminierungen: Kopf = 12 Uhr, Fuß = 6 Uhr, unabhängig von der Lage. An Hand/Fuß: Finger-/Zehenspitzen = 12 Uhr, Handgelenk/Ferse = 6 Uhr.", s: "S. 16" },
    { k: "Größe", f: "Wie misst man Tiefe und Volumen einer Wunde?",
      a: "Tiefe: senkrecht an der tiefsten Stelle mit sterilen Pinzetten, Sonden, Knopfkanülen, Spülkathetern – keine Watteträger.\nVolumen: Auslitern mit Folie und Ringerlösung (ml).", s: "S. 16" },
    { k: "Gewebe", f: "Trockene vs. feuchte Nekrose?",
      a: "Trocken: dunkelbraun bis schwarz, hart, lederartig, klar abgegrenzt.\nFeucht: grau-gelb, weich, faserige oder schmierige Beläge.", s: "S. 17" },
    { k: "Gewebe", f: "Warum Nekrosen abtragen – und wann nicht?",
      a: "Fördert die Heilung, macht das Wundausmaß beurteilbar, entfernt das Keimreservoir – erst nach Demarkation.\nAusnahme: hochgradige pAVK – erst nach Behandlung der Grunderkrankung.", s: "S. 17" },
    { k: "Gewebe", f: "Was ist eine Gangrän?",
      a: "Spezielle Nekrose: akral, meist scharf begrenzt, durch Durchblutungsstörung; Wasserverlust → Mumifizierung; schwarz durch Blutabbauprodukte.", s: "S. 17" },
    { k: "Gewebe", f: "Wie unterscheidet man Eiter von Fibrin?",
      a: "Mit steriler Kompresse über die Wunde wischen: Eiter lässt sich abwischen, Fibrinbeläge haften fest am Wundgrund. (Sicher nur histologisch.)", s: "S. 18" },
    { k: "Gewebe", f: "Gutes vs. schlechtes Granulationsgewebe?",
      a: "Gut: rot, feinkörnig, feucht glänzend, fest.\nSchlecht: blassrosa bis gräulich, schwammig, grobkörnig, stark exsudierend (Durchblutung, Eiweißmangel, Keimlast, fehlende Druckentlastung).", s: "S. 18" },
    { k: "Gewebe", f: "Was ist Hypergranulation und wie wird sie behandelt?",
      a: "Überschießendes Granulationsgewebe über Hautniveau (vermutlich durch Entzündung, Fremdkörper, Reibung).\nTrockene Wundversorgung oder kontrollierte Druckverbände.", s: "S. 19" },
    { k: "Gewebe", f: "Wie wird eine frisch epithelisierte Wunde versorgt?",
      a: "Mit einem Schutzverband abdecken – Folienverbände oder transparente Hydrokolloide –, da das neue Gewebe empfindlich und wenig belastbar ist.", s: "S. 19" },
    { k: "Gewebe", f: "Aussehen von Fettgewebe, Muskel, Sehne?",
      a: "Fett: gelb-orange/weiß/grau, ölig, kugelig; abgestorben grau, bröselig.\nMuskel: vital rot; abgestorben fahlgrau bis schwarz.\nSehne: gelblich, glatt, glänzend, längs gefasert.", s: "S. 19–20" },
    { k: "Exsudat", f: "Welche Funktionen hat das Exsudat?",
      a: "Verhindert Austrocknen, erleichtert Einwandern von Fibroblasten, ermöglicht Zellbewegung und -teilung, liefert Nährstoffe, transportiert Immun- und Wachstumsfaktoren, unterstützt Autolyse.", s: "S. 20" },
    { k: "Exsudat", f: "Was bedeutet eine plötzlich zunehmende Exsudation bei fortgeschrittener Heilung?",
      a: "Mögliches Zeichen einer beginnenden Infektion – der Körper versucht, Keime und Fremdkörper auszuspülen.", s: "S. 21" },
    { k: "Exsudat", f: "Was deutet grünes, graublaues oder klares Exsudat an?",
      a: "Grün: Pseudomonas aeruginosa\nGrau/blau: Rückstände silberhaltiger Auflagen\nKlar/bernstein: normal serös; ggf. Harnwegs-/Lymphfistel", s: "S. 21" },
    { k: "Exsudat", f: "Zähflüssiges vs. dünnflüssiges Exsudat?",
      a: "Zäh: hoher Eiweißanteil (Entzündung), Verbandrückstände, Nekrose in Autolyse, Darmfistel.\nDünn: wenig Eiweiß (Mangelernährung, venöse/kardiale Erkrankung), Lymph-/Gelenk-/Harnwegsfistel.", s: "S. 22" },
    { k: "Geruch", f: "Wie wird Wundgeruch dokumentiert?",
      a: "Nur ja/nein – Geruch ist nicht objektiv erfassbar; Begriffe wie süßlich, faulig sind subjektiv. Nicht jeder Geruch bedeutet Infektion.", s: "S. 22" },
    { k: "Wundrand", f: "Unterminierung, Wundtasche, Untertunnelung?",
      a: "Unterminiert: bis max. 1 cm unterhöhlt.\nWundtasche: ab 1 cm.\nUntertunnelung: Verbindungsgang zu einer anderen Wunde.", s: "S. 23" },
    { k: "Wundrand", f: "Warum muss der Wundrand gereinigt werden?",
      a: "Die Epithelisierung geht vom Wundrand aus; Verkrustungen (z. B. eingetrocknetes Exsudat) verhindern das Einwandern der Epithelzellen.", s: "S. 24" },
    { k: "Wundrand", f: "Wie schützt man den Wundrand?",
      a: "Alkoholfreie transparente Hautschutzfilme (Hydropolymere, Silikone), Barrierecremes; trocknen lassen, keine zusätzlichen fetthaltigen Produkte.", s: "S. 24" },
    { k: "Wundrand", f: "Warum eignet sich Zinkpaste nicht als Wundrandschutz?",
      a: "Verhindert Beurteilung, schwer entfernbar (Öle stören Kleben), verdeckt Rötungen, stört in der Wunde die Heilung, mechanische Belastung beim Entfernen, trocknet aus → Risse und Keimeintritt.", s: "S. 24" },
    { k: "Umgebung", f: "Was bedeuten MASD und MARSI?",
      a: "MASD: Moisture Associated Skin Damage – Hautschäden durch Feuchtigkeit.\nMARSI: Medical Adhesive-Related Skin Injury – Schäden durch Ablösen von Wundauflagen.", s: "S. 25" },
    { k: "Infektion", f: "Entzündung vs. Infektion einer Wunde?",
      a: "Entzündung: durch die Gewebeschädigung selbst ausgelöst, physiologisch in der Exsudationsphase.\nInfektion: Eindringen, Anheften, Vermehren von Erregern; in jeder Phase; lokal, ausbreitend, systemisch.", s: "S. 25–26" },
    { k: "Infektion", f: "Was ist bei Infektionszeichen bei pAVK und diabetischer Neuropathie zu beachten?",
      a: "pAVK: Rötung und Überwärmung kaum vorhanden – Schmerz ist das aussagekräftigste Zeichen.\nNeuropathie: Schmerz fehlt, Fieber höchstens subfebril.", s: "S. 27" },
    { k: "Infektion", f: "Zeichen einer Infektion in Wundtaschen?",
      a: "Geröteter, verhärteter, ödematöser, schmerzhafter Wundrand; starke, dickflüssige, eitrige Exsudation; Geruch; oft Auslöser systemischer Infektion.", s: "S. 28" },
    { k: "Schmerz", f: "Mit welchen Instrumenten wird Wundschmerz erfasst?",
      a: "Selbsteinschätzung: VRS (verbal), NRS (numerisch), GRS (Gesichter).\nFremdeinschätzung: BESD, BISAD. Dazu Qualität und Auslöser dokumentieren.", s: "S. 28" },
    { k: "Sinne", f: "Welche Sinne nutzt man bei der Wundbeurteilung?",
      a: "Hören (Anamnese, Schmerzlaute), Sehen (Haut, Gangbild, Schuhe, Hilfsmittel), Tasten (Verhärtung, Ödem, Temperatur), Riechen (Geruch ja/nein). Alte Farbmodelle (schwarz/gelb) nicht mehr verwenden.", s: "S. 29" }
  ],

  quiz: [
    { f: "Wie lange muss die Pflegedokumentation nach § 630f BGB aufbewahrt werden?",
      o: ["10 Jahre", "30 Jahre", "5 Jahre", "2 Jahre"],
      e: "§ 630f BGB: Pflegedokumentation 10 Jahre aufbewahren.", s: "S. 10" },
    { f: "Wie lange wird empfohlen, die Wunddokumentation inklusive Fotos aufzubewahren – und warum?",
      o: ["30 Jahre – wegen der Verjährungsfrist nach § 199 BGB", "10 Jahre – wegen § 630f BGB", "Bis zur Abheilung der Wunde", "1 Jahr – wegen der Handzeichenlegende"],
      e: "§ 199 BGB: 30 Jahre Verjährungsfrist für Schadensersatz bei Verletzung von Körper und Gesundheit → Empfehlung 30 Jahre.", s: "S. 10" },
    { f: "Darf die Krankenkasse die Wunddokumentation anfordern?",
      o: ["Nein – Auszüge dürfen nur an den Medizinischen Dienst (MD) übermittelt werden", "Ja, jederzeit ohne Begründung", "Ja, aber nur die Fotos", "Nur mit Zustimmung der Heimleitung"],
      e: "Krankenkassen dürfen die Wunddokumentation nicht anfordern; Auszüge nur an den MD (§ 275 SGB V).", s: "S. 10" },
    { f: "Wie wird ein fehlerhafter Eintrag in der Papierdokumentation korrigiert?",
      o: ["Einmal durchstreichen, lesbar lassen, mit Datum und Handzeichen", "Mit Korrekturfluid überdecken und neu schreiben", "Die Seite austauschen", "Schwärzen und am Rand neu notieren"],
      e: "Korrekturfluid, Überkleben, Schwärzen, Seiten austauschen sind verboten – rechtlich ggf. Urkundenfälschung.", s: "S. 4" },
    { f: "Welche vier Grundanforderungen gelten für die Dokumentation?",
      o: ["Richtig, vollständig, nachvollziehbar, objektiv", "Kurz, schnell, digital, anonym", "Subjektiv, ausführlich, im Voraus, delegiert", "Farbig, bebildert, gestempelt, jährlich"],
      e: "Richtig, vollständig, nachvollziehbar, objektiv; dazu dokumentenecht, persönlich, zeitnah, nicht im Voraus, mit Handzeichen.", s: "S. 4" },
    { f: "Wie oft muss die Handzeichenlegende mindestens aktualisiert werden?",
      o: ["Mindestens jährlich", "Monatlich", "Alle 5 Jahre", "Nur bei Prüfungen durch den MD"],
      e: "Handzeichenlegende mind. jährlich aktualisieren, neue Mitarbeitende sofort eintragen.", s: "S. 4" },
    { f: "Wann muss das wundspezifische Assessment spätestens wiederholt werden?",
      o: ["Spätestens nach 4 Wochen", "Spätestens nach 12 Monaten", "Nur bei Abheilung", "Täglich bei jedem Verbandwechsel"],
      e: "Je nach Verlauf, bei Verschlechterung, nach Interventionen (z. B. Débridement, Infektion), spätestens nach 4 Wochen.", s: "S. 9" },
    { f: "Was gilt für die Fotodokumentation?",
      o: ["Sie ergänzt die schriftliche Dokumentation, ersetzt sie aber nie", "Sie ersetzt die schriftliche Dokumentation vollständig", "Sie ist ohne Einwilligung erlaubt", "Fotos werden vor der Wundreinigung gemacht"],
      e: "Fotos nur zur Unterstützung; Dreidimensionalität, Unterminierungen und Farben werden mangelhaft dargestellt. Einwilligung nach Aufklärung; grundsätzlich nach der Reinigung.", s: "S. 6, 10" },
    { f: "Wie groß sollte die Wunde auf dem Foto mindestens abgebildet sein?",
      o: ["Mindestens ⅓ des Bildes", "Mindestens die Hälfte des Bildes", "Genau 10 × 10 cm", "Das spielt keine Rolle"],
      e: "Einfarbiger, dunkler Hintergrund; Wunde mind. ⅓ des Bildes; Lineal/Maßband zur Größenbestimmung.", s: "S. 10" },
    { f: "Mit welcher Klassifikation wird das Diabetische Fußulkus eingeteilt?",
      o: ["Wagner-Armstrong", "Widmer/CEAP", "EPUAP/NPUAP", "Fontaine/Rutherford"],
      e: "Dekubitus – EPUAP/NPUAP · Ulcus cruris venosum – Widmer, CEAP · arteriosum – Fontaine, TASC, Rutherford · DFU – Wagner-Armstrong.", s: "S. 8, 13" },
    { f: "Was bedeutet „kaudal“?",
      o: ["Zum Steißbein hin", "Kopfwärts", "Zur Körpermitte", "Zur Fußsohle"],
      e: "Kranial – kopfwärts · kaudal – zum Steißbein hin · medial – zur Körpermitte · plantar – zur Fußsohle.", s: "S. 14" },
    { f: "Was bedeutet „distal“?",
      o: ["Vom Rumpf weg", "Zum Rumpf hin", "Seitlich", "Hinten"],
      e: "Proximal – zur Körpermitte/zum Rumpf · distal – vom Rumpf weg.", s: "S. 14" },
    { f: "Was bedeutet „palmar“?",
      o: ["Zur Handfläche", "Zur Fußsohle", "Zur Speiche", "Zum Rücken"],
      e: "Palmar – zur Handfläche · plantar – zur Fußsohle · radial – zur Speiche · ulnar – zur Elle.", s: "S. 14" },
    { f: "Wie wird die Länge einer Wunde gemessen?",
      o: ["Größter Abstand in der Kopf-Fuß-Achse; Breite im 90°-Winkel dazu", "Immer der längste Durchmesser in beliebiger Richtung", "Von 3 Uhr bis 9 Uhr", "Diagonal von oben links nach unten rechts"],
      e: "Länge = größte Ausdehnung in Kopf-Fuß-Achse, Breite = größte horizontale Ausdehnung, im 90°-Winkel. Messpunkte im Team einheitlich.", s: "S. 15" },
    { f: "Welche Angabe zur Wundgröße ist geeignet?",
      o: ["Länge × Breite in cm, gemessen mit Einmalpapierlineal", "„Handtellergroß“", "„Ein-Euro-Stück-groß“", "„Wunde o. B.“"],
      e: "Keine Vergleiche wie handtellergroß, tomatengroß, erbsengroß, Ein-Euro-Stück-groß oder „ohne Befund“.", s: "S. 15" },
    { f: "Wo liegt bei der Uhrmethode 12 Uhr?",
      o: ["Am Kopf – unabhängig von der Lage der Person", "Immer oben im Bild der Kamera", "Am Fuß", "Dort, wo die Wunde am tiefsten ist"],
      e: "Kopf = 12 Uhr, Fuß = 6 Uhr, unabhängig von der Lage. An Hand/Fuß: Finger-/Zehenspitzen = 12 Uhr, Handgelenk/Ferse = 6 Uhr.", s: "S. 16" },
    { f: "Womit darf die Wundtiefe NICHT gemessen werden?",
      o: ["Mit Watteträgern", "Mit sterilen Pinzetten", "Mit Sonden oder Knopfkanülen", "Mit Spülkathetern"],
      e: "Tiefe senkrecht an der tiefsten Stelle mit sterilen Pinzetten, Sonden, Knopfkanülen, Spülkathetern – keine Watteträger (Rückstände, Infektionsrisiko).", s: "S. 16" },
    { f: "Wie unterscheidet man Eiter von Fibrinbelägen?",
      o: ["Mit steriler Kompresse wischen: Eiter lässt sich abwischen, Fibrin haftet fest", "Eiter ist immer grün, Fibrin immer weiß", "Fibrin riecht, Eiter nicht", "Gar nicht – das ist nur am Geruch erkennbar"],
      e: "Optisch gleich; Eiter lässt sich abwischen, Fibrinbeläge haften fest am Wundgrund (sicher nur histologisch).", s: "S. 18" },
    { f: "Woran erkennt man gutes Granulationsgewebe?",
      o: ["Rot, feinkörnig, feucht glänzend, fest", "Blassrosa bis gräulich, schwammig, grobkörnig", "Schwarz, hart, lederartig", "Gelb, schmierig, festhaftend"],
      e: "Gut: rot, feinkörnig, feucht glänzend, fest. Schlecht: blassrosa bis gräulich, schwammig, grobkörnig, stark exsudierend.", s: "S. 18" },
    { f: "Wie wird Hypergranulation behandelt?",
      o: ["Trockene Wundversorgung oder kontrollierte Druckverbände", "Mit Hydrogel feucht halten", "Mit Zinkpaste abdecken", "Gar nicht – sie ist immer erwünscht"],
      e: "Hypergranulation = überschießendes Granulationsgewebe über Hautniveau; trockene Versorgung oder kontrollierte Druckverbände.", s: "S. 19" },
    { f: "Wann werden Nekrosen abgetragen?",
      o: ["Grundsätzlich ja – aber erst nach Demarkation; bei hochgradiger pAVK erst nach Behandlung der Grunderkrankung", "Sofort bei Entdeckung, auch ohne Demarkation", "Nie – Nekrosen schützen die Wunde", "Nur bei Dekubitus Kategorie I"],
      e: "Abtragen fördert die Heilung, macht das Wundausmaß beurteilbar und entfernt das Keimreservoir – erst nach Demarkation.", s: "S. 17" },
    { f: "Grünes Exsudat ist ein mögliches Anzeichen für …",
      o: ["Pseudomonas aeruginosa", "Rückstände silberhaltiger Wundauflagen", "Eine Lymphfistel", "Normales seröses Exsudat"],
      e: "Grün: Pseudomonas aeruginosa · grau/blau: Silberrückstände · klar/bernstein: normal serös, ggf. Harnwegs-/Lymphfistel.", s: "S. 21" },
    { f: "Was kann eine plötzlich zunehmende Exsudation bei fortgeschrittener Heilung bedeuten?",
      o: ["Eine beginnende Infektion", "Den Abschluss der Epithelisierung", "Eine besonders gute Granulation", "Eine Austrocknung der Wunde"],
      e: "Physiologisch nimmt die Exsudatmenge ab; ein plötzlicher Anstieg spricht für eine beginnende Infektion.", s: "S. 21" },
    { f: "Wie wird Wundgeruch dokumentiert?",
      o: ["Nur ja/nein", "Mit Begriffen wie süßlich oder faulig", "Auf einer Skala von 0–10", "Gar nicht"],
      e: "Geruch ist nicht objektiv erfassbar → nur ja/nein; nicht jeder Geruch bedeutet Infektion.", s: "S. 22" },
    { f: "Ab welcher Tiefe spricht man von einer Wundtasche statt einer Unterminierung?",
      o: ["Ab 1 cm", "Ab 5 mm", "Ab 3 cm", "Ab 10 cm"],
      e: "Unterminiert: bis max. 1 cm unterhöhlt · Wundtasche: ab 1 cm · Untertunnelung: Verbindung zu einer anderen Wunde.", s: "S. 23" },
    { f: "Warum eignet sich Zinkpaste nicht als Wundrandschutz?",
      o: ["Sie verhindert die Beurteilung und verdeckt Rötungen als Infektionszeichen", "Sie ist zu teuer", "Sie wirkt zu stark antiseptisch", "Sie ist nur für Schleimhäute zugelassen"],
      e: "Zinkpaste verhindert die Beurteilung, ist schwer entfernbar, verdeckt Rötungen, stört in der Wunde die Heilung und trocknet aus → Risse, Keimeintritt.", s: "S. 24" },
    { f: "Was bedeutet MASD?",
      o: ["Moisture Associated Skin Damage – Hautschäden durch Feuchtigkeit", "Medical Adhesive Skin Damage – Schäden durch Pflaster", "Methicillin-Associated Skin Disease", "Maximum Acceptable Skin Depth"],
      e: "MASD: Hautschäden durch Feuchtigkeit. MARSI: Schäden durch Ablösen von Wundauflagen.", s: "S. 25" },
    { f: "Welches Infektionszeichen ist bei pAVK am aussagekräftigsten?",
      o: ["Schmerz", "Rötung", "Überwärmung", "Hohes Fieber"],
      e: "Bei pAVK sind Rötung und Überwärmung kaum vorhanden – Schmerz ist das aussagekräftigste Zeichen. Bei Neuropathie fehlt der Schmerz.", s: "S. 27" },
    { f: "Welches Instrument dient der Fremdeinschätzung von Schmerz?",
      o: ["BESD", "NRS", "VRS", "GRS"],
      e: "Selbsteinschätzung: VRS (verbal), NRS (numerisch), GRS (Gesichter). Fremdeinschätzung: BESD, BISAD.", s: "S. 28" },
    { f: "Was gilt für alte Farbmodelle der Wundbeurteilung (schwarz = Nekrose, gelb = Fibrin)?",
      o: ["Sie werden nicht mehr verwendet", "Sie sind laut Expertenstandard Pflicht", "Sie ersetzen das wundspezifische Assessment", "Sie gelten nur für Dekubitus"],
      e: "Wundbeurteilung mit allen Sinnen (Hören, Sehen, Tasten, Riechen); alte Farbmodelle werden nicht mehr verwendet.", s: "S. 29" }
  ],

  zusammenfassung: `
<h3>1. Rechtliche Grundlagen der Dokumentation <span class="seite">S. 3</span></h3>
<ul>
  <li>Pflegeberufegesetz (PflBG): § 4 Vorbehaltene Tätigkeiten, § 5 Ausbildungsziel.</li>
  <li>SGB XI: § 85 Pflegesatzverfahren, § 104 Pflichten der Leistungserbringer, § 105 Abrechnung, § 140 Überleitung in Pflegegrade, § 112 Qualitätsverantwortung, § 113 Maßstäbe und Grundsätze der Pflegequalität, § 114 Qualitätsprüfungen.</li>
  <li>SGB V: § 70 Qualität, Humanität und Wirtschaftlichkeit, § 135a Verpflichtung zur Qualitätssicherung. (Im Heft steht hier versehentlich „Fünftes Buch (SGB XI)“.)</li>
  <li>Heimgesetz § 13 Aufzeichnungs- und Aufbewahrungspflicht · Transparenzvereinbarungen PTV-S (stationär) und PTV-A (ambulant) · Expertenstandards.</li>
  <li>Wunddokumentation ist Teil der Pflegedokumentation – nicht der Leistungs-/Durchführungsnachweise (separate Formulare mit Anzahl, Art, Datum, Uhrzeit, Handzeichen; ambulant Abrechnungsgrundlage). Beides auf einem Bogen widerspräche fachlichen und datenschutzrechtlichen Zielen.</li>
</ul>

<h3>2. Aufgaben, Ziele und Anforderungen <span class="seite">S. 4–5</span></h3>
<ul>
  <li><b>Ziele:</b> Heilungsverlauf anhand festgelegter Parameter für alle Beteiligten nachvollziehbar machen; Basis koordinierter Therapie; Doppeluntersuchungen und Versorgungsbrüche vermeiden; Probleme schnell sichtbar machen, schnelles Eingreifen; rechtliche Absicherung; Kommunikationsmittel und Teil der Qualitätssicherung.</li>
</ul>
<p class="merke"><b>Grundsätzliche Anforderungen (S. 4):</b> richtig, vollständig, nachvollziehbar, objektiv · Papier dokumentenecht (Kugelschreiber); digital unveränderbar (Rollen, Speicher-/Löschregeln, Passwörter) · immer persönlich und zeitnah · nicht im Voraus, nicht delegieren · jeder Eintrag mit Unterschrift bzw. Handzeichen (Handzeichenlegende mind. jährlich aktualisieren) · Korrekturen: einmal durchstreichen, lesbar lassen, Datum + Handzeichen · Korrekturfluid, Überkleben, Schwärzen, Seiten austauschen sind verboten – rechtlich ggf. Urkundenfälschung.</p>
<ul>
  <li><b>Spezifische Anforderungen</b> (Expertenstandard chronische Wunden, S. 5): ersichtlich sein muss, welche hygienischen Maßnahmen erfolgen, wie der Mensch mit wund- und therapiebedingten Beeinträchtigungen umgeht, Informationen zu Druckentlastung, Bewegung, Kompression, Ernährung, Rezidivprophylaxe, Selbstmanagementkompetenzen, Beteiligung an Maßnahmen, Wirkung, Verbesserung/Verschlechterung und Gründe für Änderungen.</li>
  <li>Der Expertenstandard empfiehlt, zur primären Wunddokumentation pflegerische Fachexpert:innen (z. B. Wundexpert:innen) hinzuzuziehen – intern oder extern (S. 5).</li>
</ul>

<h3>3. Bestandteile der Wunddokumentation <span class="seite">S. 6–10</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Bestandteil</th><th>Inhalt</th><th>Besonderheit</th></tr></thead>
  <tbody>
    <tr><td style="white-space:normal">Pflegerische Anamnese ★</td><td>Einschätzung der wund- und therapiebedingten Einschränkungen und der Selbstmanagementkompetenzen von Betroffenen und Angehörigen</td><td>keine validen Instrumente → Kriterien der Expert:innenarbeitsgruppe</td></tr>
    <tr><td style="white-space:normal">Wundspezifisches Assessment</td><td>Beschreibung nach festgelegten Kriterien, bisheriger Versorgungsprozess, Heilungsverlauf/Wundbericht</td><td>standardisierte Verfahren, z. B. EPUAP, PSST, PUSH, CEAP, Wagner-Armstrong</td></tr>
    <tr><td style="white-space:normal">Fotodokumentation</td><td>Visualisierung des Heilungsverlaufs</td><td>nur ergänzend – ersetzt nie die schriftliche Dokumentation</td></tr>
  </tbody>
</table></div>
<p>Keine standardisierten bundesweiten Bögen. Einfache Bögen mit Ankreuzfeldern vermeiden subjektive Aussagen wie „Wunde sifft“ oder „sieht gut aus“. Für jede Wunde eine eigene Dokumentation – auch bei gleichartigen Wunden (S. 6–7).</p>
<div class="tabelle"><table>
  <caption>Pflegerische Anamnese – Kriterien ★ (S. 7–8)</caption>
  <thead><tr><th>Kriterium</th><th>Komponenten</th></tr></thead>
  <tbody>
    <tr><td style="white-space:normal">Verständnis des Krankseins</td><td>Ursache, Heilung und Vorstellung zur Heilungszeit, Symptome (Geruch, Exsudat, Juckreiz), Bedeutung spezieller Maßnahmen</td></tr>
    <tr><td style="white-space:normal">Wund- und therapiebedingte Einschränkungen</td><td>Schmerz (Ort, Stärke, Qualität, Dauer, Auslöser, Linderung), Mobilität/Aktivität, Schlaf, psychosoziale Aspekte, Abhängigkeit von Hilfe, Juckreiz/Beinschwellung, Kleidung/Schuhe, Hygiene</td></tr>
    <tr><td style="white-space:normal">Wundbezogene Hilfsmittel</td><td>z. B. Kompressionsstrümpfe, spezielle Schuhe, Orthesen, druckverteilende Matratzen, Sitzkissen</td></tr>
    <tr><td style="white-space:normal">Selbstmanagementkompetenzen</td><td>Umgang mit Einschränkungen, Einstellung zu Wunde und Verbandwechsel, Alltagsaktivitäten, krankheitsspezifische Maßnahmen (Entstauung, Gefäßtraining, Fußpflege/-inspektion, Druckentlastung), Hautschutz, Ernährung, Blutzucker, Raucherentwöhnung</td></tr>
  </tbody>
</table></div>
<p>Zusätzlich: Name, Geburtsdatum, Medikation, Allergien, soziales Umfeld, behandelnde Ärzt:innen, Immunstatus, Begleiterkrankungen, Operationen, geistiger/seelischer Zustand, Lebensgewohnheiten, Wissen und Einstellung, Kontinenzsituation.</p>
<ul>
  <li><b>Wundspezifisches Assessment (S. 8–9):</b> medizinische Wunddiagnose, Lokalisation, Dauer, Rezidivzahl, Größe, Wundgrund, Exsudat, Geruch, Rand, Umgebung, Entzündungszeichen, Schmerz; dazu Therapie, Behandlungsschema, vollständige Produktbezeichnung und -größe, Datum und Handzeichen.</li>
  <li><b>Wiederholung:</b> je nach Verlauf, bei Verschlechterung oder nach Interventionen (z. B. Débridement, Infektion), spätestens nach 4 Wochen (S. 9, 11).</li>
</ul>
<h4>Fotodokumentation (S. 10)</h4>
<ul>
  <li>Einwilligung des Betroffenen bzw. gesetzlichen Vertreters nach Aufklärung über Grund und Zweck.</li>
  <li>Bei Wiederholung gleicher Abstand, Winkel, Belichtung, Kamera und Lagerung.</li>
  <li>Grundsätzlich nach der Reinigung fotografieren (Ausnahme: Auffälligkeiten, die nur vorher sichtbar sind).</li>
  <li>Einfarbiger, dunkler Hintergrund; Wunde mind. ⅓ des Bildes; Lineal/Maßband zur Größenbestimmung.</li>
  <li>Eindeutig zuordenbar (Name, Datum, Körperseite); bei den Dokumentationsunterlagen aufbewahren.</li>
</ul>
<p class="merke"><b>Aufbewahrung und Krankenkassen (S. 10):</b> § 630f BGB – Pflegedokumentation 10 Jahre aufbewahren. § 199 BGB – 30 Jahre Verjährungsfrist für Schadensersatz bei Verletzung von Körper und Gesundheit → empfohlen: Wunddokumentation inkl. Fotos 30 Jahre. Krankenkassen dürfen die Wunddokumentation nicht anfordern; Auszüge nur an den Medizinischen Dienst (MD) (§ 275 SGB V).</p>
<p class="hand">Als Prüfungsthema markiert: „Paragraphen“, § 630f BGB, § 199 BGB.</p>

<h3>4. Kriterien der Wundbeurteilung <span class="seite">S. 11–28</span></h3>
<ul>
  <li><b>Medizinische Wunddiagnose (S. 12–13):</b> Grunderkrankung, Wundart, Schweregrad – Dekubitus nach EPUAP/NPUAP, Ulcus cruris venosum nach Widmer/CEAP, arteriosum nach Fontaine/TASC/Rutherford, diabetisches Fußulkus nach Wagner-Armstrong. Fehlt sie, bei Ärzt:innen erfragen und dokumentieren.</li>
  <li><b>Lokalisation (S. 13–14):</b> schriftlich und grafisch. Gut durchblutete Stellen (Gesicht) heilen schneller als z. B. Haut über dem Schienbein; Muskulatur schneller als Faszien/Sehnen; Gelenkregionen durch Zugkräfte und Reibung belastet.</li>
</ul>
<div class="tabelle"><table>
  <caption>Lagebezeichnungen (S. 14)</caption>
  <thead><tr><th>Begriff</th><th>Bedeutung</th><th>Begriff</th><th>Bedeutung</th></tr></thead>
  <tbody>
    <tr><td>anterior/ventral</td><td>vorne (Bauch-/Brustseite)</td><td>posterior/dorsal</td><td>hinten (Rücken-/Gesäßseite)</td></tr>
    <tr><td>kranial</td><td>kopfwärts</td><td>kaudal</td><td>zum Steißbein hin</td></tr>
    <tr><td>medial</td><td>zur Körpermitte</td><td>lateral</td><td>seitlich</td></tr>
    <tr><td>proximal</td><td>zur Körpermitte/zum Rumpf</td><td>distal</td><td>vom Rumpf weg</td></tr>
    <tr><td>dexter</td><td>rechts</td><td>sinister</td><td>links</td></tr>
    <tr><td>palmar</td><td>zur Handfläche</td><td>plantar</td><td>zur Fußsohle</td></tr>
    <tr><td>radial / ulnar</td><td>zur Speiche / zur Elle</td><td>tibial / fibular</td><td>zum Schienbein / zum Wadenbein</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Wunddauer (S. 14):</b> Zeitspanne seit Auftreten. Je älter die Wunde, desto länger die Heilung und desto höher das Risiko einer Entartung; bei länger bestehenden Wunden neuen Gefäßstatus erheben. Rezidive auf Narbengewebe heilen schlechter.</li>
  <li><b>Rezidive (S. 15):</b> Anzahl und rezidivfreie Zeit in Monaten erfassen.</li>
  <li><b>Wundgröße (S. 15–16):</b> keine Vergleiche wie „handtellergroß“, „Ein-Euro-Stück“ oder „Wunde o. B.“. Länge = größte Ausdehnung in Kopf-Fuß-Achse, Breite = größte horizontale Ausdehnung, im 90°-Winkel; Einmalpapierlineal, Folie zum Umzeichnen. Messpunkte im Team einheitlich festlegen.</li>
  <li><b>Uhrmethode:</b> v. a. für Taschen, Fisteln, Unterminierungen; Kopf = 12 Uhr, Fuß = 6 Uhr unabhängig von der Lage; an Händen/Füßen Zehen- bzw. Fingerspitzen = 12 Uhr, Ferse/Handgelenk = 6 Uhr.</li>
  <li><b>Tiefe:</b> senkrecht an der tiefsten Stelle mit sterilen Pinzetten, Sonden, Knopfkanülen, Spülkathetern – keine Watteträger (Rückstände, Infektionsrisiko). <b>Volumen:</b> Auslitern mit Folie und z. B. Ringerlösung, Angabe in ml.</li>
</ul>
<h4>Wundgrund und Gewebearten (S. 16–20)</h4>
<ul>
  <li><b>Nekrose:</b> Endstadium einer Zellschädigung. Trocken: dunkelbraun bis schwarz, hart, lederartig, klar abgegrenzt. Feucht: grau-gelb, weich, faserig/schmierig. Ausdehnung der Wunde nicht beurteilbar. Gangrän: akraler, scharf begrenzter Gewebeuntergang durch Durchblutungsstörung, Mumifizierung, schwarz.</li>
  <li>Nekrosen grundsätzlich abtragen (Heilung, Wundausmaß, Keimreservoir) – aber erst nach Demarkation. Ausnahme: hochgradige pAVK → äußerste Vorsicht, erst nach Behandlung der Grunderkrankung (S. 17).</li>
  <li><b>Fibrinbeläge:</b> Fibrin = wasserunlösliches Protein; erster Wundverschluss und Gerüst für Granulation; zu fest anhaftend → Störung. Infektfibrin: festsitzend, hell- bis dunkelgelb, schmierig. Eiter vs. Fibrin: optisch gleich; mit steriler Kompresse wischen – Eiter lässt sich abwischen, Fibrin haftet fest (S. 18).</li>
  <li><b>Granulationsgewebe:</b> feucht glänzend, leicht verletzlich, tiefrot, körnig. Gut: rot, feinkörnig, feucht glänzend, fest (gute Durchblutung, Eiweiß, Druckentlastung). Schlecht: blassrosa bis gräulich, schwammig, grobkörnig, stark exsudierend (schlechte Durchblutung, Eiweißmangel, Keimlast, fehlende Druckentlastung). Hypergranulation (über Hautniveau) behandeln: trockene Versorgung oder kontrollierte Druckverbände (S. 18–19).</li>
  <li><b>Epithelgewebe:</b> frisch rosa, wächst vom Rand ein; frisch epithelisierte Wunden mit Schutzverband (Folien, transparente Hydrokolloide) abdecken (S. 19).</li>
  <li><b>Fettgewebe:</b> gelb-orange, weiß oder grau, ölig, kugelig; schlecht durchblutet; abgestorben gräulich, bröselig. <b>Muskel:</b> vital rot, abgestorben fahlgrau bis schwarz. <b>Knochen:</b> gelb-weiß bis grau, hart. <b>Sehnen:</b> gelblich, glatt, glänzend, längs gefasert; geschädigt bräunlich, abgefasert; Taschen entlang des Verlaufs (S. 19–20).</li>
</ul>
<h4>Exsudat (S. 20–22)</h4>
<ul>
  <li><b>Funktion:</b> verhindert Austrocknen, erleichtert das Einwandern von Fibroblasten, ermöglicht Zellbewegung und -teilung, liefert Nährstoffe, transportiert Immun- und Wachstumsfaktoren, unterstützt Autolyse.</li>
  <li>Zu viel → Mazeration, Hautirritation, toxisches Kontaktekzem. Physiologisch nimmt die Menge ab; plötzlicher Anstieg bei fortgeschrittener Heilung → beginnende Infektion.</li>
  <li>Erfassen: Quantität (Verbandwechselhäufigkeit, durchnässte Kompressen) und Qualität (Farbe, Viskosität); Mengenkategorien im Team vereinbaren.</li>
</ul>
<div class="tabelle"><table>
  <caption>Exsudatfarbe und Viskosität (S. 21–22)</caption>
  <thead><tr><th>Befund</th><th>mögliches Anzeichen für</th></tr></thead>
  <tbody>
    <tr><td style="white-space:normal">transparent, klar, bernsteinfarben</td><td>normales seröses Exsudat; Harnwegs- oder Lymphfistel</td></tr>
    <tr><td style="white-space:normal">trübe, milchig, cremefarben, eitrig</td><td>Fibrin; eitriges Exsudat bei Infektion; Entzündung</td></tr>
    <tr><td style="white-space:normal">rot, rosa, blutig</td><td>Kapillarverletzung (z. B. unsachgemäßes Entfernen der Auflage)</td></tr>
    <tr><td style="white-space:normal">gelb, braun</td><td>Darm-/Harnwegsfistel; Rückstände (z. B. Hydrokolloid), Schorf</td></tr>
    <tr><td style="white-space:normal">grün</td><td>Pseudomonas aeruginosa</td></tr>
    <tr><td style="white-space:normal">grau, blau</td><td>Rückstände silberhaltiger Wundauflagen</td></tr>
    <tr><td style="white-space:normal">zäh, hochviskös</td><td>hoher Eiweißanteil (Entzündung), Verbandrückstände, Nekrose in Autolyse, Darmfistel</td></tr>
    <tr><td style="white-space:normal">dünnflüssig, niedrigviskös</td><td>geringer Eiweißanteil (Mangelernährung, venöse oder kardiale Erkrankung), Lymph-, Gelenk-, Harnwegsfistel</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Wundgeruch (Foetor) (S. 22):</b> nicht objektiv erfassbar → nur ja/nein; nicht immer Infektion (auch sich reinigende Wunden riechen); belastet die Lebensqualität stark.</li>
  <li><b>Wundrand (S. 22–24):</b> Grenze zur intakten Haut; mit fortschreitender Heilung glatt und rosa. Zur Epithelisierung Verkrustungen entfernen. Schutz: alkoholfreie transparente Hautschutzfilme (Hydropolymere, Silikone), Barrierecremes; trocknen lassen, keine zusätzlichen fetthaltigen Produkte.</li>
</ul>
<div class="tabelle"><table>
  <caption>Wundrandmerkmale (S. 23)</caption>
  <thead><tr><th>Merkmal</th><th>Beschreibung</th><th>Merkmal</th><th>Beschreibung</th></tr></thead>
  <tbody>
    <tr><td>avital</td><td>keine Heilungstendenz</td><td>livide</td><td>blassbläulich, fahl</td></tr>
    <tr><td>borkig</td><td>Borken aus eingetrocknetem Exsudat</td><td>mazeriert</td><td>aufgeweicht</td></tr>
    <tr><td>eingerollt</td><td>nach innen gedreht, kein Kontakt zum Wundgrund</td><td>nekrotisch</td><td>livide bis schwarz, Gewebeuntergang</td></tr>
    <tr><td>gerötet</td><td>Mehrdurchblutung, z. B. Infektion</td><td>ödematös</td><td>geschwollen, verdickt</td></tr>
    <tr><td>glatt</td><td>ohne Erhabenheit in die Wunde</td><td>schuppig</td><td>trockene Schuppen</td></tr>
    <tr><td>hyperkeratotisch</td><td>Verhornung durch Druck/Reibung, oft am Fuß</td><td>vital</td><td>gesund, beginnende Epithelisierung</td></tr>
    <tr><td>unterminiert</td><td>bis 1 cm unterhöhlt; ab 1 cm = Wundtasche; Verbindung zu anderer Wunde = Untertunnelung</td><td>zerklüftet</td><td>ohne klare Abgrenzung</td></tr>
  </tbody>
</table></div>
<p class="warnung">Warum keine Zinkpaste als Wundrandschutz? (S. 24) Verhindert die Beurteilung, lässt sich schwer entfernen (Öle stören dann das Kleben), verdeckt Rötungen als Infektionszeichen, stört in der Wunde die Heilung, mechanische Belastung beim Entfernen, trocknet durch Puderanteil aus → Risse, Eintrittspforte für Keime.</p>
<ul>
  <li><b>Wundumgebung (S. 24–25):</b> angrenzende Haut; z. B. unauffällig, trocken, rissig, atroph, livide. Ausschlag, Juckreiz, Ödem unter dem Kleberand → Allergie; gerötet, warm, schmerzhaft → Infektion. MASD = Moisture Associated Skin Damage (Feuchtigkeit); MARSI = Medical Adhesive-Related Skin Injury (Ablösen von Auflagen).</li>
  <li><b>Entzündung vs. Infektion (S. 25–26):</b> Entzündung = Abwehrreaktion auf chemische/physikalische Reize, Mikroorganismen oder Zellzerfall; in der Wunde durch die Gewebeschädigung selbst ausgelöst, gehört zur Exsudationsphase. Infektion = aktives/passives Eindringen, Anheften und Vermehren von Erregern; in jeder Phase möglich: lokal, sich ausbreitend, systemisch.</li>
  <li><b>Infektionszeichen nach EWMA (S. 26–27)</b> unterscheiden sich je Wundart. Besonderheiten: bei pAVK sind Rötung und Überwärmung kaum vorhanden – Schmerz ist das aussagekräftigste Infektionszeichen; bei diabetischer Neuropathie fehlt der Schmerz, Fieber höchstens subfebril. Diabetischer Fuß u. a. „probes to bone“, Fluktuation, Ulcusbasis von rosa nach gelb/grau; arteriell u. a. trockene Nekrose wird nass.</li>
  <li><b>Infektion in Wundtaschen (S. 28):</b> geröteter, verhärteter, ödematöser, schmerzhafter Rand; starke, dickflüssige, eitrige Exsudation; Geruch; oft Auslöser systemischer Infektion.</li>
  <li><b>Wundschmerz (S. 28):</b> Quantität und Qualität bei jedem Verbandwechsel erfassen; Selbsteinschätzung mit VRS, NRS, GRS (Gesichter), Fremdeinschätzung mit BESD, BISAD; schmerzauslösende und lindernde Situationen sowie Qualität (pochend, brennend, stechend) dokumentieren; Expertenstandards Schmerz beachten.</li>
</ul>
<p class="merke"><b>Wundbeurteilung mit allen Sinnen (S. 29):</b> Hören (Anamnese, Schmerzlaute), Sehen (Haut, Gangbild, Kleidung, Schuhe, Hilfsmittel), Tasten (Verhärtung, Ödem, Temperatur, Faszienlücken), Riechen (Geruch ja/nein). Alte Farbmodelle (schwarz = Nekrose, gelb = Fibrin) werden nicht mehr verwendet.</p>
<p><b>Übungen (Lösung S. 30):</b> 1 – Dekubitus Kategorie IV, Exsudationsphase, Fettnekrose, Tasche spülen und austamponieren; 2 – Ulcus cruris arteriosum mit trockener, demarkierter Nekrose in der Exsudationsphase → Nekrose entfernen.</p>
`
});
