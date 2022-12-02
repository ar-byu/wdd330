const displayArea = document.getElementById('display')
const details = document.getElementById('details')
const backButton = document.getElementById('back')
const nextButton = document.getElementById('next')
const teamArea = document.getElementById('team')

import {getPokemon, getPokemonDetails} from './getPokemon.js'
import {storePokemon} from './localStorage.js'

export const pokemonList = document.createElement('ul')

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

function renderItems(results) {
    for (let pokemon in results) {
        let newPokemon = results[pokemon]
        let pokemonName = newPokemon.name
        let newLI = document.createElement('li')
        newLI.textContent = capitalize(pokemonName)
        newLI.addEventListener('click', () => {
            const urlBase = 'https://pokeapi.co/api/v2/pokemon/'
            let result = urlBase.concat(pokemonName)
            getPokemon(result)
            .then (getPokemonDetails(result))
        })
        pokemonList.appendChild(newLI)
    }
}

export function capitalize(string) {
    let convertedString = string.split('-').map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
      }).join('-');
    return convertedString
}

function prepareNewPage() {
    while (pokemonList.firstChild) {
        pokemonList.removeChild(pokemonList.firstChild)
    }
}

export function renderPokemonDetails(pokemon) {

    details.style.display = 'block'
    displayArea.style.display = 'none'
    backButton.style.display = 'none'
    nextButton.style.display = 'none'

    while (details.firstChild) {
        details.removeChild(details.firstChild)
    }

    let closeButton = document.createElement('button')
    closeButton.innerHTML = 'Close'
    closeButton.onclick = () => {
        details.style.display = 'none'
        displayArea.style.display = 'block'
        backButton.style.display = 'inline-block'
        nextButton.style.display = 'inline-block'
    }

    let addButton = document.createElement('button')
    addButton.innerHTML = 'Add to Team'
    addButton.onclick = () => {
        let newTeamMember = document.createElement('li')
        newTeamMember.textContent = capitalize(pokemon.species.name)
        teamArea.appendChild(newTeamMember)
        storePokemon(pokemon)
    }

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

    name.textContent = capitalize(pokemon.species.name)
    name.style.color = 'black'
    type.textContent = `Primary Type: ` + capitalize(pokemon.types[0].type.name)
    if (pokemon.types[1]) {
        subtype.textContent = `Secondary Type: ` + capitalize(pokemon.types[1].type.name)
    }
    abilitiesTitle.textContent = 'Possible Abilities:'
    order.textContent = `Pokedex Order: ${pokemon.order}`

    details.appendChild(name)
    details.appendChild(type)
    if (pokemon.types[1]) {
        details.appendChild(subtype)
    }
    details.appendChild(abilitiesTitle)
    details.appendChild(abilities)
    details.appendChild(order)
    details.appendChild(addButton)
    details.appendChild(closeButton)
}