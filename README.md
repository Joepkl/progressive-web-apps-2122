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

<img width="283" alt="Schermafbeelding 2022-04-08 om 12 10 07" src="https://user-images.githubusercontent.com/74242736/162415207-80b74a5c-d55a-424c-bc68-3ac0773b4c59.png">

### Ophalen van data uit de api

Ik heb een functie in de app.js waarin met een fetch een array wordt opgehaald met data van het Rijksmuseum. De 10 willekeurige kunstwerken worden gerenderd in de index.ejs pagina. In de link heb ik &imgonly=true toegevoegd, zodat er alleen data wordt geladen met afbeeldingen.


### Zoekfunctie

Ook heb ik een zoekfunctie toegevoegd in de app zodat de gebruiker naar specifieke kunstwerken kan zoeken. 

<img width="712" alt="Schermafbeelding 2022-04-08 om 12 17 42" src="https://user-images.githubusercontent.com/74242736/162416380-ea7ac5f7-641e-4840-95ba-496ec8209cb6.png">


# Service worker


# Activity diagram

# Performance


### Enhancements

* slice
* compression



