/*
 * Thema: Dekubitus, Ulcus cruris, Diabetisches Fußulkus
 * Quelle: murimed-Kursheft Wundexperte Modul I (Seitenangaben = Originalseiten des Hefts).
 * Inhalte übernommen aus "Zusammenfassung_Dekubitus_UlcusCruris_DFU.pdf" und
 * "Lernkarten_Dekubitus_UlcusCruris_DFU.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "dekubitus-ulcus-dfu",
  titel: "Dekubitus, Ulcus cruris, Diabetisches Fußulkus",
  kurz: "Dekubitus & Ulcus",
  quelle: "murimed-Kursheft Wundexperte Modul I",
  hinweis:
    "Quelle ist ausschließlich das Kursheft; Seitenzahlen in Klammern (die nachgereichten Heftseiten 12 und 13 sind mit ihrer Originalseitenzahl zitiert). Die im Heft zitierten Primärquellen wurden nicht separat geprüft.",

  karten: [
    { k: "Chron. Wunde", f: "Wann gilt eine Wunde als chronisch?",
      a: "Wenn sie innerhalb von 4–12 Wochen trotz fachgerechter Therapie keine Heilungstendenz zeigt.\nVon Beginn an chronisch, wenn die Ursache eine chronische Erkrankung ist (Dekubitus, Ulcus cruris, Diabetisches Fußulkus).", s: "S. 2–4" },
    { k: "Chron. Wunde", f: "Akute vs. chronische Wunde?",
      a: "Akut: Wundheilungsphasen regelrecht durchlaufen, Heilung innerhalb von 4 Wochen.\nChronisch: Phasen nicht regelrecht durchlaufen, keine Heilungstendenz nach 4–12 Wochen.", s: "S. 4" },
    { k: "Chron. Wunde", f: "Was sind „Hard-to-heal“-Wunden?",
      a: "Ulcera > 6 cm², älter als 6 Monate, bei denen ein Ansprechen auf Kompressionstherapie innerhalb von 6 Monaten unwahrscheinlich ist.", s: "S. 4" },
    { k: "Dekubitus", f: "Definiere den Dekubitus (NPUAP 2014).",
      a: "Lokal begrenzte Schädigung der Haut und/oder des darunter liegenden Gewebes, typischerweise über knöchernen Vorsprüngen, infolge von Druck oder von Druck in Verbindung mit Scherkräften.", s: "S. 5" },
    { k: "Dekubitus", f: "Scherkräfte vs. Reibung?",
      a: "Scherkräfte verformen tieferliegendes Gewebe.\nReibung wirkt nur oberflächlich (Haut gegen Bettlaken).", s: "S. 5" },
    { k: "Dekubitus", f: "Welche Mechanismen führen zum druckbedingten Zelltod?",
      a: "Direkte Deformation des Gewebes und Verschluss von Blut- und Lymphgefäßen → O₂-Mangel, kein Abtransport von Stoffwechselprodukten.\nMuskelzellen sind besonders empfindlich: Nekrosen innerhalb von Minuten möglich.", s: "S. 5–6" },
    { k: "Dekubitus", f: "Beschreibe die Entstehungskaskade des Dekubitus.",
      a: "Immobilität → Druck → Zellverformung, Gefäßkompression → lokale Ischämie → gestörter Zellstoffwechsel (Hypoxie, Nekrose, Giftstoffe) → Azidose → Vasodilatation → Flüssigkeitsaustritt → Ödem/Blasen, Thrombosen → Absterben.", s: "S. 7" },
    { k: "Dekubitus", f: "Nenne Prädilektionsstellen in Rückenlage.",
      a: "Hinterhaupt, Schulterblätter, Dornfortsätze, Kreuzbein, Fersen.\nHandschriftlich: auch an Hilfsmitteln (Brille, O₂-Brille, Zahnprothese).", s: "Lösung S. 35", h: true },
    { k: "Dekubitus", f: "Prädilektionsstellen im Sitzen und in Seitenlage?",
      a: "Sitzen: Hinterhaupt, Schulterblatt, Dornfortsätze, Ellenbogen, Sitzhöcker, Fersen.\nSeitenlage: Ohrmuschel, Jochbein, Schulter, Ellenbogen, Rippen, großer Rollhügel, Knie/Wadenbein, seitliche Knöchel.", s: "S. 35" },
    { k: "Dekubitus", f: "Was sind die drei wichtigsten Risikofaktoren für einen Dekubitus?",
      a: "1. Beeinträchtigung der Mobilität\n2. Störung der Durchblutung\n3. beeinträchtigter Hautzustand bzw. bereits vorhandener Dekubitus", s: "S. 8" },
    { k: "Dekubitus", f: "Dekubitus Kategorie I und II?",
      a: "I: intakte Haut, nicht wegdrückbare Rötung über knöchernem Vorsprung.\nII: Teilverlust der Haut – flaches Geschwür mit rosa Wundbett ohne Beläge oder serumgefüllte Blase.", s: "S. 9" },
    { k: "Dekubitus", f: "Dekubitus Kategorie III und IV?",
      a: "III: vollständiger Hautverlust, Subcutis kann sichtbar sein; Knochen, Sehnen, Muskeln nicht offen.\nIV: vollständiger Gewebeverlust mit freiliegenden Knochen, Sehnen oder Muskeln; Osteomyelitis möglich.", s: "S. 9" },
    { k: "Dekubitus", f: "Welche zwei Zusatzkategorien gibt es?",
      a: "Keiner Kategorie zuordenbar (Tiefe unbekannt, Wundbett durch Beläge/Schorf bedeckt).\nVermutete tiefe Gewebeschädigung (livider/rötlich-brauner Bereich intakter Haut oder blutgefüllte Blase).", s: "S. 10" },
    { k: "Dekubitus", f: "Beschreibe den Fingertest. (Übung II)",
      a: "Leichter Fingerdruck auf die Rötung.\nWeißfärbung → Test negativ → kein Dekubitus.\nBleibt rot → Test positiv → Dekubitus Kategorie I.", s: "S. 35" },
    { k: "Dekubitus", f: "Dekubitus vs. Feuchtigkeitswunde (IAD, Intertrigo)?",
      a: "Dekubitus: scharf begrenzt, Ursprung in der Tiefe, über knöchernen Vorsprüngen.\nFeuchtigkeitswunden: Ursprung an der Epidermis, in Hautfalten und Vertiefungen (z. B. Gesäßfalte).", s: "S. 10" },
    { k: "Prophylaxe", f: "Was ist die beste Form der Dekubitusprophylaxe?",
      a: "Regelmäßige Druckentlastung gefährdeter Körperstellen.\nProphylaxe muss vorausschauend, konsequent, regelmäßig erfolgen – bevor Rötungen auftreten.", s: "S. 11–12" },
    { k: "Prophylaxe", f: "Bestandteile der Dekubitusprophylaxe?",
      a: "Risikoeinschätzung, Förderung der Eigenbewegung, Hautbeobachtung, Hautpflege, Beratung, Positionswechsel, Freilage, Vermeidung therapiebedingten Drucks, Ernährung und Flüssigkeit, Kontinuität und Evaluation.", s: "S. 11–12" },
    { k: "Prophylaxe", f: "Energie- und Proteinbedarf bei Dekubitus?",
      a: "Energie 35–40 kcal/kg KG, Protein 2 g/kg KG; eiweißreich, ggf. hochkalorisch, Vitamine A, B, C, K und Mineralstoffe.", s: "S. 12" },
    { k: "Prophylaxe", f: "Welche Hilfsmittel sind ungeeignet?",
      a: "Luftringe, Lochkissen, Gelkissen, Fellfersenschoner, Lagerungsfell, Wasserkissen, Wassermatratzen, wassergefüllte Handschuhe.", s: "S. 12" },
    { k: "Prophylaxe", f: "Welche Hilfsmittel sind geeignet bzw. bedingt geeignet?",
      a: "Geeignet: Kissen, Decken, Still-/Bananenkissen, Luftkammerkissen, Fersenfreilagerungsbandagen, grobporiger PU-Schaum, Schaumstoffmatratzen.\nBedingt: Weichlagerungs-, Wechseldruckmatratzen.", s: "S. 12" },
    { k: "Wundphasen", f: "Versorgung einer schwarzen, trockenen Nekrose?",
      a: "Débridement, Feuchtigkeitszufuhr, Aufweichen → Hydrogele + Deckverband oder Feuchtverbände.\nAusnahme bei arterieller Ursache: nicht einweichen (S. 33).", s: "S. 13, 33" },
    { k: "Wundphasen", f: "Versorgung in der Granulationsphase?",
      a: "Blassrosa, schlecht: Exsudat aufnehmen, Granulation anregen → Alginate, Hydrokolloide, Kollagen, PU, Vakuumtherapie.\nRot, fest: vor Austrocknung schützen → Hydrokolloide, Hydrogele, Hydropolymere, PU-Schaum.", s: "S. 13" },
    { k: "Ulcus cruris", f: "Verteilung der Ursachen des Ulcus cruris?",
      a: "60–70 % venös, ca. 10 % arteriell, ca. 10 % gemischt (mixtum), ca. 10 % andere (Infektionen, Mykosen, Malignome, Kalziphylaxie, Medikamente).", s: "S. 14" },
    { k: "Ulcus cruris", f: "Was bedeutet „Ulcera crurum“?",
      a: "Mehrere Ulzerationen an beiden Unterschenkeln.\nUlcus cruris = ein Geschwür; Ulcera cruris = mehrere an einem Unterschenkel.", s: "S. 14" },
    { k: "Venosum", f: "Wie entsteht ein Ulcus cruris venosum?",
      a: "Komplikation der CVI: gestörter Rückfluss → Druck bis in die Kapillaren → Ödem → Lymphsystem überlastet → Dermatoliposklerose → längere Diffusionsstrecke → Minderversorgung → Ulcus.", s: "S. 14–15" },
    { k: "Venosum", f: "Wie verteilt sich der venöse Abfluss und was ist die Hauptkraft?",
      a: "Ca. 10 % oberflächlich (epifaszial), ca. 90 % tief (subfaszial).\nHauptkraft: Wadenmuskelpumpe; Venenklappen als Volumenventile.", s: "S. 14" },
    { k: "Venosum", f: "Widmer-Klassifikation der CVI?",
      a: "I Corona phlebectatica, Phlebödem\nII Ödem, Dermatoliposklerose, Atrophie blanche, Purpura jaune d’ocre, Stauungsekzem IIIa abgeheiltes Ulcus\nIIIb florides Ulcus", s: "S. 15" },
    { k: "Venosum", f: "Wann gilt ein Ulcus cruris venosum als therapieresistent?",
      a: "Keine Heilungstendenz innerhalb von 3 Monaten unter adäquater phlebologischer Therapie oder nicht abgeheilt innerhalb von 12 Monaten.", s: "S. 15" },
    { k: "Venosum", f: "Konservative Therapie des Ulcus cruris venosum?",
      a: "Phasengerechte Wundtherapie, Kompression, Hautpflege, Gehtraining (Sprunggelenk), Gewichtsreduktion, Ernährung, Flüssigkeit, manuelle Lymphdrainage, Wechselbäder bzw. kaltes Abduschen 2× tägl. 5–10 min.", s: "S. 17" },
    { k: "Venosum", f: "Operative/endovaskuläre Verfahren beim Ulcus cruris venosum?",
      a: "Sklerotherapie, Radiofrequenzablation, endovenöse Lasertherapie, Crossektomie, Perforansligatur, Phlebektomie, Varizenstripping.", s: "S. 17" },
    { k: "Kompression", f: "Wie wirkt die Kompressionstherapie?",
      a: "Verkleinert den Venendurchmesser → fast doppelte Fließgeschwindigkeit, weniger transmuraler Druck, Venenklappen schließen wieder; venöser und lymphatischer Rückfluss ↑, Ödem ↓.", s: "S. 18" },
    { k: "Kompression", f: "Drei Phasen der Kompressionstherapie bei CVI?",
      a: "Entstauung: PKV oder MAK\nErhaltung: MKS, Ulcus-Strumpfsysteme\nPrävention: nach Abheilung, meist MKS der KKL II", s: "S. 19" },
    { k: "Kompression", f: "Was bedeuten PKV, MKS, MAK, IPK?",
      a: "PKV – phlebologischer Kompressionsverband (Binden)\nMKS – medizinischer Kompressionsstrumpf\nMAK – medizinisches adaptives Kompressionssystem (Klett/Wrap)\nIPK – intermittierende pneumatische Kompression (nur unterstützend)", s: "S. 19" },
    { k: "Kompression", f: "Welche Rolle spielt Bewegung bei der Kompressionstherapie?",
      a: "Eigenbewegung ist stets Bestandteil – Wirkung nur bei aktivierter Muskelpumpe und beweglichem Sprunggelenk (Fußkreisen, Fußwippen, Nordic Walking, Drainagebeutel bei Bettlägerigen).", s: "S. 20" },
    { k: "Kompression", f: "Was besagt die 3S-3L-Regel?",
      a: "„Sitzen und Stehen ist Schlecht, Lieber Laufen und Liegen!“", s: "S. 21" },
    { k: "Kompression", f: "Nenne Beratungsinhalte bei CVI/Ulcus cruris venosum.",
      a: "Flache Schuhe, keine einschnürende Kleidung, Beine hochlegen (20–30°), nicht übereinanderschlagen, Bettende hoch, Kneipp/kalte Güsse, Wärme > 28 °C meiden, Venensport, Gewicht reduzieren, trinken, Kompressionsstrümpfe lebenslang.", s: "S. 20–21" },
    { k: "Kompression", f: "Hautpflege unter Kompression?",
      a: "Täglich, am besten abends; Creme vor dem Anziehen eingezogen; W/O mit Urea/Glyzin; ohne Alkohol, Allergene (Parabene, Perubalsam, Wollwachs, Propylenglykol, Ringelblume, Rosskastanie) und Duftstoffe.", s: "S. 21" },
    { k: "Arteriosum", f: "Ursache und Risikofaktoren des Ulcus cruris arteriosum?",
      a: "pAVK, in ca. 95 % Atherosklerose.\nNikotin, Hypertonie, Diabetes, Dyslipidämie, Adipositas, Bewegungsmangel, Hyperfibrinogenämie, Homocysteinämie, Polyarthritis.", s: "S. 22–23" },
    { k: "Arteriosum", f: "Klinisches Bild des Ulcus cruris arteriosum?",
      a: "Äußere Fußränder, Unterschenkel-Außenseite, Außenknöchel; scharf begrenzt, wie ausgestanzt; Haut blass, marmoriert oder livide, glänzend, haarlos; verdickte Nägel; tiefe Wunden.", s: "S. 24" },
    { k: "Arteriosum", f: "Was ist bei der ABI-Messung zu beachten?",
      a: "Bei Mönckeberg-Sklerose (Mediaverkalkung) falsch hohe Werte.\nWichtig: periphere Dopplerdrücke < 70 mmHg → fehlende Wundheilung.", s: "S. 24" },
    { k: "Arteriosum", f: "Fontaine und Rutherford im Vergleich?",
      a: "I = Rutherford 0\nIIa = I/1\nIIb = I/2–3\nIII Ruheschmerz = II/4\nIV Ulcus, Gangrän = III/5–6", s: "S. 24" },
    { k: "Arteriosum", f: "Was bedeutet das IRAN-Prinzip?",
      a: "Infektionskontrolle, Mumifizierung der Gangrän\nRevaskularisation\nAmputation bzw. Nekroseentfernung im infektionsfreien Stadium\nNachsorge", s: "S. 25" },
    { k: "Arteriosum", f: "Wann ist Kompression beim arteriellen Ulcus verboten?",
      a: "Bei kritischer Ischämie (absoluter systolischer Knöchelarteriendruck < 50 mmHg): keine Kompressionstherapie!", s: "S. 25" },
    { k: "Arteriosum", f: "Therapie ohne Möglichkeit zur Revaskularisation?",
      a: "Mumifizierte trockene Nekrose → nach Austrocknen des Randsaums trocken behandeln.\nFeuchte Wunde → lokal antiseptisch, Infektionsprophylaxe, engmaschige Kontrolle.", s: "S. 26" },
    { k: "Arteriosum", f: "Wie lagert man die Beine bei pAVK – und bei CVI?",
      a: "pAVK: Beine nachts tief lagern, Füße warmhalten (S. 26).\nCVI: Beine hochlegen, Bettende hochstellen (S. 20).", s: "S. 20, 26" },
    { k: "Vergleich", f: "Venosum vs. arteriosum: Lokalisation, Wundrand, Tiefe?",
      a: "Venosum: Innenknöchel/Vorderseite; Rand diffus, flach; bis Subcutis.\nArteriosum: Außenknöchel/Außenseite, Fußrand; Rand wie ausgestanzt; tief, Sehnen/Knochen sichtbar.", s: "S. 27, 36" },
    { k: "Vergleich", f: "Venosum vs. arteriosum: Schmerz, Ödem, Temperatur, Pulse?",
      a: "Venosum: mäßig, Linderung durch Hochlagern; Ödeme; warm; Pulse tastbar.\nArteriosum: stark, Ruheschmerz, Linderung durch Herabhängen; keine Ödeme; kalt; Pulse kaum tastbar.", s: "S. 27" },
    { k: "Vergleich", f: "Venosum vs. arteriosum: Wundbeschaffenheit?",
      a: "Venosum: feucht-glänzend, viel Exsudat, schmierig-fibrinöse Beläge (Nekrosen → an pAVK denken).\nArteriosum: wenig Exsudat, trocken, ggf. freiliegende Sehnen und Knochen, Nekrosen.", s: "S. 27" },
    { k: "Mixtum", f: "Was ist beim Ulcus cruris mixtum zu beachten?",
      a: "Arterielle und venöse Ursache; Schmerz meist führend; Kompression stark eingeschränkt oder kontraindiziert → pAVK früh behandeln, um wieder komprimieren zu können.", s: "S. 28" },
    { k: "Diab. Fuß", f: "Was ist das Diabetische Fußsyndrom?",
      a: "Schleichende Spätkomplikation durch Makro- und Mikroangiopathie, Neuropathie und Chondroarthropathie; umfasst alle pathologischen Veränderungen am Fuß (Ulkus, Nagelbett, Infektion, Deformität).", s: "S. 28" },
    { k: "Diab. Fuß", f: "Ursachenverteilung diabetischer Fußulcera?",
      a: "Ca. 50 % Polyneuropathie, ca. 15 % pAVK, ca. 35 % Zusammenwirken von PNP und Gefäßerkrankung.", s: "S. 29" },
    { k: "Diab. Fuß", f: "Welche Formen der Polyneuropathie gibt es?",
      a: "Sensibel: Kribbeln, Brennen, Taubheit, schmerzlose Wunden.\nMotorisch: Faszikulationen, Krämpfe, Schwäche, Parese der Zehenspreizung.\nAutonom: Hypo-/Anhidrosis, Ödem, Ulcus, Osteoarthropathie, Tachykardie, Gastroparese.", s: "S. 29" },
    { k: "Diab. Fuß", f: "Neuropathischer vs. ischämischer diabetischer Fuß?",
      a: "Neuropathisch: trocken, warm, rosig, Pulse tastbar, schmerzlos (Malum perforans).\nIschämisch: kühl, blass/livide, Pulse vermindert, Schmerzen, akrale Nekrosen.", s: "S. 30" },
    { k: "Diab. Fuß", f: "Was ist der Charcot-Fuß (DNOAP)?",
      a: "Diabetische Neuro-Osteoarthropathie: meist einseitige, schmerzlose Destruktion des Fußskeletts nach unbemerkten Traumata; Überwärmung > 1 °C (oft > 2 °C) gegenüber der Gegenseite.", s: "S. 30" },
    { k: "Diab. Fuß", f: "Klassifikation nach Wagner und Armstrong?",
      a: "Wagner 0 keine Läsion · 1 oberflächlich · 2 bis Sehne/Kapsel · 3 bis Knochen · 4 Nekrose von Fußteilen · 5 Nekrose des ganzen Fußes.\nArmstrong: A ohne · B Infektion · C Ischämie · D beides.", s: "S. 29" },
    { k: "Diab. Fuß", f: "Wie prüft man die Sensibilität beim diabetischen Fuß?",
      a: "Monofilament nach Semmes-Weinstein, Stimmgabel nach Rydel-Seiffer, Tip Therm.", s: "S. 32" },
    { k: "Diab. Fuß", f: "Was bedeutet die IRAS-Regel?",
      a: "Infektsanierung\nRevaskularisation\nAmputation, wenn unumgänglich\nSchulung, Beratung, Information", s: "S. 32" },
    { k: "Diab. Fuß", f: "Wesentliche Therapiebestandteile beim diabetischen Fußulkus?",
      a: "Blutzucker optimieren, Infektionskontrolle, Débridement, konsequente vollständige Druckentlastung (Orthesen, Total Contact Cast, Rollstuhl, Bettruhe), phasengerechte Wundversorgung, Gefäßtherapie, Schulung.", s: "S. 32" },
    { k: "Diab. Fuß", f: "Was ist bei der Hautpflege des diabetischen Fußes zu beachten?",
      a: "W/O-Cremes oder Schäume mit Urea (Hornhaut, Rhagaden, Juckreiz).\nZehenzwischenräume nicht eincremen → Mazeration und Pilzbefall vermeiden.", s: "S. 33" },
    { k: "Diab. Fuß", f: "Warum Hydrokolloide beim diabetischen Fuß nur mit Vorsicht?",
      a: "Bei PNP fehlen oft Entzündungszeichen; durch den eingeschränkten Gasaustausch kann sich eine Infektion unbemerkt ausbreiten.\nKI: Infektion, freiliegende Muskeln/Sehnen/Knochen, ischämische Ulcera (pAVK IV).", s: "S. 33" }
  ],

  quiz: [
    { f: "Ab wann gilt eine Wunde laut Expertenstandard als chronisch?",
      o: ["Wenn sie nach 4–12 Wochen trotz fachgerechter Therapie keine Heilungstendenz zeigt", "Wenn sie nach 7 Tagen noch nicht verschlossen ist", "Erst wenn sie länger als 1 Jahr besteht", "Wenn sie größer als 6 cm² ist"],
      e: "Chronisch = keine Heilungstendenz nach 4–12 Wochen trotz fachgerechter Therapie. Dekubitus, Ulcus cruris und Diabetisches Fußulkus sind von Beginn an chronisch.", s: "S. 2–4" },
    { f: "Was beschreibt Dekubitus Kategorie II?",
      o: ["Teilverlust der Haut: flaches Geschwür mit rosa Wundbett ohne Beläge oder serumgefüllte Blase", "Intakte Haut mit nicht wegdrückbarer Rötung", "Vollständiger Hautverlust, Subcutis sichtbar, Knochen nicht offen", "Vollständiger Gewebeverlust mit freiliegendem Knochen"],
      e: "I: nicht wegdrückbare Rötung · II: Teilverlust der Haut/Blase · III: vollständiger Hautverlust · IV: freiliegende Knochen, Sehnen oder Muskeln.", s: "S. 9" },
    { f: "Welche Dekubitus-Kategorie liegt bei freiliegenden Sehnen vor?",
      o: ["Kategorie IV", "Kategorie III", "Kategorie II", "Keiner Kategorie zuordenbar"],
      e: "IV: vollständiger Gewebeverlust mit freiliegenden Knochen, Sehnen oder Muskeln; Osteomyelitis möglich.", s: "S. 9" },
    { f: "Beim Fingertest bleibt die gerötete Stelle rot. Was bedeutet das?",
      o: ["Test positiv – Dekubitus Kategorie I", "Test negativ – kein Dekubitus", "Hinweis auf eine Feuchtigkeitswunde", "Hinweis auf ein Erysipel"],
      e: "Weißfärbung → Test negativ, kein Dekubitus. Bleibt rot → Test positiv, Dekubitus Kategorie I.", s: "S. 35" },
    { f: "Was gilt für die Dekubitus-Klassifikation nach EPUAP/NPUAP?",
      o: ["Sie ist keine Reihenfolge – aus Kategorie I kann ohne Gegenmaßnahmen direkt Kategorie IV werden", "Jede Kategorie wird nacheinander durchlaufen", "Kategorie II wird auch für Skin Tears verwendet", "Sie gilt nur für Dekubitus an der Ferse"],
      e: "Die Klassifikation ist keine Reihenfolge. Kategorie II nicht für Skin Tears oder Pflasterschäden verwenden.", s: "S. 9–10" },
    { f: "Wo entsteht ein Dekubitus?",
      o: ["In der Tiefe – Muskelzellen sind besonders druckempfindlich", "In der Epidermis – die Hornschicht ist am empfindlichsten", "Nur in Hautfalten durch Feuchtigkeit", "Ausschließlich durch Reibung an der Oberfläche"],
      e: "Muskelnekrosen sind innerhalb von Minuten möglich, Hautzellen sind widerstandsfähiger. Dekubitus entsteht in der Tiefe, nicht in der Epidermis.", s: "S. 5–6" },
    { f: "Was ist die beste Form der Dekubitusprophylaxe?",
      o: ["Regelmäßige Druckentlastung gefährdeter Körperstellen", "Eine Wechseldruckmatratze für alle Patient:innen", "Massage geröteter Hautstellen", "Ein Luftring unter dem Gesäß"],
      e: "Regelmäßige Druckentlastung gefährdeter Körperstellen ist die beste Form der Dekubitusprophylaxe – vorausschauend, konsequent, regelmäßig.", s: "S. 11–12" },
    { f: "Welches Hilfsmittel ist zur Dekubitusprophylaxe ungeeignet?",
      o: ["Luftring", "Fersenfreilagerungsbandage", "Luftkammerkissen", "Schaumstoffmatratze"],
      e: "Ungeeignet: Luftringe, Lochkissen, Gelkissen, Fellfersenschoner, Lagerungsfell, Wasserkissen, Wassermatratzen, wassergefüllte Handschuhe.", s: "S. 12" },
    { f: "Welcher Energie- und Proteinbedarf wird bei Dekubitus angegeben?",
      o: ["35–40 kcal/kg KG und 2 g Protein/kg KG", "20 kcal/kg KG und 0,5 g Protein/kg KG", "50–60 kcal/kg KG und 4 g Protein/kg KG", "25 kcal/kg KG und 1 g Protein/kg KG"],
      e: "Bei Dekubitus: Energie 35–40 kcal/kg KG, Protein 2 g/kg KG; eiweißreich, Vitamine A, B, C, K und Mineralstoffe.", s: "S. 12" },
    { f: "Wie verteilen sich die Ursachen des Ulcus cruris?",
      o: ["60–70 % venös, je ca. 10 % arteriell, gemischt und andere", "60–70 % arteriell, ca. 20 % venös, ca. 10 % andere", "Je ein Drittel venös, arteriell und gemischt", "Ca. 95 % venös"],
      e: "60–70 % venös, ca. 10 % arteriell, ca. 10 % mixtum, ca. 10 % andere (Infektionen, Mykosen, Malignome, Kalziphylaxie, Medikamente).", s: "S. 14" },
    { f: "Was ist die Hauptkraft des venösen Rückflusses aus dem Bein?",
      o: ["Die Wadenmuskelpumpe", "Die Windkesselfunktion der Aorta", "Die Lymphgefäße", "Die oberflächlichen (epifaszialen) Venen"],
      e: "Ca. 90 % fließen tief (subfaszial) ab; Hauptkraft ist die Wadenmuskelpumpe, Venenklappen wirken als Volumenventile.", s: "S. 14" },
    { f: "Wann gilt ein Ulcus cruris venosum als therapieresistent?",
      o: ["Keine Heilungstendenz binnen 3 Monaten unter adäquater Therapie oder nach 12 Monaten nicht abgeheilt", "Nicht abgeheilt nach 4 Wochen", "Keine Heilungstendenz nach 2 Wochen Kompression", "Erst nach 5 Jahren ohne Abheilung"],
      e: "Therapieresistent: keine Heilungstendenz binnen 3 Monaten unter adäquater phlebologischer Therapie oder nach 12 Monaten nicht abgeheilt.", s: "S. 15" },
    { f: "Was wird in der Entstauungsphase der Kompressionstherapie eingesetzt?",
      o: ["Phlebologischer Kompressionsverband (PKV) oder MAK", "Nur medizinische Kompressionsstrümpfe (MKS)", "Nur intermittierende pneumatische Kompression (IPK)", "Keine Kompression, nur Hochlagern"],
      e: "Entstauung: PKV oder MAK · Erhaltung: MKS, Ulcus-Strumpfsysteme · Prävention: meist MKS der KKL II.", s: "S. 19" },
    { f: "Welche Rolle hat die intermittierende pneumatische Kompression (IPK)?",
      o: ["Nur unterstützend, kein Ersatz", "Sie ersetzt den Kompressionsverband in der Entstauungsphase", "Sie ist die Methode der Wahl in der Prävention", "Sie ist bei Ulcus cruris verboten"],
      e: "IPK ist nur unterstützend, kein Ersatz.", s: "S. 19" },
    { f: "Was besagt die 3S-3L-Regel?",
      o: ["Sitzen und Stehen ist Schlecht, Lieber Laufen und Liegen", "Salbe, Spülen, Schützen – Lagern, Lockern, Lüften", "Schmerz, Schwellung, Schorf – Licht, Luft, Lagerung", "Strümpfe, Schuhe, Sport – Liegen, Laufen, Lymphdrainage"],
      e: "„Sitzen und Stehen ist Schlecht, Lieber Laufen und Liegen!“", s: "S. 21" },
    { f: "Ab welchem Knöchelarteriendruck ist eine Kompressionstherapie verboten?",
      o: ["Unter 50 mmHg (kritische Ischämie)", "Unter 120 mmHg", "Über 70 mmHg", "Unter 90 mmHg"],
      e: "Bei kritischer Ischämie (absoluter systolischer Knöchelarteriendruck < 50 mmHg) keine Kompressionstherapie!", s: "S. 25" },
    { f: "Was ist bei der ABI-Messung bei Mönckeberg-Sklerose zu beachten?",
      o: ["Es werden falsch hohe Werte gemessen", "Es werden falsch niedrige Werte gemessen", "Die Messung ist besonders genau", "Der ABI ist dann immer genau 1,0"],
      e: "Mönckeberg-Sklerose (Mediaverkalkung) → falsch hohe Werte. Periphere Dopplerdrücke < 70 mmHg → fehlende Wundheilung.", s: "S. 24" },
    { f: "Wo liegt ein Ulcus cruris arteriosum typischerweise und wie sieht der Rand aus?",
      o: ["Außenknöchel, Unterschenkel-Außenseite, äußere Fußränder – wie ausgestanzt", "Innenknöchel – Rand diffus und flach", "Gamaschenartig am ganzen Unterschenkel – Rand eingerollt", "Fußsohle – Rand hyperkeratotisch"],
      e: "Arteriosum: äußere Fußränder, Außenseite, Außenknöchel; scharf begrenzt, wie ausgestanzt. Venosum: Innenknöchel/Vorderseite, Rand diffus, flach.", s: "S. 24, 27" },
    { f: "Wodurch wird der Schmerz beim Ulcus cruris arteriosum gelindert?",
      o: ["Durch Herabhängen des Beins", "Durch Hochlagern des Beins", "Durch Kompression", "Durch Wärmflaschen am Fuß"],
      e: "Arteriosum: starker Schmerz, Ruheschmerz nachts → Linderung durch Herabhängen. Venosum: Linderung durch Hochlagern.", s: "S. 27" },
    { f: "Welche Befundkombination passt zum Ulcus cruris venosum?",
      o: ["Ödeme, warme Haut, tastbare Fußpulse, viel Exsudat", "Keine Ödeme, kalte Haut, kaum tastbare Pulse, trockene Wunde", "Haarlose, glänzende Haut und Ruheschmerz nachts", "Schmerzloses Ulcus an der Fußsohle mit Hornhautrand"],
      e: "Venosum: Ödeme, warm, Pulse tastbar, feucht-glänzend mit viel Exsudat. Arteriosum: keine Ödeme, kalt, Pulse kaum tastbar, wenig Exsudat.", s: "S. 27" },
    { f: "Wofür steht das „R“ im IRAN-Prinzip?",
      o: ["Revaskularisation", "Rehabilitation", "Ruhigstellung", "Rezidivprophylaxe"],
      e: "IRAN: Infektionskontrolle/Mumifizierung · Revaskularisation · Amputation bzw. Nekroseentfernung im infektionsfreien Stadium · Nachsorge.", s: "S. 25" },
    { f: "Wie werden die Beine bei pAVK gelagert?",
      o: ["Nachts tief lagern, Füße warmhalten", "Hochlagern und Bettende hochstellen", "Mit Kompressionsverband hochlagern", "Mit Kühlakkus flach lagern"],
      e: "pAVK: Beine nachts tief lagern, Füße warmhalten (S. 26). CVI: Beine hochlegen, Bettende hochstellen (S. 20).", s: "S. 20, 26" },
    { f: "Was ist beim Ulcus cruris mixtum typisch?",
      o: ["Schmerz ist meist führend; Kompression stark eingeschränkt oder kontraindiziert", "Es ist schmerzlos und wird immer voll komprimiert", "Es liegt immer einzeln am Innenknöchel", "Es entsteht nur durch Polyneuropathie"],
      e: "Arterielle und venöse Ursache; meist mehrere Ulcera, Schmerz meist führend; pAVK früh behandeln, um wieder komprimieren zu können.", s: "S. 28" },
    { f: "Was ist die häufigste Ursache diabetischer Fußulcera?",
      o: ["Polyneuropathie allein (ca. 50 %)", "pAVK allein (ca. 50 %)", "Venöse Insuffizienz (ca. 35 %)", "Pilzinfektionen (ca. 15 %)"],
      e: "Ca. 50 % Polyneuropathie, ca. 15 % pAVK, ca. 35 % Kombination aus PNP und Gefäßerkrankung.", s: "S. 29" },
    { f: "Woran erkennt man einen neuropathischen diabetischen Fuß?",
      o: ["Trocken, warm, rosig, Pulse tastbar, schmerzlose Ulcera", "Kühl, blass, Pulse fehlend, starke Schmerzen", "Livide, mit akralen Nekrosen und Ruheschmerz", "Ödematös, mit Stauungsekzem"],
      e: "Neuropathisch: trocken, warm, rosig, Pulse tastbar, schmerzlos (Malum perforans). Ischämisch: kühl, blass/livide, Pulse vermindert, Schmerzen.", s: "S. 30" },
    { f: "Welcher Temperaturunterschied ist typisch für den Charcot-Fuß (DNOAP)?",
      o: ["Überwärmung > 1 °C (oft > 2 °C) gegenüber der Gegenseite", "Der Fuß ist mindestens 2 °C kälter als die Gegenseite", "Kein Unterschied zur Gegenseite", "Überwärmung von mindestens 5 °C"],
      e: "DNOAP: meist einseitige, schmerzlose Destruktion des Fußskeletts; Überwärmung > 1 °C (oft > 2 °C) gegenüber der Gegenseite.", s: "S. 30" },
    { f: "Was bedeutet Wagner-Grad 3?",
      o: ["Tiefes Ulcus bis Knochen und/oder Sehnen", "Oberflächliches Ulcus", "Nekrose von Fußteilen", "Keine Läsion, evtl. Fußdeformation"],
      e: "Wagner: 0 keine Läsion · 1 oberflächlich · 2 bis Sehne/Kapsel · 3 bis Knochen · 4 Nekrose von Fußteilen · 5 Nekrose des gesamten Fußes.", s: "S. 29" },
    { f: "Was bedeutet Armstrong-Stadium C?",
      o: ["Mit Ischämie", "Mit Infektion", "Mit Infektion und Ischämie", "Ohne Infektion und Ischämie"],
      e: "Armstrong: A ohne · B mit Infektion · C mit Ischämie · D mit Infektion und Ischämie.", s: "S. 29" },
    { f: "Womit prüft man die Sensibilität beim diabetischen Fuß?",
      o: ["Monofilament nach Semmes-Weinstein, Stimmgabel nach Rydel-Seiffer, Tip Therm", "Stemmer-Zeichen und Turgor-Test", "ABI-Messung allein", "Ratschow-Lagerungsprobe"],
      e: "Sensibilitätsprüfung: Monofilament nach Semmes-Weinstein, Stimmgabel nach Rydel-Seiffer, Tip Therm.", s: "S. 32" },
    { f: "Wofür steht das „S“ in der IRAS-Regel?",
      o: ["Schulung, Beratung, Information", "Sanierung der Infektion", "Schmerztherapie", "Stenteinlage"],
      e: "IRAS: Infektsanierung · Revaskularisation · Amputation, wenn unumgänglich · Schulung, Beratung, Information.", s: "S. 32" },
    { f: "Was ist bei der Hautpflege des diabetischen Fußes zu beachten?",
      o: ["Zehenzwischenräume nicht eincremen", "Zehenzwischenräume besonders dick eincremen", "Nur alkoholische Lösungen verwenden", "Hornhaut mit Zinkpaste abdecken"],
      e: "W/O-Cremes oder Schäume mit Urea; Zehenzwischenräume nicht eincremen → Mazeration und Pilzbefall vermeiden.", s: "S. 33" },
    { f: "Warum dürfen Hydrokolloide beim diabetischen Fußulkus nur mit engmaschiger Kontrolle verwendet werden?",
      o: ["Bei Polyneuropathie bleibt eine Infektion oft unbemerkt", "Hydrokolloide lösen immer eine Allergie aus", "Sie trocknen die Wunde zu stark aus", "Sie sind zu teuer für die Dauertherapie"],
      e: "Bei PNP fehlen oft Entzündungszeichen; durch den eingeschränkten Gasaustausch kann sich eine Infektion unbemerkt ausbreiten. KI: klinische Infektion, freiliegende Muskeln/Sehnen/Knochen, ischämische Ulcera (pAVK IV).", s: "S. 33" }
  ],

  zusammenfassung: `
<h3>1. Chronische Wunden <span class="seite">S. 2–4</span></h3>
<ul>
  <li>Ca. 1,2 Mio. Menschen in Deutschland haben eine chronische Wunde, meist &gt; 70 Jahre und multimorbid. Im Schnitt dauert es 4 Jahre bis zur ursachengerechten Behandlung; vom ersten Symptom der Grunderkrankung bis zur Wunde ca. 11 Jahre (S. 2).</li>
  <li><b>Chronisch</b> = keine Heilungstendenz nach 4–12 Wochen trotz fachgerechter Therapie (Expertenstandard). <b>Akut</b> = Wundheilungsphasen regelrecht durchlaufen, Heilung innerhalb von 4 Wochen (S. 3–4).</li>
  <li>Von Beginn an chronisch, wenn die Ursache eine chronische Erkrankung ist: Dekubitus, Ulcus cruris (venosum, arteriosum, mixtum), Diabetisches Fußulkus – zugleich die häufigsten chronischen Wundarten (S. 2, 4).</li>
  <li><b>Hard-to-heal:</b> Ulcera &gt; 6 cm², älter als 6 Monate, Ansprechen auf Kompression innerhalb von 6 Monaten unwahrscheinlich. Pathomechanismus: pathologische Entzündung, kein Übergang von der Exsudations- in die Granulationsphase (S. 4).</li>
</ul>

<h3>2. Dekubitus <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 5–13</span></h3>
<p class="merke"><b>Definition (NPUAP 2014):</b> „Ein Dekubitus ist eine lokal begrenzte Schädigung der Haut und/oder des darunter liegenden Gewebes, typischerweise über knöchernen Vorsprüngen, infolge von Druck oder von Druck in Verbindung mit Scherkräften.“ (S. 5)</p>
<ul>
  <li>Scherkräfte verformen tieferliegendes Gewebe; nicht gleichbedeutend mit Reibung (nur oberflächlich, Haut gegen Bettlaken). Es gibt keinen Schwellenwert für schädlichen Druck (S. 5).</li>
  <li><b>Mechanismen:</b> direkte Deformation des Gewebes und Verschluss von Blut- und Lymphgefäßen → Minderversorgung mit O₂, Stoffwechselprodukte nicht abtransportiert. Muskelzellen sind besonders empfindlich: Muskelnekrosen innerhalb von Minuten möglich; Hautzellen widerstandsfähiger. Dekubitus entsteht in der Tiefe, nicht in der Epidermis (S. 5–6).</li>
  <li><b>Kaskade (S. 7):</b> eingeschränkte Mobilität → Druck → Zellverformung, Gefäßkompression → lokale Ischämie → gestörter Zellstoffwechsel (Hypoxie, Muskelnekrose, keine Giftstoff-Abfuhr) → Azidose → Vasodilatation → Flüssigkeitsaustritt → Ödem/Blasen bzw. Gefäßthrombosen → irreversibles Absterben. Mikroklima (Temperatur, Feuchtigkeit) und Scherkräfte verstärken.</li>
  <li><b>Prädilektionsstellen:</b> Knochen mit geringer Weichteildeckung – Kreuz- und Steißbein, Trochanter major, Fersen, Hinterhaupt, Schulterblätter, Dornfortsätze, Ellenbogen, Ohrmuschel, Jochbein, seitliche Knöchel u. a.; außerdem unter Prothesen, Gipsverbänden, engen Schuhen (S. 6, Lösung S. 35). <span class="hand-inline">Handschriftlich: auch Hilfsmittel wie Brille, O₂-Brille, Zahnprothese.</span></li>
  <li><b>Risikofaktoren</b> (&gt; 100 bekannt): die wichtigsten sind Beeinträchtigung der Mobilität, Störung der Durchblutung und beeinträchtigter Hautzustand bzw. vorhandener Dekubitus. Je höher der Unterstützungsbedarf, desto höher das Risiko (S. 8).</li>
</ul>
<div class="tabelle"><table>
  <caption>Klassifikation nach EPUAP/NPUAP/PPPIA ★ (S. 9–10)</caption>
  <thead><tr><th>Kategorie</th><th>Befund</th></tr></thead>
  <tbody>
    <tr><td>I</td><td>intakte Haut mit nicht wegdrückbarer Rötung, meist über knöchernem Vorsprung</td></tr>
    <tr><td>II</td><td>Teilverlust der Haut: flaches, offenes Geschwür mit rosa Wundbett ohne Beläge oder intakte/offene, serumgefüllte Blase</td></tr>
    <tr><td>III</td><td>vollständiger Hautverlust; Subcutis kann sichtbar sein, Knochen, Sehnen, Muskeln liegen nicht offen; ggf. Unterminierungen</td></tr>
    <tr><td>IV</td><td>vollständiger Gewebeverlust mit freiliegenden Knochen, Sehnen oder Muskeln; Osteomyelitis möglich</td></tr>
    <tr><td>keiner Kategorie zuordenbar</td><td>Tiefe unbekannt: Wundbett durch Beläge/Schorf bedeckt</td></tr>
    <tr><td>vermutete tiefe Gewebeschädigung</td><td>Tiefe unbekannt: livider/rötlich-brauner Bereich intakter Haut oder blutgefüllte Blase</td></tr>
  </tbody>
</table></div>
<ul>
  <li>Die Klassifikation ist keine Reihenfolge: Aus Kategorie I kann ohne Gegenmaßnahmen direkt Kategorie IV werden (S. 10).</li>
  <li>Abgrenzung zu Feuchtigkeitswunden (IAD, Mazeration, Intertrigo): Dekubitus ist scharf begrenzt, entsteht in der Tiefe, über knöchernen Vorsprüngen; Feuchtigkeitswunden in Hautfalten (z. B. Gesäßfalte). Kategorie II nicht für Skin Tears oder Pflasterschäden verwenden (S. 9–10).</li>
  <li><b>Fingertest</b> (Übung II, S. 35): Leichter Druck mit dem Finger auf die Rötung. Weißfärbung → Test negativ, kein Dekubitus. Bleibt die Stelle rot → Test positiv, Dekubitus Kategorie I.</li>
</ul>
<h4>Dekubitusprophylaxe (S. 11–12)</h4>
<ul>
  <li>Muss vorausschauend, konsequent und regelmäßig erfolgen – bevor Rötungen auftreten. Abweichungen (z. B. Ablehnung) mit Begründung dokumentieren. Schätzungsweise jeder 3. Mensch mit höhergradigem Dekubitus stirbt an Sepsis (S. 11).</li>
  <li>Bestandteile: Risikoeinschätzung · Förderung der Eigenbewegung · Hautbeobachtung · Hautpflege (sauber, trocken, pH-neutrale Syndets, W/O mit Urea) · Beratung · Positionswechsel (30°-Seitenlage, 135°, schiefe Ebene, Bobath, Weichlagerung, Mikropositionierung als Ergänzung) · Vermeidung therapiebedingten Drucks (Zu- und Ableitungen) · Ernährung · Kontinuität und Evaluation (S. 11–12).</li>
  <li><b>Regelmäßige Druckentlastung gefährdeter Körperstellen = beste Form der Dekubitusprophylaxe</b> (S. 12).</li>
  <li>Ernährung: eiweißreich, ggf. hochkalorisch, Vitamine A, B, C, K und Mineralstoffe; bei Dekubitus Energie 35–40 kcal/kg KG, Protein 2 g/kg KG (S. 12).</li>
</ul>
<div class="tabelle"><table>
  <caption>Hilfsmittel (S. 12)</caption>
  <thead><tr><th>geeignet</th><th>bedingt geeignet</th><th>ungeeignet</th></tr></thead>
  <tbody>
    <tr><td style="font-weight:400;white-space:normal">einfache Kissen und Decken, Still-/Bananenkissen, Luftkammerkissen, Fersenfreilagerungsbandagen, grob-/gemischtporiger PU-Schaum, Schaumstoffmatratzen</td><td>Weichlagerungsmatratzen (Verlust der Feinmotorik), Wechseldruckmatratzen (laut, Muskeltonus ↑, Schlafstörung; kontraindiziert bei Schmerzpatient:innen)</td><td>Luftringe, Lochkissen, Gelkissen, Fellfersenschoner, Lagerungsfell, Wasserkissen, Wassermatratzen, wassergefüllte Handschuhe</td></tr>
  </tbody>
</table></div>
<p>Hilfsmittel ersetzen niemals Anleitung, Unterstützung und Motivation zur Eigenbewegung.</p>
<div class="tabelle"><table>
  <caption>Phasengerechte Wundversorgung (S. 13)</caption>
  <thead><tr><th>Phase / Befund</th><th>Ziel und Versorgung</th></tr></thead>
  <tbody>
    <tr><td style="white-space:normal">Reinigung: schwarze, trockene Nekrose</td><td>Débridement, Feuchtigkeit zuführen, Aufweichen → Hydrogele + Deckverband oder Feuchtverbände</td></tr>
    <tr><td style="white-space:normal">Reinigung: graugelbe, feuchte Nekrose</td><td>Débridement, Beläge lösen, feuchtes Milieu → Alginate, PU-Schäume, Hydrokolloide oder Hydrogele + Deckverband</td></tr>
    <tr><td style="white-space:normal">Reinigung: infiziert + belegt</td><td>Sekret, Eiter, Bakterien aufnehmen → Aktivkohle-Silber-Auflagen, Alginate, PU-Schäume</td></tr>
    <tr><td style="white-space:normal">Granulation: blassrosa, schlecht</td><td>Exsudat aufnehmen, feucht halten → Alginate, Hydrokolloide, Kollagenschwämme; Anregung: PU-Wundauflagen, Elektrostimulation, Vakuumtherapie</td></tr>
    <tr><td style="white-space:normal">Granulation: rot, fest</td><td>vor Austrocknung und Verkleben schützen → Hydrokolloide, Hydrogele, Hydropolymere, Kollagen, PU-Schaum</td></tr>
    <tr><td style="white-space:normal">Epithelisierung</td><td>Schutz vor Austrocknung und mechanisch → dünne Hydrokolloide, Hydropolymere oder Hydrogele + Deckverband</td></tr>
  </tbody>
</table></div>
<p>Infektionen mit Antiseptika oder NaCl-/Ringerlösung spülen; bei Stuhlinkontinenz im Sakralbereich Analtampons; Schmerztherapie mit Analgetika.</p>

<h3>3. Ulcus cruris – Überblick <span class="seite">S. 14</span></h3>
<ul>
  <li>Mindestens bis in die Dermis reichender Substanzdefekt, meist am distalen Unterschenkel. 60–70 % venös, ca. 10 % arteriell, ca. 10 % gemischt (mixtum), ca. 10 % andere Ursachen (Infektionen, Mykosen, Malignome, Kalziphylaxie, Medikamente).</li>
  <li>Ein Geschwür = Ulcus cruris; mehrere an einem Bein = Ulcera cruris; an beiden Beinen mehrere = Ulcera crurum.</li>
</ul>

<h3>4. Ulcus cruris venosum <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 14–22</span></h3>
<ul>
  <li>Venöses Beingeschwür infolge einer CVI – Komplikation der CVI. Ursachen: primäre Varikosis, Phlebothrombose, Thrombophlebitis, posttraumatische Verletzungen, Angiodysplasien (S. 14).</li>
  <li>Venöser Rückfluss: ca. 10 % oberflächlich (epifaszial), ca. 90 % tief (subfaszial); Hauptkraft ist die Wadenmuskelpumpe; Venenklappen = Volumenventile (S. 14).</li>
  <li><b>Pathogenese (S. 15):</b> gestörter Rückfluss (Phlebothrombose, postthrombotisches Syndrom, Varikosis) → Privatkreislauf, Druckerhöhung bis in die Kapillaren → Ödem → Lymphsystem überlastet → Dermatoliposklerose → längere Diffusionsstrecke → Minderversorgung → Ulcus.</li>
  <li><b>Therapieresistent:</b> keine Heilungstendenz binnen 3 Monaten unter adäquater phlebologischer Therapie oder nach 12 Monaten nicht abgeheilt (S. 15).</li>
  <li><b>Klinik:</b> typischerweise an der Knöchelinnenseite; rund, oval, zackig oder gamaschenartig; Wundgrund schmierig-fibrinös bis eitrig; Umgebung oft ekzematös. Komplikationen: Stauungsdermatitis, Infektion, Erysipel, Kontaktallergien, Karzinom (S. 15–16).</li>
  <li><b>Diagnostik (S. 16):</b> Anamnese, Inspektion, Palpation, Wundabstrich, Umfangsmessung, Gangbild, neurologische Untersuchung, Doppler-/Farbduplexsonografie, ABI/KADI (arterielle Mitbeteiligung ausschließen), ggf. Phlebografie, Histologie, Ausschluss von Diabetes, Polyneuropathie, pAVK, Blutuntersuchung.</li>
</ul>
<div class="tabelle"><table>
  <caption>CVI nach Widmer (mod. nach Marshall/Wüstenberg) (S. 15)</caption>
  <thead><tr><th>Grad</th><th>Klinisches Bild</th></tr></thead>
  <tbody>
    <tr><td>I</td><td>Corona phlebectatica (Fußrand), Phlebödem</td></tr>
    <tr><td>II</td><td>Ödem, Dermatoliposklerose, Atrophie blanche, Purpura jaune d’ocre, Stauungsekzem</td></tr>
    <tr><td>IIIa</td><td>abgeheiltes Ulcus (Ulcusnarbe)</td></tr>
    <tr><td>IIIb</td><td>florides Ulcus</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Therapie (S. 17):</b> zuerst Kausaltherapie. Endovaskulär/operativ: Sklerotherapie, Radiofrequenzablation, endovenöse Lasertherapie, Crossektomie, Perforansligatur, Phlebektomie, Varizenstripping. Konservativ: phasengerechte Wundtherapie, Kompression, Hautpflege, Gehtraining (Sprunggelenk), Gewichtsreduktion, Ernährung, Flüssigkeit, MLD, Wechselbäder/kaltes Abduschen. Varikosis und postthrombotisches Syndrom sind nicht heilbar.</li>
  <li><b>Lokaltherapie (S. 18):</b> erst Wundreinigung/Débridement; Antiseptika bei kritischer Kolonisation oder Infektion, systemische Antibiotika kritisch; Umgebungshaut mit Acrylat-Copolymer schützen; anfangs Superabsorber/Hydrokapillarverbände, danach feinporige PU-Schäume; Wundauflagen ohne Kleberand.</li>
</ul>
<h4>Kompressionstherapie (S. 18–20)</h4>
<ul>
  <li>Steigert venösen und lymphatischen Rückfluss, verkleinert den Venendurchmesser → fast doppelte Fließgeschwindigkeit, weniger transmuraler Druck, Venenklappen schließen wieder.</li>
  <li>Drei Phasen: Entstauungsphase (PKV mit Kurzzugbinden/Mehrkomponentensystemen oder MAK) → Erhaltungsphase (MKS, Ulcus-Strumpfsysteme) → Prävention nach Abheilung (meist MKS der KKL II).</li>
  <li>Methoden: PKV (Binden, v. a. Entstauung) · MKS (Strumpf, Erhaltung und Prävention) · MAK (Klett-/Wrap-Systeme, Entstauung) · IPK (nur unterstützend, kein Ersatz).</li>
  <li>Eigenbewegung ist stets Bestandteil einer effektiven Kompressionstherapie (Sprunggelenksbeweglichkeit, Abrollen, Fußgymnastik, Nordic Walking; bei Bettlägerigen Drainagebeutel-Training).</li>
</ul>
<p class="merke"><b>3S-3L-Regel ★ (S. 21):</b> „Sitzen und Stehen ist Schlecht, Lieber Laufen und Liegen!“</p>
<ul>
  <li><b>Weitere Beratung (S. 20–21):</b> flache Schuhe; keine einschnürende Kleidung; Beine hochlegen (20–30°, über Herzniveau), nicht übereinanderschlagen; Bettende hochstellen; Kneipp, kalte Güsse; Wärme &gt; 28 °C meiden; Venensport; Gewicht reduzieren; trinken; ballaststoffreich essen; Kompressionsstrümpfe lebenslang; Nägel kurz.</li>
  <li><b>Hautpflege unter Kompression (S. 21–22):</b> mindestens täglich, am besten abends; Creme muss vor dem Anziehen eingezogen sein; W/O-Basis mit Urea und/oder Glyzin; meiden: Alkohol, Allergene (Parabene, Perubalsam, Wollwachs, Propylenglykol, Ringelblume, Rosskastanie), Duftstoffe; sehr fetthaltige Salben im Sommer → Wärmestau, Follikulitis; Baumwollschlauchverband unter der Bandage; lockere Schuppen entfernen.</li>
</ul>

<h3>5. Ulcus cruris arteriosum <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 22–27</span></h3>
<ul>
  <li>Substanzdefekt infolge der pAVK; Ursache in ca. 95 % Atherosklerose. In Deutschland ca. 4,5 Mio. Betroffene (S. 22).</li>
  <li>Ursachen der Minderdurchblutung: Atherosklerose, arterielle Embolie, Vaskulitis, Gerinnungsstörungen, Veranlagung, Trauma. Risikofaktoren: Nikotin, Hypertonie, Diabetes, Dyslipidämie, abdominale Adipositas, Ernährung, Bewegungsmangel, Hyperfibrinogenämie, Homocysteinämie (&gt; 15 µmol/l), Polyarthritis (S. 23).</li>
  <li><b>Klinik (S. 24):</b> an äußeren Fußrändern, Außenseiten der Unterschenkel, Außenknöcheln; scharf begrenzt, wie ausgestanzt; Haut blass, weiß, marmoriert oder livide, glänzend, haarlos; verdickte Zehennägel; distale Hypothermie; tiefe Wunden mit freiliegenden Sehnen und Knochen.</li>
  <li><b>Diagnostik (S. 24–25):</b> Inspektion, Pulse, KADI/ABI – Achtung: bei Mönckeberg-Sklerose falsch hohe Werte (wichtig: periphere Dopplerdrücke &lt; 70 mmHg → fehlende Wundheilung); Doppler/Duplex, tcpO₂, Labor, Laufband, EKG, Wundabstrich, Angiografie, DSA (Nierenfunktion beachten).</li>
</ul>
<div class="tabelle"><table>
  <caption>Klassifikation der pAVK (S. 24)</caption>
  <thead><tr><th>Fontaine</th><th>Klinik</th><th>Rutherford</th></tr></thead>
  <tbody>
    <tr><td>I</td><td>asymptomatisch</td><td>Grad 0 / Kat. 0</td></tr>
    <tr><td>IIa</td><td>Gehstrecke &gt; 200 m</td><td>Grad I / Kat. 1 (leichte Claudicatio)</td></tr>
    <tr><td>IIb</td><td>Gehstrecke &lt; 200 m</td><td>Grad I / Kat. 2–3 (mäßige bis schwere Claudicatio)</td></tr>
    <tr><td>III</td><td>ischämischer Ruheschmerz</td><td>Grad II / Kat. 4</td></tr>
    <tr><td>IV</td><td>Ulcus, Gangrän</td><td>Grad III / Kat. 5 (kleinflächige) bzw. 6 (großflächige Nekrose)</td></tr>
  </tbody>
</table></div>
<p class="merke"><b>IRAN-Prinzip ★ (S. 25):</b> Infektionskontrolle, Mumifizierung der Gangrän · Revaskularisation · Amputation bzw. Nekroseentfernung im infektionsfreien Stadium · Nachsorge (Wundbehandlung, Schuhwerk, Gefäßsport, Risikofaktoren).</p>
<p class="warnung">Ohne Abklärung des Gefäßstatus und ohne Zweitmeinung keine Amputation!</p>
<ul>
  <li><b>Bei möglicher Revaskularisation (S. 25):</b> invasiv (PTA, Stent, Bypass, Patch; danach Débridement); systemisch (Durchblutung verbessern, Infusionen, ggf. Antibiotika, Risikofaktoren, Gehtraining im Stadium IIa); lokal (Wundreinigung, Nekrosen abtragen, Abszesse entlasten, phasengerechte Auflagen, Druckreduzierung). <b>Bei kritischer Ischämie (Knöchelarteriendruck &lt; 50 mmHg) keine Kompressionstherapie!</b></li>
  <li><b>Ohne Revaskularisationsmöglichkeit (S. 26):</b> mumifizierte trockene Nekrose → trocken behandeln; feuchte Wunde → lokal antiseptisch, Infektionsprophylaxe.</li>
  <li><b>Unterstützend (S. 26):</b> engmaschige Nachsorge, Thrombozytenfunktionshemmer/ggf. Antikoagulation, Gehtraining 2–3×/Woche, Rauchstopp, orthopädisches Schuhwerk, Fußpflege, keine einengende Kleidung, Beine nachts tief lagern, Füße warmhalten, regelmäßige Puls- und Hautkontrolle.</li>
</ul>
<div class="tabelle"><table>
  <caption>Ulcus cruris venosum vs. arteriosum ★ (Übung III, S. 27, Lösung S. 36)</caption>
  <thead><tr><th>Kriterium</th><th>venosum</th><th>arteriosum</th></tr></thead>
  <tbody>
    <tr><td>Grunderkrankung</td><td>CVI</td><td>pAVK</td></tr>
    <tr><td>Lokalisation</td><td>Unterschenkel-Vorderseite oder Innenknöchel; ggf. gamaschenartig</td><td>Unterschenkel-Außenseite, Außenknöchel, äußere Fußränder</td></tr>
    <tr><td>Schmerzen</td><td>unterschiedlich; Linderung durch Hochlagern</td><td>stark; Ruheschmerz nachts → Linderung durch Herabhängen des Beins; Claudicatio</td></tr>
    <tr><td>Haut</td><td>trocken, schuppig, Hyperpigmentierung, Atrophie blanche, Purpura jaune d’ocre, Dermatoliposklerose, Stauungsekzem</td><td>blass, weiß, marmoriert oder livide, glänzend, haarlos; Nekrosen/Gangrän an Zehen; verdickte Nägel</td></tr>
    <tr><td>Ödeme</td><td>Knöchel- und Unterschenkelödeme</td><td>keine</td></tr>
    <tr><td>Hauttemperatur</td><td>warm</td><td>kalt</td></tr>
    <tr><td>Fußpulse</td><td>tastbar</td><td>kaum oder nicht tastbar</td></tr>
    <tr><td>Wundrand</td><td>diffus, unregelmäßig, flach</td><td>klar abgegrenzt, wie ausgestanzt</td></tr>
    <tr><td>Wunde</td><td>feucht-glänzend, viel Exsudat, schmierig-fibrinöse Beläge</td><td>wenig Exsudat, trocken; ggf. freiliegende Sehnen/Knochen, Nekrosen</td></tr>
    <tr><td>Wundtiefe</td><td>bis in die Subcutis</td><td>tief – Sehnen, Knochen können sichtbar sein</td></tr>
  </tbody>
</table></div>

<h3>6. Ulcus cruris mixtum <span class="seite">S. 28</span></h3>
<ul>
  <li>Arterielle und venöse Ursache; meist mehrere Ulcera ohne typische Prädilektionsstellen; führendes Symptom ist meist der Schmerz. <span class="hand-inline">Handschriftlich: „arteriovenös“.</span></li>
  <li>Kompressionstherapie ist durch die arterielle Komponente stark eingeschränkt oder kontraindiziert → pAVK frühzeitig behandeln, um später wieder komprimieren zu können.</li>
</ul>

<h3>7. Diabetisches Fußulkus <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 28–34</span></h3>
<ul>
  <li>Ca. 6 Mio. Menschen mit Diabetes in Deutschland. Diabetisches Fußsyndrom = Spätkomplikation durch Makro- und Mikroangiopathie, Neuropathie und Chondroarthropathie; umfasst alle pathologischen Veränderungen am Fuß. 2–10 % aller Diabetiker entwickeln ein Fußulkus. Jährlich ca. 8.500 Major- (oberhalb des Sprunggelenks) und ca. 30.400 Minoramputationen (S. 28).</li>
  <li>Ursachen: ca. 50 % Polyneuropathie, ca. 15 % pAVK, ca. 35 % Kombination (S. 29).</li>
  <li><b>Polyneuropathie (S. 29):</b> sensibel (Kribbeln, Ameisenlaufen, brennende Schmerzen, Taubheit, Watte-Gefühl, verminderte Temperaturempfindung, schmerzlose Wunden); motorisch (Faszikulationen, Krämpfe, Muskelschwäche, frühes Zeichen: Parese der Zehenspreizung); autonom (Hypo-/Anhidrosis, Ödem, Ulcus, Osteoarthropathie, Ruhetachykardie, Gastroparese, Blasenstörung u. a.).</li>
</ul>
<div class="tabelle"><table>
  <caption>Arten des Diabetischen Fußulkus (S. 30)</caption>
  <thead><tr><th>Form</th><th>Merkmale</th></tr></thead>
  <tbody>
    <tr><td>neuropathisch</td><td>trockener, warmer, rosiger Fuß; Fußpulse tastbar; Sensibilitätsstörung (Vibration, Druck, Schmerz, Temperatur); schmerzlose Ulcera (Malum perforans)</td></tr>
    <tr><td>ischämisch</td><td>kühler, blasser, ggf. livider Fuß; Pulse vermindert oder fehlend; krampfartige Schmerzen beim Gehen oder in Ruhe; akrale Nekrosen, Gangrän</td></tr>
    <tr><td style="white-space:normal">ischämisch + neuropathisch</td><td>Zeichen des ischämischen Fußes, jedoch ohne Schmerzen</td></tr>
    <tr><td style="white-space:normal">Sonderform DNOAP (Charcot-Fuß)</td><td>meist einseitige, schmerzlose Destruktion des Fußskeletts nach unbemerkten Traumata; Nekrosen an Fußgelenken; Lymphödem; Überwärmung &gt; 1 °C (oft &gt; 2 °C) gegenüber der Gegenseite</td></tr>
  </tbody>
</table></div>
<div class="tabelle"><table>
  <caption>Klassifikation nach Wagner und Armstrong ★ (S. 29)</caption>
  <thead><tr><th>Grad</th><th>Wagner (Stadium A = ohne Infektion/Ischämie)</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>keine Läsion, evtl. Fußdeformation, Cellulitis, Hyperkeratose</td></tr>
    <tr><td>1</td><td>oberflächliches Ulcus</td></tr>
    <tr><td>2</td><td>tiefes Ulcus bis Sehne oder Kapsel</td></tr>
    <tr><td>3</td><td>tiefes Ulcus bis Knochen und/oder Sehnen</td></tr>
    <tr><td>4</td><td>Nekrose von Fußteilen</td></tr>
    <tr><td>5</td><td>Nekrose des gesamten Fußes</td></tr>
  </tbody>
</table></div>
<p>Armstrong-Stadien: A ohne Zusatz · B mit Infektion · C mit Ischämie · D mit Infektion und Ischämie.</p>
<p class="hand">Als Prüfungshinweis vermerkt: Klassifikationen nach Fontaine, Widmer, Wagner.</p>
<ul>
  <li><b>Risikofaktoren (S. 31):</b> u. a. Neuropathie, pAVK, Alter &gt; 60, Adipositas (BMI &gt; 35), Nikotin, Alkohol, Sehschwäche, Hornhaut, Fußdeformität, falsche Fußpflege, Barfußlaufen, ungeeignetes Schuhwerk, nicht bemerkte Bagatellverletzungen, eingeschränkte Gelenkbeweglichkeit, vorangegangene Amputation. Läsion meist im Vorfuß- und Zehenbereich.</li>
  <li><b>Diagnostik (S. 32):</b> Untersuchung von Farbe, Temperatur, Puls- und Reflexstatus; tcpO₂; Podografie; KADI; Duplex; MR-Angiografie; Monofilament nach Semmes-Weinstein, Stimmgabel nach Rydel-Seiffer, Tip Therm; Röntgen/CT/MRT (Charcot).</li>
</ul>
<p class="merke"><b>IRAS-Regel ★ (S. 32):</b> Infektsanierung · Revaskularisation · Amputation, wenn unumgänglich · Schulung, Beratung, Information. Ziele: Lebensqualität, Senkung des Amputationsrisikos, Funktionserhalt – nur multiprofessionell erreichbar.</p>
<ul>
  <li><b>Therapie (S. 32):</b> Blutzucker optimieren, Grunderkrankungen behandeln, Infektionskontrolle, Débridement, konsequente und vollständige Druckentlastung (Gehstützen, Orthesen, Rollstuhl, Total Contact Cast, Bettruhe), phasengerechte Wundversorgung, Gefäßtherapie, Fußchirurgie, ggf. Angioplastie/Amputation (Zweitmeinung!), Schulung.</li>
  <li><b>Hautpflege (S. 33):</b> W/O-Cremes oder Schäume mit Urea; Zehenzwischenräume nicht eincremen (Mazeration, Pilze).</li>
  <li><b>Wundversorgung (S. 33):</b> Verdacht auf Infektion → Antiseptika, Auflagen mit Polihexanid; systemische Antibiose nach Antibiogramm. Trockene Nekrosen bei arterieller/gemischter Ursache nicht einweichen und erst nach Revaskularisation entfernen. Standard: PU-Schaumverbände ohne Klebeflächen; Fixierung locker, an Zehen kein Druck durch Drehungen. Hydrokolloide nur mit engmaschiger Kontrolle (Infektion wird bei PNP nicht bemerkt); kontraindiziert bei klinischer Infektion, freiliegenden Muskeln/Sehnen/Knochen, ischämischen Ulcera (pAVK IV).</li>
  <li><b>Prävention (S. 34):</b> tägliche Fußinspektion, Blutzuckerkontrolle, regelmäßige Fuß- und Nagelpflege, Hautpflege, Verletzungen vermeiden, geeignete Schuhe – nur wirksam bei aktiver Mitarbeit und regelmäßiger Schulung.</li>
</ul>
`
});
