# Release-Plan Version 1.0

Nutzerauftrag vom 2026-10-11: Gesamtprojekt abschließen und danach in Markdown erklären.
Die schrittweisen Pausen entfallen für diesen Abschlussauftrag.

## Erweiterung der Spec und des Plans

Version 1 enthält die vollständigen Stories US1, US2 und US3: Touren vergleichen,
Details, interaktive Karte mit nummerierten Stopps, Smartphone und Tastatur.
Die drei Demo-Touren werden durch Tourvorschläge zwischen echten Kölner Spielplätzen
ersetzt. Wege werden vorab mit Valhalla im Fußprofil berechnet. Sie sind nicht
vor Ort geprüft; das ist in der Oberfläche sichtbar. Keine Live-Navigation.

## Architektur

HTML/CSS/JavaScript bleiben erhalten. Leaflet 1.9.4 wird lokal mit Lizenz abgelegt;
OpenStreetMap-Kacheln werden nur bei sichtbarer Karte geladen, mit Attribution,
ohne Bulk-Downloads. Spielplätze und Wege liegen statisch in tours.js. Keine
Routing- oder Datendienst-Abhängigkeit beim Öffnen der App, nur externe Kartenkacheln.
Hash-Adressen erlauben Tour-Direktlinks und Browser-Zurück. Suchtext und Stadtteil
filtern die Übersicht. Fehlermeldungen lassen Stopplisten immer benutzbar.
Produktionsdateien werden nach dist kopiert, Entwicklungsdateien nicht veröffentlicht.

## Datenmodell-Erweiterung

`tours` ersetzt `demoTours`. Stopps erhalten `lat` und `lon` aus dem städtischen
Datensatz. `path` enthält [Breite, Länge]-Paare der dekodierten Fußroute.
`routeSource`, `routeStatus`, `sourceUrl` und `dataDate` dokumentieren Herkunft
und Abrufdatum. Das Abrufdatum ist keine Zusage über die Aktualität vor Ort.
Gehzeit wird mit 4 km/h geschätzt, ohne Spielpausen.

## Aufgaben und Abnahme

- [x] R001 Spec/Plan-Erweiterung und autorisierten Gesamtabschluss festhalten.
- [x] R002 Drei reale Touren und nachvollziehbare Fußweggeometrien importieren.
- [x] R003 Übersicht, Filter, Details, Stopps und Rücknavigation umsetzen.
- [x] R004 Leaflet-Karte, Marker, Route und Kartenfehler-Fallback umsetzen.
- [x] R005 Responsive Darstellung und Tastaturbedienung prüfen.
- [x] R006 Daten- und Browserprüfungen einschließlich Randfällen dokumentieren.
- [ ] R007 dist-Release erstellen und veröffentlichen, wenn Hosting verfügbar ist.
- [x] R008 Anfänger-Dokumentation mit Dateien, Code, Spec-Prozess und Start erstellen.

## Quellen

- Stadt Köln: https://geoportal.stadt-koeln.de/arcgis/rest/services/freizeit_natur_sport/spielangebote/MapServer/0
- GovData: https://data.gov.de/suche/daten/spiel-und-sportplatze-in-koln
- Lizenzfilter GovData (DL-DE Zero 2.0): https://data.gov.de/suche?licence=http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fdl-zero-de%2F2.0&publisher=Stadt+K%C3%B6ln&sourceportal=ec74990f-c51f-4378-845d-132b1f75a550&tags=freizeit
- Valhalla: https://valhalla.github.io/valhalla/api/turn-by-turn/overview/
- Leaflet: https://leafletjs.com/download.html
- OSM-Kacheln: https://operations.osmfoundation.org/policies/tiles/

