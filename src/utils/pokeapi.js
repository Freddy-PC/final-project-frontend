const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const pokedexUrl = "https://pokeapi.co/api/v2/pokemon-species";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status} ${res.statusText}`);
};

const getPokemon = async (value) => {
  const res = await fetch(`${baseUrl}/${value}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processServerResponse(res);
  // .catch() handled in app.js
};

const getRandomPokemon = async () => {
  const randomPokemonId = Math.floor(Math.random() * 1025) + 1;
  const res = await fetch(`${baseUrl}/${randomPokemonId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processServerResponse(res);
};
const getPokedexEntry = async (triviaPokemonId) => {
  const res = await fetch(`${pokedexUrl}/${triviaPokemonId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processServerResponse(res);
};
// In Trivia.js
const getPokemonSprite = async (triviaPokemonId) => {
  const res = await fetch(`${pokedexUrl}/${triviaPokemonId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processServerResponse(res);
};

const api = { getPokemon, getRandomPokemon, getPokedexEntry, getPokemonSprite };
export default api;
