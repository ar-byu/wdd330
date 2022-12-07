// This module handles the storage of the user's team

// Stores the pokemon to localStorage
export function storePokemon(newPokemon) {
    let pokemon = JSON.parse(localStorage.getItem('myTeam') || "[]")
    pokemon.push(newPokemon)
    localStorage.setItem('myTeam', JSON.stringify(pokemon))
}

// Deletes a pokemon from localStorage
export function deletePokemon(button, pokemon) {
    let identifier = pokemon.id
    let userTeam = JSON.parse(localStorage.getItem('myTeam'))
    let index = userTeam.findIndex(pokemon => pokemon.id === identifier)
    if (index >= 0) {
        button.parentElement.remove()
        userTeam.splice(index, 1)
        localStorage.setItem('myTeam', JSON.stringify(userTeam))
    }
}