import React from "react";
import "./About.css";
import "../App/App.css";
import examplePicture from "../../images/pokemon-background.jpg";
import Section from "../Section/Section";

function About() {
  return (
    <section className="about app__section">
      {/* Section Component here for resuability */}
      {/* 1. Pass styles as props to Section.js for reuseability
          2. Pass Class names from About.js 
          3. Update About.css to have section css
          4. Format CSS to Figma
          */}
      <div className="flex-container">
        <h1 className="title">About the Author</h1>
        <p className="paragraph">
          Like a Pokémon, every developer has a story. Click here to learn more!
          ✨
        </p>
      </div>
      {/* <div className="about__content">
        <div className="about__row">
          <img src={examplePicture} alt="about-pic" className="about__image" />
          <div className="about__row-content">
            <h2 className="about__title">About the Author</h2>
            <p className="about__paragraph">
              Hello, my name is Freddy. I’m an experienced Software Engineer who
              uses HTML, CSS, JavaScript, and React to create web-pages!
            </p>
            <p className="about__paragraph">
              I started my Pokémon journey in the Sinnoh region (Gen 4), and
              since then, I’ve enjoyed learning more about these creatures.
              Whether they roam the land, sea, or sky, there is something
              fascinating about each one.
            </p>
          </div>
        </div>
        <div className="about__row">
          <img src={examplePicture} alt="about-pic" className="about__image" />
          <div className="about__row-content">
            <h2 className="about__title">Mission</h2>
            <p className="about__paragraph">
              At Poke-Inspector, we’re here to help you on your journey to
              becoming a true Pokémon expert! With over 1000 Pokémon out there,
              there’s always something new to discover.
            </p>
            <p className="about__paragraph">
              So if you’re ready to “be the very best, like no one ever was,”
              let’s dive in together!
            </p>
          </div>
        </div>
        <div className="about__row">
          <img src={examplePicture} alt="about-pic" className="about__image" />
          <div className="about__row-content">
            <h2 className="about__title">Acknowledgments</h2>
            <p className="about__paragraph">
              Formerly known as Practicum, TripleTen gave me the skills to
              create websites that are both visually appealing and functional.
            </p>
            <p className="about__paragraph">
              Every new project feels like an adventure into unexplored regions
              of the Pokémon world, and I can't wait to keep learning and
              building more!
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default About;
