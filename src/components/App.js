import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  // переменные состояния, отвечающие за видимость попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

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

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm // попап редактирования профиля пользователя
        name="description"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          id="input-name"
          type="text"
          className="popup__input popup__input_field_name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          name="name"
          required
        />
        <span id="input-name-error" className="popup__input-error"></span>
        <input
          id="input-subtitle"
          type="text"
          className="popup__input popup__input_field_subtitle"
          minLength="2"
          maxLength="200"
          placeholder="О себе"
          name="about"
          required
        />
        <span id="input-subtitle-error" className="popup__input-error"></span>
      </PopupWithForm>

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
  );
}

export default App;
