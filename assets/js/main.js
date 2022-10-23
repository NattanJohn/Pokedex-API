function convertTypeToLi(pokemonTypes) {
    return pokemonTypes.map(
        (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
    );
}

function pokemonHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">${pokemon.order}</span>
            <span class="pokemonName">${pokemon.name}</span>
            <div class="pokemonDetail">
                <ol class="types">
                    ${convertTypeToLi(pokemon.types).join("")}
                </ol>
                <img
                    class="pokemonImg"
                    src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="${pokemon.name}"/>
            </div>
        </li>`;
}

const pokemonsOl = document.getElementById("pokemonsListId");

pokeApi.getPokemons().then((pokemonList = []) => {
    const newHtml = pokemonList.map(pokemonHTML).join("");
    pokemonsOl.innerHTML = newHtml;

    // Código antes do refatoramento com map ----------------------

    //const listItem = [];
    //for (let i = 0; i < pokemonList.length; i++) {
    //  const pokemon = pokemonList[i];
    // listItem.push(pokemonHTML(pokemon));
    // pokemonsOl.innerHTML += pokemonHTML(pokemon);
    //}
});
