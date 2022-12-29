import React from 'react';

import fullStar from "../assets/images/full-star.png"
import emptyStar from "../assets/images/empty-star.png"


// starIndex = "5" soit (x + y)
// rating = full-star = x
// empty-star = y soit (5 - x)

// si rating = x :
//                  => full-star = x
//                  => empty-star = starIndex - full-star


const Rating = () => {
    return (
        <div className='ratingStars'>
            <img src={ fullStar } alt="Note de la location" />
            <img src={ fullStar } alt="Note de la location" />
            <img src={ fullStar } alt="Note de la location" />
            <img src={ fullStar } alt="Note de la location" />
            <img src={ emptyStar } alt="Note de la location" />
        </div>
    );
};

export default Rating;