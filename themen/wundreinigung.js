/*
 * Thema: Wundreinigung und Débridement
 * Quelle: murimed-Lernheft Wundreinigung und Débridement, Modul II
 * (Seitenangaben beziehen sich auf die gedruckten Heftseiten).
 * Inhalte übernommen aus "Zusammenfassung_Wundreinigung_Debridement.pdf" und
 * "Lernkarten_Wundreinigung_Debridement.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "wundreinigung",
  titel: "Wundreinigung und Débridement",
  kurz: "Wundreinigung",
  quelle: "murimed-Lernheft Wundreinigung und Débridement (Modul II)",
  hinweis:
    "Quelle ist ausschließlich das Lernheft; Seitenzahlen in Klammern (gedruckte Heftseiten). ★ = im Heft handschriftlich als „Prüfung“ bzw. „Prüfungsfrage“ markiert. Handschriftliche Notizen sind als solche gekennzeichnet und nicht geprüft. Grundlage im Heft: DGfW-Leitlinie „Lokaltherapie chronischer Wunden“ (2012); Primärquellen wurden nicht separat geprüft.",

  karten: [
    { k: "Grundlagen", f: "Unterschied Wundreinigung und Débridement? ★",
      a: "Beide tragen avitales Gewebe, Nekrosen, Beläge, Fremdkörper ab. Wundreinigung: oberflächlich, nur bis an intakte anatomische Strukturen, Granulation bleibt erhalten.\nDébridement: radikal bis in intakte Strukturen; nur durch Ärzt:innen.", s: "S. 2, 28" },
    { k: "Grundlagen", f: "Wie definiert die DGfW die Wundreinigung?",
      a: "„Abtragung von avitalem Gewebe, Nekrosen, Belägen und/oder Entfernung von Fremdkörpern bis an intakte anatomische Strukturen heran unter Erhalt von Granulationsgewebe.“ (DGfW 2012)", s: "S. 6" },
    { k: "Grundlagen", f: "Wie definiert die DGfW das (chirurgische) Débridement?",
      a: "„Radikale Abtragung von avitalem Gewebe, Nekrosen, Belägen und/oder Entfernung von Fremdkörpern mit Skalpell, Shaver, Ringkürette oder mittels Wasserdruck bis in intakte anatomische Strukturen.“", s: "S. 23" },
    { k: "Grundlagen", f: "Welche Voraussetzung gilt vor Wundreinigung und Débridement?",
      a: "Erst nach einer Aufklärung und ausschließlich mit dem darauf basierenden Einverständnis der betroffenen Person.", s: "S. 4, 24" },
    { k: "Indikation", f: "Was erschwert die Beurteilung der Wunde?",
      a: "Nekrosen, Fibrinbeläge, Biofilm, Detritus (breiige Masse aus zerfallenen Zellen), Fremdkörper, Abfallstoffe, Verbandrückstände, überschüssiges Exsudat, avitales und schlecht heilendes Gewebe.", s: "S. 3" },
    { k: "Indikation", f: "Wovon hängt die Wahl der Reinigungsmethode ab?",
      a: "Schmerzempfinden und Lebenssituation der Person, Kenntnisse/Fähigkeiten der Anwender, vorhandene Materialien, Grunderkrankung bzw. Wundursache, Art und Ursache des Belags.", s: "S. 3" },
    { k: "Störfaktoren", f: "Was ist eine Nekrose – trocken vs. feucht?",
      a: "Durch eine Noxe (z. B. Hypoxie, Strahlung) induzierter Zelltod. Trocken: dunkelbraun–schwarz, hart, lederartig, abgegrenzt. Feucht: grau-gelb, weich, faserig/schmierige Beläge.", s: "S. 3, 27" },
    { k: "Störfaktoren", f: "Trockene Nekrose bei pAVK – was gilt? ★",
      a: "Erst nach erfolgreicher Revaskularisation (Bypass, Dilatation) oder zur Entlastung akuter Infektion entfernen. Auf keinen Fall anweichen – nur trockene Verbandwechsel. Handschr. (Prüfungsfrage): Rehydrieren → feuchte Gangrän, Sepsis.", s: "S. 3–5", h: true },
    { k: "Störfaktoren", f: "Warum sind Nekrosen und Fibrinbeläge Störfaktoren? (Übung I)",
      a: "Nekrosen fördern Bakterienwachstum, unterbinden Granulation, verhindern Beobachtung des Wundgrunds (Infektion, Unterminierung unerkannt). Fibrin ist physiologisch Wundverschluss und Gerüst, bei chronischen Wunden aber übermäßig → hemmt Heilung.", s: "S. 27" },
    { k: "Störfaktoren", f: "Fibrinbelag vs. Eiter?",
      a: "Fibrin = wasserunlösliches Proteinpolymer, Endprodukt der Gerinnung; lässt sich nicht abwischen oder abspülen → muss entfernt werden. Eiter dagegen ist abwischbar (handschr.: leicht abwischbar, Wundabstrich).", s: "S. 4–5", h: true },
    { k: "Störfaktoren", f: "Was ist Biofilm und wie entfernt man ihn?",
      a: "Gemeinschaft aus Bakterien, Pilzen, Protozoen in schleimiger EPS-Matrix (Polysaccharide, DNA, Proteine), Quorum sensing. Wundgrund glänzend, gelartig; Nachweis nur mikroskopisch. Am erfolgreichsten: mechanisch (chirurgisches Débridement, Ultraschall).", s: "S. 4" },
    { k: "Handschriftlich", f: "Merkpunkte aus den Notizen?",
      a: "Granulationsgewebe gesund = dunkelrot · Biofilm: glänzend, gelartig, wenig Exsudat, Wunde stagniert · „Prontosan: 20 Min Einwirkzeit“ · Wundabstrich: „Essener Kreisel, Levine-Technik (Prüfungsfrage)“ · Leitungswasser-Ausduschen nur mit Filter.", s: "S. 4–5, 10", h: true },
    { k: "Wundreinigung", f: "Pro-Argumente für eine Wundreinigung? (Übung II)",
      a: "Entzündungsrisiko ↓, Lösen von avitalem Gewebe, Belägen, Exsudat, Mikroorganismen, Biofilm, Verbandresten, Fremdkörpern; bessere Wundkontraktion und Beurteilbarkeit (Taschen, Abszesse sichtbar); weniger Geruch; Lebensqualität ↑.", s: "S. 6, 28" },
    { k: "Wundreinigung", f: "Was spricht gegen eine Wundreinigung? ★",
      a: "Häufig schmerzhaft (Schmerzgedächtnis → Schmerztherapie), Materialkosten, erhöhte Personalkosten durch längere Behandlungszeit, keine eindeutige Auswirkung auf den Endpunkt „Wundheilung“.", s: "S. 6, 28; handschr. Prüfung S. 17" },
    { k: "Wundreinigung", f: "Welche drei Verfahren der Wundreinigung gibt es?",
      a: "APW – aktive periodische Wundreinigung (mechanisch beim Verbandwechsel)\nDekontamination – antiseptisch + mechanisch\nPPW – passive periodische Wundreinigung (unter dem Verband).", s: "S. 7" },
    { k: "APW", f: "Was ist die aktive periodische Wundreinigung (APW)? ★",
      a: "Ziel: vollständiges Lösen, Entfernen, Ausschwemmen bis an gesundes Gewebe. Handschr. Prüfung: gezielte, wiederkehrende mechanische Wundreinigung im Rahmen des Verbandwechsels. Mittel: Auswischen, Spülen, angefeuchtete Kompressen.", s: "S. 6–7", h: true },
    { k: "APW", f: "Welche Methode eignet sich am ehesten zur Wundreinigung?",
      a: "Die regelmäßige mechanische Wundreinigung mit sterilen Mull- oder Vlieskompressen in Kombination mit einer Spülung – mechanisch + ausspülend, kostengünstig, einfach. (DGfW 2012)", s: "S. 8" },
    { k: "APW", f: "Hygiene und Schonung bei der mechanischen Wundreinigung?",
      a: "Steril (ambulant keimarm), Non-Touch-Technik. Jede Reinigung reizt das Gewebe → in Granulations-/Epithelisierungsphase möglichst nicht spülen. Schonende Alternative: angefeuchtete Kompressen wiederholt auflegen. Schmerztherapie!", s: "S. 8" },
    { k: "APW", f: "Wie werden Spüllösungen temperiert?",
      a: "Nicht direkt aus dem Kühlschrank (Auskühlung, Schmerz); auf Körpertemperatur erwärmen (Wärmeschrank, Wasserbad, Hosentasche); keine Mikrowelle (Verbrennung); mindestens Zimmertemperatur 20–24 °C. Mit geringem Druck spülen, Abfluss sichern.", s: "S. 8–9" },
    { k: "APW", f: "Anforderungen an Wundspüllösungen? ★",
      a: "Steril, physiologisch, farblos, nicht reizend, temperierbar, nicht schmerzerzeugend, ohne resorbierbare Inhaltsstoffe.", s: "S. 9; handschr. als Prüfungsfrage markiert" },
    { k: "APW", f: "Kochsalz- vs. Ringerlösung?",
      a: "Beide isoton, nicht konserviert (sofort verbrauchen, Reste verwerfen), nicht zelltoxisch, nicht allergen. NaCl längerfristig → Elektrolytverschiebungen. Ringer enthält zusätzlich Kalium und Calcium → bei längerfristiger Anwendung bevorzugt.", s: "S. 9–10" },
    { k: "APW", f: "Was bedeutet Isotonie?",
      a: "Gleichheit des wirksamen osmotischen Drucks zweier Lösungen an einer Membran; zum Blutplasma isotone Lösungen ca. 290 mosmol/l. Isotone Spüllösungen ca. 270–330 mosmol/l.", s: "S. 9" },
    { k: "APW", f: "Ist Leitungswasser als Spüllösung geeignet?",
      a: "Nein – nicht steril. RKI: „Jede Spülflüssigkeit muss steril sein.“ Leitlinie: kein Konsens; Aufklärung über Vor-/Nachteile, Präferenz erfragen; Infektionsrisiko bei Ischämie/Diabetes höher. Handschr.: Filter, wenn Ausduschen angeordnet.", s: "S. 10", h: true },
    { k: "APW", f: "Warum ist Leitungswasser keimbelastet?",
      a: "Trinkwasserverordnung erlaubt bis 100 Keime/ml (22 °C, 36 °C); in Hausinstallationen (kleinere Leitungen, Wärme, weniger Druck) Keimwachstum; geprüft werden nur E. coli, Enterokokken, Coliforme → Pseudomonaden u. a. nicht ausgeschlossen.", s: "S. 11" },
    { k: "APW", f: "Wasserstoffperoxid und Farbstofflösungen?",
      a: "H₂O₂: Katalase → Aufschäumen; zytotoxisch; mind. 3-fach nachspülen; keine Wundhöhlen/-taschen (Emboliegefahr) → unzeitgemäß.\nFarbstoffe: schwach bakterizid, zytotoxisch, allergisierend, mutagen, verfärben → unzeitgemäß.", s: "S. 12" },
    { k: "APW", f: "Wundspüllösung mit Konservierung = Antiseptikum?",
      a: "Nein. Sind PHMB, Octenidin oder Hypochlorit nur konservierende Zusätze, ist die Lösung ein Medizinprodukt, kein Antiseptikum → keine Indikation bei infizierten Wunden; dort Antiseptika im Rahmen der Dekontamination.", s: "S. 12" },
    { k: "APW", f: "Was kennzeichnet die ultraschall-assistierte Wundreinigung?",
      a: "Mechanisch, niederfrequent bis 25 kHz; Sonotrode, 2–3 Tropfen/s Spülflüssigkeit; Spritzschutz; vitales Gewebe bleibt intakt; ca. 40 °C; Kavitation; besonders bei Durchblutungsstörungen; keine belastbaren Aussagen zu Nutzen/Schaden.", s: "S. 13" },
    { k: "Dekontamination", f: "Was ist Dekontamination?",
      a: "Antiseptische Wundbehandlung + mechanische Reinigung zur Beseitigung lokaler Entzündung durch humanpathogene Keime und Prävention systemischer Infektion; APW mit Antiseptika (Arzneimittel). Erst mechanisch reinigen (Proteine/Biofilm schützen Keime).", s: "S. 13–14" },
    { k: "Dekontamination", f: "Wann ist eine Dekontamination erforderlich?",
      a: "Bei manifester, durch Mikroorganismen bedingter Entzündung und bei auffälligem klinischem Befund (Beläge, Geruch, Wundrandveränderungen) zur Prävention einer Infektion.", s: "S. 14" },
    { k: "Dekontamination", f: "Polihexanid – Eigenschaften?",
      a: "0,02 %/0,04 %; bakterizid, breites Spektrum inkl. MRSA und Pilze; geringe Zytotoxizität, farblos; nicht sporozid, nicht viruzid; nach Anbruch 4–8 Wochen haltbar.", s: "S. 14–15" },
    { k: "Dekontamination", f: "Octenidin – Eigenschaften und Risiken?",
      a: "Breites Spektrum (grampositiv/-negativ inkl. MRSA, Pseudomonas, Pilze, Protozoen, einige Viren); farblos, geringer Eiweißfehler. Höhere Zytotoxizität als PHMB; Gewebeschäden bei Einbringen unter Druck ohne Abfluss (Wundhöhlen).", s: "S. 14–15" },
    { k: "Dekontamination", f: "PVP-Iod – Eigenschaften und Kontraindikationen?",
      a: "Breites Spektrum, bei 2–24 h auch Sporen; Eiweißfehler (Entfärbung = Wirkverlust); zytotoxisch.\nKI: Schilddrüsenerkrankung, Iodallergie, Radioiodtherapie, Schwangerschaft/Stillzeit; inkompatibel u. a. mit H₂O₂, Octenidin, Silbersalzen.", s: "S. 14–15" },
    { k: "Dekontamination", f: "Welches Antiseptikum für welche Wunde?",
      a: "PHMB: kritisch kolonisiert/infektgefährdet, Verbrennungen, postoperativ.\nPVP-Iod: Biss-, Schuss-, Stichwunden.\nOctenidin: mit MRE kolonisiert oder infiziert.", s: "S. 15" },
    { k: "Dekontamination", f: "Wundspüllösung vs. Antiseptikum? ★",
      a: "Spüllösung: reinigt, Medizinprodukt (physikalisch), fortlaufend anwendbar.\nAntiseptikum: tötet Keime, Arzneimittel (pharmakologisch), bei infektgefährdeten/infizierten Wunden, max. 14 Tage, nur oberflächlich.", s: "S. 16, handschr. Prüfungsfrage" },
    { k: "Dekontamination", f: "Welche Lösung für die periodische Wundreinigung?",
      a: "Bevorzugt neutrale, wirkstofffreie Lösungen. Polihexanid, Octenidin, PVP-Iod als zugelassene Antiseptika ausschließlich im Rahmen der Dekontamination bei Verdacht auf erregerbedingte Entzündung.", s: "S. 16" },
    { k: "PPW", f: "Was ist die passive periodische Wundreinigung?",
      a: "Lösung avitalen Gewebes, während die Wunde steril abgedeckt ist → Reinigung unter dem Sekundärverband durch feuchtes Milieu; intaktes Granulationsgewebe wird nicht zerstört; Überleitung in die Granulationsphase.", s: "S. 7, 17" },
    { k: "PPW", f: "Pro und Contra der PPW?",
      a: "Pro: unterstützt Reinigung, seltenere Verbandwechsel, mehr Unabhängigkeit, weniger Aufwand/Schmerz bei APW.\nContra: Schmerzen, Ekel (Larven), Allergie/Unverträglichkeit, Kosten, Kontraindikationen.", s: "S. 17" },
    { k: "PPW", f: "Was ist Autolyse?",
      a: "Abbau von Proteinen und Gewebeeinschmelzung durch zelleigene Enzyme, die beim Zellzerfall frei werden. Polyacrylat, Hydrogel und Enzyme unterstützen die Autolyse – schonender, aber langsamer.", s: "S. 18, 20" },
    { k: "PPW", f: "Wie wirkt die Dauerbefeuchtung mit Polyacrylat?",
      a: "Superabsorber-Kissen, mit Ringer (oder PHMB) aktiviert; nimmt Proteine, Exsudat, Toxine, Zelltrümmer auf und gibt Ringer ab (Saug-Spül-Prozess) → Autolyse; 1–3 Tage auf der Wunde; chronische, infizierte, nekrotische Wunden.", s: "S. 18" },
    { k: "PPW", f: "Was ist bei Hydrogel zu beachten?",
      a: "Bis 95 % Wasser; Autolyse, Rehydrierung; Tube 3 Tage, Gelplatte bis 7 Tage; 0,3–0,5 cm dick; Sekundärverband nach Exsudat. Nicht bei stark nässenden/blutenden Wunden; trockene Nekrosen nicht rehydrieren; bei UCV 8–14 % Sensibilisierung.", s: "S. 18–19" },
    { k: "PPW", f: "Enzymatische Wundreinigung – Wirkstoffe und Nachteile?",
      a: "Streptokinase/Streptodornase, Clostridiopeptidase A (Kollagenase) und B; 2–3 mm dick; nur oberflächliche Nekrosen. Nachteile: Schmerz, Brennen, Mazeration, lange Dauer, hohe Kosten (1–2× tägl. VW).", s: "S. 19–20" },
    { k: "PPW", f: "Wie wirken Fliegenlarven – und wie werden sie angewendet?",
      a: "Lucilia sericata, reine Nekrophagen; extrakorporale Verdauung mit Proteasen; vitales Gewebe geschützt. Bio-Bags oder Freiläufer; 5–8 Larven/cm², Zyklus max. 4–5 Tage; täglicher VW mit NaCl 0,9 %; Wunde frei von Lokaltherapeutika.", s: "S. 20–21" },
    { k: "PPW", f: "Wann keine Fliegenlarven?",
      a: "Blutungsneigung, Nähe großer Gefäße, Verbindung zu Körperhöhlen/Organen, schlechte Durchblutung, Antikoagulation, Pseudomonas (grünes Exsudat; vorher Abstrich), keine Druckentlastung möglich, Ablehnung aus Ekel.", s: "S. 21–22" },
    { k: "PPW", f: "Medizinischer Honig – Wirkung und Empfehlung?",
      a: "pH 3,9 (Glukonsäure); Osmolarität, H₂O₂ (Glukose-Oxidase), Phytochemie; Manuka: Methylglyoxal. Nicht bei freiliegenden Knochen/Gelenken, Allergien. Wegen hoher Schmerzbelastung in der Leitlinie nicht empfohlen.", s: "S. 22–23" },
    { k: "Débridement", f: "Indikationen des chirurgischen Débridements?",
      a: "Lokale Entzündung, vom Wundbereich ausgehende systemische Infektion, großflächige Nekrosen/Beläge; beim diabetischen Fußulcus indiziert (Taschen, Unterminierungen entfernen). Überführt sekundäre in primäre Heilung.", s: "S. 23–24" },
    { k: "Débridement", f: "Wer führt es durch – welche Instrumente?",
      a: "Ausschließlich Ärzt:innen; Lokalanästhesie, Analgosedierung oder Vollnarkose. Skalpell, Shaver, Ringkürette, Wasserdruck. Scharfe Löffel und Scheren ungeeignet (quetschen Gewebe, Keime gelangen tief ein).", s: "S. 23–24" },
    { k: "Débridement", f: "Wann nicht oder nur eingeschränkt?",
      a: "Gerinnungsstörungen/Antikoagulation, starke Schmerzempfindlichkeit, eingeschränkte Narkosefähigkeit, fehlendes qualifiziertes Personal, eingeschränkte Transportfähigkeit, Ablehnung durch die Person.", s: "S. 24" },
    { k: "Prozess", f: "Beschreibe den Prozessablauf.",
      a: "Avitales Gewebe, Nekrosen, Beläge, Fremdkörper? Nein → nichts tun. Ja → Bedingungen für Débridement? Ja → chirurgisch mit Schmerztherapie; nein → Wundreinigung mechanisch, neutrale Lösungen; bei Erregerverdacht Antiseptika max. 14 Tage → erneut prüfen.", s: "S. 26" },
    { k: "Zusammenfassung", f: "Worauf ist bei der Auswahl des Verfahrens zu achten?",
      a: "Ziele und Wünsche der Betroffenen, Wundsituation, Wirtschaftlichkeit, Expertenempfehlungen; besonders Schmerzvermeidung, physiologisch feuchtes Wundmilieu, kein Flüssigkeitsaustritt aus dem Verband. Wichtigste Rolle: der betroffene Mensch.", s: "S. 25" }
  ],

  quiz: [
    { f: "Wer darf ein chirurgisches Débridement durchführen?",
      o: ["Nur Ärzt:innen", "Pflegefachkräfte nach Delegation", "Jede an der Wundversorgung beteiligte Person", "Betroffene nach Anleitung"],
      e: "Wundreinigung: oberflächlich, durch Pflegefachkräfte. Chirurgisches Débridement: radikal, invasiv – nur durch Ärzt:innen.", s: "S. 2, 24" },
    { f: "Welche Instrumente bzw. Mittel nennt die DGfW-Definition des chirurgischen Débridements?",
      o: ["Skalpell, Shaver, Ringkürette oder Wasserdruck", "Scharfer Löffel und Schere", "Hydrogel und Polyacrylat", "Fliegenlarven und Enzyme"],
      e: "„Radikale Abtragung … mit Skalpell, Shaver, Ringkürette oder mittels Wasserdruck“. Scharfe Löffel und Scheren sind ungeeignet (quetschen Gewebe, Keime gelangen tief ins Gewebe).", s: "S. 23–24" },
    { f: "Was ist Voraussetzung für Wundreinigung und Débridement?",
      o: ["Aufklärung und darauf basierendes Einverständnis der betroffenen Person", "Ein vorheriger Wundabstrich", "Eine systemische Antibiotikagabe", "Eine Revaskularisation"],
      e: "Beide erst nach einer Aufklärung und ausschließlich mit dem darauf basierenden Einverständnis der betroffenen Person.", s: "S. 4, 24" },
    { f: "Wie wird eine trockene Nekrose bei pAVK bis zum Débridement versorgt?",
      o: ["Nur trockene Verbandwechsel – auf keinen Fall anweichen", "Mit Hydrogel rehydrieren", "Mit feuchten Kompressen aufweichen", "Mit aktiviertem Polyacrylat-Kissen nass behandeln"],
      e: "Trockene Nekrosen bei pAVK dürfen vor dem Débridement auf keinen Fall angeweicht werden – nur trockene Verbandwechsel (★ Prüfungsfrage).", s: "S. 3–4" },
    { f: "Wann darf eine trockene Nekrose bei pAVK entfernt werden?",
      o: ["Nach erfolgreicher Revaskularisation (Bypass, Dilatation)", "Zur Entlastung akuter Infektionen", "Sofort bei Diagnosestellung, unabhängig von der Durchblutung", "Nachdem sie mit Hydrogel aufgeweicht wurde"], r: 2,
      e: "Erst nach erfolgreicher Revaskularisation (Bypass, Dilatation) oder zur Entlastung akuter Infektionen entfernen; vorher nicht anweichen.", s: "S. 3–4" },
    { f: "Was droht laut handschriftlicher Notiz, wenn trockene Nekrosen aufgeweicht/rehydriert werden?",
      o: ["Feuchte Gangrän und Sepsis", "Schnellere Granulation", "Bessere Durchblutung", "Austrocknung des Wundrands"],
      e: "Handschr. (Prüfungsfrage): trockene Nekrosen niemals aufweichen/rehydrieren → feuchtes Gangrän, Sepsis. Auch beim Hydrogel steht: trockene Nekrosen nicht rehydrieren (feuchte Gangrän).", s: "S. 4–5, 18–19", h: true },
    { f: "Was unterscheidet einen Fibrinbelag von Eiter?",
      o: ["Fibrin lässt sich nicht abwischen oder abspülen, Eiter schon", "Fibrin ist leicht abwischbar, Eiter nicht", "Fibrin ist wasserlöslich und spült sich von selbst aus", "Fibrin kommt nur bei infizierten Wunden vor"],
      e: "Fibrin = Endprodukt der Blutgerinnung, wasserunlösliches Proteinpolymer; lässt sich im Gegensatz zu Eiter nicht abwischen/abspülen → muss entfernt werden.", s: "S. 4" },
    { f: "Wie sieht gesundes Granulationsgewebe laut handschriftlicher Notiz aus?",
      o: ["Dunkelrot", "Grau-gelb und schmierig", "Dunkelbraun bis schwarz", "Blau-grünlich"],
      e: "Handschr.: Granulationsgewebe muss immer dunkelrot sein = gesund. Grau-gelb/schmierig = feuchte Nekrose, dunkelbraun–schwarz = trockene Nekrose.", s: "S. 4–5", h: true },
    { f: "Welche Abstrichtechniken sind in den Notizen als Prüfungsfrage vermerkt?",
      o: ["Essener Kreisel und Levine-Technik", "Non-Touch-Technik und Saug-Spül-Prozess", "Bio-Bags und Freiläufer", "Kavitation und Quorum sensing"],
      e: "Handschr.: Eiter leicht abwischbar, Wundabstrich – „Essener Kreisel, Levine-Technik (Prüfungsfrage)“.", s: "S. 4–5", h: true, sp: ["hygiene: Wundabstrichtechniken"] },
    { f: "Was spricht gegen eine Wundreinigung? ★",
      o: ["Sie ist häufig schmerzhaft", "Keine eindeutige Auswirkung auf den Endpunkt „Wundheilung“", "Sie erhöht das Entzündungsrisiko", "Sie verschlechtert die Beurteilbarkeit der Wunde"], r: 2,
      e: "Contra: häufig schmerzhaft (Schmerzgedächtnis → Schmerztherapie), Material- und Personalkosten, keine eindeutige Auswirkung auf den Endpunkt „Wundheilung“. Entzündungsrisiko ↓ und bessere Beurteilbarkeit sind Pro-Argumente.", s: "S. 6, 17" },
    { f: "In welcher Situation wird die Wundreinigung chronischer Wunden empfohlen?",
      o: ["In der Exsudationsphase", "In der Epithelisierungsphase", "Nach vollständigem Wundverschluss", "Ausschließlich bei frischen Schnittwunden"],
      e: "Bei chronischen Wunden in der Exsudationsphase empfohlen. In Granulations-/Epithelisierungsphase möglichst keine Spülung, sonst sehr schonend.", s: "S. 6, 8" },
    { f: "Was beschreibt die aktive periodische Wundreinigung (APW)? ★",
      o: ["Gezielte, wiederkehrende mechanische Wundreinigung im Rahmen des Verbandwechsels", "Reinigung unter dem Sekundärverband, während die Wunde steril abgedeckt ist", "Radikale Abtragung bis in intakte Strukturen durch Ärzt:innen", "Ausschließlich antiseptische Behandlung ohne mechanische Reinigung"],
      e: "APW: vollständiges Lösen, Entfernen, Ausschwemmen bis an das gesunde Gewebe – gezielte, wiederkehrende mechanische Wundreinigung im Rahmen des Verbandwechsels (Auswischen, Spülen, angefeuchtete Kompressen).", s: "S. 6–7", h: true },
    { f: "Welche Methode ist laut DGfW am ehesten zur wirksamen Wundreinigung geeignet?",
      o: ["Regelmäßige mechanische Reinigung mit sterilen Mull- oder Vlieskompressen in Kombination mit einer Spülung", "Enzymatische Wundreinigung", "Medizinischer Honig", "Spülung mit Wasserstoffperoxid"],
      e: "Mechanisch + ausspülend, kostengünstig, einfach (DGfW 2012).", s: "S. 8" },
    { f: "Wie werden Spüllösungen vor der Anwendung temperiert?",
      o: ["Auf Körpertemperatur erwärmt, mindestens Zimmertemperatur (20–24 °C)", "Direkt aus dem Kühlschrank verwendet", "In der Mikrowelle erwärmt", "Auf etwa 10 °C gekühlt"],
      e: "Nicht direkt aus dem Kühlschrank (Auskühlung, Schmerz); erwärmen z. B. im Wärmeschrank, Wasserbad, in der Hosentasche – keine Mikrowelle (Verbrennungsgefahr).", s: "S. 8–9" },
    { f: "Welche Anforderungen gelten für Wundspüllösungen? ★",
      o: ["Steril und farblos", "Nicht reizend und nicht schmerzerzeugend", "Mit resorbierbaren Inhaltsstoffen", "Gefärbt, damit die Verteilung sichtbar ist"], r: 2,
      e: "Steril, physiologisch, farblos, nicht reizend, temperierbar, nicht schmerzerzeugend, ohne resorbierbare Inhaltsstoffe.", s: "S. 9" },
    { f: "Welche Spüllösung wird bei längerfristiger Anwendung bevorzugt?",
      o: ["Ringerlösung", "Isotone Kochsalzlösung", "Wasserstoffperoxid", "Leitungswasser"],
      e: "Ringer enthält zusätzlich Natrium, Calcium, Kalium und wird längerfristig bevorzugt; NaCl führt bei längerfristiger Anwendung/Dauerbenetzung zu Elektrolytverschiebungen.", s: "S. 9–10" },
    { f: "Warum ist Leitungswasser laut RKI nicht als Spüllösung geeignet?",
      o: ["Es ist nicht steril – jede Spülflüssigkeit muss steril sein", "Es ist zu teuer", "Es ist zytotoxisch", "Es ist nicht verfügbar"],
      e: "RKI: „Jede Spülflüssigkeit muss steril sein. Leitungswasser ist nicht frei von Mikroorganismen.“ Leitlinie: kein Konsens; Aufklärung und Präferenz erfragen.", s: "S. 10" },
    { f: "Was gilt für Wasserstoffperoxid (H₂O₂)?",
      o: ["Kein Spülen von Wundhöhlen/-taschen – Emboliegefahr", "Mit mindestens 3-facher Menge NaCl/Ringer nachspülen", "Für Fibroblasten und Keratinozyten unbedenklich", "Bevorzugte Lösung der periodischen Wundreinigung"], r: 2,
      e: "Katalase spaltet H₂O₂ → Aufschäumen; zytotoxisch für Fibroblasten/Keratinozyten → unzeitgemäß. Mind. 3-fach nachspülen, keine Wundhöhlen/-taschen (Emboliegefahr).", s: "S. 12" },
    { f: "Eine Wundspüllösung enthält Polihexanid nur als konservierenden Zusatz. Was gilt?",
      o: ["Sie ist ein Medizinprodukt, kein Antiseptikum – keine Anwendung bei infizierten Wunden", "Sie ist ein Antiseptikum für infizierte Wunden", "Sie ist als Arzneimittel zugelassen", "Sie wirkt pharmakologisch keimabtötend"],
      e: "Nur konservierende Zusätze → Medizinprodukt (Wundspüllösung), kein Antiseptikum. Bei infizierten Wunden: Wundantiseptika im Rahmen der Dekontamination.", s: "S. 12" },
    { f: "Warum wird bei der Dekontamination zuerst mechanisch gereinigt? ★",
      o: ["Proteine und Biofilme schützen die Mikroorganismen vor dem Antiseptikum", "Antiseptika wirken nur auf trockenen Wunden", "Damit das Antiseptikum schneller verdunstet", "Weil Antiseptika das Granulationsgewebe färben"],
      e: "Proteine und Biofilme schützen Mikroorganismen → zuerst mechanisch reinigen, dann Antiseptikum (oder Reinigung mit Antiseptikum).", s: "S. 14" },
    { f: "Welches Antiseptikum ist laut Heft bei Biss-, Schuss- und Stichwunden vorgesehen?",
      o: ["PVP-Iod", "Polihexanid", "Octenidin", "Ringerlösung"],
      e: "PHMB: kritisch kolonisiert/infektgefährdet, Verbrennungen, postoperativ · PVP-Iod: Biss-, Schuss-, Stichwunden · Octenidin: mit MRE kolonisiert oder infiziert.", s: "S. 15" },
    { f: "Welches Antiseptikum ist laut Heft bei mit MRE kolonisierten oder infizierten Wunden vorgesehen?",
      o: ["Octenidin", "PVP-Iod", "Wasserstoffperoxid", "Ethacridinlactat"],
      e: "Octenidin: mit MRE kolonisiert oder infiziert. H₂O₂ und Farbstofflösungen (Ethacridinlactat) gelten als unzeitgemäß.", s: "S. 12, 15" },
    { f: "Welche ist eine Kontraindikation für PVP-Iod?",
      o: ["Radioiodtherapie", "Bisswunde", "Schusswunde", "Stichwunde"],
      e: "KI PVP-Iod: Schilddrüsenerkrankung, Iodallergie, Radioiodtherapie, Schwangerschaft/Stillzeit. Biss-, Schuss-, Stichwunden sind die Indikation.", s: "S. 14–15" },
    { f: "Welche Eigenschaften hat Polihexanid (PHMB)?",
      o: ["Breites Spektrum inkl. MRSA, geringe Zytotoxizität, farblos", "Sporozid und viruzid", "Braune Färbung mit Eiweißfehler", "Nach Anbruch unbegrenzt haltbar"],
      e: "PHMB 0,02 %/0,04 %: breites Spektrum (inkl. MRSA, Pilze), geringe Zytotoxizität, farblos; nicht sporozid, nicht viruzid; nach Anbruch 4–8 Wochen haltbar. Braune Farbe/Eiweißfehler = PVP-Iod.", s: "S. 14–15" },
    { f: "Wie lange dürfen Antiseptika angewendet werden? ★",
      o: ["Begrenzt, bis die Infektzeichen beseitigt sind – max. 14 Tage", "Fortlaufend ohne zeitliche Begrenzung", "Mindestens 6 Wochen", "Nur einmalig beim ersten Verbandwechsel"],
      e: "Antiseptika: begrenzt, bis Infektzeichen beseitigt – max. 14 Tage. Wundspüllösungen: fortlaufend möglich.", s: "S. 16" },
    { f: "Wie sind Wundspüllösungen und Antiseptika zugelassen? ★",
      o: ["Spüllösung: Medizinprodukt (physikalisch) – Antiseptikum: Arzneimittel (pharmakologisch)", "Spüllösung: Arzneimittel – Antiseptikum: Medizinprodukt", "Beide als Arzneimittel", "Beide als Medizinprodukt"],
      e: "Wundspüllösungen europaweit als Medizinprodukt (physikalisch); Antiseptika national als Arzneimittel (pharmakologisch).", s: "S. 16" },
    { f: "Wie lange verbleibt ein aktiviertes Polyacrylat-Kissen auf der Wunde?",
      o: ["1–3 Tage", "Bis 7 Tage", "Bis 14 Tage", "Nur 20 Minuten"],
      e: "Polyacrylat (Nasstherapie): Superabsorber-Kissen, mit Ringer (oder PHMB) aktiviert, Saug-Spül-Prozess → Autolyse; 1–3 Tage. Bis 7 Tage gilt für die Hydrogel-Gelplatte.", s: "S. 18" },
    { f: "Wann ist Hydrogel nicht geeignet?",
      o: ["Bei stark nässenden oder blutenden Wunden", "Zur Rehydrierung trockener, schmerzhafter Wunden", "Zur Unterstützung der Autolyse", "Beim diabetischen Fußulcus"],
      e: "Hydrogel: bis 95 % Wasser, Autolyse, Rehydrierung trockener/schmerzhafter Wunden; Nutzen bei DFU belegt. Nicht bei stark nässenden oder blutenden Wunden; trockene Nekrosen nicht rehydrieren.", s: "S. 18–19" },
    { f: "Welche Dosierung und Zyklusdauer gelten bei der Fliegenlarventherapie?",
      o: ["5–8 Larven/cm², Zyklus max. 4–5 Tage", "1 Larve/cm², Zyklus 14 Tage", "50 Larven/cm², Zyklus 1 Tag", "5–8 Larven/cm², Zyklus bis 3 Wochen"],
      e: "Lucilia sericata: Bio-Bags oder Freiläufer, 5–8 Larven/cm², Zyklus max. 4–5 Tage, tägliche Spülung mit NaCl 0,9 %.", s: "S. 20–21" },
    { f: "Wann dürfen keine Fliegenlarven eingesetzt werden?",
      o: ["Bei Antikoagulation", "In der Nähe großer Gefäße", "Bei nekrotischen Belägen", "Wenn die Wunde frei von Lokaltherapeutika ist"], r: 2,
      e: "Nicht bei Blutungsneigung, Nähe großer Gefäße, Verbindung zu Körperhöhlen/Organen, schlechter Durchblutung, Antikoagulation, Ablehnung aus Ekel. Die Wunde soll frei von Lokaltherapeutika sein.", s: "S. 21–22" },
    { f: "Warum wird medizinischer Honig in der Leitlinie nicht empfohlen?",
      o: ["Wegen höherer Schmerzbelastung", "Weil er keine osmotische Wirkung hat", "Wegen zu hohem pH-Wert", "Weil er nur bei freiliegenden Knochen wirkt"],
      e: "Honig: Glukonsäure → pH 3,9; Wirkung über Osmolarität, H₂O₂, Phytochemie. Höhere Schmerzbelastung → in der Leitlinie nicht empfohlen; nicht bei freiliegenden Gelenken, Knochen, Knorpel.", s: "S. 22–23" },
    { f: "Welche sind Indikationen für ein chirurgisches Débridement?",
      o: ["Großflächige Nekrosen/Beläge", "Vom Wundbereich ausgehende systemische Infektion", "Sauber granulierende Wunde ohne Beläge", "Starke Schmerzempfindlichkeit der Person"], r: 2,
      e: "Indikationen: lokale Entzündung, systemische Infektion vom Wundbereich, großflächige Nekrosen/Beläge; beim diabetischen Fußulcus indiziert.", s: "S. 23–24" },
    { f: "Wann ist ein chirurgisches Débridement nicht oder nur eingeschränkt möglich?",
      o: ["Bei Gerinnungsstörung/Antikoagulation", "Beim diabetischen Fußulcus", "Bei lokaler Entzündung", "Bei großflächigen Nekrosen"],
      e: "Nicht bzw. eingeschränkt bei Gerinnungsstörung/Antikoagulation, starker Schmerzempfindlichkeit, eingeschränkter Narkose- oder Transportfähigkeit, fehlendem qualifiziertem Personal, Ablehnung.", s: "S. 24" },
    { f: "Prozessablauf: Es sind kein avitales Gewebe, keine Nekrosen, Beläge oder Fremdkörper vorhanden. Was folgt?",
      o: ["Keine Wundreinigung und kein Débridement", "Chirurgisches Débridement", "Antiseptika für max. 14 Tage", "Fliegenlarventherapie"],
      e: "Nein → keine Wundreinigung/kein Débridement. Ja → Bedingungen für chirurgisches Débridement prüfen; sonst Wundreinigung primär mechanisch.", s: "S. 26" },
    { f: "Wer spielt laut Heft die wichtigste Rolle bei der Entscheidung für ein Verfahren?",
      o: ["Der betroffene Mensch", "Die Wirtschaftlichkeit", "Der Hersteller des Produkts", "Die Krankenkasse"],
      e: "Auswahl nach Zielen und Wünschen der Betroffenen, Wundsituation, Wirtschaftlichkeit und Expertenempfehlungen – die wichtigste Rolle spielt der betroffene Mensch.", s: "S. 25" }
  ],


  zusammenfassung: `
<h3>1. Wundreinigung vs. Débridement <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 2, 6, 23–25</span></h3>
<div class="tabelle"><table>
  <thead><tr><th></th><th>Wundreinigung</th><th>(Chirurgisches) Débridement</th></tr></thead>
  <tbody>
    <tr><td>Definition</td><td>„Abtragung von avitalem Gewebe, Nekrosen, Belägen und/oder Entfernung von Fremdkörpern <b>bis an intakte anatomische Strukturen</b> heran unter Erhalt von Granulationsgewebe“ (DGfW 2012)</td><td>„<b>radikale</b> Abtragung von avitalem Gewebe, Nekrosen, Belägen und/oder Entfernung von Fremdkörpern mit Skalpell, Shaver, Ringkürette oder mittels Wasserdruck <b>bis in intakte anatomische Strukturen</b>“ (DGfW 2012)</td></tr>
    <tr><td>Charakter</td><td>oberflächlich; durch Pflegefachkräfte; Verfahren: APW, PPW, Dekontamination</td><td>radikal, invasiv, nicht gewebeschonend, aber schnellste und effektivste Methode; <b>nur durch Ärzt:innen</b></td></tr>
    <tr><td>Gemeinsames Ziel</td><td colspan="2">Eliminierung von Störungen im physiologischen Heilungsverlauf</td></tr>
  </tbody>
</table></div>
<p><span class="hand-inline">Handschr. „Prüfungsfrage“ (S. 2, 17): Unterschied Wundreinigung/Débridement. Handschr. „Prüfung“ (S. 5): Wundreinigung = aktiv.</span> Beide nur nach <b>Aufklärung und darauf basierendem Einverständnis</b> der betroffenen Person (S. 4).</p>

<h3>2. Indikation und Störfaktoren <span class="seite">S. 3–5, 27</span></h3>
<ul>
  <li>Beurteilung von Wundgrund, -fläche, -tiefe wird erschwert durch Nekrosen, Fibrinbeläge, Biofilm, Detritus (breiige Masse aus zerfallenen Zellen), Fremdkörper, Abfallstoffe, Verbandrückstände, überschüssiges Exsudat, avitales und schlecht heilendes Gewebe (S. 3).</li>
  <li><b>Methodenwahl</b> hängt ab von: Schmerzempfinden, Lebenssituation, Kenntnissen der Anwender, Materialien, Grunderkrankung/Wundursache, Art und Ursache des Belags (S. 3).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Begriff</th><th>Inhalt (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Nekrose</td><td>durch eine Noxe (Hypoxie, Strahlung) induzierter pathologischer Zelltod (S. 3). Fördert bakterielles Wachstum, verhindert Granulation, macht Beobachtung des Wundgrunds unmöglich. <b>Trocken:</b> dunkelbraun bis schwarz, hart, lederartig. <b>Feucht:</b> grau-gelb, weich, faserig/schmierig (S. 3, 27)</td></tr>
    <tr><td>Trockene Nekrose bei pAVK</td><td>erst <b>nach erfolgreicher Revaskularisation</b> (Bypass, Dilatation) oder zur Entlastung akuter Infektionen entfernen. <b>Dürfen vor dem Débridement auf keinen Fall angeweicht werden – nur trockene Verbandwechsel!</b> (S. 3–4)</td></tr>
    <tr><td>Fibrinbelag</td><td>Fibrin = Endprodukt der Blutgerinnung, wasserunlösliches Proteinpolymer. Physiologisch erster Wundverschluss und Baugerüst der Granulation; bei chronischen Wunden durch ständige Reizung übermäßig; <b>lässt sich im Gegensatz zu Eiter nicht abwischen/abspülen</b> → muss entfernt werden (S. 4)</td></tr>
    <tr><td>Biofilm</td><td>mikrobielle Gemeinschaft aus <b>Bakterien, Pilzen, Protozoen</b> an Grenzflächen; schleimige EPS-Matrix (Polysaccharide, DNA, Proteine); Quorum sensing. Wundgrund glänzend, gelartig; Nachweis nur mikroskopisch; mechanische Entfernung (chirurgisches Débridement, ultraschall-assistiert) am erfolgreichsten; Erfolg an Heilungsfortschritt und weniger Exsudat erkennbar (S. 4)</td></tr>
  </tbody>
</table></div>
<p class="hand">Handschr. (S. 4–5): Granulationsgewebe muss immer dunkelrot sein = gesund · Fibrin: anfangs für die Heilung gebraucht, festanhaftend, muss abgetragen werden · Eiter: leicht abwischbar, Wundabstrich – „Essener Kreisel, Levine-Technik (Prüfungsfrage)“ · trockene Nekrosen niemals aufweichen/rehydrieren → feuchtes Gangrän, Sepsis (Prüfungsfrage) · Biofilm → chirurgisches Débridement; glänzend, gelartig, wenig Exsudat, Wunde stagniert; „Prontosan: 20 Min Einwirkzeit“ · Detritus: breiige Masse aus Zellen.</p>

<h3>3. Wundreinigung – Grundlagen <span class="seite">S. 6–7</span></h3>
<ul>
  <li>Bei chronischen Wunden in der Exsudationsphase empfohlen; <b>keine evidenzbasierte Empfehlung zur Häufigkeit</b> und keine Evidenz für Vorteil bezüglich Endpunkt „Wundheilung“ → individuell abwägen (S. 6).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Pro (Wundreinigung)</th><th>Contra</th></tr></thead>
  <tbody>
    <tr><td>Entzündungsrisiko ↓ (weniger Fixierungsmöglichkeiten, z. B. Fibrin; kein Nährboden) · Lösen/Entfernen von avitalem Gewebe, Belägen, Exsudat, Mikroorganismen, Biofilm · Entfernen von Verbandresten/Fremdkörpern · bessere Wundkontraktion · bessere Beurteilbarkeit, Wundtaschen/Abszesse sichtbar · weniger Geruch · Lebensqualität ↑</td><td>häufig <b>schmerzhaft</b> (Schmerzgedächtnis → Schmerztherapie) · Materialkosten · Personalkosten durch längere Behandlungszeit · keine eindeutige Auswirkung auf den Endpunkt „Wundheilung“</td></tr>
  </tbody>
</table></div>
<p class="hand">Handschr. „Prüfung: Was spricht gegen eine Wundreinigung?“ (S. 17)</p>
<div class="tabelle"><table>
  <thead><tr><th>Verfahren</th><th>Ziel</th><th>Beispiele</th></tr></thead>
  <tbody>
    <tr><td><b>APW</b> – aktive periodische Wundreinigung <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span></td><td>vollständiges Lösen, Entfernen, Ausschwemmen bis an das gesunde Gewebe; <b>gezielte, wiederkehrende mechanische Wundreinigung im Rahmen des Verbandwechsels</b></td><td>Auswischen, Spülung ohne/mit chemischen Zusätzen, Auflegen angefeuchteter Kompressen</td></tr>
    <tr><td><b>Dekontamination</b></td><td>systemische Infektion vermeiden, lokale Entzündung durch humanpathogene Mikroorganismen therapieren; antiseptisch + mechanisch</td><td>Polihexanid, Octenidin, PVP-Iod</td></tr>
    <tr><td><b>PPW</b> – passive periodische Wundreinigung</td><td>Lösung avitalen Gewebes, während die Wunde steril abgedeckt ist → Reinigung unter dem Sekundärverband; Granulation bleibt intakt</td><td>Fliegenlarven, enzymatisch, Polyacrylat, Honig, Hydrogel</td></tr>
  </tbody>
</table></div>

<h3>4. Aktive periodische Wundreinigung (APW) <span class="seite">S. 7–13</span></h3>
<ul>
  <li>Am effektivsten durch <b>mechanische Wundreinigung</b>: Auswischen (sterile, trockene/angefeuchtete Kompressen, Pinzette, Reinigungspads, ultraschall-assoziiert) und/oder Spülen (NaCl, Ringer, H₂O₂) (S. 7).</li>
  <li>Unter keimarmen (ambulant) bzw. sterilen Bedingungen, <b>Non-Touch-Technik</b>. Jede mechanische Reinigung ist ein Gewebereiz → in Granulations-/Epithelisierungsphase möglichst keine Spülung, sonst sehr schonend (S. 8). <span class="hand-inline">Handschr.: keimarme Wundreinigung, z. B. Schere abkochen.</span></li>
  <li>Stress und Schmerzen → <b>adäquate Schmerztherapie</b>. Schonende Alternative: wiederholtes Auflegen angefeuchteter steriler Kompressen mit leichtem Druck (weniger Schmerz, aber zeitaufwendig, weniger effektiv) (S. 8).</li>
</ul>
<p class="merke">Am ehesten zur wirksamen Wundreinigung geeignet: <b>regelmäßige mechanische Wundreinigung mit sterilen Mull- oder Vlieskompressen in Kombination mit einer Spülung</b> – mechanisch + ausspülend, kostengünstig, einfach (DGfW 2012, S. 8).</p>
<ul>
  <li>Spülen nur vorsichtig, mit geringem Druck. <b>Nicht direkt aus dem Kühlschrank</b> (Auskühlung, Schmerz); auf Körpertemperatur erwärmen (Wärmeschrank, Wasserbad, Hosentasche) – <b>keine Mikrowelle</b> (Verbrennungsgefahr); mindestens Zimmertemperatur <b>20–24 °C</b>. Abfluss der Spülflüssigkeit sicherstellen; Applikation per Spritze mit Einmalkatheter/Knopfkanüle, Miniplasco (S. 8–9).</li>
  <li><b>Anforderungen an Wundspüllösungen</b> <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> (S. 9): steril, physiologisch, farblos, nicht reizend, temperierbar, nicht schmerzerzeugend, ohne resorbierbare Inhaltsstoffe. <span class="hand-inline">(Handschr. als Prüfungsfrage markiert.)</span></li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th></th><th>Isotone Kochsalzlösung</th><th>Ringerlösung</th></tr></thead>
  <tbody>
    <tr><td>Prinzip</td><td>Spüleffekt → mechanische Reinigung + Verdünnung</td><td>wie NaCl</td></tr>
    <tr><td>Hinweise</td><td>nicht konserviert → sofort verbrauchen, Reste verwerfen; Spraydose bis zum Ende nutzbar, wenn Sprühkopf die Wunde nicht berührt (vorher in die Luft sprühen)</td><td>nicht konserviert; enthält zusätzlich <b>Natrium, Calcium, Kalium</b></td></tr>
    <tr><td>Vorteile/Besonderheit</td><td>isoton, keine Zelltoxizität, keine Allergien; längerfristig/Dauerbenetzung → Elektrolytverschiebungen</td><td>isoton, keine Zelltoxizität; <b>bei längerfristiger Anwendung bevorzugt</b></td></tr>
  </tbody>
</table></div>
<p>Isotonie: ca. 270–330 mosmol/l bzw. Blutplasma ca. 290 mosmol/l (S. 9).</p>
<ul>
  <li><b>Leitungswasser</b> (S. 10–11): günstig, verfügbar, Ausduschen steigert Lebensqualität, wird oft als weniger schmerzhaft empfunden – aber <b>nicht steril</b>. RKI: „Jede Spülflüssigkeit muss steril sein. Leitungswasser ist nicht frei von Mikroorganismen“ → <b>nicht geeignet</b>. Leitlinie: kein Konsens; Aufklärung über Vor-/Nachteile und Präferenz erfragen; bei Ischämie/Diabetes höheres Infektionsrisiko als bei venösen Ulcera. Trinkwasserverordnung erlaubt bis 100 Keime/ml (22 °C und 36 °C); in Hausinstallationen Kontamination (Pseudomonaden, gramnegative Erreger) möglich; Nutzen von Bakterienfiltern unklar. Duschen mit abgedeckter Wunde ist eine separate Frage. <span class="hand-inline">Handschr.: wichtig – Filter, wenn Leitungswasser-„Ausduschen“ angeordnet wurde!</span></li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Spüllösung mit Zusätzen (S. 11–12)</th><th>Merkmale (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Polihexanid, Octenidin, Hypochlorit-haltige Lösung</td><td>Spüleffekt (mechanisch + Verdünnung); <b>konserviert</b> → nach Öffnung begrenzt verwendbar (Herstellerangaben)</td></tr>
    <tr><td>Wasserstoffperoxid</td><td>Katalase spaltet H₂O₂ → Aufschäumen, Ablösen, Zytotoxizität; mit mind. 3-facher Menge NaCl/Ringer nachspülen; <b>kein Spülen von Wundhöhlen/-taschen → Emboliegefahr!</b>; toxisch für Fibroblasten/Keratinozyten → <b>unzeitgemäß</b></td></tr>
    <tr><td>Farbstofflösungen (Ethacridinlactat, Kaliumpermanganat)</td><td>schwach bakterizid, schmales Spektrum; zytotoxisch, trocknen aus, Allergisierung, mutagen, erschweren Beurteilung → <b>unzeitgemäß</b></td></tr>
  </tbody>
</table></div>
<p class="warnung">Sind Polihexanid, Octenidin oder Natriumhypochlorit/Hypochlorsäure nur als <b>konservierende Zusätze</b> deklariert, ist die Lösung ein <b>Medizinprodukt</b> (Wundspüllösung), <b>kein Antiseptikum</b> → keine Anwendung bei infizierten Wunden. Dort: Wundantiseptika im Rahmen der Dekontamination (S. 12).</p>
<ul>
  <li><b>Ultraschall-assistierte Wundreinigung (UAW)</b> (S. 13): mechanisch, niederfrequent (bis 25 kHz); Sonotrode, 2–3 Tropfen Spülflüssigkeit/Sekunde, Feuchtnebel; Spritzschutz; isotone Ringer-/NaCl-Lösung, bei kritisch kolonisierten/infizierten Wunden Antiseptikum möglich. Kein vitales Gewebe beschädigt; Temperatur ca. 40 °C; Kavitation; in vitro: Fibrinolyse, Proteinsynthese, Zellwachstum, Angiogenese ↑. Besonders für Menschen mit Durchblutungsstörungen; keine belastbaren Aussagen zu Nutzen/Schaden.</li>
</ul>

<h3>5. Dekontamination und Antiseptika <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 13–16</span></h3>
<ul>
  <li>Antiseptische Wundbehandlung + mechanische Reinigung zur Beseitigung lokaler Entzündung durch humanpathogene Mikroorganismen und Prävention systemischer Infektion; grundsätzlich eine APW mit <b>Antiseptika (Arzneimittel)</b> (S. 13).</li>
  <li>Proteine und Biofilme schützen Mikroorganismen → <b>zuerst mechanisch reinigen</b>, dann Antiseptikum (oder Reinigung mit Antiseptikum) (S. 14).</li>
  <li><b>Erforderlich</b> bei manifester mikrobiell bedingter Entzündung und bei auffälligem Befund (Beläge, Geruch, Wundrandveränderungen) zur Infektionsprävention (S. 14).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Antiseptikum</th><th>Pro</th><th>Contra / Hinweise (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Polihexanid (PHMB) 0,02 % / 0,04 %</td><td>breites Spektrum (inkl. MRSA, Pilze), geringe Zytotoxizität, farblos</td><td>begrenzte Haltbarkeit nach Anbruch (4–8 Wochen); nicht sporozid, nicht viruzid</td></tr>
    <tr><td>PVP-Iod (inkl. Cadexomer-Iod)</td><td>breites Spektrum (bei längerer Einwirkung 2–24 h auch Sporen), Cadexomer bindet Exsudat</td><td>Eiweißfehler (Entfärbung braun → gelb = Wirkverlust), zytotoxisch, nicht farblos; <b>KI: Schilddrüsenerkrankung, Iodallergie, Radioiodtherapie, Schwangerschaft/Stillzeit</b>; inkompatibel u. a. mit Silber-, Quecksilbersalzen, H₂O₂, Octenidin</td></tr>
    <tr><td>Octenidin</td><td>breites Spektrum (grampositiv/-negativ, Pilze, Protozoen, einige Viren), farblos, geringer Eiweißfehler</td><td>höhere Zytotoxizität, schlechtere Gewebeverträglichkeit als PHMB; <b>Gewebeschädigung bei Einbringen unter Druck ohne Abfluss</b> (Wundhöhlen, Drainage); Inaktivierung durch Eiweiß</td></tr>
  </tbody>
</table></div>
<div class="tabelle"><table>
  <thead><tr><th>Wundart (S. 15)</th><th>Antiseptikum</th></tr></thead>
  <tbody>
    <tr><td>kritisch kolonisiert, infektgefährdet · Verbrennungen · postoperativ (Infektionsprävention)</td><td>Polihexanid (PHMB)</td></tr>
    <tr><td>Biss-, Schuss-, Stichwunden</td><td>PVP-Iod</td></tr>
    <tr><td>mit MRE kolonisiert oder infiziert</td><td>Octenidin</td></tr>
  </tbody>
</table></div>
<div class="tabelle"><table>
  <thead><tr><th>Übersicht <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> (S. 16)</th><th>Wundspüllösungen</th><th>Antiseptika</th></tr></thead>
  <tbody>
    <tr><td>Ziel</td><td>Reinigung (Lösen, Entfernen, Ausschwemmen)</td><td>Abtötung von Keimen</td></tr>
    <tr><td>Indikation</td><td>avitales Gewebe, Beläge, Fremdkörper</td><td>infektgefährdete, kritisch kolonisierte, infizierte Wunden</td></tr>
    <tr><td>Inhalt</td><td>ohne Zusätze (NaCl, Ringer) oder mit nur konservierenden Zusätzen</td><td>Arzneimittel: Octenidin, Polihexanid, PVP-Iod</td></tr>
    <tr><td>Dauer</td><td>fortlaufend möglich</td><td>begrenzt, bis Infektzeichen beseitigt – <b>max. 14 Tage</b></td></tr>
    <tr><td>Applikation</td><td>spülen, wischen, tupfen, einweichen</td><td>gießen, sprühen, einweichen, wischen, tupfen – nur <b>oberflächlich</b> (auch Wundhöhle, z. B. Dekubitus)</td></tr>
    <tr><td>Zulassung</td><td>europaweit als <b>Medizinprodukt</b> (physikalisch)</td><td>national als <b>Arzneimittel</b> (pharmakologisch)</td></tr>
  </tbody>
</table></div>
<p class="merke">Für die <b>periodische Wundreinigung</b> bevorzugt <b>neutrale, wirkstofffreie Lösungen</b>; Polihexanid, Octenidin, PVP-Iod als Antiseptika <b>ausschließlich im Rahmen der Dekontamination</b> bei Verdacht auf erregerbedingte Entzündung (S. 16). <span class="hand-inline">(Seite handschr. als „Prüfungsfrage!“ markiert.)</span></p>

<h3>6. Passive periodische Wundreinigung (PPW) <span class="seite">S. 17–23</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Pro</th><th>Contra</th></tr></thead>
  <tbody>
    <tr><td>unterstützt Reinigung (Zeitmanagement) · weniger Verbandwechsel → Unabhängigkeit, Lebensqualität · weniger Aufwand und Schmerz bei der APW</td><td>Schmerzen · Ekelgefühle (Fliegenlarven) · Kontaktallergie/Unverträglichkeit · Kosten · Kontraindikationen nach Herstellerangaben</td></tr>
  </tbody>
</table></div>
<div class="tabelle"><table>
  <thead><tr><th>Methode</th><th>Kernaussagen (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Polyacrylat (Nasstherapie)</td><td>Superabsorber-Kissen mit Ringer (oder Polihexanid) aktiviert; nimmt Proteine, Exsudat, Toxine, Zelltrümmer auf, gibt Ringer ab (Saug-Spül-Prozess) → Autolyse; <b>1–3 Tage</b>; für chronische (Dekubitus 2–4, Ulcus cruris, DFU), infizierte und nekrotische Wunden (Verbrennung I/II)</td></tr>
    <tr><td>Hydrogel</td><td>bis 95 % Wasser; Autolyse, Rehydrierung trockener/schmerzhafter Wunden; Tubengel 3 Tage, Gelplatte bis 7 Tage; <b>0,3–0,5 cm</b> dick; Sekundärverband: Folie (wenig Exsudat), feinporiger PU-Schaum (mehr Exsudat), Distanzgitter + Kompresse (täglich). Nutzen bei DFU belegt; bei UCV 8–14 % Sensibilisierung; <b>nicht bei stark nässenden oder blutenden Wunden</b>; trockene Nekrosen <b>nicht rehydrieren</b> (feuchte Gangrän)</td></tr>
    <tr><td>Enzymatisch</td><td>Streptokinase/Streptodornase, Clostridiopeptidase A (Kollagenase) und B; 2–3 mm Schicht; nur oberflächliche Nekrosen; Nebenwirkungen: Schmerz, Brennen, Hautreizung, Mazeration, lange Dauer, hohe Kosten (1–2 × täglich VW); heute schonendere Alternativen</td></tr>
    <tr><td>Fliegenlarven (Lucilia sericata)</td><td>reine Nekrophagen → kein Débridement im Sinne der Definition; extrakorporale Verdauung mit Proteasen; vitales Gewebe durch Proteasenhemmer geschützt. Bio-Bags oder Freiläufer; <b>5–8 Larven/cm²</b>, Zyklus <b>max. 4–5 Tage</b>, tägl. Spülung mit NaCl 0,9 %; Wunde frei von Lokaltherapeutika; durch <b>Pseudomonas aeruginosa</b> gehemmt (grünes Exsudat) → Abstrich vorher; keine Druckbelastung. <b>Nicht</b> bei Blutungsneigung, Nähe großer Gefäße, Verbindung zu Körperhöhlen/Organen, schlechter Durchblutung, Antikoagulation, Ablehnung aus Ekel</td></tr>
    <tr><td>Medizinischer Honig</td><td>Glukonsäure → pH 3,9; Wirkung durch Osmolarität, H₂O₂ (Glukose-Oxidase), Phytochemie; Manuka: Methylglyoxal 100-fach. Nicht bei freiliegenden Gelenken, Knochen, Knorpel, Allergien. Höhere Schmerzbelastung → in der Leitlinie <b>nicht empfohlen</b></td></tr>
  </tbody>
</table></div>
<p>Polyacrylat, Hydrogel und enzymatische Reinigung <b>unterstützen die körpereigene Autolyse</b> (Abbau durch zelleigene Enzyme) – schonender, aber langsamer (S. 18, 20). <span class="hand-inline">Handschr. (S. 17): Fliegenlarven-Notiz „körpereigene (Madentherapie) unkontrollierbar“ – Lesung unsicher.</span></p>

<h3>7. Chirurgisches Débridement <span class="seite">S. 23–24</span></h3>
<ul>
  <li>Überführt sekundär heilende Wunden durch Ausschneiden im vitalen Gewebe in primäre Wundheilung. Indikationen: lokale Entzündung, systemische Infektion vom Wundbereich, großflächige Nekrosen/Beläge; beim diabetischen Fußulcus indiziert, Taschen und Unterminierungen entfernen (S. 23–24).</li>
  <li>Schmerzhaft → Lokalanästhesie, Analgosedierung oder Vollnarkose. <b>Nur durch Ärzt:innen.</b> Scharfe Löffel und Scheren ungeeignet (quetschen Gewebe, Keime gelangen tief ins Gewebe) (S. 24).</li>
  <li><b>Nicht bzw. eingeschränkt</b> bei: Gerinnungsstörung/Antikoagulation, starker Schmerzempfindlichkeit, eingeschränkter Narkosefähigkeit, fehlendem qualifiziertem Personal, eingeschränkter Transportfähigkeit, Ablehnung (S. 24).</li>
</ul>
<p class="merke"><b>Prozessablauf</b> (S. 26): avitales Gewebe, Nekrosen, Beläge, Fremdkörper vorhanden? Nein → keine Wundreinigung/kein Débridement. Ja → Bedingungen für chirurgisches Débridement (lokale Entzündung, systemische Infektion, großflächige Nekrosen)? Ja → Débridement mit Schmerztherapie; nein → Wundreinigung primär mechanisch, bei PPW neutrale wirkstofffreie Lösungen; bei Verdacht auf erregerbedingte Entzündung zugelassene Antiseptika (max. 14 Tage) → erneut prüfen.</p>
<p><b>Zusammenfassung</b> (S. 25): Auswahl nach Zielen und Wünschen der Betroffenen, Wundsituation, Wirtschaftlichkeit und Expertenempfehlungen; besonders beachten: <b>Schmerzvermeidung</b>, physiologisch feuchtes Wundmilieu, kein Flüssigkeitsaustritt aus dem Verband. Die wichtigste Rolle bei der Entscheidung spielt der betroffene Mensch.</p>
`
});
