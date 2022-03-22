export const zoekDataRijks = 'https://www.rijksmuseum.nl/api/nl/collection?key=SOmD5CX7&ps&q='
export const zoekbalk = document.getElementById('zoekbalk')
export const header = document.querySelector('h2')


// Zoekfunctie
export function zoekData() {
    console.log(zoekbalk.value);

    const zoekInput = zoekDataRijks + zoekbalk.value
    fetch(zoekInput)
    .then(function(response) {
        return response.json();
    }).then(function(zoekInput){
        console.log('Je zocht op ' + zoekbalk.value)
        header.textContent = 'Zoekresultaten voor ' + zoekbalk.value
        renderZoekData(zoekInput)
    }).catch((error) => {
        console.log(error);
        console.log('An error occured, please try again.')
        errorMelding.textContent = 'Kan de content niet laden, check je zoekopdracht.'
    })
}

// Renderen van zoekresultaten
 export function renderZoekData(zoekInput) {
    console.log(zoekInput.artObjects[0])
    const lijst = document.querySelector('main div ul')
    lijst.textContent = ''
    for(let i=0; i < zoekInput.artObjects.length; i++) {
        console.log(zoekInput.artObjects[0])
        lijst.insertAdjacentHTML('beforeend',
   `
    <li>
     <h2>${zoekInput.artObjects[i].longTitle}</h2>
     <img src="${zoekInput.artObjects[i].webImage.url}"
     </li>
    `
    )}
}


