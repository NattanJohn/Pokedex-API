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
                <div class= "circle">
                <img
                    class="pokemonImg"
                    src="${pokemon.photo}"
                    alt="${pokemon.name}"/>
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

// Código antes do refatoramento com map ----------------------

//const listItem = [];
//for (let i = 0; i < pokemonList.length; i++) {
//  const pokemon = pokemonList[i];
// listItem.push(pokemonHTML(pokemon));
// pokemonsOl.innerHTML += pokemonHTML(pokemon);
//}
