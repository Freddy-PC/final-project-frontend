import React from "react";
import "./About.css";
import "../App/App.css";
import examplePicture from "../../images/pokemon-background.jpg";
import AboutRow from "../AboutRow/AboutRow";

function About({ toggleComponent, setToggleComponent }) {
  return (
    <section className="about app__section">
      {toggleComponent === true ? (
        <>
          <AboutRow
            index={0}
            title={"About the Author"}
            text__first={
              "Hello, my name is Freddy. I’m an experienced Software Engineer who uses HTML, CSS, JavaScript, and React to create web-pages!"
            }
            text__second={
              "I started my Pokémon journey in the Sinnoh region (Gen 4), and since then, I’ve enjoyed learning more about these creatures. Whether they roam the land, sea, or sky, there is something fascinating about each one."
            }
            imgSrc={examplePicture}
          />
          <AboutRow
            index={1}
            title={"Mission"}
            text__first={
              "At Poke-Inspector, we’re here to help you on your journey to becoming a true Pokémon expert! With over 1000 Pokémon out there, there’s always something new to discover."
            }
            text__second={
              "So if you’re ready to “be the very best, like no one ever was,” let’s dive in together!"
            }
            imgSrc={examplePicture}
          />
          <AboutRow
            index={2}
            title={"Acknowledgments"}
            text__first={
              "Formerly known as Practicum, TripleTen gave me the skills to create websites that are both visually appealing and functional."
            }
            text__second={
              "Every new project feels like an adventure into unexplored regions of the Pokémon world, and I can't wait to keep learning and building more!"
            }
            imgSrc={examplePicture}
          />
        </>
      ) : (
        <div className="flex-container">
          <h1 className="title">About the Author</h1>
          <p className="paragraph">
            Like a Pokémon, every developer has a story.{" "}
            <button
              className="button button__render button__shadow-drop button__shadow-drop_black"
              onClick={() => {
                setToggleComponent(true);
              }}
            >
              Click here to learn more!✨
            </button>
          </p>
        </div>
      )}
    </section>
  );
}

export default About;

//<div className="about__content">
//   <div
//     className={`about__row ${
//       toggleComponent ? `animation__fade-in` : ""
//     }`}
//   >
//     <img
//       src={examplePicture}
//       alt="about-pic"
//       className="about__image"
//     />
//     <div className="about__row-content">
//       <h2 className="about__title">About the Author</h2>
//       <p className="about__paragraph">
//         Hello, my name is Freddy. I’m an experienced Software Engineer
//         who uses HTML, CSS, JavaScript, and React to create web-pages!
//       </p>
//       <p className="about__paragraph">
//         I started my Pokémon journey in the Sinnoh region (Gen 4), and
//         since then, I’ve enjoyed learning more about these creatures.
//         Whether they roam the land, sea, or sky, there is something
//         fascinating about each one.
//       </p>
//     </div>
//   </div>
//   <div
//     className={`about__row ${
//       toggleComponent ? `animation__fade-in` : ""
//     }`}
//   >
//     <img
//       src={examplePicture}
//       alt="about-pic"
//       className="about__image"
//     />
//     <div className="about__row-content">
//       <h2 className="about__title">Mission</h2>
//       <p className="about__paragraph">
//         At Poke-Inspector, we’re here to help you on your journey to
//         becoming a true Pokémon expert! With over 1000 Pokémon out
//         there, there’s always something new to discover.
//       </p>
//       <p className="about__paragraph">
//         So if you’re ready to “be the very best, like no one ever was,”
//         let’s dive in together!
//       </p>
//     </div>
//   </div>
//   <div
//     className={`about__row ${
//       toggleComponent ? `animation__fade-in` : ""
//     }`}
//   >
//     <img
//       src={examplePicture}
//       alt="about-pic"
//       className="about__image"
//     />
//     <div className="about__row-content">
//       <h2 className="about__title">Acknowledgments</h2>
//       <p className="about__paragraph">
//         Formerly known as Practicum, TripleTen gave me the skills to
//         create websites that are both visually appealing and functional.
//       </p>
//       <p className="about__paragraph">
//         Every new project feels like an adventure into unexplored
//         regions of the Pokémon world, and I can't wait to keep learning
//         and building more!
//       </p>
//     </div>
//   </div>
// </div>
