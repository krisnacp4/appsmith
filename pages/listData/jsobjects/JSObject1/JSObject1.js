export default {
	x: [],
	myVar1: [],
	myVar2: {},
	mapPokemonData () {
		console.log(pokemon.data)
		return pokemon.data.results
	},
	filterPokemonData(name) {
		let a
		if (name) {
			// a = pokemon.data.results.filter((p) => p.name === name) 
			a = pokemon.data.results.filter((p) => p.name.includes(name)) 
			return a 			
		}
		a = pokemon.data.results
		return a
	}
}
// mapPokemonData()
