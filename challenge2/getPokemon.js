import {renderPokemonDetails} from './displayPokemon.js'

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

export function getPokemon(url) {
    return getJSON(url)
    }

export function getPokemonDetails(url) {
    getPokemon(url).then(function (data) {
        renderPokemonDetails(data)
    })
}