const COLOR__TYPE = {
  grass: "green",
  fire: "orangered",
  water: "deepskyblue",

  normal: "#A8A878",
  fighting: "#C03028",
  ghost: "darkslateblue",

  electric: "#F8D030",
  ice: "lightskyblue",
  rock: "#B8A015",

  poison: "#A040A0",
  ground: "#E0C065",
  flying: "#A890F0",

  psychic: "hotpink",
  bug: "#A8B820",
  dark: "#705848",

  dragon: "#7038F8",
  steel: "#B8B8D0",
  fairy: "lightpink",
};
// Use 'enum' style to add values
const MODAL_TYPE = {
  PREVIEW: "preview", // Clothing images
};
// Name, ID, Weight, Height, etc. + fallback missing data
const getBasicInfo = (pokemonData, pokedexData) => {
  const name = pokemonData?.name || "Unknown";
  const id = pokemonData?.id || "N/A";

  const kilograms = pokemonData?.weight ? pokemonData.weight / 10 : null;
  const pounds = kilograms ? (kilograms * 2.205).toFixed(1) : "N/A";

  const meters = pokemonData?.height ? pokemonData.height / 10 : null;
  const feet = meters ? Math.floor(meters * 3.28) : "N/A";
  const inches =
    meters && feet !== "N/A" ? Math.floor(meters * 39.57 - feet * 12) : "N/A";
  const genus = pokedexData.genera?.find(
    (entry) => entry.language.name === "en"
  )?.genus;
  const pokedex = pokedexData.flavor_text_entries?.find(
    (entry) => entry.language.name === "en"
  )?.flavor_text;

  return {
    name,
    id,
    kilograms: kilograms ?? "N/A",
    pounds,
    meters: meters ?? "N/A",
    feet,
    inches,
    genus,
    pokedex,
  };
};
// Typing
const getTyping = (pokemonData) => {
  if (!pokemonData?.types)
    return { primaryTyping: null, secondaryTyping: null };

  const primaryTyping = pokemonData.types[0]?.type?.name || null;
  const secondaryTyping = pokemonData.types[1]?.type?.name || null;

  return { primaryTyping, secondaryTyping };
};
const cardTypeClassName = (secondaryTyping) =>
  `type ${secondaryTyping ? "type__display" : "type__undefined"} `;
//Sprites - Animated vs Stale
const getSprites = (pokemonData) => {
  const frontSprite =
    pokemonData.sprites?.versions["generation-v"]["black-white"].animated
      .front_default || pokemonData.sprites?.front_default;
  const backSprite =
    pokemonData.sprites?.versions["generation-v"]["black-white"].animated
      .back_default ||
    pokemonData.sprites?.back_default ||
    pokemonData.sprites?.front_female;
  return { frontSprite, backSprite };
};
const secondImageClassName = (backSprite) =>
  `sprite ${backSprite ? "sprite" : "sprite__undefined"} `;

export {
  COLOR__TYPE,
  MODAL_TYPE,
  getBasicInfo,
  getTyping,
  cardTypeClassName,
  getSprites,
  secondImageClassName,
};
