import React from "react";

const Carousel = ({ rental }) => {
  return (
    <div className="carousel">
    <img
      src={rental.pictures}
      alt={"Nom de la location : " + rental.title}
    />
  </div>
  );
};

export default Carousel;
