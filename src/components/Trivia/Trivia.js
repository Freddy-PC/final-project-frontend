import React, { useEffect, useState } from "react";
import "../App/App.css";
import "../Trivia/Trivia.css";
import api from "../../utils/pokeapi";

function Trivia() {
  // Make global constant to sue also in CardData.js? (Same needed there)
  // const frontSprite =
  //   pokemonData.sprites?.versions["generation-v"]["black-white"].animated
  //     .front_default || pokemonData.sprites?.front_default;
  const [triviaData, setTriviaData] = useState({});
  const [pokemonpicture, setPokemonPicture] = useState({});
  useEffect(() => {
    // initial request
    const triviaPokemonId = Math.floor(Math.random() * 1025) + 1;
    api
      .getPokemonSprite(triviaPokemonId)
      .then((pokearray) => {
        setPokemonPicture(pokearray);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
    api
      .getPokedexEntry(triviaPokemonId)
      .then((pokearray) => {
        setTriviaData(pokearray);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  }, []);
  console.log(triviaData);
  console.log(pokemonpicture);

  return (
    <section className="trivia app__section">
      <div className="trivia__card">
        <div className="trivia__header">
          <h2 className="trivia__number">{}</h2>
          <h2 className="trivia__name">{}</h2>
        </div>
        <div className="trivia__info"></div>
        <div className="trivia__footer"></div>
        {/* <img src={pokemonData} alt={`${pokemonData.name} front facing image`} /> */}
      </div>
    </section>
  );
}
export default Trivia;
