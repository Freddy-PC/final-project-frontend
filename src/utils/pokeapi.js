const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const pokedexUrl = "https://pokeapi.co/api/v2/pokemon-species";
export const getAnimatedSpriteUrl = (pokemonId) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;
export const getFallbackSpriteUrl = (pokemonId) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

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
export const getValidSprite = async (id) => {
  const animated = getAnimatedSpriteUrl(id);
  const fallback = getFallbackSpriteUrl(id);

  try {
    const res = await fetch(animated, { method: "HEAD" });
    if (res.ok) {
      return animated;
    } else {
      return fallback;
    }
  } catch (err) {
    return fallback;
  }
};

const api = {
  getPokemon,
  getRandomPokemon,
  getPokedexEntry,
  getValidSprite,
};
export default api;
