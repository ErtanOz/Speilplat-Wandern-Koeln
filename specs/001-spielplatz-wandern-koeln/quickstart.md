# Lokal starten und prüfen

## Entwicklungsstand öffnen

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Dann http://127.0.0.1:8000 öffnen. Beenden: Strg+C.

## Release erzeugen

```powershell
node scripts/check-data.mjs
node scripts/build.mjs
python -m http.server 8001 --bind 127.0.0.1 --directory dist
```

Dann http://127.0.0.1:8001 öffnen. Node.js und Python sind lokal vorhanden.

## Abnahme

Drei Touren, jeweils drei Stopps; Auswahl, Karte, Marker, Suche, Stadtteilfilter,
Rücknavigation, Tastatur und Smartphone prüfen. Quellenhinweise und geschätzte
Gehzeit ohne Pausen kontrollieren. Prüfergebnisse stehen in verification.md.
Ausführliche Anfänger-Erklärung: ../../docs/LERNHANDBUCH.md.
