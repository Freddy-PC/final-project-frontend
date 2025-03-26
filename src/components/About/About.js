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
      <img src={examplePicture} alt="about-pic" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the Author</h2>
        <p className="about__paragraph">
          Hello, my name is Freddy. I’m an experienced Software Engineer who
          uses HTML, CSS, JavaScript, and React to create web-pages!
          <br></br> I started my Pokémon journey in the Sinnoh region (Gen 4),
          and since then, I’ve enjoyed learning more about these creatures.
          Whether they roam the land, sea, or sky, there is something
          fascinating about each one.
        </p>
      </div>
    </section>
  );
}

export default About;
