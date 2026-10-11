# Tasks: Spielplatz Wandern Köln — erster Zwischenstand

**Input**: [plan.md](plan.md), [spec.md](spec.md), [data-model.md](data-model.md),
[research.md](research.md), [Oberflächenvereinbarung](contracts/ui.md).

**Status**: T001 bis T008 umgesetzt und geprüft. Demo-Daten im Release durch reale Daten ersetzt; begleiteter Lerntest als offen dokumentiert.

## Phase 1: Grundgerüst

- [x] T001 Grundgerüst in `index.html` mit deutscher Sprache, Seitentitel, Smartphone-Viewport, Hauptüberschrift und Bereichen für Übersicht und Details erstellen. Ergebnis: Eine erkennbare Startseite; noch keine Tourauswahl. Abnahme: Im Browser sind Titel und Überschrift sichtbar, die Sprache ist Deutsch.

## Phase 2: Tourdaten vorbereiten

- [x] T002 Drei ausdrücklich erfundene Demo-Touren als `demoTours` in `src/tours.js` nach `data-model.md` anlegen; je mindestens zwei geordnete Stopps, eindeutige IDs, positive Länge und Gehzeit, Herkunft und Demo-Kennzeichnung. Ergebnis: Eine gemeinsame Datenliste. Abnahme: Alle drei Datensätze erfüllen die Feldregeln; keine realen Wegangaben werden behauptet (FR-002, FR-003, FR-010, FR-011).

## Phase 3: User Story 1 — Übersicht und Details (P1)

**Ziel**: Spaziergänge vergleichen, Details öffnen und zurückkehren.

**Unabhängige Abnahme**: Drei Touren ansehen, jede öffnen und ihre Details prüfen,
zur Übersicht zurückgehen und eine andere Tour auswählen.

- [x] T003 [US1] `src/tours.js` und `src/app.js` in `index.html` mit `defer` in dieser Reihenfolge laden; Tourübersicht in `src/app.js` mit Textausgabe und echten Auswahlbuttons erzeugen. Ergebnis: Drei Tourkarten mit Name, Gebiet, km, Gehzeit ohne Spielpausen, berechneter Stoppanzahl und Demo-Hinweis. Abnahme: Alle fünf Angaben und Demo-Hinweise im Browser mit den Daten vergleichen (FR-001, FR-002, FR-010, FR-011).
- [x] T004 [US1] Tourauswahl und Detaildarstellung in `src/app.js` umsetzen; Start, Ziel, Beschreibung, Stoppreihenfolge, Herkunft und Demo-Datenstand anzeigen. Ergebnis: Der Auswahlbutton öffnet genau die gewählte Tour. Abnahme: Alle drei Touren öffnen und ihre Angaben mit `src/tours.js` vergleichen (FR-003, FR-010).
- [x] T005 [US1] Rücknavigation und Fokuswechsel in `src/app.js` umsetzen; bei Öffnen die Detailüberschrift fokussieren, bei Rückkehr den vorherigen Tourbutton. Ergebnis: Übersicht und Details sind per Tastatur bedienbar. Abnahme: Mit Tab und Enter auswählen, zurückgehen und eine andere Tour öffnen (FR-007 für diesen Zwischenstand).

## Phase 4: Gestaltung und Robustheit

- [x] T006 Übersicht und Details in `src/styles.css` gestalten und Stylesheet in `index.html` einbinden; lesbare Abstände, flexible Tourkarten, sichtbaren Tastaturfokus und Smartphone-Darstellung ergänzen. Ergebnis: Nutzbare Ansichten bei 360 und 1280 Pixel Breite. Abnahme: Beide Ansichten bei beiden Breiten ohne horizontales Scrollen prüfen (FR-007 für diesen Zwischenstand).
- [x] T007 Leerzustand, unbekannte Tour-ID und unbekannte optionale Angaben in `src/app.js` behandeln. Ergebnis: Verständlicher Hinweis mit Rückweg beziehungsweise „Keine Angabe“. Abnahme: Fehlerfälle kontrolliert ausprobieren, Änderungen an Testdaten anschließend zurücknehmen und Ergebnis dokumentieren (FR-009 ohne Kartenfehler; FR-006 als Vorbereitung).
- [x] T008 Gesamtabnahme nach `specs/001-spielplatz-wandern-koeln/quickstart.md` durchführen; Ergebnisse und offene Punkte in `specs/001-spielplatz-wandern-koeln/verification.md` festhalten und Startanleitung an die tatsächliche Umsetzung anpassen. Ergebnis: Dokumentierte Browserprüfung mit Datum, Umgebung und Ist-Ergebnissen; zusätzlich Lerntest SC-002 gemeinsam durchführen oder als offen markieren. Abnahme: Touranzahl, Pflichtangaben, Details, Navigation, Demo-Hinweise, Tastatur, beide Breiten und Fehlerfälle geprüft; Anmeldung und Standortfreigabe nicht erforderlich.

## Abhängigkeiten und Reihenfolge

Wir arbeiten zum Lernen nacheinander: T001 → T002 → T003 → T004 → T005 →
T006 → T007 → T008. T003 benötigt Grundgerüst und Daten; T004 benötigt die
Auswahlbuttons; T008 benötigt alle umgesetzten Funktionen.

Technisch könnten nach T001 Daten (T002) und erste Gestaltung (Teil von T006)
getrennt vorbereitet werden. Wir nutzen diese Möglichkeit nicht für parallele
Agentenarbeit, sondern erklären jeweils einen Schritt.

## Umsetzung im Lernprojekt

Beim nächsten Weiter-Signal zunächst T001 erklären und umsetzen. Für einen
sichtbaren Zwischenschritt erst die vorhandenen Dateien einbinden; Verweise auf
noch nicht erstellte Skripte folgen in T003. Vor jeder weiteren Aufgabe das
Weiter-Signal abwarten. Eine Checkbox erst nach ihrer Abnahme abhaken.
Ein Grundgerüst ist ein Lernzwischenstand, noch keine vollständige User Story.

## Spätere Lernschritte

US2 (Karte und interaktive Stoppauswahl) erhält erst nach Daten- und Kartenplanung
eigene Aufgaben. US3 ist für Übersicht und Details teilweise in T005, T006 und
T008 berücksichtigt; eine Abnahme mit Karte bleibt offen. FR-004 und FR-005,
Kartenfehler und alle kartenbezogenen Erfolgskriterien sind nicht Teil dieser Liste.
Wir erklären den ersten Zwischenstand nicht zur vollständigen Version 1.
