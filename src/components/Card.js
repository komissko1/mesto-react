import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="place">
      <button
        type="button"
        className="place__image-button"
        onClick={handleClick}
      >
        <img
          className="place__image"
          src={props.card.link}
          alt={props.card.name}
        />
      </button>
      <div className="place__caption">
        <h2 className="place__name">{props.card.name}</h2>
        <button type="button" className="place__like-button"></button>
        <p className="place__like-counter">{props.card.likes.length}</p>
      </div>
      <button
        type="button"
        className="place__trash-button link-effect"
      ></button>
    </article>
  );
}

export default Card;
