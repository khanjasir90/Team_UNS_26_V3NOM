import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div
      className="landing__page__card flex__center"
      style={{
        backgroundImage: `linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.8)
    ),
    url(${data.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2>{data.title}</h2>
      <div className="card__overlay flex__center">
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
