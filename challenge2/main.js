// This module handles everything that should happen on the page loading, including loading
// the stored team and setting up the search bar


// Imports the functions and modules necessary
import {displayPokemon, pokemonList} from './displayPokemon.js'
import {getPokemonDetails} from './getPokemon.js'
import { capitalize, createDeleteButton, makePokemonClickable } from './utilities.js'


// Initializes variables from the document
const displayArea = document.getElementById('display')
const searchBar = document.getElementById('search')
const searchButton = document.getElementById('search-btn')
const teamArea = document.getElementById('team')


// Adds the stored team to the document when applicable
document.addEventListener("DOMContentLoaded", () => {
    const pokemon = localStorage.getItem('myTeam')
    if (pokemon)
    {let myTeam = JSON.parse(pokemon)
    myTeam.forEach(pokemon => {
        let newTeamMember = document.createElement('li')
        newTeamMember.textContent = capitalize(pokemon.species.name)
        let deleteButton = createDeleteButton(pokemon)
        newTeamMember.onclick = () => {makePokemonClickable(pokemon)}
        newTeamMember.appendChild(deleteButton)
        teamArea.appendChild(newTeamMember)
    });}
})

// Adds the search function
searchButton.addEventListener('click', () => {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchBar.value.toLowerCase()}`
    getPokemonDetails(url)
})

// Gets the pokemon list
displayPokemon()

// Adds the pokemon to the page
displayArea.appendChild(pokemonList)