# Wundmanager Prüfungstrainer

Lern-App zur Prüfungsvorbereitung Wundmanager / Wundexperte. Die App läuft im Browser, braucht keine Installation und keinen Server.

## Inhalte

| Thema | Lernkarten | Quizfragen | Quelle |
|---|---|---|---|
| Gefäßsysteme & Gefäßerkrankungen | 35 | 26 | murimed-Lernheft |
| Erkrankungen der Haut | 44 | 29 | murimed-Kursheft Wundexperte Modul I |

Die Lernkarten und Zusammenfassungen sind aus den PDF-Unterlagen
`Lernkarten_*.pdf` und `Zusammenfassung_*.pdf` übernommen. Die Quizfragen
sind aus den Zusammenfassungen abgeleitet. Jede Karte und Frage nennt die
Seitenzahl im Heft. Inhalte, die nur aus handschriftlichen Notizen im Heft
stammen, sind als „handschriftlich“ markiert.

## Funktionen

- **Karten**: Karteikarten mit Lernfächern (Leitner-System). „Gewusst“ schiebt eine Karte ein Fach höher (Wiederholung nach 1, 3, 7, 14 Tagen), „Nicht gewusst“ holt sie zurück in Fach 1 und zeigt sie in derselben Runde noch einmal. Filter nach Thema und Kapitel.
- **Quiz**: Multiple Choice mit Erklärung und Seitenangabe; falsch beantwortete Fragen lassen sich gezielt wiederholen.
- **Skript**: die Zusammenfassungen zum Nachlesen, mit Volltextsuche über alle Lernkarten.
- **Themen**: eigene Karten anlegen, Themen als JSON importieren, Lernstand sichern und wiederherstellen.

Der Lernstand wird im Browser gespeichert (localStorage), also getrennt pro Gerät und Browser. Für einen Gerätewechsel: *Themen → Sicherung & Wiederherstellung*.

## Benutzen

- **Einfachste Variante:** `dist/Wundmanager-Lernapp.html` herunterladen und öffnen. Diese Datei enthält alles und funktioniert offline, auch auf dem Handy.
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
       // Die RICHTIGE Antwort steht immer an erster Stelle; die App mischt.
       { f: "Frage?", o: ["richtig", "falsch", "falsch", "falsch"], e: "Erklärung", s: "S. 3" }
     ],
     zusammenfassung: `<h3>1. Abschnitt <span class="seite">S. 3</span></h3><ul><li>…</li></ul>`
   });
   ```

2. In `index.html` im Block **THEMEN-DATEIEN** eine Zeile ergänzen:
   `<script src="themen/<name>.js"></script>`
3. Einzeldatei neu erzeugen: `python3 tools/build.py`

Der Lernstand hängt an der Thema-`id` und am Wortlaut der Frage. Wird eine Frage umformuliert, gilt sie als neue Karte.

### Ohne Programmierung (nur im eigenen Browser)

In der App unter *Themen → Thema importieren* eine JSON-Datei mit demselben Aufbau laden (Vorlage per Knopf „Vorlage einsetzen“), oder unter *Eigene Karte hinzufügen* einzelne Karten eintippen.

Zur Formatierung in Zusammenfassungen stehen die Klassen `seite`, `stern` (★ prüfungsrelevant), `warnung`, `hand` (handschriftliche Notiz), `hand-inline` und `merke` zur Verfügung; Tabellen in `<div class="tabelle">` einpacken.
