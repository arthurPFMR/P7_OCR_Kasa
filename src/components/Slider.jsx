import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import previousArrow from "../assets/images/previousArrow.png"
import nextArrow from "../assets/images/nextArrow.png"

const Slider = () => {
  const params = useParams();
  const [rental, setRental] = useState([]);

  useEffect(() => {
    const rentalApiUrl = `http://localhost:3004/rentals/${params.rentalId}`;
    axios.get(rentalApiUrl).then((res) => setRental(res.data));
  }, [params]);

  const [currentImg, setCurrentImg] = useState(0);

  const handleNext = () => {
    setCurrentImg(currentImg === thumbs.length ? 1 : currentImg + 1);
  };

  const handlePrevious = () => {
    setCurrentImg(currentImg === thumbs.length ? 1 : currentImg - 1);
  };

  const thumbs = rental.pictures;
  // console.log(thumbs);

  return (
    <div className="slider">
      {/* <img src={thumbs[currentImg]} alt="" /> */}
      <div className="slideBtn">
      <button className="previousBtn" onClick={handlePrevious}>
        <img src={previousArrow} alt="Bouton précédent" />
        </button>
      <button className="nextBtn" onClick={handleNext}>
      <img src={nextArrow} alt="Bouton suivant" />
      </button>
      </div>
    </div>
  );
};

export default Slider;
{
  /* {rental.map((rental, index) => (
          <div key={index}>
            <img src={rental.picture} alt="" />
          </div>
        ))} */
}
