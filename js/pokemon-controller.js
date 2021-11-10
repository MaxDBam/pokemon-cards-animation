'use strict';

var gTimer;

function onLoadPokemons() {
    getPokemons(renderPokemons);

}

function renderPokemons(pokemons, pokeDetails) {
    // console.log(pokemons);
    const strHTMLs = pokemons.map(pokemon => {
        return `<div class="pokemon-card">
        <h2>${pokemon.name}</h2>
        <p>${pokemon.weight}</p>
        <img class="pokemon" src="${pokemon.imgs[3]}" alt="" />
        </div>
        `
    });

    document.querySelector('.pokemons-container').innerHTML = strHTMLs.join('');
    onRenderPokemonImgByInterval();
}

function onRenderPokemonImgByInterval() {
    var imgs = getPokemonImgs();
    var time = 200;
    var elImgs = document.querySelectorAll('img');
    setTimeout(function changeImgs() {
        //   for (let i = 0; i < elImgs.length; i++) {
        elImgs.forEach((img, idx) => {
            if (imgs[idx].imgs.length > 6 && imgs[idx].imgs.length < 8) {
                elImgs[idx].src = imgs[idx].imgs[getRandomInt(0, 7)];
             } else if (imgs[idx].imgs.length > 8) {
                    elImgs[idx].src = imgs[idx].imgs[getRandomInt(0, 8)];
            } else elImgs[idx].src = imgs[idx].imgs[getRandomInt(0, 4)]

        });
        setTimeout(changeImgs, 200);
    }, 200);
    
}

