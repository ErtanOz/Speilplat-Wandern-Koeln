# Spielplatz Wandern Köln — dein Lernhandbuch

Version 1.0 · 11.10.2026

Diese Anleitung erklärt unser fertiges Lernprojekt von der Idee bis zum Release.
Du musst nichts auswendig lernen. Öffne die erwähnte Datei und lies den passenden
Abschnitt dieser Anleitung dazu. Markdown (`.md`) ist Text mit einfachen
Formatierungszeichen: `#` ist eine Überschrift, `-` beginnt einen Listenpunkt.
In VS Code öffnet Strg+Umschalt+V eine lesbare Vorschau der Markdown-Datei.

## 1. Was wir gebaut haben

Eine Web-App für vorgegebene Spielplatzspaziergänge in Köln. Du vergleichst drei
Touren, öffnest eine und siehst ihre Spielplatzstopps sowie den Fußweg auf einer
Karte. Suche und Stadtteilfilter helfen bei der Auswahl. Es gibt keine Anmeldung
und keine Standortabfrage.

Die drei Touren liegen in Ehrenfeld, Lindenthal und Nippes. Spielplatznamen und
Koordinaten stammen von der Stadt Köln. Die Wege wurden mit dem Fußprofil von
Valhalla auf OpenStreetMap-Daten berechnet. Sie sind nicht vor Ort geprüft.
Die App verspricht keine Kinderwagen- oder Rollstuhleignung.

Wir begannen mit erfundenen Beispielen. Für Version 1 wurden diese vollständig
ersetzt. Die alten Lernprüfungen beziehen sich deshalb auf den damaligen Stand;
der Abschnitt „Release 1.0“ in verification.md beschreibt die fertige Version.

## 2. Spec-Driven Development in einfachen Worten

Spec bedeutet Spezifikation: eine Beschreibung dessen, was die App können soll.
Driven bedeutet, dass diese Beschreibung die Entwicklung steuert.

Unser Ablauf:

1. Idee: „Spaziergänge mit mehreren Spielplätzen in Köln“.
2. Spec: Welche Angaben sieht eine Person? Was passiert beim Anklicken?
3. Regeln: Verständlich bauen, ehrliche Daten, Ergebnisse prüfen.
4. Plan: Welche Dateien und Werkzeuge brauchen wir?
5. Aufgaben: Kleine Arbeitsschritte aus dem Plan ableiten.
6. Code: Diese Schritte umsetzen.
7. Prüfung: Entspricht das Verhalten der Spec?
8. Release: Die geprüften Dateien für den Betrieb bereitstellen.

Das ist keine Garantie, dass KI immer richtig arbeitet. Gute Anforderungen und
Prüfungen helfen, Fehler zu erkennen. Du bleibst die Person, die das Produktziel
bestimmt. Codex hilft beim Formulieren, Programmieren und Prüfen.

### Ein Beispiel durch alle Schritte

**Wunsch:** Ich möchte eine Tour auswählen.

**Spec:** Beim Auswählen sehe ich Start, Ziel, Beschreibung und geordnete Stopps.

**Plan:** Ein Button setzt die Tour-ID in die Browseradresse. JavaScript findet
den Datensatz und erzeugt die Detailansicht.

**Aufgabe:** T004: Tourauswahl und Detaildarstellung umsetzen.

**Code:** Der Klick setzt etwa `#tour/ehrenfeld`. Die Funktion `route()` erkennt
diesen Teil der Adresse und ruft `openTour(tour)` auf.

**Prüfung:** Alle drei Touren öffnen und ihre angezeigten Angaben mit den Daten
vergleichen. Erst danach die Aufgabe abhaken.

## 3. Welche Dokumente wofür da sind

Alle Feature-Dokumente liegen unter `specs/001-spielplatz-wandern-koeln/`.

| Datei | Frage, die sie beantwortet |
| --- | --- |
| spec.md | Was soll die App können? |
| plan.md | Wie war unser erster Zwischenstand geplant? |
| release-plan.md | Wie wurde der Plan für die vollständige Version erweitert? |
| research.md | Warum haben wir diese technischen Entscheidungen getroffen? |
| data-model.md | Welche Angaben braucht eine Tour? |
| contracts/ui.md | Was zeigen die Ansichten und wie reagieren sie? |
| tasks.md | Welche kleinen Aufgaben gehören zum ersten Zwischenstand? |
| verification.md | Was wurde wirklich geprüft und was bleibt offen? |
| quickstart.md | Wie starte ich die App? |
| checklists/requirements.md | Ist die Spec klar und prüfbar formuliert? |

Zusätzlich:

