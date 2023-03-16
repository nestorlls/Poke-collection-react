const BASE_URI = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemon = (query) => {
  return fetch(`${BASE_URI}/${query}`).then((res) => res.json());
};
