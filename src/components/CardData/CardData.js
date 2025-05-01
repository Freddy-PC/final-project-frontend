import "./CardData.css";
import "../Preloader/Preloader.css";
import {
  getBasicInfo,
  getTyping,
  cardTypeClassName,
  getSprites,
  secondImageClassName,
} from "../../utils/constants.js";
import "../../utils/constants.css";

function CardData({
  pokemonData,
  isLoading,
  handleClick,
  firstColor,
  secondColor,
}) {
  const { name, id } = getBasicInfo(pokemonData);
  //Typing + color style
  const { primaryTyping, secondaryTyping } = getTyping(pokemonData);
  const secondaryTypeClassName = cardTypeClassName(secondColor);
  /* Sprites 
   animated pics for Gen 1-5 (1-649) + normal pics for Gen 6-9 */
  const { frontSprite, backSprite } = getSprites(pokemonData);
  const backSpriteClassName = secondImageClassName(backSprite);
  // Preloader while data is being retrieved
  // Message if no data is retrieved
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
                  {name}: {id}
                </h1>
                <div className="card__type-container">
                  <h2 className="type" style={{ backgroundColor: firstColor }}>
                    {primaryTyping}
                  </h2>
                  <h2
                    className={secondaryTypeClassName}
                    style={{ backgroundColor: secondColor }}
                  >
                    {secondaryTyping}
                  </h2>
                </div>
                <div className="card__images">
                  <img
                    src={frontSprite}
                    alt={`${name}front-sprite`}
                    className="sprite"
                  />
                  <img
                    src={backSprite}
                    alt={`${name}back-sprite`}
                    className={backSpriteClassName}
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
