import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <p className="code">404</p>
      <p className="message">Oups la page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <p className="link-to-home">Retourner sur la page d'accueil</p>
      </NavLink>
    </div>
  );
};

export default Error;
