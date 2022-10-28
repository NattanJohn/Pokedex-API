const pokeApi = {};
//Função para converter a API em uma classe para ficar mais facil de capturar
function ConvertPokemonAPI(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.name = pokeDetail.name;
    pokemon.pokemonNumber = pokeDetail.id;
    pokemon.photo = pokeDetail.sprites.other.home.front_default;

    const stats = pokeDetail.stats.map((statSlot) => statSlot.stat.name);
    const [stat] = stats;
    const baseStats = pokeDetail.stats.map((baseSlot) => baseSlot.base_stat);
    const [baseStat] = baseStats;
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.stats = stats;
    pokemon.stat = stat;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.baseStats = baseStats;
    pokemon.baseStat = baseStat;

    return pokemon;
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(ConvertPokemonAPI);
};

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetail) => pokemonsDetail);
};
