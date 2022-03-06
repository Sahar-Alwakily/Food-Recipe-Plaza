import React, { Component } from "react";
import "./RiscipeTitle.css";

const RecipeTitle = ({ recipe }) => {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif)$/) !== null && (
      <div className="recipeTile">
        <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
};

export default RecipeTitle;