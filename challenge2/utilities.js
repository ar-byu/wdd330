// This module handles miscellaneous tasks that don't fit in the other modules

// Imports necessary functions and variables
import {storePokemon, deletePokemon} from './localStorage.js'
import { urlBase } from './displayPokemon.js';
import { getPokemon, getPokemonDetails } from './getPokemon.js';

// Capitalizes the first letter of a string after a dash
export function capitalize(string) {
    let convertedString = string.split('-').map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
      }).join('-');
    return convertedString
}

// Creates the "close" button
export function createCloseButton(details, displayArea, backButton, nextButton) {
    let closeButton = document.createElement('button')
    closeButton.innerHTML = 'Close'
    closeButton.onclick = () => {
        details.style.display = 'none'
        displayArea.style.display = 'block'
        backButton.style.display = 'inline-block'
        nextButton.style.display = 'inline-block'
    }
    return closeButton
}

// Creates the "add" button
export function createAddButton(pokemon, teamArea) {
    let addButton = document.createElement('button')
    addButton.innerHTML = 'Add to Team'
    addButton.onclick = () => {
        let newTeamMember = document.createElement('li')
        newTeamMember.addEventListener('click', () => {
            makePokemonClickable(pokemon)
        })
        let deleteButton = createDeleteButton(pokemon)
        newTeamMember.textContent = capitalize(pokemon.species.name)
        newTeamMember.appendChild(deleteButton)
        teamArea.appendChild(newTeamMember)
        storePokemon(pokemon)
    }
    return addButton
}

// Checks the pokemon team size. If it is 6, returns 0.
export function checkListLength() {
    let list = document.getElementById('team').getElementsByTagName('li')
    if (list.length <= 5) {
        return 1
    }
    else if (list === null) {
        return 1
    }
    else if (list.length === 6) {
        return 0
    }
}

// Creates the "delete" button
export function createDeleteButton(pokemon) {
    let deleteButton = document.createElement('button')
        deleteButton.addEventListener('click', () => {
            deletePokemon(deleteButton, pokemon)
        })
        deleteButton.innerHTML = 'X'
        deleteButton.className = 'delete'
    return deleteButton
}

// Makes a pokemon in a team clickable
export function makePokemonClickable(pokemon) {
    let result = urlBase.concat(pokemon.species.name)
    getPokemon(result)
    .then (getPokemonDetails(result))
}