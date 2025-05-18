import React from "react";
import "../../index.css";

interface UICardProps {
  image: string;
  title: string;
  category: string;
  text: string;
  time: string;
  servings: string;
  linkView: string;
  linkEdit: string;
}

const UICard: React.FC<UICardProps> = ({
  image,
  title,
  category,
  text,
  time,
  servings,
  linkView,
  linkEdit,
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <div className="card-head">
          <h5 className="card-title">{title} </h5>
          <span className="category">{category}</span>
        </div>
        <p className="card-text">{text}</p>
        <p className="card-text">
          {time} {servings}
        </p>
        <a
          href={linkView}
          className="btn btn-primary"
          style={{ margin: "0 10px 0 0" }}
        >
          View
        </a>
        <a
          href={linkEdit}
          className="btn btn-primary"
          style={{ margin: "0 0 0 40%" }}
        >
          Edit
        </a>
      </div>
    </div>
  );
};

export default UICard;
