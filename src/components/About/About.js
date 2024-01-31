import React from "react";
import "./About.css";
import "../App/App.css";
import AboutPic from "../../images/about-picture.jpg";

function About() {
  return (
    <section className="about app__section">
      <img src={AboutPic} alt="about-pic" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the Author</h2>
        <p className="about__paragraph">
          Hello, my name is Freddy. I’m an experienced Software Engineer who
          uses HTML, CSS, JavaScript, and React to create webpages.
        </p>
        <p className="about__paragraph">
          Poke-Inspector's mission is to aid Pokemon trainers on their quest to
          become the greatest Pokemon Scholar of all time! With over 1000+
          Pokemon, there is so much you need to know “to become the very best
          like no one ever was”.
        </p>
        <p className="about__paragraph">
          Formerly known as Practicum, TripleTen taught me skills to create both
          aesthetically pleasing and functional websites. I can't wait to create
          even more web pages, it feels like embarking on new adventures in
          unexplored regions of the Pokemon world!
        </p>
      </div>
    </section>
  );
}

export default About;
