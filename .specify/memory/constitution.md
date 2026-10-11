<!--
Sync Impact Report
Version: unausgefüllte Vorlage -> 1.0.0, erste konkrete Projektgrundregeln.
Fünf Prinzipien konkretisiert; Projektumfang und Lernablauf ausgefüllt.
plan-template.md, spec-template.md und tasks-template.md geprüft.
Aufgabenvorlage: erforderliche Abnahme von optionalen automatisierten Tests trennen.
Keine .specify/templates/commands vorhanden. Keine offenen Platzhalter.
-->
# Spielplatz Wandern Köln Constitution

Diese Datei enthält die gemeinsamen Grundregeln für unser Lernprojekt.

## Core Principles

### I. Erst beschreiben, dann programmieren

Vor Produktcode müssen gewünschtes Verhalten und Abnahme in der Spec stehen.
Technische Entscheidungen gehören in den Plan, Arbeitsschritte in die Aufgabenliste.
Bei geänderten Anforderungen werden zuerst die betroffenen Dokumente angepasst.
So bleibt nachvollziehbar, warum wir Code schreiben.

### II. Kleine, erklärte Lernschritte

Jeder Schritt behandelt einen überschaubaren Teil. Neue Begriffe werden an unserer
App erklärt. Erst nach dem Weiter-Signal des Nutzers beginnt die nächste Phase.
Ein Weiter-Signal gilt für den nächsten Lernschritt, nicht für die gesamte App.

### III. Einfach und verständlich bauen

Der Plan muss technische Entscheidungen begründen. Zusätzliche Werkzeuge werden
nur für aktuelle Anforderungen eingeführt. Code erhält verständliche Namen.
Der erste Zwischenstand umfasst Übersicht und Tourdetails; die Karte folgt später.

### IV. Anforderungen sichtbar prüfen

Eine Aufgabe ist erst fertig, wenn ihre Abnahme geprüft und das Ergebnis dokumentiert
ist. Sichtbare Funktionen werden im Browser einschließlich Smartphone-Darstellung
und Tastaturbedienung geprüft. Automatisierte Tests ergänzen relevante Prüfungen.
Offene Prüfungen werden genannt. Dokumentenprüfung ist kein Funktionstest.

### V. Ehrliche Daten und Nutzung ohne Konto

Demo-Touren werden in Übersicht und Details gekennzeichnet. Unbekannte Angaben
werden nicht erfunden. Reale Daten brauchen eine nachvollziehbare Herkunft.
Die Kernfunktionen benötigen weder Konto noch Standortfreigabe. Geheimnisse
gehören nicht in Quellcode, Dokumente oder Ausgaben.

## Projektumfang

Version 1 bietet vorgegebene Spaziergänge mit mehreren Spielplatzstopps in Köln.
Zuerst entstehen Übersicht und Details mit gekennzeichneten Beispiel-Touren.
Eigene Routenplanung, Live-Navigation, Konten und Bewertungen gehören nicht dazu.
Die Technologieauswahl erfolgt im technischen Plan.

## Lernablauf

1. Verhalten und Abnahme in der Spec verstehen.
2. Technische Lösung im Plan beschreiben und begründen.
3. Kleine Aufgaben mit zugehörigen Anforderungen ableiten.
4. Jeweils einen erklärten Teil umsetzen.
5. Ergebnis mit der Abnahme vergleichen und Prüfungen dokumentieren.

Vor Umsetzung prüft der Plan diese fünf Prinzipien. Die Aufgabenliste enthält
passende Abnahmen. Commits, Pushes und Veröffentlichungen benötigen einen
entsprechenden Nutzerauftrag; Erweiterungs-Hooks ändern diese Grenze nicht.

## Governance

Diese Regeln gelten zusammen mit AGENTS.md innerhalb der Nutzeranweisungen.
Explizite Nutzeranweisungen haben Vorrang. Änderungen werden mit ihrem Grund
festgehalten und mit Spec, Plan und Aufgaben abgeglichen.
Die erste Fassung ist Version 1.0.0. Grundlegende Regeländerungen erhöhen die
erste Versionszahl, neue Regeln die zweite, Textkorrekturen die dritte.

**Version**: 1.0.0 | **Ratified**: 2026-10-11 | **Last Amended**: 2026-10-11
