import React, { useState, useRef, useEffect } from "react";
import "../AboutRow/AboutRow.css";
import "../App/App.css";

function AboutRow({ index, title, text__first, text__second, imgSrc }) {
  const ref = useRef(null);
  const [rowVisible, setRowVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRowVisible(true);
          ref.current.classList.add("animation__fade-in");
          observer.unobserve(ref.current); // only once
        }
      },
      { threshold: 0.3 } // adjust when it should trigger
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  const rowClass = `about-row ${
    index % 2 === 0 ? "about-row--normal" : "about-row--reverse"
  }
  ${rowVisible ? `animation__fade-in` : `animation__hidden`}`;
  return (
    <div className="about-row__section">
      <div className="about-row__content">
        <div ref={ref} className={rowClass}>
          <img src={imgSrc} alt="about-pic" className="about-row__image" />
          <div className="about-row__content">
            <h2 className="about-row__title">{title}</h2>
            <p className="about-row__paragraph">{text__first}</p>
            <p className="about-row__paragraph">{text__second}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutRow;
