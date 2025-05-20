import React from "react";
import "./Main.css";
import "../App/App.css";
import searchIcon from "../../images/search-icon.svg";
import diceIcon from "../../images/dice-icon.svg";

function Main({ query, searchInput, onSubmit, inputRef, randomSubmit }) {
  return (
    <main className="main app__section">
      <div className="flex-container">
        <h1 className="title">Who's that Pokemon?</h1>
        <p className="paragraph">
          Find information about any Pokemon. Type the Pokemon's name or id
          number according to the national dex!
        </p>
        <div className="search__container">
          <form className="search" onSubmit={onSubmit} noValidate>
            <input
              className="search__bar"
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
            <div className="buttons">
              <button
                className="button button__search button__shadow-drop button__shadow-drop_black"
                type="search"
              >
                <img
                  className="button__icon"
                  src={searchIcon}
                  alt="search-icon"
                />
                Search
              </button>
              <button
                className="button button__random button__shadow-drop button__shadow-drop_black"
                type="button"
                onClick={(e) => {
                  randomSubmit(e);
                }}
              >
                <img
                  className="button__icon"
                  src={diceIcon}
                  alt="random-icon"
                />
                Random
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Main;
