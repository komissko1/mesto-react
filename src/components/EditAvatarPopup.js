import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const urlRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(urlRef.current.value);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <label className="form__field">
        <input
          ref={urlRef}
          className="form__input"
          type="url"
          id="avatarLink"
          placeholder="Ссылка на изображение"
          required
        />
        <span className="form__input-error" id="avatarLink-alert"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
