import React, { useEffect, useState, useRef } from "react";
import "../App/App.css";
import "../Trivia/Trivia.css";
import api, { getValidSprite } from "../../utils/pokeapi";

function Trivia() {
  const [triviaData, setTriviaData] = useState({});
  const [pokemonSprite, setPokemonSprite] = useState({});
  const [pokemonId, setPokemonId] = useState(null);
  const randomPokemonIdRef = useRef(Math.floor(Math.random() * 1025) + 1);

  useEffect(() => {
    // initial request + only run once
    const id = randomPokemonIdRef.current;
    setPokemonId(id);

    getValidSprite(id).then(setPokemonSprite);
    api
      .getPokedexEntry(id)
      .then((pokearray) => {
        setTriviaData(pokearray);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  }, []);

  // Data won't load on intial render
  const name = triviaData.names?.["8"].name;
  const genus = triviaData.genera?.find(
    (array) => array.language.name === "en"
  )?.genus;
  const pokedex = triviaData.flavor_text_entries?.find(
    (array) => array.language.name === "en"
  )?.flavor_text;

  console.log(triviaData);

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
        <img src={pokemonSprite} />
        {/* alt={`${pokemonData.name} front facing image`} */}
      </div>
    </section>
  );
}
export default Trivia;
