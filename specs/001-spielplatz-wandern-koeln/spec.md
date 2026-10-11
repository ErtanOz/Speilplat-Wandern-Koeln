# Feature Specification: Spielplatz Wandern Köln

**Feature Branch**: `001-spielplatz-wandern-koeln`

**Created**: 2026-10-11

**Status**: Draft — Umfang geklärt, weitere Annahmen im technischen Plan prüfen

**Input**: „ich möchte eine Spielplatz Wandern Köln web app entwickeln, wir können diese idee als lernprojekt nehmen“

**Bestätigte Entscheidung**: Die erste Version bietet vorgegebene Spaziergänge mit mehreren Spielplätzen zum Entdecken.

**Release-Stand**: Der spätere Nutzerauftrag autorisiert die vollständige Umsetzung
mit Karte und anschließender Markdown-Erklärung. Der aktuelle technische Entwurf
steht in [release-plan.md](release-plan.md). Version 1 verwendet echte Spielplätze
und vorab berechnete, vor Ort ungeprüfte Fußwege. Suche und Stadtteilfilter sind
ergänzt: Treffer müssen Suchtext in Tourname, Gebiet oder Stoppname enthalten und
zum gewählten Stadtteil passen. Filter sind kombinierbar und zurücksetzbar.
Die folgenden Lernzwischenstände dokumentieren den Weg zur vollständigen Version.

## Lernschritte und erster Zwischenstand

Wir entwickeln gemeinsam mit einem Anfänger. Jeden Schritt zuerst in einfacher
Sprache erklären, das Ergebnis gemeinsam ansehen und erst danach zur nächsten
Phase wechseln. Keine vollständige App in einem unbeaufsichtigten Durchlauf bauen.

Der erste Zwischenstand umfasst nur Tourübersicht und Tourdetails (Story 1).
Die Übersicht zeigt die fünf vom Nutzer bestätigten Angaben: Name, Gebiet,
Weglänge, geschätzte Gehzeit und Anzahl der Spielplätze. Die ebenfalls bestätigte
Detailansicht zeigt Start, Ziel, Beschreibung und geordnete Spielplatzstopps.
Für diesen Zwischenstand genügt eine lesbare Stoppliste ohne Karte.

Karte und interaktive Stoppauswahl (Story 2) folgen als eigener Lernschritt.
Die untenstehenden Anforderungen und Erfolgskriterien beschreiben weiterhin die
gesamte erste Version; der erste Zwischenstand erfüllt davon zunächst FR-001 bis
FR-003, FR-010 und FR-011. Übersicht und Details sollen von Beginn an auf Smartphone
und mit Tastatur bedienbar sein. Demo-Daten werden ausdrücklich gekennzeichnet.

**Abnahme des ersten Zwischenstands**: Übersicht öffnen, die fünf Angaben prüfen,
eine Tour auswählen und Start, Ziel, Beschreibung sowie Stoppreihenfolge prüfen.
Danach zurück zur Übersicht wechseln und eine andere Tour öffnen.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Einen Spaziergang finden (Priority: P1)

Als Person, die mit Kindern in Köln unterwegs ist, möchte ich vorgegebene
Spielplatzspaziergänge vergleichen und einen passenden Ausflug auswählen.

**Why this priority**: Bereits die Übersicht mit Tourdetails liefert einen nutzbaren Ausflugsvorschlag.

**Independent Test**: Eine Person öffnet die Übersicht, vergleicht mindestens drei Touren und öffnet eine Detailansicht.

**Acceptance Scenarios**:

1. **Given** mindestens drei verfügbare Touren, **When** ich die App öffne, **Then** sehe ich für jede Tour Titel, Stadtteil beziehungsweise Gebiet, Weglänge, geschätzte reine Gehzeit und Anzahl der Spielplatzstopps.
2. **Given** die Tourübersicht, **When** ich eine Tour auswähle, **Then** sehe ich Start, Ziel, Tourbeschreibung und Spielplatzstopps in der vorgesehenen Reihenfolge.
3. **Given** eine Detailansicht, **When** ich zur Übersicht zurückkehre, **Then** kann ich eine andere Tour auswählen.

### User Story 2 - Verlauf und Stopps verstehen (Priority: P2)

Als Ausflugsplaner möchte ich den Tourverlauf auf einer Karte und die Informationen
zu jedem Spielplatz sehen, um den Spaziergang einschätzen zu können.

