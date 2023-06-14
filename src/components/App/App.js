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
  const [ifToggleResult, setIfToggleResult] = useState(false); // search result
  const [isLoading, setIsLoading] = useState(false); // preloader

  const inputRef = useRef();

  // Get pokemon from api via input
  // Loading state is true during api call & false after api call is complete
  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    api
      .getPokemon(query)
      .then((pokearray) => {
        // array of poke data from search
        console.log(pokearray);
        setPokemonData(pokearray);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setPokemonData(""); // Reset data for next search
    inputRef.current.value = "";
  }

  return (
    <div className="app">
      <div className="app__background">
        <Header></Header>
        <Main
          value={query}
          setQuery={setQuery}
          onSubmit={onSubmit}
          inputRef={inputRef}
          setIfToggleResult={setIfToggleResult}
        />
      </div>
      {ifToggleResult && (
        <CardData isLoading={isLoading} pokemonData={pokemonData} />
      )}
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
