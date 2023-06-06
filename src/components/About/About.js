import React from "react";
import "./About.css";
import "../App/App.css";
import AboutPic from "../../images/about-picture.jpg";

function About() {
  return (
    <section className="about page__section">
      <img src={AboutPic} alt="about-pic" className="about__image" />
      <div class="about__content">
        <h2 class="about__title">About the Author</h2>
        <p class="about__paragraph">
          Hello, my name is Freddy. I'm a Software Engineer that knows how to
          use HTML, CSS, JavaScript, & React.
        </p>
        <p class="about__paragraph">
          Coding is another form of art. Cheesy to say but I brought this
          Pokemon website to life from a mere thought.
        </p>
        <p class="about__paragraph">
          Practicum has taught me a variety of skills that make it possible for
          me to make aesthetically pleasing and functional websites.
        </p>
      </div>
    </section>
  );
}

export default About;
