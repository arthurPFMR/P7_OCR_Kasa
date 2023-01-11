import React from "react";

import fullStar from "../assets/images/full-star.png";
import emptyStar from "../assets/images/empty-star.png";
/*
component used to display stars for rating on Rental.js
  => uses 1 props:
                  -rating
creating an array(stars) and push the value of rating (using a loop)                  
*/
const Rating = (props) => {
  const finalRating = props.rating;
  const maxRating = 5;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    if (i < finalRating) {
      stars.push(
        <img key={i} className="star" src={fullStar} alt="Note du propriétaire" />
      );
    } else {
      stars.push(
        <img key={i} className="star" src={emptyStar} alt="Note du propriétaire" />
      );
    }
  }
  return <div className="ratingStars">{stars}</div>;
};

export default Rating;
