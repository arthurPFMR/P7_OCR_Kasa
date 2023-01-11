import React from "react";
import { NavLink } from "react-router-dom";
/*
component used to display cards on Home.js
  => uses 3 props:
                  -id of rental
                  -cover images for the card
                  -title of the card
*/
const Card = (props) => {
  return (
    <NavLink to={"/rental/" + props.id} className="to-rental-page">
      <div className="card">
        <img src={props.cover} alt={"Nom de la location : " + props.title} />
          <h3>{props.title}</h3>
      </div>
    </NavLink>
  );
};

export default Card;
