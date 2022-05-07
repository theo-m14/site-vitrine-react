import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound-content">
        <h2>Page 404</h2>
        <NavLink to="/">Retour à l'accueil</NavLink>
      </div>
    </div>
  );
};

export default NotFound;
