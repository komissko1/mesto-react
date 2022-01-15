import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
  const [placeName, setPlaceNameState] = React.useState("");
  const [placeUrl, setPlaceUrlState] = React.useState("");

  React.useEffect(() => {
    setPlaceNameState('');
    setPlaceUrlState('');
  },[props.isOpen]);

  function handleNameChange(e) {
    setPlaceNameState(e.target.value);
  }

  function handlePlaceUrlChange(e) {
    setPlaceUrlState(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(placeName, placeUrl);
  }

  return (
    <PopupWithForm
          name="add"
          title="Новое место"
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          buttonText="Сохранить"
        >
          <label className="form__field">
            <input
              className="form__input"
              type="text"
              id="cardName"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
              value={`${placeName}`}
              onChange={handleNameChange}
            />
            <span className="form__input-error" id="cardName-alert"></span>
          </label>
          <label className="form__field">
            <input
              className="form__input"
              type="url"
              id="cardLink"
              placeholder="Ссылка на картинку"
              required
              value={`${placeUrl}`}
              onChange={handlePlaceUrlChange}
            />
            <span className="form__input-error" id="cardLink-alert"></span>
          </label>
        </PopupWithForm>
  );
}

export default AddPlacePopup;

