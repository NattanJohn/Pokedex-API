function pokemonHTML(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.pokemonNumber}</span>
            <span class="pokemonName">${pokemon.name}</span>
            <div class="pokemonDetail">
                <ol class="types">
                    ${pokemon.types
                        .map(
                            (type) => `<li class = "type ${type}">${type}</li>`
                        )
                        .join("")}
                </ol>
                <img
                    class="pokemonImg"
                    src="${pokemon.photo}"
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
