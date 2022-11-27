import {displayPokemon, pokemonList} from './displayPokemon.js'

const displayArea = document.getElementById('display')

displayPokemon()

displayArea.appendChild(pokemonList)