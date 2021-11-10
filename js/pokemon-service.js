'use strict';

var gPokeImgs = [];

function getPokemons(onSuccess) {
    var arrayOfPokemons = [];
    for (let i = 1; i < 21; i++) {
        $.get(`https://pokeapi.co/api/v2/pokemon/${i}`, (pokemon) => {
            const pokemonImgs = [];
            for( let key in pokemon.sprites) {
                if (pokemon.sprites[key] !== null) {
                    pokemonImgs.push(pokemon.sprites[key]);
                }
            }
            arrayOfPokemons.push({
                id: pokemon.id,
                name: pokemon.name,
                weight: pokemon.weight,
                imgs: pokemonImgs
            });
            const sortedPokemons = arrayOfPokemons.sort((pokemon1, pokemon2) => {
                if (pokemon1.name < pokemon2.name) return -1;
                if (pokemon1.name > pokemon2.name) return 1;

                return 0;
            })
            gPokeImgs = sortedPokemons;
            onSuccess(sortedPokemons);
        });
    }
}

function getPokemonImgs() {
    return gPokeImgs;
}