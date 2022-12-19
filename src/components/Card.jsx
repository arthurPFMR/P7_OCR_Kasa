import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ rental }) => {
  return (
    <NavLink to={"/rental/" + rental.id} className="to-rental-page">
      <div className="card">
        <img src={rental.cover} alt={"Nom de la location : " + rental.title} />
          <h3>{rental.title}</h3>
      </div>
    </NavLink>
  );
};

export default Card;
