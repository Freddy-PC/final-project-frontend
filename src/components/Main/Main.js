import React from "react";
import "./Main.css";
import "../App/App.css";

function Main() {
  return (
    <main className="main page__section">
      <div className="main__container">
        <h1 className="main__title">Who's that Pokemon?</h1>
        <p className="main__paragraph">
          Find information about any Pokemon. Type the Pokemon's name or id
          number according to the national dex!
        </p>
        <form className="search">
          <input
            class="search__input"
            name=""
            type=""
            id=""
            placeholder="Enter name or id number"
            required
          ></input>
          <button
            class="search__button modal__button_disabled"
            type="submit"
            disabled
          >
            Search
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
