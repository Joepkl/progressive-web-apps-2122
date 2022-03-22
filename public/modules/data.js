import {renderData} from "../modules/render.js"


const feedback = document.querySelector("section")


export function pakData(){
    const dataRijks = 'https://www.rijksmuseum.nl/api/nl/collection?key=SOmD5CX7&ps'
    fetch(dataRijks)
    .then(function(response){
        return response.json()
        })
        .then(function(collection){
            getAditionalData(collection)
        })
        .catch((error)=> {
            console.log('error')
            errorMelding.textContent = 'Kan de content niet laden, check je verbinding.'
            feedback.textContent = ''
        })
}


export function getAditionalData(collection){
    for(let i=0; i < collection.artObjects.length; i++){
        fetch('https://www.rijksmuseum.nl/api/nl/collection/' +
        collection.artObjects[i].objectNumber + '?key=SOmD5CX7&ps=10imgonly=true')
        .then(function(response){
            return response.json()
        })
        .then(function(detailed){
            renderData(detailed)
        })
        .catch((error)=> {
            console.log(error)
        })
    }
}

