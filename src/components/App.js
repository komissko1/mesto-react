import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [avatarPopupState, setAvatarPopupState] = React.useState(false);
  const [editPopupState, setEditPopupState] = React.useState(false);
  const [addPopupState, setAddPopupState] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  function handleEditAvatarClick() {
    setAvatarPopupState(!avatarPopupState);
  }

  function handleEditProfileClick() {
    setEditPopupState(!editPopupState);
  }

  function handleAddPlaceClick() {
    setAddPopupState(!addPopupState);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setAvatarPopupState(false);
    setEditPopupState(false);
    setAddPopupState(false);
    setSelectedCard({ name: "", link: "" });
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return (
    <div>
      <div className="root__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={avatarPopupState}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={editPopupState}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={addPopupState}
        onClose={closeAllPopups}
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
      </PopupWithForm>

      <ImagePopup name="image" card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
