Du hilfst mir, an **Burhān** mitzuarbeiten. Burhān ist eine animierte Widerlegungs-Bibliothek (islamische Apologetik) als Website. Mein Freund Noel hat sie gebaut, ich erweitere sie jetzt mit.

## Zugang
- Live-Seite: https://damandam.github.io/burhan/ (Passwort: `Noel`)
- Code: https://github.com/damandam/burhan (Branch `main`, öffentlich)
- Jeder Push auf `main` geht nach etwa 1 Minute automatisch live (GitHub Actions → GitHub Pages, siehe `.github/workflows/pages.yml`). Ob es geklappt hat, sieht man unter https://github.com/damandam/burhan/actions
- Ich brauche ein GitHub-Konto. Mein Benutzername geht an Noel, er lädt mich als Collaborator ein, und ich nehme die Einladung unter https://github.com/damandam/burhan/invitations an. Vorher kann ich nur lesen, nicht pushen.

## Einrichten (bitte für mich machen und erklären)
1. Prüfen, ob `git` und die GitHub CLI `gh` installiert sind. Falls nicht, installieren (Mac: `brew install git gh`).
2. Mit `gh auth login` einloggen (GitHub.com → HTTPS → im Browser einloggen). Den Code im Browser gebe ich selbst ein.
3. Klonen: `gh repo clone damandam/burhan && cd burhan`
4. Lokal starten: `python3 -m http.server 5179`, dann http://localhost:5179 öffnen.

## Der Skill „burhan“ (das Wichtigste)
Im Repo liegt der Skill `.claude/skills/burhan/SKILL.md`. Er beschreibt genau, wie man Inhalte richtig in Burhān einbaut und veröffentlicht: passende Karte finden, Karte schreiben, testen, pushen, Deploy prüfen.
- Wenn Claude Code im Ordner `burhan` läuft, ist der Skill automatisch da. Ich kann dann einfach sagen: **„/burhan“** oder **„pack das in Burhān: …“** (Text, PDF, Link, Screenshot, Discord-Nachricht).
- Damit er in **jedem** Chat funktioniert: kopiere den Ordner `.claude/skills/burhan` nach `~/.claude/skills/burhan` (Windows: `%USERPROFILE%\.claude\skills\burhan`). Nach einem `git pull` die Kopie erneuern, falls sich der Skill geändert hat.
- Folge bei jeder Änderung diesem Skill, nicht der älteren Anleitung unten, falls sich etwas widerspricht.

## Bevor du etwas änderst
Lies zuerst **`HANDOFF-GEMINI.md`** und dann **`PROGRESS.md`** im Repo. Dort steht, wie das Projekt aufgebaut ist, wie eine Karte geschrieben wird (`topics/*.js`, Helfer `N()`, `card()`, `add()`), welche Regeln gelten und was noch offen ist.
- Die Pfade dort (`/Users/noelabedin/...`, `~/Downloads/burhan-*.json`) gelten nur auf Noels Rechner. Die Discord-Exporte habe ich nicht.
- Inhalte kommen nur aus den Quellen, die ich dir gebe (Discord-Texte, Artikel, Videos). Erfinde keine Argumente. Kleine, eindeutig richtige Ergänzungen (eine korrekte Hadith-Nummer, ein Bibelvers) sind okay.
- Die Website ist auf Englisch. Erklär mir alles auf Deutsch.

## Arbeitsablauf bei jeder Änderung
1. `git pull`: zuerst immer Noels neueste Version holen.
2. Eine neue Themen-Datei in `topics/` anlegen und **ans Ende** der Loader-Liste in `index.html` setzen. Spätere Dateien überschreiben frühere.
3. Prüfen:
   - `node --check topics/<datei>.js`
   - Seite neu laden
   - Im Browser-Konsole: keine Fehler, die neue Karte ist da, die Suche findet sie
   - Auch die Handy-Ansicht (375 px breit) kurz checken
4. Den Block in `PROGRESS.md` eintragen.
5. `git add` (nur die geänderten Dateien), `git commit` mit klarer Nachricht, dann `git push`.
6. Bei Konflikten nichts überschreiben: zuerst `git pull --rebase`, die Konflikte sauber lösen und mir zeigen, was du gemacht hast.

## Regeln
- Nicht das Design oder die Animationen in `index.html` umbauen, außer ich frage ausdrücklich danach.
- Keine doppelten Karten: Gibt es ein Thema schon, die neue Info als Zweig in die bestehende Karte einbauen.
- `topics/library.js` nicht von Hand bearbeiten (wird automatisch erzeugt).
- Keine Passwörter, Tokens oder privaten Daten committen.
- Nichts löschen, was Noel geschrieben hat, ohne mich zu fragen.

Fang an, indem du das Repo einrichtest, die zwei Dateien liest und mir in ein paar Sätzen auf Deutsch zusammenfasst, wie das Projekt funktioniert und was als Nächstes offen ist.
