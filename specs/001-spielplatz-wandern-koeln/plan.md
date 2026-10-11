# Implementation Plan: Spielplatz Wandern Köln — erster Zwischenstand

**Branch**: `001-spielplatz-wandern-koeln` | **Date**: 2026-10-11 | **Spec**: [spec.md](spec.md)

## Summary

Aktueller Release-Entwurf: [release-plan.md](release-plan.md).
Dieser Plan beschreibt den ursprünglichen Lernzwischenstand.

Wir bauen Übersicht und Detailansicht mit drei gekennzeichneten Demo-Touren.
HTML stellt die Inhalte bereit, CSS gestaltet sie, JavaScript zeigt die Tourdaten
und reagiert auf die Auswahl. Die Karte folgt in einem späteren Lernschritt.
Dies ist ein Plan, noch keine Implementierung.

## Technical Context

- **Language/Version**: HTML, CSS und JavaScript mit Standard-Browserfunktionen.
- **Primary Dependencies**: Keine externen Bibliotheken für diesen Zwischenstand.
- **Storage**: Drei feste Demo-Touren in `src/tours.js`; keine Datenbank.
- **Testing**: Browser-Abnahme nach `quickstart.md`; Ergebnisse später in `verification.md`.
- **Target Platform**: Desktop- und Smartphone-Browser, zunächst 360 und 1280 Pixel breite Ansichten.
- **Project Type**: Statische Web-App; Berechnung und Anzeige laufen im Browser.
- **Performance Goals**: Drei Touren ohne externe Datenabfrage anzeigen; Auswahl ohne Seitenneuladen.
- **Constraints**: Keine Anmeldung, Standortabfrage oder externen Tourdaten. Jede Tour sichtbar als Demo kennzeichnen.
- **Scale/Scope**: Eine HTML-Seite mit wechselnder Übersicht und Detailansicht, drei Touren mit mindestens zwei Stopps.

## Constitution Check

Vor und nach Entwurf geprüft:

- I: Spec liegt vor; dieser Plan beschreibt die technische Lösung; Aufgaben folgen separat.
- II: Nur Planung in diesem Lernschritt, keine automatische Implementierung.
- III: Standard-Webbausteine, vier überschaubare App-Dateien, keine zusätzliche Bibliothek.
- IV: Browser-Abnahmen und offene Prüfungen sind beschrieben.
- V: Demo-Daten, Herkunftshinweis und Nutzung ohne Konto oder Standort vorgesehen.

Keine begründungsbedürftigen Regelabweichungen.

## Project Structure

### Documentation (this feature)

- `spec.md`: gewünschtes Verhalten.
- `plan.md`: technische Lösung, dieses Dokument.
- `research.md`: Entscheidungen und Gründe.
- `data-model.md`: Aufbau der Tourdaten.
- `contracts/ui.md`: sichtbares Verhalten der Ansichten.
- `quickstart.md`: späterer Start und Abnahme.
- `tasks.md`: wird im nächsten Lernschritt erstellt.
- `verification.md`: wird bei tatsächlichen Prüfungen erstellt.

### Source Code (repository root, geplant)

```text
index.html
src/
  styles.css
  tours.js
  app.js
```

**Structure Decision**: Inhalt, Gestaltung, Daten und Verhalten erhalten jeweils
eine eigene Datei. `index.html` lädt erst `tours.js`, dann `app.js` als klassische
Skripte mit `defer`. Das Tourdaten-Skript stellt eine Liste `demoTours` bereit.
So ist für Anfänger sichtbar, welche Datei welche Aufgabe hat.

## Ablauf der App

1. Browser lädt HTML, CSS und die beiden JavaScript-Dateien.
2. `app.js` liest `demoTours` und zeigt drei Tourkarten mit den fünf Pflichtangaben.
3. Ein echter HTML-Button trägt die eindeutige Tour-ID.
4. Beim Anklicken sucht JavaScript die Tour und zeigt ihre Details statt der Übersicht.
5. Der Fokus wechselt zur Detailüberschrift; der Zurück-Button zeigt wieder die Übersicht
   und setzt den Fokus auf den zuvor gewählten Tourbutton.

Tourtexte werden mit `textContent` eingefügt. Stoppanzahl wird aus der Liste
berechnet. Fehlende optionale Angaben erscheinen als „Keine Angabe“.
Ein unbekannter Tourbezeichner erhält einen Hinweis und Rückweg zur Übersicht.
Bei leerer Tourliste erscheint ein Leerzustand.

## Daten und spätere Karte

Die ersten drei Touren sind vollständig erfundene Lernbeispiele, keine geprüften
Ausflugsempfehlungen. Start und Ziel sind lesbare Demo-Orte. Koordinaten und
Wegverläufe werden jetzt nicht erfunden. Vor dem Karten-Lernschritt müssen
Datenquelle, Nutzungsbedingungen und Fußwegverläufe geprüft und Plan sowie
Datenmodell erweitert werden. FR-004 und FR-005 bleiben bis dahin offen.

## Prüfung und Grenzen

Abnahme von FR-001 bis FR-003, FR-010 und FR-011 sowie Smartphone- und Tastaturbedienung
für Übersicht und Details. Drei Touren, jeweils mindestens zwei Stopps;
Tourauswahl, Rücknavigation, Demo-Kennzeichnung und Gehzeit ohne Pausen prüfen.
Keine Behauptung, dass alle Erfolgskriterien der gesamten Version 1 erfüllt sind.

## Lokaler Start

Für eine Browserprüfung verwenden wir einen lokalen Dateiserver, der die App-Dateien
unter `http://127.0.0.1:8000` ausliefert. Python ist vorhanden. Vorgesehener Befehl:
`python -m http.server 8000 --bind 127.0.0.1` aus dem Projektordner.
Der Server wird erst im Implementierungsschritt gestartet. Er speichert keine Touren.
