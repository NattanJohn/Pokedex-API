function pokemonHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="pokemonName">${pokemon.name}</span>
            <div class="pokemonDetail">
                <ol class="types">
                    <li class="type">Poison</li>
                    <li class="type">Grass</li>
                </ol>
                <img
                    class="pokemonImg"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
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
