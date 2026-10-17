/*
 * Thema: Wundbehandlung und Verbandstoffe
 * Quelle: murimed-Kursheft Wundbehandlung und Verbandstoffe, Modul II
 * (Seitenangaben beziehen sich auf die gedruckten Heftseiten).
 * Inhalte übernommen aus "Zusammenfassung_Wundbehandlung_Verbandstoffe.pdf" und
 * "Lernkarten_Wundbehandlung_Verbandstoffe.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "verbandstoffe",
  titel: "Wundbehandlung und Verbandstoffe",
  kurz: "Verbandstoffe",
  quelle: "murimed-Kursheft Wundbehandlung und Verbandstoffe, Modul II",
  hinweis:
    "Quelle ist ausschließlich das Kursheft; Seitenzahlen in Klammern (gedruckte Heftseiten). ★ = im Heft handschriftlich als „Prüfung“ bzw. „Prüfungsfrage“ markiert. Handschriftliche Notizen sind gekennzeichnet und nicht geprüft; Produktnamen darin sind Beispiele, keine Empfehlung des Hefts. Die zitierte Primärquelle (v. a. Vasel-Biergans 2018) wurde nicht separat geprüft.",

  karten: [
    { k: "Grundlagen", f: "Wie definiert das SGB V Verbandmittel?",
      a: "§ 31 Abs. 1a SGB V: „Gegenstände einschließlich Fixiermaterial, deren Hauptwirkung darin besteht, oberflächengeschädigte Körperteile zu bedecken, Körperflüssigkeiten aufzusaugen oder beides zu erfüllen.“", s: "S. 3" },
    { k: "Grundlagen", f: "Welche ergänzenden Wirkungen können Verbandmittel haben?",
      a: "Wunde feucht halten, Wunde reinigen, Geruch binden, antibakterielle oder Metallbeschichtung. Auch Gegenstände zum Stabilisieren, Immobilisieren, Komprimieren gelten als Verbandstoffe.", s: "S. 3" },
    { k: "Grundlagen", f: "Warum sind Verbandmittel Medizinprodukte?",
      a: "CE-zertifiziert, unterliegen dem MPG; Hauptwirkung weder pharmakologisch, immunologisch noch metabolisch. Klasse nach „Verletzbarkeit des Körpers“ (Zweckbestimmung, Ort, Dauer) → vier Risikoklassen.", s: "S. 3" },
    { k: "Risikoklassen", f: "Risikoklasse I und IIa? ★",
      a: "I (niedrig): oberflächliche, primär heilende Wunden – Mull-, Saugkompressen, Fixiermittel, elastische Binden, semipermeable Folien.\nIIa (mittel): beeinflussen Mikroklima – Alginat-, Hydrogel-, Schaumstoff-Kompressen, Hydrokolloide.", s: "S. 4" },
    { k: "Risikoklassen", f: "Risikoklasse IIb und III? ★",
      a: "IIb (erhöht): Leder-/Unterhaut, sekundäre Heilung – Alginat-/Schaumstoff-Tamponaden, Hydrogel aus der Tube.\nIII (hoch): infektgefährdet/infiziert, mit Arzneimitteln oder tierischen Bestandteilen – PVP-Iod-, PHMB-, Kollagen-, Gelatine-Auflagen.", s: "S. 4" },
    { k: "Einteilung", f: "Konventionelle vs. moderne Wundauflagen?",
      a: "Konventionell (passiv, handschr. „klassisch“): decken ab und schützen.\nModern: halten das feuchte Wundmilieu, enthalten u. a. Eiweiß-/Zuckermoleküle und unterstützen die Heilungsphasen.", s: "S. 4", h: true },
    { k: "Einteilung", f: "Primär- vs. Sekundärverband?",
      a: "Primärverband: direkt auf Haut bzw. Wundfläche (handschr.: unmittelbar auf der Wunde).\nSekundärverband: deckt die Wundauflage ab oder fixiert sie (handschr.: Pflaster etc.).", s: "S. 5", h: true },
    { k: "Anforderungen", f: "Funktionelle Anforderungen an Wundauflagen? ★",
      a: "Schutz vor Fremdkörpern, Infektion, Druck, Reibung, Wärmeverlust, Austrocknung · Gasaustausch · Unterstützung der autolytischen Wundreinigung · ausreichende Saugkapazität (Blut, Wundflüssigkeit, Gewebetrümmer, Bakterien).", s: "S. 5" },
    { k: "Anforderungen", f: "Anforderungen an die Verträglichkeit? ★",
      a: "Keine Fasern/Partikel in der Wunde · keine Schmerzen · kein Anhaften am Wundgrund · atraumatischer Verbandwechsel · gut verträglich, gering allergen · Wundruhe · Akzeptanz bei Betroffenen und Anwendern.", s: "S. 5" },
    { k: "Anforderungen", f: "Welche Kriterien betreffen die Wirtschaftlichkeit?",
      a: "Verfügbarkeit unterschiedlicher Packungsgrößen, einfache und sichere Handhabung, Wundruhe durch seltene Verbandwechsel (längere Intervalle meist teurer, verkürzen aber die Behandlung).", s: "S. 6" },
    { k: "Konventionell", f: "Was zählt zu den konventionellen Wundauflagen? ★",
      a: "Mull-, Vliesstoffkompressen, kombinierte Saugkompressen, Wundschnellverbände, Wundnahtstreifen, Fixiermittel, imprägnierte und hydroaktiv imprägnierte Wundgazen, Wundkontaktverbände mit Silikon. Vor allem für primär heilende Wunden.", s: "S. 6" },
    { k: "Konventionell", f: "Vor- und Nachteile von Mullkompressen?",
      a: "Pro: standardisiert, reinigend beim Auswischen, hohe Saugkraft.\nContra: Mazeration, häufige Wechsel, Infektionsgefahr bei Durchnässung, Austrocknung, Verkleben, Fasern in der Wunde, wenig Polster, Fixierung nötig.", s: "S. 7" },
    { k: "Konventionell", f: "Kontraindikation und Anwendung von Mullkompressen?",
      a: "KI: Primärverband bei sekundär heilenden, granulierenden, epithelisierenden oder schwach exsudierenden Wunden. Anwendung: tiefe Wunden locker austamponieren; oberflächlich mind. 2 × 8-lagig; VW bei Durchnässung.", s: "S. 7" },
    { k: "Konventionell", f: "Kombinierte Saugkompressen – Aufbau und Anwendung?",
      a: "Saugkern (Zellstoff/Watte) in Tissue, außen glattes Vlies; große Saugkraft, gute Polsterung. Postoperativ, sehr stark nässend, Sekundärverband. Nicht bei mäßig bis schwach exsudierenden Wunden. Feuchtigkeitsabweisende Seite nach außen.", s: "S. 8–9" },
    { k: "Konventionell", f: "Wundschnellverbände – wofür, wofür nicht?",
      a: "Erstversorgung kleiner Schnitt-/Schürfwunden; schnell, leichte Kompression zur Blutstillung; auf trockene, fettfreie Haut. Nicht für tieferliegende, sekundär heilende Wunden.", s: "S. 9–10" },
    { k: "Konventionell", f: "Wundnahtstreifen – Vorteile und Anwendung?",
      a: "Atraumatischer Verschluss ohne Lokalanästhesie, weniger Infektionen, kaum Narben. Gesicht, Platzwunden, Transplantate, Naht-/Narbenentlastung. Mit dem ersten Streifen in der Mitte beginnen; behutsam entfernen.", s: "S. 10–11" },
    { k: "Konventionell", f: "Was ist bei imprägnierten Wundgazen zu beachten?",
      a: "Vaseline/Paraffin verhindert Verkleben, preiswert. Nie doppelt oder dreifach gefaltet auflegen (Exsudatstau, kein O₂, Infektionsgefahr); Saugkompresse und Fixierung nötig; bei nachlassendem Exsudat mind. täglicher Wechsel.", s: "S. 11–12" },
    { k: "Konventionell", f: "Hydroaktiv imprägnierte Wundgazen?",
      a: "Enthalten gelbildende Partikel → feuchtes Milieu, kein Ankleben; Erschöpfung erkennbar. Oberflächlich, mäßig bis stark nässend (Abschürfung, Verbrennung, Ulcus cruris). VW spätestens nach 4 Tagen.", s: "S. 12" },
    { k: "Konventionell", f: "Wundkontaktverbände mit Silikon?",
      a: "Haften schonend auf trockener Haut, nicht auf Wunde; atraumatisch, Wundrandschutz, Wundruhe. Nicht saugend. Für Verbrennungen, Transplantate, postoperativ, empfindliche Haut. KI: Silikonüberempfindlichkeit.", s: "S. 13" },
    { k: "Modern", f: "Welche Gruppen moderner Wundauflagen gibt es?",
      a: "Hydroaktive, interaktive sowie antibakterielle und geruchsbindende Wundauflagen. Hydroaktiv: feucht-warmes Milieu, kein Schorf, Granulation und Zellmigration ungehindert.", s: "S. 14" },
    { k: "Hydroaktiv", f: "Alginate – Indikationen?",
      a: "Aus Seealgen; werden mit Exsudat zu Gel, nehmen viel Flüssigkeit, Bakterien, Zelltrümmer auf. Mäßig–stark nässend, tiefe Wunden/Höhlen, infiziert, blutend (blutstillend), Exsudationsphase, Verbrennung 2°.", s: "S. 14" },
    { k: "Hydroaktiv", f: "Alginate – Kontraindikationen und Anwendung?",
      a: "Nicht auf trockene, nekrotische Wunden oder Verbrennung 3° (Austrocknung). Nicht über den Wundrand – passgenau zuschneiden (Mazeration); tiefe Wunden austamponieren; VW bei Durchfeuchtung, 1–7 Tage.", s: "S. 14–15" },
    { k: "Hydroaktiv", f: "Aquafilament-Verbände?",
      a: "Reißfest, silberhaltig, hydrophile Fasern; vertikale Aufnahme verhindert Mazeration; für exsudierende und trockene Wunden (anfeuchten); alle Phasen; darf Wundrand überlappen; VW täglich (Exsudation), dann spätestens nach 3 Tagen.", s: "S. 15–16" },
    { k: "Hydroaktiv", f: "Hydrophile Faserverbände?",
      a: "Trocken aufgelegt, saugen und gelieren nur im feuchten Wundbereich → Wundrand bleibt trocken; unter Kompression; ausreichend Exsudat nötig; VW spätestens nach 7 Tagen. Handschr.: Hydrofaser besser als Alginat.", s: "S. 16–17", h: true },
    { k: "Hydroaktiv", f: "Hydrogel-Kompressen?",
      a: "Geben Feuchtigkeit ab, weichen Beläge auf; schwach–mäßig exsudierend, Granulation/Epithelisierung; kühlend. Nicht bei stark nässenden oder blutenden Wunden. Erschöpfung = blasenförmige Verformung; VW spätestens nach 7 Tagen.", s: "S. 17–18" },
    { k: "Hydroaktiv", f: "Hydrogele aus der Tube?",
      a: "Sehr hoher Wassergehalt; feucht halten, Beläge aufweichen, Wundfüller in Höhlen. Mit sterilem Spatel; angebrochene Tuben verwerfen; nicht bei stark nässend/blutend; VW alle 2–3 Tage (Beläge: täglich).", s: "S. 19" },
    { k: "Hydroaktiv", f: "Hydrokolloide – Wirkung und Kontraindikationen?",
      a: "Selbstklebend, quellen zu Gel; leicht–stark exsudierend, kein Sekundärverband, Duschen möglich. Nicht bei klinisch infizierten Wunden, freiliegenden Muskeln/Sehnen/Knochen, ischämischen Ulzera (wenig O₂). Häufig Hautirritationen.", s: "S. 19–20" },
    { k: "Hydroaktiv", f: "Wann wird ein Hydrokolloid gewechselt?",
      a: "Wenn sich die Gelblase über die gesamte Wunde erstreckt oder Exsudat ausläuft; 1–7 Tage. Wundumgebung trocken und fettfrei, faltenfrei andrücken. Handschr.: wird kaum noch verwendet; kein Gasaustausch.", s: "S. 5, 19–20", h: true },
    { k: "Hydroaktiv", f: "Kombinierte Wundverbände?",
      a: "Primär- und Sekundärverband in einem; sehr hohe Aufnahme, Wundrandschutz, unter Kompression. Mäßig–stark nässend; infiziert kritisch; nicht bei trockenen Nekrosen; bis 7 Tage.", s: "S. 20–21" },
    { k: "Hydroaktiv", f: "Schaumstoffkompressen vs. Hydropolymere?",
      a: "Weichschaum: nimmt auf ohne Form zu ändern.\nHydropolymer: quillt der Wunde entgegen. Mäßig–stark exsudierend, atraumatisch, polsternd; geben keine Flüssigkeit ab; ungeeignet für trockene, nekrotische Wunden.", s: "S. 21" },
    { k: "Hydroaktiv", f: "Offenporige Schaumstoffkompressen?",
      a: "Wundkonditionierung: haften in der Granulation an, VW reißt auf → Blutung → gut durchblutetes Granulationsgewebe (z. B. vor Hauttransplantation, offene Frakturen). Schmerzhaft; Wundrand nicht überlappen.", s: "S. 22" },
    { k: "Hydroaktiv", f: "Semipermeable Wundfolien?",
      a: "Transparent; Bakterien/Nässe bleiben draußen, O₂-/Wasserdampfaustausch; Beobachtung, Duschen möglich. KI: nässende und klinisch infizierte Wunden. Nicht gedehnt anbringen; Haare kürzen; VW spätestens nach 7 Tagen.", s: "S. 23" },
    { k: "Hydroaktiv", f: "Wundauflagen mit Superabsorber?",
      a: "Sehr große Saugkapazität, Gel schließt Keime und Zelltrümmer ein, Wundrandschutz, Geruch ↓; mäßig–stark exsudierend, exulzerierende Karzinome. Nicht bei schwach exsudierenden oder trockenen Wunden (Austrocknung).", s: "S. 24" },
    { k: "Interaktiv", f: "Was sind interaktive Wundauflagen?",
      a: "Halten feucht und warm, mit körpereigenen Substanzen identisch/verwandt: Kollagen, Gelatine, Hyaluronsäure. Nutzen weitgehend ungeklärt, sehr teuer → kritisch hinterfragen.", s: "S. 24–25" },
    { k: "Interaktiv", f: "Kollagen- und Gelatine-Wundauflagen?",
      a: "Hohe Saugkapazität, vollständige Resorption (bleiben liegen, nur Sekundärverband wechseln).\nGelatine: sehr schnelle Blutstillung. Nicht bei infizierten Wunden und trockenen Nekrosen; schwach exsudierend mit NaCl anfeuchten.", s: "S. 25–26" },
    { k: "Interaktiv", f: "Hyaluronsäurehaltige Wundauflagen?",
      a: "Binden Wasser, Gelbildung, wirken in der Initialphase; Granulat, Auflage, Film. Nachteil: Sekundärverband. Chronische, sekundär heilende Wunden. Laut Heft bei infizierten Wunden und mit Antiseptika kontraindiziert (Folgesatz widersprüchlich).", s: "S. 26" },
    { k: "Antibakteriell", f: "Welche antibakteriellen/geruchsbindenden Auflagen gibt es?",
      a: "Aktivkohlekompressen, silberhaltige Wundauflagen, Wundauflagen mit Honig, hydrophobe Wundauflagen, antiseptikahaltige Wundauflagen. Für infizierte bzw. sehr geruchsintensive Wunden.", s: "S. 27" },
    { k: "Antibakteriell", f: "Aktivkohlekompressen?",
      a: "Trocken Geruchsfilter, durchfeuchtet Bindung von Eiweiß/Bakterien; mit Silber Keimreduktion. Klinisch infizierte, geruchsintensive Wunden. Dürfen nicht zugeschnitten werden; Fixierung nötig; Kohle deckt den saugenden Primärverband ab.", s: "S. 27" },
    { k: "Antibakteriell", f: "Silberhaltige Wundauflagen?",
      a: "Wirken nur mit Flüssigkeit; kritisch kolonisiert/lokal infiziert; enger Wundkontakt; Auswahl nach Wundverhältnissen, nicht Silbergehalt. Wirksamkeit ungeklärt, toxisch möglich, teuer → so lange wie nötig, so kurz wie möglich (handschr.: max. 14 Tage).", s: "S. 28", h: true },
    { k: "Antibakteriell", f: "Wundauflagen mit Honig – Vor- und Nachteile?",
      a: "Pro: angenehmer Geruch, hohe Akzeptanz; Zucker zieht Flüssigkeit, Ödeme ↓, reinigt.\nContra: schwankende Eigenschaften, Kontamination (Pestizide, Clostridien, Antibiotika), Schmerz durch osmotischen Zug, Allergien, Sekundärverband.", s: "S. 28" },
    { k: "Antibakteriell", f: "Hydrophobe Wundauflagen?",
      a: "Rein physikalische Bindung von Keimen durch hydrophobe Anziehung → keine Allergie, keine Resistenz. Kontaminierte/infizierte postoperative, traumatische Wunden, Fisteln, Abszesse, Dehiszenzen. Nicht mit fetthaltigen Materialien kombinieren.", s: "S. 29" },
    { k: "Antibakteriell", f: "Antiseptikahaltige Wundauflagen?",
      a: "Kompressen und Hydrogele; Wirkstoff unterstützt Reinigung und reduziert Bakterien im Verband; Gele konserviert länger haltbar. Nachteile: begrenzte Aufnahme, Kontraindikationen je Wirkstoff, Sekundärverband.", s: "S. 29" },
    { k: "Sonstige", f: "Sprühpflaster – Indikation und Kontraindikationen?",
      a: "Filmbildner, elastisch, wasserfest, atmungsaktiv; kleine oberflächliche Wunden nach Blutstillung. KI: blutend/nässend, infiziert, tief/großflächig, Verbrennungen, Augen, Mund, Schleimhäute.", s: "S. 30" },
    { k: "Sonstige", f: "Was zählt zu den lokalen Wundtherapeutika?",
      a: "Unkonservierte und konservierte Wundspüllösungen, Wundantiseptika, Wundsprays, Wund- und Heilsalben, Wundrandschutz/Hautschutz, lokale Hautkleber. Halten feuchtes Milieu; heute eher untergeordnet; phasengerecht.", s: "S. 30" },
    { k: "Vergleich", f: "Welche Auflagen dürfen nicht über den Wundrand?",
      a: "Alginate und offenporige Schaumstoffkompressen – passgenau zuschneiden. Dürfen überlappen: Aquafilament-Verbände; hydrophile Faser geliert nur im Feuchten (Wundrand bleibt trocken).", s: "S. 14–16, 22" },
    { k: "Vergleich", f: "Welche Auflagen nicht bei trockenen Wunden/Nekrosen?",
      a: "Alginate, Schaumstoffkompressen, Superabsorber, kombinierte Wundverbände (trockene Nekrosen), Kollagen/Gelatine (trockene Nekrosen). Für trockene Wunden: Hydrogel (Tube/Kompresse), angefeuchtete Aquafilament-Verbände.", s: "S. 14–25" },
    { k: "Vergleich", f: "Welche Auflagen nicht bei stark nässenden/blutenden Wunden?",
      a: "Hydrogel-Kompressen und Hydrogele aus der Tube, semipermeable Folien (nässend), Sprühpflaster. Bei Blutung geeignet: Alginate, Gelatine (blutstillend).", s: "S. 14–30" },
    { k: "Vergleich", f: "Maximale Wechselintervalle laut Heft?",
      a: "Hydroaktive Gaze spätestens 4 Tage · Aquafilament nach Exsudationsphase spätestens 3 Tage · Hydrogel-Tube alle 2–3 Tage · Faserverband, Hydrogel-Kompresse, Folie, kombinierter Verband spätestens 7 Tage · Alginat, Hydrokolloid 1–7 Tage.", s: "S. 12–24" },
    { k: "Kernbotschaft", f: "Worauf kommt es bei der Produktwahl an?",
      a: "Nicht das Neueste oder Teuerste, sondern zu erkennen, welches Produkt wann, wofür und wie lange genutzt werden kann – Indikation, Kontraindikation, Anwendungshinweise, Wechselintervall.", s: "S. 2, 31" }
  ],

  quiz: [
    { f: "Welche Hauptwirkung haben Verbandmittel nach § 31 Abs. 1a SGB V?",
      o: ["Oberflächengeschädigte Körperteile bedecken und/oder Körperflüssigkeiten aufsaugen", "Keime in der Wunde pharmakologisch abtöten", "Die Wundheilung durch Arzneistoffe beschleunigen", "Die Immunabwehr in der Wunde stimulieren"],
      e: "Verbandmittel: Gegenstände einschließlich Fixiermaterial, deren Hauptwirkung darin besteht, oberflächengeschädigte Körperteile zu bedecken, Körperflüssigkeiten aufzusaugen oder beides zu erfüllen.", s: "S. 3" },
    { f: "Wie ist die bestimmungsgemäße Hauptwirkung von Verbandmitteln als Medizinprodukte (MPG)?",
      o: ["Weder pharmakologisch noch immunologisch noch metabolisch", "Pharmakologisch", "Immunologisch", "Metabolisch"],
      e: "Verbandmittel sind CE-zertifizierte Medizinprodukte; die Hauptwirkung ist weder pharmakologisch noch immunologisch noch metabolisch (§ 3 MPG).", s: "S. 3" },
    { f: "Wonach richtet sich die Risikoklasse eines Verbandmittels?",
      o: ["Nach der „Verletzbarkeit des Körpers“ (Zweckbestimmung, Anwendungsort, -dauer)", "Nach dem Preis des Produkts", "Nach der Packungsgröße", "Nach dem Hersteller"],
      e: "Die Klasse richtet sich nach der „Verletzbarkeit des Körpers“ → vier Risikoklassen (I, IIa, IIb, III).", s: "S. 3" },
    { f: "Zu welcher Risikoklasse gehören semipermeable Folien und Mullkompressen?",
      o: ["Klasse I (niedrig)", "Klasse IIa (mittel)", "Klasse IIb (erhöht)", "Klasse III (hoch)"],
      e: "Klasse I: oberflächliche, primär heilende Wunden – Mull-, Saugkompressen, Fixiermittel, elastische Binden, semipermeable Folien.", s: "S. 4" },
    { f: "Welche Produkte nennt das Heft als Beispiele für Risikoklasse IIa?",
      o: ["Alginat-Kompressen", "Hydrokolloide", "PVP-iodhaltige Gazen", "Elastische Binden"], r: 2,
      e: "IIa (mittel) beeinflusst Umgebung und Mikroklima oberflächlicher Wunden: Alginat-, Hydrogel-, Schaumstoff-Kompressen, Hydrokolloide. PVP-Iod-Gazen = Klasse III, elastische Binden = Klasse I.", s: "S. 4" },
    { f: "Welcher Risikoklasse ist Hydrogel aus der Tube zugeordnet?",
      o: ["Klasse IIb", "Klasse I", "Klasse IIa", "Klasse III"],
      e: "IIb (erhöht): Wunden in Leder- oder Unterhaut mit sekundärer Heilung – Alginat-, Schaumstoff-Tamponaden, Hydrogel aus der Tube, Mullbinde zur Tamponade.", s: "S. 4" },
    { f: "Was kennzeichnet Risikoklasse III?",
      o: ["Produkte mit Arzneimitteln und/oder tierischen Bestandteilen für infektionsgefährdete/infizierte Wunden", "Produkte für oberflächliche, primär heilende Wunden", "Reine Fixiermittel und Binden", "Produkte, die nur das Mikroklima oberflächlicher Wunden beeinflussen"],
      e: "III (hoch): sekundär heilende Wunden bis in die Unterhaut, infektionsgefährdet/infiziert; enthalten Arzneimittel und/oder tierische Bestandteile (z. B. PVP-Iod-, PHMB-, Kollagen-, Gelatine-Auflagen).", s: "S. 4" },
    { f: "Was unterscheidet moderne von konventionellen Wundauflagen?",
      o: ["Moderne Auflagen halten das feuchte Wundmilieu aufrecht", "Moderne Auflagen decken nur ab und schützen vor äußeren Einwirkungen", "Konventionelle Auflagen unterstützen gezielt die Heilungsphasen", "Es gibt laut Heft keinen Unterschied"],
      e: "Konventionell (passiv) = abdecken und schützen. Modern = feuchtes Wundmilieu, u. a. aus Eiweiß- oder Zuckermolekülen, unterstützen die Heilungsphasen.", s: "S. 4" },
    { f: "Was ist ein Sekundärverband?",
      o: ["Ein Verband, der die Wundauflage abdeckt oder fixiert", "Die Auflage, die direkt auf der Wundfläche liegt", "Der zweite Verbandwechsel nach einer OP", "Ein Verband nur für sekundär heilende Wunden"],
      e: "Primärverband = direkt auf Haut/Wundfläche; Sekundärverband = deckt ab oder fixiert.", s: "S. 5" },
    { f: "Welche Punkte zählt das Heft zu den funktionellen Anforderungen an Wundauflagen? ★",
      o: ["Gasaustausch", "Unterstützung der autolytischen Wundreinigung", "Möglichst häufige Verbandwechsel", "Abgabe von Fasern in die Wunde"], r: 2,
      e: "Funktion: Schutz vor Fremdkörpern, Infektion, Druck, Reibung, Wärmeverlust, Austrocknung · Gasaustausch · autolytische Wundreinigung · ausreichende Saugkapazität. Keine Fasern in der Wunde und Wundruhe sind gefordert.", s: "S. 5" },
    { f: "Welche Anforderung ordnet das Heft der Verträglichkeit zu? ★",
      o: ["Kein Anhaften am Wundgrund", "Verfügbarkeit verschiedener Packungsgrößen", "Ausreichende Saugkapazität", "Einfache, sichere Handhabung"],
      e: "Verträglichkeit: keine Fasern/Partikel, keine Schmerzen, kein Anhaften am Wundgrund, atraumatischer VW, gering allergen, Wundruhe, Akzeptanz. Packungsgrößen/Handhabung = Wirtschaftlichkeit, Saugkapazität = Funktion.", s: "S. 5–6" },
    { f: "Welche Wundauflage zählt zu den konventionellen Wundauflagen? ★",
      o: ["Wundnahtstreifen", "Alginate", "Hydrokolloide", "Superabsorber"],
      e: "Konventionell: Mull-, Vliesstoffkompressen, kombinierte Saugkompressen, Wundschnellverbände, Wundnahtstreifen, Fixiermittel, imprägnierte und hydroaktiv imprägnierte Wundgazen, Wundkontaktverbände mit Silikon.", s: "S. 6" },
    { f: "Für welche Wunden eignen sich konventionelle Wundauflagen vor allem? ★",
      o: ["Primär heilende Wunden", "Tiefe, sekundär heilende Wunden", "Klinisch infizierte, geruchsintensive Wunden", "Trockene Nekrosen"],
      e: "Konventionelle Wundauflagen eignen sich v. a. für primär heilende Wunden.", s: "S. 6" },
    { f: "Wie werden Mullkompressen bei oberflächlichen Wunden angewendet?",
      o: ["Mindestens 2 × 8-lagig", "Einlagig", "Doppelt gefaltet, maximal 4-lagig", "Nur als Tamponade"],
      e: "Tiefe Wunden locker austamponieren; oberflächlich mind. 2 × 8-lagig; VW bei Durchnässung.", s: "S. 7" },
    { f: "Wann sind Mullkompressen als Primärverband kontraindiziert?",
      o: ["Bei sekundär heilenden, granulierenden, epithelisierenden oder schwach exsudierenden Wunden", "Bei frischen postoperativen Wunden", "Zur Umgebungsreinigung", "Als Arzneimittelträger"],
      e: "KI: Primärverband bei sekundär heilenden, granulierenden, epithelisierenden, schwach exsudierenden Wunden. Anwendung u. a. Primärversorgung akuter Wunden, Umgebungsreinigung, Arzneimittelträger.", s: "S. 7" },
    { f: "Wie werden kombinierte Saugkompressen aufgelegt?",
      o: ["Feuchtigkeitsabweisende Seite nach außen", "Feuchtigkeitsabweisende Seite zur Wunde", "Mehrfach gefaltet", "Zugeschnitten auf Wundgröße mit Saugkern nach außen"],
      e: "Kombinierte Saugkompressen: postoperativ, sehr stark nässende Wunden, Sekundärverband; feuchtigkeitsabweisende Seite nach außen; nicht bei mäßig bis schwach exsudierenden Wunden.", s: "S. 8–9" },
    { f: "Wie beginnt man beim Anlegen von Wundnahtstreifen?",
      o: ["Mit dem ersten Streifen in der Mitte der Wunde", "Am oberen Wundende", "Am unteren Wundende", "Mit dem längsten Streifen quer über die ganze Wunde"],
      e: "Wundnahtstreifen: atraumatischer Verschluss ohne Lokalanästhesie; mit dem ersten Streifen in der Mitte beginnen, behutsam entfernen.", s: "S. 10–11" },
    { f: "Warum dürfen imprägnierte Wundgazen nie doppelt oder dreifach gefaltet aufgelegt werden?",
      o: ["Exsudatstau, kein O₂ und Infektionsgefahr", "Sie verlieren dadurch ihre Vaseline-Imprägnierung", "Sie sind dann nicht mehr steril", "Das ist laut Heft erlaubt"],
      e: "Imprägnierte Gazen (Vaseline/Paraffin): nie doppelt/dreifach falten (Exsudatstau, kein O₂, Infektion); Saugkompresse + Fixierung nötig; mind. täglicher VW.", s: "S. 11–12" },
    { f: "Wann werden hydroaktiv imprägnierte Wundgazen spätestens gewechselt?",
      o: ["Nach 4 Tagen", "Nach 7 Tagen", "Nach 14 Tagen", "Mehrmals täglich"],
      e: "Hydroaktiv imprägnierte Gazen: oberflächlich, mäßig bis stark nässend; VW spätestens nach 4 Tagen.", s: "S. 12" },
    { f: "Was ist die Kontraindikation für Wundkontaktverbände mit Silikon?",
      o: ["Silikonüberempfindlichkeit", "Empfindliche Haut", "Verbrennungen", "Hauttransplantate"],
      e: "Silikon-Wundkontaktverbände: sehr schonend, atraumatisch, nicht saugend; Einsatz u. a. bei Verbrennungen, Transplantaten, empfindlicher Haut. KI: Silikonüberempfindlichkeit.", s: "S. 13" },
    { f: "Welche drei Gruppen moderner Wundauflagen unterscheidet das Heft?",
      o: ["Hydroaktive, interaktive, antibakterielle/geruchsbindende", "Passive, aktive, sterile", "Primäre, sekundäre, tertiäre", "Klasse I, IIa, IIb"],
      e: "Drei Gruppen: hydroaktive, interaktive, antibakterielle/geruchsbindende Wundauflagen. Hydroaktiv = feucht-warmes Milieu über den gesamten Therapieverlauf.", s: "S. 14" },
    { f: "Wofür sind Alginate NICHT geeignet?",
      o: ["Trockene, nekrotische Wunden", "Blutende Wunden", "Tiefe Wunden und Wundhöhlen", "Mäßig bis stark nässende Wunden"],
      e: "Alginate: mäßig–stark nässend, tief, Höhlen, infiziert, blutend (blutstillend), Exsudationsphase, Verbrennung 2°. Nicht auf trockene, nekrotische Wunden oder Verbrennung 3°.", s: "S. 14–15" },
    { f: "Welche Auflagen dürfen laut Heft NICHT über den Wundrand hinausreichen?",
      o: ["Alginate", "Offenporige Schaumstoffkompressen", "Aquafilament-Verbände", "Hydrophile Faserverbände"], r: 2,
      e: "Alginate passgenau zuschneiden (Mazeration); offenporige Schaumstoffkompressen: Wundrand nicht überlappen. Aquafilament darf den Wundrand überlappen; hydrophile Faser geliert nur im Feuchten (Wundrand bleibt trocken).", s: "S. 14–16, 22" },
    { f: "Wie werden Aquafilament-Verbände gewechselt?",
      o: ["In der Exsudationsphase täglich, danach spätestens nach 3 Tagen", "Nur alle 14 Tage", "Grundsätzlich mehrmals täglich", "Erst nach vollständiger Resorption"],
      e: "Aquafilament: reißfest, silberhaltig, hydrophile Fasern; alle Phasen; darf Wundrand überlappen; VW in der Exsudationsphase täglich, danach spätestens nach 3 Tagen.", s: "S. 15–16" },
    { f: "Woran erkennt man die Erschöpfung einer Hydrogel-Kompresse?",
      o: ["An einer blasenförmigen Verformung", "An einer Schwarzfärbung", "Am vollständigen Auflösen der Kompresse", "Sie ist nicht erkennbar"],
      e: "Hydrogel-Kompressen: nicht bei stark nässenden/blutenden Wunden; Erschöpfung = blasenförmige Verformung; VW spätestens nach 7 Tagen.", s: "S. 17–18" },
    { f: "Was gilt für Hydrogele aus der Tube?",
      o: ["Mit sterilem Spatel auftragen, angebrochene Tuben verwerfen", "Geeignet für stark nässende und blutende Wunden", "Angebrochene Tuben können beim nächsten VW weiterverwendet werden", "Wechsel nur alle 14 Tage"],
      e: "Hydrogele aus der Tube: sehr hoher Wassergehalt, Wundfüller; nicht bei stark nässend/blutend; steriler Spatel; angebrochene Tuben verwerfen; VW alle 2–3 Tage (Beläge: täglich).", s: "S. 19" },
    { f: "Bei welchen Wunden sind Hydrokolloide kontraindiziert?",
      o: ["Klinisch infizierte Wunden", "Ischämische Ulzera", "Leicht exsudierende Wunden", "Wunden in der Granulationsphase"], r: 2,
      e: "Hydrokolloide: leicht–stark exsudierend, alle Phasen. Nicht bei klinisch infizierten Wunden, freiliegenden Muskeln/Sehnen/Knochen, ischämischen Ulzera (wenig O₂).", s: "S. 19–20" },
    { f: "Wann wird ein Hydrokolloidverband gewechselt?",
      o: ["Wenn die Gelblase die ganze Wunde bedeckt oder Exsudat ausläuft", "Grundsätzlich täglich", "Sobald sich eine kleine Gelblase zeigt", "Erst nach 14 Tagen"],
      e: "VW wenn die Blase die ganze Wunde bedeckt oder Exsudat ausläuft (1–7 Tage); faltenfrei anlegen.", s: "S. 19–20" },
    { f: "Was ist laut handschriftlicher Notiz zu Hydrokolloiden vermerkt?",
      o: ["Kein Gasaustausch, die Wunde „schwitzt“; wird kaum noch verwendet", "Mittel der Wahl bei klinisch infizierten Wunden", "Benötigen immer einen Sekundärverband", "Dürfen nur einen Tag liegen bleiben"],
      e: "Handschr.: Hydrokolloid – kein Gasaustausch, Wunde „schwitzt“; wird kaum noch verwendet. Laut Druck: kein Sekundärverband nötig, KI bei klinisch infizierten Wunden.", s: "S. 4–6, 19–20", h: true },
    { f: "Wozu dienen offenporige Schaumstoffkompressen?",
      o: ["Zur Wundkonditionierung, z. B. vor einer Hauttransplantation", "Als schmerzarme Dauerversorgung trockener Wunden", "Zur Geruchsbindung bei exulzerierenden Karzinomen", "Als selbstklebender Verband zum Duschen"],
      e: "Offenporige Schaumstoffkompressen haften in der Granulation an, beim VW reißt sie auf → Blutung → gut durchblutetes Granulationsgewebe (z. B. vor Hauttransplantation, offene Frakturen). Schmerzhaft.", s: "S. 22" },
    { f: "Wann sind semipermeable Wundfolien kontraindiziert?",
      o: ["Bei nässenden und klinisch infizierten Wunden", "Wenn die Wunde beobachtet werden soll", "Wenn Patient:innen duschen möchten", "Bei oberflächlichen, primär heilenden Wunden"],
      e: "Semipermeable Folien: transparent, Beobachtung und Duschen möglich, nicht saugend. KI: nässende und klinisch infizierte Wunden; nicht gedehnt anbringen; VW spätestens nach 7 Tagen.", s: "S. 23" },
    { f: "Warum sind Superabsorber bei schwach exsudierenden oder trockenen Wunden ungeeignet?",
      o: ["Gefahr der Austrocknung", "Sie verkleben mit dem Wundrand", "Sie geben zu viel Feuchtigkeit ab", "Sie enthalten Silber"],
      e: "Superabsorber: sehr große Saugkapazität, mäßig–stark exsudierend, exulzerierende Karzinome; nicht bei schwach exsudierenden oder trockenen Wunden (Austrocknung).", s: "S. 24" },
    { f: "Wie bewertet das Heft interaktive Wundauflagen (Kollagen, Gelatine, Hyaluronsäure)?",
      o: ["Nutzen weitgehend ungeklärt, sehr teuer → kritisch hinterfragen", "Standardversorgung für jede chronische Wunde", "Mittel der Wahl bei infizierten Wunden", "Preiswerte Alternative zu Mullkompressen"],
      e: "Interaktive Auflagen halten feucht und warm, sind mit körpereigenen Substanzen identisch/verwandt; Nutzen weitgehend ungeklärt, sehr teuer → kritisch hinterfragen.", s: "S. 24–25" },
    { f: "Was gilt für Kollagen-Wundauflagen?",
      o: ["Vollständige Resorption – sie bleiben liegen, nur der Sekundärverband wird gewechselt", "Sie müssen täglich vollständig entfernt werden", "Sie sind für trockene Nekrosen besonders geeignet", "Sie werden bei infizierten Wunden bevorzugt"],
      e: "Kollagen: hohe Saugkapazität, vollständige Resorption (bleibt liegen, nur Sekundärverband wechseln). Nicht bei infizierten Wunden und trockenen Nekrosen; schwach exsudierend → mit NaCl anfeuchten.", s: "S. 25–26" },
    { f: "Welche Eigenschaft hebt das Heft bei Gelatine-Wundauflagen hervor?",
      o: ["Sehr schnelle Blutstillung", "Geruchsbindung durch Aktivkohle", "Keimbindung durch hydrophobe Anziehung", "Abgabe von Feuchtigkeit an trockene Wunden"],
      e: "Gelatine quillt in Wasser; sehr schnelle Blutstillung, hohe Aufnahme, vollständige Resorption; sonst wie Kollagen.", s: "S. 25–26" },
    { f: "Was ist bei Aktivkohlekompressen zu beachten?",
      o: ["Sie dürfen nicht zugeschnitten werden", "Sie werden passgenau auf Wundgröße zugeschnitten", "Sie benötigen keine Fixierung", "Sie werden nur bei trockenen Wunden eingesetzt"],
      e: "Aktivkohle: trocken Geruchsfilter, durchfeuchtet Bindung von Eiweiß/Bakterien; klinisch infizierte, geruchsintensive Wunden. Nicht zuschneiden; Fixierung nötig.", s: "S. 27" },
    { f: "Wie lange werden silberhaltige Wundauflagen laut Heft angewendet?",
      o: ["So lange wie nötig, so kurz wie möglich", "Dauerhaft bis zur vollständigen Abheilung", "Mindestens 6 Wochen", "Nur einmalig für wenige Stunden"],
      e: "Silber: Wirksamkeit ungeklärt, potenziell toxisch, teuer → so lange wie nötig, so kurz wie möglich (handschr.: nicht länger als 14 Tage).", s: "S. 28" },
    { f: "Wonach werden silberhaltige Wundauflagen ausgewählt?",
      o: ["Nach den Wundverhältnissen, nicht nach dem Silbergehalt", "Nach dem höchsten Silbergehalt", "Nach dem Preis", "Nach der Farbe der Auflage"],
      e: "Silber wirkt nur bei Flüssigkeit; kritisch kolonisierte, lokal infizierte Wunden; enger Kontakt zum Wundgrund; Auswahl nach Wundverhältnissen, nicht nach Silbergehalt.", s: "S. 28" },
    { f: "Welcher Nachteil von Honig-Wundauflagen wird im Heft genannt?",
      o: ["Schmerz durch osmotischen Zug", "Unangenehmer Geruch", "Geringe Akzeptanz bei Betroffenen", "Resistenzbildung gegen Silber"],
      e: "Honig: angenehmer Geruch, hohe Akzeptanz. Nachteile: schwankende Eigenschaften, Kontamination, Schmerz durch osmotischen Zug, Allergien, Sekundärverband.", s: "S. 28" },
    { f: "Womit dürfen hydrophobe Wundauflagen nicht kombiniert werden?",
      o: ["Mit fetthaltigen Materialien", "Mit einem Sekundärverband", "Mit einer Fixierung", "Mit steriler Kochsalzlösung"],
      e: "Hydrophobe Auflagen binden Keime rein physikalisch (keine Allergie/Resistenz); fetthaltige Materialien heben die Bindung auf.", s: "S. 29" },
    { f: "Wann sind Sprühpflaster kontraindiziert?",
      o: ["Bei blutenden oder nässenden Wunden", "Bei Verbrennungen", "Bei kleinen oberflächlichen Wunden nach Blutstillung", "Bei kleinen Schürfwunden nach Blutstillung"], r: 2,
      e: "Sprühpflaster: kleine, oberflächliche Wunden nach Blutstillung. KI: blutende/nässende, infizierte, tiefe/großflächige Wunden, Verbrennungen, Augen, Mund, Schleimhäute.", s: "S. 30" },
    { f: "Worauf kommt es laut Kernbotschaft des Hefts bei der Produktwahl an?",
      o: ["Zu erkennen, welches Produkt wann, wofür und wie lange genutzt werden kann", "Immer das neueste Produkt zu wählen", "Immer das teuerste Produkt zu wählen", "Möglichst viele Produkte zu kombinieren"],
      e: "Nicht das Neueste oder Teuerste zählt, sondern Indikation, Kontraindikation, Anwendungshinweise und Wechselintervall.", s: "S. 2, 31" }
  ],

  zusammenfassung: `
<h3>1. Verbandmittel und Medizinprodukte <span class="seite">S. 3–4</span></h3>
<p class="merke"><b>Verbandmittel</b> (§ 31 Abs. 1a SGB V): „Gegenstände einschließlich Fixiermaterial, deren Hauptwirkung darin besteht, oberflächengeschädigte Körperteile zu bedecken, Körperflüssigkeiten von oberflächengeschädigten Körperteilen aufzusaugen oder beides zu erfüllen.“ Ergänzend möglich: feucht halten, reinigen, Geruch binden, antibakterielle oder Metallbeschichtung. Auch Gegenstände zum Stabilisieren, Immobilisieren oder Komprimieren nicht oberflächengeschädigter Körperteile gelten als Verbandstoffe.</p>
<p>Verbandmittel sind <b>CE-zertifizierte Medizinprodukte</b> (MPG); bestimmungsgemäße Hauptwirkung <b>weder pharmakologisch noch immunologisch noch metabolisch</b> (§ 3 MPG). Klasse richtet sich nach der „Verletzbarkeit des Körpers“ (Zweckbestimmung, Anwendungsort, -dauer) → vier Risikoklassen (S. 3).</p>
<div class="tabelle"><table>
  <thead><tr><th>Klasse <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span></th><th>Beschreibung (Heft)</th><th>Beispiele</th></tr></thead>
  <tbody>
    <tr><td>I – niedrig</td><td>oberflächliche, primär heilende Wunden; mechanische Barriere, Exsudatabsorption, Fixierung, Kompression</td><td>Mull-, Saugkompressen, Fixiermittel, elastische Binden, semipermeable Folien</td></tr>
    <tr><td>IIa – mittel</td><td>beeinflussen Umgebung und Mikroklima oberflächlicher Wunden</td><td>Alginat-, Hydrogel-, Schaumstoff-Kompressen, Hydrokolloide</td></tr>
    <tr><td>IIb – erhöht</td><td>Wunden in Leder- oder Unterhaut mit sekundärer Wundheilung</td><td>Alginat-, Schaumstoff-Tamponaden, Hydrogel aus der Tube, Mullbinde zur Tamponade</td></tr>
    <tr><td>III – hoch</td><td>sekundär heilende Wunden bis in die Unterhaut, infektionsgefährdet/infiziert, Heilungsstörungen; enthalten <b>Arzneimittel und/oder tierische Bestandteile</b> (Kollagen, Gelatine)</td><td>PVP-iodhaltige Gazen, polihexanidhaltige, kollagen-, gelatinehaltige Auflagen, Gazen mit PVP-Silbersulfadiazin</td></tr>
  </tbody>
</table></div>
<p class="hand">Seite handschr. „Prüfung!“ markiert.</p>

<h3>2. Wundauflagen: Einteilung und Anforderungen <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 4–6</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Konventionell (passiv, <span class="hand-inline">handschr. „klassisch“</span>)</th><th>Modern</th></tr></thead>
  <tbody>
    <tr><td>decken die Wunde ab und schützen vor äußeren Einwirkungen</td><td>halten das <b>feuchte Wundmilieu</b> aufrecht; bestehen u. a. aus Eiweiß- oder Zuckermolekülen, unterstützen die Heilungsphasen</td></tr>
  </tbody>
</table></div>
<p><b>Primärverband</b> = direkt auf Haut/Wundfläche; <b>Sekundärverband</b> = deckt ab oder fixiert (S. 5). <span class="hand-inline">Handschr.: primär = unmittelbar auf der Wunde; sekundär = Pflaster etc.</span></p>
<div class="tabelle"><table>
  <caption>Anforderungen an Wundauflagen ★ (S. 5–6)</caption>
  <tbody>
    <tr><td>Funktion</td><td>Schutz vor Fremdkörpern, Infektion, Druck, Reibung, Wärmeverlust, Austrocknung · Gasaustausch · Unterstützung der autolytischen Wundreinigung · ausreichende Saugkapazität (Blut, Wundflüssigkeit, Gewebetrümmer, Bakterien)</td></tr>
    <tr><td>Verträglichkeit</td><td>keine Fasern/Partikel in die Wunde · keine Schmerzen · kein Anhaften am Wundgrund · atraumatischer Verbandwechsel · gut verträglich, gering allergen · Wundruhe · Akzeptanz bei Betroffenen und Anwendern</td></tr>
    <tr><td>Wirtschaftlichkeit</td><td>verschiedene Packungsgrößen · einfache, sichere Handhabung · Wundruhe durch seltene Verbandwechsel (längere Intervalle meist teurer, verkürzen aber die Behandlung)</td></tr>
  </tbody>
</table></div>
<p class="hand">Handschr. (S. 4–6): „Welche Eigenschaften / welche Anforderungen gibt es an Wundauflagen?“ als Prüfung markiert · semipermeable Wundauflagen lassen Luft raus, keine Luft rein · Tamponaden z. B. Alginat · Hydrokolloid: kein Gasaustausch, Wunde „schwitzt“ · bei Allergie: Sensitiv/Silikon.</p>

<h3>3. Konventionelle Wundauflagen <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 6–13</span></h3>
<p>Eignen sich v. a. für <b>primär heilende Wunden</b>. Dazu zählen: <b>Mull-, Vliesstoffkompressen, kombinierte Saugkompressen, Wundschnellverbände, Wundnahtstreifen, Fixiermittel, imprägnierte und hydroaktiv imprägnierte Wundgazen, Wundkontaktverbände mit Silikon</b> (S. 6). <span class="hand-inline">Handschr. „Prüfungsfrage“; „= klassische = passive“.</span></p>
<div class="tabelle"><table>
  <thead><tr><th>Auflage</th><th>Vorteile</th><th>Nachteile / KI</th><th>Anwendung (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Mullkompressen (Baumwollgewebe)</td><td>standardisiert (Arzneibuch), reinigend beim Auswischen, hohe Saugkraft, leiten Wundflüssigkeit ab</td><td>Mazeration, häufige VW, Infektionsgefahr bei Durchnässung, Austrocknung, Verkleben, Fasern in der Wunde, wenig Polster, Fixierung nötig. <b>KI:</b> Primärverband bei sekundär heilenden, granulierenden, epithelisierenden, schwach exsudierenden Wunden</td><td>Primärversorgung akuter (postop./traumatischer) Wunden, Umgebungsreinigung, Arzneimittelträger, Saugkompresse; tiefe Wunden locker austamponieren; oberflächlich mind. 2 × 8-lagig; VW bei Durchnässung. <span class="hand-inline">Handschr.: nicht zerschneiden</span></td></tr>
    <tr><td>Vlieskompressen</td><td>preiswerter, weich, anschmiegsam, gut verformbar</td><td>sonst wie Mull</td><td>wie Mull</td></tr>
    <tr><td>Kombinierte Saugkompressen</td><td>große Saugkapazität, gute Polsterung, weich, wenig Verkleben</td><td>weniger exsudierende Wunden verlieren Feuchtigkeit, Verkleben möglich, Fixierung nötig; nicht bei mäßig bis schwach exsudierenden Wunden</td><td>postoperativ, sehr stark nässende Wunden, Sekundärverband; feuchtigkeitsabweisende Seite nach außen; VW bei Durchnässung</td></tr>
    <tr><td>Wundschnellverbände (Pflaster)</td><td>schnell, leichte Kompression → Blutstillung</td><td>begrenzte Saugkraft, lösen sich, Schmutz, Aufweichung; <b>nicht für tiefe, sekundär heilende Wunden</b></td><td>kleine Schnitt-/Schürfwunden; trockene, fettfreie Haut; VW bei Durchnässung/Verschmutzung</td></tr>
    <tr><td>Wundnahtstreifen (<span class="hand-inline">handschr. Steri-Strips</span>)</td><td>atraumatischer Verschluss ohne Lokalanästhesie, weniger Infektion, kaum Narben</td><td>behutsam entfernen (Hautläsionen)</td><td>Gesicht, Platzwunden, Hauttransplantate, Entlastung von Naht/Narbe; mit erstem Streifen <b>in der Mitte</b> beginnen</td></tr>
    <tr><td>Fixiermittel</td><td>Binden, Schlauch-, Netzverbände</td><td>Rollenpflaster → Juckreiz, Ausschlag; bei brüchiger Haut Fixiervlies nur sehr vorsichtig</td><td>Verbände anlegen, Primärverband abdecken, Auflagen befestigen</td></tr>
    <tr><td>Imprägnierte Wundgazen (Vaseline/Paraffin)</td><td>kein Verkleben, preiswert</td><td>Saugkompresse + Fixierung nötig, zeitaufwendig; Verkleben bei wenig Exsudat</td><td><b>nie doppelt/dreifach falten</b> (Exsudatstau, kein O₂, Infektion); mind. täglicher VW</td></tr>
    <tr><td>Hydroaktiv imprägnierte Gazen</td><td>Gelbildung → feuchtes Milieu, kein Ankleben; Erschöpfung erkennbar</td><td>Sekundärverband, teurer</td><td>oberflächlich, mäßig bis stark nässend (Abschürfung, Verbrennung, Spalthaut, Ulcus cruris); VW <b>spätestens nach 4 Tagen</b></td></tr>
    <tr><td>Wundkontaktverbände mit Silikon</td><td>sehr schonend, atraumatisch, Wundrandschutz, Wundruhe (nur Sekundärverband wechseln)</td><td>nicht saugend; <b>KI: Silikonüberempfindlichkeit</b></td><td>oberflächlich bis tief (Verbrennungen), Transplantate, postoperativ, Hautschutz, empfindliche Haut; Maschen groß genug für Exsudat</td></tr>
  </tbody>
</table></div>
<p>Konventionelle Verbände werden meist mehrfach täglich erneuert, Austrocknung, Infektions- und Verletzungsrisiko, kein einheitlicher Standard (S. 13).</p>

<h3>4. Moderne Wundauflagen – hydroaktiv <span class="seite">S. 14–24</span></h3>
<p>Drei Gruppen: <b>hydroaktive, interaktive, antibakterielle/geruchsbindende</b> Wundauflagen. Hydroaktiv = feucht-warmes Milieu über den gesamten Therapieverlauf; kein Schorf, Granulation und Zellmigration ungehindert (S. 14).</p>
<div class="tabelle"><table>
  <thead><tr><th>Auflage</th><th>Prinzip / Indikation</th><th>Wichtige Hinweise (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Alginate (Seealgen)</td><td>trocken → feuchtes Gel; nehmen sehr viel Flüssigkeit, Bakterien, Zelltrümmer auf; mäßig–stark nässend, tief, Höhlen, infiziert, blutend (blutstillend), Exsudationsphase, Verbrennung 2°</td><td><b>nicht</b> auf trockene, nekrotische Wunden oder Verbrennung 3°; <b>nicht über den Wundrand</b> (passgenau, Mazeration); austamponieren möglich; VW 1–7 Tage. <span class="hand-inline">Handschr.: löst/weicht Beläge ab</span></td></tr>
    <tr><td>Aquafilament-Verbände</td><td>reißfest, silberhaltig (Keimreduktion), hydrophile Fasern; akut, schwer heilend, exsudierend <b>und trocken</b> (dann anfeuchten)</td><td>vertikale Aufnahme → kein Mazerieren; schneidbar; unter Kompression; alle Phasen; <b>darf Wundrand überlappen</b>; VW in Exsudationsphase täglich, danach spätestens nach 3 Tagen</td></tr>
    <tr><td>Hydrophile Faserverbände</td><td>trocken aufgelegt, saugen Flüssigkeit und Zelltrümmer, Gel nur im feuchten Bereich → Wundrand bleibt trocken</td><td>ausreichend Exsudat nötig; Sekundärverband; unter Kompression; VW spätestens nach 7 Tagen. <span class="hand-inline">Handschr.: Hydrofaser besser als Alginat, über den Wundrand möglich</span></td></tr>
    <tr><td>Hydrogel-Kompressen</td><td>geben Feuchtigkeit ab, weichen Beläge auf, Feuchtigkeitsgleichgewicht; schwach–mäßig exsudierend, Granulation/Epithelisierung; kühlend, atraumatisch</td><td><b>nicht bei stark nässenden/blutenden Wunden</b>; Erschöpfung = blasenförmige Verformung; VW spätestens nach 7 Tagen</td></tr>
    <tr><td>Hydrogele aus der Tube</td><td>sehr hoher Wassergehalt; feucht halten, Beläge aufweichen, Wundfüller</td><td>nicht bei stark nässend/blutend; steriler Spatel; angebrochene Tuben verwerfen; VW alle 2–3 Tage (Beläge: täglich). <span class="hand-inline">Handschr.: bei zu trockenen Wunden, wenig Exsudat</span></td></tr>
    <tr><td>Hydrokolloide</td><td>Schaumstoff + selbstklebende quellende Masse → zähes Gel; leicht–stark exsudierend, alle Phasen; selbstklebend, kein Sekundärverband, Duschen möglich</td><td><b>nicht</b> bei klinisch infizierten Wunden, freiliegenden Muskeln/Sehnen/Knochen, ischämischen Ulzera (wenig O₂); häufig Hautirritation/Allergie; faltenfrei; VW wenn Blase die ganze Wunde bedeckt oder Exsudat ausläuft (1–7 Tage). <span class="hand-inline">Handschr.: wird kaum noch verwendet; z. B. bei Stomata, VAC, Wundrändern</span></td></tr>
    <tr><td>Kombinierte Wundverbände</td><td>Primär + Sekundär in einem; sehr hohe Aufnahme, Wundrandschutz, unter Kompression</td><td>infizierte Wunden kritisch; nicht bei trockenen Nekrosen; bis 7 Tage</td></tr>
    <tr><td>Schaumstoffkompressen / Hydropolymere</td><td>Weichschaum nimmt auf ohne Formänderung; Hydropolymere quellen der Wunde entgegen; mäßig–stark exsudierend; atraumatisch, polsternd, unter Kompression</td><td>geben keine Flüssigkeit ab; Austrocknung bei wenig Exsudat; ungeeignet für trockene, nekrotische Wunden; infiziert kritisch. <span class="hand-inline">Handschr.: VAC-System – Schwamm in der Wunde aktiviert Granulation</span></td></tr>
    <tr><td>Offenporige Schaumstoffkompressen</td><td>Wundkonditionierung: haften in der Granulation an, VW reißt auf → Blutung → durchblutetes Granulationsgewebe (z. B. vor Hauttransplantation, offene Frakturen)</td><td>schmerzhaft, zeitaufwendig, Partikel bleiben zurück; <b>Wundrand nicht überlappen</b></td></tr>
    <tr><td>Semipermeable Wundfolien</td><td>transparent; kein Eindringen von Bakterien/Nässe, O₂- und Wasserdampfaustausch; Beobachtung, Duschen möglich</td><td>nicht saugend; <b>KI: nässende und klinisch infizierte Wunden</b>; nicht gedehnt anbringen; Haare kürzen; VW spätestens nach 7 Tagen; Altershaut beachten</td></tr>
    <tr><td>Superabsorber</td><td>sehr große Saugkapazität, Gel schließt Keime/Zelltrümmer ein, Wundrandschutz, Geruch ↓; mäßig–stark exsudierend, exulzerierende Karzinome</td><td><b>nicht</b> bei schwach exsudierenden oder trockenen Wunden (Austrocknung); Volumen-/Gewichtszunahme; Austamponieren kritisch</td></tr>
  </tbody>
</table></div>

<h3>5. Interaktive Wundauflagen <span class="seite">S. 24–26</span></h3>
<p>Halten die Wunde feucht und warm; mit körpereigenen Substanzen identisch oder verwandt. Nutzen für die Wundheilung <b>weitgehend ungeklärt</b>, sehr teuer → kritisch hinterfragen.</p>
<div class="tabelle"><table>
  <thead><tr><th>Auflage</th><th>Inhalt (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Kollagen</td><td>offenporig, saugt Exsudat und Zelltrümmer; soll Granulation/Epithelisierung beschleunigen, belastbarere Narbe; hohe Saugkapazität, reinigend, <b>vollständige Resorption</b> (bleibt bis dahin liegen, nur Sekundärverband wechseln). <b>Nicht bei infizierten Wunden und trockenen Nekrosen</b>; schwach exsudierend → mit NaCl anfeuchten</td></tr>
    <tr><td>Gelatine</td><td>quillt in Wasser; sehr schnelle Blutstillung, hohe Aufnahme, vollständige Resorption; sonst wie Kollagen. <span class="hand-inline">Handschr.: Gelaspon – Blutstillung (Schwamm)</span></td></tr>
    <tr><td>Hyaluronsäure</td><td>bindet Wasser, Gelbildung, wirkt in der Initialphase; Granulat, Auflage, Film; Nachteil: Sekundärverband; chronische, sekundär heilende Wunden.</td></tr>
  </tbody>
</table></div>
<p class="warnung">Heft widersprüchlich (Hyaluronsäure, S. 26): Einsatz bei infizierten Wunden und mit Antiseptika <b>kontraindiziert</b>, im Folgesatz „bei infizierten Wunden und starker Geruchsentwicklung eingesetzt“.</p>

<h3>6. Antibakterielle und geruchsbindende Wundauflagen <span class="seite">S. 27–29</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Auflage</th><th>Inhalt (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Aktivkohle</td><td>trocken Geruchsfilter; durchfeuchtet Bindung von Eiweiß/Bakterien; mit Silber Keimreduktion. Klinisch infizierte, sehr geruchsintensive Wunden; Unterstützung von Débridement/Antibiotika. <b>Nicht zuschneiden</b>; Fixierung nötig; Kohle deckt saugenden Primärverband ab</td></tr>
    <tr><td>Silberhaltig</td><td>nur bei Flüssigkeit wirksam; kritisch kolonisierte, lokal infizierte Wunden; enger Kontakt zum Wundgrund; Auswahl nach Wundverhältnissen, nicht nach Silbergehalt. Ungeklärte Wirksamkeit, potenzielle Toxizität, teuer → <b>so lange wie nötig, so kurz wie möglich</b>. <span class="hand-inline">Handschr.: nicht länger als 14 Tage anwenden</span></td></tr>
    <tr><td>Honig</td><td>hohe Zuckerkonzentration zieht Flüssigkeit, Ödeme ↓, Reinigung; angenehmer Geruch, hohe Akzeptanz. Nachteile: schwankende Eigenschaften, Kontamination (Pestizide, Clostridien, Antibiotika), Schmerz durch osmotischen Zug, Allergien, Sekundärverband</td></tr>
    <tr><td>Hydrophob</td><td>rein physikalisch: hydrophobe Anziehung bindet Keime → keine Allergie/Resistenz; kontaminierte/infizierte postoperative, traumatische Wunden, nach Fistel-/Abszessentfernung, Dehiszenzen. <b>Nicht mit fetthaltigen Materialien kombinieren</b> (hebt Bindung auf). <span class="hand-inline">Handschr.: Cutimed Sorbact – sehr gut wirksam (bakterienbindende Auflage, Gelkompresse); als „interaktiv“ notiert</span></td></tr>
    <tr><td>Antiseptikahaltig</td><td>Kompressen und Hydrogele; Wirkstoff unterstützt Reinigung und reduziert Bakterien im Verband; Hydrogele befeuchten, konserviert länger haltbar; begrenzte Aufnahme, KI je Wirkstoff, Sekundärverband</td></tr>
  </tbody>
</table></div>

<h3>7. Sprühpflaster und lokale Wundtherapeutika <span class="seite">S. 30–31</span></h3>
<ul>
  <li><b>Sprühpflaster:</b> Filmbildner in schnell verdunstenden Lösungsmitteln; elastisch, wasserfest, atmungsaktiv; kleine, oberflächliche Wunden nach Blutstillung. <b>KI:</b> blutende/nässende, infizierte, tiefe/großflächige Wunden, Verbrennungen, Augen, Mund, Schleimhäute.</li>
  <li><b>Lokale Wundtherapeutika</b> halten das feuchte Milieu aufrecht; heute eher untergeordnet, phasengerecht anwenden; nachgewiesene Wirksamkeit, gute Verträglichkeit, gering allergen. Dazu: unkonservierte/konservierte Spüllösungen, Wundantiseptika, Wundsprays, Wund-/Heilsalben, Wundrandschutz/Hautschutz, lokale Hautkleber.</li>
</ul>
<p class="merke"><b>Kernbotschaft</b> (S. 2, 31): Nicht das Neueste oder Teuerste zählt, sondern zu erkennen, <b>welches Produkt wann, wofür und wie lange</b> genutzt werden kann – mit Indikation, Kontraindikation, Anwendungshinweisen und Wechselintervall.</p>
`
});
