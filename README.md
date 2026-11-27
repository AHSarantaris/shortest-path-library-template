
# Skabelon til Biblioteksmodul - Afleveringsprojekt 02

Frederikssund Gymnasium - Programmering B - 2026

Forløb 15: Algoritmer og Datastrukturer

## Fremgangsmåde

### Implementering og test

1. I skal `forke` dette repository og `clone` det til jeres computere.
2. I skal kopiere jeres implementerede filer fra `shortest-path-exercise`-repositoriet til dette.
3. I skal skrive test-cases i de nye filer [PriorityQueue.test.js](test/PriorityQueue.test.js) og [WeightedMatrixGraph.test.js](test/WeightedMatrixGraph.test.js). I kan kopiere koden fra de tidligere filer og ændre det der er nødvendigt.
4. I skal implementere klasserne `PriorityQueue` og `WeightedMatrixGraph` i filerne [PriorityQueue.js](src/PriorityQueue.js) og [WeightedMatrixGraph.js](src/WeightedMatrixGraph.js). I kan kopiere koden fra de tidligere filer og ændre det der er nødvendigt.
5. I skal implementere funktionen `shortestPathDijkstra()` i filen [shortestPathDijkstra.js](src/shortestPathDijkstra.js) ved brug af pseudokoden i [algorithms.md](algorithms.md).

### Dokumentation og udgivelse

1. Skriv JSDoc kommentarer til alle klasser/metoder/funktioner i biblioteksmodulet, især dem der er en del af jeres API.
2. Sæt et `@ignore`-tag på de klasser/funktioner/metoder som ikke er en del af jeres API. Se [jsdoc.app/tags-ignore](https://jsdoc.app/tags-ignore).
3. Kør `npm run docs` for at generere dokumentationshjemmesiden i [index.html](docs/index.html)-filen i [docs](docs)-mappen.
4. Giv jeres npm-pakke et andet navn og beskrivelse i filen [package.json](package.json), og opdater versionsnummeret når I laver nye versioner/udgivelser.
5. Slet det der står i [README.md](README.md)-filen, og skriv i stedet en README-fil der introducerer jeres biblioteksmodul. Se [github.com/qiao/PathFinding.js](https://github.com/qiao/PathFinding.js/) og for inspiration.
6. Sæt demo-mappen på GitHub-Pages.

### README-filens struktur

1. Navn på jeres biblioteksmodul.
2. Introduction: Hvad gør jeres biblioteksmodul. Inkludér et link til demoen samt jeres udvidede Tower Defence-spil der bruger biblioteksmodulet.
3. Installation: Hvordan installerer man biblioteksmodulet
4. How to use: Hvordan bruger man biblioteksmodulet.
5. Contributors: Hvem der har udviklet biblioteksmodulet.

## Brug af AI

I må **ikke** bruge AI til at generere kode til biblioteksmodulet, heller ikke med en Agentic Engineering tilgang.
