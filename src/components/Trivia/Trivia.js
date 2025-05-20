import React, { useEffect, useState, useRef } from "react";
import "../App/App.css";
import "../Trivia/Trivia.css";
import api from "../../utils/pokeapi.js";
//Decide to:
// 1 Call on getSprites from constants.js (no fallback)
// 2 Call on getValidSprite from pokeapi.js (with fallback)
import { getBasicInfo, getSprites } from "../../utils/constants";
import diceIcon from "../../images/dice-icon.svg";
import shinyIcon from "../../images/shiny-icon.svg";
// import notShinyIcon from "../../images/not-shiny-icon.svg";

function Trivia({ randomSubmitTrivia, isLoadingImage }) {
  const [data, setData] = useState({});
  const [pokemonSprite, setPokemonSprite] = useState({});
  const [pokemonId, setPokemonId] = useState(null);
  const randomPokemonIdRef = useRef(Math.floor(Math.random() * 1025) + 1);

  useEffect(() => {
    const id = randomPokemonIdRef.current;
    setPokemonId(id);

    Promise.all([api.getPokemon(id), api.getPokedexEntry(id)])
      .then(([pokemonData, pokedexData]) => {
        // Use getBasicInfo to extract and structure data from pokemonData
        const basicInfo = getBasicInfo(pokemonData, pokedexData);
        const { frontSprite } = getSprites(pokemonData);

        setPokemonSprite(frontSprite); // Set the sprite URL
        setData({
          ...basicInfo, // Spread the structured data from getBasicInfo
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const { name, genus, pokedex } = data;
  console.log(data);

  //To-Do:
  // 1 Add Typing, Weight, Height
  // 2 Toggle Different Height and Weight Units (Metric/Imperial)
  // 3 Dynamically render alt tag from pokemon name

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
              >
                <img
                  className="button__icon"
                  src={shinyIcon}
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
            src={pokemonSprite}
            alt={`${name}-front-sprite`}
          />
        )}
      </div>
    </section>
  );
}
export default Trivia;