- `AGENTS.md`: Anweisungen für Codex in diesem Ordner.
- `.specify/memory/constitution.md`: Unsere Projektgrundregeln. „Constitution“
  heißt hier Grundregeln, nicht Programmcode.
- `.specify/templates/`: Vorlagen von Spec Kit für neue Dokumente.
- `.specify/scripts/powershell/`: Helfer, die Ordner und Vorlagen vorbereiten.
- `.specify/feature.json`: Zeigt Spec Kit, welches Feature gerade aktiv ist.
- `.github/agents/`: Vorhandene Anweisungen für die einzelnen Spec-Kit-Phasen.
- `.github/copilot-instructions.md`: Verweis auf den Plan für die Copilot-Integration.

`specs` ist unsere Dokumentation. `src` ist der App-Code. `dist` ist das Release.

## 4. User Story und Akzeptanzkriterium

Eine User Story erklärt den Nutzen:

> Als begleitende Person möchte ich Spaziergänge vergleichen, damit ich einen
> passenden Ausflug auswählen kann.

Ein Akzeptanzkriterium beschreibt eine prüfbare Situation:

> Wenn ich die Übersicht öffne, sehe ich Name, Gebiet, Länge, Gehzeit und Stoppanzahl.

„Die App soll toll sein“ ist schwer prüfbar. „Drei Tourkarten enthalten diese fünf
Angaben“ können wir unmittelbar prüfen.

`FR-002` ist die Nummer einer funktionalen Anforderung. Die Nummer hilft, im Plan,
in Aufgaben und Tests dieselbe Anforderung wiederzufinden. `US1` bedeutet User
Story 1. `T004` bedeutet Aufgabe 4. Diese Nummern sind Orientierungshilfen.

## 5. HTML — das Grundgerüst

Öffne `index.html`.

HTML besteht aus Elementen. Zum Beispiel:

```html
<h1>Spielplatz Wandern Köln</h1>
```

`<h1>` startet die Hauptüberschrift, der Text ist der Inhalt, `</h1>` beendet sie.
Ein Attribut liefert zusätzliche Angaben:

```html
<html lang="de">
```

`lang="de"` kennzeichnet die Sprache. Im `head` stehen Seitentitel, Beschreibung,
Stylesheets und Skriptverweise. Im `body` stehen die sichtbaren Inhalte.

- `header`: Kopfbereich.
- `main`: Hauptinhalt.
- `section`: Zusammengehöriger Abschnitt.
- `footer`: Fußbereich.
- `button`: Bedienbare Schaltfläche.
- `input`: Suchfeld.
- `select`: Auswahlfeld für den Stadtteil.
- `dialog`: Fenster für App-Informationen und Datenschutz.

`id="tour-list"` gibt einem Element einen eindeutigen Namen. JavaScript findet
es später über diesen Namen. `hidden` blendet einen Abschnitt aus.

`defer` bei einem Skript bedeutet: Die Datei laden, aber erst ausführen, wenn das
HTML-Grundgerüst gelesen wurde. Deshalb laden wir zuerst die Tourdaten und danach
die App-Logik, die diese Daten benötigt.

## 6. CSS — die Gestaltung

Öffne `src/styles.css`.

```css
body {
  background: #faf8f2;
  color: #243b30;
}
```

`body` wählt den Seitenkörper. Innerhalb der geschweiften Klammern bestimmen wir
Eigenschaften: Hintergrundfarbe und Textfarbe.

Eine Klasse wie `.tour-card` gestaltet alle Elemente mit `class="tour-card"`.
`display: grid` ordnet Karten in Spalten an. `gap` bestimmt den Abstand.

Die `@media`-Abschnitte ändern die Darstellung bei kleiner Bildschirmbreite.
Am Desktop stehen drei Karten nebeneinander, am Smartphone untereinander.
Das heißt „responsive“: Die Oberfläche passt sich dem Bildschirm an.

Farben sind oben als Variablen wie `--forest` abgelegt. Du kannst später die
Hauptfarbe dort ändern, statt dieselbe Farbe an vielen Stellen zu ersetzen.

`:focus-visible` markiert das Element, das mit der Tastatur gerade ausgewählt
ist. Das ist wichtig für Menschen, die ohne Maus arbeiten.

## 7. JavaScript — Daten und Verhalten

Öffne `src/tours.js`. Eine Tour ist ein Objekt, also ein Steckbrief:

```javascript
{
  id: "ehrenfeld",
  title: "Kleine Entdeckerrunde",
  distanceKm: 0.9
}
```

Links steht die Eigenschaft, rechts ihr Wert. Texte stehen in Anführungszeichen.
Zahlen nicht. `true` und `false` sind Wahrheitswerte. `null` bedeutet, dass kein
Wert vorhanden ist. Eine Liste steht in eckigen Klammern: `[tour1, tour2, tour3]`.

