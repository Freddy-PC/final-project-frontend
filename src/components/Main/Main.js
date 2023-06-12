import React from "react";
import "./Main.css";
import "../App/App.css";

function Main({ query, setQuery, onSubmit, inputRef }) {
  return (
    <main className="main page__section">
      <div className="main__container">
        <h1 className="main__title">Who's that Pokemon?</h1>
        <p className="main__paragraph">
          Find information about any Pokemon. Type the Pokemon's name or id
          number according to the national dex!
        </p>
        <form className="search" onSubmit={onSubmit}>
          <input
            className="search__input"
            name="search"
            type="search"
            id="search"
            placeholder="Enter name or id number"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputRef}
          ></input>
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
