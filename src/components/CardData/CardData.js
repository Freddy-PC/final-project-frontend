import "./CardData.css";
import "../App/App.css";

function CardData({ pokemonData }) {
  // animated pics for Gen 1-5
  // normal pics for Gen 6-9 =
  // I stopped playing after Gen 8 so...

  // Not every pokemon has a second type so ? second type

  // FIX:
  // Not every pokemon has a back Pic???
  //   console.log(pokemonData.types?.["0"].type?.name);

  // Conditionally renders class if type is present
  const hasSecondType = pokemonData.types?.["1"]?.type.name;

  const cardTypeClassName = `card__type ${
    hasSecondType ? "card__type-display" : "card__type"
  } `;

  return (
    <div className="cards">
      <h1 className="results__header">Search Results</h1>
      <div className="card__container">
        <h1 className="card__name">
          {pokemonData.name}: {pokemonData.id}
        </h1>
        <div className="card__type-container">
          <h2 className="card__type">{pokemonData.types?.["0"].type.name}</h2>
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
              .animated.back_default || pokemonData.sprites?.back_default
          }
          alt="pokepic-back"
          className="card__pokepic"
        />
      </div>
    </div>
  );
}

export default CardData;