**Why this priority**: Der räumliche Zusammenhang macht aus einer Liste einen nachvollziehbaren Spaziergang.

**Independent Test**: Eine vorbereitete Tour mit mindestens zwei Stopps öffnen und Kartenmarkierungen mit der Stoppliste vergleichen.

**Acceptance Scenarios**:

1. **Given** eine ausgewählte Tour, **When** ihre Karte geladen ist, **Then** sehe ich Start, Ziel, nummerierte Spielplatzstopps und den hinterlegten Tourverlauf.
2. **Given** einen Spielplatzstopp, **When** ich ihn in der Liste oder Karte auswähle, **Then** sehe ich seinen Namen, seine Lage und alle verfügbaren Ausstattungsangaben.
3. **Given** fehlende Angaben zur Ausstattung, **When** ich die Details öffne, **Then** wird „Keine Angabe“ angezeigt, ohne Eigenschaften zu erfinden.
4. **Given** eine nicht verfügbare Karte, **When** ich die Tour öffne, **Then** bleiben Tourbeschreibung und Stoppliste lesbar und ein Hinweis erklärt das Kartenproblem.

### User Story 3 - Unterwegs am Smartphone nachsehen (Priority: P3)

Als begleitende Person möchte ich Tour und Stopps auch am Smartphone lesen und
bedienen können, ohne ein Konto anzulegen oder meinen Standort freizugeben.

**Why this priority**: Die App soll während eines Spaziergangs verwendbar sein.

**Independent Test**: Eine Tour auf einem schmalen Smartphone-Bildschirm öffnen, Stopps ansehen und zurück zur Übersicht wechseln.

**Acceptance Scenarios**:

1. **Given** einen 360 Pixel breiten Bildschirm, **When** ich Übersicht und Details nutze, **Then** sind Texte und zentrale Bedienelemente ohne horizontales Scrollen erreichbar.
2. **Given** keine Standortfreigabe und kein Benutzerkonto, **When** ich die App nutze, **Then** funktionieren Übersicht, Tourdetails und Stoppauswahl vollständig.
3. **Given** Tastaturbedienung, **When** ich Touren und Stopps auswähle, **Then** sind die Bedienelemente erreichbar und der Fokus sichtbar.

### Edge Cases

- Keine Touren verfügbar: verständlicher Leerzustand statt leerer Kartenfläche.
- Tour nicht gefunden: Hinweis mit Rückweg zur Übersicht.
- Fehlende Spielplatzdetails: unbekannte Angaben ausdrücklich kennzeichnen.
- Unvollständige Tourdaten: Touren mit weniger als zwei Stopps, fehlender Lage oder fehlendem Verlauf nicht als vollständige Spaziergänge anbieten.
- Rundtour: Start und Ziel dürfen identisch sein; Stoppreihenfolge bleibt eindeutig.
- Kartenfehler: Beschreibung und Stoppliste weiterhin anbieten.
- Geschätzte Zeiten: Gehzeit getrennt von Spiel- und Pausenzeiten erklären.
- Unbestätigte Wegqualität: keine Zusage zu Kinderwagen- oder Rollstuhleignung ohne entsprechende Datengrundlage.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Die App MUSS vorgegebene Spielplatzspaziergänge im Stadtgebiet Köln ohne Anmeldung anbieten. Abnahme: Story 1.1 und 3.2.
- **FR-002**: Jede Tour MUSS Titel, Gebiet, Länge in Kilometern, geschätzte Gehzeit in Minuten und Stoppanzahl zeigen. Abnahme: Story 1.1.
- **FR-003**: Tourdetails MÜSSEN Start, Ziel, Beschreibung und mindestens zwei geordnete Spielplatzstopps enthalten. Abnahme: Story 1.2 und Prüfung unvollständiger Tourdaten.
- **FR-004**: Eine Tour MUSS ihren hinterlegten Verlauf und alle Stopps auf einer Karte darstellen. Abnahme: Story 2.1.
- **FR-005**: Stopps MÜSSEN aus Liste und Karte auswählbar sein und dieselben Detailangaben zeigen. Abnahme: Story 2.2.
- **FR-006**: Fehlende Eigenschaften MÜSSEN als unbekannt erkennbar sein. Abnahme: Story 2.3.
- **FR-007**: Die App MUSS auf Smartphone und Desktop nutzbar sowie mit Tastatur bedienbar sein. Abnahme: Story 3.1 und 3.3.
- **FR-008**: Kernfunktionen MÜSSEN ohne Standortfreigabe funktionieren. Abnahme: Story 3.2.
- **FR-009**: Nicht verfügbare Touren und Karten MÜSSEN verständliche Fehler- beziehungsweise Leerzustände erhalten. Abnahme: Edge Cases und Story 2.4.
- **FR-010**: Tourdetails MÜSSEN Datenherkunft und Stand, sofern bekannt, nennen; unbekannter Stand MUSS entsprechend gekennzeichnet sein. Demo-Inhalte MÜSSEN in Übersicht und Details sichtbar als solche gekennzeichnet werden. Abnahme: Vergleich einer Demo-Tour und einer belegten Tour sowie eines unbekannten Datenstands.
- **FR-011**: Gehzeiten MÜSSEN als Schätzungen ohne Spielpausen bezeichnet sein. Unbestätigte Eignungsangaben dürfen nicht als gesichert erscheinen. Abnahme: Prüfung der Zeitangaben und des Edge Case Wegqualität.

