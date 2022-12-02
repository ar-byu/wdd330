export function storePokemon(newPokemon) {
    let pokemon = JSON.parse(localStorage.getItem('myTeam') || "[]")
    pokemon.push(newPokemon)
    localStorage.setItem('myTeam', JSON.stringify(pokemon))
}