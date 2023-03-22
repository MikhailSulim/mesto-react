import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  // переменные состояния, отвечающие за видимость попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getAllData()
      .then((res) => {
        const [initialCards, userData] = res;
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((err) => console.error(err));
  }, []);

  // функции открытия/закрытия попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(cardId) {
    // const isOwn = card.owner._id === currentUser._id;
    api.deleteCard(cardId).then(() => {
      setCards((cards) => cards.filter((card) => card._id !== cardId));
    });
  }

  function handleUpdateUser(newUserInfo) {
    api.setUserInfo(newUserInfo).then((newUserData) => {
      setCurrentUser(newUserData);
      closeAllPopups();
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm // попап добавления карточки
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          <input
            type="text"
            id="input-place"
            className="popup__input popup__input_field_place"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            name="name"
            required
          />
          <span id="input-place-error" className="popup__input-error"></span>
          <input
            type="url"
            id="input-link"
            className="popup__input popup__input_field_link"
            placeholder="Ссылка на картинку"
            name="link"
            required
          />
          <span id="input-link-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm // попап смены аватара
          name="new-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            type="url"
            id="input-link-avatar"
            className="popup__input popup__input_field_link-avatar"
            placeholder="Ссылка на аватар"
            name="avatar"
            required
          />
          <span
            id="input-link-avatar-error"
            className="popup__input-error"
          ></span>
        </PopupWithForm>

        <PopupWithForm // попап подверждения удаленя карточки
          name="delete-photo"
          title="Вы уверены?"
          onClose={closeAllPopups}
          buttonText="Да"
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
