# Wundmanager Prüfungstrainer

**App öffnen: https://mkirchei.github.io/Wundmanager-/**

Lern-App zur Prüfungsvorbereitung Wundmanager / Wundexperte. Die App läuft im Browser, braucht keine Installation und keinen Server.

## Inhalte

| Thema | Lernkarten | Quizfragen | Quelle |
|---|---|---|---|
| **Modul I** | | | |
| Prüfungsschwerpunkte Modul I (Mitschrift) | 29 | 27 | Mitschrift + murimed-Kurshefte |
| Wunden: Arten, Heilung und Heilungsstörungen | 51 | 36 | murimed-Kursheft Wundexperte Modul I |
| Erkrankungen der Haut | 54 | 37 | murimed-Kursheft Wundexperte Modul I |
| Gefäßsysteme & Gefäßerkrankungen | 45 | 33 | murimed-Lernheft |
| Varikose – Krankheitsbild bei CVI | 13 | 14 | Zusatzskript „Krankheitsbild bei CVI – Varikose“ |
| Dekubitus, Ulcus cruris, Diabetisches Fußulkus | 71 | 41 | murimed-Kursheft Wundexperte Modul I |
| Wundbetreuung und Dokumentation | 50 | 30 | murimed-Kursheft Wundexperte Modul I |
| Hygienemaßnahmen in der Wundversorgung | 50 | 30 | murimed-Kursheft Wundexperte Modul I |
| **Modul II** | | | |
| Einflussfaktoren auf die Wundheilung | 55 | 39 | murimed-Kursheft Wundexperte Modul II |
| Expertenstandard Ernährungsmanagement | 53 | 38 | murimed-Lernheft Modul II |
| Schmerzmanagement in der Wundversorgung | 52 | 36 | murimed-Lernheft Modul II |
| Kompressionstherapie | 53 | 43 | murimed-Lernheft Modul II |
| Expertenstandard Hautintegrität | 57 | 36 | murimed-Lernheft Modul II |
| Wundreinigung und Débridement | 49 | 35 | murimed-Lernheft Modul II |
| Wundbehandlung und Verbandstoffe | 49 | 42 | murimed-Kursheft Modul II |
| Expertenstandard Dekubitusprophylaxe | 48 | 42 | murimed-Lernheft Modul II |
| **Gesamt** | **779** | **559** | |

Die Lernkarten und Zusammenfassungen sind aus den PDF-Unterlagen
`Lernkarten_*.pdf` und `Zusammenfassung_*.pdf` übernommen. Die Quizfragen
sind aus den Zusammenfassungen abgeleitet. Jede Karte und Frage nennt die
Seitenzahl im Heft. Inhalte, die nur aus handschriftlichen Notizen im Heft
stammen, sind als „handschriftlich“ markiert.
Inhalte aus den zusätzlich bereitgestellten Foliensätzen stehen in den Lernkarten
im Kapitel „Folien“ und in den Zusammenfassungen im Abschnitt „Abgleich mit dem
Foliensatz“; Abweichungen zwischen Heft und Folien sind dort mit ⚠ gekennzeichnet.

## Prüfungsschwerpunkte

Die Schwerpunkt-Listen der Kursleitung (Padlet, Seiten 6–17) stehen in `themen/schwerpunkte.js`.
Karten und Quizfragen, die einen Punkt abdecken, tragen das Feld `sp` (z. B.
`sp: ["haut: Aufbau der Epidermis"]`, bei Unterpunkten `"dekubitus: Def. Ulcus cruris venosum – Diagnostik"`);
im Skript markiert `<span class="sp" data-sp="…">Schwerpunkt</span>` die passenden Stellen.
In der App:

- **Karten** und **Quiz**: Kategorie „Nur Schwerpunkte“; markierte Karten und Fragen zeigen ein Schwerpunkt-Abzeichen.
- **Skript → Schwerpunkte**: alle Listen mit den zugeordneten Karten und Fragen je Punkt, Lern- und Quiz-Knöpfe je Liste.
  Punkte ohne Inhalte in der App sind als solche gekennzeichnet (z. B. „Geschichte, Recht und Ethik“ und
  „Exp. Pflege von Menschen mit chronischen Wunden“, zu denen noch keine Unterlagen in der App sind).

## Funktionen

