/*
 * Thema: Einflussfaktoren auf die Wundheilung
 * Quelle: murimed-Kursheft Wundexperte Modul II (Seitenangaben beziehen sich auf das Heft).
 * Inhalte übernommen aus "Zusammenfassung_Einflussfaktoren_Wundheilung.pdf" und
 * "Lernkarten_Einflussfaktoren_Wundheilung.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 */
Lernapp.thema({
  id: "einflussfaktoren",
  titel: "Einflussfaktoren auf die Wundheilung",
  kurz: "Einflussfaktoren",
  quelle: "murimed-Kursheft Wundexperte Modul II",
  hinweis:
    "Quelle ist ausschließlich das Kursheft; Seitenzahlen in Klammern. ★ = im Heft handschriftlich als prüfungsrelevant markiert („Prüfung“ bzw. „X Prüfung“/oranges X). Handschriftliche Notizen sind als solche gekennzeichnet und wurden nicht korrigiert. Die im Heft zitierten Primärquellen (Danzer 2019, Protz/Timm 2019, DNQP, DGE u. a.) wurden nicht separat geprüft.",

  karten: [
    { k: "Wundheilung", f: "Wie definiert das Heft die Wundheilung?",
      a: "Komplexer Prozess: physiologische Vorgänge zur Regeneration zerstörten Gewebes, die v. a. durch Neubildung von Bindegewebe und Kapillaren den Wundverschluss bewirken (Pfitzmann).", s: "S. 3" },
    { k: "Wundheilung", f: "Primäre vs. sekundäre Wundheilung? ★",
      a: "Primär: aseptische OP-Wunden/frische Verletzungen, Ränder adaptiert und glatt; minimale Narbe, ca. 10 Tage (handschr.: Naht/Klammern, 6–10 d).\nSekundär: Lücke füllt sich mit Granulationsgewebe, starke Narbe; alle chronischen Wunden und Verbrennungen; dauert länger, Infektionsrisiko.", s: "S. 3, 5", h: true },
    { k: "Wundheilung", f: "Wie viele Wundheilungsphasen gibt es? ★",
      a: "5: Hämostase, Exsudation, Granulation, Epithelisierung, Remodulierung.\n3 (Praxis): Exsudations-, Granulations-, Epithelisierungsphase (Hämostase + Exsudation und Epithelisierung + Remodulierung zusammengefasst).\nHandschr.: beides richtig.", s: "S. 3–4", h: true },
    { k: "Wundheilung", f: "Was passiert in der Hämostase?",
      a: "Unmittelbare Reaktion auf die Verletzung: Kapillaren ziehen sich zusammen, Vasokonstriktion, Blutgerinnsel – Thrombozyten und Erythrozyten bilden einen Thrombus als Grundlage der Reparation.", s: "S. 3–4" },
    { k: "Wundheilung", f: "Was kennzeichnet die Exsudationsphase?",
      a: "Reinigungsphase: starke Exsudation, Entzündungsreaktion, Keimabwehr, Abtransport von Zelltrümmern; Fibroblastenvermehrung leitet Neoangiogenese ein. Bei Immunschwäche abgeschwächte/verzögerte Entzündung.", s: "S. 3–4" },
    { k: "Wundheilung", f: "Was kennzeichnet die Granulationsphase?",
      a: "Akut ab dem 2. Tag, bis zu 14 Tage. Fibroblasten bauen gefäß-, zell- und kollagenreiches Gewebe; Neoangiogenese, Wundkontraktion, nachlassende Exsudation. Gewebe tiefrot, gekörnt, feucht glänzend.", s: "S. 3–4" },
    { k: "Wundheilung", f: "Epithelisierung und Remodulierung?",
      a: "Epithelisierung: Granulationsgewebe trocknet ab, Epithel bildet sich, „Überhäutung“, erstes Narbengewebe (handschr.: feuchtes Milieu wichtig!).\nRemodulierung: über Monate; zell- und gefäßarme Narbe ohne Hautanhangsorgane, max. 80 % der Belastbarkeit.", s: "S. 3–4", h: true },
    { k: "Wundheilung", f: "Was ist Hypergranulation? (handschr.)",
      a: "„Wildes Fleisch“: zu feucht, über das Hautniveau hinaus, dunkelrot, körnig, glänzend feucht. Zählt zu den lokalen Einflussfaktoren.", s: "S. 4 handschr., S. 5, 27", h: true },
    { k: "Grundlagen", f: "Was bedeutet Kausaltherapie? Beispiele?",
      a: "Behebung der Wundursache – muss vor dem Heilungsprozess erfolgen.\npAVK: Durchblutung (Dilatation, Bypass) · CVI: Kompression · Dekubitus: Druck-, Reibe-, Scherkräfte minimieren · DFU: Stoffwechseleinstellung + Druckentlastung.", s: "S. 5" },
    { k: "Grundlagen", f: "Nenne allgemeine (systemische) Einflussfaktoren.",
      a: "Entstehen im Körper oder Geist: Allgemeinzustand, Mobilität, Ernährung, Flüssigkeit, Schmerz, Hautzustand, Immunstatus, Medikamente, Nikotin, Adipositas, Lebensalter, Psyche, Adhärenz, Stoffwechsel-/Gefäßerkrankungen, Entzündungen/Infektionen.", s: "S. 5" },
    { k: "Grundlagen", f: "Nenne lokale Einflussfaktoren.",
      a: "Entstehen in der Wunde selbst: Entzündung, Infektion, Hypergranulation, Druck, Scherkräfte, hypertrophe Narbe, Auskühlung/Austrocknung, Ödeme, Hämatome, Nekrosen, Schorf, Dehiszenz, Fremdkörper, OP-Technik (Naht unter Spannung).", s: "S. 5, 27" },
    { k: "Allgemein", f: "Welche Rolle spielt der Allgemeinzustand?",
      a: "Wundheilung hat hohen Energiebedarf. Je schlechter der Allgemeinzustand, desto schlechter die Wundheilung; Erhalt lebenswichtiger Organe hat Vorrang.", s: "S. 6" },
    { k: "Ernährung", f: "Was ist Malnutrition – wen betrifft sie? (Übung I)",
      a: "Fehl- bzw. Mangelernährung: Ungleichgewicht zwischen Makro-, Mikronährstoffen und Flüssigkeit. Möglich bei Über-, Normal- und Untergewicht.", s: "S. 7, 30" },
    { k: "Ernährung", f: "Wie verändert sich der Bedarf im Alter?",
      a: "Bewegung, Muskelmasse, Stoffwechselleistung und Fettmasse ↓ → Energiebedarf ↓, Vitamin- und Mineralstoffbedarf bleibt gleich → weniger Energiedichte, mehr Vitamine/Mineralstoffe.", s: "S. 7" },
    { k: "Ernährung", f: "Wie erfasst man den Ernährungszustand? ★ (Übung I)",
      a: "Lösung: Screening, vertiefendes Assessment (handschr. Reihenfolge: 1. Screening, 2. vertieftes Assessment). Text: Laboruntersuchungen, Screening. Frühzeitiges Erkennen ist Voraussetzung für Gegenmaßnahmen.", s: "S. 7, 13, 30", h: true },
    { k: "Ernährung", f: "Was sind Makronährstoffe? ★",
      a: "Kohlenhydrate ca. 50–60 % – wichtigste Energiequelle\nFette ca. 30–35 % – Energiespeicher, Wärme-/Kälteschutz, fettlösliche Vitamine E, D, K, A („EDEKA“)\nProteine ca. 10–15 % – Struktur, Abwehr, Transport.", s: "S. 8, 11", h: true },
    { k: "Ernährung", f: "Welche Aufgaben haben Proteine und Albumin?",
      a: "Strukturproteine (Kollagen, Keratin, Elastin), Schutzproteine (Fibrinogen, Thrombin), Transportproteine (Hämoglobin, Transferrin), Enzyme (Kollagenaufbau). Albumin reguliert Flüssigkeit in Gefäßen – Mangel → Eiweißödeme.", s: "S. 8" },
    { k: "Ernährung", f: "Welche Nährstoffe sind bei bestehenden Wunden wichtig? ★",
      a: "Zell-/Kollagenaufbau: Proteine, Vitamin A, alle B-Vitamine, Vitamin C, Albumin, Zink, Eisen. Antientzündlich/Radikalfänger: Vitamin E.\nDazu ausreichend Flüssigkeit (Verlust durch Fieber, Wundsekret).", s: "S. 7–8, 10" },
    { k: "Ernährung", f: "Wofür werden Vitamin C, Zink und Eisen benötigt?",
      a: "Vitamin C: Kollagensynthese, Immunsystem, Eisenresorption, Regeneration Vit E.\nZink: Wundverschluss, Zellwachstum, Immunsystem.\nEisen: Sauerstofftransport (Hämoglobin), Kollagensynthese.", s: "S. 9–10" },
    { k: "Ernährung", f: "Mengen- vs. Spurenelemente?",
      a: "Mengenelemente (> 50 mg/kg): Natrium, Kalium, Kalzium, Magnesium.\nSpurenelemente (< 50 mg/kg): Eisen, Selen, Jod, Zink, Mangan.\nBeide essentiell, mit der Nahrung aufzunehmen.", s: "S. 10" },
    { k: "Ernährung", f: "Wie können Nährstoffe zugeführt werden? ★",
      a: "Tägliche Nahrung · Anreicherung (Sahne, Butter, Öl, Nüsse, Proteinpulver, Vitaminpräparate) · angereicherte Trinknahrung · Sonden-/parenterale Ernährung. Individuelle Beratung durch Expert:innen.", s: "S. 11" },
    { k: "Ernährung", f: "Folgen der Malnutrition für die Wundheilung?",
      a: "Verlängerte Entzündungsphase, Kollagensynthese ↓, Immunschwäche, Dekubitusrisiko ↑, Fibroblastenaktivität ↓, Angiogenese ↓, Gerinnungsstörung (Vit-K-Mangel), Proteinmangelödeme, mechanische Stabilität ↓.", s: "S. 11" },
    { k: "Ernährung", f: "Wie kann Mangelernährung Wunden verursachen?",
      a: "Antriebsarmut + Immobilität → Dekubitus\nKachexie → Nekrose\nEiweißmangelödeme → Ulcus.", s: "S. 12" },
    { k: "Bewegung", f: "Warum fördert Bewegung die Wundheilung?",
      a: "Muskelaktivität, Gelenkbeweglichkeit, Durchblutung (O₂, Nährstoffe), Kollateralenbildung, Allgemeinzustand; Positionswechsel vermeidet Druckschäden. Aktiv und passiv wirksam. Handschr.: Muskelpumpe, venöser Rückfluss.", s: "S. 12", h: true },
    { k: "Schmerz", f: "Warum beeinträchtigt Schmerz die Wundheilung?",
      a: "Stress → Cortison (negativ in jeder Phase) und Adrenalin (Gefäßverengung → Blut-, Nährstoff-, O₂-Zufuhr ↓); Chronifizierung möglich, Lebensqualität ↓.", s: "S. 13" },
    { k: "Schmerz", f: "Wie definiert die IASP Schmerz?",
      a: "Unangenehmes Sinnes- und Gefühlserlebnis, verknüpft mit aktueller oder potenzieller Gewebeschädigung. Warnsignal – Polyneuropathie kann die Warnfunktion beeinträchtigen.", s: "S. 13" },
    { k: "Schmerz", f: "Nenne die vier Schmerzarten.",
      a: "Nozizeptiv: Reiz bei Gewebsschädigung · neuropathisch: Nervenschädigung, einschießend, elektrisierend · noziplastisch: ohne Gewebsschaden, Sensibilisierung · psychogen: negative Erfahrungen, kein organischer Schaden.", s: "S. 13" },
    { k: "Schmerz", f: "Wie lassen sich die Schmerzarten lindern?",
      a: "Nozizeptiv und neuropathisch: nicht-medikamentös und medikamentös. Psychogen: nicht durch Schmerzmittel, sondern vertrauensbasierte Kommunikation, Zuwendung, soziale Unterstützung.", s: "S. 14" },
    { k: "Schmerz", f: "Akuter, prozeduraler, chronischer Schmerz?",
      a: "Akut: Warnsignal, an Heilungsdauer gekoppelt.\nProzedural: akuter Schmerz bei Versorgungen, z. B. Wundbehandlung.\nChronisch: mind. 3 Monate, keine Warnfunktion mehr.", s: "S. 14" },
    { k: "Schmerz", f: "Wie wird Schmerz erfasst?",
      a: "Subjektiv, nicht messbar. Vor, während, nach der Behandlung und bei Statusänderung; NRS, VRS, GRS/SAS – immer dieselbe Skala. Bei Demenz Fremdeinschätzung mit BESD oder BISAD.", s: "S. 14–15" },
    { k: "Schmerz", f: "Welche Faktoren lösen Wundschmerz aus?",
      a: "Infektion (Erysipel), Druck, Ödem, Arthritis, Dermatitis, pAVK, Neuropathie, Wundart, Trauma, Nahtdehiszenz, viel Exsudat, ausgetrocknete Wunde, Wundbehandlung, Entfernen der Auflage, einschnürende Verbände.", s: "S. 15" },
    { k: "Schmerz", f: "Schmerzvermeidung vor dem Verbandwechsel?",
      a: "Informieren, Schmerz ernst nehmen, Erfahrung einbeziehen, Vorgehen absprechen, Analgetika rechtzeitig (Wirkeintritt), Zugluft vermeiden, stressfreie Umgebung, gute Vorbereitung, ansprechen/Pausen, Stoppsignale vereinbaren.", s: "S. 16–17" },
    { k: "Schmerz", f: "Schmerzvermeidung während des Verbandwechsels?",
      a: "Behutsam reinigen (angefeuchtete Kompressen andrücken, nicht kräftig wischen), Reize vermeiden, zügig verbinden, Sekundärverband nicht zu stramm, feuchte Auflagen, Ablösen anfeuchten, angewärmte Spülung mit wenig Druck, Auflagen ohne Kleberand.", s: "S. 17" },
    { k: "Schmerz", f: "Erkläre das WHO-Stufenschema.",
      a: "I: Nichtopioid (ASS, NSAR, Metamizol)\nII: schwaches Opioid (Tramadol, Tilidin, Codein) + Stufe I\nIII: starkes Opioid (Morphin, Fentanyl, Oxycodon …) + Stufe I\nGgf. Koanalgetika/Adjuvantien; Start nach Schmerzstärke; II + III nicht kombinieren.", s: "S. 17" },
    { k: "Schmerz", f: "Weitere schmerzreduzierende Strategien?",
      a: "Kälte-/Wärmeanwendungen, TENS, Ultraschall, Akupunktur (nur geschultes Personal), Massage/Positionierung (Kinästhetik), Meditation, Atem- und Entspannungsübungen, Musik.", s: "S. 18" },
    { k: "Haut", f: "Hautprobleme bei Diabetes, CVI und pAVK?",
      a: "Diabetes: trocken, Pilzinfektionen, Rhagaden, Malum perforans.\nCVI: Stauungsekzem, Ödeme, Dermatoliposklerose, Hyperpigmentierung.\npAVK: livide, kühl, dünn, glänzend; Zellregeneration stark verzögert.", s: "S. 19" },
    { k: "Haut", f: "Grundsätze der Hautpflege?",
      a: "Trocken und sauber; hautneutrale, leicht saure Syndets, keine alkalischen Seifen; trockene Haut mit W/O; keine O/W bei problematischer Haut (Dochteffekt); keine Parfüm-, Konservierungsstoffe, Emulgatoren. Feucht auf feucht, fett auf trocken.", s: "S. 20" },
    { k: "Haut", f: "Hautschutz bei bestehenden Wunden?",
      a: "Wundrand vor Mazeration schützen (Hautschutzfilm, Folie, Hydrokolloid, Hydrofaser); Narbenpflege Dexpanthenol; Analtampons ≥ 2× tgl. wechseln (Ileus!); silikonbeschichtete Auflagen; bei Pergament-/Altershaut keine Kleberänder.", s: "S. 20–21" },
    { k: "Haut", f: "Welche Hautmaßnahmen sind ungeeignet?",
      a: "Salben/Zinkpaste in offene Wunden reiben, Parfümzusätze, Alkohollösungen (Franzbranntwein), abdichtende Pasten, Fette/Öle (Melkfett, Babyöl), Puder, Massieren gefährdeter Hautstellen.", s: "S. 21" },
    { k: "Nikotin", f: "Wie schadet Rauchen der Wundheilung?",
      a: "Blausäure hemmt O₂-Transport; CO bindet an Hämoglobin; Nikotin → Dopamin/Epinephrin → peripherer Blutfluss ↓, Thrombozytenaggregation ↑ → Mikrookklusionen; Infektionsrisiko ↑. Entwöhnung, Aufklärung (auch Passivrauchen).", s: "S. 21–22" },
    { k: "Adipositas", f: "Warum heilen Wunden bei Adipositas schlechter?",
      a: "Herzauswurfleistung reicht nicht → O₂-Versorgung ↓; Spannung auf Nähte, Bakterien in feuchten Hautfalten, Dehiszenzen; oft Malnutrition → Aufklärung, Ernährungsberatung, Gewichtsreduktion.", s: "S. 22" },
    { k: "Adhärenz", f: "Was ist Adhärenz – und was Compliance?",
      a: "Adhärenz: Ausmaß, in dem Betroffene gemeinsam vereinbarte Maßnahmen einhalten und in den Alltag integrieren (handschr.: aktive Mitarbeit/Mithilfe). Compliance (handschr.): Bereitschaft. Basis: Krankheitsverständnis, respektvolle Kommunikation.", s: "S. 22–23, 29", h: true },
    { k: "Adhärenz", f: "Welche Faktoren beeinflussen die Adhärenz?",
      a: "Sozialökonomisch (Bildung, Wege, Kosten) · Behandlungsteam/System (unabgestimmt, unverständliche Anweisungen, fehlende Schulung) · krankheitsbedingt (Demenz, Depression, Sucht) · therapiebezogen (Dauer, Nebenwirkungen) · individuell (Angst, Erwartungen).", s: "S. 23" },
    { k: "Psyche", f: "Wie wirkt die psychische Verfassung?",
      a: "Stabile Psyche fördert die Heilung; Depression, Psychosen, Sucht, Demenz senken die Kooperation. Manche manipulieren die Wunde aus Angst vor Einsamkeit. Suchtkranke oft schlechter AZ und Ernährungszustand.", s: "S. 23–24" },
    { k: "Psyche", f: "Demenz und chronische Wunde – worauf achten? (Übung III)",
      a: "Bewegungsaktiv: hoher Energiebedarf (3000–4000 kcal), Wunde erhöht ihn → Energiezufuhr sichern. Schmerz wird oft nicht erkannt → Beobachtung, Fremdeinschätzung.", s: "S. 30" },
    { k: "Psyche", f: "Wie legt man einen Ablenkungsverband an? (Übung III)",
      a: "Elastische Mullbinden um die Handgelenke wickeln, mit breiten Pflasterstreifen befestigen; ggf. mit farbiger Kohäsivbinde umwickeln, um die Aufmerksamkeit darauf zu lenken.", s: "S. 30" },
    { k: "Immunstatus", f: "Welchen Einfluss hat der Immunstatus?",
      a: "Angeborene/erworbene oder alters-, therapie-, krankheitsbedingte Schwäche → unzureichende Immunantwort → schlecht beherrschbare Infektionen. Jede immunschwächende Krankheit/Medikation kann die Heilung zum Stillstand bringen.", s: "S. 24" },
    { k: "Medikamente", f: "Welche Medikamente stören die Wundheilung?",
      a: "Immunsuppressiva (Infektionen), Zytostatika (Zellteilung, Granulation), Glucocorticoide (Proliferation, Kollagen ↓), NSAR (Entzündungsantwort, Zugfestigkeit), Antikoagulantien, Diuretika, Barbiturate, Antibiotika.", s: "S. 25" },
    { k: "Alter", f: "Wie wirkt sich das Lebensalter aus?",
      a: "Zellteilung, Hautelastizität, Kollagenerneuerung ↓; dünne, trockene Haut; Multimorbidität verschlechtert die Gefäßsituation. Nicht beeinflussbar – gesunder Lebensstil wirkt aber positiv.", s: "S. 25–26" },
    { k: "Weitere", f: "Weitere allgemeine Einflussfaktoren?",
      a: "Durchblutungsstörungen, verminderte O₂-Sättigung, Seneszenz (Überalterung der Zellen, v. a. Fibroblasten), erhöhte Proteaseaktivität, Schlafstörungen, fehlende soziale Kontakte, Haustiere (Hygiene!), maligne Erkrankungen, schlechte Beratung.", s: "S. 26–27", h: true },
    { k: "Lokal", f: "Wie wirkt die Entzündung lokal auf die Heilung?",
      a: "Startschuss der Heilung in der Exsudationsphase, ≠ Infektion. Bei chronischen Wunden übersteigert: Elastase, Plasmin zerstören die extrazelluläre Matrix, deaktivieren Wachstumsfaktoren, fördern Fibroblastenseneszenz → Stagnation.", s: "S. 28" },
    { k: "Lokal", f: "Wie wirkt eine Infektion auf die Heilung?",
      a: "Infektionsbekämpfung hat Vorrang, Stoffwechsel ↑ → Nährstoffe, Flüssigkeit, O₂ fehlen für die Wundheilung → Verzögerung bis Stagnation.", s: "S. 28" },
    { k: "Lokal", f: "Wirkung von Druck und Scherkräften?",
      a: "Verursachen Wunden (Dekubitus); Verschiebung von Hautschichten (z. B. zu straffe Kompression) → Kapillarüberdehnung, Minderdurchblutung, bei Älteren Kapillarabriss. Bei DFS und Dekubitus: Druckentlastung entscheidend.", s: "S. 28" },
    { k: "Lokal", f: "Warum stören Fremdkörper?",
      a: "Jeder Fremdkörper behindert die Heilung (Verband-/Salbenreste, Schmutz, Implantate): Unterversorgung, Exsudatstau, Granulome, Abszesse, Fisteln, Entzündung.", s: "S. 29" },
    { k: "Handschriftlich", f: "Merkpunkte aus den Notizen?",
      a: "Wunden spätestens nach 4 Wochen evaluieren (S. 15) · Kompression auch mit Wunde (S. 5) · Langzug: hoher Arbeits-, geringer Ruhedruck; Kurzzug: hoher Ruhe-, geringer Arbeitsdruck (S. 31) · Jodsalbe, Octenisept, Silber max. 14 d (S. 28).", s: "S. 5, 15, 28, 31", h: true }
  ],

  quiz: [
    { f: "Wie viele Wundheilungsphasen gibt es laut Heft? ★",
      o: ["5 Phasen – in der Praxis oft zu 3 zusammengefasst; beides gilt als richtig", "Genau 2 Phasen", "7 Phasen", "4 Phasen – die Remodulierung zählt nicht dazu"],
      e: "5 Phasen: Hämostase, Exsudation, Granulation, Epithelisierung, Remodulierung. In der Praxis oft 3 (Exsudations-, Granulations-, Epithelisierungsphase). Handschriftlich: „5 oder 3, beides richtig“.", s: "S. 3–4" },
    { f: "Bei welcher Wunde ist eine primäre Wundheilung zu erwarten? ★",
      o: ["Aseptische OP-Wunde mit adaptierten, glatt durchtrennten Wundrändern", "Dekubitus", "Verbrennungswunde", "Chronisches Ulcus cruris"],
      e: "Primäre Heilung: aseptische OP-Wunden, frische infektionsfreie Verletzungen mit dicht aneinanderliegenden Wundrändern. Alle chronischen Wunden und Verbrennungswunden heilen sekundär.", s: "S. 3" },
    { f: "Was trifft auf die sekundäre Wundheilung zu? ★",
      o: ["Die Gewebslücke wird mit Granulationsgewebe aufgefüllt", "Alle chronischen Wunden heilen sekundär", "Minimale Vernarbung", "Nach rund 10 Tagen abgeschlossen"],
      r: 2,
      e: "Sekundär: Lücke füllt sich mit Granulationsgewebe → starke Narbenbildung; alle chronischen Wunden und Verbrennungen. Minimale Narbe und ca. 10 Tage gelten für die primäre Heilung.", s: "S. 3" },
    { f: "Was geschieht in der Hämostase?",
      o: ["Vasokonstriktion; Thrombozyten und Erythrozyten bilden einen Thrombus", "Fibroblasten bauen gefäß-, zell- und kollagenreiches Gewebe", "Überhäutung durch neues Epithel", "Reorganisation der Kollagenfasern über Monate"],
      e: "Hämostase: unmittelbare Reaktion, Kapillaren ziehen sich zusammen, Blutgerinnsel – Thrombus als Grundlage der Reparation.", s: "S. 3–4" },
    { f: "Wann findet die Granulationsphase bei akuten Wunden statt?",
      o: ["Ab dem 2. Tag, bis zu 14 Tage", "Ab dem 10. Tag, bis zu 6 Monate", "Nur in den ersten 24 Stunden", "Erst nach Abschluss der Remodulierung"],
      e: "Granulation: akut ab dem 2. Tag, bis zu 14 Tage; Fibroblasten bauen gefäß-, zell- und kollagenreiches Gewebe, Neoangiogenese, Wundkontraktion.", s: "S. 3–4" },
    { f: "Welche Belastbarkeit erreicht die Narbe nach der Remodulierung höchstens?",
      o: ["Max. 80 % der ursprünglichen", "100 % – wie gesunde Haut", "Max. 30 % der ursprünglichen", "Mehr als die ursprüngliche Haut"],
      e: "Remodulierung: zell- und gefäßarme Narbe ohne Hautanhangsorgane; Belastbarkeit max. 80 % der ursprünglichen.", s: "S. 3–4" },
    { f: "Wie sieht Hypergranulation („wildes Fleisch“) aus?",
      o: ["Zu feucht, über das Hautniveau, dunkelrot, körnig, glänzend feucht", "Trocken, schwarz, unter dem Hautniveau", "Blass, eingesunken, gelblich belegt", "Milchig, schleimig, glänzend wie ein Biofilm"],
      e: "Handschriftlich (S. 4): Hypergranulation – zu feucht, über das Hautniveau, dunkelrot, körnig, glänzend feucht.", s: "S. 4", h: true },
    { f: "Welche Kausaltherapie nennt das Heft beim Ulcus cruris venosum (CVI)?",
      o: ["Sachgerechte Kompression", "Bypass oder Dilatation", "Stoffwechseleinstellung und Druckentlastung", "Ausschließlich Minimierung von Scherkräften"],
      e: "pAVK → Durchblutung herstellen (Dilatation, Bypass) · CVI → Kompression · Dekubitus → Druck-, Reibe-, Scherkräfte minimieren · DFU → Stoffwechseleinstellung + Druckentlastung.", s: "S. 5" },
    { f: "Welche sind lokale Einflussfaktoren (entstehen in der Wunde selbst)?",
      o: ["Fremdkörper", "Hämatome", "Nikotinkonsum", "Lebensalter"],
      r: 2,
      e: "Lokal: Hämatome, Nekrosen, Ödeme, Schorf, Hypergranulation, Fremdkörper, OP-Technik, Infektion, Entzündung, Druck, Scherkräfte u. a. Nikotin und Lebensalter sind allgemeine (systemische) Faktoren.", s: "S. 5, 27" },
    { f: "Bei wem kann eine Malnutrition auftreten?",
      o: ["Bei Normal-, Über- und Untergewicht", "Nur bei Untergewicht", "Nur bei Übergewicht", "Nur bei Menschen über 65 Jahren"],
      e: "Malnutrition = Fehl- bzw. Mangelernährung: Ungleichgewicht zwischen Makro-, Mikronährstoffen und Flüssigkeit; bei Normal-, Über- und Untergewicht möglich (Übung I).", s: "S. 7, 30" },
    { f: "In welcher Reihenfolge wird der Ernährungszustand erfasst? ★",
      o: ["1. Screening, 2. vertiefendes Assessment", "1. vertiefendes Assessment, 2. Screening", "Nur über das Körpergewicht – weitere Erfassung ist nicht nötig", "Zuerst Ernährungsberatung, danach Screening"],
      e: "Lösung Übung I: Screening, vertiefendes Assessment; handschriftlich „Prüfung: Reihenfolge (1) Screening (2) vertieftes Assessment“. Frühzeitiges Erkennen ist Voraussetzung für Gegenmaßnahmen.", s: "S. 7, 13, 30" },
    { f: "Welchen Anteil sollen Kohlenhydrate laut Tabelle (S. 8) an der Ernährung haben? ★",
      o: ["ca. 50–60 %", "ca. 10–15 %", "ca. 30–35 %", "ca. 80–90 %"],
      e: "Tabelle S. 8: Kohlenhydrate ca. 50–60 % (wichtigste Energiequelle), Fette ca. 30–35 %, Proteine ca. 10–15 %.", s: "S. 8" },
    { f: "Welche Vitamine sind fettlöslich (Merkhilfe „EDEKA“)? ★",
      o: ["E, D, K, A", "B6 und B12", "Vitamin C und Folat", "Ausschließlich Vitamin C"],
      e: "Fette sind Träger der fettlöslichen Vitamine E, D, K, A (handschriftliche Merkhilfe „EDEKA“).", s: "S. 8" },
    { f: "Welche Aufgabe hat Albumin?",
      o: ["Reguliert die Flüssigkeit in den Gefäßen – Mangel führt zu Eiweißödemen", "Wichtigste Energiequelle des Körpers", "Träger der fettlöslichen Vitamine", "Wärme- und Kälteschutz als Energiespeicher"],
      e: "Albumin reguliert Flüssigkeit in Gefäßen – Mangel → Eiweißödeme. Energiequelle = Kohlenhydrate; fettlösliche Vitamine, Wärme-/Kälteschutz = Fette.", s: "S. 8" },
    { f: "Welcher Nährstoff wirkt bei bestehenden Wunden gegen Entzündung und freie Radikale? ★",
      o: ["Vitamin E", "Vitamin K", "Natrium", "Ballaststoffe"],
      e: "Bei bestehenden Wunden: Zell-/Kollagenaufbau → Proteine, Vitamin A, alle B-Vitamine, Vitamin C, Albumin, Zink, Eisen; gegen Entzündung/freie Radikale → Vitamin E.", s: "S. 7–8, 10" },
    { f: "Wofür wird Vitamin C laut Heft benötigt?",
      o: ["Kollagensynthese", "Eisenresorption", "Blutgerinnung", "Als Träger fettlöslicher Vitamine"],
      r: 2,
      e: "Vitamin C: Kollagensynthese, Immunsystem, Eisenresorption, Regeneration Vit E. Blutgerinnung = Vitamin K.", s: "S. 9" },
    { f: "Welche gehören zu den Mengenelementen (> 50 mg/kg)?",
      o: ["Natrium, Kalium, Kalzium, Magnesium", "Eisen, Zink, Selen", "Jod und Mangan", "Vitamin A und D"],
      e: "Mengenelemente: Natrium, Kalium, Kalzium, Magnesium. Spurenelemente (< 50 mg/kg): Eisen, Selen, Jod, Zink, Mangan.", s: "S. 10" },
    { f: "Welche Formen der Nährstoffzufuhr nennt das Heft? ★",
      o: ["Angereicherte Trinknahrung", "Sonden- oder parenterale Ernährung", "Verzicht auf Sahne, Butter und Öl", "Fasten zur Entlastung des Stoffwechsels"],
      r: 2,
      e: "Nährstoffzufuhr: tägliche Nahrungsaufnahme · Anreicherung (Sahne, Butter, Öl, Nüsse, Proteinpulver, Vitaminpräparate) · angereicherte Trinknahrung · Sonden- oder parenterale Ernährung.", s: "S. 11" },
    { f: "Welche Folgen hat Malnutrition für die Wundheilung?",
      o: ["Verlängerte Entzündungsphase", "Verminderte Kollagensynthese", "Gesteigerte Angiogenese", "Erhöhte mechanische Stabilität"],
      r: 2,
      e: "Folgen: verlängerte Entzündungsphase, Kollagensynthese ↓, Immunschwäche, Dekubitusrisiko ↑, Fibroblastenaktivität ↓, Angiogenese ↓, Gerinnungsstörung, Proteinmangelödeme, mechanische Stabilität ↓.", s: "S. 11" },
    { f: "Welche Wunde kann laut Heft durch Kachexie entstehen?",
      o: ["Nekrose", "Ulcus", "Dekubitus", "Hypergranulation"],
      e: "Antriebsarmut + Immobilität → Dekubitus · Kachexie → Nekrose · Eiweißmangelödeme → Ulcus.", s: "S. 12" },
    { f: "Über welche Stresshormone beeinträchtigt Schmerz laut Heft die Wundheilung?",
      o: ["Cortison und Adrenalin", "Insulin und Glukagon", "Östrogen und Testosteron", "Melatonin und Serotonin"],
      e: "Schmerz = Stress → Cortison (negativ in jeder Wundheilungsphase) und Adrenalin (Gefäßverengung → Blut-, Nährstoff-, O₂-Zufuhr ↓).", s: "S. 13" },
    { f: "Wie wird neuropathischer Schmerz beschrieben?",
      o: ["Hell, spitz, einschießend, elektrisierend, attackenartig", "Durch negative Erfahrungen ohne organischen Schaden", "Ohne Gewebsschädigung durch veränderte Wahrnehmung/Sensibilisierung", "Reiz bei Gewebsschädigung mit gesundem schmerzleitendem System"],
      e: "Neuropathisch: Störung/Verletzung des peripheren oder zentralen Nervensystems; hell, spitz, einschießend, elektrisierend, attackenartig. Die übrigen Beschreibungen passen zu psychogen, noziplastisch und nozizeptiv.", s: "S. 13" },
    { f: "Wodurch wird psychogener Schmerz gelindert?",
      o: ["Vertrauensbasierte Kommunikation, Zuwendung, soziale Unterstützung", "Vor allem durch Schmerzmittel nach WHO-Stufenschema", "Durch starke Opioide der Stufe III", "Gar nicht – ohne organischen Schaden besteht kein Handlungsbedarf"],
      e: "Psychogener Schmerz: nicht durch Schmerzmittel, sondern vertrauensbasierte Kommunikation, Zuwendung, soziale Unterstützung.", s: "S. 14" },
    { f: "Was kennzeichnet chronischen Schmerz?",
      o: ["Dauer mindestens 3 Monate, keine Warnfunktion mehr", "Warnsignal, an die Heilungsdauer gekoppelt", "Tritt nur bei Versorgungen wie der Wundbehandlung auf", "Dauer höchstens eine Woche"],
      e: "Akut: Warnsignal, an Heilungsdauer gekoppelt · prozedural: bei Versorgungen, z. B. Wundbehandlung · chronisch: ≥ 3 Monate, keine Warnfunktion.", s: "S. 14" },
    { f: "Wie wird Schmerz bei Menschen mit Demenz erfasst?",
      o: ["Fremdeinschätzung mit BESD oder BISAD, Angehörige einbeziehen", "Schmerz wird objektiv per Laborwert gemessen", "Bei jeder Erfassung eine andere Skala verwenden", "Auf eine Erfassung wird verzichtet"],
      e: "Schmerz ist subjektiv, nicht messbar; immer dieselbe Skala (NRS, VRS, GRS/SAS); bei Demenz Fremdeinschätzung mit BESD oder BISAD.", s: "S. 14–15" },
    { f: "Was gehört laut Heft zur WHO-Stufe II?",
      o: ["Schwache Opioide (Tramadol, Tilidin, Codein) + Nichtopioid", "Starkes Opioid kombiniert mit schwachem Opioid", "Nur ASS oder Metamizol", "Fentanyl oder Morphin"],
      e: "Stufe I: Nichtopioid · Stufe II: schwache Opioide + Nichtopioid · Stufe III: starke Opioide (Morphin, Fentanyl …) + Nichtopioid. Stufe II + III nicht kombinieren.", s: "S. 17" },
    { f: "Welche Regeln gelten für das WHO-Stufenschema?",
      o: ["Beginn nach Schmerzstärke, nicht zwangsläufig mit Stufe I", "Stufe II und III nicht kombinieren", "Immer mit Stufe I beginnen", "Stufe II und III sollen kombiniert werden"],
      r: 2,
      e: "Beginn nicht zwangsläufig mit Stufe I, sondern nach Schmerzstärke; Stufe II + III nicht kombinieren; nach ärztlicher Anordnung, dokumentieren.", s: "S. 17" },
    { f: "Wie wird die Wunde beim Verbandwechsel schmerzarm gereinigt?",
      o: ["Angefeuchtete Kompressen behutsam andrücken", "Kräftig wischen, damit es schnell geht", "Kalte Spüllösung mit hohem Druck", "Sekundärverband anschließend möglichst stramm anlegen"],
      e: "Behutsame Reinigung durch Andrücken angefeuchteter Kompressen (kein kräftiges Wischen), angewärmte Spüllösung mit wenig Druck, Sekundärverband nicht zu stramm.", s: "S. 16–17" },
    { f: "Welche Faustregel gilt für die Hautpflege?",
      o: ["Feucht auf feucht, fett auf trocken", "Fett auf feucht, feucht auf trocken", "Bei problematischer Haut bevorzugt O/W-Produkte", "Alkalische Seifen für gründliche Reinigung"],
      e: "Faustregel: feucht auf feucht, fett auf trocken. Trockene Haut mit W/O; bei problematischer Haut keine O/W-Produkte (Dochteffekt); keine alkalischen Seifen.", s: "S. 20" },
    { f: "Welche Maßnahmen sind laut Heft ungeeignet?",
      o: ["Zinkpaste in offene Wunden reiben", "Alkohollösungen wie Franzbranntwein", "Hautneutrale, leicht saure Syndets", "Reinigung mit körperwarmem Wasser"],
      r: 2,
      e: "Ungeeignet: Salben/Cremes/Zinkpaste in offene Wunden reiben, Parfümstoffe, Alkohollösungen (Franzbranntwein), abdichtende Pasten, Fette/Öle, Puder, Massieren gefährdeter Stellen. Syndets und körperwarmes Wasser werden empfohlen.", s: "S. 20–21" },
    { f: "Wie oft sind Analtampons zu wechseln?",
      o: ["Mindestens 2× täglich (Ileusgefahr)", "Einmal pro Woche", "Nur bei sichtbarer Verschmutzung", "Alle 3 Tage"],
      e: "Analtampons ≥ 2× täglich wechseln (Ileusgefahr!).", s: "S. 20–21" },
    { f: "Wie schadet Rauchen der Wundheilung?",
      o: ["Kohlenmonoxid bindet an Hämoglobin", "Nikotin senkt den peripheren Blutfluss und steigert die Thrombozytenaggregation", "Nikotin verbessert die periphere Durchblutung", "Blausäure fördert den O₂-Transport"],
      r: 2,
      e: "Blausäure hemmt O₂-Transport; CO bindet an Hämoglobin; Nikotin → Dopamin/Epinephrin ↑ → peripherer Blutfluss ↓, Thrombozytenaggregation ↑ → Mikrookklusionen.", s: "S. 21–22" },
    { f: "Was bedeutet Adhärenz?",
      o: ["Ausmaß, in dem Betroffene vereinbarte Maßnahmen einhalten und in den Alltag integrieren", "Haftung der Wundauflage am Wundgrund", "Anzahl der Verbandwechsel pro Woche", "Wirkstärke eines Medikaments"],
      e: "Adhärenz: Ausmaß, in dem Betroffene vereinbarte Maßnahmen einhalten und in den Alltag integrieren; Basis: Krankheitsverständnis, respektvolle Kommunikation.", s: "S. 22–23" },
    { f: "Welchen Energiebedarf nennt das Heft für Menschen mit Demenz im bewegungsaktiven Stadium? (Übung III)",
      o: ["3000–4000 kcal – eine Wunde erhöht ihn zusätzlich", "800–1000 kcal", "Der Energiebedarf sinkt deutlich", "1200–1500 kcal"],
      e: "Lösung Übung III: bewegungsaktives Stadium → hoher Energiebedarf (3000–4000 kcal), die Wunde erhöht ihn zusätzlich.", s: "S. 30" },
    { f: "Wie wirken Glucocorticoide auf die Wundheilung?",
      o: ["Sie hemmen Zellproliferation und Kollagensynthese in allen Phasen", "Sie fördern die Kollagensynthese", "Sie wirken nur in der Hämostase", "Sie haben keinen Einfluss auf die Wundheilung"],
      e: "Glucocorticoide hemmen Zellproliferation und Kollagensynthese in allen Phasen (systemisch ausgeprägt; topisch teils schmerzlindernd/unterstützend).", s: "S. 25" },
    { f: "Was trifft auf die lokale Entzündung zu?",
      o: ["Sie ist der Startschuss der Heilung in der Exsudationsphase", "Bei chronischen Wunden übersteigert, zerstören Elastase und Plasmin die extrazelluläre Matrix", "Sie ist immer gleichbedeutend mit einer Infektion", "Sie tritt nur bei infizierten Wunden auf"],
      r: 2,
      e: "Entzündung: Startschuss der Heilung, nicht gleich Infektion. Bei chronischen Wunden übersteigert → proteolytische Enzyme (Elastase, Plasmin) zerstören Matrix, deaktivieren Wachstumsfaktoren → Stagnation.", s: "S. 27–28" },
    { f: "Welche Fremdkörper behindern die Wundheilung?",
      o: ["Jeder Fremdkörper – auch Verband-, Salbenreste und Metallimplantate", "Nur Schmutz; Verbandreste sind unproblematisch", "Keine – Fremdkörper fördern die Granulation", "Nur Fremdkörper, die größer als 2 cm sind"],
      e: "Jeder Fremdkörper behindert die Wundheilung (Verbandreste, Salbenreste, Schmutz, Metallimplantate): Unterversorgung, Abflusshindernis, Granulome, Abszesse, Fisteln, Entzündung.", s: "S. 29" },
    { f: "Nach welcher Zeit müssen laut Notiz im Heft spätestens alle Wunden evaluiert werden?",
      o: ["Nach 4 Wochen", "Nach 6 Monaten", "Nach 1 Jahr", "Gar nicht, solange die Wunde nicht infiziert ist"],
      e: "Handschriftlich S. 15: „Spätestens nach 4 Wochen müssen alle Wunden evaluiert werden!“", s: "S. 15", h: true },
    { f: "Was kennzeichnet einen Langzugverband laut Notiz im Heft?",
      o: ["Hoher Arbeitsdruck, geringer Ruhedruck", "Hoher Ruhedruck, geringer Arbeitsdruck", "Kein Arbeitsdruck", "Arbeits- und Ruhedruck sind immer gleich"],
      e: "Handschriftlich S. 31: Langzug = hoher Arbeitsdruck, geringer Ruhedruck; Kurzzug = hoher Ruhedruck, geringer Arbeitsdruck.", s: "S. 31", h: true }
  ],

  zusammenfassung: `
<h3>1. Wundheilung und Wundheilungsphasen <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 3–4</span></h3>
<p class="merke"><b>Wundheilung</b> (Pfitzmann): komplexer Prozess – physiologische Vorgänge zur Regeneration zerstörten Gewebes, die v. a. durch Neubildung von Bindegewebe und Kapillaren den Wundverschluss bewirken.</p>
<div class="tabelle"><table>
  <thead><tr><th></th><th>Primäre Wundheilung <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span></th><th>Sekundäre Wundheilung <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span></th></tr></thead>
  <tbody>
    <tr><td>Wann</td><td>aseptische OP-Wunden, frische infektionsfreie Verletzungen; Wundränder dicht aneinander/adaptiert, glatt durchtrennt</td><td>wenn primäre Heilung nicht möglich; alle chronischen Wunden und Verbrennungswunden</td></tr>
    <tr><td>Verlauf</td><td>komplikationslos, minimale Vernarbung, nach rund 10 Tagen abgeschlossen. <span class="hand-inline">Handschriftlich: Naht, Klammern, heilt 6–10 d</span></td><td>Gewebslücke wird mit Granulationsgewebe aufgefüllt → starke Narbenbildung. <span class="hand-inline">Handschriftlich: von unten nach oben, von außen nach innen; infiziert, z. B. Ulcus, Dekubitus, Verbrennung, große Verletzung; dauert länger, Infektionsrisiko</span></td></tr>
  </tbody>
</table></div>
<p><b>Wie viele Phasen?</b> <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> 5 Phasen (Hämostase, Exsudation, Granulation, Epithelisierung, Remodulierung) – in der Praxis oft 3 (Hämostase + Exsudation sowie Epithelisierung + Remodulierung zusammengefasst → Exsudations-, Granulations-, Epithelisierungsphase). <span class="hand-inline">Handschriftlich: „5 oder 3, beides richtig“.</span> Die Phasen gehen fließend ineinander über; bei chronischen Wunden Wochen, Monate bis Jahre.</p>
<div class="tabelle"><table>
  <thead><tr><th>Phase</th><th>Vorgänge (Druck)</th><th>Handschr.</th></tr></thead>
  <tbody>
    <tr><td>1 Hämostase</td><td>unmittelbare Reaktion; Kapillaren ziehen sich zusammen, Vasokonstriktion, Blutgerinnsel; Thrombozyten und Erythrozyten bilden Thrombus = Grundlage der Reparation</td><td><span class="hand-inline">Vasokonstriktion</span></td></tr>
    <tr><td>2 Exsudation (Reinigung)</td><td>starke Exsudation, Entzündungsreaktion, Keimabwehr, Abtransport von Zelltrümmern, gesteigerte Zellaktivität; Fibroblastenvermehrung leitet Neoangiogenese ein; bei Immunschwäche abgeschwächte/verzögerte Entzündung</td><td><span class="hand-inline">Reinigung</span></td></tr>
    <tr><td>3 Granulation</td><td>akut ab dem 2. Tag, bis zu 14 Tage; Fibroblasten bauen gefäß-, zell- und kollagenreiches Gewebe; Neoangiogenese, Wundkontraktion, nachlassende Exsudation, beginnende Epithelisierung vom Rand; Gewebe gut durchblutet, tiefrot, gekörnt, feucht glänzend</td><td><span class="hand-inline">Neubildung</span></td></tr>
    <tr><td>4 Epithelisierung</td><td>Granulationsgewebe verliert Wasser, trocknet ab; Neubildung von Epithel, Ausreifung der Kollagenfasern, erstes Narbengewebe, Wundkontraktion → „Überhäutung“</td><td><span class="hand-inline">trockener; Überhäutung, Verschluss; <b>feuchtes Milieu wichtig!</b></span></td></tr>
    <tr><td>5 Remodulierung (Reifung)</td><td>über mehrere Monate; Narbenbildung, Reorganisation der Kollagenfasern; zell- und gefäßarme Narbe ohne Hautanhangsorgane; Belastbarkeit max. 80 % der ursprünglichen</td><td><span class="hand-inline">Narbe festigt sich; Schutzverband, Hautschutz</span></td></tr>
  </tbody>
</table></div>
<p class="hand">Handschriftlich (S. 4): <b>Hypergranulation</b> („wildes Fleisch“) – zu feucht, über das Hautniveau, dunkelrot, körnig, glänzend feucht.</p>

<h3>2. Kausaltherapie und Einteilung der Einflussfaktoren <span class="seite">S. 5</span></h3>
<p class="merke"><b>Kausaltherapie:</b> Behebung der Wundursache bzw. Wundheilungsstörung steht im Vordergrund und muss vor dem Heilungsprozess erfolgen; erfordert umfassende Diagnostik. pAVK → Durchblutung herstellen (Dilatation, Bypass) · CVI → sachgerechte Kompression bei Ulcus cruris venosum · Dekubitus → Druck-, Reibe- und Scherkräfte minimieren · diabetisches Fußulcus → Stoffwechseleinstellung + Druckentlastung. <span class="hand-inline">Handschriftlich: „Kompression auch mit Wunde!!!“</span></p>
<p>Verlauf hängt ab von Art, Größe, Lokalisation sowie allgemeinen und lokalen Faktoren – den Menschen als Ganzes betrachten; wertschätzende, vertrauensvolle Kommunikation.</p>
<div class="tabelle"><table>
  <thead><tr><th>Allgemein/systemisch – entstehen im Körper oder Geist</th><th>Lokal – entstehen in der Wunde selbst</th></tr></thead>
  <tbody>
    <tr><td>Allgemeinzustand, Bewegung/Mobilität, Ernährungszustand, Flüssigkeitszufuhr, Schmerzen, Hautzustand, Immunstatus, Medikamente, Nikotinkonsum, Adipositas, Lebensalter, psychische Verfassung, Adhärenz, Stoffwechselstörungen, Gefäßerkrankungen, Entzündungen und Infektionen</td><td>Hämatome, Nekrosen, Ödeme, Schorf, Hypergranulation, Fremdkörper, OP-Technik (Naht unter Spannung), Wundinfektion, lokale Entzündung, Druck, Scherkräfte; S. 27 zusätzlich: hypertrophes Narbengewebe, Auskühlung/Austrocknung, Dehiszenz</td></tr>
  </tbody>
</table></div>

<h3>3. Allgemeinzustand und Ernährung <span class="seite">S. 6–12</span></h3>
<ul>
  <li><b>Allgemeinzustand:</b> Wundheilung hat hohen Energiebedarf. <b>Je schlechter der Allgemeinzustand, desto schlechter die Wundheilung</b>; Funktionserhaltung lebenswichtiger Organe hat Vorrang (S. 6).</li>
  <li><b>Malnutrition</b> = Fehl- bzw. Mangelernährung: Ungleichgewicht zwischen Makro-, Mikronährstoffen und Flüssigkeit; bei Normal-, Über- <b>und</b> Untergewicht möglich (Übung I, S. 7, 30).</li>
  <li><b>Im Alter:</b> Bewegung, Muskelmasse, Stoffwechselleistung, Fettmasse ↓ → Energiebedarf ↓, Vitamin- und Mineralstoffbedarf bleibt gleich → Nahrung mit geringerer Energiedichte, mehr Vitamine/Mineralstoffe (S. 7).</li>
  <li><b>Erfassung</b> <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span>: frühzeitiges Erkennen ist Voraussetzung für Gegenmaßnahmen; Methoden laut Text Laboruntersuchungen, Screening; Lösung Übung I: <b>Screening, vertiefendes Assessment</b>. <span class="hand-inline">Handschriftlich: „Prüfung: Reihenfolge (1) Screening (2) vertieftes Assessment (→ Beratung etc.), Laboruntersuchung“; Beispiele: Bestandsaufnahme, BMI, Anamnese, SIS, Größe, Gewicht, Assessments, Ernährungs-, Trink-, Miktionsprotokoll; „34 BMI = Adipositas Typ II“.</span> Bei Verdacht Optionen mit Betroffenen/Angehörigen abstimmen, ggf. Ärzt:innen informieren (S. 7, 12–13, 30).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Makronährstoff <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span></th><th>Bedeutung</th><th>Anteil (Tabelle S. 8)</th></tr></thead>
  <tbody>
    <tr><td>Kohlenhydrate</td><td>wichtigste Energiequelle; Einfach-, Zweifach-, Mehrfachzucker (Ballaststoffe → Darmtätigkeit)</td><td>ca. 50–60 %</td></tr>
    <tr><td>Fette</td><td>zweitwichtigste Energiequelle, Energiespeicher, Wärme-/Kälteschutz, Zellmembran, Träger fettlöslicher Vitamine E, D, K, A (<span class="hand-inline">handschr. Merkhilfe „EDEKA“</span>), Infektabwehr; Mangel → gestörte Wundheilung</td><td>ca. 30–35 %</td></tr>
    <tr><td>Proteine</td><td>Hormone; Strukturproteine (Kollagen, Keratin, Elastin); Schutzproteine (Fibrinogen, Thrombin); Transportproteine (Hämoglobin, Transferrin); Albumin reguliert Flüssigkeit in Gefäßen – Mangel → Eiweißödeme; Enzyme für Kollagenaufbau</td><td>ca. 10–15 %</td></tr>
  </tbody>
</table></div>
<p class="warnung">Achtung, Abweichung im Heft: S. 11 nennt im Fließtext optimal 30 % Fette, mehr als 50 % Kohlenhydrate, bis zu 10 % Eiweiß.</p>
<p class="merke"><b>Bei bestehenden Wunden besonders wichtig</b> <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> (S. 7–8; handschr. S. 10): Aufbau von Zellen und Kollagen → <b>Proteine, Vitamin A, alle B-Vitamine, Vitamin C, Albumin, Zink, Eisen</b>; gegen Entzündung/freie Radikale → <b>Vitamin E</b>; <b>Flüssigkeit</b> in ausreichender Menge (Verluste durch Fieber, Wundsekret beachten).</p>
<div class="tabelle"><table>
  <thead><tr><th>Mikronährstoff</th><th>wird benötigt für (Heft)</th><th>Tagesbedarf ab 65 J. (Frau/Mann)</th></tr></thead>
  <tbody>
    <tr><td>Vitamin A</td><td>Zellentwicklung, Hautaufbau, Immunsystem</td><td>0,8 / 1,0 mg</td></tr>
    <tr><td>Vitamin B6 / B12</td><td>Immunsystem / Zellentwicklung, Zellteilung</td><td>1,4 / 1,6 mg · 4 µg</td></tr>
    <tr><td>Vitamin C</td><td>Kollagensynthese, Immunsystem, Eisenresorption, Regeneration Vit E</td><td>95 / 110 mg</td></tr>
    <tr><td>Vitamin D / E</td><td>Immunsystem, Epithelzellen / Membranfunktion, Immunsystem</td><td>20 µg · 11 / 12 mg</td></tr>
    <tr><td>Vitamin K / Folat</td><td>Blutgerinnung / Zellteilung, Zellregeneration</td><td>65 / 80 µg · 300 µg</td></tr>
    <tr><td>Mengenelemente (&gt;50 mg/kg)</td><td>Kalium, Kalzium, Magnesium, Natrium (Nerven, Muskel, Gerinnung, Wasser-/Säure-Basen-Haushalt)</td><td>K 4000 · Ca 1000 · Mg 300/350 · Na 1500 mg</td></tr>
    <tr><td>Eisen / Zink</td><td>O₂-Transport, Kollagensynthese / Wundverschluss, Zellwachstum, Immunsystem</td><td>10 mg · 8 / 14 mg</td></tr>
    <tr><td>Selen / Jod / Mangan</td><td>Immunsystem / Stoffwechsel / Energie, Bindegewebe, Knorpel</td><td>60/70 µg · 180 µg · 2,0–5,0 µg (Einheit so im Heft)</td></tr>
  </tbody>
</table></div>
<p class="hand">Handschriftlich S. 6: „Vitamin K/E Blutbildung“ – im Druck (S. 9): Vitamin K = Blutgerinnung, Vitamin E = Membranfunktion/Immunsystem.</p>
<ul>
  <li><b>Nährstoffzufuhr</b> <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> (S. 11): tägliche Nahrungsaufnahme · Anreicherung (Sahne, Butter, Öl, Nüsse, Proteinpulver, Vitaminpräparate) · angereicherte Trinknahrung · Sonden- oder parenterale Ernährung. Individuelle Ernährungsberatung durch qualifizierte Expert:innen; ohne Kausaltherapie kein Heilungserfolg. <span class="hand-inline">Handschr.: Trinknahrung hochkalorisch; gesunde Fette: pflanzliche Öle.</span></li>
  <li><b>Folgen der Malnutrition</b> (S. 11): verlängerte Entzündungsphase, verminderte Kollagensynthese, Schwächung des Immunsystems, erhöhtes Dekubitusrisiko, Fibroblastenaktivität ↓, Angiogenese ↓, Gerinnungsstörung (Vit-K-Mangel), Proteinmangelödeme, mechanische Stabilität ↓. Kann chronische Wunden auch verursachen.</li>
  <li><b>Entstehung von Wunden</b> (S. 12): Antriebsarmut + Immobilität → <b>Dekubitus</b> · Kachexie → <b>Nekrose</b> · Eiweißmangelödeme → <b>Ulcus</b>.</li>
</ul>

<h3>4. Bewegung <span class="seite">S. 12</span></h3>
<p>Fördert Muskelaktivität/-aufbau, Gelenkbeweglichkeit, Durchblutung (O₂/Nährstoffe), Kollateralenbildung, Allgemeinzustand; Positionswechsel vermeidet druckbedingte Schäden. Aktive <b>und</b> passive Bewegungsförderung wirksam. <span class="hand-inline">Handschriftlich: Muskelpumpe – venöser Rückfluss.</span></p>

<h3>5. Schmerz <span class="seite">S. 13–18</span></h3>
<ul>
  <li>Schmerz = Stress → <b>Cortison</b> (negativ in jeder Wundheilungsphase) und <b>Adrenalin</b> (Gefäßverengung → Blut-, Nährstoff-, O₂-Zufuhr ↓); Chronifizierung möglich, Lebensqualität ↓ (S. 13).</li>
</ul>
<p class="merke"><b>IASP:</b> unangenehmes Sinnes- und Gefühlserlebnis, verknüpft mit aktueller oder potenzieller Gewebeschädigung; Warnsignal – Polyneuropathie kann die Warnfunktion beeinträchtigen (S. 13).</p>
<div class="tabelle"><table>
  <thead><tr><th>nozizeptiv</th><th>neuropathisch</th><th>noziplastisch</th><th>psychogen</th></tr></thead>
  <tbody>
    <tr><td>Reize (mechanisch, chemisch, thermisch) bei Gewebsschädigung; organischer Schaden; Warnsignal; gesundes schmerzleitendes System</td><td>erkennbare Störung/Verletzung des peripheren oder zentralen Nervensystems; organischer Schaden; hell, spitz, einschießend, elektrisierend, attackenartig</td><td>durch das schmerzleitende System ohne eindeutige Gewebsschädigung; kein organischer Schaden; veränderte Wahrnehmung, Sensibilisierung</td><td>negative Erfahrungen, Schicksalsschläge, Einsamkeit, Zurückweisung; kein organischer Schaden</td></tr>
  </tbody>
</table></div>
<p>Nozizeptiv + neuropathisch: nicht-medikamentös und medikamentös linderbar; psychogen: nicht durch Schmerzmittel, sondern vertrauensbasierte Kommunikation, Zuwendung, soziale Unterstützung (S. 14). <b>Dauer:</b> akut (Warnsignal, an Heilungsdauer gekoppelt) · prozedural (spezielle akute Form bei Versorgungen, z. B. Wundbehandlung) · chronisch (≥ 3 Monate, keine Warnfunktion) (S. 14).</p>
<ul>
  <li><b>Erfassung:</b> subjektiv, nicht messbar; Expertenstandard: vor, während, nach der Behandlung und bei Änderung des Status; NRS, VRS, GRS/SAS – immer dieselbe Skala; bei Demenz Fremdeinschätzung mit BESD oder BISAD, Angehörige einbeziehen (S. 14–15).</li>
  <li><b>Auslöser:</b> Infektion (z. B. Erysipel), Druck, Ödem, Arthritis, Dermatitis, Durchblutungsstörung, Neuropathie, Wundart (Ulcus arteriosum, Pyoderma gangraenosum, exulzerierender Tumor), Trauma, Nahtdehiszenz, hohe Exsudatmengen, ausgetrocknete Wunden, Wundbehandlung, Entfernen der Auflage, einschnürende Verbände; verstärkt durch Bewegung, Nachtruhe, enge Kleidung, Kälte (S. 15).</li>
  <li><b>Schmerzvermeidung beim Verbandwechsel</b> (S. 16–17): informieren, Schmerz ernst nehmen, Erfahrung einbeziehen, absprechen, Analgetika rechtzeitig (Wirkeintritt!), Zugluft vermeiden, stressfreie Umgebung, gute Vorbereitung, ansprechen/Pausen, Stoppsignale; behutsame Reinigung durch Andrücken angefeuchteter Kompressen (kein kräftiges Wischen), unnötige Reize vermeiden, zügig verbinden, Sekundärverband nicht zu stramm, feucht haltende Auflagen, Anfeuchten beim Ablösen, Débridement geplant mit Analgesie, angewärmte Spüllösung mit wenig Druck, Auflagen ohne Kleberand (Silikon), Rückmeldung erfragen.</li>
  <li><b>Weitere Strategien</b> (S. 18): Kälte/Wärme, TENS, Ultraschall, Akupunktur (je nur geschultes Personal), Massage/Positionierung (Kinästhetik), Meditation/Atem-/Entspannungsübungen, Musik.</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>WHO-Stufe</th><th>Schmerzstärke</th><th>Wirkstoffe (Heft)</th></tr></thead>
  <tbody>
    <tr><td>I</td><td>leicht bis mittel</td><td>Nichtopioid: ASS, NSAR, Metamizol</td></tr>
    <tr><td>II</td><td>mittel bis stark</td><td>schwache Opioide (Tramadol, Tilidin, Codein) + Nichtopioid</td></tr>
    <tr><td>III</td><td>sehr stark</td><td>starke Opioide (Morphin, Hydromorphon, Fentanyl, Oxycodon, Pethidin, Tapentadol) + Nichtopioid</td></tr>
  </tbody>
</table></div>
<p>Jeweils ggf. Koanalgetika (z. B. Antidepressiva) und Adjuvantien (z. B. Laxantien). Beginn nicht zwangsläufig mit Stufe I, sondern nach Schmerzstärke; Stufe II + III nicht kombinieren; nach ärztlicher Anordnung, dokumentieren (S. 17).</p>
<p class="hand">Handschriftlich S. 13: „Prüfung: Dekubitus: 10–15 Min“ (ohne weiteren Kontext im Heft); S. 15: „Spätestens nach 4 Wochen müssen alle Wunden evaluiert werden!“</p>

<h3>6. Hautzustand <span class="seite">S. 18–21</span></h3>
<p>Trockene, rissige, zu fettige oder feuchte Haut, Allergien und Hauterkrankungen fördern Entstehung/Vergrößerung von Wunden. Wundrand gefährdet durch Feuchtigkeit (Exsudat, Schweiß, Urin, Stuhl); Hautprobleme auch als Begleitsymptom von Grunderkrankungen.</p>
<div class="tabelle"><table>
  <thead><tr><th>Ursache</th><th>Befunde (Auswahl)</th><th>Folgen</th></tr></thead>
  <tbody>
    <tr><td>Diabetes</td><td>trocken, juckend, Ekzema craquelé (Austrocknungsekzem), Pilzinfektionen (ca. 80 %), Malum perforans, Rhagaden</td><td>gestörte Hautschutzbarriere, Infektionsgefahr</td></tr>
    <tr><td>CVI</td><td>trocken, schuppig, Stauungsekzem, Ödeme, Dermatoliposklerose, Capillaritis alba, Hyperpigmentierung, Mazeration</td><td>Infektionsgefahr; O₂-/Nährstoffversorgung gestört</td></tr>
    <tr><td>pAVK</td><td>livide, kühl, dünn, glänzend; Rarefizierung der Hautanhangsgebilde, Nagelmykose</td><td>stark verzögerte bis versiegte Zellregeneration, Infektion</td></tr>
    <tr><td>DFS/Neuropathie</td><td>ausgeprägte Hyperkeratosen</td><td>stören Epithelisierung am Wundrand</td></tr>
    <tr><td>Exsudat · Pflegeprodukte · Alter</td><td>Mazeration, Erosion, toxisches/allergisches Kontaktekzem · dünne, trockene, verletzungsanfällige Haut</td><td>Vergrößerung, Schmerz, Infektion; Hautrisse durch anhaftende Auflagen</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Hautpflege</b> (S. 20): trocken und sauber; hautneutrale, leicht saure Syndets; keine alkalischen Seifen (Säureschutzmantel); oft reicht körperwarmes Wasser; trockene Haut mit W/O-Produkten; bei problematischer Haut <b>keine O/W</b>-Produkte (Dochteffekt → Austrocknung); bei chronischen Wunden keine Parfüm-, Konservierungsstoffe, Emulgatoren (Lanolin/Wollwachs). <b>Faustregel: feucht auf feucht, fett auf trocken.</b> Aufklärung/Schulung.</li>
  <li><b>Bei bestehenden Wunden</b> (S. 20–21): Wundrand vor Mazeration schützen (Hautschutzfilm; Transparentfolie, dünnes Hydrokolloid, Hydrofaser, Stomapaste); Narbenpflege mit Dexpanthenol; Pflasterspray; Analtampons ≥ 2× täglich wechseln (Ileusgefahr!); silikon-/Soft-Gel-beschichtete Auflagen; bei Pergament-, Kortison-, Altershaut keine Auflagen mit Kleberand; Sakralregion mit semipermeabler Folie randfixieren.</li>
</ul>
<p class="warnung"><b>Ungeeignet</b> (S. 21): Salben/Cremes/Zinkpaste in offene Wunden reiben; Zusatz-/Parfümstoffe; Alkohollösungen (Franzbranntwein); abdichtende Pasten; Fette/Öle (Melkfett, Babyöl, Lebertranpaste); Puder; Massieren gefährdeter Hautstellen.</p>

<h3>7. Nikotin, Adipositas, Adhärenz, Psyche <span class="seite">S. 21–24</span></h3>
<ul>
  <li><b>Nikotinkonsum:</b> Blausäure hemmt O₂-Transport; Kohlenmonoxid bindet an Hämoglobin; Nikotin → Dopamin/Epinephrin ↑ → peripherer Blutfluss ↓, Thrombozytenaggregation ↑ → Mikrookklusionen; Infektionsrisiko ↑. Raucherentwöhnung, Beratung – auch Passivraucher:innen aufklären.</li>
  <li><b>Adipositas:</b> Herzauswurfleistung reicht nicht → O₂-Versorgung ↓; Spannung auf Nähte, Bakterienvermehrung in Hautfalten, Dehiszenzen; häufig Malnutrition → Aufklärung, Ernährungsberatung, Gewichtsreduktion, Ernährungsumstellung.</li>
  <li><b>Adhärenz:</b> Ausmaß, in dem Betroffene vereinbarte Maßnahmen einhalten und in den Alltag integrieren; Basis: Krankheitsverständnis, respektvolle Kommunikation. <span class="hand-inline">Handschr.: Adhärenz = aktive Mitarbeit/Mithilfe; Compliance = Bereitschaft.</span> Einflussfaktoren (S. 23): sozialökonomisch (Analphabetismus, Bildung, Kultur, weite Wege, Kosten) · Behandlungsteam/Gesundheitssystem (unabgestimmtes Team, unverständliche Anweisungen, fehlende Schulung, kurze Sprechzeiten, Kritik an bisherigen Maßnahmen) · krankheitsbedingt (Schwere, Demenz, Depression, Sucht) · therapiebezogen (Dauer, Kosten, Nebenwirkungen) · individuell (Wissen, Erwartungen, Angst, fehlende Akzeptanz).</li>
  <li><b>Psychische Verfassung:</b> stabile Psyche wirkt positiv; Depression, Neurosen, Psychosen, Sucht, Selbstschädigung, Demenz senken Kooperation. Manche manipulieren die Wunde aus Angst vor Einsamkeit; Gefühl, Belastung zu sein. Suchtkranke: oft schlechter AZ, Immunabwehr ↓, Ernährungszustand ↓.</li>
  <li><b>Übung III – Demenz</b> (Lösung S. 30): bewegungsaktives Stadium → hoher Energiebedarf (3000–4000 kcal), Wunde erhöht ihn zusätzlich; Schmerzen oft nicht erkannt → sorgfältige Beobachtung, Fremdeinschätzung; <b>Ablenkungsverband</b>: elastische Mullbinden um die Handgelenke, mit breiten Pflasterstreifen befestigt, ggf. farbige Kohäsivbinde.</li>
</ul>

<h3>8. Immunstatus, Medikamente, Lebensalter, Weitere <span class="seite">S. 24–27</span></h3>
<ul>
  <li><b>Immunstatus:</b> angeborene/erworbene Defekte, alters-, therapie- oder krankheitsbedingte Schwäche → unzureichende Immunantwort → schlecht beherrschbare Infektionen. Jede Krankheit/Medikation, die das Immunsystem schwächt, kann die Wundheilung zum Stillstand bringen.</li>
  <li><b>Medikamente:</b> Immunsuppressiva, Zytostatika, Glucocorticoide/Kortikosteroide, NSAR, Antikoagulantien (Marcumar, Heparin), Diuretika, Barbiturate, Antibiotika. Immunsuppressiva → Wundinfektionen; Zytostatika hemmen Zellteilung, v. a. Granulationsgewebe; Glucocorticoide hemmen Zellproliferation und Kollagensynthese in allen Phasen (systemisch ausgeprägt; topisch teils schmerzlindernd/unterstützend); NSAR beeinflussen die Entzündungsantwort, Langzeitgabe → Zellteilung und Zugfestigkeit ↓. Medikationsplan im Blick; Absetzen nicht unabdingbarer Mittel ärztlich anregen.</li>
  <li><b>Lebensalter:</b> Zellteilungsrate, Hautelastizität, Kollagenerneuerung ↓; dünne, trockene Haut; Multimorbidität → Gefäßsituation ↓; nicht beeinflussbar, aber gesunder Lebensstil wirkt positiv.</li>
  <li><b>Weitere:</b> Durchblutungsstörungen; alles, was O₂-Sättigung senkt (Lungenschäden, niedriger Blutdruck); <b>Seneszenz</b> (<span class="hand-inline">handschr.: Überalterung der Zellen</span>) v. a. der Fibroblasten; <b>erhöhte Proteaseaktivität (EPA)</b> stimuliert Entzündung weiter; Schlafstörungen; fehlende soziale Kontakte; Haustiere (positiv, aber Infektionsgefahr bei fehlender Hygiene, z. B. Wunde lecken, nicht entwurmt); maligne/konsumierende Erkrankungen → oft nicht heilende Wunden; Qualität von Beratung und Schulung.</li>
</ul>

<h3>9. Lokale Einflussfaktoren <span class="seite">S. 27–29</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Faktor</th><th>Wirkung (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Entzündung</td><td>Startschuss der Heilung in der Exsudationsphase; nicht gleich Infektion (lokal, kein Eiter, keine hohe Keimzahl; Mehrdurchblutung, mehr Nährstoffe/O₂/Abwehrzellen). Bei chronischen Wunden übersteigert → proteolytische Enzyme (Elastase, Plasmin) zerstören extrazelluläre Matrix, deaktivieren Wachstumsfaktoren, erhöhen Fibroblastenseneszenz → Stagnation.</td></tr>
    <tr><td>Infektion</td><td>= Eindringen pathogener Mikroorganismen mit Besiedlung und Vermehrung. Bekämpfung hat Vorrang, Stoffwechsel ↑ → Nährstoffe, Flüssigkeit, O₂ fehlen für die Heilung → Verzögerung bis Stagnation.</td></tr>
    <tr><td>Scherkräfte, Druck</td><td>Ursache von Wunden (Dekubitus); Verschiebung von Hautschichten (Fortbewegung, zu straffer Kompressionsverband) → Überdehnung der Kapillaren, Minderdurchblutung; bei Älteren Abreißen von Kapillaren. Bei DFS und Dekubitus ist Druckentlastung ausschlaggebend.</td></tr>
    <tr><td>Fremdkörper</td><td>Jeder Fremdkörper behindert die Wundheilung (Verbandreste, Salbenreste, Schmutz, Metallimplantate): Unterversorgung, Abflusshindernis für Exsudat, Granulome, Abszesse, Fisteln, Entzündung.</td></tr>
  </tbody>
</table></div>
<p class="hand"><b>Handschriftliche Zusatznotizen</b> (nicht im Druck, nicht geprüft): Wundränder arteriell „wie ausgestanzt“, venös „nicht scharf begrenzt“; Biofilm milchig, schleimig, glänzend (S. 28) · Jodsalbe, Octenisept („zelltoxisch“), Silber jeweils max. 14 d (S. 28) · Alginat auf feuchte Nekrosen, viel Flüssigkeit (S. 27) · Kompression: Langzug = hoher Arbeitsdruck, geringer Ruhedruck; Kurzzug = hoher Ruhedruck, geringer Arbeitsdruck (S. 31) · „Pflegefachperson statt Pflegefachkraft“, „Zugehörige und Angehörige“ (S. 13) · Cleopatra-Ölbad: Milch, Öl (Oliven/Mandel) + Prise Salz (S. 29).</p>
<p class="merke"><b>Zusammenfassung (S. 29):</b> Wundheilung kann in allen Phasen durch allgemeine und lokale Faktoren gestört oder zur Stagnation gebracht werden. Erst erkennen, welche Faktoren beteiligt sind – dann gezielt unterstützende Maßnahmen ergreifen.</p>
`
});
