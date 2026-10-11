# SpecKit-Lab mit Codex

## Arbeitsweise

Dieses Repository verwendet Spec-Driven Development mit dem vorhandenen Spec Kit.
Nutze `.specify/templates/`, `.specify/scripts/powershell/` und die bestehenden
Workflow-Anweisungen in `.github/agents/`. Die Copilot-Integration bleibt erhalten;
diese Datei verbindet Codex mit denselben lokalen Arbeitsabläufen.

Lies vor Feature-Arbeit `.specify/memory/constitution.md` und vorhandene Dokumente
unter `specs/`. Eine Constitution mit Platzhaltern ist noch keine beschlossene
Projektregel. Kläre das Produktziel, bevor du Produktanforderungen erfindest.

## Phasen und Aufrufe im Chat

Der Nutzer kann die Phasen in normaler Sprache oder als `speckit.<phase>` anfordern.
Diese Namen sind lokale Chat-Konventionen, keine garantierten nativen Slash-Befehle.
Lies dann die entsprechende Datei `.github/agents/speckit.<phase>.agent.md` und
führe deren Ablauf aus. Ersetze `$ARGUMENTS` durch die tatsächliche Nutzereingabe.
YAML-Handoffs beschreiben mögliche nächste Schritte; sie starten keine Subagenten.

| Phase | Ergebnis |
| --- | --- |
| constitution | Konkrete Projektprinzipien in `.specify/memory/constitution.md` |
| specify | Nutzerbedürfnisse, Umfang und prüfbare Akzeptanzkriterien in `spec.md` |
| clarify | Wesentliche offene Anforderungen klären und die Spec aktualisieren |
| plan | Technische Entscheidungen und Implementierungsplan in `plan.md` |
| tasks | Ausführbare Aufgaben mit Abhängigkeiten in `tasks.md` |
| analyze | Spec, Plan und Aufgaben auf Lücken und Widersprüche prüfen |
| implement | Aufgaben umsetzen und Akzeptanzkriterien prüfen |
| checklist | Passende Qualitätscheckliste erstellen |

Speichere Feature-Dokumente nach den vorhandenen Skripten unter
`specs/<nummer>-<feature>/`. Verwende die PowerShell-Skripte und prüfe ihre
Parameter vor dem Aufruf. Bei bestehender Feature-Struktur nicht erneut anlegen.

## Ausführung und Qualität

- Erstelle vor Produktcode eine Spec, einen Plan und Aufgaben in angemessenem Umfang.
- Bei einem ausdrücklich angeforderten einzelnen Schritt nur diesen ausführen.
  Bei einem Gesamtauftrag die notwendigen Phasen innerhalb des autorisierten Umfangs
  fortsetzen; nur fehlende wesentliche Entscheidungen beim Nutzer erfragen.
- Erfasse Annahmen und Nicht-Ziele. Wähle keinen Stack ohne Produktkontext.
- Bei geänderten Anforderungen zuerst die betroffenen Dokumente aktualisieren.
- Markiere Aufgaben erst nach Umsetzung und passender Prüfung als erledigt.
- Teste relevante Akzeptanzkriterien; bei Weboberflächen auch das gerenderte Verhalten.
- Berichte überprüfte Ergebnisse und verbleibende Lücken getrennt.
- Bestehende Änderungen erhalten. Keine automatischen Commits, Pushes oder
  Veröffentlichungen ohne entsprechenden Nutzerauftrag, auch nicht über Git-Hooks.
- Keine Geheimnisse in Dokumenten, Quellcode oder Ausgaben speichern.

## Aktueller Ausgangspunkt

Spec Kit ist vorhanden. Das Lernprojekt heißt „Spielplatz Wandern Köln“.
Version 1 bietet vorgegebene Spaziergänge mit mehreren Spielplatzstopps.
Die aktive Spezifikation liegt unter `specs/001-spielplatz-wandern-koeln/spec.md`;
`.specify/feature.json` verweist auf dieses Feature. Der Technologie-Stack ist offen.
Die Projektprinzipien stehen in `.specify/memory/constitution.md` (Version 1.0.0).
Der technische Plan steht in `specs/001-spielplatz-wandern-koeln/plan.md`.
Erster Zwischenstand: HTML, CSS, JavaScript und feste Demo-Daten, ohne Framework.
Die Aufgaben stehen in `specs/001-spielplatz-wandern-koeln/tasks.md`.
T001 ist in `index.html` umgesetzt und im Browser geprüft. T002 ist in
`src/tours.js` umgesetzt; Syntax und Datenregeln sind geprüft.
Als nächstes T003 erklären und die Tourübersicht aus den Daten anzeigen;
weitere Aufgaben erst nach einem neuen Weiter-Signal bearbeiten.

Aktueller Stand: vollständige Version mit echten Tourdaten, Karte und Filtern
umgesetzt. Maßgeblich sind `release-plan.md`, `verification.md` und
`docs/LERNHANDBUCH.md`. Der frühere Zwischenstand oben beschreibt die Lernhistorie.
Aktuelles GitHub-Ziel: `https://github.com/ErtanOz/Speilplat-Wandern-Koeln.git`.

## Lernbegleitung

Aktueller Nutzerauftrag: die gesamte Version fertigstellen und anschließend alles
in einer Markdown-Datei für Anfänger erklären. Damit ist die frühere Pause nach
jeder Aufgabe aufgehoben. Produktcode, Karten, Tests und Release autonom abschließen.

Der Nutzer ist Anfänger und möchte Spec-Driven Coding Schritt für Schritt verstehen.
Erkläre Begriffe mit konkreten Beispielen aus dieser App. Bearbeite pro Lernschritt
einen überschaubaren Teil und gehe erst nach dem Weiter-Signal des Nutzers weiter.
Der erste Zwischenstand ist Tourübersicht plus Detailansicht; die Karte folgt später.
Keine gesamte Implementierung automatisch durch alle Phasen ausführen.
