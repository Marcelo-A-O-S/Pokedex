const pokeApi = {}
var testeP;
function convertPokemonApiPraModel(pokemon)
{
    
    var pokemonmodel = new PokemonModel()
    pokemonmodel.number = pokemon.order
    pokemonmodel.name = pokemon.name
    pokemonmodel.photo = pokemon.sprites.other.dream_world.front_default
    pokemonmodel.types = pokemon.types.map((types)=>{return types.type.name})
    pokemonmodel.type = pokemonmodel.types[0]

    return pokemonmodel
}
pokeApi.getPokemons = (offset=0, limit=10) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((body)=>body.results)
    .then((pokemons)=> pokemons.map(pokeApi.getPokemonsDetail))
    .then((detail)=> Promise.all(detail)).then((details)=>{return details})
}
// pokeApi.getPokemonstype = (offset=0, limit=10) =>{
//     const url = `https://pokeapi.co/api/v2/type?offset=${offset}&limit=${limit}`
//     return fetch( url , options).then((response) => response.json())
// }
pokeApi.getPokemonsDetail = (pokemon) =>
{
    return fetch(pokemon.url).then((response)=>response.json()).then((pokemonSlot)=> convertPokemonApiPraModel(pokemonSlot))
}