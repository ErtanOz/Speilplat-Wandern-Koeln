# Datenmodell — erster Zwischenstand

Für die vollständige Version gelten zusätzlich die Datenfelder und realen Quellen
aus [release-plan.md](release-plan.md). `tours` ersetzt `demoTours`.

Ein Datenmodell beschreibt, welche Angaben wir gemeinsam speichern.

## Tour

| Feld | Bedeutung | Regel |
| --- | --- | --- |
| id | Eindeutiger Bezeichner | Nicht leer, innerhalb der Liste eindeutig |
| title | Tourname | Nicht leer |
| area | Gebiet | Nicht leer |
| distanceKm | Weglänge | Positive Zahl, Anzeige in km |
| walkingMinutes | Gehzeit | Positive ganze Zahl, ohne Spielpausen |
| start | Startpunkt | Nicht leer |
| destination | Ziel | Nicht leer; darf dem Start entsprechen |
| description | Kurzbeschreibung | Nicht leer |
| stops | Geordnete Spielplatzstopps | Mindestens zwei |
| isDemo | Beispielkennzeichnung | Für alle drei Touren wahr |
| source | Herkunft | „Erfundenes Lernbeispiel“ |
| dataDate | Stand realer Daten | Für Demo leer; Anzeige „Kein realer Datenstand“ |

## Tourstopp

- `id`: Spielplatzbezeichner, innerhalb einer Tour eindeutig.
- `name`: Nicht leer, als Demo-Ort erkennbar.
- `location`: Lesbare Beschreibung des Demo-Orts.
- `equipment`: Optionale Liste; leer bedeutet „Keine Angabe“.

Die Position in `stops` bestimmt die Reihenfolge. Die Stoppanzahl wird daraus
berechnet. Ein Spielplatz darf später in mehreren Touren vorkommen.
Für diesen Zwischenstand werden Stopps direkt in der Tour gespeichert.
Koordinaten und Wegverläufe gehören zur späteren Erweiterung für echte Kartendaten.

## Ansichtszustand

Anfang: Übersicht. Auswahl einer gültigen Tour: Details dieser Tour.
Zurück: Übersicht. Unbekannte Tour-ID: Hinweis mit Rückweg.
Es werden keine Nutzerdaten dauerhaft gespeichert.
