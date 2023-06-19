import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import CardData from "../CardData/CardData";
import Footer from "../Footer/Footer";
import api from "../../utils/pokeapi";
import ItemModal from "../ItemModal/ItemModal";
import { COLOR__TYPE, MODAL_TYPE } from "../../utils/constants";

function App() {
  const [pokemonData, setPokemonData] = useState([]); // data
  const [query, setQuery] = useState(null); // input
  const [ifToggleResult, setIfToggleResult] = useState(false); // search result
  const [isLoading, setIsLoading] = useState(false); // preloader
  const [activeModal, setActiveModal] = useState("");

  const [firstColor, setFirstColor] = useState(""); // Style poke-type from array property
  const [secondColor, setSecondColor] = useState("");

  useEffect(() => {
    const firstType = pokemonData.types?.["0"]?.type.name;
    setFirstColor(COLOR__TYPE[firstType]); // if type from api same as type "name" in array, apply color to style

    const secondType = pokemonData.types?.["1"]?.type.name;
    setSecondColor(COLOR__TYPE[secondType]);
  }, [pokemonData]);

  function searchInput(e) {
    setQuery(e.target.value.toLowerCase());
  }

  const handleClick = () => {
    setActiveModal(MODAL_TYPE.PREVIEW);
  };

  const closeAllModals = () => {
    setActiveModal("");
  };
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeAllModals();
    }
  };
  useEffect(() => {
    const closebyEsc = (evt) => {
      if (evt.key === "Escape") {
        closeAllModals();
      }
    };
    window.addEventListener("keydown", closebyEsc);
    return () => window.removeEventListener("keypress", closebyEsc);
  }, []);

  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    api
      .getPokemon(query)
      .then((pokearray) => {
        // array of poke data from search
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
        <Header />
        <Main
          value={query}
          searchInput={searchInput}
          onSubmit={onSubmit}
          inputRef={inputRef}
          setIfToggleResult={setIfToggleResult}
        />
      </div>
      {ifToggleResult && (
        <CardData
          isLoading={isLoading}
          pokemonData={pokemonData}
          handleClick={handleClick}
          firstColor={firstColor}
          secondColor={secondColor}
        />
      )}
      <About></About>
      <Footer></Footer>

      {activeModal === MODAL_TYPE.PREVIEW && (
        <ItemModal
          pokemonData={pokemonData}
          onClose={closeAllModals}
          onClick={handleOverlay}
          firstColor={firstColor}
          secondColor={secondColor}
        />
      )}
    </div>
  );
}

export default App;
