const pokemonsOl = document.getElementById("pokemonsListId");
const pokemonPage = document.querySelector(".oi");
const buttonPagination = document.getElementById("buttonPagination");
let limit = 20;
let offset = 0;

function pokemonHTML(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.pokemonNumber}</span>
            <span class="pokemonName">${pokemon.name}</span>
            <div class="pokemonDetail">
                <img
                    class="pokemonImg"
                    src="${pokemon.photo}"
                    alt="${pokemon.name}"/>
                <div class = "pokemonStatus">    
                    <ol class="stats">
                        ${pokemon.stats
                            .map(
                                (stat) =>
                                    `<li class = "stat ${stat}">${stat}</li>`
                            )
                            .join("")} 
                    </ol>
                    <ol class="stats">
                        ${pokemon.baseStats
                            .map(
                                (baseStat) =>
                                    `<li class = "stat ${baseStat}">${baseStat}</li>`
                            )
                            .join("")} 
                    </ol>
                </div>
                <ol class="types">
                    ${pokemon.types
                        .map(
                            (type) => `<li class = "type ${type}">${type}</li>`
                        )
                        .join("")}
                </ol>
            </div>
        </li>`;
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        const newHtml = pokemonList.map(pokemonHTML).join("");
        pokemonsOl.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit);

buttonPagination.addEventListener("click", () => {
    offset += limit;
    loadPokemonItens(offset, limit);
    if (offset >= 699) {
        buttonPagination.parentElement.removeChild(buttonPagination);
    }
});
