import React from "react";
import "./App.css";
import background from "../../images/pokemon-background.jpg";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="app__background">
        <Header></Header>
        <Main></Main>
      </div>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
