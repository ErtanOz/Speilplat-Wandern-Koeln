# Release 1.0

Stand: 2026-10-11. Vollständige statische App mit drei Tourvorschlägen,
neun echten Spielplatzstopps, Suche, Stadtteilfilter und interaktiver Karte.

## Produktion lokal prüfen

```powershell
node scripts/check-data.mjs
node scripts/build.mjs
python -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Dann `http://127.0.0.1:8000` öffnen. Wenn Port 8000 belegt ist, 8001 verwenden.
Bei Deployment auf einen statischen Hoster ist `dist` das Veröffentlichungsverzeichnis.
Build-Befehl: `node scripts/build.mjs`. Keine Umgebungsvariablen oder API-Schlüssel nötig.

## Grenzen

Wege sind im Fußprofil berechnet, nicht vor Ort geprüft. Keine Live-Sperrungen,
Navigation, Offline-Karten oder zugesicherte Barrierefreiheit. Der genaue
Aktualisierungsstand einzelner Spielplätze ist unbekannt. Kartenkacheln kommen
von OpenStreetMap; Ausfall wird angezeigt und die Stoppliste bleibt benutzbar.
Ein begleiteter Lerntest mit dem Nutzer und eine reale Begehung sind noch offen.

Der Quellcode wird im vom Nutzer benannten GitHub-Repository bereitgestellt.
Ein GitHub-Push bedeutet nicht automatisch eine öffentlich gehostete Webseite.
Eine private Sites-Hosting-Identität wurde angelegt; Veröffentlichung dort ist
noch nicht abgeschlossen und wird nicht als erfolgreich behauptet.
