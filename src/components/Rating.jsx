import { useEffect, useState } from "react";

import fullStar from "../assets/images/full-star.png";
import emptyStar from "../assets/images/empty-star.png";

const Rating = (props) => {
    const [emptyStarNb, setEmptyStarNb] = useState();
    const maxRating = 5;

    useEffect(() => {
        +props.rating < maxRating && setEmptyStarNb(maxRating - +props.rating);
    }, [props.rating]);


  return (
    <div className="ratingStars">
        {[...Array(+props.rating)].map((e, index) => {
            return <img className="star" key={index} src={fullStar} alt="Note du loueur" />;
        })}
         {emptyStarNb && [...Array(emptyStarNb)].map((e, index) => {
            return <img className="star" key={index} src={emptyStar} alt="Note du loueur" />;
        })}

    </div>
  );
};

export default Rating;
