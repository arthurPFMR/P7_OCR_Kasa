import React from "react";

import fullStar from "../assets/images/full-star.png";
import emptyStar from "../assets/images/empty-star.png";

const Rating = (props) => {
  const finalRating = props.rating;
  const maxRating = 5;
  const stars = [];

  for (let i = 1; i < maxRating + 1; i++) {
    if (i <= finalRating) {
      stars.push(
        <img className="star" src={fullStar} alt="Note du propriétaire" />
      );
    } else {
      stars.push(
        <img className="star" src={emptyStar} alt="Note du propriétaire" />
      );
    }
  }
  return <div className="ratingStars">{stars}</div>;
};

export default Rating;
