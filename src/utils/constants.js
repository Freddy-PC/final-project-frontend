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

// Typing
const getTyping = (pokemonData) => {
  if (!pokemonData?.types)
    return { primaryTyping: null, secondaryTyping: null };

  const primaryTyping = pokemonData.types[0]?.type?.name || null;
  const secondaryTyping = pokemonData.types[1]?.type?.name || null;

  return { primaryTyping, secondaryTyping };
};
const cardTypeClassName = (secondaryTyping) =>
  `card__type ${
    secondaryTyping ? "card__type-display" : "card__type_undefined"
  } `;
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
  `card__pokepic ${backSprite ? "card__pokepic" : "card__pokepic-hidden"} `;

export {
  COLOR__TYPE,
  MODAL_TYPE,
  getTyping,
  cardTypeClassName,
  getSprites,
  secondImageClassName,
};
