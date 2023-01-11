import React from "react";

import FooterImg from "../assets/images/kasa-logo-footer.png";

//component used to display element of the footer
const Footer = () => {
  return (
    <div className="footer">
      <img src={FooterImg} alt="logo Kasa" />
      <p> © 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
