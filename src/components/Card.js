import React from "react";

function Card(props) {
  const { bgColor, textColor } = props.themeData;
  const { title, text, image } = props.item;
  const ITEM = props.item;

  return (
    <div className={`card border-secondary ${bgColor} ${textColor}`}>
      {image ? <img src={image} className="card-img-top" alt="..." /> : null}

      <div className="card-body">
        {ITEM.title ? <h2 className="card-title">{ITEM.title}</h2> : null}
        <p className="card-text">{props.item.text}</p>
        <div />
      </div>
    </div>
  );
}

export default Card;
