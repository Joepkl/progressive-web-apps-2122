import {pakData} from '../modules/data.js'
import {zoekData} from '../modules/search.js'


// Hier wordt de functie om de API data te halen aangeroepen
pakData()




// Eventlistener om te zoeken
document.getElementById('zoekForm').addEventListener('submit', function(prevent){
    prevent.preventDefault();
    zoekData();
})


// Verschijnen van home button na zoeken
function verschijnen(){
    document.getElementById('homeButton').style.display = 'block'
}

document.getElementById('zoekForm').addEventListener('submit', verschijnen)
