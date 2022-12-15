import React from "react";

import bannerImg from "../assets/images/Eric-Muhr-Banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Photo représentant une côte sauvage" />
      <p>
        Chez vous,
        <br />
        partout et ailleurs
      </p>
    </div>
  );
};

export default Banner;
