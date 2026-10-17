/*
 * Thema: Expertenstandard Dekubitusprophylaxe in der Pflege
 * Quelle: murimed-Lernheft Dekubitusprophylaxe in der Pflege, Modul II
 * (Seitenangaben beziehen sich auf das Heft).
 * Inhalte übernommen aus "Zusammenfassung_Expertenstandard_Dekubitusprophylaxe.pdf" und
 * "Lernkarten_Expertenstandard_Dekubitusprophylaxe.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 * (Dieses Heft enthält keine handschriftlichen Notizen und keine Prüfungsmarkierungen.)
 */
Lernapp.thema({
  id: "dekubitusprophylaxe",
  titel: "Expertenstandard Dekubitusprophylaxe in der Pflege",
  kurz: "Dekubitusprophylaxe",
  quelle: "murimed-Lernheft Dekubitusprophylaxe in der Pflege, Modul II",
  hinweis:
    "Quelle ist ausschließlich das Lernheft; Seitenzahlen in Klammern. Das Heft enthält keine handschriftlichen Notizen oder Prüfungsmarkierungen, daher keine ★. Die im Heft zitierten Primärquellen (v. a. DNQP 2017, NPUAP 2014, Protz/Hinnerk 2019) wurden nicht separat geprüft.",

  karten: [
    { k: "Grundlagen", f: "Welcher Leitsatz leitet den Expertenstandard ein?",
      a: "„Die effektive Prävention von Dekubitus ist eine Kernaufgabe in der Pflege.“ (DNQP 2017) Dekubitus gilt als Indikator der Versorgungsqualität; Prävalenz in Deutschland ca. 2–4 %.", s: "S. 2" },
    { k: "Grundlagen", f: "Welche rechtliche Bedeutung haben Expertenstandards?",
      a: "Sie haben den Charakter vorweggenommener Sachverständigengutachten und dienen vor Gericht als Maßstab bei Verletzung der Sorgfaltspflicht. Der MDK prüft den Standard als Transparenzkriterium.", s: "S. 2" },
    { k: "Basiswissen", f: "Wie ist ein Dekubitus definiert?",
      a: "„Eine lokal begrenzte Schädigung der Haut und/oder des darunter liegenden Gewebes, typischerweise über knöchernen Vorsprüngen, infolge von Druck oder von Druck in Verbindung mit Scherkräften.“ (NPUAP 2014)", s: "S. 3", sp: ["dekubitus: Def. Dekubitus"] },
    { k: "Basiswissen", f: "Scherkräfte vs. Reibung?",
      a: "Scherkräfte verformen tieferliegendes Gewebe. Reibung wirkt oberflächlich, meist zwischen Haut und Bettlaken – nicht gleichbedeutend. Einen Schwellenwert für schädlichen Druck gibt es nicht.", s: "S. 3", sp: ["dekubitus: Def. Dekubitus – Entstehung"] },
    { k: "Basiswissen", f: "Welche Mechanismen führen zum druckbedingten Zelltod?",
      a: "1. Direkte mechanische Deformation des Gewebes (Muskelzellen besonders anfällig – Nekrose in Minuten).\n2. Verschluss von Blut- und Lymphgefäßen → O₂-/Nährstoffmangel, Stoffwechselprodukte bleiben. Beide verstärken sich.", s: "S. 4", sp: ["dekubitus: Def. Dekubitus – Entstehung"] },
    { k: "Basiswissen", f: "Warum kann ein Dekubitus unter intakter Haut liegen?",
      a: "Druckgeschwüre entwickeln sich zuerst in anfälligem Gewebe wie der Muskulatur; die darüberliegende Haut kann intakt sein. Tiefe Schädigungen müssen nicht zwangsläufig ein offener Dekubitus sein.", s: "S. 4", sp: ["dekubitus: Def. Dekubitus – Entstehung"] },
    { k: "Risikofaktoren", f: "Welche drei Risikofaktoren sind am wichtigsten?",
      a: "1. Beeinträchtigung der Mobilität (direkt mehr Druck/Scherkraft)\n2. Störung der Durchblutung (schwächt Gewebetoleranz)\n3. Beeinträchtigter Hautzustand bzw. vorhandener Dekubitus. Rahmenmodell der Einschätzung.", s: "S. 4–5", sp: ["dekubitus: Def. Dekubitus – Risikofaktoren"] },
    { k: "Risikofaktoren", f: "Weitere Risikofaktoren – zwei Gruppen?",
      a: "Druck/Scherkräfte ↑: eingeschränkte Eigenmobilität, neurologische Störungen, Dauer/Intensität, Reibung, medizinische Geräte (Zu-/Ableitungen).\nGewebetoleranz ↓: Mangelernährung, Durchblutung/O₂, Hautfeuchtigkeit, Hauttoleranz/Auflageflächen.", s: "S. 5", sp: ["dekubitus: Def. Dekubitus – Risikofaktoren"] },
    { k: "Risikofaktoren", f: "Wie hängen Gesundheitsprobleme und Risiko zusammen?",
      a: "Je komplexer und schwerwiegender die Gesundheitsprobleme, desto höher der Unterstützungsbedarf. Je höher der Unterstützungsbedarf, desto höher kann das Dekubitusrisiko sein. Faktoren treten meist gemeinsam auf.", s: "S. 5", sp: ["dekubitus: Def. Dekubitus – Risikofaktoren"] },
    { k: "Klassifikation", f: "Dekubitus Kategorie I?",
      a: "Intakte Haut mit nicht wegdrückbarer Rötung, meist über einem Knochenvorsprung; Bereich ggf. schmerzhaft, härter, wärmer oder kälter. (EPUAP/NPUAP/PPPIA; ICD-10: Druckzone mit nicht wegdrückbarer Rötung)", s: "S. 5", sp: ["dekubitus: Def. Dekubitus – Klassifikation"] },
    { k: "Klassifikation", f: "Dekubitus Kategorie II?",
      a: "Teilzerstörung der Haut (Epidermis/Dermis): flaches, offenes Geschwür, rot-rosa Wundbett ohne Beläge; auch intakte/offene serumgefüllte Blase. Nicht für Skin Tears, Pflasterschäden oder Mazeration verwenden.", s: "S. 5–6", sp: ["dekubitus: Def. Dekubitus – Klassifikation"] },
    { k: "Klassifikation", f: "Dekubitus Kategorie III und IV?",
      a: "III: vollständiger Hautverlust, Subcutis sichtbar, Knochen/Sehnen/Muskeln nicht offen; Beläge, Taschen möglich.\nIV: vollständiger Gewebeverlust mit freiliegenden Knochen, Sehnen, Muskeln; Osteomyelitis, Nekrosen, hohes Infektionsrisiko.", s: "S. 6", sp: ["dekubitus: Def. Dekubitus – Klassifikation"] },
    { k: "Klassifikation", f: "Unbekannte Tiefe vs. vermutete tiefe Gewebeschädigung?",
      a: "Unbekannte Tiefe: vollständiger Gewebeverlust, Wundbett durch Beläge/Schorf verdeckt. Vermutete tiefe Schädigung: intakte Haut, livide oder rötlich-braun, ggf. blutgefüllte Blase; Gewebe schmerzhaft, fest, breiig, wärmer/kälter.", s: "S. 6", sp: ["dekubitus: Def. Dekubitus – Klassifikation"] },
    { k: "Aufbau", f: "Welches Ziel hat der Expertenstandard?",
      a: "Jeder dekubitusgefährdete Mensch erhält eine Prophylaxe, die die Entstehung eines Dekubitus verhindert. Im Vordergrund stehen Interventionen, v. a. Bewegungsförderung, zur Druckentlastung und -verteilung.", s: "S. 7", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Aufbau", f: "Was muss das Pflegefachpersonal gewährleisten?",
      a: "Systematische Risikoeinschätzung · Information, Schulung, Beratung (auch Angehörige) · Bewegungsförderung · Druckentlastung und -verteilung · Kontinuität und Evaluation prophylaktischer Maßnahmen.", s: "S. 7", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Aufbau", f: "Gilt das Ziel auch in der Sterbephase?",
      a: "Bei lebensbedrohlichen Zuständen oder anderer Prioritätensetzung (Sterbephase) ist das Ziel ggf. nicht erreichbar. Das entbindet aber nicht von Risikoeinschätzung, Information und gemeinsamer Entscheidung über passende Maßnahmen.", s: "S. 7" },
    { k: "Aufbau", f: "Anwender und Zielgruppe?",
      a: "Anwender: Pflegefachkräfte ambulant, stationäre Altenhilfe, Gesundheitsversorgung.\nZielgruppe: Menschen jeden Alters mit erhöhtem Dekubitusrisiko; Angehörige/informelle Pflegende ausdrücklich eingeschlossen.", s: "S. 7–8" },
    { k: "Aufbau", f: "Nenne die fünf Phasen der Dekubitusprophylaxe.",
      a: "1. Risikoeinschätzung\n2. Maßnahmenplanung\n3. Information, Beratung, Schulung\n4. Maßnahmendurchführung (Bewegungsförderung, Hilfsmitteleinsatz)\n5. Evaluation – jeweils mit Struktur-, Prozess-, Ergebniskriterien.", s: "S. 8" },
    { k: "Phase 1", f: "Was fordern S1, P1 und E1?",
      a: "S1: aktuelles Wissen zur Entstehung, Kompetenz zur Einschätzung · P1: unmittelbar zu Beginn bei allen systematisch: Screening, ggf. differenzierte Beurteilung; Wiederholung · E1: aktuelle, systematische Einschätzung liegt vor.", s: "S. 10" },
    { k: "Phase 1", f: "Welches Wissen umfasst S1?",
      a: "Aufbau und Funktion der Haut · Ursachen und Risikofaktoren · Anzeichen eines Risikos inkl. Kategorien · gefährdete Körperstellen · besonders gefährdete Populationen. Nur durch regelmäßige Fortbildung erreichbar.", s: "S. 11" },
    { k: "Phase 1", f: "Was wird in der differenzierten Einschätzung beurteilt?",
      a: "Mobilität/Immobilität · Hautzustand/vorhandener Dekubitus · Durchblutungsstörungen · sensorische Wahrnehmung · Diabetes mellitus · Allgemeinzustand/Begleiterkrankungen · Ernährungszustand · Hautfeuchtigkeit.", s: "S. 11" },
    { k: "Phase 1", f: "Welche Rolle spielen Braden- und Norton-Skala?",
      a: "Standardisierte Assessments wie Braden oder Norton werden nicht empfohlen, können aber als unterstützende Informationsquelle genutzt werden. Maßgeblich ist die klinische Einschätzung inkl. Hautinspektion. Ja/Nein- oder Punktbögen eher ungünstig.", s: "S. 11–12" },
    { k: "Phase 1", f: "Wann muss erneut eingeschätzt werden?",
      a: "In individuell festzulegenden Abständen · unverzüglich bei Veränderung der Mobilität/Selbstständigkeit (BRi) · beim Hinzukommen externer Faktoren (z. B. Katheter), die Druck/Scherkräfte verlängern.", s: "S. 12" },
    { k: "Phase 1", f: "Wann darf das Screening übersprungen werden?",
      a: "Bei bestimmten Patientengruppen (z. B. Intensivpflege, Geriatrie), weil dort grundsätzlich ein Dekubitusrisiko besteht → sofort differenzierte Risikoeinschätzung.", s: "S. 22" },
    { k: "Phase 2", f: "Was fordern S2a, S2b, P2 und E2?",
      a: "S2a: Planungs- und Steuerungskompetenz · S2b: Verfahrensregelung · P2: individuelle Planung mit Betroffenen/Angehörigen, Information aller Beteiligten · E2: Gefährdung und Maßnahmen allen bekannt und kontinuierlich fortgeführt.", s: "S. 12" },
    { k: "Phase 2", f: "Warum ist Kontinuität so wichtig – wer wird informiert?",
      a: "Prophylaxe ist nur wirksam, wenn kontinuierlich durchgeführt; Versorgung meist berufsgruppen- und sektorübergreifend → alle Beteiligten informieren, z. B. Personal in Arztpraxen und Transportdiensten.", s: "S. 12–13" },
    { k: "Phase 3", f: "Was fordern S3a, S3b, P3 und E3?",
      a: "S3a: Fähigkeiten zu Information, Schulung, Beratung · S3b: Einrichtung stellt Material · P3: erläutert Gefährdung, Maßnahmen, Evaluation · E3: Betroffene/Angehörige kennen Gefahr und Maßnahmen und wirken mit.", s: "S. 13" },
    { k: "Phase 3", f: "Ziele der Anleitung und Schulung?",
      a: "Förderung der Eigenbewegung · Befähigung zur Hautinspektion · Durchführung druckentlastender Interventionen · sicherer und adäquater Einsatz druckverteilender/-entlastender Hilfsmittel.", s: "S. 14" },
    { k: "Phase 3", f: "Was gehört in das Beratungsgespräch?",
      a: "Alternativen aufzeigen · Vor- und Nachteile der Bewegungsmaßnahmen · Ziele der Maßnahmen · Folgen nicht stattfindender Intervention · Bedeutung regelmäßiger Hautinspektionen. Der Beratungsprozess ist nie gänzlich abgeschlossen.", s: "S. 14" },
    { k: "Phase 4", f: "Was fordern S4, P4 und E4?",
      a: "S4: Wissen zu druckentlastenden, bewegungsfördernden Maßnahmen; haut-/gewebeschonende Techniken · P4: fördert Eigenbewegung; sonst sofortige Druckentlastung und vollständige Freilage · E4: Eigenbewegung gefördert, Stellen entlastet.", s: "S. 15" },
    { k: "Phase 4", f: "Nenne die vier Interventionskategorien.",
      a: "1. Förderung der Eigenbewegung\n2. angemessene Positionen und regelmäßige Positionswechsel (Wechselpositionierung)\n3. vollständige Entlastung stark gefährdeter Stellen (Freilage)\n4. Reduktion therapiebedingter Druck-/Scherkräfte (Zu- und Ableitungen).", s: "S. 16", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Phase 4", f: "Aktive vs. passive Bewegung?",
      a: "Passiv sind alle Maßnahmen, die eine pflegerisch durchgeführte Wechselpositionierung oder Freilage beinhalten. Während der Positionierung Hautzustand kontrollieren und Schmerzen/Unbehagen erfassen; Angehörige anleiten.", s: "S. 16", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Phase 4", f: "Was gehört in den Bewegungsförderungsplan?",
      a: "Nicht nur Rechts-Links-Rücken, sondern z. B. 30–40° Seitenlage, Oberkörperhochlage max. 30°, Mobilisierung; individuelle Bewegungsintervalle und deren Auswertung; Hautkontrolle (Fingertest) und Ergebnisse.", s: "S. 16–17", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Phase 4", f: "Welche Haltung gilt gegenüber den Wünschen der Betroffenen?",
      a: "Der Wille des dekubitusgefährdeten Menschen und seiner Angehörigen ist stets zu respektieren; ihnen obliegt die freie Entscheidung über den Umfang der Mitwirkung. Ablehnung wird dokumentiert.", s: "S. 15, 19" },
    { k: "Hilfsmittel", f: "Was fordern S5a, S5b, P5 und E5?",
      a: "S5a: Kompetenz zu Notwendigkeit und Eignung von Hilfsmitteln · S5b: Wechseldruck-/Weichlagerungssysteme unverzüglich zugänglich · P5: Hilfsmittel, wenn Bewegungsförderung nicht ausreicht · E5: unverzüglich auf geeignetem Hilfsmittel.", s: "S. 17" },
    { k: "Hilfsmittel", f: "Braucht jeder gefährdete Mensch eine Spezialmatratze?",
      a: "Nein. Hilfsmittel unterstützen, ersetzen aber nicht die Förderung der Eigenbewegung. Es gibt nicht „ein richtiges“ Hilfsmittel – die Wahl richtet sich nach dem individuellen Nutzen.", s: "S. 17–18", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Hilfsmittel", f: "Kriterien für die Hilfsmittelauswahl?",
      a: "Ressourcen der Eigenbewegung · vorrangige Pflege-/Therapieziele (z. B. Schmerzreduktion) · Möglichkeiten der Eigenbewegung · gefährdete Körperpartien · Gewicht · Kosten/Nutzen · Präferenzen · Praktikabilität · Nachteile.", s: "S. 18", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Hilfsmittel", f: "Welche Hilfsmittel sind geeignet?",
      a: "Weichlagerungskissen, Weichlagerungsmatratzen, Wechseldruckauflagen/-matratzen, Spezialbetten (z. B. Luftkissenbetten).", s: "S. 18", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Hilfsmittel", f: "Welche Hilfsmittel sind ungeeignet – und warum?",
      a: "Lagerungsringe (Druckerhöhung an den Rändern) · Felle, Watteverbände, Wassermatratzen (fehlende Wirksamkeit) · reibungskraftreduzierte Hydrokolloid-Pflaster (Ferse).", s: "S. 18", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Hilfsmittel", f: "Wie schnell muss Druck entlastet werden?",
      a: "Bereits 10–20 Minuten erhöhter Druck/Scherkraft können zu Dekubitus führen → unverzüglich Druckverteilung/-entlastung; bis Hilfsmittel eintreffen, individuell angepasste Positionierung.", s: "S. 18", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Hilfsmittel", f: "Wann sind Hilfsmittel unverzüglich einzusetzen (P5)?",
      a: "Wenn eine ausreichende Bewegungsförderung nicht möglich ist, z. B. bei Kachexie, fehlender Eigenbeweglichkeit oder krankheits-/therapiebedingten Kontraindikationen. Sonst bleibt Bewegungsförderung oberstes Gebot.", s: "S. 19", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { k: "Hilfsmittel", f: "Hilfsmittelversorgung ambulant – was tun?",
      a: "Versorgung meist über die Pflegekassen → Pflegekasse bzw. Ärzte über Notwendigkeit und Dringlichkeit informieren, Verordnung anregen. Ablehnung durch Kostenträger oder Betroffene dokumentieren.", s: "S. 18–19" },
    { k: "Phase 5", f: "Was fordern S6a, S6b, P6, E6a und E6b?",
      a: "S6a: Kompetenz, Effektivität zu beurteilen · S6b: Ressourcen zur Erfassung · P6: Hautzustand in individuellen Abständen begutachten · E6a: kein Dekubitus · E6b: Zahlen zu Häufigkeit und Wirksamkeit.", s: "S. 19" },
    { k: "Phase 5", f: "Wie funktioniert der Fingertest?",
      a: "Leichter Fingerdruck auf die gerötete Stelle (alternativ transparente Plastikscheibe):\nHaut wird weiß → kein Dekubitus.\nHaut bleibt rot → Dekubitus Kategorie I.", s: "S. 20" },
    { k: "Phase 5", f: "Was gilt bei dunkel pigmentierter Haut?",
      a: "Die Verfärbung ist ggf. nicht sichtbar → weitere Parameter beurteilen: Ist der Bereich schmerzhaft, härter, weicher, wärmer oder kälter als das umgebende Gewebe?", s: "S. 20" },
    { k: "Phase 5", f: "Was ist zu tun, wenn ein Dekubitus festgestellt wird?",
      a: "Prophylaktische Maßnahmen überprüfen; Wunde nach dem Expertenstandard Pflege von Menschen mit chronischen Wunden versorgen. Inspektion stets der gesamten Körperoberfläche; Hilfsmittel auf Intaktheit prüfen.", s: "S. 20–21" },
    { k: "Einführung", f: "Schritte zur Einführung des Standards?",
      a: "Auseinandersetzung auf Managementebene (PDL/QMB) · Verständnis der Zielsetzung · Reflexion der Ressourcen · Anpassung im Qualitätszirkel · Implementierungsschritte mit verbindlicher Terminierung · Information und Schulung.", s: "S. 21–22" },
    { k: "Prozess", f: "Beschreibe den Prozessablauf.",
      a: "Risikogruppe? Ja → differenzierte Beurteilung; nein → Screening (ausschließbar → Ende). Risiko → sofortige Druckentlastung + Planung → Beratung → Durchführung → Eigenbewegung ausreichend? (nein → Freilage + Hilfsmittel) → Evaluation → erfolgreich? → kein Dekubitus.", s: "S. 24" }
  ],

  quiz: [
    { f: "Wie hoch wird die Dekubitusprävalenz in der Akut- und Langzeitpflege in Deutschland laut Heft geschätzt?",
      o: ["ca. 2–4 %", "ca. 20–40 %", "unter 0,1 %", "ca. 50 %"],
      e: "Dekubitusentstehung gilt als anerkannter Indikator der Versorgungsqualität; die Prävalenz wird auf ca. 2–4 % geschätzt.", s: "S. 2" },
    { f: "Welchen juristischen Charakter haben Expertenstandards?",
      o: ["Den Charakter vorweggenommener Sachverständigengutachten – Maßstab bei Verletzung der Sorgfaltspflicht", "Sie sind unverbindliche Empfehlungen ohne rechtliche Bedeutung", "Sie sind Gesetze, die vom Bundestag beschlossen werden", "Sie gelten nur für Krankenhäuser mit Zertifizierung"],
      e: "Expertenstandards haben juristisch den Charakter vorweggenommener Sachverständigengutachten; der MDK prüft den Standard als Transparenzkriterium.", s: "S. 2" },
    { f: "Wie definiert die NPUAP (2014) einen Dekubitus?",
      o: ["Lokal begrenzte Schädigung der Haut und/oder des darunter liegenden Gewebes, typischerweise über knöchernen Vorsprüngen, infolge von Druck oder von Druck in Verbindung mit Scherkräften", "Hautschaden, der ausschließlich durch Feuchtigkeit und Inkontinenz entsteht", "Infektion der Haut durch Bakterien bei bettlägerigen Menschen", "Oberflächliche Hautabschürfung durch Reibung am Bettlaken"],
      e: "Definition NPUAP 2014: Schädigung infolge von Druck oder von Druck in Verbindung mit Scherkräften, typischerweise über knöchernen Vorsprüngen.", s: "S. 3", sp: ["dekubitus: Def. Dekubitus"] },
    { f: "Was unterscheidet Scherkräfte von Reibung?",
      o: ["Scherkräfte verformen tieferliegendes Gewebe, Reibung wirkt oberflächlich", "Beide Begriffe sind gleichbedeutend", "Reibung verformt tieferliegendes Gewebe, Scherkräfte wirken nur oberflächlich", "Scherkräfte entstehen nur bei Wassermatratzen"],
      e: "Scherkräfte verformen tieferes Gewebe; Reibung wirkt oberflächlich, meist zwischen Haut und Bettlaken – nicht gleichbedeutend.", s: "S. 3", sp: ["dekubitus: Def. Dekubitus – Entstehung"] },
    { f: "Ab welchem Druck bzw. welcher Druckdauer entsteht sicher ein Dekubitus?",
      o: ["Ein Schwellenwert ist nicht bekannt – der Schaden hängt von Dauer, Stärke und weiteren Risikofaktoren ab", "Erst nach genau 2 Stunden Druck", "Erst ab einem Auflagedruck von 100 mmHg", "Nur wenn bereits eine offene Wunde besteht"],
      e: "Der Schaden ist abhängig von Dauer und Stärke; ein Schwellenwert ist nicht bekannt; zusätzlich spielen weitere Risikofaktoren eine Rolle.", s: "S. 3", sp: ["dekubitus: Def. Dekubitus – Entstehung"] },
    { f: "Welche beiden Mechanismen führen zum druckbedingten Zelltod?",
      o: ["Direkte mechanische Deformation des Gewebes", "Verschluss von Blut- und Lymphgefäßen mit Minderversorgung", "Allergische Reaktion auf Inkontinenzmaterial", "Austrocknung der Haut durch Raumluft"],
      r: 2,
      e: "Ursachen: direkte mechanische Deformation → Zelltod und Verschluss von Blut- und Lymphgefäßen → O₂-/Nährstoffmangel. Beide verstärken sich gegenseitig.", s: "S. 4", sp: ["dekubitus: Def. Dekubitus – Entstehung"] },
    { f: "Welches Gewebe gilt als besonders anfällig für druckbedingte Schäden?",
      o: ["Muskulatur – Muskelnekrosen können in wenigen Minuten entstehen", "Die Hautzellen – sie sind am wenigsten widerstandsfähig", "Keines – alle Gewebe sind gleich widerstandsfähig", "Nur das Gewebe an Händen und Unterarmen"],
      e: "Muskelzellen sind besonders anfällig; Hautzellen sind widerstandsfähiger. Druckgeschwüre entstehen zuerst in anfälligem Gewebe wie der Muskulatur.", s: "S. 4", sp: ["dekubitus: Def. Dekubitus – Entstehung"] },
    { f: "Kann eine tiefe Dekubitusschädigung unter intakter Haut liegen?",
      o: ["Ja – die darüberliegende Haut kann intakt sein; tiefe Schädigungen müssen nicht zwangsläufig ein offener Dekubitus sein", "Nein – ein Dekubitus ist immer eine offene Wunde", "Nein – tiefe Schäden entstehen immer erst nach einer offenen Hautwunde", "Nur bei Kategorie II"],
      e: "Druckgeschwüre entwickeln sich zuerst in anfälligem Gewebe wie der Muskulatur; die darüberliegende Haut kann intakt sein.", s: "S. 4", sp: ["dekubitus: Def. Dekubitus – Entstehung"] },
    { f: "Welche Risikofaktoren gelten als die wichtigsten (Rahmenmodell der Einschätzung)?",
      o: ["Beeinträchtigung der Mobilität", "Störung der Durchblutung", "Beeinträchtigter Hautzustand bzw. vorhandener Dekubitus", "Hohe Raumtemperatur"],
      r: 3,
      e: "Die drei wichtigsten Risikofaktoren: Beeinträchtigung der Mobilität, Störung der Durchblutung, beeinträchtigter Hautzustand bzw. vorhandener Dekubitus.", s: "S. 4–5", sp: ["dekubitus: Def. Dekubitus – Risikofaktoren"] },
    { f: "Welche Faktoren ordnet das Heft der beeinträchtigten Gewebetoleranz zu?",
      o: ["Mangelernährung", "Hautfeuchtigkeit", "Medizinische Geräte (Zu- und Ableitungen)", "Neurologische Einschränkungen"],
      r: 2,
      e: "Gewebetoleranz ↓: Mangelernährung, Durchblutung/O₂, Hautfeuchtigkeit, Hauttoleranz/Auflageflächen. Medizinische Geräte und neurologische Einschränkungen gehören zu den verlängerten/verstärkten Druck- und Scherkräften.", s: "S. 5", sp: ["dekubitus: Def. Dekubitus – Risikofaktoren"] },
    { f: "Welcher Merksatz zu Risikofaktoren steht im Heft?",
      o: ["Je höher der Unterstützungsbedarf, desto höher kann das Dekubitusrisiko sein", "Risikofaktoren treten meist einzeln auf", "Unterstützungsbedarf und Dekubitusrisiko hängen nicht zusammen", "Je komplexer die Gesundheitsprobleme, desto geringer der Unterstützungsbedarf"],
      e: "Risikofaktoren treten meist gemeinsam auf: je komplexer die Gesundheitsprobleme, desto höher der Unterstützungsbedarf – je höher der Unterstützungsbedarf, desto höher kann das Dekubitusrisiko sein.", s: "S. 5", sp: ["dekubitus: Def. Dekubitus – Risikofaktoren"] },
    { f: "Was kennzeichnet einen Dekubitus der Kategorie I?",
      o: ["Intakte Haut mit nicht wegdrückbarer Rötung, meist über einem Knochenvorsprung", "Flaches, offenes Geschwür mit rot-rosa Wundbett ohne Beläge", "Vollständiger Hautverlust, Subcutis sichtbar", "Freiliegende Knochen, Sehnen oder Muskeln"],
      e: "Kategorie I: intakte Haut mit nicht wegdrückbarer Rötung; Bereich ggf. schmerzhaft, härter, wärmer oder kälter.", s: "S. 5", sp: ["dekubitus: Def. Dekubitus – Klassifikation"] },
    { f: "Für welche Hautschäden soll die Kategorie II laut Heft NICHT verwendet werden?",
      o: ["Skin Tears", "Pflasterschäden", "Mazeration", "Intakte oder offene serumgefüllte Blase"],
      r: 3,
      e: "Kategorie II umfasst auch die intakte/offene serumgefüllte Blase, soll aber nicht für Skin Tears, Pflasterschäden oder Mazeration verwendet werden.", s: "S. 5–6", sp: ["dekubitus: Def. Dekubitus – Klassifikation"] },
    { f: "Was unterscheidet Kategorie IV von Kategorie III?",
      o: ["Bei IV liegen Knochen, Sehnen oder Muskeln frei; bei III sind sie nicht offen", "Bei IV ist die Haut intakt, bei III offen", "Bei IV ist nur die Epidermis betroffen", "Es gibt keinen Unterschied – beide Begriffe sind gleichbedeutend"],
      e: "III: vollständiger Hautverlust, Subcutis sichtbar, Knochen/Sehnen/Muskeln nicht offen. IV: vollständiger Gewebeverlust mit freiliegenden Knochen, Sehnen oder Muskeln; Osteomyelitis möglich.", s: "S. 6", sp: ["dekubitus: Def. Dekubitus – Klassifikation"] },
    { f: "Was beschreibt die Kategorie „Unbekannte Tiefe“?",
      o: ["Vollständiger Gewebeverlust, Wundbett durch Beläge/stabilen Schorf verdeckt", "Intakte Haut, livide oder rötlich-braun verfärbt", "Nicht wegdrückbare Rötung bei intakter Haut", "Serumgefüllte Blase ohne Gewebeverlust"],
      e: "Unbekannte Tiefe: vollständiger Gewebeverlust, das Wundbett ist durch Beläge/stabilen Schorf verdeckt – bis die Tiefe beurteilbar ist.", s: "S. 6", sp: ["dekubitus: Def. Dekubitus – Klassifikation"] },
    { f: "Was kennzeichnet eine vermutete tiefe Gewebeschädigung?",
      o: ["Intakte Haut, livide oder rötlich-braun verfärbt oder blutgefüllte Blase", "Freiliegende Knochen mit Osteomyelitis", "Flaches Geschwür mit rot-rosa Wundbett", "Vollständiger Hautverlust mit sichtbarer Subcutis"],
      e: "Vermutete tiefe Gewebeschädigung: intakte Haut, livide oder rötlich-braun verfärbt oder blutgefüllte Blase; Gewebe schmerzhaft, fest, breiig, matschig, wärmer/kälter.", s: "S. 6", sp: ["dekubitus: Def. Dekubitus – Klassifikation"] },
    { f: "Welches Ziel verfolgt der Expertenstandard Dekubitusprophylaxe?",
      o: ["Jeder dekubitusgefährdete Mensch erhält eine Prophylaxe, die die Entstehung eines Dekubitus verhindert", "Jeder Mensch über 65 erhält eine Spezialmatratze", "Bestehende Dekubitus sollen innerhalb von zwei Wochen abheilen", "Die Risikoeinschätzung soll durch Hilfsmittel ersetzt werden"],
      e: "Ziel: jeder dekubitusgefährdete Mensch erhält eine Prophylaxe, die einen Dekubitus verhindert; im Vordergrund steht v. a. Bewegungsförderung zur Druckentlastung und -verteilung.", s: "S. 7", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { f: "Was gilt in der Sterbephase?",
      o: ["Das Ziel ist ggf. nicht erreichbar – das entbindet aber nicht von Risikoeinschätzung, Information und gemeinsamer Entscheidung", "Der Standard gilt nicht; Risikoeinschätzung und Information entfallen", "Das Ziel muss auch gegen den Willen des Betroffenen erreicht werden", "Es werden ausschließlich Hilfsmittel eingesetzt, Gespräche entfallen"],
      e: "Bei lebensbedrohlichen Zuständen oder anderer Prioritätensetzung (Sterbephase) ist das Ziel ggf. nicht erreichbar; Risikoeinschätzung, Information und gemeinsame Entscheidung bleiben Pflicht.", s: "S. 7" },
    { f: "Wer gehört zur Zielgruppe des Expertenstandards?",
      o: ["Menschen jeden Alters mit erhöhtem Dekubitusrisiko; Angehörige/informelle Pflegende sind ausdrücklich eingeschlossen", "Nur Menschen über 65 Jahre", "Nur Menschen, die bereits einen Dekubitus haben", "Nur Patienten im Krankenhaus, nicht in der ambulanten Pflege"],
      e: "Zielgruppe: Menschen jeden Alters mit erhöhtem Risiko; Angehörige/informelle Pflegende ausdrücklich eingeschlossen. Anwender sind Pflegefachkräfte ambulant, in der stationären Altenhilfe und in der Gesundheitsversorgung.", s: "S. 7–8" },
    { f: "Welche Kriterienarten gibt es in jeder Phase des Expertenstandards?",
      o: ["Struktur-, Prozess- und Ergebniskriterien", "Diagnose-, Therapie- und Nachsorgekriterien", "Ein-, Aus- und Abbruchkriterien", "Nur Ergebniskriterien"],
      e: "Die fünf Phasen (Risikoeinschätzung, Maßnahmenplanung, Information/Beratung/Schulung, Maßnahmendurchführung, Evaluation) haben jeweils Struktur-, Prozess- und Ergebniskriterien.", s: "S. 8" },
    { f: "Wann erfolgt die Risikoeinschätzung nach P1?",
      o: ["Unmittelbar zu Beginn systematisch bei allen; Wiederholung individuell und unverzüglich bei Veränderungen", "Erst wenn eine Hautrötung sichtbar ist", "Nur bei Menschen mit Diabetes mellitus", "Einmal jährlich bei der Pflegevisite"],
      e: "P1: unmittelbar zu Beginn systematisch bei allen: initiales Screening, differenzierte Beurteilung, wenn Risiko nicht ausgeschlossen; Wiederholung individuell und unverzüglich bei Veränderungen.", s: "S. 10" },
    { f: "Was folgt, wenn das initiale Screening ein Dekubitusrisiko ausschließt?",
      o: ["Keine weitere Einschätzung", "Trotzdem sofort eine Wechseldruckmatratze", "Zwingend eine Braden-Skala", "Tägliche differenzierte Einschätzung"],
      e: "Screening: erste Beobachtung und Anamnese; ist ein Risiko ausgeschlossen, erfolgt keine weitere Einschätzung. Sonst folgt die differenzierte Einschätzung.", s: "S. 10–11, 24" },
    { f: "Welche Rolle spielen Braden- und Norton-Skala laut Expertenstandard?",
      o: ["Nicht empfohlen, aber als unterstützende Informationsquelle nutzbar; maßgeblich ist die klinische Einschätzung", "Sie sind verpflichtend und ersetzen die klinische Einschätzung", "Ihre Verwendung ist verboten", "Sie sind das einzige zulässige Instrument der Evaluation"],
      e: "Braden oder Norton werden nicht empfohlen, können aber als unterstützende Informationsquelle dienen; Kern ist die klinische Einschätzung inkl. Hautinspektion. Ja/Nein- oder Punktbögen eher ungünstig.", s: "S. 11–12" },
    { f: "Wann muss die Risikoeinschätzung erneut erfolgen?",
      o: ["Unverzüglich bei Veränderung der Mobilität/Selbstständigkeit", "Beim Hinzukommen externer Faktoren, z. B. eines Katheters", "Ausschließlich einmal bei Aufnahme", "Nur auf ärztliche Anordnung"],
      r: 2,
      e: "Erneute Einschätzung: in individuell festgelegten Abständen · unverzüglich bei Veränderung der Mobilität/Selbstständigkeit (BRi) · bei externen Einflussfaktoren (z. B. Katheter).", s: "S. 12" },
    { f: "Bei welchen Gruppen kann das Screening übersprungen werden?",
      o: ["Intensivpflege und Geriatrie – dort besteht grundsätzlich ein Risiko, daher direkt differenzierte Einschätzung", "Bei jungen Menschen ohne Vorerkrankungen", "Grundsätzlich in der ambulanten Pflege", "Wenn Angehörige die Pflege übernehmen"],
      e: "Bei bestimmten Gruppen (z. B. Intensivpflege, Geriatrie) besteht grundsätzlich ein Dekubitusrisiko → sofort differenzierte Risikoeinschätzung.", s: "S. 22" },
    { f: "Welche Aussage zur Maßnahmenplanung (Phase 2) trifft zu?",
      o: ["Prophylaxe ist nur wirksam, wenn sie kontinuierlich durchgeführt wird – auch Personal von Arztpraxen und Transportdiensten wird informiert", "Die Planung erfolgt ohne Beteiligung der Betroffenen", "Informiert wird nur das eigene Pflegeteam", "Eine Verfahrensregelung zur Informationsweitergabe ist nicht vorgesehen"],
      e: "Phase 2: individuelle Planung mit Betroffenen/Angehörigen; Verfahrensregelung (S2b, z. B. Ablaufdiagramm) für die Informationsweitergabe; alle Beteiligten informieren.", s: "S. 12–13" },
    { f: "Wann ist der Beratungsprozess (Phase 3) abgeschlossen?",
      o: ["Nie gänzlich – er erfolgt wiederholt im gesamten Pflegeprozess", "Nach dem einmaligen Aufnahmegespräch", "Sobald ein Hilfsmittel geliefert ist", "Mit der ersten Evaluation"],
      e: "Der Beratungsprozess ist nie gänzlich abgeschlossen; er erfolgt wiederholt im gesamten Pflegeprozess und wird dokumentiert.", s: "S. 14" },
    { f: "Welche gehören zu den vier Interventionskategorien der Maßnahmendurchführung?",
      o: ["Förderung der Eigenbewegung", "Vollständige Entlastung stark gefährdeter Stellen (Freilage)", "Einsatz von Lagerungsringen unter gefährdeten Stellen", "Vollständige Ruhigstellung zur Schonung der Haut"],
      r: 2,
      e: "Vier Kategorien: Eigenbewegung fördern · angemessene Positionen und regelmäßige Positionswechsel (Wechselpositionierung) · Freilage · Reduktion therapiebedingter Druck-/Scherkräfte (Zu- und Ableitungen). Lagerungsringe sind ungeeignet.", s: "S. 16, 18", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { f: "Was versteht das Heft unter passiver Bewegung?",
      o: ["Alle Maßnahmen, die eine pflegerisch durchgeführte Wechselpositionierung oder Freilage beinhalten", "Selbstständige Positionswechsel des Betroffenen", "Die Beratung der Angehörigen", "Das Liegen auf einem Hilfsmittel ohne Positionswechsel"],
      e: "Passiv sind alle Maßnahmen, die eine pflegerisch durchgeführte Wechselpositionierung oder Freilage beinhalten; dabei Hautzustand und Unbehagen kontrollieren.", s: "S. 16", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { f: "Welche Positionierungsangaben nennt das Heft für den Bewegungsförderungsplan?",
      o: ["30–40° Seitenlage, Oberkörperhochlage max. 30°", "90° Seitenlage, Oberkörperhochlage mindestens 60°", "Ausschließlich Rechts-Links-Rücken ohne Gradangabe", "Dauerhafte Flachlage ohne Positionswechsel"],
      e: "Der Plan dokumentiert nicht nur Rechts-Links-Rücken, sondern z. B. 30–40° Seitenlage, Oberkörperhochlage max. 30°, Mobilisierung, Bewegungsintervalle und Hautkontrolle (Fingertest).", s: "S. 16–17", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { f: "Braucht jeder dekubitusgefährdete Mensch eine Spezialmatratze?",
      o: ["Nein – Hilfsmittel unterstützen, ersetzen aber nicht die Förderung der Eigenbewegung", "Ja, ab dem ersten Tag der Versorgung", "Ja, sobald das Screening durchgeführt wurde", "Nur Menschen ohne Risiko"],
      e: "Nicht jeder dekubitusgefährdete Mensch benötigt eine Spezialmatratze; es gibt nicht „ein richtiges“ Hilfsmittel.", s: "S. 17–18", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { f: "Welche Hilfsmittel nennt das Heft als geeignet?",
      o: ["Weichlagerungskissen", "Wechseldruckauflagen/-matratzen", "Lagerungsringe", "Wassermatratzen"],
      r: 2,
      e: "Geeignet: Weichlagerungskissen, Weichlagerungsmatratzen, Wechseldruckauflagen/-matratzen, Spezialbetten. Ungeeignet: Lagerungsringe, Felle, Watteverbände, Wassermatratzen, reibungskraftreduzierte Hydrokolloid-Pflaster (Ferse).", s: "S. 18", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { f: "Warum sind Lagerungsringe ungeeignet?",
      o: ["Sie erhöhen den Druck an den Rändern", "Sie sind zu teuer", "Sie sind nur ambulant verordnungsfähig", "Sie verursachen Mazeration durch Feuchtigkeit"],
      e: "Lagerungsringe: Druckerhöhung an den Rändern. Felle, Watteverbände, Wassermatratzen: fehlende Wirksamkeit.", s: "S. 18", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { f: "Nach welcher Zeit erhöhten Drucks bzw. erhöhter Scherkraft kann bereits ein Dekubitus entstehen?",
      o: ["Bereits nach 10–20 Minuten", "Frühestens nach 6 Stunden", "Frühestens nach 24 Stunden", "Erst nach mehreren Tagen"],
      e: "Bereits 10–20 Minuten erhöhter Druck/Scherkraft können zu Dekubitus führen → Druckentlastung unverzüglich; bis Hilfsmittel da sind, angepasste Positionierung.", s: "S. 18", sp: ["dekubitus: Def. Dekubitus – Entstehung"] },
    { f: "Wann sind Hilfsmittel nach P5 unverzüglich einzusetzen?",
      o: ["Wenn eine ausreichende Bewegungsförderung nicht möglich ist, z. B. bei Kachexie oder fehlender Eigenbeweglichkeit", "Grundsätzlich bei jedem Menschen mit Risiko, statt Bewegungsförderung", "Erst wenn ein Dekubitus Kategorie III vorliegt", "Nur auf ausdrücklichen Wunsch der Angehörigen"],
      e: "P5: Hilfsmittel unverzüglich, wenn Bewegungsförderung nicht möglich (Kachexie, fehlende Eigenbeweglichkeit, Kontraindikationen); sonst bleibt Bewegungsförderung oberstes Gebot.", s: "S. 19", sp: ["dekubitus: Def. Dekubitus – Prophylaxe"] },
    { f: "Was ist in der ambulanten Pflege zur Hilfsmittelversorgung zu tun?",
      o: ["Pflegekasse bzw. Ärzte über Notwendigkeit und Dringlichkeit informieren und eine Verordnung anregen", "Abwarten, bis sich die Betroffenen selbst um ein Hilfsmittel kümmern", "Bis zur Lieferung des Hilfsmittels keine Positionierung durchführen", "Hilfsmittel nur bei Ablehnung durch die Kostenträger beantragen"],
      e: "Ambulant: Pflegekasse/Ärzte über Notwendigkeit und Dringlichkeit informieren, Verordnung anregen; bis dahin angepasste Positionierung. Ablehnung durch Kostenträger dokumentieren.", s: "S. 18–19" },
    { f: "Wie wird mit der Ablehnung von Hilfsmitteln durch Betroffene umgegangen?",
      o: ["Ablehnung respektieren und dokumentieren – die Selbstbestimmung hat oberste Priorität", "Das Hilfsmittel wird trotzdem eingesetzt", "Die pflegerische Versorgung wird beendet", "Die Ablehnung wird nicht dokumentiert"],
      e: "Der Wille der Betroffenen ist stets zu respektieren (freie Entscheidung über Mitwirkung); Ablehnung von Hilfsmitteln oder durch Kostenträger dokumentieren.", s: "S. 15, 19" },
    { f: "Fingertest: Die gerötete Stelle bleibt nach leichtem Fingerdruck rot. Was bedeutet das?",
      o: ["Dekubitus Kategorie I", "Kein Dekubitus", "Dekubitus Kategorie III", "Unbekannte Tiefe"],
      e: "Haut verfärbt sich weiß → kein Dekubitus; Haut bleibt rot → Dekubitus Kategorie I.", s: "S. 20" },
    { f: "Worauf achtet man beim Fingertest bei dunkel pigmentierter Haut?",
      o: ["Schmerz, Härte, Weichheit, Wärme oder Kälte im Vergleich zum umgebenden Gewebe", "Nur auf die Farbe – sie ist immer gut sichtbar", "Der Fingertest ersetzt bei dunkler Haut jede weitere Beurteilung", "Bei dunkler Haut kann kein Dekubitus entstehen"],
      e: "Bei dunkler Haut ist die Verfärbung ggf. nicht sichtbar → Schmerz, Härte, Weichheit, Wärme oder Kälte im Vergleich zur Umgebung beurteilen.", s: "S. 20" },
    { f: "Was ist zu tun, wenn bei der Evaluation ein Dekubitus festgestellt wird?",
      o: ["Prophylaktische Maßnahmen überprüfen", "Wunde nach dem Expertenstandard Pflege von Menschen mit chronischen Wunden versorgen", "Prophylaxe beenden, da sie gescheitert ist", "Nur noch die betroffene Stelle inspizieren"],
      r: 2,
      e: "Bei Dekubitus Prophylaxe überprüfen und Wunde nach Expertenstandard chronische Wunden versorgen; Inspektion stets der gesamten Körperoberfläche; Hilfsmittel auf Intaktheit prüfen.", s: "S. 20–21" },
    { f: "Was folgt im Prozessablauf unmittelbar, wenn ein Dekubitusrisiko festgestellt wird?",
      o: ["Sofortige Druckentlastung und Maßnahmenplanung", "Abwarten bis zur nächsten Einschätzung", "Zunächst nur Evaluation", "Erst Rücksprache mit der Pflegekasse, dann Druckentlastung"],
      e: "Prozessablauf: Risiko? → sofortige Druckentlastung + Maßnahmenplanung → Information, Beratung, Schulung → Durchführung → Evaluation.", s: "S. 24" },
    { f: "Wo beginnt die Einführung des Expertenstandards in einer Einrichtung?",
      o: ["Mit der Auseinandersetzung auf Managementebene (PDL/QMB)", "Mit dem Kauf von Spezialmatratzen", "Mit der Prüfung durch den MDK", "Ohne festen Ablauf, jede Pflegekraft entscheidet selbst"],
      e: "Einführung: Managementebene (PDL/QMB) · Verständnis der Zielsetzung · Reflexion der Ressourcen · Anpassung im Qualitätszirkel · Implementierungsschritte mit verbindlicher Terminierung · Information/Schulung.", s: "S. 21–22" }
  ],

  zusammenfassung: `
<h3>1. Hintergrund <span class="seite">S. 2</span></h3>
<p class="merke">„Die effektive Prävention von Dekubitus ist eine <b>Kernaufgabe in der Pflege</b>.“ (DNQP 2017)</p>
<ul>
  <li>Dekubitusentstehung gilt als anerkannter <b>Indikator der Versorgungsqualität</b>; Prävalenz in Akut- und Langzeitpflege in Deutschland geschätzt <b>ca. 2–4 %</b>.</li>
  <li>Prüfanleitung des MDK macht den Standard zum festen Bestandteil von Qualitätsprüfungen (Transparenzkriterium). Expertenstandards haben juristisch den Charakter <b>vorweggenommener Sachverständigengutachten</b> – Maßstab bei Verletzung der Sorgfaltspflicht.</li>
</ul>

<h3>2. Basiswissen Dekubitus <span class="seite">S. 3–6</span></h3>
<p class="merke"><span class="sp" data-sp="dekubitus: Def. Dekubitus">Schwerpunkt</span> <b>Dekubitus</b> (NPUAP 2014): „eine lokal begrenzte Schädigung der Haut und/oder des darunter liegenden Gewebes, typischerweise über knöchernen Vorsprüngen, infolge von <b>Druck oder von Druck in Verbindung mit Scherkräften</b>.“</p>
<ul>
  <li><span class="sp" data-sp="dekubitus: Def. Dekubitus – Entstehung">Schwerpunkt</span> Druck auf weiches Gewebe zwischen harter Unterlage und Knochenvorsprung; Scherkräfte verformen tieferes Gewebe (≠ Reibung, die oberflächlich wirkt). Schaden abhängig von Dauer und Stärke; <b>kein Schwellenwert</b> bekannt; zusätzlich von weiteren Risikofaktoren abhängig (S. 3).</li>
  <li><span class="sp" data-sp="dekubitus: Def. Dekubitus – Entstehung">Schwerpunkt</span> <b>Ursachen</b> (S. 4): direkte mechanische <b>Deformation</b> → Zelltod (Muskelzellen besonders anfällig, Muskelnekrosen in wenigen Minuten; Hautzellen widerstandsfähiger) und <b>Verschluss von Blut- und Lymphgefäßen</b> → Minderversorgung mit O₂/Nährstoffen, Stoffwechselprodukte bleiben; bei Druckentlastung Entzündung. Beide Mechanismen verstärken sich gegenseitig.</li>
  <li><span class="sp" data-sp="dekubitus: Def. Dekubitus – Entstehung">Schwerpunkt</span> Druckgeschwüre entstehen zuerst in anfälligem Gewebe wie der Muskulatur – die darüberliegende Haut kann intakt sein: <b>Tiefe Schädigungen müssen nicht zwangsläufig ein offener Dekubitus sein</b> (S. 4).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th colspan="2">Risikofaktoren <span class="seite">S. 4–5</span></th></tr></thead>
  <tbody>
    <tr><td><span class="sp" data-sp="dekubitus: Def. Dekubitus – Risikofaktoren">Schwerpunkt</span> Wichtigste (gesichert)</td><td><b>Beeinträchtigung der Mobilität</b> (mehr Druck/Scherkräfte, direkt) · <b>Störung der Durchblutung</b> (schwächt Gewebetoleranz, indirekt; lokal auch direkt auslösend) · <b>beeinträchtigter Hautzustand bzw. vorhandener Dekubitus</b> (Hinweis auf vorliegendes Risiko) → Rahmenmodell der Einschätzung</td></tr>
    <tr><td>Verlängerte/verstärkte Druck- und Scherkräfte</td><td>stark eingeschränkte (Eigen-)Mobilität, neurologische Einschränkungen, Intensität/Dauer des Drucks, Reibung und Scherkräfte, medizinische Geräte (Zu- und Ableitungen)</td></tr>
    <tr><td>Beeinträchtigte Gewebetoleranz</td><td>Mangelernährung, Durchblutung/Sauerstoffversorgung der Haut, Hautfeuchtigkeit, Hauttoleranz und Auflagenflächen</td></tr>
    <tr><td>Merksatz</td><td>Risikofaktoren treten meist gemeinsam auf: <b>je komplexer die Gesundheitsprobleme, desto höher der Unterstützungsbedarf – je höher der Unterstützungsbedarf, desto höher kann das Dekubitusrisiko sein</b></td></tr>
  </tbody>
</table></div>
<div class="tabelle"><table>
  <thead><tr><th>Kategorie (EPUAP/NPUAP/PPPIA)</th><th>Beschreibung <span class="seite">S. 5–6</span></th></tr></thead>
  <tbody>
    <tr><td><span class="sp" data-sp="dekubitus: Def. Dekubitus – Klassifikation">Schwerpunkt</span> I</td><td>intakte Haut mit <b>nicht wegdrückbarer Rötung</b>, meist über Knochenvorsprung; ggf. schmerzhaft, härter, wärmer oder kälter</td></tr>
    <tr><td>II</td><td>Teilzerstörung der Haut (Epidermis/Dermis): flaches, offenes Geschwür, rot-rosa Wundbett <b>ohne Beläge</b>; auch intakte/offene serumgefüllte Blase. Nicht für Skin Tears, Pflasterschäden, Mazeration verwenden</td></tr>
    <tr><td>III</td><td><b>vollständiger Hautverlust</b>; Subcutis sichtbar, Knochen/Sehnen/Muskeln nicht offen; Beläge, Taschen, Unterminierungen möglich</td></tr>
    <tr><td>IV</td><td>vollständiger Gewebeverlust mit <b>freiliegenden Knochen, Sehnen oder Muskeln</b>; Beläge, Schorf, Taschen; Osteomyelitis möglich; häufig Nekrosen, hohes Infektionsrisiko</td></tr>
    <tr><td>Unbekannte Tiefe</td><td>vollständiger Gewebeverlust, Wundbett durch Beläge/stabilen Schorf verdeckt → bis die Tiefe beurteilbar ist</td></tr>
    <tr><td>Vermutete tiefe Gewebeschädigung</td><td>intakte Haut, <b>livide oder rötlich-braun</b> verfärbt oder blutgefüllte Blase; Gewebe schmerzhaft, fest, breiig, matschig, wärmer/kälter; Freilegung trotz optimaler Behandlung möglich</td></tr>
  </tbody>
</table></div>

<h3>3. Ziel, Anwender, Struktur <span class="seite">S. 7–9</span></h3>
<ul>
  <li><span class="sp" data-sp="dekubitus: Def. Dekubitus – Prophylaxe">Schwerpunkt</span> Interventionen v. a. <b>Bewegungsförderung</b> zur Druckentlastung und -verteilung. <b>Ziel:</b> jeder dekubitusgefährdete Mensch erhält eine Prophylaxe, die einen Dekubitus verhindert (S. 7).</li>
  <li><span class="sp" data-sp="dekubitus: Def. Dekubitus – Prophylaxe">Schwerpunkt</span> <b>Pflegefachpersonal gewährleistet:</b> systematische Risikoeinschätzung · Information, Schulung, Beratung (auch Angehörige) · Bewegungsförderung · Druckentlastung und -verteilung · Kontinuität und Evaluation (S. 7).</li>
  <li>Wenn die gesundheitliche Situation dagegen spricht (lebensbedrohlich) oder andere Prioritäten gelten (Sterbephase), ist das Ziel ggf. nicht erreichbar – entbindet aber <b>nicht</b> von Risikoeinschätzung, Information und gemeinsamer Entscheidung (S. 7).</li>
  <li><b>Anwender:</b> Pflegefachkräfte (ambulant, stationäre Altenhilfe, Gesundheitsversorgung). <b>Zielgruppe:</b> Menschen jeden Alters mit erhöhtem Risiko; Angehörige/informelle Pflegende ausdrücklich eingeschlossen. Aktuelle Fassung umfasst auch Neugeborene, Säuglinge, Kinder; das Lernheft behandelt nur Erwachsene und Ältere (S. 7–8).</li>
  <li>Sechs zentrale Bereiche in <b>fünf Phasen</b>: Risikoeinschätzung · Maßnahmenplanung · Information, Beratung, Schulung · Maßnahmendurchführung (Bewegungsförderung + Hilfsmittel) · Evaluation; jeweils Struktur-, Prozess-, Ergebniskriterien (S. 8).</li>
</ul>

<h3>4. Phasen mit Kriterien <span class="seite">S. 9–21</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Phase</th><th>Struktur (S)</th><th>Prozess (P)</th><th>Ergebnis (E)</th></tr></thead>
  <tbody>
    <tr><td>1 Risikoeinschätzung</td><td>S1 aktuelles Wissen zur Entstehung, Kompetenz zur Einschätzung</td><td>P1 <b>unmittelbar zu Beginn</b> systematisch bei allen: initiales Screening, differenzierte Beurteilung, wenn Risiko nicht ausgeschlossen; Wiederholung individuell und unverzüglich bei Veränderungen</td><td>E1 aktuelle, systematische Einschätzung liegt vor</td></tr>
    <tr><td>2 Maßnahmenplanung</td><td>S2a Planungs-/Steuerungskompetenz · S2b Verfahrensregelung</td><td>P2 individuelle Planung mit Betroffenen/Angehörigen; informiert alle Beteiligten über Risiko und Kontinuität</td><td>E2 Gefährdung und Maßnahmen allen bekannt, kontinuierlich fortgeführt</td></tr>
    <tr><td>3 Information, Beratung, Schulung</td><td>S3a Fähigkeiten zu Information/Schulung/Beratung · S3b Material der Einrichtung</td><td>P3 erläutert Gefährdung, Maßnahmen und Evaluation</td><td>E3 Betroffene/Angehörige kennen Gefahr und Maßnahmen, wirken mit</td></tr>
    <tr><td>4a Bewegungsförderung</td><td>S4 Wissen zu druckentlastenden, bewegungsfördernden Maßnahmen; haut-/gewebeschonende Bewegungs-, Positionierungs-, Transfertechniken</td><td>P4 fördert Eigenbewegung; sonst sofortige Druckentlastung durch Bewegungsförderungsplanung und vollständige <b>Freilage</b></td><td>E4 Eigenbewegung gefördert, gefährdete Stellen entlastet</td></tr>
    <tr><td>4b Hilfsmitteleinsatz</td><td>S5a Kompetenz zu Hilfsmitteln · S5b Einrichtung stellt Wechseldruck-/Weichlagerungssysteme <b>unverzüglich</b> bereit</td><td>P5 zusätzlich geeignete Hilfsmittel, wenn ausreichende Bewegungsförderung nicht möglich</td><td>E5 befindet sich <b>unverzüglich</b> auf geeignetem Hilfsmittel</td></tr>
    <tr><td>5 Evaluation</td><td>S6a Kompetenz, Effektivität zu beurteilen · S6b Ressourcen zur Erfassung</td><td>P6 begutachtet Hautzustand in individuell bestimmten Abständen</td><td>E6a <b>kein Dekubitus</b> · E6b Zahlen zu Häufigkeit und Wirksamkeit liegen vor</td></tr>
  </tbody>
</table></div>

<p><b>Phase 1 – Risikoeinschätzung</b> (S. 10–12)</p>
<ul>
  <li><b>S1-Wissen:</b> Aufbau/Funktion der Haut, Ursachen und Risikofaktoren, Anzeichen inkl. Kategorien, gefährdete Körperstellen und Populationen; nur über regelmäßige Fortbildung erreichbar.</li>
  <li><b>Screening</b>: erste Beobachtung und Anamnese zu Hinweisen auf erhöhte/verlängerte Druck- oder Scherkrafteinwirkung; Risiko ausgeschlossen → keine weitere Einschätzung. Sonst <b>differenzierte Einschätzung</b> von: Mobilität, Hautzustand/vorhandener Dekubitus, Durchblutung, sensorische Wahrnehmung, Diabetes mellitus, Allgemeinzustand/Begleiterkrankungen, Ernährungszustand, Hautfeuchtigkeit.</li>
  <li>Bögen mit nur Ja/Nein oder Punktbewertung eher ungünstig. <b>Braden oder Norton</b>: nicht empfohlen, aber als unterstützende Informationsquelle nutzbar; Kern ist die <b>klinische Einschätzung</b> (inkl. Hautinspektion); Ergebnis in Pflegeplanung bzw. Risikomatrix im Strukturmodell.</li>
  <li><b>Erneute Einschätzung:</b> individuell festgelegte Abstände · unverzüglich bei Veränderung der Mobilität/Selbstständigkeit (BRi) · bei externen Einflussfaktoren (z. B. Katheter).</li>
  <li>Screening kann bei bestimmten Gruppen (Intensivpflege, Geriatrie) übersprungen werden – dort grundsätzlich Risiko → direkt differenzierte Einschätzung (S. 22).</li>
</ul>
<p><b>Phase 2 – Maßnahmenplanung</b> (S. 12–13): Prophylaxe nur wirksam, wenn <b>kontinuierlich</b>; Verfahrensregelung (z. B. Ablaufdiagramm) für Informationsweitergabe; auch Personal von Arztpraxen und <b>Transportdiensten</b> informieren.</p>
<p><b>Phase 3 – Information, Beratung, Schulung</b> (S. 13–14): Selbstbestimmungsrecht, gemeinsame Entscheidungsfindung. Ziele: Eigenbewegung fördern, Hautinspektion, druckentlastende Interventionen, sicherer Hilfsmitteleinsatz. In der Beratung: Alternativen, Vor-/Nachteile, Ziele, Folgen unterlassener Intervention, Bedeutung regelmäßiger Hautinspektion. <b>Der Beratungsprozess ist nie gänzlich abgeschlossen</b>, er erfolgt wiederholt im gesamten Pflegeprozess; dokumentieren.</p>
<p><span class="sp" data-sp="dekubitus: Def. Dekubitus – Prophylaxe">Schwerpunkt</span> <b>Phase 4 – Maßnahmendurchführung</b> (S. 15–19): Wille der Betroffenen stets respektieren (freie Entscheidung über Mitwirkung).</p>
<ul>
  <li><b>Vier Interventionskategorien:</b> Eigenbewegung fördern · angemessene Körperpositionen und regelmäßige Positionswechsel („Wechselpositionierung“) · vollständige Entlastung stark gefährdeter Stellen („<b>Freilage</b>“) · Vermeidung therapiebedingter Druck-/Scherkräfte (Zu- und Ableitungen). Bezug zu den Standards Sturzprophylaxe und Mobilität (S. 16).</li>
  <li>Einschränkungen (z. B. Schmerzen) vorab klären; individueller <b>Bewegungsförderungsplan</b>; aktiv vs. passiv (passiv = pflegerisch durchgeführte Wechselpositionierung/Freilage); Hautzustand und Unbehagen regelmäßig kontrollieren; Angehörige anleiten (S. 16).</li>
  <li>Plan dokumentiert nicht nur Rechts-Links-Rücken, sondern z. B. <b>30–40° Seitenlage</b>, <b>Oberkörperhochlage max. 30°</b>, Mobilisierung; Bewegungsintervalle und <b>Hautkontrolle (Fingertest)</b> dokumentieren (S. 16–17).</li>
  <li>Hilfsmittel unterstützen, <b>ersetzen aber nicht</b> die Förderung der Eigenbewegung. <b>Nicht jeder dekubitusgefährdete Mensch benötigt eine Spezialmatratze.</b> Es gibt nicht „ein richtiges“ Hilfsmittel (S. 17–18).</li>
  <li><b>Auswahlkriterien:</b> Ressourcen der Eigenbewegung, vorrangige Pflege-/Therapieziele, Möglichkeiten der Eigenbewegung, gefährdete Körperpartien, Gewicht, Kosten/Nutzen, Präferenzen, Praktikabilität, Nachteile (S. 18).</li>
  <li>Bereits <b>10–20 Minuten</b> erhöhter Druck/Scherkraft können zu Dekubitus führen → Druckentlastung <b>unverzüglich</b> (S5b); bis Hilfsmittel da sind, angepasste Positionierung (S. 18). Ambulant: Pflegekasse/Ärzte über Notwendigkeit und Dringlichkeit informieren, Verordnung anregen.</li>
  <li><b>P5:</b> Hilfsmittel unverzüglich, wenn Bewegungsförderung nicht möglich (z. B. Kachexie, fehlende Eigenbeweglichkeit, Kontraindikationen); sonst bleibt Bewegungsförderung oberste Bedeutung. Ablehnung von Hilfsmitteln oder durch Kostenträger dokumentieren – Selbstbestimmung hat oberste Priorität (S. 19).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Geeignete Hilfsmittel <span class="seite">S. 18</span></th><th>Ungeeignete Hilfsmittel</th></tr></thead>
  <tbody>
    <tr><td>Weichlagerungskissen · Weichlagerungsmatratzen · Wechseldruckauflagen/-matratzen · Spezialbetten (z. B. Luftkissenbetten)</td><td><b>Lagerungsringe</b> (Druckerhöhung an den Rändern) · <b>Felle, Watteverbände, Wassermatratzen</b> (fehlende Wirksamkeit) · <b>reibungskraftreduzierte Hydrokolloid-Pflaster</b> (Ferse)</td></tr>
  </tbody>
</table></div>
<p><b>Phase 5 – Evaluation</b> (S. 19–21): Wirksamkeit durch Hautkontrolle und wiederholte Risikoeinschätzung; Akzeptanz entscheidend; Probleme gemeinsam lösen. Einrichtung (S6b): Personal, Fortbildung, Instrumente, Hilfsmittel, Erfassung von Dekubitushäufigkeit, interne Qualitätsprüfungen. Inspektion der <b>gesamten Körperoberfläche</b>; bei Dekubitus Prophylaxe überprüfen, Wunde nach Expertenstandard chronische Wunden versorgen; Hilfsmittel auf Intaktheit prüfen.</p>
<div class="tabelle"><table>
  <thead><tr><th colspan="2">Fingertest <span class="seite">S. 20</span></th></tr></thead>
  <tbody>
    <tr><td>Durchführung</td><td>leichter Druck mit dem Finger auf die gerötete Stelle (alternativ transparente Plastikscheibe)</td></tr>
    <tr><td>Haut verfärbt sich weiß</td><td><b>kein Dekubitus</b></td></tr>
    <tr><td>Haut bleibt rot</td><td><b>Dekubitus Kategorie I</b></td></tr>
    <tr><td>Dunkle Haut</td><td>Verfärbung ggf. nicht sichtbar → Schmerz, Härte, Weichheit, Wärme oder Kälte im Vergleich zur Umgebung beurteilen</td></tr>
  </tbody>
</table></div>

<h3>5. Einführung des Standards und Prozessablauf <span class="seite">S. 21–24</span></h3>
<ul>
  <li><b>Einführung:</b> Auseinandersetzung auf Managementebene (PDL/QMB) · Verständnis der Zielsetzung · Reflexion vorhandener Ressourcen · Anpassung im Qualitätszirkel · Implementierungsschritte mit verbindlicher Terminierung · Information/Schulung · interne/externe Schulungen (S. 21–22).</li>
  <li><b>Danach regelmäßig:</b> Umgang mit Verfahren/Assessments prüfen · Prozess und Verfahrensanweisung bei Problemen anpassen · Wissen durch Fort-/Weiterbildung auffrischen · prüfen, ob der Standard aktualisiert wurde (S. 23).</li>
  <li><b>Prozessablauf</b> (S. 24): Versorgungsbeginn/Veränderung der Mobilität oder externer Faktoren → Risikogruppe? (ja → differenzierte Beurteilung; nein → initiales Screening → Risiko ausschließbar? ja → keine weitere Einschätzung) → Risiko? → <b>sofortige Druckentlastung + Maßnahmenplanung</b> → Information, Beratung, Schulung (Betroffene, Angehörige, alle Beteiligten) → Durchführung → ausreichende Eigenbewegung? (ja → Bewegungsförderung; nein → haut-/gewebeschonende Bewegung + Freilage + Hilfsmittel) → Evaluation → erfolgreich? (nein → zurück zur Planung; ja → <b>kein Dekubitus</b>, Evaluation regelmäßig wiederholen).</li>
</ul>
`
});
