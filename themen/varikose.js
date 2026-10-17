/*
 * Thema: Varikose – Krankheitsbild bei CVI
 * Quelle: Zusatzskript „Krankheitsbild bei CVI – Varikose“ (3 Seiten), Seitenangaben = Skriptseiten.
 * Inhalte übernommen aus "Zusammenfassung_Varikose.pdf" und "Lernkarten_Varikose.pdf".
 * Verweise auf die Hefte: G = Gefäßsysteme und Gefäßerkrankungen, M = Dekubitus, Ulcus cruris, DFU.
 *
 * Quiz-Format: Die ersten "r" Optionen sind richtig (ohne "r": nur die erste);
 * die App mischt die Reihenfolge. Nie alle Optionen richtig – wie in der Prüfung.
 */
Lernapp.thema({
  id: "varikose",
  titel: "Varikose – Krankheitsbild bei CVI",
  kurz: "Varikose",
  quelle: "Zusatzskript „Krankheitsbild bei CVI – Varikose“",
  hinweis:
    "Quelle ist das Zusatzskript (3 Seiten); Verweise auf die Hefte: G = Gefäßsysteme und Gefäßerkrankungen, M = Dekubitus, Ulcus cruris, Diabetisches Fußulkus. Das Skript nennt keine Primärquellen.",

  karten: [
    { k: "Varikose", f: "Was versteht man unter einer Varikose?",
      a: "Sackartig erweiterte und geschlängelte oberflächliche Venen, meist an den unteren Extremitäten; unterteilt in primäre und sekundäre Varikose.", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { k: "Varikose", f: "Wie häufig ist die primäre Varikose und worauf beruht sie?",
      a: "80–90 % der Fälle; genetisch oder konstitutionell veranlagt.", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { k: "Varikose", f: "Beschreibe die Pathophysiologie der primären Varikose.",
      a: "Elastische Fasern nehmen ab, Venenwandmuskulatur atrophiert → Erweiterung, Aussackung, Schlängelung → insuffiziente Venenklappen → hydrostatischer Druck steigt.", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { k: "Varikose", f: "Welche Ursachen der primären Varikose nennt das Skript?",
      a: "Stehende Tätigkeiten, Adipositas, Rechtsherzinsuffizienz, Schwangerschaft.", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { k: "Varikose", f: "Wie entsteht eine sekundäre Varikose?",
      a: "Als Folge einer Venenerkrankung, meist beim postthrombotischen Syndrom: Phlebothrombose mit Abflussstörung, venöse Hypertension, Klappeninsuffizienz (CVI).", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { k: "Varikose", f: "Welche Symptome verursacht eine Varikose?",
      a: "Ähnlich CVI: Ödemneigung, Schwere- und Spannungsgefühl, nächtliche Wadenkrämpfe; Beschwerden abends, bei Wärme und nach langem Stehen.", s: "Skript S. 1–2", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { k: "Varikose", f: "Komplikationen einer unbehandelten schweren Varikose?",
      a: "Mikrozirkulationsstörung mit Gewebshypoxie, ekzemartige Hautveränderungen, Induration, Atrophie blanche, Ulzeration, Thrombosen.", s: "Skript S. 2", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { k: "Varikose", f: "Was ist eine Stammvarikose und welche Vene ist meist betroffen?",
      a: "Befall des Hauptstamms des oberflächlichen Venensystems am Bein; vorwiegend die V. saphena magna. Einteilung nach Hach in 4 Stadien.", s: "Skript S. 2", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { k: "Varikose", f: "Nenne die Stadien der Varikose nach Hach.",
      a: "1 – nur die Venenklappe betroffen\n2 – Klappen bis Mitte Oberschenkel defekt\n3 – Insuffizienz bis unter das Kniegelenk\n4 – gesamte Länge bis zum Sprunggelenk", s: "Skript S. 2", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { k: "PTS", f: "Was ist das postthrombotische Syndrom?",
      a: "Folge einer zu spät erkannten/behandelten Thrombose: Abflussbehinderung und veränderte Klappen → Blutstau im tiefen System → Druckerhöhung → Umleitung über Perforansvenen nach außen → sekundäre Varizen.", s: "Skript S. 3" },
    { k: "PTS", f: "Über welche Venen wird das Blut beim PTS ins oberflächliche System umgeleitet?",
      a: "Über die Perforansvenen.", s: "Skript S. 3" },
    { k: "CVI", f: "Wie führen Varikose und PTS zur CVI?",
      a: "Erhöhter Venendruck → Reflux, Kapillarerweiterung → Austritt von Plasmaproteinen, Erythrozyten, Wasser → Eiweißlast im Interstitium ↑ → Lymphe überlastet → Stau in Haut/Unterhaut → Fibrose, Fett → Ödemverhärtung.", s: "Skript S. 3", sp: ["gefaesse: Venöse Gefäßerkrankungen – CVI"] },
    { k: "CVI", f: "Was passiert, wenn die Transportkapazität des Lymphsystems erreicht ist?",
      a: "Die Flüssigkeit staut sich in Haut und Unterhaut; durch Fibrosierung und Fettablagerung kommt es zu Ödemverhärtung und vermindertem Gasaustausch → entzündliche, degenerative Gewebsveränderungen.", s: "Skript S. 3", sp: ["gefaesse: Venöse Gefäßerkrankungen – CVI"] }
  ],

  quiz: [
    { f: "Was trifft auf die Varikose zu?",
      o: ["Sackartig erweiterte und geschlängelte oberflächliche Venen", "Meist an den unteren Extremitäten", "Erweiterte tiefe Arterien", "Kommt ausschließlich an den Armen vor"], r: 2,
      e: "Varikose: sackartig erweiterte und geschlängelte oberflächliche Venen, meist an den unteren Extremitäten; unterteilt in primäre und sekundäre Varikose.", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Wie hoch ist der Anteil der primären Varikose?",
      o: ["80–90 %", "10–20 %", "Ca. 50 %", "Unter 5 %"],
      e: "Primäre Varikose: 80–90 %, genetisch oder konstitutionell veranlagt.", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Welche Ursachen der primären Varikose nennt das Skript?",
      o: ["Stehende Tätigkeiten", "Adipositas", "Schwangerschaft", "Polyneuropathie"], r: 3,
      e: "Ursachen laut Skript: stehende Tätigkeiten, Adipositas, Rechtsherzinsuffizienz, Schwangerschaft.", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Was geschieht bei der Entstehung der primären Varikose?",
      o: ["Elastische Fasern nehmen ab", "Die Muskulatur der Venenwand atrophiert", "Die Venenklappen werden insuffizient", "Der hydrostatische Druck sinkt"], r: 3,
      e: "Elastische Fasern ↓, Venenwandmuskulatur atrophiert → Erweiterung, Aussackung, Schlängelung → insuffiziente Venenklappen → hydrostatischer Druck steigt.", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Was trifft auf die sekundäre Varikose zu?",
      o: ["Sie entsteht meist beim postthrombotischen Syndrom", "Venöse Hypertension und Klappeninsuffizienz spielen eine Rolle", "Sie ist mit 80–90 % die häufigste Form", "Sie ist rein genetisch bedingt"], r: 2,
      e: "Sekundäre Varikose: Folge einer Venenerkrankung, meist beim PTS – Phlebothrombose mit Abflussstörung, venöse Hypertension, Klappeninsuffizienz (CVI).", s: "Skript S. 1", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Welche Symptome sind typisch für eine Varikose?",
      o: ["Schwere- und Spannungsgefühl in den Beinen", "Nächtliche Wadenkrämpfe", "Beschwerden abends und bei Wärme", "Besserung nach längerem Stehen"], r: 3,
      e: "Ähnlich CVI: Ödemneigung, Schwere- und Spannungsgefühl, nächtliche Wadenkrämpfe; Beschwerden abends, bei Wärme und nach längerem Stehen.", s: "Skript S. 1–2", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Welche Komplikationen drohen bei unbehandelter schwerer Varikose?",
      o: ["Atrophie blanche", "Ulzeration", "Thrombosen", "Lipödem"], r: 3,
      e: "Mikrozirkulationsstörung mit Gewebshypoxie, ekzemartige Hautveränderungen, Induration, Atrophie blanche, Ulzeration, Thrombosen.", s: "Skript S. 2", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Welche Vene ist bei einer Stammvarikose vorwiegend betroffen?",
      o: ["V. saphena magna", "V. subclavia", "V. portae", "V. cava superior"],
      e: "Stammvarikose: Hauptstamm des oberflächlichen Venensystems, vorwiegend die V. saphena magna (größte oberflächliche Hautvene des Beins).", s: "Skript S. 2", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Was bedeutet Hach-Stadium 3?",
      o: ["Klappeninsuffizienz bis unter das Kniegelenk", "Nur die Venenklappe ist betroffen", "Klappen bis in Höhe des mittleren Oberschenkels defekt", "Vene über die gesamte Länge bis zum Sprunggelenk erkrankt"],
      e: "1 nur die Venenklappe · 2 bis mittlerer Oberschenkel · 3 bis unter das Kniegelenk · 4 bis zum Sprunggelenk. Merkhilfe: Die Insuffizienz wandert von oben nach unten.", s: "Skript S. 2", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Was bedeutet Hach-Stadium 2?",
      o: ["Klappen bis in Höhe des mittleren Oberschenkels defekt", "Vene über die gesamte Länge bis zum Sprunggelenk erkrankt", "Klappeninsuffizienz bis unter das Kniegelenk", "Nur die Venenklappe ist betroffen"],
      e: "Merkhilfe: Klappe → Oberschenkelmitte → unter dem Knie → Sprunggelenk.", s: "Skript S. 2", sp: ["gefaesse: Venöse Gefäßerkrankungen – Varikosis"] },
    { f: "Über welche Venen wird das Blut beim postthrombotischen Syndrom ins oberflächliche System umgeleitet?",
      o: ["Über die Perforansvenen", "Über die Pfortader", "Über den Ductus thoracicus", "Über die Lungenvenen"],
      e: "Blutstau im tiefen Venensystem → Druckerhöhung → Umleitung über die Perforansvenen ins oberflächliche System → dort sekundäre Varizen.", s: "Skript S. 3" },
    { f: "Was trifft auf das postthrombotische Syndrom (PTS) zu?",
      o: ["Thrombosen werden oft zu spät erkannt und behandelt", "Blut staut sich im tiefen Venensystem", "Im oberflächlichen System entstehen sekundäre Varizen", "Das Blut wird über die Lymphgefäße umgeleitet"], r: 3,
      e: "Fortbestehende Abflussbehinderung und veränderte Venenklappen → insuffizienter Klappenschluss → Blutstau im tiefen System → Umleitung über Perforansvenen → sekundäre Varizen.", s: "Skript S. 3" },
    { f: "Wie führen Varikose und PTS zur CVI?",
      o: ["Kapillarwände werden durchlässig für Plasmaproteine, rote Blutzellen und Wasser", "Die lymphpflichtige Eiweißlast im Interstitium steigt", "Fibrosierung und Fettablagerung führen zur Ödemverhärtung", "Der Gasaustausch im Gewebe verbessert sich"], r: 3,
      e: "Erhöhter Venendruck → Reflux, Kapillarerweiterung → Eiweißlast ↑ → Lymphe überlastet → Stau in Haut/Unterhaut → Fibrose, Fett → Ödemverhärtung und verminderter Gasaustausch.", s: "Skript S. 3", sp: ["gefaesse: Venöse Gefäßerkrankungen – CVI"] },
    { f: "Zu welchem Widmer-Grad der CVI gehört die Atrophie blanche?",
      o: ["Grad II", "Grad I", "Grad IIIa", "Grad IIIb"],
      e: "Atrophie blanche ist im Skript eine Komplikation der Varikose und in Widmer Grad II enthalten.", s: "Skript S. 2; G S. 16; M S. 15", sp: ["gefaesse: Venöse Gefäßerkrankungen – CVI"] }
  ],

  zusammenfassung: `
<h3>1. Definition<span class="sp" data-sp="gefaesse: Venöse Gefäßerkrankungen – Varikosis">Schwerpunkt</span> <span class="seite">Skript S. 1</span></h3>
<p class="merke"><b>Varikose:</b> sackartig erweiterte und geschlängelte oberflächliche Venen, meist an den unteren Extremitäten. Unterteilt in primäre und sekundäre Varikose.</p>

<h3>2. Primäre vs. sekundäre Varikose<span class="sp" data-sp="gefaesse: Venöse Gefäßerkrankungen – Varikosis">Schwerpunkt</span> <span class="seite">Skript S. 1</span></h3>
<div class="tabelle"><table>
  <thead><tr><th></th><th>Primäre Varikose</th><th>Sekundäre Varikose</th></tr></thead>
  <tbody>
    <tr><td>Häufigkeit</td><td>80–90 %</td><td>–</td></tr>
    <tr><td>Entstehung</td><td>genetisch oder konstitutionell veranlagt</td><td>als Folge einer Venenerkrankung, meist beim postthrombotischen Syndrom</td></tr>
    <tr><td style="white-space:normal">Mechanismus / Ursachen</td><td>elastische Fasern nehmen ab, Muskeln der Venenwand atrophieren → Erweiterung, Aussackung, Schlängelung → insuffiziente Venenklappen → hydrostatischer Druck steigt.<br>Ursachen laut Skript: stehende Tätigkeiten, Adipositas, Rechtsherzinsuffizienz, Schwangerschaft</td><td>Phlebothrombose mit Abflussstörung, venöse Hypertension, Venenklappeninsuffizienz (CVI)</td></tr>
  </tbody>
</table></div>

<h3>3. Klinik<span class="sp" data-sp="gefaesse: Venöse Gefäßerkrankungen – Varikosis">Schwerpunkt</span> <span class="seite">Skript S. 1–2</span></h3>
<ul>
  <li><b>Symptome</b> (ähnlich CVI): Ödemneigung, Schwere- und Spannungsgefühl in den Beinen, nächtliche Wadenkrämpfe; Beschwerden abends, bei Wärme und nach längerem Stehen.</li>
  <li><b>Komplikationen</b> bei unbehandelter schwerer Varikose: Mikrozirkulationsstörung mit Gewebshypoxie, ekzemartige Hautveränderungen, Induration (Verhärtung), Atrophie blanche, Ulzeration, Thrombosen.</li>
  <li><b>Prädilektionsstellen:</b> Ober- und Unterschenkel.</li>
  <li><b>Stammvarikose:</b> Der Hauptstamm des oberflächlichen Venensystems ist betroffen, vorwiegend die V. saphena magna (größte oberflächliche Hautvene des Beins). Einteilung nach W. Hach in 4 Stadien.</li>
</ul>
<div class="tabelle"><table>
  <caption>Einteilung der Varikose nach Hach ★ (Prüfungsfrage laut Mitschrift)</caption>
  <thead><tr><th>Stadium</th><th>Merkmale</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>nur die Venenklappe ist betroffen; ausgeprägte Krampfadern sind selten</td></tr>
    <tr><td>2</td><td>Klappen bis in Höhe des mittleren Oberschenkels defekt</td></tr>
    <tr><td>3</td><td>Klappeninsuffizienz reicht bis unter das Kniegelenk</td></tr>
    <tr><td>4</td><td>Vene über die gesamte Länge bis zum Sprunggelenk erkrankt</td></tr>
  </tbody>
</table></div>
<p class="merke"><b>Merkhilfe:</b> Die Insuffizienz wandert von oben nach unten – Klappe → Oberschenkelmitte → unter dem Knie → Sprunggelenk.</p>

<h3>4. Postthrombotisches Syndrom (PTS) <span class="seite">Skript S. 3</span></h3>
<ul>
  <li>Thrombosen werden oft zu spät erkannt und behandelt → PTS.</li>
  <li><b>Ablauf:</b> fortbestehende Abflussbehinderung und veränderte Venenklappen → insuffizienter Klappenschluss → Blutstau im tiefen Venensystem → Druckerhöhung → Umleitung über die Perforansvenen ins oberflächliche System → dort Klappeninsuffizienz und sekundäre Varizen.</li>
</ul>

<h3>5. Von Varikose und PTS zur CVI<span class="sp" data-sp="gefaesse: Venöse Gefäßerkrankungen – CVI">Schwerpunkt</span> <span class="seite">Skript S. 3</span></h3>
<p class="merke">Anhaltend erhöhter venöser Druck → Reflux und Erweiterung der Kapillaren → Kapillarwände durchlässig für Plasmaproteine, rote Blutzellen und Wasser → lymphpflichtige Eiweißlast im Interstitium steigt → Transportkapazität der Lymphe erreicht → Flüssigkeitsstau in Haut und Unterhaut → Fibrosierung und Fettablagerung → Ödemverhärtung und verminderter Gasaustausch. <b>Folge:</b> entzündliche, degenerative Gewebsveränderungen.</p>

<h3>6. Abgleich mit den Kursheften</h3>
<div class="tabelle"><table>
  <thead><tr><th>Thema</th><th>Skript</th><th>Heft</th><th>Ergebnis</th></tr></thead>
  <tbody>
    <tr><td style="white-space:normal">Hach-Stadien</td><td>S. 2</td><td style="white-space:normal">G S. 15 (nur handschriftlich)</td><td>✔ Deine Notiz stimmt mit dem Skript überein (Stadium 1 im Skript: „nur die Venenklappe“, in deiner Notiz „Mündungsklappe“)</td></tr>
    <tr><td style="white-space:normal">Varikosis: erweiterte oberflächliche Venen, insuffiziente Klappen</td><td>S. 1</td><td>G S. 14</td><td>✔</td></tr>
    <tr><td style="white-space:normal">Phlebothrombose schädigt Klappen dauerhaft</td><td>S. 1, 3</td><td>G S. 14</td><td>✔ Skript ergänzt das PTS als Brücke zur sekundären Varikose</td></tr>
    <tr><td style="white-space:normal">Pathogenese Ödem → Lymphe überlastet → Verhärtung</td><td>S. 3</td><td>M S. 15</td><td>✔ M nennt das Ergebnis Dermatoliposklerose</td></tr>
    <tr><td style="white-space:normal">Atrophie blanche als Komplikation</td><td>S. 2</td><td style="white-space:normal">G S. 16; M S. 15</td><td>✔ in Widmer Grad II enthalten</td></tr>
    <tr><td style="white-space:normal">Ursachen der CVI: Varikosis, Phlebothrombose, Thrombophlebitis …</td><td>–</td><td style="white-space:normal">G S. 14; M S. 14</td><td>✔ konsistent</td></tr>
  </tbody>
</table></div>
<p class="leise klein">Schreibfehler im Skript, hier korrigiert: „Atrophie blance“ → Atrophie blanche; „O²“ → O₂.</p>
`
});