Die Variable `tours` enthält unsere Tourliste. Jede Tour enthält wiederum die
Liste `stops`. Die Reihenfolge dieser Liste bestimmt die Besuchsreihenfolge.
Die Stoppanzahl wird aus `stops.length` berechnet, damit sie nicht widersprüchlich
an zwei Stellen gespeichert wird.

`path` enthält viele Koordinatenpaare. Leaflet erwartet hier Breitengrad zuerst,
Längengrad danach. Die städtische GeoJSON-Quelle liefert sie umgekehrt. Der Import
wandelt das korrekt um. Das ist ein Beispiel für eine kleine, aber wichtige
Entscheidung, die wir prüfen müssen.

## 8. Was app.js macht

Öffne `src/app.js`. Die wichtigsten Funktionen:

| Funktion | Aufgabe |
| --- | --- |
| element() | Ein HTML-Element mit Text erstellen |
| renderOverview() | Tourdaten filtern und Karten anzeigen |
| route() | Entscheiden, welche Ansicht zur Browseradresse gehört |
| openTour() | Die Detailansicht einer Tour erzeugen |
| createMap() | Karte, Weg und nummerierte Marker erstellen |
| selectStop() | Einen Stopp auswählen und seine Angaben anzeigen |

Eine Funktion ist ein benannter Arbeitsschritt. Statt denselben Code mehrfach
zu schreiben, rufen wir den Arbeitsschritt auf.

```javascript
button.addEventListener('click', () => {
  location.hash = 'tour/ehrenfeld';
});
```

Das bedeutet: „Wenn der Button angeklickt wird, ändere den hinteren Teil der
Browseradresse.“ Der Teil hinter `#` wird Hash genannt. `#tour/ehrenfeld` lässt
sich auch als Direktlink öffnen. Die App reagiert auf `hashchange`.

`document.querySelector('#search')` findet das Suchfeld im HTML.
`textContent` fügt Text ein. Wir verwenden es für Datentexte, damit ein Name nicht
versehentlich als ausführbarer HTML-Code behandelt wird.

`filter()` wählt passende Touren aus der Liste. `forEach()` bearbeitet jeden
Eintrag. `map()` erstellt aus einer Liste eine andere Liste. Das Wort „map“ in
JavaScript ist deshalb nicht immer eine geografische Karte.

## 9. Die Karte

Leaflet ist eine fertige Bibliothek für interaktive Karten. Wir verwenden Version
1.9.4 lokal in `src/vendor/`, einschließlich ihrer Lizenzdatei.

Drei Dinge liegen übereinander:

1. Kartenkacheln von OpenStreetMap: kleine Bildstücke als Hintergrund.
2. Eine Linie aus unserer gespeicherten Fußweggeometrie.
3. Nummerierte Marker aus den Spielplatzkoordinaten.

Die Nummern entsprechen der Stoppliste. Ein Klick auf einen Marker oder einen
Listenstopp zeigt dieselben Informationen. Die Stoppliste ist auch mit Tastatur
benutzbar. Fällt die Karte aus, bleibt die Liste nutzbar und ein Hinweis erscheint.

Die App berechnet unterwegs keine neue Route. Die Wege wurden beim Import
berechnet und gespeichert. So brauchen wir keine API-Schlüssel und keinen
Routingdienst bei jedem Besuch.

## 10. Datenherkunft und Aktualisierung

`scripts/import-tours.mjs` liest den lokal gespeicherten städtischen GeoJSON-Datensatz,
wählt benannte Spielplätze aus und fragt Valhalla für drei Fußrouten ab. Die Antwort
enthält eine komprimierte Weglinie. `decode()` macht daraus Koordinatenpaare.

Vor einem neuen Import muss `data/koeln-playgrounds.geojson` bewusst aus der
städtischen Quelle aktualisiert werden. Der Import ist ein Entwicklerwerkzeug,
kein automatischer Hintergrunddienst. Die Datumsangabe im Skript ist aktuell
fest gesetzt und muss beim erneuten Import angepasst werden.

Abrufdatum und tatsächlicher Datenstand sind verschieden: Wir wissen, wann wir
Daten heruntergeladen haben, aber nicht, wann ein einzelner Spielplatz zuletzt
vor Ort geprüft wurde. Genau das steht in der Oberfläche.

Quellen:

