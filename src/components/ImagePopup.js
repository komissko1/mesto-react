import React from "react";

function ImagePopup(props) {
  function handleClick(evt) {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close-button")
    ) {
      props.onClose();
    }
  }

  return (
    <div
      className="popup popup_type_image popup_opened"
      onClick={(evt) => handleClick(evt)}
    >
      <div className="popup__image-container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-button button-effect"
        ></button>
        <img className="popup__image" src={props.selectedCard.link} alt={props.selectedCard.name} />
        <p className="popup__img-title">{props.selectedCard.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
