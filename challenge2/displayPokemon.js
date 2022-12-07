// This module handles the displaying of pokemon on the page

// Initializes variables from the document
const displayArea = document.getElementById('display')
const details = document.getElementById('details')
const backButton = document.getElementById('back')
const nextButton = document.getElementById('next')
const teamArea = document.getElementById('team')


// Imports necessary functions
import {getPokemon, getPokemonDetails} from './getPokemon.js'
import { capitalize, createCloseButton, createAddButton } from './utilities.js'

// Exports variables that need to be used elsewhere
export const pokemonList = document.createElement('ul')
export const urlBase = 'https://pokeapi.co/api/v2/pokemon/'

// Retrieves each page of data and makes buttons functional if needed
export function displayPokemon(url = 'https://pokeapi.co/api/v2/pokemon') {
    getPokemon(url).then(function (data) {
        const results = data.results
        renderItems(results)

        if (data.next) {
            nextButton.onclick = () => {
                prepareNewPage()
                displayPokemon(data.next)
            }
        }

        if (data.previous) {
            backButton.onclick = () => {
                prepareNewPage()
                displayPokemon(data.previous)
            }
        }
    })
}

// Creates an LI for each pokemon in the data set
function renderItems(results) {
    for (let pokemon in results) {
        let newPokemon = results[pokemon]
        let pokemonName = newPokemon.name
        let newLI = document.createElement('li')
        newLI.textContent = capitalize(pokemonName)
        newLI.addEventListener('click', () => {
            let result = urlBase.concat(pokemonName)
            getPokemon(result)
            .then (getPokemonDetails(result))
        })
        pokemonList.appendChild(newLI)
    }
}

// Removes pokemon from the page when the back or next buttons are pressed
function prepareNewPage() {
    while (pokemonList.firstChild) {
        pokemonList.removeChild(pokemonList.firstChild)
    }
}

// The bulkiest function. I wasn't sure how to break this down so it does a lot of tasks.
// However, it still serves a singular purpose.
// Renders a pokemon's details when the pokemon is clicked on
export function renderPokemonDetails(pokemon, listLength) {

    // Stops the main pokemon list and page buttons from displaying
    details.style.display = 'block'
    displayArea.style.display = 'none'
    backButton.style.display = 'none'
    nextButton.style.display = 'none'

    // Removes the previous details display's data
    while (details.firstChild) {
        details.removeChild(details.firstChild)
    }

    // Creates the close button
    let closeButton = createCloseButton(details, displayArea, backButton, nextButton)

    // Creates the add button
    let addButton = createAddButton(pokemon, teamArea)

    // Creates the elements for the pokemon's detail display
    let name = document.createElement('h1')
    let type = document.createElement('p')
    let subtype = document.createElement('p')
    let abilitiesTitle = document.createElement('h2')
    let abilities = document.createElement('ul')
    for (let ability in pokemon.abilities) {
        let newAbility = document.createElement('li')
        newAbility.textContent = capitalize(pokemon.abilities[ability].ability.name)
        abilities.appendChild(newAbility)
    }
    let order = document.createElement('p')

    // Sets the content of the detail display
    name.textContent = capitalize(pokemon.species.name)
    name.style.color = 'black'
    type.textContent = `Primary Type: ` + capitalize(pokemon.types[0].type.name)
    if (pokemon.types[1]) {
        subtype.textContent = `Secondary Type: ` + capitalize(pokemon.types[1].type.name)
    }
    abilitiesTitle.textContent = 'Possible Abilities:'
    order.textContent = `Pokedex Order: ${pokemon.order}`

    // Appends the details to the page
    details.appendChild(name)
    details.appendChild(type)
    if (pokemon.types[1]) {
        details.appendChild(subtype)
    }
    details.appendChild(abilitiesTitle)
    details.appendChild(abilities)
    details.appendChild(order)

    // If there are less than 6 pokemon in the team, appends the add button. If there
    // are 6 pokemon in the team, this button is not added.
    if (listLength === 1) {details.appendChild(addButton)}

    // Appends the close button to the details page
    details.appendChild(closeButton)
}