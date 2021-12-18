import React, { useState } from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

function App() {
  const [isEditAvatarPopupOpen, setAvatarPopupState] = React.useState(false);
  const [isEditProfilePopupOpen, setEditPopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPopupState] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setAvatarPopupState(
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen="true"
        onClose={closeAllPopups}
        children={
          <>
            <label className="form__field">
              <input
                className="form__input"
                type="url"
                id="avatarLink"
                placeholder="Ссылка на изображение"
                required
              />
              <span className="form__input-error" id="avatarLink-alert"></span>
            </label>
            <button type="submit" className="form__save-button">
              Сохранить
            </button>
          </>
        }
      />
    );
    return isEditAvatarPopupOpen;
  }

  function handleEditProfileClick() {
    setEditPopupState(
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen="true"
        onClose={closeAllPopups}
        children={
          <>
            <label className="form__field">
              <input
                className="form__input"
                type="text"
                id="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="form__input-error" id="name-alert"></span>
            </label>
            <label className="form__field">
              <input
                className="form__input"
                type="text"
                id="job"
                placeholder="Занятие"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="form__input-error" id="job-alert"></span>
            </label>
            <button type="submit" className="form__save-button">
              Сохранить
            </button>
          </>
        }
      />
    );
    return isEditProfilePopupOpen;
  }

  function handleAddPlaceClick() {
    setAddPopupState(
      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen="true"
        onClose={closeAllPopups}
        children={
          <>
            <label className="form__field">
              <input
                className="form__input"
                type="text"
                id="cardName"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
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
              />
              <span className="form__input-error" id="cardLink-alert"></span>
            </label>
            <button type="submit" className="form__save-button">
              Сохранить
            </button>
          </>
        }
      />
    );
    return isAddPlacePopupOpen;
  }

  function handleDeleteCardClick() {
    return (
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        isOpen="true"
        onClose={selectedCard}
        children={
          <>
            <button type="submit" class="form__save-button">
              Да
            </button>
          </>
        }
      />
    );
  }

  function handleCardClick (card) {
    setSelectedCard(
      <PopupWithImage
        title={card.name}
        link={card.link}
        onClose={closeAllPopups}
      />
    );
    return selectedCard;
  }

  function closeAllPopups() {
    setAvatarPopupState(false);
    setEditPopupState(false);
    setAddPopupState(false);
    setSelectedCard(false);
  }

  return (
    <div>
      <div
        className="root__container"
        onKeyDown={(evt) => {
          if (evt.key === "Escape") {
            closeAllPopups();
          }
        }}
      >
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      {isEditAvatarPopupOpen}
      {isEditProfilePopupOpen}
      {isAddPlacePopupOpen}
      {selectedCard}
    </div>
  );
}

export default App;
