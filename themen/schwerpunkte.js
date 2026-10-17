/*
 * Prüfungsschwerpunkte (Kategorie „Schwerpunkte“)
 * Quelle: Schwerpunkt-Listen der Kursleitung auf dem murimed-Padlet (Seiten 6–17 von 24),
 * als Bildschirmfotos bzw. PDF bereitgestellt ("Schwerpunkte_Erkrankungen_der_Haut.pdf",
 * "Schwerpunkte_Dekubitus__Ulcus_cruris__Diabetisches_Fu__ulcus.pdf",
 * "Schwerpunkte_Wundbeurteilung_und_Dokumentation.pdf"). Wortlaut der Punkte wie in den Listen.
 *
 * Aufbau: punkte = Liste aus Text oder { t: "Punkt", u: ["Unterpunkt", …] }.
 * In den Themen-Dateien verweist sp: ["<id>: <Punkt>"] bzw. sp: ["<id>: <Punkt> – <Unterpunkt>"]
 * auf einen Punkt; dieselbe Kennung steht im Skript in <span class="sp" data-sp="…">.
 * themen = Themen-Dateien, deren Inhalte zu der Liste gehören (leer = keine Unterlagen in der App).
 */
Lernapp.schwerpunkt({
  id: "haut", titel: "Erkrankungen der Haut", seite: 6, themen: ["haut", "pruefungsschwerpunkte"],
  punkte: [
    "Aufbau der Haut", "Aufbau der Epidermis", "Def. Langerhanszellen", "Aufbau der Dermis",
    "Def. Hauttugor", "Aufbau der Subcutis", "Def. Leistenhaut", "Def. Felderhaut", "Funktionen der Haut",
    "Was gibt es für altersbedingte Hautveränderungen?", "Bedeutung von Hautschutz und Hautpflege",
    "Was gibt es für Hautpflegeprodukte?", "Was sind empfohlene Hautschutz- und Hautpflegemaßnahmen?",
    "Welche Hautschutz- und Hautpflegemaßnahmen sind ungeeignet?", "Wie ist die Gefäßversorgung in der Haut?",
    "Ursachen für Hauterkrankungen", "Beispiel für bakterielle Infektionskrankheit der Haut",
    "Beispiel für Virusinfektion der Haut", "Was ist die A-B-C-D-Regel?",
    "Beispiel für Hauterscheinungen bei Krankheiten innerer Organe und Stoffwechselstörungen",
    "Welche Hautschädigungen durch Verbandmittel können entstehen?"
  ]
});

Lernapp.schwerpunkt({
  id: "gefaesse", titel: "Erkrankungen des Gefäßsystems", seite: 7, themen: ["gefaesse", "varikose", "pruefungsschwerpunkte"],
  punkte: [
    "Bestandteile des Herz-Kreislauf-Systems", "Bestandteile des Blutgefäßsystems", "Bestandteile des Lymphgefäßsystems",
    { t: "Arterielle Gefäßerkrankungen", u: ["Arteriosklerose", "pAVK", "Verlauf", "Stadieneinteilung", "Vorkommen", "Risikofaktoren", "Anzeichen", "Diagnostik (ABI-Messung)", "Therapie"] },
    { t: "Venöse Gefäßerkrankungen", u: ["CVI", "Varikosis", "Phlebothrombose", "Thrombophlebitis", "Phlebödem"] },
    // In der Liste stehen die folgenden Punkte ohne Einrückung in einer Zelle unter „Erkrankungen der Lymphe“.
    "Erkrankungen der Lymphe",
    { t: "Lymphödem", u: ["Entstehung", "Ursachen und Arten", "Primäres und Sekundäres L.", "Klassifikation", "Verlauf und Charakteristika", "Komplikationen"] },
    { t: "Lipödem", u: ["Vorkommen", "Ursachen", "Verlauf und Charakteristika", "Stadieneinteilung", "Diagnostik", "Komplikationen", "Therapie"] }
  ]
});

Lernapp.schwerpunkt({
  id: "wunden", titel: "Art, Heilung, Heilungsstörungen", seite: 8, themen: ["wundarten-wundheilung", "pruefungsschwerpunkte"],
  punkte: [
    "Def. Wunde", "Nach welchen Kriterien werden Wunden unterschieden?", "Entstehungshergang von Wunden",
    "Beispiele für mechanische Wunden", "Beispiele für thermische Wunden", "Beispiele für chemische Wunden",
    "Entstehungsart von Wunden", "Einteilung nach Kolonisation", "Dauer der Heilung", "Def. geschlossene Wunden",
    "Def. offene Wunden", "Def. Wundheilung", "Arten der Wundheilung", "Welche Wundheilungsmechanismen gibt es?",
    "Phasen der Wundheilung", "Arten der Wundheilungsstörungen"
  ]
});

Lernapp.schwerpunkt({
  id: "hygiene", titel: "Hygienemaßnahmen", seite: 9, themen: ["hygiene", "pruefungsschwerpunkte"],
  punkte: [
    "Unterschied zwischen Entzündung und Infektion", "Anzeichen infektgefährdeter Wunden", "mögliche Keime in Wunden",
    "Multiresistente Erreger", "Def. Non-Touch-Technik", "Generelle Hygienemaßnahmen",
    { t: "Wundabstrichtechniken", u: ["Essener Wundkreisel", "Levine-Technik"] }
  ]
});

