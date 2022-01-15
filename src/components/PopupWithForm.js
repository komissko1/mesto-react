import React from "react";

function PopupWithForm(props) {
  return (
    <>
      <h3 className="popup__title">{props.title}</h3>
      <form className="form" name={props.name} onSubmit={props.onSubmit}>
        {props.children}
        <button type="submit" className="form__save-button">
          {props.buttonText}
        </button>
      </form>
    </>
  );
}

export default PopupWithForm;
