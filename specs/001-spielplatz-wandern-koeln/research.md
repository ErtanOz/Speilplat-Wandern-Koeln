# Entscheidungen für den ersten Zwischenstand

## Web-Grundlagen

**Decision**: HTML, CSS und JavaScript ohne Framework.
**Rationale**: Übersicht und Details brauchen Inhalte, Gestaltung und Klickverhalten;
wir können diese Rollen unmittelbar erklären.
**Alternatives considered**: Ein Framework wäre für diesen kleinen Lernschritt
zusätzlicher Erklärungsaufwand. Eine rein statische HTML-Seite würde die gemeinsame
Tourdatenliste und dynamische Auswahl nicht vermitteln.
**Quelle**: [MDN: Your first website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)
ordnet HTML, CSS und JavaScript diesen grundlegenden Rollen zu. Die Auswahl für
unser Projekt ist unsere daraus abgeleitete Entscheidung.

## Daten

**Decision**: Drei feste, sichtbar erfundene Demo-Touren in einer JavaScript-Datei.
**Rationale**: Der Lernschritt behandelt Darstellung und Auswahl, ohne Datenimport.
**Alternatives considered**: Datenbank und echte Datenimporte erst bei einer
entsprechenden Anforderung. Reale Routen jetzt anzunehmen wäre unbelegt.

## Ansichten

**Decision**: Übersicht und Details innerhalb einer HTML-Seite.
**Rationale**: Keine zusätzliche Seitenverwaltung nötig.
**Alternatives considered**: Separate Seiten und verlinkbare Touradressen können
später ergänzt werden; sie sind jetzt kein Abnahmekriterium.

## Start und Prüfung

**Decision**: Lokaler Python-Dateiserver und reale Browser-Abnahmen.
**Rationale**: Python wurde auf diesem Rechner gefunden; keine Installation nötig.
**Alternatives considered**: Ein zusätzliches Build-Werkzeug ist für diesen Schritt
nicht erforderlich. Automatisierte Tests bei späterer komplexerer Logik ergänzen.

Keine offenen technischen Entscheidungen für diesen Zwischenstand.
Die Kartentechnik wird bewusst erst für den Karten-Lernschritt entschieden.
