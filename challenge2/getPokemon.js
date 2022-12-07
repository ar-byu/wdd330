// This module handles the retrieval of pokemon from the API

// Imports necessary functions
import {renderPokemonDetails} from './displayPokemon.js'
import {checkListLength} from './utilities.js'

// Gets JSON from a URL
function getJSON(url) {
    return fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log('Something went wrong')
        }
    })
}

// Gets the pokemon from a URL
export function getPokemon(url) {
    return getJSON(url)
    }

// Gets the details of a pokemon
export function getPokemonDetails(url) {
    getPokemon(url).then(function (data) {
        let teamLength = checkListLength()
        renderPokemonDetails(data, teamLength)
    })
}