/*
 * Thema: Wunden – Arten, Heilung und Heilungsstörungen
 * Quelle: murimed-Kursheft Wundexperte Modul I (Seitenangaben beziehen sich auf das Heft).
 * Inhalte übernommen aus "Zusammenfassung_Wundarten_Wundheilung.pdf" und
 * "Lernkarten_Wundarten_Wundheilung.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "wundarten-wundheilung",
  titel: "Wunden: Arten, Heilung und Heilungsstörungen",
  kurz: "Wundheilung",
  quelle: "murimed-Kursheft Wundexperte Modul I",
  hinweis:
    "Quelle ist ausschließlich das Kursheft; Seitenzahlen in Klammern. „Kein Prüfungsstoff“ = im Heft handschriftlich mit „Ø Prüfung“ markiert. Die im Heft zitierten Primärquellen wurden nicht separat geprüft.",

  karten: [
    { k: "Wundarten", f: "Definiere den Begriff Wunde.",
      a: "Unterbrechung des Zusammenhangs von Körpergeweben mit oder ohne Substanzverlust.", s: "S. 3" },
    { k: "Wundarten", f: "Nach welchen Kriterien werden Wunden eingeteilt?",
      a: "Entstehungshergang, Entstehungsart, Heilungsdauer, Keimbesiedelung (Kolonisationsgrad), Art und Tiefe der Gewebeschädigung.", s: "S. 3" },
    { k: "Wundarten", f: "Welche vier Entstehungshergänge gibt es?",
      a: "Mechanisch, thermisch, chemisch, strahlenbedingt.", s: "S. 3" },
    { k: "Wundarten", f: "Was sind mechanische Wunden? Nenne Beispiele.",
      a: "Folge von Gewalteinwirkung.\nSchnitt-, Stich-, Quetsch-, Riss-, Platz-, Schürf-, Kratz-, Bisswunden, Blasen, Ablederungen, Amputationen, Schuss-, Pfählungsverletzungen.", s: "S. 3" },
    { k: "Thermisch", f: "Nenne die Verbrennungsgrade 1 und 2a.",
      a: "1: Epidermis; Rötung, starke Schmerzen, Heilung ohne Narbe.\n2a: oberflächliche Dermis; Blasen, Haare fest, Wundgrund rosig, rekapillarisierend, starke Schmerzen; Heilung meist in 14 Tagen.", s: "S. 6" },
    { k: "Thermisch", f: "Nenne die Verbrennungsgrade 2b, 3 und 4.",
      a: "2b: tiefe Dermis; Blasen, Haare leicht zu entfernen, blasser Grund, reduzierter Schmerz.\n3: komplette Dermis; weiß, lederartig, keine Schmerzen, Nekrosen.\n4: bis Muskel/Knochen; Verkohlung.", s: "S. 6" },
    { k: "Thermisch", f: "Ab wann droht ein Verbrennungsschock?",
      a: "Bei 2.–3.-gradiger Verbrennung ab 10 % verbrannter Körperoberfläche bei Erwachsenen, ab 5 % bei Kindern (hypovolämischer Schock).", s: "S. 7" },
    { k: "Chemisch", f: "Säure- vs. Laugenverätzung?",
      a: "Säure: Koagulationsnekrose – fester, trockener Schorf, scharf begrenzt.\nLauge: Kolliquationsnekrose – glasig, weich, unscharf begrenzt, dunkelbrauner Grund; schwerwiegender.", s: "S. 8" },
    { k: "Strahlen", f: "Was kennzeichnet strahlenbedingte Wunden?",
      a: "Zuerst Stratum basale betroffen (hohe Mitoserate); Spätschäden: Fibrose, Gefäßveränderungen, Strahlenulzera – Entartung zum Plattenepithelkarzinom nach 4–40 Jahren möglich; Behandlung wie Verbrennung.", s: "S. 9" },
    { k: "Entstehung", f: "Traumatische, iatrogene und chronische Wunden?",
      a: "Traumatisch: äußere Gewalt.\nIatrogen: durch ärztliche/therapeutische Maßnahmen (Inzision, Punktion, Amputation).\nChronisch: keine Heilungstendenz nach 4–12 Wochen trotz fachgerechter Therapie.", s: "S. 9" },
    { k: "Entstehung", f: "Was bedeutet „Vulnerando sanamus“?",
      a: "„Heilen durch Verletzen“ – Grundsatz iatrogener Wunden.", s: "S. 9" },
    { k: "Entstehung", f: "Akute vs. chronische Wunde?",
      a: "Akut: Phasen regelrecht durchlaufen, Heilung innerhalb von 4 Wochen.\nChronisch: Phasen nicht regelrecht, keine Heilungstendenz nach 4–12 Wochen; von Beginn an chronisch bei chronischer Grunderkrankung.", s: "S. 11, 13" },
    { k: "Keime", f: "Nenne die sechs Kolonisationsgrade.",
      a: "Aseptisch · kontaminiert · kolonisiert · kritisch kolonisiert · lokal infiziert · systemisch infiziert.\nKeine Wunde ist steril.", s: "S. 10" },
    { k: "Keime", f: "Kontaminiert vs. kolonisiert vs. kritisch kolonisiert?",
      a: "Kontaminiert: Keime vermehren sich nicht.\nKolonisiert: vermehrungsfähige Keime, Heilung nicht nachhaltig gestört.\nKritisch kolonisiert: erhöhte Besiedlung, infektgefährdet.", s: "S. 10" },
    { k: "Keime", f: "Wann gilt eine Wunde als aseptisch?",
      a: "Fast keimfrei, keine Entzündungszeichen; z. B. OP-Wunden oder frische Verletzungen (nicht älter als 4–6 h), primär verschlossen.", s: "S. 10" },
    { k: "Keime", f: "Nenne die klassischen Entzündungszeichen (deutsch und lateinisch).",
      a: "Rötung – rubor\nSchwellung – tumor\nÜberwärmung – calor\nSchmerz – dolor\nFunktionseinschränkung – functio laesa", s: "S. 10" },
    { k: "Keime", f: "Weitere Anzeichen einer Wundinfektion? (Übung I)",
      a: "Eitrige Beläge, viel/zähes Exsudat, Geruch, blutendes bröckeliges Granulationsgewebe, stagnierende Heilung, Wundvergrößerung, Hypergranulation, Lymphknotenschwellung, Wundaufbruch.", s: "S. 25" },
    { k: "Keime", f: "Lokale vs. systemische Infektion?",
      a: "Lokal: Erreger bleiben in Wunde und naher Umgebung.\nSystemisch: Erreger verteilen sich über den Blutkreislauf im ganzen Organismus (Sepsis).", s: "S. 10–11" },
    { k: "Tiefe", f: "Geschlossene vs. offene Wunden?",
      a: "Geschlossen: unter intakter Haut (Distorsion, Luxation, geschlossene Fraktur); nur Hämatom/Schwellung sichtbar.\nOffen: immer Verletzung von Haut oder Schleimhaut.", s: "S. 12–13" },
    { k: "Tiefe", f: "Welche offenen Wunden unterscheidet man nach der Tiefe?",
      a: "Oberflächlich: nur Epidermis, narbenfrei (Erosion, Exkoriation).\nPerforierend: alle Hautschichten (Messerstich).\nKompliziert: zusätzlich Gefäße, Nerven, Organe (offene Fraktur).", s: "S. 13" },
    { k: "Heilung", f: "Definiere Wundheilung.",
      a: "Physiologische Vorgänge zur Regeneration zerstörten Gewebes, die insbesondere durch Neubildung von Bindegewebe und Kapillaren den Verschluss einer Wunde bewirken.", s: "S. 14" },
    { k: "Heilung", f: "Warum braucht die Wundheilung ein feucht-warmes Milieu?",
      a: "Zellteilung setzt erst ab ca. 28 °C ein; in feucht-warmer Umgebung wandern die Zellen schneller und ordnen sich an.", s: "S. 15" },
    { k: "Heilung", f: "Merkmale der primären Wundheilung?",
      a: "Aseptische OP-Wunden oder frische Verletzungen (< 6 h); glatte, adaptierte Wundränder; Heilung in 6–10 Tagen mit minimaler Narbe.", s: "S. 14" },
    { k: "Heilung", f: "Was ist eine verzögerte Primärheilung?",
      a: "Gleiche Voraussetzungen wie bei der Primärheilung, aber die Wunde wird wegen Kontaminationsverdacht nicht sofort verschlossen (z. B. Schnittverletzung > 6 h).", s: "S. 14" },
    { k: "Heilung", f: "Merkmale der sekundären Wundheilung?",
      a: "Bei infizierten, großflächigen Wunden (Verbrennung, Dekubitus, Ulcus cruris); Heilung Schicht um Schicht von unten nach oben und außen nach innen über Granulationsgewebe; großflächige Narbe; länger, infektionsgefährdet.", s: "S. 14" },
    { k: "Heilung", f: "Reparatur vs. Regeneration?",
      a: "Reparatur: Ersatz durch Bindegewebe → Narbe (Primär-, verzögerte Primär-, Sekundärheilung).\nRegeneration: Ersatz durch identische Zellen, narbenfrei (oberflächliche Epidermis-, Schleimhautverletzungen).", s: "S. 15" },
    { k: "Heilung", f: "Was sind Narben?",
      a: "Faserreiches, qualitativ weniger hochwertiges Reparaturgewebe mit paralleler Kollagenanordnung – weniger elastisch, ohne Talg- und Schweißdrüsen.", s: "S. 16" },
    { k: "Heilung", f: "Warum gelten analnahe Wunden nicht als chronisch?",
      a: "Die Sekundärheilung ist nach proktologischen Eingriffen geplant und die Wunden sind gut durchblutet – trotz wochenlanger Heilung.", s: "S. 15" },
    { k: "Phasen", f: "Nenne die fünf Wundheilungsphasen in der richtigen Reihenfolge.",
      a: "1. Hämostase\n2. Exsudation\n3. Granulation\n4. Epithelisierung\n5. Remodulierung\nPraxis: oft 3 Phasen – Exsudation, Granulation, Epithelisierung.", s: "S. 16" },
    { k: "Phasen", f: "Was passiert in der Hämostase?",
      a: "Kapillaren ziehen sich zusammen, Vasokonstriktion; Blut und Plasma füllen den Wundspalt; Thrombozyten und Erythrozyten bilden einen Thrombus, der die Wunde verschließt.", s: "S. 16, 20" },
    { k: "Phasen", f: "Was passiert in der Exsudationsphase?",
      a: "Reinigungsphase: starke Exsudation, Makrophagen und Granulozyten beginnen die Wundreinigung, lokale Entzündung (≠ Infektion), Abtransport von Zelltrümmern; bei akuten Wunden nach ca. 3 Tagen abgeschlossen.", s: "S. 17" },
    { k: "Phasen", f: "Was passiert in der Granulationsphase?",
      a: "Ab ca. Tag 2, bis 14 Tage: Fibroblasten bilden Kollagen → Granulationsgewebe (tiefrot, gekörnt, feucht glänzend), neue Kapillarschleifen (Neoangiogenese), Wundkontraktion, Exsudat nimmt ab.", s: "S. 17–18" },
    { k: "Phasen", f: "Was passiert in der Epithelisierungsphase?",
      a: "Ab ca. Tag 4, bis 21 Tage: Granulationsgewebe verliert Gewebewasser; Epithelzellen wandern vom Rand ein („Überhäutung“); erstes Narbengewebe; Epidermis verdickt durch Keratin.", s: "S. 18–19" },
    { k: "Phasen", f: "Was passiert in der Remodulierungsphase?",
      a: "Über Monate: Kollagenfasern richten sich nach Zuglinien aus, Kapillaren bilden sich zurück; weißliche, zell- und gefäßarme Narbe mit max. ca. 80 % der ursprünglichen Belastbarkeit.", s: "S. 19–20" },
    { k: "Phasen", f: "Ordne zu (Übung II): Kapillarschleifen, Wundreinigung, Gewebewasser, Wundspalt, Narbengewebe.",
      a: "Hämostase – Blut und Plasma füllen Wundspalt\nExsudation – Beginn der Wundreinigung\nGranulation – neue Kapillarschleifen\nEpithelisierung – Granulationsgewebe verliert Gewebewasser\nRemodulierung – Narbengewebe", s: "S. 25" },
    { k: "Störungen", f: "Nenne die Wundkomplikationen nach dem Heft.",
      a: "Serom, Wundhämatom, Wundrandnekrose, Wundinfektion, Wunddehiszenz, Fremdkörperreaktion, hypertrophe Narbe und Keloid, Narbenkarzinom.", s: "S. 21" },
    { k: "Störungen", f: "Was ist ein Serom und wie wird es behandelt?",
      a: "Ansammlung von serösem Exsudat (Lymphe, Serum) in Wundhohlräumen, meist postoperativ.\nKlein: Resorption; groß: steril abpunktieren + leichter Kompressionsverband; infiziert: wie Abszess.", s: "S. 21" },
    { k: "Störungen", f: "Transsudat vs. Exsudat?",
      a: "Transsudat: nicht entzündlich, klar, serös, zell- und eiweißarm (z. B. Ödem).\nExsudat: Flüssigkeitsaustritt durch entzündliche Ursachen.", s: "S. 21" },
    { k: "Störungen", f: "Ursachen und Behandlung eines Wundhämatoms?",
      a: "Mangelhafte Blutstillung, unvollständige oder vorzeitig entfernte Drainage, Antikoagulanzien.\nInfektionsgefahr (Nährboden) → größere Hämatome operativ ausräumen.", s: "S. 21–22" },
    { k: "Störungen", f: "Wie wird eine Wundrandnekrose behandelt?",
      a: "Möglichst trocken halten und die Demarkation abwarten (scharfe Abgrenzung zwischen gesundem und krankem Gewebe).\nUrsache: mangelhafte Durchblutung der Wundränder.", s: "S. 22" },
    { k: "Störungen", f: "Welche postoperativen Wundinfektionen unterscheidet man?",
      a: "Oberflächlich (Haut, Subcutis) · tief (zusätzlich Muskeln, Faszien) · Infektion von Organen/Körperhöhlen im OP-Gebiet.", s: "S. 22" },
    { k: "Störungen", f: "Wunddehiszenz, Narbenhernie, Platzbauch?",
      a: "Dehiszenz: sekundäres Auseinanderweichen genähter Wundränder.\nNarbenhernie: Bruchpforte in der Narbe, Haut intakt; häufigste Komplikation nach Bauch-OP.\nPlatzbauch: vollständige Dehiszenz mit freiliegenden Eingeweiden.", s: "S. 22–23" },
    { k: "Störungen", f: "Hypertrophe Narbe vs. Keloid?",
      a: "Hypertroph: häufig, < 6 Monate, auf Verletzung beschränkt, bildet sich oft zurück.\nKeloid: selten, > 6 Monate, wächst über die Verletzung hinaus, keine Rückbildung, oft nach Minimaltrauma.", s: "S. 23" },
    { k: "Störungen", f: "Was ist ein Narbenkarzinom?",
      a: "Seltene maligne Entartung auf chronisch irritierten Narben (v. a. Brandnarben), meist Plattenepithelkarzinom; Risiko nach Brandverletzung 1–2 %. Therapie: weite Exzision, plastische Deckung, ggf. Amputation.", s: "S. 24" }
  ],

  quiz: [
    { f: "Wie ist eine Wunde laut Kursheft definiert?",
      o: ["Unterbrechung des Zusammenhangs von Körpergeweben mit oder ohne Substanzverlust", "Jeder Gewebeverlust, der länger als 4 Wochen besteht", "Eine Entzündung der Haut mit Rötung und Schwellung", "Nur eine Verletzung, die genäht werden muss"],
      e: "Wunde = Unterbrechung des Zusammenhangs von Körpergeweben mit oder ohne Substanzverlust (Pfitzmann 2020).", s: "S. 3" },
    { f: "Welche vier Entstehungshergänge von Wunden unterscheidet das Heft?",
      o: ["Mechanisch, thermisch, chemisch, strahlenbedingt", "Akut, chronisch, iatrogen, traumatisch", "Aseptisch, kontaminiert, kolonisiert, infiziert", "Oberflächlich, perforierend, kompliziert, geschlossen"],
      e: "Vier Ursachen: mechanisch, thermisch, chemisch, strahlenbedingt.", s: "S. 3" },
    { f: "Blasen, fest verankerte Haare, rosiger rekapillarisierender Wundgrund, starke Schmerzen – welcher Verbrennungsgrad?",
      o: ["Grad 2a", "Grad 2b", "Grad 1", "Grad 3"],
      e: "2a: oberflächliche Dermis, Haare fest, rosig, rekapillarisierend, starke Schmerzen. 2b: Haare leicht zu entfernen, blasser, reduzierter Schmerz.", s: "S. 6" },
    { f: "Welcher Verbrennungsgrad zeigt einen trockenen, weißen, lederartig harten Wundgrund ohne Schmerzen?",
      o: ["Grad 3", "Grad 2a", "Grad 1", "Grad 2b"],
      e: "Grad 3: komplette Dermis; trockener, weißer, lederartig harter Wundgrund, keine Haare, keine Schmerzen, Nekrosen.", s: "S. 6" },
    { f: "Ab welcher verbrannten Körperoberfläche droht bei Erwachsenen ein Verbrennungsschock (2.–3. Grad)?",
      o: ["Ab 10 %", "Ab 5 %", "Ab 20 %", "Ab 50 %"],
      e: "Bei 2.–3.-gradiger Verbrennung ab 10 % KOF bei Erwachsenen, ab 5 % bei Kindern (hypovolämischer Schock).", s: "S. 7" },
    { f: "Welche Nekroseform entsteht bei einer Laugenverätzung?",
      o: ["Kolliquationsnekrose (Verflüssigungsnekrose)", "Koagulationsnekrose (Gerinnungsnekrose)", "Fettgewebsnekrose", "Gangrän"],
      e: "Lauge: Kolliquationsnekrose – glasig, weich, unscharf begrenzt; schwerwiegender als Säure. Säure: Koagulationsnekrose – fester, trockener Schorf.", s: "S. 8" },
    { f: "Welche Hautschicht ist bei strahlenbedingten Wunden zuerst betroffen?",
      o: ["Stratum basale (hohe Mitoserate)", "Stratum corneum", "Subcutis", "Stratum lucidum"],
      e: "Zuerst ist das Stratum basale betroffen (hohe Mitoserate). Spätschäden: Fibrose, Gefäßveränderungen, Strahlenulzera.", s: "S. 9" },
    { f: "Was bedeutet „Vulnerando sanamus“?",
      o: ["Heilen durch Verletzen", "Keine Wunde ist steril", "Feucht auf feucht", "Von sauber zu unrein"],
      e: "„Vulnerando sanamus“ – Heilen durch Verletzen: Grundsatz iatrogener Wunden.", s: "S. 9" },
    { f: "Eine Wunde enthält Keime, die sich aber nicht vermehren. Welcher Kolonisationsgrad liegt vor?",
      o: ["Kontaminiert", "Kolonisiert", "Kritisch kolonisiert", "Lokal infiziert"],
      e: "Kontaminiert: Keime vermehren sich nicht. Kolonisiert: vermehrungsfähige Keime, Heilung nicht nachhaltig gestört.", s: "S. 10" },
    { f: "Was kennzeichnet eine kritisch kolonisierte Wunde?",
      o: ["Erhöhte Besiedlung, infektgefährdet", "Fast keimfrei, keine Entzündungszeichen", "Erreger im Blutkreislauf (Sepsis)", "Keime vorhanden, vermehren sich nicht"],
      e: "Kritisch kolonisiert: erhöhte Besiedlung; infektgefährdet, Übergang auf den Körper droht.", s: "S. 10" },
    { f: "Was bedeutet „calor“?",
      o: ["Überwärmung", "Rötung", "Schwellung", "Schmerz"],
      e: "Rötung (rubor) · Schwellung (tumor) · Überwärmung (calor) · Schmerz (dolor) · Funktionseinschränkung (functio laesa).", s: "S. 10" },
    { f: "Welche Wunde gilt als „oberflächlich“?",
      o: ["Nur Epidermis betroffen, heilt narbenfrei (z. B. Erosion, Exkoriation)", "Alle Hautschichten durchtrennt (z. B. Messerstich)", "Zusätzlich Gefäße und Nerven verletzt", "Unter intakter Haut, z. B. Distorsion"],
      e: "Offene Wunden: oberflächlich (nur Epidermis) · perforierend (alle Hautschichten) · kompliziert (zusätzlich Gefäße, Nerven, Organe).", s: "S. 12–13" },
    { f: "In welchem Zeitraum heilt eine Wunde bei primärer Wundheilung?",
      o: ["6–10 Tage, minimale Narbe", "4–12 Wochen", "Über mehrere Monate", "Innerhalb von 24 Stunden"],
      e: "Primäre Wundheilung: aseptische OP-Wunden oder frische Verletzungen (< 6 h), glatte adaptierte Ränder, 6–10 Tage, minimale Narbe.", s: "S. 14" },
    { f: "Was ist eine verzögerte Primärheilung?",
      o: ["Gleiche Voraussetzungen wie bei Primärheilung, aber wegen Kontaminationsverdacht nicht sofort verschlossen", "Heilung von unten nach oben über Granulationsgewebe", "Eine Primärheilung, die länger als 12 Wochen dauert", "Heilung durch identische Zellen ohne Narbe"],
      e: "Z. B. Schnittverletzung > 6 h alt. Handschriftlich: z. B. ca. 4 Tage offen, dann verschlossen.", s: "S. 14" },
    { f: "Was bedeutet Regeneration?",
      o: ["Ersatz durch identische Zellen, narbenfrei", "Ersatz durch Bindegewebe mit Narbenbildung", "Heilung durch Wundkontraktion", "Ein anderes Wort für Sekundärheilung"],
      e: "Regeneration: identische Zellen, narbenfrei (oberflächliche Epidermis-, Schleimhautverletzungen). Reparatur: Bindegewebe → Narbe.", s: "S. 15" },
    { f: "Ab welcher Temperatur setzt die Zellteilung in der Wunde ein?",
      o: ["Ab ca. 28 °C", "Ab ca. 20 °C", "Ab ca. 37 °C", "Ab ca. 42 °C"],
      e: "Optimal ist ein feucht-warmes Milieu: Zellteilung erst ab 28 °C, Zellen wandern schneller.", s: "S. 15" },
    { f: "Welche Reihenfolge der Wundheilungsphasen ist richtig?",
      o: ["Hämostase → Exsudation → Granulation → Epithelisierung → Remodulierung", "Exsudation → Hämostase → Epithelisierung → Granulation → Remodulierung", "Granulation → Exsudation → Hämostase → Remodulierung → Epithelisierung", "Hämostase → Granulation → Exsudation → Remodulierung → Epithelisierung"],
      e: "1 Hämostase · 2 Exsudation · 3 Granulation · 4 Epithelisierung · 5 Remodulierung. In der Praxis oft 3 Phasen.", s: "S. 16" },
    { f: "Wann ist die Exsudationsphase bei akuten Wunden ungefähr abgeschlossen?",
      o: ["Nach ca. 3 Tagen", "Nach ca. 21 Tagen", "Nach mehreren Monaten", "Nach wenigen Minuten"],
      e: "Exsudation (Reinigung): bis ca. Tag 3; Entzündung (≠ Infektion) mit Makrophagen und Granulozyten.", s: "S. 17" },
    { f: "Welche Phase: Fibroblasten bilden Kollagen, neue Kapillarschleifen entstehen?",
      o: ["Granulationsphase", "Hämostase", "Exsudationsphase", "Remodulierungsphase"],
      e: "Granulation: ab ca. Tag 2 bis 14 Tage; Fibroblasten bilden Kollagen → tiefrotes, gekörntes Granulationsgewebe, Neoangiogenese.", s: "S. 17–18" },
    { f: "In welcher Phase verliert das Granulationsgewebe Gewebewasser?",
      o: ["Epithelisierung", "Granulation", "Hämostase", "Exsudation"],
      e: "Epithelisierung: ab ca. Tag 4 bis 21 Tage; Granulationsgewebe verliert Gewebewasser, Epithelzellen wandern vom Rand ein.", s: "S. 18–19" },
    { f: "Welche Belastbarkeit erreicht eine Narbe nach der Remodulierung maximal?",
      o: ["Ca. 80 % der ursprünglichen Belastbarkeit", "100 %", "Ca. 30 %", "Ca. 120 %"],
      e: "Remodulierung über Monate: Kollagen richtet sich an Zuglinien aus; max. ca. 80 % der ursprünglichen Belastbarkeit.", s: "S. 19–20" },
    { f: "Warum gelten analnahe Wunden nicht als chronisch?",
      o: ["Die Sekundärheilung ist geplant und die Wunden sind gut durchblutet", "Weil sie immer innerhalb von 4 Wochen heilen", "Weil sie nie infiziert sind", "Weil sie primär genäht werden"],
      e: "Analnahe Wunden gelten trotz wochenlanger Heilung nicht als chronisch (geplante Sekundärheilung, gut durchblutet).", s: "S. 15" },
    { f: "Wie wird ein großes Serom behandelt?",
      o: ["Steril abpunktieren und leichter Kompressionsverband", "Immer operativ ausräumen", "Abwarten, bis es von selbst aufbricht", "Mit Zinkpaste abdecken"],
      e: "Kleine Serome werden resorbiert; größere steril abpunktieren + leichter Kompressionsverband; infiziert → wie Abszess.", s: "S. 21" },
    { f: "Was trifft auf ein Transsudat zu?",
      o: ["Nicht entzündlich, klar, zell- und eiweißarm", "Entzündlich bedingt, eitrig", "Blutig durch Kapillarverletzung", "Zähflüssig mit hohem Eiweißanteil"],
      e: "Transsudat = nicht entzündlich (klar, zell- und eiweißarm, z. B. Ödem); Exsudat = entzündlich bedingt.", s: "S. 21" },
    { f: "Wie wird eine Wundrandnekrose behandelt?",
      o: ["Trocken halten und die Demarkation abwarten", "Sofort feucht einweichen und abtragen", "Mit Kompression behandeln", "Mit Hydrokolloid luftdicht verschließen"],
      e: "Wundrandnekrose (mangelhafte Durchblutung der Ränder): trocken halten, Demarkation abwarten.", s: "S. 22" },
    { f: "Was ist die häufigste Komplikation nach einer Bauch-OP?",
      o: ["Narbenhernie", "Platzbauch", "Keloid", "Narbenkarzinom"],
      e: "Narbenhernie: Sonderform der Dehiszenz, häufigste Komplikation nach Bauch-OP, Haut intakt. Platzbauch = vollständige Dehiszenz mit freiliegenden Eingeweiden.", s: "S. 22–23" },
    { f: "Welches Merkmal unterscheidet ein Keloid von einer hypertrophen Narbe?",
      o: ["Es wächst über die ursprüngliche Verletzung hinaus und bildet sich nicht zurück", "Es tritt innerhalb von 6 Monaten auf und bildet sich häufig zurück", "Es ist bösartig", "Es kommt sehr häufig vor"],
      e: "Keloid: selten, > 6 Monate nach Verletzung, wächst über die Verletzung hinaus, keine Rückbildung. Hypertrophe Narbe: häufig, < 6 Monate, bleibt auf die Verletzung beschränkt.", s: "S. 23" },
    { f: "Welcher Tumor entsteht bei einem Narbenkarzinom meist?",
      o: ["Plattenepithelkarzinom", "Basalzellkarzinom", "Melanom", "Angiosarkom"],
      e: "Narbenkarzinom: selten, v. a. auf Brandnarben; meist Plattenepithelkarzinom. Risiko nach Brandverletzung 1–2 %.", s: "S. 24" },
    { f: "Was ist eine Wunddehiszenz?",
      o: ["Sekundäres Auseinanderweichen genähter Wundränder", "Ansammlung von Serum in einem Wundhohlraum", "Überschießende Narbenbildung", "Blutgefüllter Hohlraum nach mangelhafter Blutstillung"],
      e: "Wunddehiszenz: sekundäres Auseinanderweichen genähter Wundränder; Sonderformen Narbenhernie und Platzbauch.", s: "S. 22–23" }
  ],

  zusammenfassung: `
<h3>1. Wunde – Definition und Einteilung <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 3</span></h3>
<p class="merke"><b>Wunde</b> = Unterbrechung des Zusammenhangs von Körpergeweben mit oder ohne Substanzverlust (Pfitzmann 2020).</p>
<ul>
  <li>Wunden sind oft, aber nicht zwangsläufig mit Gewebeverlust und Funktionseinschränkung verbunden.</li>
  <li>Einteilungskriterien: Entstehungshergang · Entstehungsart · Heilungsdauer · Keimbesiedelung (Kolonisationsgrad) · Art und Tiefe der Gewebeschädigung.</li>
</ul>

<h3>2. Entstehungshergang <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 3–9</span></h3>
<ul>
  <li>Vier Ursachen: mechanisch, thermisch, chemisch, strahlenbedingt.</li>
  <li><b>Mechanische Wunden</b> = Folge von Gewalteinwirkung: Schnitt-, Stich-, Quetsch-, Riss-, Platz-, Schürf-, Kratz- und Bisswunden, Blasen, Ablederungen, Amputationen, Schuss- und Pfählungsverletzungen. <span class="hand-inline">Die Detailtabelle (S. 4–5) ist handschriftlich als „kein Prüfungsstoff“ markiert.</span> Merkpunkte: Stichwunden neigen zur Infektion (Keimverschleppung in die Tiefe); Bisswunden – kleine Einstiche, große Kavernen, Keimübertragung; Schürfwunde – nur Epidermis, punktförmige Blutungen aus dem Stratum papillare, sehr schmerzhaft.</li>
  <li><b>Thermische Wunden:</b> Verbrennungen/Verbrühungen, Erfrierungen, Stromverletzungen (S. 6).</li>
</ul>
<div class="tabelle"><table>
  <caption>Schweregrade von Verbrennungen (S. 6)</caption>
  <thead><tr><th>Grad</th><th>Schicht</th><th>Merkmale</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Epidermis</td><td>Rötung (Erythem), starke Schmerzen, Heilung spontan ohne Narbe (z. B. Sonnenbrand)</td></tr>
    <tr><td>2a</td><td>oberflächliche Dermis</td><td>Blasen, Haare fest verankert, Wundgrund rosig und rekapillarisierend, starke Schmerzen; Heilung meist spontan innerhalb von 14 Tagen</td></tr>
    <tr><td>2b</td><td>tiefe Dermis mit Hautanhangsgebilden</td><td>Blasen, Haare leicht zu entfernen, Wundgrund blasser, kaum rekapillarisierend, reduziertes Schmerzempfinden</td></tr>
    <tr><td>3</td><td>komplette Dermis</td><td>trockener, weißer, lederartig harter Wundgrund, keine Haare, keine Schmerzen, Nekrosen – oft operative Entfernung</td></tr>
    <tr><td>4</td><td>Subcutis, Faszie, Muskel, Knochen</td><td>Verkohlung; Operation unerlässlich</td></tr>
  </tbody>
</table></div>
<p class="warnung">Verbrennungsschock (hypovolämisch): bei 2.–3.-gradiger Verbrennung ab 10 % KOF bei Erwachsenen, ab 5 % bei Kindern (S. 7).</p>
<p class="hand">Kein Prüfungsstoff: Stromverletzungen (Nieder- &lt; 1000 V, Hochspannung &gt; 1000 V, Blitzschlag mit Blitzfiguren) und Erfrierungen (Grad 1 Congelatio erythematosa, 2 bullosa, 3 gangraenosa; gefährdet sind Akren; Nässegangrän auch über 0 °C möglich) (S. 7–8).</p>
<ul>
  <li><b>Chemische Wunden (S. 8):</b> Verätzung durch Säuren oder Laugen; Laugen sind schwerwiegender als Säuren.</li>
</ul>
<div class="tabelle"><table>
  <caption>Säure- vs. Laugenverätzung (S. 8)</caption>
  <thead><tr><th></th><th>Säure</th><th>Lauge</th></tr></thead>
  <tbody>
    <tr><td>Nekroseform</td><td>Koagulationsnekrose (Gerinnungsnekrose)</td><td>Kolliquationsnekrose (Verflüssigungsnekrose)</td></tr>
    <tr><td>Wundbild</td><td>fester, trockener Schorf; scharf begrenzt</td><td>glasige, weiche, schleimige, unscharf begrenzte Wunde mit dunkelbraunem Grund</td></tr>
    <tr><td>Beispiele</td><td>Fluss-, Salpeter-, Salz-, Schwefelsäure</td><td>Phenol, weißer Phosphor, heißer Teer, Bitumen (lt. Heft)</td></tr>
  </tbody>
</table></div>
<p class="hand">Auf Eigenschutz achten; Kleidung über der Verletzung ausziehen, nicht verteilen.</p>
<ul>
  <li><b>Strahlenbedingte Wunden (S. 9):</b> ionisierende Wirkung; zuerst das Stratum basale betroffen (hohe Mitoserate). Früh: akuter Strahlenschaden; spät: Gefäßveränderungen, Fibrose, Strahlenulzera – maligne Transformation (Plattenepithelkarzinom) nach 4–40 Jahren möglich. 4 Schweregrade; Behandlung wie bei Verbrennungen.</li>
</ul>

<h3>3. Entstehungsart und Heilungsdauer <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 9–13</span></h3>
<ul>
  <li><b>Traumatisch</b> – äußere Gewalteinwirkung (Schnitt, Biss, Platzwunde).</li>
  <li><b>Iatrogen</b> – durch ärztliche/therapeutische Maßnahmen (Inzision, Punktion, Laser, Spalthautentnahme, Amputation); Grundsatz „Vulnerando sanamus“ – Heilen durch Verletzen.</li>
  <li><b>Chronisch</b> – keine Heilungstendenz innerhalb von 4–12 Wochen unter fachgerechter Therapie; oft Symptom einer Grunderkrankung (pAVK, CVI, Diabetes).</li>
  <li><b>Akut:</b> Wundheilungsphasen regelrecht durchlaufen, Heilung innerhalb von 4 Wochen. Chronische Wunden entstehen meist nicht auf gesunder Haut; WHS: kein geordneter, zeitgerechter Ablauf. Hard-to-heal: Ulcera &gt; 6 cm², älter als 6 Monate (S. 11–13).</li>
</ul>

<h3>4. Kolonisationsgrad <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 10–11</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Grad</th><th>Merkmale</th></tr></thead>
  <tbody>
    <tr><td>aseptisch</td><td>fast keimfrei, keine Entzündungszeichen; z. B. OP-Wunden oder frische Verletzungen (&lt; 4–6 h), primär verschlossen</td></tr>
    <tr><td>kontaminiert</td><td>Keime vorhanden, vermehren sich aber nicht; keine Entzündungszeichen</td></tr>
    <tr><td>kolonisiert</td><td>vermehrungsfähige Keime, Heilung nicht nachhaltig gestört; von „kontaminiert“ nur mikrobiologisch unterscheidbar</td></tr>
    <tr><td>kritisch kolonisiert</td><td>erhöhte Besiedlung; infektgefährdet, Übergang auf den Körper droht</td></tr>
    <tr><td>lokal infiziert</td><td>bakterielles Wachstum mit immunologischer Reaktion, Erreger in Wunde und naher Umgebung</td></tr>
    <tr><td>systemisch infiziert</td><td>Ausbreitung über den Blutkreislauf (Sepsis)</td></tr>
  </tbody>
</table></div>
<p class="merke">Keine Wunde ist steril.</p>
<ul>
  <li><b>Klassische Entzündungszeichen ★:</b> Rötung (rubor) · Schwellung (tumor) · Überwärmung (calor) · Schmerz (dolor) · Funktionseinschränkung (functio laesa).</li>
  <li><b>Weitere Infektionszeichen</b> (Lösung Übung I, S. 25): eitrige Beläge, viel Exsudat, unangenehmer Geruch, zähes Exsudat, blutendes, bröckeliges Granulationsgewebe, stagnierende Heilung, Wundvergrößerung, Hypergranulation, geschwollene Lymphknoten, Wundaufbruch.</li>
</ul>

<h3>5. Tiefe und Ausdehnung <span class="seite">S. 12–13</span></h3>
<ul>
  <li><b>Geschlossene Wunden:</b> unter intakter Haut (Distorsion, Luxation, geschlossene Fraktur, Muskel-/Sehnenriss); außen nur Hämatom und Schwellung sichtbar, oft sehr schmerzhaft.</li>
  <li><b>Offene Wunden:</b> oberflächlich (nur Epidermis, heilt narbenfrei; Erosion, Exkoriation) · perforierend (alle Hautschichten; Messerstich, Ablederung, Verätzung) · kompliziert (zusätzlich Gefäße, Nerven, ggf. Organe; offene Fraktur, traumatische Amputation).</li>
</ul>

<h3>6. Arten und Mechanismen der Wundheilung <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 13–16</span></h3>
<p class="merke"><b>Wundheilung</b> = „physiologische Vorgänge zur Regeneration zerstörten Gewebes, die insbesondere durch Neubildung von Bindegewebe und Kapillaren den Verschluss einer Wunde bewirken“ (Pfitzmann 2020). Ziel: Wunde verschließen, Verlust von Blut, Lymphe und Wärme vermeiden, Austrocknung und äußere Einflüsse verhindern.</p>
<ul>
  <li>Optimal ist ein feucht-warmes Milieu: Zellteilung erst ab 28 °C, Zellen wandern schneller (S. 15).</li>
  <li>Analnahe Wunden gelten trotz wochenlanger Heilung nicht als chronisch (geplante Sekundärheilung, gut durchblutet); Wundumgebung vor Überfeuchtung schützen (S. 15).</li>
</ul>
<div class="tabelle"><table>
  <caption>Primäre vs. sekundäre Wundheilung (S. 14)</caption>
  <thead><tr><th></th><th>Primäre Wundheilung</th><th>Sekundäre Wundheilung</th></tr></thead>
  <tbody>
    <tr><td>Wann</td><td>aseptische OP-Wunden, frische aseptische Verletzungen (&lt; 6 h)</td><td>infektionsgefährdete, infizierte, großflächige Wunden (Verbrennung, Dekubitus, Ulcus cruris)</td></tr>
    <tr><td>Wundränder</td><td>glatt, liegen dicht aneinander bzw. adaptiert</td><td>nicht adaptiert</td></tr>
    <tr><td>Verlauf</td><td>6–10 Tage, minimale Narbe</td><td>Schicht um Schicht von unten nach oben und außen nach innen; Granulationsgewebe → großflächige Narbe, ggf. Bewegungseinschränkung; länger, höheres Infektionsrisiko</td></tr>
  </tbody>
</table></div>
<p><b>Verzögerte Primärheilung:</b> gleiche Voraussetzungen, aber wegen Kontaminationsverdacht nicht sofort verschlossen (z. B. Schnittverletzung &gt; 6 h alt). <span class="hand-inline">Handschriftlich: z. B. ca. 4 Tage offen, dann verschlossen.</span></p>
<div class="tabelle"><table>
  <caption>Reparatur vs. Regeneration (S. 15)</caption>
  <thead><tr><th></th><th>Reparatur</th><th>Regeneration</th></tr></thead>
  <tbody>
    <tr><td>Ersatz</td><td>durch Bindegewebe → Narbe</td><td>durch identische Zellen, narbenfrei</td></tr>
    <tr><td>Vorkommen</td><td>Primärheilung, verzögerte Primärheilung, sekundäre Heilung (die meisten Wunden)</td><td>oberflächliche Verletzungen (nur Epidermis, Basalzellen erhalten), Schleimhautverletzungen</td></tr>
  </tbody>
</table></div>
<p>Narben sind faserreiches, qualitativ weniger hochwertiges Reparaturgewebe mit paralleler Kollagenanordnung – weniger elastisch, ohne Talg- und Schweißdrüsen (S. 16).</p>

<h3>7. Phasen der Wundheilung <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 16–20</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Phase</th><th>Zeit (akute Wunde)</th><th>Vorgänge</th></tr></thead>
  <tbody>
    <tr><td>1 Hämostase</td><td>sofort</td><td>Kapillaren ziehen sich zusammen, Vasokonstriktion; Thrombozyten + Erythrozyten → Thrombus verschließt die Wunde; Grundlage für Reparatur</td></tr>
    <tr><td>2 Exsudation (Reinigung)</td><td>bis ca. Tag 3</td><td>starke Exsudation; Entzündung (≠ Infektion) mit Makrophagen und Granulozyten; Abwehr, Abtransport von Zelltrümmern; Fibroblasten angelockt, Neoangiogenese eingeleitet</td></tr>
    <tr><td>3 Granulation (Proliferation)</td><td>ab ca. Tag 2, bis 14 Tage</td><td>Fibroblasten bilden Kollagen → gefäßreiches Granulationsgewebe (tiefrot, gekörnt, feucht glänzend); neue Kapillarschleifen; Wundkontraktion; Exsudat nimmt ab; Epithelisierung beginnt</td></tr>
    <tr><td>4 Epithelisierung</td><td>ab ca. Tag 4, bis 21 Tage</td><td>Granulationsgewebe verliert Gewebewasser; Epithelzellen wandern vom Rand ein („Überhäutung“); Kollagenfasern reifen; erstes Narbengewebe; Keratinbildung</td></tr>
    <tr><td>5 Remodulierung (Reifung, Maturation)</td><td>mehrere Monate</td><td>Narbengewebe: Kollagen richtet sich an Zuglinien aus, Kapillaren bilden sich zurück, Narbe schrumpft und verblasst; max. ca. 80 % der ursprünglichen Belastbarkeit</td></tr>
  </tbody>
</table></div>
<p>Die Phasen überlappen. In der Praxis oft 3 Phasen: Exsudation, Granulation, Epithelisierung. Bei immungeschwächten Menschen ist die Entzündung abgeschwächt oder verzögert → Infektionsrisiko, Heilungsstillstand. Chronische Wunden: Wochen bis Jahre.</p>
<p class="merke"><b>Übung II (Lösung S. 25):</b> Hämostase → Blut und Plasma füllen Wundspalt · Exsudation → Beginn der Wundreinigung · Granulation → Bildung neuer Kapillarschleifen · Epithelisierung → Granulationsgewebe verliert Gewebewasser · Remodulierung → Entstehung von Narbengewebe.</p>

<h3>8. Wundheilungsstörungen <span class="seite">S. 21–24</span></h3>
<ul>
  <li>Ursachen: lokal (Fremdkörper, Infektion, Naht- und Spannungsprobleme) und allgemein (Alter, Ernährung, Stoffwechselstörungen).</li>
  <li>Komplikationen: Serom · Wundhämatom · Wundrandnekrose · Wundinfektion · Wunddehiszenz · Fremdkörperreaktion · hypertrophe Narbe und Keloid · Narbenkarzinom.</li>
  <li><b>Serom:</b> Ansammlung von serösem Exsudat (Lymphe, Serum) in Wundhohlräumen, meist postoperativ bei eröffneten Lymphbahnen. Kleine werden resorbiert; größere steril abpunktieren + leichter Kompressionsverband; infiziert → wie Abszess behandeln. Transsudat = nicht entzündlich (klar, zell- und eiweißarm); Exsudat = entzündlich bedingt.</li>
  <li><b>Wundhämatom:</b> blutgefüllter Hohlraum durch mangelhafte Blutstillung, unzureichende oder zu früh entfernte Drainage, Antikoagulanzien; Infektionsgefahr (Nährboden) → größere operativ ausräumen.</li>
  <li><b>Wundrandnekrose:</b> mangelhaft durchblutete Wundränder (Naht, Trauma, Schnittführung) – blass/zyanotisch, dann braun-nekrotisch; trocken halten, Demarkation abwarten.</li>
  <li><b>Wundinfektion:</b> häufigste Komplikation; postoperativ oberflächlich (Haut, Subcutis), tief (Muskeln, Faszien) oder Organ/Körperhöhle; Gefahr der Sepsis.</li>
  <li><b>Wunddehiszenz:</b> sekundäres Auseinanderweichen genähter Wundränder. Sonderform Narbenhernie (häufigste Komplikation nach Bauch-OP, meist im 1. Jahr, Haut intakt); vollständige Dehiszenz mit freiliegenden Eingeweiden = Platzbauch.</li>
</ul>
<div class="tabelle"><table>
  <caption>Hypertrophe Narbe vs. Keloid (S. 23)</caption>
  <thead><tr><th>Merkmal</th><th>Hypertrophe Narbe</th><th>Keloid</th></tr></thead>
  <tbody>
    <tr><td>Inzidenz</td><td>häufig</td><td>selten, steigt mit Hautpigmentierung</td></tr>
    <tr><td>Auftreten</td><td>&lt; 6 Monate nach Verletzung</td><td>&gt; 6 Monate nach Verletzung</td></tr>
    <tr><td>Ausdehnung</td><td>auf ursprüngliche Verletzung beschränkt</td><td>wächst über die Verletzung hinaus</td></tr>
    <tr><td>Rückbildung</td><td>häufig</td><td>nicht</td></tr>
    <tr><td>Ursache</td><td>vorausgegangene Verletzung</td><td>Verletzung, oft unbemerkte „Minimaltraumata“ (Follikulitis, Insektenstich)</td></tr>
  </tbody>
</table></div>
<p>Beide sind gutartig; Behandlung bei Juckreiz, Schmerz, Funktionseinschränkung oder ästhetischer Belastung (S. 24).</p>
<ul>
  <li><b>Narbenkarzinom (S. 24):</b> selten; auf dem Boden chronischer Irritation (instabile Narbe, Fistel, Ulcera, Radiodermatitis), v. a. Brandnarben; meist Plattenepithelkarzinom. Risiko nach Brandverletzung 1–2 %, Unterschenkel 0,8 %. Der Begriff „Marjolin-Ulkus“ wird dafür fälschlicherweise verwendet. Therapie: weite Exzision, plastische Deckung, ggf. Amputation.</li>
</ul>
<p class="hand">Nur handschriftlich (S. 25), nicht im Drucktext: gelbes Exsudat = unauffällig; grünes Exsudat → Pseudomonas (Wundinfektion). Wunddokumentation: Wundart, -umgebung, -grund, -rand, Größe (Länge/Breite), Entzündungszeichen, Geruch; Evaluation alle 7 Tage oder bei Veränderung.</p>
`
});
