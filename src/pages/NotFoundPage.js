import React from "react";
import Navigation from "../components/Navigation";


const NotFoundPage = () => {
  return (
    <div className="DOM">
      <Navigation />
      <div className="error">
        <p className="code">404</p>
        <p className="message">Oups la page que vous demandez n'existe pas.</p>
        <a href="http://localhost:3000">Retourner sur la page d'accueil</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
