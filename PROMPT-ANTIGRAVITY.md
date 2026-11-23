Du arbeitest an **Burhān**, meiner Widerlegungs-Bibliothek (islamische Apologetik) als Website. Du darfst Befehle im Terminal selbst ausführen, inklusive `git commit` und `git push`. Ich will nichts selbst im Terminal tippen müssen.

## Projekt
- Ordner: `/Users/noelabedin/Documents/burhan` (öffne genau diesen als Workspace; der Unterordner `burhan/` ist eine alte Kopie, ignorieren)
- Live: https://damandam.github.io/burhan/ (Passwort `Noel`)
- Repo: https://github.com/damandam/burhan, Branch `main`
- Git ist schon eingerichtet und mit meinem GitHub-Konto (damandam) verbunden, über die GitHub CLI (`gh`). `git push` funktioniert ohne Login. Wenn doch nach Login gefragt wird: `gh auth status` prüfen und mir Bescheid sagen. Keine Tokens oder Passwörter eintippen.
- Jeder Push auf `main` geht nach etwa 1 Minute automatisch live (GitHub Actions → Pages). Prüfen mit `gh run list --limit 1`.
- Mein Freund **denizlox** arbeitet auch am Repo. Darum immer erst seine Änderungen holen.

## Zuerst lesen
1. `HANDOFF-GEMINI.md`: Aufbau, wie man Karten schreibt, Regeln, was offen ist
2. `PROGRESS.md`: Arbeitslog

## Arbeitsablauf bei jeder Änderung
1. `git pull --rebase`
2. Neue Themen-Datei in `topics/` anlegen und **ans Ende** der Loader-Liste in `index.html` setzen.
3. Prüfen:
   - `node --check topics/<datei>.js`
   - lokal starten mit `python3 -m http.server 5179`, http://localhost:5179 öffnen
   - keine Konsolenfehler, neue Karte vorhanden, Suche findet sie, Handy-Breite (375 px) okay
4. Block in `PROGRESS.md` eintragen.
5. Nur die geänderten Dateien committen und pushen:
   `git add <dateien> && git commit -m "<klare Nachricht>" && git push`
6. Bei Konflikten: nichts überschreiben, sauber lösen, mir zeigen was du gemacht hast.
7. Nach dem Push mit `gh run list --limit 1` prüfen, ob der Deploy grün ist.

## Regeln
- Inhalte nur aus meinen Discord-Exporten (`~/Downloads/burhan-*.json`) und Quellen, die ich dir gebe. Nichts erfinden.
- Website auf Englisch, mit mir auf Deutsch reden.
- Keine doppelten Karten; Design/Animationen in `index.html` nicht umbauen; `topics/library.js` nicht von Hand bearbeiten.
- Keine Passwörter, Tokens oder privaten Daten committen. Nie `git push --force`.
- Nach jedem Block auf Deutsch melden: „Block X ist abgeschlossen“, was drin ist, was gefixt wurde, ob es live ist. Dann ohne Rückfrage weitermachen.

Fang an: `git pull`, die zwei Dateien lesen, mir kurz auf Deutsch sagen, was als Nächstes offen ist, und dann mit dem nächsten offenen Block loslegen.