- [Städtische Spielplatzdaten](https://data.gov.de/suche/daten/spiel-und-sportplatze-in-koln)
- [Städtische Datenschnittstelle](https://geoportal.stadt-koeln.de/arcgis/rest/services/freizeit_natur_sport/spielangebote/MapServer/0)
- [Valhalla](https://valhalla.github.io/valhalla/)
- [OpenStreetMap-Lizenz](https://www.openstreetmap.org/copyright)
- [Leaflet](https://leafletjs.com/download.html)

## 11. Lokal starten — Schritt für Schritt

Node.js und Python wurden auf diesem Rechner gefunden.

1. Öffne den Projektordner in VS Code.
2. Öffne über „Terminal“ ein neues Terminal. Das ist ein Fenster für Befehle.
3. Gib diesen Befehl ein und drücke Enter:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

4. Öffne `http://127.0.0.1:8000` im Browser.
5. Lasse das Terminal währenddessen offen.
6. Zum Beenden drücke im Terminal Strg+C.

`127.0.0.1` bedeutet dieser Rechner. `8000` ist die Portnummer, also der Eingang
für den lokalen Server. Ist sie schon belegt, verwende 8001 im Befehl und im Link.
Dieser Server ist ein lokales Entwicklungswerkzeug, kein öffentlicher Webhoster.

## 12. Produktionspaket erstellen

```powershell
node scripts/check-data.mjs
node scripts/build.mjs
```

Der erste Befehl prüft echte Datenregeln: gültige Touren, Nähe der Wege zu den
Stopps und Übereinstimmung von Weglänge und Geometrie. Der zweite kopiert die
benötigten Dateien nach `dist/`. Dieser Ordner ist das Produktionspaket.

Um genau das Paket lokal anzusehen:

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Beim Hosting wird nur das Paket ausgeliefert, nicht der ganze Projektordner.
Spec-Dokumente, Rohdaten und Entwicklungsprotokolle gehören nicht zur Webseite.
Die private Veröffentlichung über Sites ist von deinem lokalen Git-Repository
getrennt. Der lokale Lernstand wurde nicht pauschal mit allen vorhandenen
Spec-Kit-Erweiterungsdateien committed.

## 13. Was wir getestet haben

Die ausführlichen Ergebnisse stehen in `verification.md`.

- Drei Touren und ihre Pflichtangaben.
- Alle Detailansichten mit jeweils drei Stopps.
- Stoppauswahl, Markeranzahl und Rücknavigation.
- Suche, Stadtteilfilter und keine Treffer.
- Smartphone mit 360 Pixel und Desktop mit 1280 Pixel Breite.
- Tastaturauswahl und Fokuswechsel.
- Unbekannte Touradresse, leere Datenliste und nicht verfügbare Karte.
- Datenregeln und Fußweggeometrien.

Ein automatischer Test mit einem Browser ist keine Begehung draußen. Ein Lern-
beziehungsweise Nutzertest mit dir bleibt sinnvoll. Wir behaupten keine Garantie
für aktuelle Sperrungen, Sicherheitszustand oder Barrierefreiheit.

## 14. Wie du eine Änderung Spec-Driven angehst

Beispiel: Du möchtest einen Filter „höchstens 30 Minuten“.

1. Ergänze in der Spec: „Ich kann Touren mit Gehzeit bis 30 Minuten auswählen.“
2. Schreibe die Abnahme: Bei aktivem Filter erscheint keine Tour über 30 Minuten.
3. Ergänze den Plan: Ein Auswahlfeld steuert den Filter in renderOverview().
4. Erstelle eine Aufgabe mit betroffenen Dateien und Abnahme.
5. Ändere HTML und JavaScript.
6. Prüfe den Filter an Touren unter und über 30 Minuten.
7. Dokumentiere das Ergebnis und erst danach hake die Aufgabe ab.

Du kannst Codex dafür schreiben:

> Lies unsere Spec und unseren Plan. Ergänze einen Gehzeitfilter bis 30 Minuten.
> Aktualisiere zuerst die Dokumente, setze die Änderung um und prüfe sie im Browser.
> Erkläre mir anschließend, was geändert wurde.

Die Namen `speckit.specify`, `speckit.plan` und `speckit.tasks` sind in diesem
Projekt Chat-Anweisungen; sie sind keine garantierten nativen Slash-Befehle.

## 15. Kleine Übungen zum Lernen

1. Ändere einen erklärenden Text in index.html und lade die Seite neu.
2. Ändere --forest in styles.css und beobachte die Hauptfarbe.
3. Suche eine Tour in tours.js und finde dieselben Angaben in der App.
4. Lies die Funktion renderOverview() und suche ihre Aufrufe.
5. Formuliere ein neues Akzeptanzkriterium, bevor du eine Funktion ergänzen lässt.

Beginne mit einer Übung. Wenn etwas nicht funktioniert, lies zuerst die Fehlermeldung
und vergleiche Wunsch, Daten und Code. Kleine Änderungen sind leichter zu verstehen.
