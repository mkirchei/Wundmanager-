/*
 * Thema: Prüfungsschwerpunkte Modul I (aus der Mitschrift)
 * Quellen: "Pruefungsuebersicht_Modul1.pdf" und "Lernkarten_Pruefungsschwerpunkte_Mitschrift.pdf".
 * Seitenangaben mit Heftkürzel: G = Gefäße, H = Haut, M = Dekubitus/Ulcus cruris/DFU,
 * W = Wundarten/Wundheilung, D = Dokumentation, Hy = Hygiene.
 *
 * Quiz-Format: Die ersten "r" Optionen sind richtig (ohne "r": nur die erste);
 * die App mischt die Reihenfolge. Nie alle Optionen richtig – wie in der Prüfung.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen.
 */
Lernapp.thema({
  id: "pruefungsschwerpunkte",
  titel: "Prüfungsschwerpunkte Modul I (Mitschrift)",
  kurz: "Prüfungsschwerpunkte",
  quelle: "Mitschrift + murimed-Kurshefte",
  hinweis:
    "Abgleich der handschriftlichen Mitschrift mit den sechs Kursheften; Seitenangaben beziehen sich auf das jeweilige Heft (G = Gefäße, H = Haut, M = Dekubitus/Ulcus cruris/DFU, W = Wundarten, D = Dokumentation, Hy = Hygiene). Primärquellen wurden nicht separat geprüft.",

  karten: [
    { k: "Haut", f: "Was sind die Adnexorgane der Haut?",
      a: "Hautanhangsgebilde: Haare, Nägel und Hautdrüsen (Schweiß-, Duft- und Talgdrüsen).", s: "H S. 3" },
    { k: "Haut", f: "Nenne die Schichten der Epidermis von innen nach außen – deutsch und lateinisch.",
      a: "1. Basalzellschicht – Stratum basale\n2. Stachelzellschicht – Stratum spinosum\n3. Körnerzellschicht – Stratum granulosum\n4. Glanzschicht – Stratum lucidum\n5. Hornschicht – Stratum corneum", s: "H S. 3–5" },
    { k: "Haut", f: "In welcher Schicht liegen die Langerhans-Zellen und was tun sie?",
      a: "In der Stachelzellschicht (Stratum spinosum); aus dem Knochenmark, fangen mit ihren Dendriten Pathogene und Antigene ab – „Wachposten des Immunsystems“.", s: "H S. 4" },
    { k: "Haut", f: "Welche Schicht kommt nur an Handflächen und Fußsohlen vor?",
      a: "Die Glanzschicht (Stratum lucidum) – 1–2 Lagen kernloser Keratinozyten.", s: "H S. 4" },
    { k: "Haut", f: "Erysipel: Erreger, Klinik, Komplikationen?",
      a: "Akute bakterielle Infektion der Dermis durch β-hämolysierende Streptokokken Gruppe A; klar begrenzte, schmerzhafte, überwärmte Rötung, Fieber; Komplikationen Sepsis, Lymphödem. Häufigste Komplikation des chronischen Lymphödems.", s: "H S. 20" },
    { k: "Haut", f: "Was ist eine Mykose?",
      a: "Pilzinfektion (Dermatophyten, Schimmel-, Hefepilze) von Haut, Schleimhaut, Nägeln oder systemisch; begünstigt durch verminderte Abwehr.", s: "H S. 22" },
    { k: "Haut", f: "Unterschied Tumor und Neoplasie?",
      a: "Neoplasie: autonome Gewebeneubildung (benigne, semimaligne, maligne).\nTumor: jede örtliche Zunahme des Gewebevolumens (Schwellung) – weiter gefasst.", s: "H S. 33" },
    { k: "Haut", f: "Erkläre die ABCD(E)-Regel.",
      a: "A – Asymmetrie\nB – Begrenzung unscharf\nC – Color, Mehrfarbigkeit\nD – Dynamik, Veränderung\nE – Erhabenheit (nur handschriftlich im Heft)", s: "H S. 27", h: true },
    { k: "Gefäße", f: "Was gehört zum Herz-Kreislauf-System?",
      a: "Herz als Druck-Saug-Pumpe, Blutgefäße (Arterien, Venen, Kapillaren) und Lymphgefäße als Leitungsröhren bzw. Stätten des Stoffaustauschs.", s: "G S. 3" },
    { k: "Gefäße", f: "Welche Aufgaben hat das Blutgefäßsystem?",
      a: "Ernährung des Organismus, Abtransport von Schlackenstoffen, Hormontransport (Steuerung vegetativer Funktionen), Wärmeregulation.", s: "G S. 3" },
    { k: "Gefäße", f: "Wie lauten die drei Kreisläufe des Blutgefäßsystems?",
      a: "Kleiner Kreislauf/Lungenkreislauf · großer Körperkreislauf · Pfortaderkreislauf.", s: "G S. 3" },
    { k: "Gefäße", f: "Was sind arteriovenöse Anastomosen?",
      a: "Querverbindungen zwischen Arteriolen und Venolen; umgehen die Kapillaren (Kollateralkreislauf), regulieren die Durchblutung, z. B. Hautdurchblutung für den Wärmehaushalt.", s: "G S. 5" },
    { k: "Gefäße", f: "Was ist Diffusion?",
      a: "Wanderung von Teilchen durch ihre Eigenbeweglichkeit vom Ort höherer zum Ort niedrigerer Konzentration bis zum Ausgleich; langsam. Beispiel: Tinte in Wasser.", s: "G S. 7" },
    { k: "Gefäße", f: "Was ist Filtration?",
      a: "Schnelle Flüssigkeitsverschiebung zwischen Blutplasma und Zwischenzellraum: bei Druckunterschied werden alle Teilchen, die durch die Membranporen passen, vom Ort höheren zum niedrigeren Blutdruck gepresst.\nBeispiel: Kaffeefilter.", s: "G S. 7" },
    { k: "Gefäße", f: "Wie viel Flüssigkeit wird täglich filtriert, reabsorbiert und als Lymphe abtransportiert?",
      a: "Ca. 20 l ins Interstitium filtriert, ca. 18 l reabsorbiert, 2 l gelangen als Lymphe über das Lymphgefäßsystem in die Blutbahn.", s: "G S. 7" },
    { k: "Gefäße", f: "Was ist die Windkesselfunktion – und wo findet sie statt?",
      a: "Funktion der elastischen Arterien (herznah): Aorta dehnt sich bei Herzkontraktion und zieht sich danach zusammen → stoßweise wird kontinuierliche Strömung.", s: "G S. 4, 6" },
    { k: "Lymphe", f: "Woraus besteht das Lymphsystem?",
      a: "Lymphgefäße zusammen mit Lymphknoten, Knochenmark, Mandeln und Milz.", s: "G S. 7" },
    { k: "Lymphe", f: "Warum heißt das Lymphgefäßsystem „halboffen“?",
      a: "Es beginnt blind mit Lymphkapillaren, die interstitielle Flüssigkeit aufnehmen, durchzieht den Körper wie ein Netz und mündet in den Blutkreislauf.", s: "G S. 7" },
    { k: "Lymphe", f: "Beschreibe den Weg der Lymphe.",
      a: "Lymphkapillaren → kleine/große Lymphgefäße mit Klappen → Lymphknoten → Lymphstämme → Ductus thoracicus → linke Schlüsselbeinvene (V. subclavia).", s: "G S. 7–8" },
    { k: "Lymphe", f: "Warum kann die Lymphe nicht zurückfließen?",
      a: "Die Lymphgefäße besitzen wie kleine Venen Klappen (schwingende Zipfel), die den Rückfluss verhindern.", s: "G S. 7" },
    { k: "Lymphe", f: "Wie wird die Lymphe ohne eigenes Pumporgan transportiert?",
      a: "Kontraktion der Gefäßmuskulatur und Drucksteigerung durch Puls-, Atem- und Körperbewegung.\nMitschrift: Muskelpumpe, Darmperistaltik.", s: "G S. 8", h: true },
    { k: "Lymphe", f: "Welche Abfallprodukte sammelt die Lymphe – und was transportiert sie zusätzlich?",
      a: "Abfallprodukte des Stoffwechsels: Reste abgestorbener Zellen und Eiweißkörper.\nZusätzlich: über den Darm resorbierte Fette.", s: "G S. 8" },
    { k: "Lymphe", f: "Welche Aufgabe haben Lymphknoten?",
      a: "Bildung von Lymphozyten; Abwehr – sie fangen schädigende Stoffe und Erreger ab und machen sie unschädlich; schwellen bei Entzündung (diagnostischer Hinweis).", s: "G S. 8" },
    { k: "pAVK", f: "Welche diagnostischen Maßnahmen gibt es bei pAVK?",
      a: "Anamnese, AZ, Schmerz, Gangbild, Temperatur, Fußpulse, ABI (Dopplerdruck), Ratschow-Lagerungsprobe, Ultraschall/Duplex, Laufband, MRT, Angiographie, CT; tcpO₂, Labor.", s: "G S. 12; M S. 24–25" },
    { k: "pAVK", f: "Wie wird der ABI berechnet und was ist zu beachten?",
      a: "Syst. Druck Knöchel ÷ syst. Druck Arm; gesund ca. 1,0, ≤ 0,9 = pAVK.\nBei Mönckeberg-Sklerose falsch hohe Werte.", s: "G S. 12; M S. 24" },
    { k: "Venen", f: "Nenne die CVI-Stadien nach Widmer.",
      a: "I Corona phlebectatica, Phlebödem\nII Ödem, Dermatoliposklerose, Atrophie blanche, Purpura jaune d’ocre, Stauungsekzem\nIIIa abgeheiltes Ulcus\nIIIb florides Ulcus", s: "G S. 16; M S. 15" },
    { k: "Venen", f: "Einteilung der Varikose nach Hach?",
      a: "Nur handschriftlich im Heft (G S. 15): 1 Mündungsklappe · 2 bis Mitte Oberschenkel · 3 bis unterhalb Knie · 4 bis Sprunggelenk.\nMit dem App-Anhang abgleichen.", s: "G S. 15", h: true },
    { k: "Wunde", f: "IAD vs. Dekubitus – wie unterscheidet man sie?",
      a: "Dekubitus: über knöchernen Vorsprüngen, scharf begrenzt, Ursprung in der Tiefe.\nIAD/Feuchtigkeitswunde: Ursprung an der Epidermis, in Hautfalten (Gesäßfalte), ohne Bezug zu Knochenvorsprüngen.", s: "M S. 9–10" },
    { k: "Wunde", f: "Was ist bei analnahen Wunden zu beachten?",
      a: "Gelten trotz langer Heilung nicht als chronisch; viel Sekret → Wundumgebung vor Feuchtigkeit schützen (Hautschutzfilme, Barrierecremes).", s: "W S. 15; D S. 24" }
  ],

  quiz: [
    { f: "Welche gehören zu den Adnexorganen (Hautanhangsgebilden) der Haut?",
      o: ["Haare", "Nägel", "Talgdrüsen", "Langerhans-Zellen"], r: 3,
      e: "Adnexorgane: Haare, Nägel und Hautdrüsen (Schweiß-, Duft- und Talgdrüsen). Langerhans-Zellen sind Immunzellen in der Stachelzellschicht.", s: "H S. 3–4" },
    { f: "Welche Aussagen zur Reihenfolge der Epidermis-Schichten (von innen nach außen) sind richtig?",
      o: ["Die innerste Schicht ist das Stratum basale", "Auf das Stratum spinosum folgt das Stratum granulosum", "Die äußerste Schicht ist das Stratum lucidum", "Das Stratum corneum liegt direkt auf dem Stratum basale"], r: 2,
      e: "Von innen nach außen: Stratum basale → spinosum → granulosum → lucidum → corneum (äußerste Schicht).", s: "H S. 3–5" },
    { f: "Welche Aussagen zu den Langerhans-Zellen stimmen?",
      o: ["Sie liegen in der Stachelzellschicht (Stratum spinosum)", "Sie stammen aus dem Knochenmark", "Sie kommen nur an Handflächen und Fußsohlen vor", "Sie bilden den Säureschutzmantel"], r: 2,
      e: "Langerhans-Zellen: aus dem Knochenmark, in der Stachelzellschicht; fangen mit ihren Dendriten Pathogene und Antigene ab – „Wachposten des Immunsystems“.", s: "H S. 4" },
    { f: "Welche Aussagen zum Erysipel sind richtig?",
      o: ["Erreger sind β-hämolysierende Streptokokken der Gruppe A", "Es ist die häufigste Komplikation des chronischen Lymphödems", "Erreger sind Clostridien", "Es ist eine Pilzinfektion der Nägel"], r: 2,
      e: "Erysipel: akute bakterielle Infektion der Dermis; klar begrenzte, schmerzhafte, überwärmte Rötung, Fieber; Komplikationen Sepsis, Lymphödem.", s: "H S. 20" },
    { f: "Welche Aussagen zur Mykose sind richtig?",
      o: ["Erreger können Dermatophyten, Schimmel- oder Hefepilze sein", "Verminderte Abwehr begünstigt sie", "Die Onychomykose macht ca. ¼ aller Nagelkrankheiten aus", "Sie wird durch Streptokokken ausgelöst"], r: 3,
      e: "Mykose: Pilzinfektion von Haut, Schleimhaut, Nägeln oder systemisch; begünstigt durch verminderte Abwehr.", s: "H S. 22" },
    { f: "Was trifft auf Tumor und Neoplasie zu?",
      o: ["Neoplasie = autonome Gewebeneubildung (benigne, semimaligne, maligne)", "Tumor = jede örtliche Zunahme des Gewebevolumens (Schwellung)", "Der Begriff Tumor ist enger gefasst als Neoplasie", "Eine Neoplasie ist immer bösartig"], r: 2,
      e: "Tumor ist der weiter gefasste Begriff; eine Neoplasie kann benigne, semimaligne oder maligne sein.", s: "H S. 33" },
    { f: "Welche Zuordnungen der ABCD-Regel sind richtig?",
      o: ["A = Asymmetrie", "C = Color (Mehrfarbigkeit)", "D = Dynamik (Veränderung)", "B = Blutung"], r: 3,
      e: "Asymmetrie · Begrenzung unscharf · Color · Dynamik. Das „E = Erhabenheit“ steht nur handschriftlich im Heft.", s: "H S. 27" },
    { f: "Was gehört zum Herz-Kreislauf-System?",
      o: ["Das Herz als Druck-Saug-Pumpe", "Blutgefäße (Arterien, Venen, Kapillaren)", "Lymphgefäße", "Talgdrüsen"], r: 3,
      e: "Herz, Blutgefäße und Lymphgefäße als Leitungsröhren bzw. Stätten des Stoffaustauschs (im Heft als Prüfung markiert).", s: "G S. 3" },
    { f: "Welche Aufgaben hat das Blutgefäßsystem?",
      o: ["Ernährung des Organismus", "Abtransport von Schlackenstoffen", "Hormontransport", "Bildung von Lymphozyten"], r: 3,
      e: "Ernährung, Abtransport von Schlackenstoffen, Hormontransport, Wärmeregulation. Lymphozyten werden in den Lymphknoten gebildet.", s: "G S. 3, 8" },
    { f: "Welche Kreisläufe hat das Blutgefäßsystem?",
      o: ["Lungenkreislauf (kleiner Kreislauf)", "Großer Körperkreislauf", "Pfortaderkreislauf", "Lymphkreislauf"], r: 3,
      e: "Drei Kreisläufe: Lungenkreislauf, großer Körperkreislauf, Pfortaderkreislauf.", s: "G S. 3–4" },
    { f: "Welche Aussagen zu arteriovenösen Anastomosen sind richtig?",
      o: ["Querverbindungen zwischen Arteriolen und Venolen", "Sie umgehen die Kapillaren", "Sie regulieren z. B. die Hautdurchblutung für den Wärmehaushalt", "Sie verbinden Lymphknoten miteinander"], r: 3,
      e: "AV-Anastomosen umgehen die Kapillaren (Kollateralkreislauf) und regulieren die Durchblutung.", s: "G S. 5" },
    { f: "Was trifft auf die Diffusion zu?",
      o: ["Teilchen wandern vom Ort höherer zum Ort niedrigerer Konzentration", "Sie läuft langsam ab", "Antrieb ist ein Blutdruckunterschied an der Membran", "Beispiel: Kaffeefilter"], r: 2,
      e: "Diffusion: Wanderung durch Eigenbeweglichkeit bis zum Konzentrationsausgleich; langsam (Beispiel Tinte in Wasser). Druck und Kaffeefilter gehören zur Filtration.", s: "G S. 7" },
    { f: "Was trifft auf die Filtration zu?",
      o: ["Antrieb ist ein Druckunterschied (Blutdruck)", "Beispiel: Kaffeefilter", "Teilchen wandern durch Eigenbeweglichkeit bis zum Konzentrationsausgleich", "Sie läuft sehr langsam ab"], r: 2,
      e: "Filtration: schnell; Teilchen, die durch die Membranporen passen, werden vom Ort höheren zum Ort niedrigeren Blutdrucks gepresst. Das Heft nennt den osmotischen Druck hier nicht.", s: "G S. 7" },
    { f: "Welche Angaben zur täglichen Flüssigkeitsbilanz sind richtig?",
      o: ["Ca. 20 l gelangen ins Interstitium", "Ca. 18 l werden reabsorbiert", "Ca. 2 l fließen als Lymphe ab", "Ca. 7.000 l fließen als Lymphe ab"], r: 3,
      e: "20 l ins Interstitium, 18 l reabsorbiert, 2 l als Lymphe. (Die 7.000 l beziehen sich auf das Blut, das die Venen täglich transportieren.)", s: "G S. 7; G S. 14" },
    { f: "Woraus besteht das Lymphsystem?",
      o: ["Lymphgefäße", "Lymphknoten", "Milz", "Leber"], r: 3,
      e: "Lymphsystem = Lymphgefäße zusammen mit Lymphknoten, Knochenmark, Mandeln und Milz.", s: "G S. 7" },
    { f: "Warum heißt das Lymphgefäßsystem „halboffen“? Was trifft zu?",
      o: ["Es beginnt blind mit Lymphkapillaren", "Es durchzieht den Körper wie ein Netz", "Es mündet in den Blutkreislauf", "Es besitzt ein eigenes Pumporgan"], r: 3,
      e: "Halboffenes System ohne eigenes Pumporgan; Lymphkapillaren nehmen interstitielle Flüssigkeit auf.", s: "G S. 7" },
    { f: "Wohin mündet die Lymphe am Ende?",
      o: ["In die linke Schlüsselbeinvene (V. subclavia) über den Ductus thoracicus", "In den rechten Vorhof", "In die Pfortader", "In die Milz"],
      e: "Lymphkapillaren → Lymphgefäße mit Klappen → Lymphknoten → Lymphstämme → Ductus thoracicus → linke V. subclavia.", s: "G S. 7–8" },
    { f: "Wodurch wird die Lymphe ohne eigenes Pumporgan transportiert (laut Heft)?",
      o: ["Kontraktion der Gefäßmuskulatur", "Pulsbewegung", "Atem- und Körperbewegung", "Windkesselfunktion der Lymphgefäße"], r: 3,
      e: "Die Windkesselfunktion ordnet das Heft den elastischen Arterien zu, nicht der Lymphe. Die Mitschrift ergänzt Muskelpumpe und Darmperistaltik.", s: "G S. 6, 8" },
    { f: "Was transportiert die Lymphe?",
      o: ["Reste abgestorbener Zellen", "Eiweißkörper", "Über den Darm resorbierte Fette", "Sauerstoff zu den Organen"], r: 3,
      e: "Abfallprodukte des Stoffwechsels sind laut Heft Reste abgestorbener Zellen und Eiweißkörper; Darmfette werden zusätzlich transportiert, sind aber keine Abfallprodukte.", s: "G S. 8" },
    { f: "Welche Aufgaben haben Lymphknoten?",
      o: ["Bildung von Lymphozyten", "Sie fangen Erreger ab und machen sie unschädlich", "Sie schwellen bei Entzündung", "Sie pumpen die Lymphe aktiv weiter"], r: 3,
      e: "Lymphknoten: Lymphozytenbildung und Abwehr; die Schwellung bei Entzündung ist ein diagnostischer Hinweis. Ein Pumporgan hat das Lymphsystem nicht.", s: "G S. 8" },
    { f: "Was trifft auf die Windkesselfunktion zu?",
      o: ["Sie ist eine Funktion der elastischen, herznahen Arterien", "Sie wandelt die stoßweise in eine annähernd kontinuierliche Strömung um", "Sie treibt die Lymphe an", "Sie findet in den Kapillaren statt"], r: 2,
      e: "Herz kontrahiert → Aorta dehnt sich; Herz entspannt → Aorta zieht sich zusammen.", s: "G S. 4, 6" },
    { f: "Welche Maßnahmen gehören zur Diagnostik der pAVK?",
      o: ["ABI-Messung (Dopplerdruck)", "Ratschow-Lagerungsprobe", "Laufbandtest", "Stemmer-Zeichen"], r: 3,
      e: "Anamnese, AZ, Schmerz, Gangbild, Temperatur, Fußpulse, ABI, Ratschow, Ultraschall/Duplex, Laufband, MRT, Angiographie, CT, tcpO₂, Labor. Das Stemmer-Zeichen gehört zum Lymphödem.", s: "G S. 12; M S. 24–25" },
    { f: "Welche Aussagen zum ABI sind richtig?",
      o: ["ABI = syst. Druck Knöchel ÷ syst. Druck Arm", "Ein Wert ≤ 0,9 spricht für eine pAVK", "Bei Mönckeberg-Sklerose werden falsch hohe Werte gemessen", "Gesund ist ein Wert von ca. 0,5"], r: 3,
      e: "Gesund ca. 1,0; ≤ 0,9 = pAVK; Mönckeberg-Sklerose → falsch hohe Werte.", s: "G S. 12; M S. 24" },
    { f: "Welche Zuordnungen der CVI-Stadien nach Widmer sind richtig?",
      o: ["Grad I: Corona phlebectatica, Phlebödem", "Grad IIIb: florides Ulcus", "Grad II: abgeheiltes Ulcus", "Grad IIIa: florides Ulcus"], r: 2,
      e: "I Corona phlebectatica, Phlebödem · II Ödem, Dermatoliposklerose, Atrophie blanche, Purpura jaune d’ocre, Stauungsekzem · IIIa abgeheiltes Ulcus · IIIb florides Ulcus.", s: "G S. 16; M S. 15" },
    { f: "Welche Zuordnungen der Varikose-Stadien nach Hach sind richtig?",
      o: ["Stadium 1: nur Mündungsklappe", "Stadium 4: bis zum Sprunggelenk", "Stadium 2: bis zum Sprunggelenk", "Stadium 3: nur Mündungsklappe"], r: 2,
      e: "1 Mündungsklappe · 2 bis Mitte Oberschenkel · 3 bis unterhalb Knie · 4 bis Sprunggelenk. Nur handschriftlich im Heft – mit dem App-Anhang abgleichen.", s: "G S. 15", h: true },
    { f: "Wie unterscheidet man IAD und Dekubitus?",
      o: ["Ein Dekubitus entsteht über knöchernen Vorsprüngen", "Ein Dekubitus hat seinen Ursprung in der Tiefe", "IAD entsteht an der Epidermis, z. B. in der Gesäßfalte", "IAD ist an knöcherne Vorsprünge gebunden"], r: 3,
      e: "Feuchtigkeitswunden (IAD, Mazeration, Intertrigo) entstehen an der Epidermis, in Hautfalten, unabhängig von Knochenvorsprüngen.", s: "M S. 9–10" },
    { f: "Was gilt für analnahe Wunden?",
      o: ["Sie gelten trotz langer Heilung nicht als chronisch", "Die Wundumgebung muss vor Feuchtigkeit geschützt werden", "Hautschutzfilme oder Barrierecremes eignen sich", "Sie werden immer primär verschlossen"], r: 3,
      e: "Geplante Sekundärheilung, gut durchblutet; hohe Sekretbildung → Wundumgebung schützen.", s: "W S. 15; D S. 24" }
  ],

  zusammenfassung: `
<h3>1. Prüfungsorganisation laut Mitschrift</h3>
<ul>
  <li><b>Theorieprüfung:</b> Prüfungslink am Montag um 10:00 Uhr; <b>60 Fragen in 90 Minuten</b>; Multiple Choice – mindestens eine, oft mehrere richtige Antworten, niemals alle vier. <span class="hand-inline">Zum Üben: Quiz → „Prüfungssimulation“.</span></li>
  <li><b>FPA (fachpraktische Aufgabe) am Freitag:</b> Praxisaufgabe zu nur einer Wunde, wird in der App bzw. per Mail zugeschickt; Einsendung laut Notiz an „Wund@murimed.de“ (Schreibweise aus der Handschrift übernommen – bitte prüfen).</li>
  <li><b>Zum Ausdrucken (aus der App):</b> Formular Varikosis (als „Prüfung!“ markiert) · Beratungsprotokoll (vgl. Verweis in D S. 7) · Einteilung der Varikose nach Hach (App-Anhang).</li>
</ul>

<h3>2. Abgleich: Notiz → Heft</h3>
<p class="leise">✔ = durch das Heft bestätigt · ➜ = präzisiert oder korrigiert · ? = im Drucktext nicht enthalten</p>
<div class="tabelle"><table>
  <thead><tr><th>Notiz (Prüfungsstoff)</th><th>Fundstelle</th><th>Ergebnis</th></tr></thead>
  <tbody>
    <tr><td style="white-space:normal">Adnexorgane</td><td>H S. 3</td><td>✔ Haare, Nägel, Schweiß-, Duft- und Talgdrüsen</td></tr>
    <tr><td style="white-space:normal">Hautschichten von innen nach außen</td><td>H S. 3–5</td><td>✔ Prüfungsfrage auch handschriftlich im Heft (S. 3: „von unten nach oben + lateinische Begriffe, Langerhans-Zellen“). Bisherige Lernkarte fragte von außen nach innen – Reihenfolge unten ergänzt.</td></tr>
    <tr><td style="white-space:normal">Erysipel, Mykose</td><td>H S. 20, 22</td><td>✔ beide im Heft als prüfungsrelevant markiert</td></tr>
    <tr><td style="white-space:normal">Unterschied Tumor – Neoplasie</td><td>H S. 33 (Übung II)</td><td>✔</td></tr>
    <tr><td style="white-space:normal">ABCDE-Regel</td><td>H S. 27</td><td>➜ Drucktext nur ABCD; „E = Erhabenheit“ steht nur handschriftlich im Heft</td></tr>
    <tr><td style="white-space:normal">Was gehört zum Herz-Kreislauf-System?</td><td>G S. 3</td><td>✔ Herz, Blutgefäße, Lymphgefäße (im Heft als Prüfung markiert)</td></tr>
    <tr><td style="white-space:normal">Drei Kreisläufe</td><td>G S. 3–4</td><td>✔ Lungen-, Körper-, Pfortaderkreislauf</td></tr>
    <tr><td style="white-space:normal">Arteriovenöse Anastomosen = Querverbindungen</td><td>G S. 5</td><td>✔ zwischen Arteriolen und Venolen, Umgehung der Kapillaren</td></tr>
    <tr><td style="white-space:normal">Diffusion / Filtration</td><td>G S. 7</td><td>✔ Diffusion; ➜ Filtration: Heft nennt als Antrieb den Druckunterschied (Blutdruck) an der Membran – „osmotischer Druck“ wird dort nicht genannt</td></tr>
    <tr><td style="white-space:normal">20 l täglich, 18 l reabsorbiert, 2 l Lymphe</td><td>G S. 7</td><td>✔</td></tr>
    <tr><td style="white-space:normal">Lymphe: Klappen, Lymphknoten, linke Schlüsselbeinvene</td><td>G S. 7–8</td><td>✔ Ductus thoracicus → linke V. subclavia</td></tr>
    <tr><td style="white-space:normal">Lymphe ohne Pumporgan: „Windkesselfunktion, Pulsbewegung“</td><td>G S. 6, 8</td><td>➜ Heft: Transport durch Gefäßmuskulatur, Pulsbewegung, Atem- und Körperbewegung. Die Windkesselfunktion ordnet das Heft den elastischen Arterien zu, nicht der Lymphe.</td></tr>
    <tr><td style="white-space:normal">Welche Abfallprodukte? → Darmfette</td><td>G S. 8</td><td>➜ Abfallprodukte laut Heft: Reste abgestorbener Zellen und Eiweißkörper. Darmfette werden zusätzlich über die Lymphe transportiert, sind aber keine Abfallprodukte.</td></tr>
    <tr><td style="white-space:normal">Halboffenes System</td><td>G S. 7</td><td>✔ durchzieht den Körper wie ein Netz</td></tr>
    <tr><td style="white-space:normal">Diagnostik pAVK</td><td>G S. 12; M S. 24–25</td><td>✔ ergänzt um Heftinhalte (siehe unten)</td></tr>
    <tr><td style="white-space:normal">Einteilung der Varikose nach Hach</td><td>G S. 15 (nur handschriftlich)</td><td>? Nicht im Drucktext – Stadien bitte mit dem App-Anhang abgleichen</td></tr>
    <tr><td style="white-space:normal">CVI nach Widmer</td><td>G S. 16; M S. 15</td><td>✔ in beiden Heften identisch</td></tr>
    <tr><td style="white-space:normal">IAD vs. Dekubitus (knöcherner Vorsprung)</td><td>M S. 9–10</td><td>✔</td></tr>
    <tr><td style="white-space:normal">Analnahe Wunden: Umgebung vor Feuchtigkeit schützen</td><td>W S. 15; D S. 24</td><td>✔</td></tr>
  </tbody>
</table></div>

<h3>3. Prüfungsstoff Tag 1 – Haut</h3>
<div class="tabelle"><table>
  <caption>Epidermis von innen nach außen (H S. 3–5)</caption>
  <thead><tr><th>Nr.</th><th>Deutsch</th><th>Latein</th><th>Kernmerkmal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Basalzellschicht</td><td>Stratum basale</td><td>Keimzellen, Teilung → Regeneration; Merkelzellen</td></tr>
    <tr><td>2</td><td>Stachelzellschicht</td><td>Stratum spinosum</td><td>Desmosomen; Langerhans-Zellen (Immunabwehr)</td></tr>
    <tr><td>3</td><td>Körnerzellschicht</td><td>Stratum granulosum</td><td>Keratinozyten flachen ab, beginnen zu verhornen</td></tr>
    <tr><td>4</td><td>Glanzschicht</td><td>Stratum lucidum</td><td>nur an Handflächen und Fußsohlen</td></tr>
    <tr><td>5</td><td>Hornschicht</td><td>Stratum corneum</td><td>äußerste Schicht, abgestorbene Korneozyten, Schutz vor Wasserverlust</td></tr>
  </tbody>
</table></div>
<p>Darunter: Dermis (Stratum papillare, Stratum reticulare) und Subcutis. Adnexorgane: Haare, Nägel, Schweiß-, Duft-, Talgdrüsen. Erneuerung der Epidermis 27–30 Tage (ab 65 Jahren 5–7 Wochen).</p>
<ul>
  <li><b>Erysipel:</b> akute bakterielle Infektion der Dermis durch β-hämolysierende Streptokokken der Gruppe A; häufigste Komplikation des chronischen Lymphödems; klar begrenzte, schmerzhafte Rötung, Überwärmung, Fieber; Komplikationen Sepsis, Lymphödem (H S. 20).</li>
  <li><b>Mykose:</b> Pilzinfektion (Dermatophyten, Schimmel-, Hefepilze) von Haut, Schleimhaut, Nägeln oder systemisch; begünstigt durch verminderte Abwehr. Onychomykose ca. ¼ aller Nagelkrankheiten (H S. 22).</li>
  <li><b>Neoplasie</b> = autonome Gewebeneubildung (benigne, semimaligne, maligne). <b>Tumor</b> = jede örtliche Zunahme des Gewebevolumens (Schwellung) – weiter gefasst (H S. 33).</li>
  <li><b>ABCD(E)-Regel:</b> Asymmetrie · Begrenzung unscharf · Color (Mehrfarbigkeit) · Dynamik · <span class="hand-inline">E = Erhabenheit (nur handschriftlich)</span> (H S. 27).</li>
</ul>

<h3>4. Prüfungsstoff Tag 2 – Gefäßsystem</h3>
<ul>
  <li><b>Herz-Kreislauf-System</b> (kardiovaskuläres System): Herz als Druck-Saug-Pumpe · Blutgefäße (Arterien, Venen, Kapillaren) · Lymphgefäße als Leitungsröhren bzw. Stätten des Stoffaustauschs (G S. 3).</li>
  <li><b>Blutgefäßsystem:</b> Ernährung des Organismus, Abtransport von Schlackenstoffen, Hormontransport, Wärmeregulation; geschlossenes System mit drei Kreisläufen: Lungenkreislauf, großer Körperkreislauf, Pfortaderkreislauf (G S. 3–4).</li>
  <li><b>Arteriovenöse Anastomosen:</b> Querverbindungen zwischen Arteriolen und Venolen; umgehen die Kapillaren (Kollateralkreislauf), regulieren die Durchblutung, z. B. Hautdurchblutung für den Wärmehaushalt (G S. 5).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th></th><th>Diffusion</th><th>Filtration</th></tr></thead>
  <tbody>
    <tr><td>Prinzip</td><td>Wanderung von Teilchen durch Eigenbeweglichkeit vom Ort höherer zum Ort niedrigerer Konzentration bis zum Ausgleich</td><td>Teilchen, die durch die Membranporen passen, werden bei einem Druckunterschied vom Ort höheren zum Ort niedrigeren Blutdrucks gepresst</td></tr>
    <tr><td>Tempo</td><td>langsam; braucht große Austauschflächen und kurze Wege (Kapillaren)</td><td>schnell; Flüssigkeitsverschiebung zwischen Blutplasma und Zwischenzellraum</td></tr>
    <tr><td>Beispiel (Mitschrift)</td><td>Tinte in Wasser</td><td>Kaffeefilter: Wasser läuft durch, Kaffeesatz bleibt zurück</td></tr>
  </tbody>
</table></div>
<p class="merke">Durch Diffusion und Filtration gelangen täglich ca. 20 l ins Interstitium, ca. 18 l werden reabsorbiert, die übrigen 2 l fließen als Lymphe ab (G S. 7).</p>
<ul>
  <li><b>Lymphsystem</b> = Lymphgefäße + Lymphknoten, Knochenmark, Mandeln, Milz; zusätzliches Abflusssystem; halboffenes System, das den Körper wie ein Netz durchzieht (G S. 7).</li>
  <li><b>Weg der Lymphe:</b> Lymphkapillaren (dehnbar, fingerförmig) → kleine/große Lymphgefäße mit Klappen (schwingende Zipfel) gegen Rückfluss → Lymphknoten (Lymphozytenbildung, fangen Erreger ab und machen sie unschädlich; schwellen bei Entzündung) → Lymphstämme → Ductus thoracicus → linke Schlüsselbeinvene (V. subclavia), wo das Lymphgefäßsystem endet (G S. 7–8).</li>
  <li><b>Kein eigenes Pumporgan:</b> Transport durch Kontraktion der Gefäßmuskulatur, Drucksteigerung durch Puls-, Atem- und Körperbewegung (G S. 8). <span class="hand-inline">Mitschrift ergänzt: Muskelpumpe und Darmperistaltik.</span></li>
  <li><b>Was transportiert die Lymphe?</b> Abfallprodukte des Stoffwechsels – Reste abgestorbener Zellen und Eiweißkörper; außerdem die über den Darm resorbierten Fette (G S. 8).</li>
  <li><b>Windkesselfunktion</b> gehört zu den elastischen Arterien: stoßweise Strömung am Aortenanfang → annähernd kontinuierliche Strömung (G S. 6; <span class="hand-inline">handschriftlich S. 4: Herz kontrahiert → Aorta dehnt sich; Herz entspannt → Aorta zieht sich zusammen</span>).</li>
</ul>
<p class="merke"><b>Diagnostik pAVK – Mitschrift:</b> Anamnese, Allgemeinzustand, Schmerz, Gangbild, Temperatur, schwacher Fußpuls, Blutdruck/ABI-Messung an den Extremitäten, Bildgebung.<br><b>Heft ergänzt:</b> ABI = syst. Druck Knöchel ÷ syst. Druck Arm, gesund ca. 1,0, ≤ 0,9 = pAVK; Ratschow-Lagerungsprobe, Ultraschall/Doppler/Duplex, Laufband, MRT, Angiographie, CT (G S. 12); tcpO₂, Labor; bei Mönckeberg-Sklerose falsch hohe ABI-Werte (M S. 24–25).</p>
<div class="tabelle"><table>
  <caption>CVI nach Widmer ★ (G S. 16; M S. 15)</caption>
  <thead><tr><th>Grad</th><th>Klinik</th></tr></thead>
  <tbody>
    <tr><td>I</td><td>Corona phlebectatica (Fußrand), Phlebödem</td></tr>
    <tr><td>II</td><td>Ödem, Dermatoliposklerose, Atrophie blanche, Purpura jaune d’ocre, Stauungsekzem</td></tr>
    <tr><td>IIIa</td><td>abgeheiltes Ulcus (Ulcusnarbe)</td></tr>
    <tr><td>IIIb</td><td>florides Ulcus</td></tr>
  </tbody>
</table></div>
<p class="hand">Varikose nach Hach – laut Mitschrift Prüfungsfrage, Vorlage im App-Anhang. Im Gefäß-Heft (S. 15) nur handschriftlich: 1 nur Mündungsklappe · 2 bis Mitte Oberschenkel · 3 bis unterhalb des Knies · 4 bis zum Sprunggelenk. Bitte mit dem App-Anhang abgleichen.</p>

<h3>5. Weitere Notizen</h3>
<ul>
  <li><b>IAD</b> (inkontinenzassoziierte Dermatitis) <b>vs. Dekubitus:</b> Dekubitus entsteht über knöchernen Vorsprüngen, scharf begrenzt, in der Tiefe; Feuchtigkeitswunden (IAD, Mazeration, Intertrigo) entstehen an der Epidermis, in Hautfalten (z. B. Gesäßfalte), unabhängig von Knochenvorsprüngen (M S. 9–10).</li>
  <li><b>Analnahe Wunden:</b> trotz wochenlanger Heilung nicht chronisch (geplante Sekundärheilung, gut durchblutet); hohe Sekretbildung → Wundumgebung vor Feuchtigkeit schützen (W S. 15), z. B. mit transparenten Hautschutzfilmen oder Barrierecremes (D S. 24).</li>
</ul>

<h3>6. Alle markierten Prüfungsthemen auf einen Blick</h3>
<div class="tabelle"><table>
  <thead><tr><th>Heft</th><th>Prüfungsthemen (★ im Heft bzw. laut Mitschrift)</th></tr></thead>
  <tbody>
    <tr><td style="white-space:normal">G – Gefäße</td><td>Herz-Kreislauf-System · drei Kreisläufe · AV-Anastomosen · Diffusion/Filtration, 20/18/2 l · Lymphsystem · pAVK (Fontaine, ABI, Diagnostik) · CVI nach Widmer · Varikose nach Hach · Lymphödem (Stadien, Stemmer, KPE) · Lipödem</td></tr>
    <tr><td style="white-space:normal">H – Haut</td><td>Hautschichten von innen nach außen + Latein · Adnexorgane · Langerhans-Zellen · Säureschutzmantel · Altershaut · Pflegeprodukte (O/W, W/O) · Schleimhaut · Erysipel · Mykose · Tumor vs. Neoplasie · ABCD(E) · MARSI</td></tr>
    <tr><td style="white-space:normal">M – Dekubitus, UC, DFU</td><td>Dekubitus-Definition, Kategorien, Fingertest, Prophylaxe, Hilfsmittel · Ulcus cruris venosum vs. arteriosum · IRAN · 3S-3L · Diabetisches Fußulkus (Formen, Wagner-Armstrong, IRAS) · Klassifikationen Fontaine/Widmer/Wagner</td></tr>
    <tr><td style="white-space:normal">W – Wundarten</td><td>Definition Wunde · Einteilung · Entstehungshergang und -art · akut vs. chronisch · Entzündungszeichen (Latein) · primäre/sekundäre Heilung · feucht-warmes Milieu · Wundheilungsphasen</td></tr>
    <tr><td style="white-space:normal">D – Dokumentation</td><td>Pflegerische Anamnese (Kriterien) · Aufbewahrung § 630f BGB (10 J.) / § 199 BGB (30 J.)</td></tr>
    <tr><td style="white-space:normal">Hy – Hygiene</td><td>Entzündung vs. Infektion · von sauber zu unrein · Reihenfolge und Kolonisationsstadien · Anzeichen infektgefährdeter Wunden · nosokomiale Infektion · Bakterienstämme · MRSA</td></tr>
  </tbody>
</table></div>
`
});