Lernapp.schwerpunkt({
  id: "dekubitus", titel: "Dekubitus, Ulcus cruris, Diabetisches Fußulcus", seite: 10, themen: ["dekubitus-ulcus-dfu", "pruefungsschwerpunkte"],
  punkte: [
    "Def. chronische Wunde",
    { t: "Def. Dekubitus", u: ["Entstehung", "Risikofaktoren", "Klassifikation", "Prophylaxe"] },
    "Def. Ulcus cruris",
    { t: "Def. Ulcus cruris venosum", u: ["Entstehung", "Klassifikation", "Klinisches Erscheinungsbild", "Diagnostik", "Therapie"] },
    { t: "Def. Ulcus cruris arteriosum", u: ["Entstehung", "Klassifikation", "Klinisches Erscheinungsbild", "Diagnostik", "Therapie"] },
    "Def. Ulcus cruris mixtum",
    // In der Liste ohne Einrückung, aber in derselben Zelle wie „Def. Diabetisches Fußulcus“.
    { t: "Def. Diabetisches Fußulcus", u: ["Entstehung", "Klassifikation", "Klinisches Erscheinungsbild", "Diagnostik", "Therapie"] }
  ]
});

Lernapp.schwerpunkt({
  id: "chronwunden", titel: "Exp. Pflege von Menschen mit chronischen Wunden", seite: 11, themen: [],
  punkte: [
    "Basiswissen chronische Wunden", "Aufbau des Expertenstandards", "Ziel", "Zielgruppe", "Anwender:innen", "Struktur",
    { t: "Phasen", u: ["Allgemeines inhaltliches Wissen zu den Phasen"] }
  ]
});

Lernapp.schwerpunkt({
  id: "recht", titel: "Geschichte, Recht und Ethik", seite: 12, themen: [],
  punkte: [
    "Rechtliche Grundlagen",
    { t: "Rechtsicheres Handeln", u: ["Verantwortlichkeiten", "Remonstrationsrecht/-pflicht", "Gesetze"] },
    { t: "Ethik in der Wundversorgung", u: ["Autonomieprinzip", "Benefizienz und Non-Malefizienz", "Prinzip der Gerechtigkeit"] },
    { t: "Würde in der Pflege", u: ["Selbstbestimmung"] },
    "Menschenrechte in der Pflege"
  ]
});

Lernapp.schwerpunkt({
  id: "doku", titel: "Wundbeurteilung und Dokumentation", seite: 13, themen: ["wundbetreuung-dokumentation", "pruefungsschwerpunkte"],
  punkte: [
    "Aufgaben und Ziele der Wunddoku", "Grundsätzliche Anforderungen", "Spezifische Anforderungen", "Bestandteile der Wunddoku",
    "Def. Pflegerische Anamnese", "Def. Wundspezifisches Assessment", "Fakten zur Fotodokumentation",
    "Aufbewahrungsfrist und Herausgabe an die Krankenkasse", "Kriterien zur Wundbeurteilung", "Genauere Erklärung der Kriterien"
  ]
});

Lernapp.schwerpunkt({
  id: "ernaehrung", titel: "Expertenstandard „Ernährungsmanagement“", seite: 15, themen: ["ernaehrung"],
  punkte: [
    "Basiswissen zur Ernährung", "Aufbau des Expertenstandards", "Ziel", "Zielgruppe", "Anwender:innen", "Struktur",
    { t: "Phasen", u: ["Allgemeines inhaltliches Wissen zu den Phasen"] }
  ]
});

Lernapp.schwerpunkt({
  id: "schmerz", titel: "„Schmerzbehandlung“", seite: 16, themen: ["schmerz"],
  punkte: [
    "Def. Schmerz", "Unterschied akuter / chronischer / prozeduraler Schmerz", "Bedeutung von Wundschmerz",
    "Schmerz als multidimensionales Geschehen", "Kulturspezifische Schmerzkonzepte", "Schmerz als Einflussfaktor auf die Wundheilung",
    "Möglichkeiten der Schmerzerfassung", "Maßnahmen der Schmerzreduktion beim Verbandwechsel",
    "Medikamentöse / Nichtmedikamentöse Schmerzbehandlung"
  ]
});

Lernapp.schwerpunkt({
  id: "kompression", titel: "„Methoden der Kompressionstherapie“", seite: 17, themen: ["kompression"],
  punkte: [
    "Indikation der medizinischen Kompressionstherapie", "Kontraindikation der medizinischen Kompressionstherapie",
    "Def. Ruhedruck", "Def. Arbeitsdruck", "Wirkweise der Kompressionstherapie (Seite 6 oben)",
    "Unterschied Entstauungsphase / Erhaltungsphase / Prävention", "Methoden der Kompressionstherapie",
    "Bewegung und Kompressionstherapie"
  ]
});
