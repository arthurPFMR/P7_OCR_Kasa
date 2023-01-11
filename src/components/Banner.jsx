import React from "react";

import bannerImg from "../assets/images/Eric-Muhr-Banner.png";

// Component for the Home.js banner
const Banner = () => {
  return (
    <div className="banner">
      <img
        src={bannerImg}
        alt="Bannière du site Kasa représentant une côte sauvage"
      />
      <div className="titleBanner">
        <p>Chez vous,</p>
        <p>partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Banner;
