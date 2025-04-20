import React, { useState, useRef, useEffect } from "react";
import "../About/About.css";

// RENAME to AboutRow
// Won't be resued anywhere else for now but this is good practice and very reusable and organized
function Section({ index, title, text__first, text__second, imgSrc }) {
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

  const rowClass = `about__row ${
    index % 2 === 0 ? "about__row-normal" : "about__row-reverse"
  }
  ${rowVisible ? `animation__fade-in` : `animation__hidden`}`;
  // DYNAMIC CLASS for image if odd or even
  // IF image even, no margin is added, if odd add margin left to image
  // const rowImageClass = = `about__row ${
  //   index % 2 === 0 ? "about__image-normal" : "about__image-reverse"}`;
  // }

  // REFACTOR ABOUT.CSS class to "AboutRow.css"
  return (
    <div className="about__section">
      <div className="about__content">
        <div ref={ref} className={rowClass}>
          <img src={imgSrc} alt="about-pic" className="about__image" />
          <div className="about__row-content">
            <h2 className="about__title">{title}</h2>
            <p className="about__paragraph">{text__first}</p>
            <p className="about__paragraph">{text__second}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;
