import React from "react";
import "./Header.css";
import "../App/App.css";
import logoImage from "../../images/pokeball-logo.svg";
import questionLogo from "../../images/question-icon.svg";

function Header() {
  return (
    <header className="header app__section">
      <div className="header__container">
        <img
          src={logoImage}
          alt="Pokeball-Logo"
          className="image header__image-icon"
        />
        <p className="header__logo-name">Poke-Inspector</p>
      </div>
      <div className="header__nav">
        <img
          src={questionLogo}
          alt="Pokeball-Logo"
          className="image header__image-question"
        />
      </div>
    </header>
  );
}

export default Header;
