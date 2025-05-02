import React, { useEffect, useState, useRef } from "react";
import "../App/App.css";
import "../Trivia/Trivia.css";
import api from "../../utils/pokeapi.js";
//Decide to:
// 1 Call on getSprites from constants.js (no fallback)
// 2 Call on getValidSprite from pokeapi.js (with fallback)
import { getBasicInfo, getSprites } from "../../utils/constants";

function Trivia() {
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

  return (
    <section className="trivia app__section">
      <div className="trivia__card">
        <div className="trivia__header">
          <h2 className="trivia__number">{pokemonId}</h2>
          <h2 className="trivia__name">{name}</h2>
        </div>
        <div className="trivia__info">
          <h2 className="trivia__genus">The {genus}</h2>
          <h2 className="trivia__pokedex">{pokedex}</h2>
        </div>
        <div className="trivia__footer"></div>
        <img src={pokemonSprite} alt={`${name}-front-sprite`} />
      </div>
    </section>
  );
}
export default Trivia;
