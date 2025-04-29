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
    //   .getPokedexEntry(randomPokemonId)
    //   .then((pokearray) => {
    //     setTriviaData(pokearray);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {});
  }, []);
  // console.log(triviaData);

  return (
    <section className="trivia app__section">
      <div className="trivia__card">
        <div className="trivia__header">
          <h2 className="trivia__number">{pokemonId}</h2>
          <h2 className="trivia__name">{}</h2>
        </div>
        <div className="trivia__info"></div>
        <div className="trivia__footer"></div>
        <img src={pokemonSprite} />
        {/* alt={`${pokemonData.name} front facing image`} */}
      </div>
    </section>
  );
}
export default Trivia;
