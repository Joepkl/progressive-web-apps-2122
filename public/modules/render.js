// Loading state
export const feedback = document.querySelector('section')
feedback.textContent= "De content is aan het laden..."


// Data render in HTML
export function renderData(detailed) {
    console.log(detailed.artObject) 

    const list = document.querySelector('main div ul')
    list.insertAdjacentHTML('beforeend',
    `
    <li>
    <h2>${detailed.artObject.longTitle}</h2>
    <img src="${detailed.artObject.webImage.url}" alt="${detailed.artObject.title}">
    </li>
    `
    )
    feedback.textContent='';{
    }
}


export function $(element) {
    return document.querySelector(element)
}
