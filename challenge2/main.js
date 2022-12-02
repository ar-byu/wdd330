import {displayPokemon, pokemonList, capitalize} from './displayPokemon.js'
import {getPokemonDetails} from './getPokemon.js'

const displayArea = document.getElementById('display')
const searchBar = document.getElementById('search')
const searchButton = document.getElementById('search-btn')
const teamArea = document.getElementById('team')

document.addEventListener("DOMContentLoaded", () => {
    const pokemon = localStorage.getItem('myTeam')
    if (pokemon)
    {let myTeam = JSON.parse(pokemon)
    myTeam.forEach(pokemon => {
        let newTeamMember = document.createElement('li')
        newTeamMember.textContent = capitalize(pokemon.species.name)
        teamArea.appendChild(newTeamMember)
    });}
})

searchButton.addEventListener('touchend', () => {
let url = `https://pokeapi.co/api/v2/pokemon/${searchBar.value.toLowerCase()}`
    getPokemonDetails(url)
})

displayPokemon()

displayArea.appendChild(pokemonList)