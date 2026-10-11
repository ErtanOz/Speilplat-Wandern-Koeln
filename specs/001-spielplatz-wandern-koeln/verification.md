# Prüfergebnisse

## T001 — HTML-Grundgerüst, 2026-10-11

- Lokaler Python-Dateiserver unter `http://127.0.0.1:8000` gestartet.
- Seite mit Playwright CLI in einem echten Browser geöffnet.
- Browser-Tab-Titel und sichtbare Hauptüberschrift: „Spielplatz Wandern Köln“.
- Dokumentensprache geprüft: `de`.
- Übersicht sichtbar, vorbereiteter Detailbereich verborgen.
- Smartphone-Viewport im HTML vorhanden; responsive Gesamtprüfung folgt T006/T008.
- Browser meldete eine fehlende `favicon.ico` (Tab-Symbol); kein App-Skript vorhanden.
  Die Inhaltsdarstellung war davon unbeeinträchtigt.

T001 bestanden. Tourdaten, Auswahl, Gestaltung und Gesamtprüfung noch offen.

## T002 — Demo-Tourdaten, 2026-10-11

- `src/tours.js` mit `node --check` auf JavaScript-Syntax geprüft: bestanden.
- Datenliste mit Node eingelesen und gegen die Regeln aus `data-model.md` geprüft:
  drei Touren, eindeutige IDs, ausgefüllte Pflichttexte, positive Weglängen,
  positive ganzzahlige Gehzeiten, jeweils mindestens zwei geordnete Stopps.
- Stopp-IDs innerhalb der Touren eindeutig; Ausstattungslisten korrekt aufgebaut.
- Jede Tour hat `isDemo: true`, Demo im Namen, die Herkunft
  „Erfundenes Lernbeispiel“ und keinen realen Datenstand.
- Alle Ortsbeschreibungen sind ausdrücklich erfunden; keine Koordinaten oder
  realen Fußwegverläufe hinterlegt.

T002 bestanden. Die Daten werden noch nicht von der HTML-Seite geladen.
Die sichtbare Tourübersicht und ihre Browserprüfung folgen in T003.

## Release 1.0 — 2026-10-11

Nach Gesamtabschlussauftrag wurden die Demo-Touren durch echte städtische
Spielplatzdaten und Valhalla-Fußwege ersetzt. Alle folgenden Prüfungen bestanden:

- JavaScript-Syntax von app.js und import-tours.mjs mit Node geprüft.
- check-data.mjs: drei gültige Touren, neun Stopps, Wegpunkte im Kölner Bereich,
  Fußwege weniger als 100 m von jedem Stopp entfernt; Geometrielänge stimmt mit
  angezeigter Länge bis auf Rundung überein.
- Reale Browserprüfung mit Playwright CLI: alle drei Touren geöffnet; jeweils drei
  Marker und drei Stopps, Auswahl des zweiten Stopps und Rücknavigation geprüft.
- Suche und Stadtteilfilter, Zurücksetzen und keine Treffer geprüft.
- Übersicht und Details bei 1280 und 360 Pixel Breite ohne horizontalen Überlauf.
- Desktop-Übersicht und Smartphone-Detailansicht per Screenshot visuell geprüft.
- Tastatur: Tour mit Enter geöffnet, Fokus auf Detailüberschrift; nach Rückkehr
  Fokus auf vorherigem Tourbutton.
- Unbekannte Tour-ID mit verständlichem Hinweis und Rückweg.
- Netzwerkfehler für Kartenkacheln simuliert: Fehlermeldung sichtbar, Stopps nutzbar.
- Fehlendes Leaflet simuliert: Fehlerhinweis sichtbar, Stoppliste nutzbar.
- Leere Tourdaten simuliert: verständlicher Leerzustand.
- App-/Datenschutzdialog geöffnet und mit Escape geschlossen.
- Produktionsdateien nach dist erstellt und dist-Seite im Browser geöffnet.

Erwartete Netzwerkmeldungen entstanden nur bei simulierten Kartenfehlern.
Keine Begehung und kein Nutzertest mit Anfänger-Testperson durchgeführt. SC-002
(Zwei-Minuten-Lerntest) bleibt offen. Eine vollständige Barrierefreiheitsprüfung
oder browserübergreifende Geräteprüfung wurde nicht durchgeführt.
