import React from "react";
import "../../index.css";

interface UICardProps {
  image: string;
  title: string;
  category: string;
  recipe: string;
  instructions: string;
  time: string;
  servings: string;
}

const UICard: React.FC<UICardProps> = ({
  image,
  title,
  category,
  recipe,
  instructions,
  time,
  servings,
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-img-top CardImageHolder">
        {image ? <img src={image} alt={title} /> : "Recipe Image"}
      </div>
      <div className="card-body">
        <div className="card-head">
          <h5 className="card-title">{title}</h5>
          <span className="category">{category}</span>
        </div>
        <p className="card-text">
          <strong>Ingredients:</strong> {recipe}
        </p>
        <p className="card-text">
          <strong>Instructions:</strong> {instructions.slice(0, 100)}...
        </p>
        <p className="card-text">
          <strong>Time:</strong> {time} | <strong>Servings:</strong> {servings}
        </p>
      </div>
    </div>
  );
};

export default UICard;
