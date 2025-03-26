import React from "react";

function Section({ title, text, imgSrc }) {
  return (
    <div className="section">
      <img src={imgSrc} alt={title} />
      <div className="section__content">
        <h2 className="section__title">{title}</h2>
        <p className="section__text">{text}</p>
      </div>
    </div>
  );
}
export default Section;
