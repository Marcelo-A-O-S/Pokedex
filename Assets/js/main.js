const offset = 0;
const limit = 10
var teste;
var teste2
var listaPokemons = document.getElementById("listaPokemons")

var pokemons;
const options = 
{
    method:'GET',
    Headers:({
        'Content-type':"application/json"
    })

}
function renderPokemonDetail(pokemon)
{
    teste2 = pokemon
    console.log(pokemon)
    return pokemon.map((types)=>
        `<li class="type">${types}</li>`
    )
}
function renderPokemon(pokemon){

    console.log(pokemon)
    return `<li class="card-pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${renderPokemonDetail(pokemon.types).join(' ')}
        </ol>
        <img src=${pokemon.photo } alt="${pokemon.name}" srcset="">
    </div>
</li>`
}
pokeApi.getPokemons().then((pokemons) =>
{
   
    listaPokemons.innerHTML += pokemons.map(renderPokemon).join('')
    // fetch(pokemons.url,)
    // for (let index = 0; index < pokemons.length; index++) {
    //     const pokemon = pokemons[index];
    //     listaPokemons.innerHTML += renderPokemon(pokemon)
    // }
})
// pokeApi.getPokemonstype().then((data)=>
// {
//     console.log(data)
//     teste = data.results
// })