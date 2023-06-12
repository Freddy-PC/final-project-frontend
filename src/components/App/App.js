import React, { useState, useRef } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import CardData from "../CardData/CardData";
import Footer from "../Footer/Footer";
import api from "../../utils/pokeapi";

function App() {
  const [pokemonData, setPokemonData] = useState([]); // data
  const [query, setQuery] = useState(""); // input
  const [result, setResult] = useState(false);

  const inputRef = useRef();

  // Get pokemon from api via input
  function onSubmit(e) {
    e.preventDefault();

    // const value = inputRef.current.value;
    api
      .getPokemon(query)
      .then((pokearray) => {
        // array of poke data from search
        console.log(pokearray);
        setPokemonData(pokearray);
      })
      .catch((err) => console.log(err));

    inputRef.current.value = "";
  }

  // const filteredItems = pokemonData.filter((item) => {
  //   return item.toLowerCase().includes(query.toLowerCase());
  // });
  return (
    <div className="app">
      <div className="app__background">
        <Header></Header>
        <Main
          value={query}
          setQuery={setQuery}
          onSubmit={onSubmit}
          inputRef={inputRef}
          pokemonData={pokemonData}
        />
      </div>
      <CardData pokemonData={pokemonData} />
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
