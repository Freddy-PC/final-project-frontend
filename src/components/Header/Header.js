import React from "react";
import "./Header.css";
import "../App/App.css";
import logoImage from "../../images/pokeball-logo.svg";

function Header() {
  return (
    <header className="header app__section">
      <div className="header__container">
        <img src={logoImage} alt="Pokeball-Logo" className="header__logo" />
        <p className="header__logo-name">Poke-Inspector</p>
      </div>
    </header>
  );
}

export default Header;