- **Karten**: Karteikarten mit Lernfächern (Leitner-System). „Gewusst“ schiebt eine Karte ein Fach höher (Wiederholung nach 1, 3, 7, 14 Tagen), „Nicht gewusst“ holt sie zurück in Fach 1 und zeigt sie in derselben Runde noch einmal. Filter nach Thema und Kapitel.
- **Quiz**: Multiple Choice mit Erklärung und Seitenangabe; falsch beantwortete Fragen lassen sich gezielt wiederholen. Im Antwortmodus „Wie in der Prüfung“ wird angekreuzt; wie im Prüfungsbogen steht hinter jeder Frage (1) = genau eine Antwort richtig oder (1+) = mehrere Antworten richtig (nie alle).
- **Prüfungssimulation**: 60 Fragen aus allen Themen in 90 Minuten mit Countdown und (1)/(1+)-Kennzeichnung, Auswertung erst nach der Abgabe – nach dem Prüfungsformat aus der Mitschrift.
- **Skript**: die Zusammenfassungen zum Nachlesen, mit Volltextsuche über alle Lernkarten.
- **Themen**: eigene Karten anlegen, Themen als JSON importieren, Lernstand sichern und wiederherstellen.

Der Lernstand wird im Browser gespeichert (localStorage), also getrennt pro Gerät und Browser. Für einen Gerätewechsel: *Themen → Sicherung & Wiederherstellung*.

## Benutzen

### Auf dem Handy installieren

Die App ist eine installierbare Web-App mit Offline-Betrieb. Voraussetzung ist,
dass GitHub Pages für dieses Repository eingeschaltet ist
(*Settings → Pages → Build and deployment → Source: „Deploy from a branch“,
Branch `ccr-04fb7d8b-0kgaf9`, Ordner `/ (root)` → Save*). Die Adresse der App
steht danach auf derselben Einstellungsseite.

1. Adresse auf dem Handy öffnen und einmal mit Internet laden.
2. **iPhone (Safari):** Teilen-Symbol → „Zum Home-Bildschirm“.
   **Android (Chrome):** Menü ⋮ → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.
3. Die App startet danach vom Startbildschirm und funktioniert auch offline.
   Mit Internet lädt sie automatisch die neueste Version (z. B. neue Themen).

### Weitere Varianten

- **Als Einzeldatei:** `dist/Wundmanager-Lernapp.html` herunterladen und öffnen. Diese Datei enthält alles und funktioniert offline, auch auf dem Handy.
- **Entwicklungsversion:** `index.html` öffnen (lädt die Themen aus `themen/`).

## Neues Thema hinzufügen

### Fest in die App (empfohlen)

1. Neue Datei `themen/<name>.js` anlegen, Aufbau wie `themen/gefaesse.js`:

   ```js
   Lernapp.thema({
     id: "dekubitus",              // eindeutige Kennung, nie mehr ändern
     titel: "Dekubitus",
     kurz: "Dekubitus",            // kurzer Name für Auswahl-Chips
     quelle: "Kursheft …",
     hinweis: "Seitenangaben beziehen sich auf das Heft.",
     karten: [
       { k: "Kapitel", f: "Frage?", a: "Antwort.\nNeue Zeile", s: "S. 3" },
       { k: "Kapitel", f: "…", a: "…", s: "S. 4", h: true }   // h = nur handschriftlich
     ],
     quiz: [
       // Die richtigen Antworten stehen immer vorne; die App mischt.
       { f: "Frage?", o: ["richtig", "falsch", "falsch", "falsch"], e: "Erklärung", s: "S. 3" },
       // r = Anzahl richtiger Antworten (Standard 1, nie alle)
       { f: "Frage?", o: ["richtig", "richtig", "falsch", "falsch"], r: 2, e: "Erklärung", s: "S. 3" }
     ],
     zusammenfassung: `<h3>1. Abschnitt <span class="seite">S. 3</span></h3><ul><li>…</li></ul>`
   });
   ```

2. In `index.html` im Block **THEMEN-DATEIEN** eine Zeile ergänzen und den Pfad in `sw.js` unter `DATEIEN` eintragen (für den Offline-Betrieb):
   `<script src="themen/<name>.js"></script>`
3. Einzeldatei neu erzeugen: `python3 tools/build.py`

Der Lernstand hängt an der Thema-`id` und am Wortlaut der Frage. Wird eine Frage umformuliert, gilt sie als neue Karte.

### Ohne Programmierung (nur im eigenen Browser)

In der App unter *Themen → Thema importieren* eine JSON-Datei mit demselben Aufbau laden (Vorlage per Knopf „Vorlage einsetzen“), oder unter *Eigene Karte hinzufügen* einzelne Karten eintippen.

Zur Formatierung in Zusammenfassungen stehen die Klassen `seite`, `stern` (★ prüfungsrelevant), `warnung`, `hand` (handschriftliche Notiz), `hand-inline` und `merke` zur Verfügung; Tabellen in `<div class="tabelle">` einpacken.
