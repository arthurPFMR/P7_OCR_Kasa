import React, { useState } from "react";

import previousArrow from "../assets/images/previousArrow.png";
import nextArrow from "../assets/images/nextArrow.png";

const Slider = (props) => {
  const [currentImg, setCurrentImg] = useState({ index: 0, counter: 1 });

  // if last element of [], return to first element of []
  // else go to the next element
  const handleNext = () => {
    if (currentImg.index >= props.pictures.length - 1) {
      return setCurrentImg({
        index: 0,
        counter: 1,
      });
    } else {
      currentImg.index++;
      currentImg.counter++;

      return setCurrentImg({
        index: currentImg.index,
        counter: currentImg.counter,
      });
    }
  };

  // if first element of [], return to last element of []
  // else go to the previous element
  const handlePrevious = () => {
    if (currentImg.index <= 0) {
      return setCurrentImg({
        index: props.pictures.length - 1,
        counter: props.pictures.length,
      });
    } else {
      currentImg.index--;
      currentImg.counter--;

      return setCurrentImg({
        index: currentImg.index,
        counter: currentImg.counter,
      });
    }
  };

  return (
    <div className="slider">
      <img
        src={props.pictures[currentImg.index]}
        alt={"Différente vue du logement"}
      />
      <div className="slideBtn">
        <button className="previousBtn" onClick={handlePrevious}>
          <img src={previousArrow} alt="Bouton précédent" />
        </button>
        <button className="nextBtn" onClick={handleNext}>
          <img src={nextArrow} alt="Bouton suivant" />
        </button>
      </div>
      <p className="counterImg">
        {currentImg.counter}/{props.pictures.length}
      </p>
    </div>
  );
};

export default Slider;
