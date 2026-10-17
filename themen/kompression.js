/*
 * Thema: Kompressionstherapie
 * Quelle: murimed-Lernheft Kompressionstherapie, Modul II (Seitenangaben = gedruckte Heftseiten).
 * Inhalte übernommen aus "Zusammenfassung_Kompressionstherapie.pdf" und
 * "Lernkarten_Kompressionstherapie.pdf".
 *
 * Quiz-Format: Die ersten "r" Optionen sind richtig (ohne "r": nur die erste);
 * die App mischt die Reihenfolge. Nie alle Optionen richtig – wie in der Prüfung.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 * ★ = im Heft handschriftlich als „Prüfung“ bzw. „Prüfungsfrage“ markiert.
 */
Lernapp.thema({
  id: "kompression",
  titel: "Kompressionstherapie",
  kurz: "Kompression",
  quelle: "murimed-Lernheft Kompressionstherapie, Modul II",
  hinweis:
    "Quelle ist ausschließlich das Lernheft; Seitenzahlen in Klammern (gedruckte Heftseiten). ★ = im Heft handschriftlich als „Prüfung“ bzw. „Prüfungsfrage“ markiert. Handschriftliche Notizen sind gekennzeichnet und nicht geprüft. Die im Heft zitierten Primärquellen (Protz, Rabe, RAL u. a.) wurden nicht separat geprüft.",

  karten: [
    { k: "Grundlagen", f: "Wie definiert das Heft Kompressionstherapie?",
      a: "„Therapeutische Maßnahmen, die unter Anwendung von Druck zur Behandlung von Venenleiden, Lymphödem und Kombinationsleiden, bei traumatischen Indikationen wie postoperativen Ödemen oder Angiodysplasien dienen.“ (Möller-Woltemade 2020) Basis jeder phlebologischen Therapie.", s: "S. 4" },
    { k: "Indikation", f: "Wann ist Kompressionstherapie grundsätzlich indiziert? ★",
      a: "Bei allen venösen und lymphatischen Erkrankungen, die Ödeme der Beine nach sich ziehen. Gruppen: chronische Venenkrankheiten, thromboembolische Venenkrankheiten, Ödeme, andere (z. B. Z. n. Verbrennungen, Narben).", s: "S. 3" },
    { k: "Indikation", f: "Indikationen bei chronischen Venenkrankheiten?",
      a: "Venöse Symptome, Lebensqualität, venöse Ödeme/Hautveränderungen, Ulcus cruris venosum + Rezidivprävention, Schmerzreduktion, gemischtes Ulcus (KI beachten!), Varikose, Ekzem, Dermatoliposklerose, Atrophie blanche, nach Varikosetherapie, funktionelle venöse Insuffizienz.", s: "S. 3" },
    { k: "Indikation", f: "Thromboembolische und ödematöse Indikationen?",
      a: "Thrombose: oberflächliche/tiefe Beinvenen-, Armvenenthrombose, Z. n. Thrombose, PTS, Prophylaxe bei Mobilen.\nÖdeme: Lymphödem, Lipödem ab Stadium II, Immobilität, medikamentös, Schwangerschaft, posttraumatisch/postoperativ, idiopathisch, berufsbedingt.", s: "S. 3" },
    { k: "Kontraindikation", f: "Nenne die Kontraindikationen der Kompressionstherapie. ★",
      a: "Fortgeschrittene pAVK · dekompensierte Herzinsuffizienz (NYHA III + IV) · septische Phlebitis · Phlegmasia coerulea dolens. Handschr. Prüfungsfrage: Herzinsuffizienz, septische Phlebitis, pAVK, Dermatosen.", s: "S. 4", h: true },
    { k: "Kontraindikation", f: "Ab welchen Werten ist die pAVK eine Kontraindikation?",
      a: "Wenn einer zutrifft: ABPI < 0,5 · Knöchelarteriendruck < 60 mmHg · Zehendruck < 30 mmHg oder TcPO₂ < 20 mmHg am Fußrücken. Mit unelastischem Material ggf. noch bei 50–60 mmHg unter engmaschiger Kontrolle.", s: "S. 4" },
    { k: "Kontraindikation", f: "Ulcus cruris mixtum – Kompression ja oder nein? ★",
      a: "Handschr. („Prüfung“): abhängig vom Gefäßstatus → ABI-Messung (RR an beiden Armen und beiden Beinen); < 0,5 kritischer Wert → keine Kompressionstherapie. Laut Druck: gemischtes Ulcus ist Indikation unter Berücksichtigung der KI.", s: "S. 2–4", h: true },
    { k: "Kontraindikation", f: "Welche Risikofaktoren erfordern eine Abwägung?",
      a: "Ausgeprägte nässende Dermatosen, Unverträglichkeit auf Material, schwere Sensibilitätsstörungen, fortgeschrittene periphere Neuropathie (z. B. Diabetes), primär chronische Polyarthritis → interdisziplinäre Nutzen-Risiko-Entscheidung.", s: "S. 4" },
    { k: "Wirkung", f: "Wie wirkt Kompression auf die Venen? ★",
      a: "Gefäßdurchmesser ↓ → Fließgeschwindigkeit zum Herzen fast verdoppelt, transmuraler Druck ↓; dilatierte (nicht zerstörte) Venenklappen schließen wieder – schon in Ruhe durch den Ruhedruck.", s: "S. 4" },
    { k: "Wirkung", f: "Ruhedruck vs. Arbeitsdruck?",
      a: "Ruhedruck = Anlagedruck in Ruhe im Liegen, beschreibt Kompressionsstärke, sinkt durch Bewegung/Ödemreduktion.\nArbeitsdruck = Widerstand des Verbandes gegen die Muskelausdehnung bei Bewegung; umso höher, je weniger dehnbar das Material.", s: "S. 5" },
    { k: "Wirkung", f: "Was bedeutet Stiffness?",
      a: "Steifigkeit: wie stark das Kompressionsmittel einer Umfangszunahme (Bewegung, Ödem, Aufstehen) widersteht. Langzug → geringer Druckanstieg; Zinkleim → sehr hoher. Je weniger das Material nachgibt, desto höher die Stiffness.", s: "S. 5" },
    { k: "Wirkung", f: "Welche Muskelpumpen gibt es? ★",
      a: "Handschr. („Prüfung“): Fußsohlenpumpe, Sprunggelenkspumpe, Wadenmuskelpumpe, Kniekehlenpumpe, Leisten-/Oberschenkelpumpe.\nDruck: Kompression steigert v. a. Sprunggelenk- und Wadenmuskelpumpe (Pascal-Gesetz).", s: "S. 5", h: true },
    { k: "Wirkung", f: "In welche Richtung soll der Druck abnehmen – und warum?",
      a: "Von distal nach proximal, damit dem Rückfluss wenig Widerstand entgegensteht. Laplace: bei größerem Umfang sinkt der Druck bei gleichem Zug → am normal geformten Unterschenkel entsteht das Gefälle von selbst; nicht zuerst stark, dann schwach wickeln.", s: "S. 5–6" },
    { k: "Wirkung", f: "Nenne Wirkungen der Kompressionstherapie.",
      a: "Rückfluss bis in tiefe Gefäße ↑, Venendruck ↓, Thromboseprophylaxe, Gerinnselabbau, Abtransport von Schlackenstoffen, Schließen dilatierter Klappen, Ödemreduktion, Lymphdrainage ↑, rasche Entstauung, Ulcusabheilung.", s: "S. 6" },
    { k: "Phasen", f: "Phasen der Kompressionstherapie bei CVI? ★",
      a: "1. Entstauung: Ödemreduktion → PKV (Kurzzug, Mehrkomponenten) oder MAK.\n2. Erhaltung: stabiler Zustand → MKS oder Ulcus-Strumpfsysteme.\n3. Prävention: nach Abheilung → MKS, meist KKL II.", s: "S. 6" },
    { k: "Risiken", f: "Risiken und Nebenwirkungen der Kompression?",
      a: "Unsachgemäß (zu hoher Druck, Strangulation): Schmerzen, Gewebeschäden, Nekrosen, Nervenschäden an Knochenvorsprüngen (Fibulaköpfchen). MKS falsch gehandhabt: Hautnekrosen, Nervenschäden. Empfindliche Haut: Juckreiz, Schuppung, Entzündung → Hautpflege.", s: "S. 7" },
    { k: "Methoden", f: "Welche vier Methoden gibt es?",
      a: "PKV (Binden; Entstauung) · MKS (Strümpfe; Erhaltung, Prävention) · MAK (Klett-/Wrap-Systeme; Entstauung) · IPK (apparativ, nur unterstützend, kein Ersatz).", s: "S. 7" },
    { k: "PKV", f: "Wechsel- vs. Dauerverband?",
      a: "Wechselverband: täglich neu, optimal über Nacht belassen.\nDauerverband (z. B. Mehrkomponentensystem): mehrere Tage, auch nachts. PKV schließt Fuß und Sprunggelenk ein, bis Fibulaköpfchen oder proximalen Oberschenkel.", s: "S. 8" },
    { k: "PKV", f: "Kurzzug- vs. Langzugbinde? ★",
      a: "Kurzzug (40–90 %): hoher Arbeits-, niedriger Ruhedruck; Kompression durch Bewegung; für Mobile. Langzug (100–200 %): hoher Ruhe-, niedriger Arbeitsdruck; Kompression geht vom Material aus; Gefahr von Einschnürungen bei Immobilen.", s: "S. 8–9, handschr. S. 2–3", h: true },
    { k: "PKV", f: "Was ist bei Kurzzugbinden zu beachten?",
      a: "Ruhedruck 40–60 mmHg, sinkt rasch (verrutschen, verlieren Form); in 24 h deutlich ↓ → in der Entstauung ggf. täglich erneuern. Täglich waschen, 15–20× bis 95 °C, bügeln, unter leichtem Zug aufrollen; ausgeleierte Binden austauschen.", s: "S. 8–9" },
    { k: "PKV", f: "Zinkleimbinden – Eigenschaften?",
      a: "Nahezu steif (< 10 %); sehr hoher Arbeits-, niedriger Ruhedruck; feucht angelegt, härten aus; schnelle Entstauung; Sprunggelenkspumpe eingeschränkt; kein Exsudat-Aufnahmevermögen → häufiger Wechsel (Mazeration, Geruch).", s: "S. 9" },
    { k: "PKV", f: "Vor- und Nachteile von Mehrkomponentensystemen?",
      a: "2–4 Komponenten (Polster, Kurz-, Langzug, kohäsiv); bei Ulcus cruris venosum effektiver und einfacher als Kurzzug; halten Druck bis zum Wechsel (bis 7 Tage).\nNachteile: Einmalprodukt, voluminös (Schuhe), höhere Kosten.", s: "S. 9–10" },
    { k: "PKV", f: "Wovon hängt die Druckbeständigkeit eines Verbandes ab?",
      a: "Bindenvordehnung, Bindentyp, -breite, -elastizität, Zugkraftabfall (Relaxation), Anzahl der Touren, Bandagierungstechnik, Feuchtigkeitsaufnahme, Pflege, Extremitätenzirkumferenz und -konfiguration.", s: "S. 10" },
    { k: "PKV", f: "ICC-Druckbereiche und Messpunkt?",
      a: "Leicht < 20 · mittelstark ≥ 20–40 · stark ≥ 40–60 · sehr stark > 60 mmHg. Messung mit elektronischem Gerät ca. 10 cm über dem Innenknöchel. Ulcus cruris venosum braucht ≥ 40–60 mmHg.", s: "S. 10–11" },
    { k: "PKV", f: "Wie schnell fällt der Druck unter Kurzzugbinden ab?",
      a: "Innerhalb der ersten 30 Minuten deutlich; nach 7 Stunden ca. 50 %. Merksatz: Kompression ist nur erfolgreich, wenn ein adäquater Druck über eine angemessene Zeit wirkt.", s: "S. 11" },
    { k: "Bandagierung", f: "Grundprinzipien des PKV?",
      a: "Mit Überlappung · Sprunggelenk rechtwinklig (Dorsalflexion) · Unterschenkel bis Fibulaköpfchen, Oberschenkel bis proximal · Druck distal → proximal abnehmend · keine Druckstellen, Schnürfurchen, Schmerzen · Material/Technik nach Indikation.", s: "S. 12" },
    { k: "Bandagierung", f: "Was ist bei jeder Bandagierung zu beachten?",
      a: "Hautschutz (Schlauchverband), Unterpolsterung, Pelotten, keine Fixierklammern am Menschen, passende Bindenbreite, mind. 2 Binden, Fuß in Funktionsstellung, Rolle unter Zug direkt auf der Haut, nicht zu straff/locker, bei Vorfußödem Zehen mitkomprimieren.", s: "S. 12" },
    { k: "Bandagierung", f: "Was sind Pelotten – wofür Polsterung?",
      a: "Pelotten = nierenförmige Schaumstoffpolster; gleichen anatomische Unebenheiten (z. B. hinter dem Knöchel) aus. Unterpolsterung mit Watte/Schaumstoff beugt Druckulzera, Hautnekrosen, Nervenschäden, Blasen vor.", s: "S. 13" },
    { k: "Bandagierung", f: "Ablauf beim Anlegen eines PKV am Bein?",
      a: "Schlauchverband (links gewendet) bis zwei Finger unter die Kniekehle, Unterpolsterung, Beginn unterhalb des Großzehengrundgelenks mit 2 Kreistouren, Fuß rechtwinklig, Ferse immer einbinden, Fehlstellung korrigierend wickeln; danach 20–30 min bewegen.", s: "S. 13–14" },
    { k: "Bandagierung", f: "Sigg vs. Pütter?",
      a: "Sigg: 1. Kurzzugbinde ab Großzehengrundgelenk in 1 cm überlappenden Touren bis untere Wade; 2. in Achtertouren bis unter die Kniekehle.\nPütter: Gegenwickeltechnik, 2 Binden gegenläufig. Keine Technik ist nachweislich überlegen.", s: "S. 14" },
    { k: "Bandagierung", f: "Wie wird der Erfolg kontrolliert?",
      a: "Einmal wöchentlich Vorfuß-, Knöchel- und Wadenumfang an der dicksten Stelle messen. Keine Entstauung → ineffiziente Versorgung oder eingeschränkte Venenpumpe.", s: "S. 15" },
    { k: "MKS", f: "Wann und wie werden MKS getragen?",
      a: "Langzeit-/Dauerbehandlung nach Ödemreduktion bzw. Ulcusabheilung, danach lebenslang als Rezidivprophylaxe. Morgens vor dem Aufstehen an, abends aus; Hautpflege abends. Höchster Druck in der Fesselgegend.", s: "S. 15" },
    { k: "MKS", f: "Welche Strumpflängen gibt es?",
      a: "Wadenstrumpf A-D · Halbschenkelstrumpf A-F · Schenkelstrumpf A-G · Strumpfhose A-T; je 3 Längen. CVI/UCV meist Wadenstrumpf. Merksatz: So lang wie nötig, so kurz wie möglich!", s: "S. 15–16" },
    { k: "MKS", f: "Flach- vs. rundgestrickt?",
      a: "Flach (mit Naht): hohe Stiffness, kein Einschneiden in Falten, individuelle Formen (Lymphödem), immer Maßanfertigung.\nRund (nahtlos): geringe Stiffness, kann in Gewebefalten einschneiden, begrenzte Formgebung.", s: "S. 16–17" },
    { k: "MKS", f: "Nenne die Kompressionsklassen.",
      a: "I leicht 18–21 mmHg · II mittel 23–32 · III kräftig 34–46 · IV sehr kräftig ≥ 49 mmHg. Genormt nach Ruhedruck im Fesselbereich; international uneinheitlich.", s: "S. 17" },
    { k: "MKS", f: "Welche KKL bei welcher Indikation?",
      a: "I: Thromboseprophylaxe, Varikose ohne Ödem.\nII: Varikose mit Ödem, Rezidivprophylaxe nach UCV, TVT, PTS, Lymphödem I, Lipödem.\nIII: florides UCV, Lymphödem III.\nIV: irreversibles Lymphödem.", s: "S. 18" },
    { k: "MKS", f: "Wie wird für MKS gemessen – und wie Adhärenz gefördert?",
      a: "Morgens am entstauten Bein, bei Adipösen im Stehen, jedes Bein separat. Etwa die Hälfte der MKS wird nicht getragen → Aufklärung und niedrigste wirksame KKL.", s: "S. 17" },
    { k: "MKS", f: "Was tun, wenn KKL III/IV nicht selbst angezogen werden kann?",
      a: "Prüfen: zwei Strümpfe niedrigerer KKL übereinander (KKL addieren sich) oder Einzelelemente (Vorfußkappe, Kniestrumpf, Capri, Radlerhose); Reißverschlüsse; An-/Ausziehhilfen.", s: "S. 18" },
    { k: "MKS", f: "Hinweise zum Anziehen und zur Hautpflege?",
      a: "Faltenfrei anziehen; keine Uhren/Ringe; kurze, gefeilte Finger- und Zehennägel; Hornhaut entfernen; intensive Hautpflege mit ureahaltigen Produkten abends nach dem Ablegen.", s: "S. 18–19" },
    { k: "MKS", f: "Welche An- und Ausziehhilfen gibt es?",
      a: "Gleiter (Ballonseide, klein, faltbar; Beweglichkeit bis zum Vorfuß nötig) und Gestelle (Sitzen/Stehen, sperrig) sowie genoppte Gummihandschuhe.\nIndikationen: Lähmungen, Kraftminderung, Arthrose/Rheuma, Adipositas permagna, Versteifungen.", s: "S. 19" },
    { k: "MKS", f: "Wie werden MKS gepflegt?",
      a: "Täglich waschen; Handwäsche oder Feinwäsche 30–40 °C im Netz; liegend trocknen. Ungeeignet: Vollwaschmittel, Weichspüler, Chlor, chemische Reinigung, Auswringen, Bügeln, Sonne, Heizung, Stopfen.", s: "S. 20" },
    { k: "MKS", f: "Was sind Ulcus-Strumpfsysteme?",
      a: "Zweilagig: dünner Unterziehstrumpf (auch nachts, fixiert Wundauflage) + kräftiger Überstrumpf; Stiffness ↑, Ruhedruck ≈ KKL III. Gut geeignet in der stabilen Heilungsphase des Ulcus cruris venosum.", s: "S. 20" },
    { k: "MAK", f: "Was kennzeichnet MAK?",
      a: "Klett-/Wrap-Bandagen; Druck einstellbar (auch von Betroffenen), z. T. mit Messscheibe; jederzeit nachjustierbar bei Ödemreduktion; hoher Arbeits-, niedriger Ruhedruck; Entstauungsphase; bis zu 6 Monate nutzbar; noch kein Klassifikationssystem.", s: "S. 20–21" },
    { k: "IPK", f: "Was ist IPK und wie wird sie angewendet?",
      a: "Apparative Wechseldrücke in Luftkammern, sequenziell distal → proximal; simuliert die Muskelpumpe; v. a. für teil-/immobile Menschen; Hilfsmittel PG 17; ersetzt weder Lymphdrainage noch Kompression; 30–60 min, 1–3× täglich.", s: "S. 21–22" },
    { k: "IPK", f: "Indikationen der IPK (soll/sollte)?",
      a: "Soll: Thromboembolieprophylaxe, wenn keine medikamentöse Prophylaxe möglich.\nSollte: therapieresistentes UCV, CVI C4b–C6 (CEAP), Lymphödem additiv, pAVK mit stabiler Claudicatio/kritischer Ischämie ohne Alternativen.", s: "S. 21" },
    { k: "IPK", f: "Kontraindikationen der IPK?",
      a: "Dekompensierte Herzinsuffizienz, ausgedehnte Thrombophlebitis/Thrombose(-verdacht), akutes Erysipel, akute Phlegmone, Kompartmentsyndrom, schwere Hypertonie, okkludierende Lymphabstromprozesse, Weichteiltrauma, ausgeprägte Neuropathie, blasenbildende Dermatosen.", s: "S. 22" },
    { k: "Bewegung", f: "Warum ist Bewegung Teil der Kompressionstherapie?",
      a: "Eigenbewegung ist stets Bestandteil einer effektiven Kompressionstherapie. Wirkung nur bei Sprunggelenksbeweglichkeit und normalem Abrollen. Übungen: Fußkreisen, Fußwippen, Zehenkrallen; Gehtraining, Nordic Walking; Bettlägerige: Drainagebeutel.", s: "S. 24" },
    { k: "Übungen", f: "Welche Binden für mobile Menschen mit UCV in der Entstauung? (Übung I)",
      a: "Kurzzugbinden und Mehrkomponentensysteme (hoher Arbeits-, niedriger Ruhedruck).\nMehrkomponenten: effektiver, einfacher, Druck bis zum Wechsel, aber voluminös. Kurzzug: Druck sinkt rasch, verrutscht, aber wiederverwendbar.", s: "S. 30" },
    { k: "Übungen", f: "Erhaltungsphase bei stabilem UCV – was beraten? (Übung I)",
      a: "Kompressionsstrümpfe oder Ulcus-Strumpfsysteme.\nBeratung: Kompression bleibt auch nach Abheilung nötig – Gefäße dehnen sich wieder, Klappen schließen nicht → Rezidive; danach meist KKL II, lebenslang.", s: "S. 30" },
    { k: "Übungen", f: "Phasengerechte Kompression bei UCV? (Übung II)",
      a: "Entstauung: Kurzzug, Mehrkomponenten, MAK – ja; Strümpfe nein.\nErhaltung: Kompressionsstrümpfe und Ulcus-Strumpfsysteme – ja.\nPrävention: nur Kompressionsstrümpfe. Beim Lymphödem: Entstauung und Erhaltung analog.", s: "S. 30" },
    { k: "Leitlinie", f: "Was gehört auf das Rezept für MKS?",
      a: "Anzahl, Strumpflänge (A-D, A-F, A-G, A-T), KKL, Indikation/Diagnose, Hilfsmittelnummer, ggf. Maßanfertigung, Fußspitze offen/geschlossen; ggf. Zusätze, flachgestrickt, Stiffness, Befestigung, Wechselversorgung.", s: "S. 26" },
    { k: "Leitlinie", f: "Nutzungsdauer von MKS und Kompression nach TVT?",
      a: "MKS: in der Regel 6 Monate; Erstversorgung mit Zweitverordnung (Hygiene). Binden mind. 15× waschbar. TVT: sofort Kompression beginnen und mind. 6 Monate fortsetzen, dann nach PTS-Zeichen.", s: "S. 27–29" },
    { k: "Leitlinie", f: "Wann ist die Kompression sofort zu entfernen?",
      a: "Blau- oder Weißfärbung der Zehen, Missempfindungen/Taubheit, zunehmende Schmerzen, Kurzatmigkeit, Schweißausbrüche, akute Bewegungseinschränkungen → Entfernen und klinischen Befund kontrollieren.", s: "S. 29" }
  ],

  quiz: [
    { f: "Wann ist Kompressionstherapie laut Heft grundsätzlich indiziert?",
      o: ["Bei allen venösen und lymphatischen Erkrankungen, die Ödeme der Beine nach sich ziehen", "Ausschließlich bei arteriellen Durchblutungsstörungen", "Nur bei dekompensierter Herzinsuffizienz", "Nur unmittelbar nach Operationen"],
      e: "Indikationsgruppen (nach Rabe 2018): chronische Venenkrankheiten, thromboembolische Venenkrankheiten, Ödeme, andere (z. B. Z. n. Verbrennungen, Narbenbehandlung).", s: "S. 3" },
    { f: "Ab welchem Stadium ist das Lipödem laut Heft eine Indikation für Kompression?",
      o: ["Ab Stadium II", "Das Lipödem ist eine absolute Kontraindikation", "Nur im Stadium 0", "Gar nicht – Kompression wirkt nur bei Venenleiden"],
      e: "Unter „Ödeme“: Lymphödem, Lipödem ab Stadium II, Stauung bei Immobilität, medikamentös bedingte Ödeme, Schwangerschaft u. a.", s: "S. 3" },
    { f: "Welche zählen zu den absoluten Kontraindikationen der Kompressionstherapie?",
      o: ["Dekompensierte Herzinsuffizienz (NYHA III + IV)", "Septische Phlebitis", "Ulcus cruris venosum", "Postthrombotisches Syndrom"], r: 2,
      e: "Absolute KI: fortgeschrittene pAVK, dekompensierte Herzinsuffizienz (NYHA III + IV), septische Phlebitis, Phlegmasia coerulea dolens. UCV und PTS sind Indikationen.", s: "S. 3–4" },
    { f: "Welcher ABPI-Wert kennzeichnet laut Heft eine fortgeschrittene pAVK als Kontraindikation?",
      o: ["ABPI < 0,5", "ABPI > 0,5", "ABPI > 1,0", "ABPI zwischen 0,9 und 1,3"],
      e: "Fortgeschrittene pAVK, wenn einer zutrifft: ABPI < 0,5 · Knöchelarteriendruck < 60 mmHg · Zehendruck < 30 mmHg oder TcPO₂ < 20 mmHg am Fußrücken.", s: "S. 4" },
    { f: "Welche Messwerte sprechen laut Heft für eine fortgeschrittene pAVK (Kontraindikation)?",
      o: ["Knöchelarteriendruck < 60 mmHg", "Zehendruck < 30 mmHg", "Knöchelarteriendruck > 100 mmHg", "TcPO₂ > 40 mmHg am Fußrücken"], r: 2,
      e: "ABPI < 0,5 · Knöchelarteriendruck < 60 mmHg · Zehendruck < 30 mmHg oder TcPO₂ < 20 mmHg am Fußrücken; mit unelastischem Material ggf. noch bei 50–60 mmHg unter engmaschiger Kontrolle.", s: "S. 4" },
    { f: "Ulcus cruris mixtum – wovon hängt laut handschriftlicher Notiz ab, ob komprimiert wird?",
      o: ["Vom Gefäßstatus (ABI-Messung); unter 0,5 keine Kompression", "Kompression ist bei gemischtem Ulcus immer verboten", "Allein von der Exsudatmenge", "Vom Alter der Wunde"],
      e: "Handschr. („Prüfung“): ABI-Messung (RR an beiden Armen und beiden Beinen); < 0,5 kritischer Wert → keine Kompressionstherapie. Laut Druck ist das gemischte Ulcus Indikation unter Beachtung der KI.", s: "S. 2–4", h: true },
    { f: "Welche Faktoren erfordern laut Heft eine interdisziplinäre Nutzen-Risiko-Abwägung (Risikofaktoren, keine absolute KI)?",
      o: ["Ausgeprägte nässende Dermatosen", "Primär chronische Polyarthritis", "Phlegmasia coerulea dolens", "Dekompensierte Herzinsuffizienz (NYHA III + IV)"], r: 2,
      e: "Risikofaktoren: nässende Dermatosen, Materialunverträglichkeit, schwere Sensibilitätsstörungen, fortgeschrittene periphere Neuropathie, primär chronische Polyarthritis. Phlegmasia coerulea dolens und dekompensierte Herzinsuffizienz sind absolute KI.", s: "S. 4" },
    { f: "Wie wirkt Kompression auf die Venen?",
      o: ["Gefäßdurchmesser sinkt, Fließgeschwindigkeit zum Herzen fast verdoppelt", "Gefäßdurchmesser steigt, Blut fließt langsamer", "Transmuraler Druck steigt, Venenklappen öffnen sich", "Sie wirkt nur bei Bewegung, nie in Ruhe"],
      e: "Gefäßdurchmesser ↓ → Fließgeschwindigkeit fast verdoppelt, transmuraler Druck ↓; dilatierte (nicht zerstörte) Klappen schließen wieder – bereits in Ruhe durch den Ruhedruck.", s: "S. 4" },
    { f: "Was beschreibt der Ruhedruck?",
      o: ["Den Anlagedruck in Ruhe im Liegen; er beschreibt die Kompressionsstärke", "Den Widerstand des Verbandes gegen die Muskelausdehnung beim Gehen", "Den Druck in den Luftkammern der IPK", "Einen Druck, der durch Bewegung und Ödemreduktion ansteigt"],
      e: "Ruhedruck = Anlagedruck; nimmt durch Bewegung und Ödemreduktion innerhalb weniger Stunden ab. Der Widerstand gegen die Muskelausdehnung ist der Arbeitsdruck.", s: "S. 5" },
    { f: "Wann ist der Arbeitsdruck eines Verbandes höher?",
      o: ["Je weniger dehnbar das Material ist", "Je dehnbarer das Material ist", "Je länger der Patient liegt", "Je stärker die Binde vorgedehnt im Schrank lagert"],
      e: "Arbeitsdruck entsteht beim Aufstehen und bei Muskelaktivität durch den Widerstand des Verbandes gegen die Muskelausdehnung – umso höher, je weniger dehnbar das Material.", s: "S. 5" },
    { f: "Welches Material zeigt laut Heft den stärksten Druckanstieg bei Umfangszunahme (Stiffness)?",
      o: ["Zinkleimbinde", "Langzugbinde", "Rundgestrickter Kompressionsstrumpf", "Baumwoll-Schlauchverband"],
      e: "Stiffness = wie stark das Material der Umfangszunahme widersteht: Langzug → geringer, Zinkleim → sehr hoher Druckanstieg; rundgestrickte Strümpfe haben geringe Stiffness.", s: "S. 5, 16" },
    { f: "Welche Muskelpumpen nennt die handschriftliche Prüfungsnotiz?",
      o: ["Wadenmuskelpumpe", "Fußsohlenpumpe", "Ellenbogenpumpe", "Schulterpumpe"], r: 2,
      e: "Handschr. („Prüfung“): Fußsohlen-, Sprunggelenks-, Wadenmuskel-, Kniekehlen-, Leisten-/Oberschenkelpumpe. Laut Druck steigert Kompression v. a. Sprunggelenk- und Wadenmuskelpumpe.", s: "S. 5", h: true },
    { f: "Wie soll der Kompressionsdruck am Bein verlaufen?",
      o: ["Von distal nach proximal abnehmend", "Von distal nach proximal zunehmend", "Überall gleich hoch, unabhängig vom Umfang", "Am Knöchel schwach, zum Knie hin stark"],
      e: "Laplace: größerer Umfang → geringerer Druck bei gleichem Zug; am normal geformten Bein entsteht das Gefälle von selbst. Nicht zuerst stark und zum Knie hin schwächer wickeln.", s: "S. 5–6" },
    { f: "In welcher Reihenfolge verlaufen die Phasen der Kompressionstherapie bei CVI?",
      o: ["Entstauung – Erhaltung – Prävention", "Prävention – Entstauung – Erhaltung", "Erhaltung – Entstauung – Prävention", "Entstauung – Prävention – Erhaltung"],
      e: "1 Entstauungsphase (PKV oder MAK) · 2 Erhaltungsphase (MKS oder Ulcus-Strumpfsysteme) · 3 Prävention (MKS, i. d. R. KKL II).", s: "S. 6" },
    { f: "Welche Mittel sind in der Entstauungsphase bei Ulcus cruris venosum geeignet (Übung II)?",
      o: ["Kurzzugbinden bzw. Mehrkomponentensysteme", "Medizinische adaptive Kompressionssysteme (MAK)", "Medizinische Kompressionsstrümpfe", "Ulcus-Strumpfsysteme"], r: 2,
      e: "Entstauung: Kurzzug, Mehrkomponenten, MAK – ja; Kompressionsstrumpf und Ulcus-Strumpf – nein (Lösung Übung II).", s: "S. 6, 30" },
    { f: "Womit wird nach Abheilung eines Ulcus cruris venosum Rezidiven vorgebeugt?",
      o: ["Mit medizinischen Kompressionsstrümpfen, meist KKL II, lebenslang", "Mit Zinkleimverbänden für 7 Tage", "Gar nicht mehr – nach Abheilung ist keine Kompression nötig", "Ausschließlich mit IPK als Ersatz der Kompression"],
      e: "Gefäße dehnen sich wieder aus und Klappen schließen nicht → Rezidive; daher nach Abheilung MKS meist KKL II lebenslang.", s: "S. 6, 15, 30" },
    { f: "Welche Rolle hat die intermittierende pneumatische Kompression (IPK)?",
      o: ["Nur unterstützend – sie ersetzt weder Lymphdrainage noch Kompression", "Sie ersetzt den Kompressionsverband vollständig", "Sie ist die Standardmethode der Erhaltungsphase", "Sie ist vor allem für mobile, sportliche Menschen gedacht"],
      e: "IPK: apparative Wechseldrücke in Luftkammern, sequenziell distal → proximal; v. a. für teil-/immobile Menschen; 30–60 min, 1–3× täglich.", s: "S. 7, 21–23" },
    { f: "Welche Dehnbarkeit hat eine Kurzzugbinde?",
      o: ["40–90 %", "100–200 %", "< 10 %", "250–300 %"],
      e: "Kurzzug 40–90 % · Langzug 100–200 % · Zinkleim < 10 %.", s: "S. 8–9" },
    { f: "Wie unterscheiden sich Kurz- und Langzugbinde im Druckverhalten?",
      o: ["Kurzzug: hoher Arbeits-, niedriger Ruhedruck; Langzug: hoher Ruhe-, niedriger Arbeitsdruck", "Kurzzug: hoher Ruhe-, niedriger Arbeitsdruck; Langzug: hoher Arbeits-, niedriger Ruhedruck", "Beide haben denselben Ruhe- und Arbeitsdruck", "Langzug hat sowohl hohen Ruhe- als auch hohen Arbeitsdruck"],
      e: "Handschr. „Prüfung!“: Kurzzug wenig dehnbar, Kompression durch Bewegung; Langzug stark dehnbar, Kompression geht vom Bindenmaterial aus.", s: "S. 8–9; handschr. S. 3" },
    { f: "Warum ist die Langzugbinde bei immobilen Menschen problematisch?",
      o: ["Bei Immobilen drohen Einschnürungen mit Thromboserisiko", "Weil ihr Arbeitsdruck zu hoch ist", "Weil sie feucht angelegt wird und aushärtet", "Weil sie kein Polstermaterial verträgt"],
      e: "Langzug passt sich an und hält den Druck über Tage; bei Immobilen Einschnürungen → Thromboserisiko. Allein für starke Kompression nicht ratsam.", s: "S. 9" },
    { f: "Welche Aussagen zur Zinkleimbinde treffen laut Heft zu?",
      o: ["Sie wird feucht angelegt und härtet aus", "Sie nimmt kein Exsudat auf – daher häufigerer Wechsel", "Ihre Dehnbarkeit liegt bei 100–200 %", "Sie hat einen hohen Ruhe- und niedrigen Arbeitsdruck"], r: 2,
      e: "Zinkleim: < 10 % dehnbar, sehr hoher Arbeits-, niedriger Ruhedruck; schnelle Entstauung; Sprunggelenk eingeschränkt; Mazeration/Geruch durch fehlende Exsudataufnahme.", s: "S. 9" },
    { f: "Wie lange kann ein Mehrkomponentensystem liegen bleiben?",
      o: ["Bis zu 7 Tage", "Maximal 2 Stunden", "Bis zu 6 Monate", "Es muss täglich erneuert werden"],
      e: "Mehrkomponentensysteme halten den Anlagedruck bis zum nächsten Wechsel (bis 7 Tage); Einmalprodukt, voluminös, höhere Kosten. Bis zu 6 Monate nutzbar sind MAK.", s: "S. 9–10, 20–21" },
    { f: "Welchen Druck braucht ein Ulcus cruris venosum (ICC-Bereich)?",
      o: ["Stark: ≥ 40–60 mmHg", "Leicht: < 20 mmHg", "Mittelstark: ≥ 20–40 mmHg", "Kein Druck – Kompression ist kontraindiziert"],
      e: "ICC: leicht < 20 · mittelstark ≥ 20–40 · stark ≥ 40–60 · sehr stark > 60 mmHg. UCV braucht starken Druck.", s: "S. 10–11" },
    { f: "Wo wird der Druck unter einer Bandagierung gemessen?",
      o: ["Ca. 10 cm über dem Innenknöchel", "In der Kniekehle", "Am Großzehengrundgelenk", "Am Fibulaköpfchen"],
      e: "Messung mit elektronischem Druckmessgerät ca. 10 cm über dem Innenknöchel.", s: "S. 11" },
    { f: "Wie stark fällt der Druck unter Kurzzugbinden nach 7 Stunden ab?",
      o: ["Auf ca. 50 %", "Gar nicht", "Er steigt auf das Doppelte", "Auf ca. 95 %"],
      e: "Deutlicher Abfall schon in den ersten 30 min, nach 7 h ca. 50 %. Kompression ist nur erfolgreich, wenn ein adäquater Druck über eine angemessene Zeit wirkt.", s: "S. 11" },
    { f: "Wo beginnt das Anlegen eines PKV am Bein?",
      o: ["Unterhalb des Großzehengrundgelenks mit 2 Kreistouren; die Ferse wird immer eingebunden", "Am Knie, dann nach unten wickeln", "An der Ferse, die Ferse bleibt frei", "Am Fibulaköpfchen mit Achtertouren"],
      e: "Beginn unterhalb des Großzehengrundgelenks, 2 Kreistouren, Ferse immer einbinden, Fehlstellungen korrigierend wickeln; danach 20–30 min bewegen.", s: "S. 13–14" },
    { f: "Womit wird ein Kompressionsverband am Menschen befestigt?",
      o: ["Mit Pflasterstreifen", "Mit Fixierklammern („Schwiegermüttern“)", "Mit Sicherheitsnadeln", "Mit einem Knoten der Binde"],
      e: "Keine Fixierklammern („Schwiegermütter“) am Menschen – Pflasterstreifen verwenden.", s: "S. 12" },
    { f: "Was kennzeichnet die Pütter-Technik?",
      o: ["Gegenwickeltechnik: mind. 2 Kurzzugbinden gegenläufig gewickelt", "Eine einzige Langzugbinde in Kreistouren", "Feucht angelegte Zinkleimbinde", "Klett-/Wrap-Bandage mit Messscheibe"],
      e: "Pütter: Kurzzugbinden gegenläufig (innen→außen, außen→innen); Sigg: 1. Binde ab Großzehengrundgelenk in 1 cm überlappenden Touren, 2. Binde in Achtertouren. Keine Technik ist nachweislich überlegen.", s: "S. 14" },
    { f: "Wie wird der Erfolg der Kompression kontrolliert?",
      o: ["Wöchentlich Vorfuß-, Knöchel- und Wadenumfang messen", "Nur durch Befragen nach dem Wohlbefinden", "Einmal jährlich per Röntgen", "Gar nicht – die Wirkung ist immer gleich"],
      e: "Einmal wöchentlich Vorfuß-, Knöchel- und Wadenumfang an der dicksten Stelle messen; keine Entstauung → ineffiziente Versorgung oder eingeschränkte Venenpumpe.", s: "S. 14–15" },
    { f: "Wann werden medizinische Kompressionsstrümpfe an- und ausgezogen?",
      o: ["Morgens vor dem Aufstehen an, abends aus", "Abends an, morgens aus", "Nur nachts", "Nur während des Sports"],
      e: "Langzeit-/Dauerbehandlung; Hautpflege abends nach dem Ablegen; höchster Druck in der Fesselgegend.", s: "S. 15" },
    { f: "Welchen Druckbereich hat die Kompressionsklasse II?",
      o: ["23–32 mmHg", "18–21 mmHg", "34–46 mmHg", "≥ 49 mmHg"],
      e: "KKL I 18–21 · II 23–32 · III 34–46 · IV ≥ 49 mmHg; genormt nach dem Ruhedruck im Fesselbereich.", s: "S. 17–18" },
    { f: "Für welche Indikation ist laut Orientierungshilfe KKL III vorgesehen?",
      o: ["Florides Ulcus cruris venosum", "Thromboseprophylaxe", "Varikose ohne Ödem", "Schwere- und Müdigkeitsgefühl"],
      e: "KKL III: florides UCV, Lymphödem Stadium III, Angiodysplasie. Thromboseprophylaxe, Varikose ohne Ödem und Schweregefühl → KKL I.", s: "S. 18" },
    { f: "Welche Eigenschaften hat ein flachgestrickter Kompressionsstrumpf?",
      o: ["Hohe Stiffness, schneidet nicht in Falten ein, immer Maßanfertigung", "Geringe Stiffness, nahtlos", "Kann in Gewebefalten einschneiden", "Nur als Konfektionsware erhältlich"],
      e: "Flachgestrickt (mit Naht): hohe Stiffness, individuelle Formen (Lymphödem), immer nach Maß. Rundgestrickt (nahtlos): geringe Stiffness, kann in Falten einschneiden.", s: "S. 16" },
    { f: "Wann und wie wird für einen MKS gemessen?",
      o: ["Morgens am entstauten Bein, jedes Bein separat", "Abends am gestauten Bein", "Nur an einem Bein, das andere wird übernommen", "Nach dem Sport am geschwollenen Bein"],
      e: "Vermessung morgens am entstauten Bein, bei Adipösen im Stehen, jedes Bein separat.", s: "S. 17" },
    { f: "Was hilft, wenn ein Strumpf der KKL III/IV nicht selbst angezogen werden kann?",
      o: ["Zwei Strümpfe niedrigerer KKL übereinander – die KKL addieren sich", "Ganz auf Kompression verzichten", "Den Strumpf eine Nummer kleiner wählen", "Den Strumpf vor dem Anziehen bügeln"],
      e: "Niedrigere KKL übereinander oder Einzelelemente; Reißverschlüsse; An-/Ausziehhilfen (Gleiter, Gestelle, genoppte Gummihandschuhe).", s: "S. 18–19" },
    { f: "Was ist bei der Pflege von MKS geeignet?",
      o: ["Handwäsche oder Feinwäsche bei 30–40 °C im Netz, liegend trocknen", "Waschen mit Weichspüler", "Trocknen auf der Heizung", "Bügeln nach dem Waschen"],
      e: "Täglich waschen; ungeeignet: Vollwaschmittel, Weichspüler, Chlor, chemische Reinigung, Auswringen, Bügeln, Sonne, Heizung, Stopfen.", s: "S. 20" },
    { f: "Welche Aussagen zu Ulcus-Strumpfsystemen treffen zu?",
      o: ["Dünner Unterziehstrumpf (auch nachts) plus kräftiger Überstrumpf", "Ruhedruck etwa wie KKL III", "Sie sind das Mittel der Wahl in der Entstauungsphase", "Sie bestehen aus feucht angelegtem Zinkleim"], r: 2,
      e: "Wundauflagen fixierbar, Stiffness ↑, Ruhedruck ≈ KKL III; geeignet in der stabilen Heilungsphase (Erhaltung), nicht in der Entstauung.", s: "S. 20, 30" },
    { f: "Was kennzeichnet medizinische adaptive Kompressionssysteme (MAK)?",
      o: ["Druck per Klett einstellbar und bei Ödemreduktion jederzeit nachjustierbar", "Hoher Ruhe-, niedriger Arbeitsdruck wie Langzug", "Einmalprodukt für höchstens 7 Tage", "Apparative Wechseldrücke in Luftkammern"],
      e: "MAK: Klett-/Wrap-Bandagen, auch von Betroffenen einstellbar; hoher Arbeits-, niedriger Ruhedruck (wie Kurzzug); Entstauungsphase; bis zu 6 Monate nutzbar.", s: "S. 20–21" },
    { f: "Welche sind Kontraindikationen der IPK?",
      o: ["Dekompensierte Herzinsuffizienz", "Akutes Erysipel", "Therapieresistentes Ulcus cruris venosum", "Posttraumatische Ödeme"], r: 2,
      e: "Therapieresistentes UCV ist eine „sollte“-Indikation, posttraumatische Ödeme eine „kann“-Indikation der IPK.", s: "S. 21–22" },
    { f: "Wie wird die IPK angewendet?",
      o: ["30–60 Minuten, 1–3× täglich", "Ununterbrochen über 7 Tage", "Einmal wöchentlich für 5 Minuten", "Nur nachts über 12 Stunden"],
      e: "Sequenziell distal → proximal; simuliert die Muskelpumpe; Hilfsmittel Produktgruppe 17.", s: "S. 21–22" },
    { f: "Bei welchen Zeichen ist die Kompression sofort zu entfernen?",
      o: ["Blau- oder Weißfärbung der Zehen", "Kurzatmigkeit", "Abnahme des Wadenumfangs", "Rückgang des Ödems"], r: 2,
      e: "Sofort entfernen und kontrollieren bei Blau-/Weißfärbung der Zehen, Missempfindungen/Taubheit, zunehmenden Schmerzen, Kurzatmigkeit, Schweißausbrüchen, akuten Bewegungseinschränkungen. Ödemrückgang ist das Therapieziel.", s: "S. 29" },
    { f: "Was empfiehlt die Leitlinie bei tiefer Venenthrombose (TVT)?",
      o: ["Sofort Kompression, mindestens 6 Monate fortsetzen", "Kompression erst nach 6 Monaten beginnen", "Keine Kompression bei TVT", "Kompression nur für 1 Woche"],
      e: "Bei TVT sofort Kompression, mind. 6 Monate fortsetzen. MKS-Nutzungsdauer in der Regel 6 Monate, Erstversorgung mit Zweitverordnung.", s: "S. 27–29" },
    { f: "Warum gehört Bewegung zur Kompressionstherapie?",
      o: ["Die Wirkung setzt Sprunggelenksbeweglichkeit und normales Abrollen voraus", "Bewegung ist unter Kompression verboten", "Bewegung ersetzt die Kompression", "Nur Bettruhe sichert den Therapieerfolg"],
      e: "Eigenbewegung ist stets Bestandteil einer effektiven Kompressionstherapie; Übungen: Fußkreisen, Fußwippen, Zehenkrallen, Gehtraining, Nordic Walking.", s: "S. 24" }
  ],

  zusammenfassung: `
<p class="merke">„Kompression ist nicht alles, aber ohne Kompression kann nichts erreicht werden!“ (Kerstin Protz, S. 2) · Grundlegende, nebenwirkungsarme Basis bei chronischen Venenerkrankungen; unerlässlich bei venösen Ödemen und Ulcus cruris venosum. Eigennamen von Techniken: Pütter, Sigg, Fischer, Unna (S. 2).</p>
<p class="hand">Handschr. Prüfungsthemen (S. 2): Indikation, Kontraindikation, Wirkungsweise, Phasen (Entstauung …).</p>

<h3>1. Indikationen <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 3</span></h3>
<p>Bei allen venösen und lymphatischen Erkrankungen, die Ödeme der Beine nach sich ziehen.</p>
<div class="tabelle"><table>
  <thead><tr><th>Gruppe</th><th>Indikationen (Heft, nach Rabe 2018)</th></tr></thead>
  <tbody>
    <tr><td>chronische Venenkrankheiten</td><td>venöse Symptome, Lebensqualität, Prävention/Therapie venöser Ödeme und Hautveränderungen, <b>Ulcus cruris venosum</b> + Rezidivprävention, Schmerzreduktion, <b>gemischtes Ulcus</b> (unter Beachtung der KI!), Varikose, Ekzem/Pigmentierung, Dermatoliposklerose, Atrophie blanche, nach Varikosetherapie, funktionelle venöse Insuffizienz (Adipositas, Sitz-/Stehberufe), venöse Malformationen</td></tr>
    <tr><td>thromboembolische Venenkrankheiten</td><td>oberflächliche und tiefe Beinvenenthrombose, Armvenenthrombose, Z. n. Thrombose, postthrombotisches Syndrom, Thromboseprophylaxe bei mobilen Menschen</td></tr>
    <tr><td>Ödeme</td><td>Lymphödem, Lipödem ab Stadium II, Stauung bei Immobilität (arthrogenes Stauungssyndrom, Paresen), medikamentös bedingte Ödeme (wenn keine Umstellung möglich), Schwangerschaft, posttraumatisch/postoperativ, Reperfusionsödeme, zyklisch idiopathisch, berufsbedingt</td></tr>
    <tr><td>andere</td><td>Adipositas mit funktioneller venöser Insuffizienz, entzündliche Dermatosen der Beine, Schwangerschaftsbeschwerden, <b>Z. n. Verbrennungen</b> <span class="hand-inline">(handschr. hervorgehoben)</span>, Narbenbehandlung</td></tr>
  </tbody>
</table></div>

<h3>2. Kontraindikationen <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 4</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Absolute Kontraindikationen (Heft)</th><th>Risikofaktoren (Nutzen-Risiko-Abwägung, interdisziplinär)</th></tr></thead>
  <tbody>
    <tr><td>• fortgeschrittene <b>pAVK</b>, wenn einer zutrifft: <b>ABPI &lt; 0,5</b> · Knöchelarteriendruck <b>&lt; 60 mmHg</b> · Zehendruck <b>&lt; 30 mmHg</b> oder TcPO₂ <b>&lt; 20 mmHg</b> Fußrücken (mit unelastischem Material ggf. noch bei 50–60 mmHg unter engmaschiger Kontrolle)<br>• dekompensierte <b>Herzinsuffizienz</b> (NYHA III + IV)<br>• <b>septische Phlebitis</b><br>• <b>Phlegmasia coerulea dolens</b></td><td>ausgeprägte nässende Dermatosen · Unverträglichkeit auf Kompressionsmaterial · schwere Sensibilitätsstörungen · fortgeschrittene periphere Neuropathie (z. B. Diabetes) · primär chronische Polyarthritis</td></tr>
  </tbody>
</table></div>
<p class="hand">Handschr. „Prüfungsfrage“ (S. 4): Kontraindikationen – Herzinsuffizienz, septische Phlebitis, pAVK, Dermatosen.</p>
<p class="hand">Handschr. „Prüfung“ (S. 2): arterio-venöses Ulcus / Ulcus cruris mixtum – Kompressionstherapie ja oder nein? → abhängig vom Gefäßstatus; <b>ABI-Messung</b> (RR an beiden Armen und beiden Beinen); &lt; 0,5 kritischer Wert → keine Kompressionstherapie.</p>

<h3>3. Wirkungsweise und Begriffe <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 4–6</span></h3>
<p class="merke"><b>Kompressionstherapie</b> = „therapeutische Maßnahmen, die unter Anwendung von Druck zur Behandlung von Venenleiden, Lymphödem und Kombinationsleiden, bei traumatischen Indikationen wie postoperativen Ödemen oder Angiodysplasien dienen“ (Möller-Woltemade 2020). Basis jeder phlebologischen Therapie (S. 4).</p>
<ul>
  <li>Gefäßdurchmesser ↓ → Fließgeschwindigkeit Richtung Herz fast verdoppelt, transmuraler Druck ↓; dilatierte (nicht zerstörte) Venenklappen schließen wieder – bereits im Ruhezustand durch den Ruhedruck (S. 4).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Begriff</th><th>Definition (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Ruhedruck</td><td>= Anlagedruck; Druck in Ruhe im Liegen; beschreibt die Kompressionsstärke; nimmt durch Bewegung und Ödemreduktion innerhalb weniger Stunden ab</td></tr>
    <tr><td>Arbeitsdruck</td><td>entsteht beim Aufstehen und bei Muskelaktivität (Gehen) durch den Widerstand des Verbandes gegen die Muskelausdehnung; umso höher, je weniger dehnbar das Material</td></tr>
    <tr><td>Stiffness</td><td>Steifigkeit: wie stark das Material der Umfangszunahme widersteht; Langzug → geringer, Zinkleim → sehr hoher Druckanstieg</td></tr>
  </tbody>
</table></div>
<ul>
  <li>Kompression steigert die Effizienz der <b>Muskelpumpen</b>, v. a. Sprunggelenk- und Wadenmuskelpumpe; Druck verteilt sich nach dem <b>Pascal-Gesetz</b> im ganzen Bein (S. 5). <span class="hand-inline">Handschr. „Prüfung: Welche Pumpen gibt es?“ – Fußsohlenpumpe, Sprunggelenkspumpe, Wadenmuskelpumpe, Kniekehlenpumpe, Leisten-/Oberschenkelpumpe.</span></li>
  <li><b>Druck soll von distal nach proximal abnehmen</b> (Laplace: größerer Umfang → geringerer Druck bei gleichem Zug); daher nicht zuerst stark und zum Knie hin schwächer wickeln. Bei normal geformten Beinen entsteht das Druckgefälle von selbst (S. 5–6).</li>
  <li><b>Wirkungen</b> (S. 6): Rückfluss bis in tiefe Gefäße ↑, Venendruck ↓, Thromboseprophylaxe, Abbau bestehender Gerinnsel, Abtransport von Schlackenstoffen, Schließen dilatierter Klappen, Ödemreduktion, Lymphdrainage ↑ (Mikrozirkulation), rasche Entstauung, Abheilung von Ulzerationen.</li>
</ul>

<h3>4. Phasen der Kompressionstherapie bei CVI <span class="stern" title="im Heft als prüfungsrelevant markiert">★</span> <span class="seite">S. 6</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Phase</th><th>Ziel</th><th>Mittel</th></tr></thead>
  <tbody>
    <tr><td>1 Entstauungsphase (Therapiephase)</td><td>Entstauung, Ödemreduktion, Ulcus-Umfang minimieren</td><td>PKV (Kurzzugbinden oder Mehrkomponentensysteme) oder MAK</td></tr>
    <tr><td>2 Erhaltungsphase</td><td>stabiler Zustand (entstaut, Ulcus stabil heilend)</td><td>MKS: Kompressionsstrümpfe oder Ulcus-Strumpfsysteme</td></tr>
    <tr><td>3 Prävention</td><td>nach Abheilung: Rezidive und Ödeme vermeiden</td><td>MKS, i. d. R. <b>KKL II</b> ausreichend</td></tr>
  </tbody>
</table></div>
<p class="warnung"><b>Risiken</b> (S. 7): unsachgemäßes Bandagieren (zu hoher Druck, Strangulation) → Schmerzen, Gewebeschäden, Nekrosen, Nervenschäden v. a. an Knochenvorsprüngen (Fibulaköpfchen); MKS bei falscher Handhabung → Hautnekrosen, Nervenschäden; Juckreiz, Schuppung, Entzündung → Hautpflege.</p>

<h3>5. Methoden – Übersicht <span class="seite">S. 7</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>PKV</th><th>MKS</th><th>MAK</th><th>IPK</th></tr></thead>
  <tbody>
    <tr><td>Phlebologischer Kompressionsverband aus elastischen und/oder unelastischen Binden; v. a. <b>Entstauungsphase</b>, evtl. Erhaltung</td><td>Medizinische Kompressionsstrümpfe (elastisches Gestrick); <b>Erhaltung und Prävention</b></td><td>Medizinische adaptive Kompressionssysteme (Klett-/Wrap-Bandagen); <b>Entstauungsphase</b></td><td>Intermittierende pneumatische Kompression; nur <b>unterstützend</b>, kein Ersatz; Luftkammern, elektronisch gesteuert</td></tr>
  </tbody>
</table></div>

<h3>6. Phlebologischer Kompressionsverband (PKV) <span class="seite">S. 8–15</span></h3>
<ul>
  <li>Wechselverband (täglich neu, über Nacht belassen) oder Dauerverband (Mehrkomponentensystem, mehrere Tage). Schließt Fuß und Sprunggelenk ein, bis Fibulaköpfchen oder proximalen Oberschenkel. Mehrlagig gewickelte elastische Binden verhalten sich wie ein unelastischer Verband; mehrere Komponenten/Lagen fördern die Abheilung (S. 8).</li>
  <li>Binden: Breiten 6, 8, 10, 12 cm; Längen 5, 6, 7 m; Polyamid, Elastan, Baumwolle, Elastodien, Viskose. Zweizugelastische Binden „sitzen“ besser (S. 8).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Bindentyp</th><th>Dehnbarkeit</th><th>Druck</th><th>Besonderheiten (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Kurzzug</td><td>40–90 %</td><td><b>hoher Arbeits-, niedriger Ruhedruck</b> (Ruhedruck 40–60 mmHg, sinkt rasch)</td><td>für mobile Menschen; Druck in 24 h deutlich ↓ → in der Entstauung ggf. täglich erneuern; täglich waschen, 15–20× bis 95 °C, bügeln, unter leichtem Zug aufrollen</td></tr>
    <tr><td>Langzug</td><td>100–200 %</td><td><b>hoher Ruhe-, niedriger Arbeitsdruck</b></td><td>passt sich an, hält Druck über Tage; allein für starke Kompression nicht ratsam; bei Immobilen Einschnürungen → Thromboserisiko</td></tr>
    <tr><td>Zinkleim</td><td>&lt; 10 %</td><td>sehr hoher Arbeits-, niedriger Ruhedruck</td><td>feucht angelegt, härtet aus; schnelle Entstauung; Sprunggelenk eingeschränkt; nimmt kein Exsudat auf → häufiger Wechsel (Mazeration, Geruch)</td></tr>
    <tr><td>Mehrkomponenten</td><td>Set aus 2–4 Komponenten (Polster, Kurz-, Langzug, kohäsiv)</td><td>Anlagedruck bis zum nächsten Wechsel</td><td>effektiver und einfacher als Kurzzug bei Ulcus cruris venosum; bis 7 Tage; Einmalprodukt; voluminös (Schuhe); höhere Kosten</td></tr>
  </tbody>
</table></div>
<p class="hand">Handschr. „Prüfung!“ (S. 3): Unterschied in Dehnbarkeit und Druckverhalten – <b>Kurzzug</b>: wenig dehnbar, Kompression durch Bewegung, niedriger Ruhe- + hoher Arbeitsdruck; <b>Langzug</b>: stark dehnbar, Kompression geht vom Bindenmaterial aus, hoher Ruhe- + niedriger Arbeitsdruck.</p>
<ul>
  <li><b>Druckbeständigkeit</b> hängt ab von (S. 10): Vordehnung, Bindentyp, Breite, Elastizität, Zugkraftabfall (Relaxation), Anzahl der Touren, Technik, Feuchtigkeitsaufnahme, Pflege, Zirkumferenz, Konfiguration der Extremität.</li>
  <li><b>ICC-Druckbereiche</b> für Bandagierungen (S. 10): leicht &lt; 20 · mittelstark ≥ 20–40 · stark ≥ 40–60 · sehr stark &gt; 60 mmHg. Messung mit elektronischem Druckmessgerät ca. <b>10 cm über dem Innenknöchel</b> (S. 11).</li>
  <li>Ulcus cruris venosum braucht <b>starken Druck (≥ 40–60 mmHg)</b>; unter Kurzzug deutlicher Abfall in 30 min, nach 7 h ca. 50 % (S. 11).</li>
</ul>
<p class="merke">„Nur erfolgreich, wenn ein adäquater Druck über eine angemessene Zeit wirkt.“ (S. 11)</p>
<div class="tabelle"><table>
  <caption>Bandagierungsgrundsätze (S. 12–14)</caption>
  <tbody>
    <tr><td>Prinzipien</td><td>mit Überlappung · Sprunggelenk rechtwinklig (Dorsalflexion) · Unterschenkel bis Fibulaköpfchen, Oberschenkel bis proximal · Druck nimmt distal → proximal ab · keine Druckstellen, Schnürfurchen, Schmerzen · Material/Technik nach Indikation</td></tr>
    <tr><td>Aspekte</td><td>Hautschutz (Baumwoll-Schlauchverband bis unters Knie, „links“ gewendet) · Unterpolsterung gegen Druckulzera · Pelotten (nierenförmige Schaumstoffpolster) gleichen Unebenheiten aus · <b>keine Fixierklammern („Schwiegermütter“) am Menschen</b> – Pflasterstreifen · Breite ≤ Durchmesser des Körperteils · mind. 2 Binden · Fuß in Funktionsstellung · lockere Touren am Vorfuß → Ödem · Rolle unter Zug direkt auf der Haut abrollen · zu straffe Touren → Stauung, Thrombose, Nervenschäden, Nekrosen · bei Vorfuß-/Lymphödem Zehen mitkomprimieren</td></tr>
    <tr><td>Ablauf</td><td>Beginn unterhalb des Großzehengrundgelenks, 2 Kreistouren, Ferse immer einbinden, Fehlstellungen korrigierend wickeln; danach 20–30 min bewegen</td></tr>
    <tr><td>Sigg</td><td>mind. 2 Kurzzugbinden; 1. Binde ab Großzehengrundgelenk in kleinen, 1 cm überlappenden Touren bis untere Wade (hoher Knöcheldruck); 2. Binde in Achtertouren bis unter die Kniekehle</td></tr>
    <tr><td>Pütter</td><td>Gegenwickeltechnik: mind. 2 Kurzzugbinden gegenläufig (innen→außen, außen→innen); zwei Binden übereinander → Schuhe schwierig</td></tr>
    <tr><td>Bewertung</td><td>keine Technik ist nachweislich überlegen – die beherrschte Technik anwenden; <b>wöchentlich</b> Vorfuß-, Knöchel-, Wadenumfang messen (S. 14–15)</td></tr>
  </tbody>
</table></div>

<h3>7. Medizinische Kompressionsstrümpfe (MKS) <span class="seite">S. 15–20</span></h3>
<ul>
  <li>Für Langzeit-/Dauerbehandlung, nach Ödemreduktion bzw. Ulcusabheilung, danach lebenslang als Rezidivprophylaxe; morgens vor dem Aufstehen an, abends aus; Hautpflege abends; höchster Druck in der Fesselgegend (S. 15).</li>
  <li><b>Längen:</b> Wadenstrumpf A-D · Halbschenkel A-F · Schenkel A-G · Strumpfhose A-T; je 3 Längen. Unterschenkelödem, CVI, UCV meist Wadenstrumpf. <b>„So lang wie nötig, so kurz wie möglich!“</b> (S. 15–16).</li>
  <li><b>Strickung</b> (S. 16): flachgestrickt mit Naht – hohe Stiffness/Biegesteifigkeit, kein Einschneiden in Falten, individuelle Formen (Lymphödem), immer nach Maß · rundgestrickt nahtlos – geringe Stiffness, Einrutschen in Falten möglich, begrenzte Formgebung.</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>KKL</th><th>Intensität</th><th>mmHg (kPa)</th><th>Orientierungshilfe Indikationen (S. 18)</th></tr></thead>
  <tbody>
    <tr><td>I</td><td>leicht</td><td>18–21 (2,4–2,8)</td><td>Thromboseprophylaxe, Schwere-/Müdigkeitsgefühl, Varikose ohne Ödem, geringe Schwangerschaftsvarikose, Ödeme bei kompensierter pAVK/Herzinsuffizienz (seit 2018 verordnungsfähig)</td></tr>
    <tr><td>II</td><td>mittel</td><td>23–32 (3,1–4,3)</td><td>Schwangerschaftsvarikosis, Varikose mit Ödem, nach Varizenbehandlung, <b>Rezidivprophylaxe nach Ulcus</b>, TVT, PTS, Lymphödem Stadium I, Lipödem</td></tr>
    <tr><td>III</td><td>kräftig</td><td>34–46 (4,5–6,1)</td><td><b>florides Ulcus cruris venosum</b>, Lymphödem Stadium III, Angiodysplasie, reversibles Lymphödem</td></tr>
    <tr><td>IV</td><td>sehr kräftig</td><td>≥ 49 (≥ 6,5)</td><td>irreversibles Lymphödem; selten, kaum selbst anziehbar → flachgestrickt KKL II/III bevorzugen</td></tr>
  </tbody>
</table></div>
<ul>
  <li>KKL nach <b>Ruhedruck im Fesselbereich</b> genormt; international uneinheitlich. Vermessung morgens am entstauten Bein, bei Adipösen im Stehen, jedes Bein separat (S. 17). Rund die Hälfte verordneter MKS wird nicht getragen → <b>niedrigste wirksame KKL</b> wählen (S. 17).</li>
  <li>Bei Anziehproblemen: niedrigere KKL übereinander (KKL addieren sich) oder Einzelelemente; Reißverschlüsse. Faltenfrei anziehen, keine Uhren/Ringe, kurze Nägel, Hornhaut entfernen, Hautpflege mit Urea (S. 18–19).</li>
  <li><b>An-/Ausziehhilfen</b> (zugelassene Hilfsmittel): Gleiter (klein, Ballonseide; Wundauflagen verrutschen nicht) und Gestelle (sperrig, auch im Stehen); genoppte Gummihandschuhe. Indikationen: Lähmungen, altersbedingte Kraftminderung, Arthrose/Rheuma, Adipositas permagna, Versteifungen, degenerative Handerkrankungen, eingeschränkte Motorik (S. 19).</li>
  <li><b>Pflege</b> (S. 20): täglich waschen; geeignet Handwäsche, Feinwäsche 30–40 °C im Netz, liegend trocknen; ungeeignet Vollwaschmittel, Weichspüler, Chlor, chemische Reinigung, Auswringen, Bügeln, Sonne, Heizung, Stopfen.</li>
  <li><b>Ulcus-Strumpfsysteme</b> (S. 20): dünner Unterziehstrumpf (auch nachts) + kräftiger Überstrumpf; Wundauflagen fixierbar, Stiffness ↑, Ruhedruck ≈ KKL III; geeignet in der stabilen Heilungsphase.</li>
</ul>

<h3>8. MAK und IPK <span class="seite">S. 20–23</span></h3>
<ul>
  <li><b>MAK</b> (S. 20–21): Klett-/Wrap-Bandagen; Druck per Klett einstellbar (auch durch Betroffene), z. T. über Messscheibe kontrollierbar; jederzeit nachjustierbar bei Ödemreduktion; hoher Arbeits-, niedriger Ruhedruck (wie Kurzzug); Entstauungsphase; Längen kurz/normal/lang; allein oder mit MKS; bis zu <b>6 Monate</b> nutzbar; noch kein Klassifikationssystem.</li>
  <li><b>IPK</b> (S. 21–23): apparative Wechseldrücke in Luftkammern, sequenziell distal → proximal; simuliert Muskelpumpe; v. a. für teil-/immobile Menschen; Hilfsmittel Produktgruppe 17; <b>ersetzt weder Lymphdrainage noch Kompression</b>; 30–60 min, 1–3× täglich.</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>IPK</th><th>Inhalt (Heft)</th></tr></thead>
  <tbody>
    <tr><td>soll</td><td>Thromboembolieprophylaxe, wenn keine medikamentöse Prophylaxe möglich</td></tr>
    <tr><td>sollte</td><td>therapieresistentes Ulcus cruris venosum · schwere CVI C4b–C6 (CEAP) · Lymphödem additiv · pAVK mit stabiler Claudicatio/kritischer Ischämie ohne Übungs-/Rekonstruktionsmöglichkeit</td></tr>
    <tr><td>kann</td><td>posttraumatische Ödeme, therapieresistente venöse Ödeme, Lipödem, Lymphödem additiv, Hemiplegie mit Ödem, Thromboseprophylaxe zusätzlich</td></tr>
    <tr><td>kontraindiziert</td><td>dekompensierte Herzinsuffizienz, ausgedehnte Thrombophlebitis/Thrombose(-verdacht), akutes Erysipel, akute Phlegmone, Kompartmentsyndrom, schwere Hypertonie, okkludierende Prozesse im Lymphabstrom, ausgedehntes Weichteiltrauma, ausgeprägte Neuropathie, blasenbildende Dermatosen</td></tr>
    <tr><td>Sicherheit</td><td>textiler Hautschutz unter der Manschette, Hautinspektion; bei schlanken/kachektischen Menschen Polsterung von Dispositionsstellen</td></tr>
  </tbody>
</table></div>

<h3>9. Bewegung, Übungen, Leitlinienempfehlungen <span class="seite">S. 11, 23–30</span></h3>
<p class="merke"><b>Eigenbewegung ist stets Bestandteil einer effektiven Kompressionstherapie</b> – Wirkung nur bei Sprunggelenksbeweglichkeit und normalem Abrollen (S. 24). Übungen: Fußkreisen, Fußwippen, Zehenkrallen; kontrolliertes Gehtraining, Nordic Walking; Bettlägerige: Drainagebeutel/Luftballon-Konstruktion am Bettende.</p>
<div class="tabelle"><table>
  <caption>Übung II (Lösung S. 30)</caption>
  <thead><tr><th></th><th>Kurzzug</th><th>Mehrkomp.</th><th>Kompr.-strumpf</th><th>Ulcus-Strumpf</th><th>MAK</th></tr></thead>
  <tbody>
    <tr><td>UCV Entstauung</td><td>ja</td><td>ja</td><td>nein</td><td>nein</td><td>ja</td></tr>
    <tr><td>UCV Erhaltung</td><td>nein</td><td>nein</td><td>ja</td><td>ja</td><td>nein</td></tr>
    <tr><td>UCV Prävention</td><td>nein</td><td>nein</td><td>ja</td><td>nein</td><td>nein</td></tr>
    <tr><td>Lymphödem Entstauung</td><td>ja</td><td>ja</td><td>nein</td><td>nein</td><td>ja</td></tr>
    <tr><td>Lymphödem Erhaltung</td><td>nein</td><td>nein</td><td>ja</td><td>ja</td><td>nein</td></tr>
  </tbody>
</table></div>
<p><b>Übung I</b> (Lösung S. 30): Entstauung bei mobilen Menschen mit UCV → Kurzzugbinden und Mehrkomponentensysteme (hoher Arbeits-, niedriger Ruhedruck); Mehrkomponenten effektiver, einfacher, halten Druck bis zum Wechsel, besserer Tragekomfort, aber voluminös; Kurzzug verliert rasch Druck, verrutscht, ist wiederverwendbar. Erhaltung → Kompressionsstrümpfe oder Ulcus-Strumpfsysteme; Beratung: Kompression auch nach Abheilung nötig, da Gefäße sich wieder ausdehnen und Klappen nicht schließen → Rezidive; nach Abheilung MKS meist KKL II lebenslang.</p>
<ul>
  <li><b>Leitlinienempfehlungen</b> (Auswahl, S. 25–29): Aufpolsterung bei kleinen Radien/Kachexie (Laplace) · flachgestrickt bei großen Umfangsänderungen/Gewebefalten · MKS gemäß RAL GZG 387 und Richtlinie 93/42 EWG, Zweizugstrumpf · nach Entstauung MKS als Alternative zum PKV prüfen; bei UCV zweilagige Ulcus-MKS · Vermessung ödemfrei · niedrigste wirksame KKL · Nutzungsdauer in der Regel <b>6 Monate</b>, Erstversorgung mit Zweitverordnung · Binden mind. 15× waschbar · bei TVT <b>sofort</b> Kompression, mind. <b>6 Monate</b> fortsetzen.</li>
  <li><b>Rezept</b> (S. 26): Anzahl, Strumpflänge, KKL, Indikation/Diagnose, Hilfsmittelnummer, ggf. Maßanfertigung, Fußspitze offen/geschlossen; ggf. Zusätze, flachgestrickt, Stiffness, Befestigung, Wechselversorgung.</li>
  <li><b>Adhärenz:</b> ausführliche Aufklärung über Sinn, Nebenwirkungen, Anwendung und Begleitmaßnahmen (Hautpflege, Bewegung) (S. 29).</li>
</ul>
<p class="warnung"><b>Sofort entfernen und kontrollieren</b> bei (S. 29): Blau-/Weißfärbung der Zehen, Missempfindungen/Taubheit, zunehmenden Schmerzen, Kurzatmigkeit, Schweißausbrüchen, akuten Bewegungseinschränkungen.</p>
`
});
