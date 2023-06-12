import "./CardData.css";
import "../Preloader/Preloader.css";

function CardData({ pokemonData, isLoading }) {
  // animated pics for Gen 1-5 (1-649)
  // normal pics for Gen 6-9 =

  // FIX:
  // Not every pokemon has a back Pic???
  //   console.log(pokemonData.types?.["0"].type?.name);

  // Conditionally renders class if type is present
  const hasSecondType = pokemonData.types?.["1"]?.type.name;
  const cardTypeClassName = `card__type ${
    hasSecondType ? "card__type-display" : "card__type"
  } `;

  // If no second image, don't display
  const secondImage =
    pokemonData.sprites?.versions["generation-v"]["black-white"].animated
      .back_default ||
    pokemonData.sprites?.back_default ||
    pokemonData.sprites?.front_female;
  const secondImageClassName = `card__pokepic ${
    secondImage ? "card__pokepic" : "card__pokepic-hidden"
  } `;

  // if it's loading the preloader will appear
  // if there is no pokemonData then a message should appear !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className="cards">
      {isLoading ? (
        <>
          <div className="preloader"></div>
          <p className="preloader__text">Searching for Pokemon...</p>
        </>
      ) : (
        <>
          <h1 className="results__header">Search Results</h1>
          <div className="card__container">
            <h1 className="card__name">
              {pokemonData.name}: {pokemonData.id}
            </h1>
            <div className="card__type-container">
              <h2 className="card__type">
                {pokemonData.types?.["0"].type.name}
              </h2>
              <h2 className={cardTypeClassName}>
                {pokemonData.types?.["1"]?.type.name}
              </h2>
            </div>
            <img
              src={
                pokemonData.sprites?.versions["generation-v"]["black-white"]
                  .animated.front_default || pokemonData.sprites?.front_default
              }
              alt="pokepic-front"
              className="card__pokepic"
            />
            <img
              src={
                pokemonData.sprites?.versions["generation-v"]["black-white"]
                  .animated.back_default ||
                pokemonData.sprites?.back_default ||
                pokemonData.sprites?.front_female
              }
              alt="pokepic-back"
              className={secondImageClassName}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default CardData;
