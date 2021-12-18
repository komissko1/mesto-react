import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getCardsData()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__user">
          <button
            onClick={props.onEditAvatar}
            type="button"
            aria-label="Редактировать"
            className="profile__avatar-button"
          ></button>
          <img src={userAvatar} alt={userName} className="profile__user-foto" />
          <div className="profile__user-info">
            <h1 className="profile__user-name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              aria-label="Редактировать"
              className="profile__edit-button button-effect"
            ></button>
            <p className="profile__user-job">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          aria-label="Добавить"
          className="profile__add-button button-effect"
        ></button>
      </section>

      <section className="places content__places" aria-label="Места">
        {cards.map((item) => (
          <Card key={item._id} card={item} onCardClick={props.onCardClick}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
