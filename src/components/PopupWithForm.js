import React from "react";

function PopupWithForm(props) {
  function handleClick(evt) {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close-button")
    ) {
      props.onClose();
    }
  }
console.log()
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={(evt) => handleClick(evt)}
    >
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-button button-effect"
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        <form className="form" name={props.name}>
          {props.children}
          <button type="submit" className="form__save-button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
