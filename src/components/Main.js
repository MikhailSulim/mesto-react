import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAllData()
      .then((res) => {
        const [initialCards, userData] = res;
        setUserAvatar(userData.avatar);
        setUserDescription(userData.about);
        setUserName(userData.name);
        setCards(
          initialCards.map((card) => ({
            onCardClick: props.onCardClick,
            card: card,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar">
            <img
              src={userAvatar}
              alt="Аватар пользователя"
              className="profile__avatar-img"
            />
            <button
              type="button"
              className="profile__avatar-btn"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__container">
          {cards.map((props) => (
            <Card key={props.card._id} {...props} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
