import React, { useEffect, useState, useRef } from "react";
import "../App/App.css";
import "../Trivia/Trivia.css";
import api from "../../utils/pokeapi.js";
import "../CardData/CardData.css";
//Decide to:
// 1 Call on getSprites from constants.js (no fallback)
// 2 Call on getValidSprite from pokeapi.js (with fallback)
import {
  getBasicInfo,
  getSprites,
  getTyping,
  cardTypeClassName,
} from "../../utils/constants.js";
import diceIcon from "../../images/dice-icon.svg";
import shinyIcon from "../../images/shiny-icon.svg";
import notShinyIcon from "../../images/not-shiny-icon.svg";

function Trivia({
  randomSubmitTrivia,
  isLoadingImage,
  pokemonData,
  showShiny,
  shinyRequest,
  firstColor,
  secondColor,
}) {
  const [data, setData] = useState({});
  const [pokemonSprite, setPokemonSprite] = useState({});
  const [pokemonId, setPokemonId] = useState(null);
  const randomPokemonIdRef = useRef(Math.floor(Math.random() * 1025) + 1);
  const [typings, setTypings] = useState({
    primaryTyping: "",
    secondaryTyping: "",
  });

  useEffect(() => {
    // If pokemonData is provided (from parent), use it
    if (pokemonData && Object.keys(pokemonData).length > 0) {
      const poke = Array.isArray(pokemonData) ? pokemonData[0] : pokemonData;
      const basicInfo = getBasicInfo(poke, poke.pokedexEntry);
      const { frontSprite, shinyFrontSprite } = getSprites(poke);
      //Typing + color style
      const { primaryTyping, secondaryTyping } = getTyping(poke);

      setTypings({ primaryTyping, secondaryTyping });
      setPokemonSprite({ frontSprite, shinyFrontSprite });
      setData({ ...basicInfo });
      setPokemonId(poke.id);
      return;
    }

    // Otherwise, fetch a random Pokémon on mount
    const id = randomPokemonIdRef.current;
    setPokemonId(id);

    Promise.all([api.getPokemon(id), api.getPokedexEntry(id)])
      .then(([poke, pokedexData]) => {
        const basicInfo = getBasicInfo(poke, pokedexData);
        const { frontSprite, shinyFrontSprite } = getSprites(poke);
        const { primaryTyping, secondaryTyping } = getTyping(poke);

        setTypings({ primaryTyping, secondaryTyping });
        setPokemonSprite({ frontSprite, shinyFrontSprite });
        setData({ ...basicInfo });
      })
      .catch((err) => console.log(err));
    // Only run on mount or when pokemonData changes
  }, [pokemonData]);

  // Pokemon Info
  const { name, genus, pokedex } = data;
  const secondaryTypeClassName = cardTypeClassName(secondColor);

  //To-Do:
  // 1 Add Typing, Weight, Height
  // 2 Toggle Different Height and Weight Units (Metric/Imperial)
  // 3 Add Shiny change to image on button click

  return (
    <section className="trivia app__section">
      <div className="trivia__card">
        <div className="trivia__info">
          <div className="trivia__header trivia__spacing--start">
            <h2 className="trivia__number trivia__background">
              No. {pokemonId}
            </h2>
            <div className="buttons">
              <button
                className="button button__shadow-drop button__shadow-drop_white"
                type="button"
                onClick={(e) => {
                  shinyRequest(e);
                }}
              >
                <img
                  className="button__icon"
                  src={showShiny ? shinyIcon : notShinyIcon}
                  alt="shiny-icon"
                />
              </button>
              <button
                className="button button__shadow-drop button__shadow-drop_white"
                type="button"
                onClick={(e) => {
                  randomSubmitTrivia(e);
                }}
              >
                <img
                  className="button__icon"
                  src={diceIcon}
                  alt="random-icon"
                />
              </button>
            </div>
          </div>
          <h2 className="trivia__name trivia__background trivia__spacing trivia__spacing--middle">
            {name}
          </h2>
          <h2 className="trivia__genus trivia__background trivia__spacing trivia__spacing--middle">
            The {genus}
          </h2>
          <h2 className="trivia__pokedex trivia__background trivia__spacing trivia__spacing--end">
            {pokedex}
          </h2>
          <div className="trivia__footer">
            {/* Typing, Height and Weight */}
            <div className="card__type-container">
              <h2 className="type" style={{ backgroundColor: firstColor }}>
                {typings.primaryTyping}
              </h2>
              <h2
                className={secondaryTypeClassName}
                style={{ backgroundColor: secondColor }}
              >
                {typings.secondaryTyping}
              </h2>
            </div>
          </div>
        </div>
        {isLoadingImage ? (
          <>
            <div className="preloader">
              <div className="preloader__spinner preloader__spinner--page"></div>
              <p className="preloader__text">Searching for Pokemon...</p>
            </div>
          </>
        ) : (
          <img
            className="trivia__pokemon-sprite"
            src={
              showShiny
                ? pokemonSprite.shinyFrontSprite
                : pokemonSprite.frontSprite
            }
            alt={`${name}-front-sprite`}
          />
        )}
      </div>
    </section>
  );
}
export default Trivia;
