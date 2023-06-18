fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash')
    .then((response) => response.json())
    .then((json) => console.log(json))