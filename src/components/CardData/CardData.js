import "./CardData.css";
import "../Preloader/Preloader.css";

function CardData({
  pokemonData,
  isLoading,
  handleClick,
  firstColor,
  secondColor,
}) {
  // animated pics for Gen 1-5 (1-649)
  // normal pics for Gen 6-9

  // Conditionally renders class if second-type is present
  const hasSecondType = pokemonData.types?.["1"]?.type.name;
  const cardTypeClassName = `card__type ${
    hasSecondType ? "card__type-display" : "card__type_undefined"
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
  const primaryTyping = pokemonData.types?.["0"].type.name;
  const secondaryTyping = pokemonData.types?.["1"]?.type.name;
  const frontSprite =
    pokemonData.sprites?.versions["generation-v"]["black-white"].animated
      .front_default || pokemonData.sprites?.front_default;
  const backSprite =
    pokemonData.sprites?.versions["generation-v"]["black-white"].animated
      .back_default ||
    pokemonData.sprites?.back_default ||
    pokemonData.sprites?.front_female;

  /* if it's loading the preloader will appear
     if there is no pokemonData then a message should appear
     typings are styled if type from api is equal to the array type */
  return (
    <section className="cards">
      {isLoading ? (
        <>
          <div className="preloader"></div>
          <p className="preloader__text">Searching for Pokemon...</p>
        </>
      ) : (
        <>
          {!pokemonData ? (
            <>
              <h1 className="results__header">Nothing Found</h1>
              <p className="results__text">
                Sorry, but nothing matched your search terms.
              </p>
            </>
          ) : (
            <>
              <h1 className="results__header">Search Results</h1>
              <div className="card__container" onClick={handleClick}>
                <h1 className="card__name">
                  {pokemonData.name}: {pokemonData.id}
                </h1>
                <div className="card__type-container">
                  <h2
                    className="card__type"
                    style={{ backgroundColor: firstColor }}
                  >
                    {primaryTyping}
                  </h2>
                  <h2
                    className={cardTypeClassName}
                    style={{ backgroundColor: secondColor }}
                  >
                    {secondaryTyping}
                  </h2>
                </div>
                <div className="card__images">
                  <img
                    src={frontSprite}
                    alt="pokepic-front"
                    className="card__pokepic"
                  />
                  <img
                    src={backSprite}
                    alt="pokepic-back"
                    className={secondImageClassName}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default CardData;
