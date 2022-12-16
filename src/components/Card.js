import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ rental }) => {
  return (
    <NavLink to={"/rental"} className="to-rental-page">
      <li className="card">
        <img src={rental.cover} alt={"Nom de la location : " + rental.title} />
        <div className="card-infos">
          <h3>{rental.title}</h3>
        </div>
      </li>
    </NavLink>
  );
};

export default Card;
