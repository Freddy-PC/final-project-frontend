import React from "react";
import "./Main.css";
import "../App/App.css";
import searchIcon from "../../images/search-icon.svg";
import diceIcon from "../../images/dice-icon.svg";

/* SetQuery is assigned the value of input field
   setIfToggleResult is false at start so result doesn't show in other component 
   lowerCase() method converts uppercase values to lowercase so names are not case-sensitive */
function Main({ query, searchInput, onSubmit, inputRef, randomSubmit }) {
  return (
    <main className="main app__section">
      <div className="main__container">
        <h1 className="main__title">Who's that Pokemon?</h1>
        <p className="main__paragraph">
          Find information about any Pokemon. Type the Pokemon's name or id
          number according to the national dex!
        </p>
        <div className="search__container">
          <form className="search" onSubmit={onSubmit} noValidate>
            <input
              className="search__input"
              name="search"
              type="search"
              id="search"
              placeholder="Enter name or id number"
              value={query}
              onChange={searchInput}
              ref={inputRef}
              required
              minLength="1"
              maxLength="20"
            ></input>
            <button className="button button__search" type="search">
              <img className="icon" src={searchIcon} alt="search-icon" />
              Search
            </button>
          </form>
          <button
            className="button button__random"
            type="button"
            onClick={(e) => {
              randomSubmit(e);
            }}
          >
            <img className="icon" src={diceIcon} alt="random-icon" />
            Random
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