### Key Entities

- **Tour**: Vorgegebener Spaziergang mit Titel, Gebiet, Beschreibung, Start, Ziel, Länge, Gehzeit, Verlauf, geordneten Stopps und Herkunft beziehungsweise Datenstand.
- **Spielplatz**: Ort mit Name, Lage und optionalen belegten Ausstattungsangaben.
- **Tourstopp**: Verbindet eine Tour mit einem Spielplatz und dessen Position in der Reihenfolge. Ein Spielplatz kann in mehreren Touren vorkommen.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Die erste demonstrierbare Version enthält mindestens drei Touren mit jeweils mindestens zwei Spielplatzstopps; jede erfüllt FR-002 und FR-003.
- **SC-002**: In einem dokumentierten Lerntest kann eine Testperson ohne Einweisung innerhalb von zwei Minuten eine Tour auswählen und Start, Gehzeit sowie ersten Spielplatz nennen.
- **SC-003**: Bei allen Demonstrationstouren stimmen Reihenfolge und Anzahl der Kartenstopps mit der Stoppliste überein.
- **SC-004**: Übersicht, Tourauswahl, Stoppauswahl und Rücknavigation funktionieren bei 360 und 1280 Pixel Bildschirmbreite sowie mit Tastatur.
- **SC-005**: Bei verweigerter Standortfreigabe und simuliertem Kartenfehler bleiben die jeweiligen Kernabläufe gemäß Story 3.2 und 2.4 nutzbar.
- **SC-006**: Alle Demo-Inhalte und unbekannten Angaben sind in den geprüften Ansichten gekennzeichnet; es gibt keine unbelegte Zusage zur Wegqualität.

## Assumptions

- Zielgruppe sind zunächst Familien und begleitende Personen mit Kindern; dies ist eine Arbeitsannahme.
- „Wandern“ bedeutet für Version 1 kürzere Stadtspaziergänge, keine Fernwanderungen.
- Oberfläche zunächst auf Deutsch; Nutzung mit Internetverbindung.
- Rundtouren und Touren mit unterschiedlichem Start und Ziel sind zulässig.
- Touren werden vorab zusammengestellt; Nutzer erstellen oder verändern keine Touren.
- Für den Lernprototyp sind deutlich gekennzeichnete Demo-Inhalte zulässig. Ob erste Touren bereits auf belegten realen Wegen basieren, wird vor der Umsetzung im Plan entschieden.
- Datenquelle, Nutzbarkeit der Daten, Kartenangebot und überprüfbare Fußwegverläufe sind vor Umsetzung zu klärende Abhängigkeiten. Diese Spec behauptet keine verfügbare Datenquelle.
- Der Technologie-Stack wird im Plan gewählt.

## Nicht-Ziele der ersten Version

- Automatische Routenberechnung und eigene Tourplanung.
- Live-Navigation, Standortverfolgung und Offline-Karten.
- Benutzerkonten, Bewertungen, Uploads und soziale Funktionen.
- Vollständiges Verzeichnis aller Kölner Spielplätze oder aktuelle Meldungen über Sperrungen.
- Garantien zu Sicherheit, Barrierefreiheit oder Kinderwageneignung.

## Lernziel

Den Ablauf Idee → Spec → Plan → Aufgaben → Umsetzung → Prüfung praktisch anwenden.
Jede Umsetzung soll auf eine Anforderung zurückführbar sein; Entscheidungen und
Prüfergebnisse werden in den jeweiligen Feature-Dokumenten festgehalten.
