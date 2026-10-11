# Spielplatz Wandern Köln

Web-App für drei vorgegebene Spielplatzspaziergänge in Ehrenfeld, Lindenthal und
Nippes. Übersicht, Suche, Stadtteilfilter, Tourdetails, nummerierte Kartenstopps
und vorab berechnete Fußwegverläufe. Ohne Konto oder Standortabfrage.

## Lernen

[Das ausführliche Lernhandbuch](docs/LERNHANDBUCH.md) erklärt für Anfänger den
Spec-Driven Prozess, alle wichtigen Dateien, HTML, CSS, JavaScript, Daten, Karte,
Tests, Start und Änderungen. [Release und Grenzen](docs/RELEASE.md).

## Lokal starten

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Im Browser: http://127.0.0.1:8000. Beenden: Strg+C im Terminal.

## Produktionspaket

```powershell
node scripts/check-data.mjs
node scripts/build.mjs
```

`dist` enthält die Dateien für einen statischen Hoster. Keine API-Schlüssel nötig.
Build und Datenprüfung benötigen Node.js; die App selbst läuft im Browser.

## Quellen

Spielplätze: [Stadt Köln](https://data.gov.de/suche/daten/spiel-und-sportplatze-in-koln),
Abruf 11.10.2026, tatsächlicher Aktualisierungsstand unbekannt.
Fußwege: Valhalla / OpenStreetMap, vor Ort ungeprüft.
Karte: Leaflet 1.9.4, OpenStreetMap-Kacheln mit Attribution.
Keine Zusage zur Kinderwagen- oder Rollstuhleignung.

## Spec-Driven Dokumente

Die [Spec](specs/001-spielplatz-wandern-koeln/spec.md) beschreibt das gewünschte
Verhalten. Der [Release-Plan](specs/001-spielplatz-wandern-koeln/release-plan.md)
beschreibt die fertige Architektur. Aufgaben und Prüfergebnisse liegen im selben
Feature-Ordner. [AGENTS.md](AGENTS.md) enthält die Codex-Projektanweisungen.
Die bestehende Spec-Kit/Copilot-Einrichtung bleibt erhalten.
