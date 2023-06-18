import React from "react";
import "./Main.css";
import "../App/App.css";

// SetQuery is assigned the value of input field
// setIfToggleResult is false at start so result doesn't show in other component
// lowerCase() method converts uppercase values to lowercase so names are not case-sensitive
function Main({ query, searchInput, onSubmit, inputRef, setIfToggleResult }) {
  return (
    <main className="main app__section">
      <div className="main__container">
        <h1 className="main__title">Who's that Pokemon?</h1>
        <p className="main__paragraph">
          Find information about any Pokemon. Type the Pokemon's name or id
          number according to the national dex!
        </p>
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
            minlength="1"
            maxlength="20"
          ></input>
          <button
            className="search__button"
            type="search"
            onClick={setIfToggleResult}
          >
            Search
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
