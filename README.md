# Progressive webapp Rijksmuseum

In dit project ben ik een progressive webapp gaan maken voor het Rijksmuseum. Hierbij heb ik gebruik gemaakt van serverside rendering en een service worker voor een goede performance.

<img width="468" alt="Schermafbeelding 2022-04-08 om 12 15 49" src="https://user-images.githubusercontent.com/74242736/162416095-fc7b4050-5da6-419c-b412-122b4cdbf5c6.png">



# User story

As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown.



# Hoe kan je de webapp installeren

https://github.com/Joepkl/progressive-web-apps-2122 

* Ga door het cd commando in de terminal naar de juiste folder
* Installeer Node.js
* Installeer Express
* Installeer Ejs
* Installeer Node-mon
* Npm start in de terminal om de app te starten
* Vanuit de browser is het mogelijk om de app te downloaden


# Serverside rendering

De app runt op een server. Hiervoor is de port die ik heb gebruikt 9999. Verder maak ik gebruik van express, ejs en nodemon om app serverside te maken. 
Deze packages heb ik gedownload en aangeroepen in het bestand. 

<img width="300" alt="Schermafbeelding 2022-04-08 om 12 10 07" src="https://user-images.githubusercontent.com/74242736/162415207-80b74a5c-d55a-424c-bc68-3ac0773b4c59.png">

### Ophalen van data uit de api

Ik heb een functie in de app.js waarin met een fetch een array wordt opgehaald met data van het Rijksmuseum. De 10 willekeurige kunstwerken worden gerenderd in de index.ejs pagina. In de link heb ik &imgonly=true toegevoegd, zodat er alleen data wordt geladen met afbeeldingen.

<img width="800" alt="Schermafbeelding 2022-04-08 om 12 17 42" src="https://user-images.githubusercontent.com/74242736/162416380-ea7ac5f7-641e-4840-95ba-496ec8209cb6.png">


### Zoekfunctie

Ook heb ik een zoekfunctie toegevoegd in de app zodat de gebruiker naar specifieke kunstwerken kan zoeken. Deze maakt gebruik van dezelfde fetch functie als eerder beschreven. Alleen is hier req.query.q toegevoegd aan de link. Hierdoor komt de input van de zoekbalk in de fetch link te staan, en wordt de relevante data uit de api gerenderd op de pagina.

<img width="800" alt="Schermafbeelding 2022-04-08 om 12 21 44" src="https://user-images.githubusercontent.com/74242736/162417040-32dbca91-0e81-453e-86f3-50e988bde3ee.png">


# Service worker

Door een service worker te gebruiken verbeterd de performance van de app. Hiermee kan sneller content worden geladen, maar ook een offline modus waarin de app nog steeds te gebruiken is. 

### Install event

Wanneer er een nieuwe versie van de serviceworker wordt geinstalleerd gaat deze eventlistener werken. De cache wordt geopend en alle assets worden toegevoegd aan de cache. Hierdoor slaat de app content op die al een keer is geladen. Hierdoor hoeven niet elke keer nieuwe request te worden gemaakt en verbeterd de performance. Ook wordt de nieuwe versie van de serviceworker meteen geinstalleerd door de skipWaiting.

<img width="287" alt="Schermafbeelding 2022-04-08 om 12 29 59" src="https://user-images.githubusercontent.com/74242736/162418436-f1747dbe-cff1-436e-be8d-bcd98d785e10.png">

<img width="500" alt="Schermafbeelding 2022-04-08 om 12 27 19" src="https://user-images.githubusercontent.com/74242736/162418048-867b7ca2-f810-496a-9189-242006e60475.png">

### Activate event

Dit event gaat werken wanneer de service worker is geactiveerd. Het zorgt ervoor dat wanneer je een nieuwe versie van de cache aanmaakt, de oude versie weer wordt verwijderd. 

<img width="500" alt="Schermafbeelding 2022-04-08 om 12 33 27" src="https://user-images.githubusercontent.com/74242736/162418908-39de9eca-03e4-46e8-a056-45a9dd7d2a64.png">


### Fetch event

Dit event gaat werken elke keer dat er een fetch request wordt gedaan naar de server. De serviceworker checkt of het request matcht met data uit de cache. Als dat het geval is returnt de serviceworker de data uit de cache, en zo niet gaat de request gewoon normaal door naar de server. Hierdoor verbeterd de performance en is het mogelijk om offline de app te gebruiken.

<img width="500" alt="Schermafbeelding 2022-04-08 om 12 36 39" src="https://user-images.githubusercontent.com/74242736/162419385-c3bd42cf-a192-4e8d-b30d-2355906da260.png">



# Activity diagram

Ik heb een activity diagram gemaakt om de werking van de app uit te leggen. 

<img width="800" alt="Schermafbeelding 2022-04-08 om 13 54 01" src="https://user-images.githubusercontent.com/74242736/162430591-2d8f5e33-5a6c-4e12-bb05-1147bfd8f9b7.png">



# Performance

Een goede performance is belangrijk bij een app. Door de serviceworker en enhancements te gebruiken heb ik de performance verbeterd. 

<img width="500" alt="Schermafbeelding 2022-04-08 om 12 01 59" src="https://user-images.githubusercontent.com/74242736/162417894-2b3250c5-487c-4d63-952a-22324fb2b4dd.png">

### Enhancements

* Slice
* Compression

Door slice te gebruiken worden de afbeeldingen uit de api verkleind. Dat zorgt voor een betere performance. 

<img width="617" alt="Schermafbeelding 2022-04-08 om 12 38 50" src="https://user-images.githubusercontent.com/74242736/162419686-45160b49-3152-4428-8de0-edd1088b5a79.png">


Door compression te gebruiken wordt de app verkleind en verbeterd de performance.

<img width="325" alt="Schermafbeelding 2022-04-08 om 12 40 52" src="https://user-images.githubusercontent.com/74242736/162420074-1d82cc8f-0617-4cac-a384-1344941fd039.png">




