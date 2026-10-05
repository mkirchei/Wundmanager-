#!/usr/bin/env python3
"""Fügt index.html und alle eingebundenen Themen-Dateien zu einer einzigen
HTML-Datei zusammen (dist/Wundmanager-Lernapp.html).

Die Einzeldatei funktioniert offline, z. B. per Doppelklick, auf dem Handy
oder als Anhang. Aufruf:  python3 tools/build.py
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "index.html"
OUT = ROOT / "dist" / "Wundmanager-Lernapp.html"

SCRIPT_RE = re.compile(r'<script src="(themen/[^"]+\.js)"></script>')


def inline(match: re.Match) -> str:
    path = ROOT / match.group(1)
    if not path.exists():
        sys.exit(f"Fehler: {match.group(1)} ist in index.html eingebunden, existiert aber nicht.")
    code = path.read_text(encoding="utf-8")
    # "</script" im Inhalt würde das Inline-Skript vorzeitig beenden.
    code = code.replace("</script", "<\\/script")
    return f"<script>/* {match.group(1)} */\n{code}\n</script>"


def main() -> None:
    html = SRC.read_text(encoding="utf-8")
    eingebunden = SCRIPT_RE.findall(html)
    vorhanden = sorted(p.relative_to(ROOT).as_posix() for p in (ROOT / "themen").glob("*.js"))
    fehlend = [p for p in vorhanden if p not in eingebunden]
    if fehlend:
        print("Hinweis: nicht in index.html eingebunden:", ", ".join(fehlend))
    html = SCRIPT_RE.sub(inline, html)
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(html, encoding="utf-8")
    print(f"{OUT.relative_to(ROOT)} geschrieben ({len(eingebunden)} Themen, {OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
