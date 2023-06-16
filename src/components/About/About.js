import React from "react";
import "./About.css";
import "../App/App.css";
import AboutPic from "../../images/about-picture.jpg";

function About() {
  return (
    <section className="about page__section">
      <img src={AboutPic} alt="about-pic" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the Author</h2>
        <p className="about__paragraph">
          Hello, my name is Freddy. I'm a Software Engineer that knows how to
          use HTML, CSS, JavaScript, & React.
        </p>
        <p className="about__paragraph">
          Coding is another form of art. It's cheesy to say but this site was
          once an idea. Now the fully functional website can aid you on your
          journey to become the greatest Pokemon Scholar of all time!
        </p>
        <p className="about__paragraph">
          Practicum has taught me a variety of skills that make aesthetically
          pleasing and functional websites possible.
        </p>
      </div>
    </section>
  );
}

export default About;
