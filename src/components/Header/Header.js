import React from "react";
import "./Header.css";
import "../App/App.css";
import logoImage from "../../images/pokeball-logo.png";

function Header() {
  return (
    <header className="header page__section">
      <div className="header__container">
        <img src={logoImage} alt="Pokeball-Logo" className="header__logo" />
        <p className="header__logo-name">Poke-Inspector</p>
      </div>
    </header>
  );
}

export default Header;
