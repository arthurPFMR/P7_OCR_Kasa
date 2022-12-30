import React, { useState } from "react";

import previousArrow from "../assets/images/previousArrow.png";
import nextArrow from "../assets/images/nextArrow.png";

const Slider = (props) => {

  const [currentImg, setCurrentImg] = useState({ index: 0 });

  const handleNext = () => {
    setCurrentImg(currentImg === props.length ? 1 : currentImg + 1);
  };

  const handlePrevious = () => {
    setCurrentImg(currentImg === props.length ? 1 : currentImg - 1);
  };

  return (
    <div className="slider">
      <img src={props.pictures} alt={props.title} />
      <div className="slideBtn">
        <button className="previousBtn" onClick={handlePrevious}>
          <img src={previousArrow} alt="Bouton précédent" />
        </button>
        <button className="nextBtn" onClick={handleNext}>
          <img src={nextArrow} alt="Bouton suivant" />
        </button>
      </div>
      {/* <p className="counterImg">{props.pictures.length}</p> */}
    </div>
  );
};

export default Slider;
