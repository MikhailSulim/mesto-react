import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

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
  }

  return (
    // <body className="page">
    <>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <Footer />

      <PopupWithForm // попап редактирования профиля пользователя
        name="description"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              id="input-name"
              type="text"
              className="popup__input popup__input_field_name"
              minlength="2"
              maxlength="40"
              placeholder="Имя"
              name="name"
              required
            />
            <span id="input-name-error" className="popup__input-error"></span>
            <input
              id="input-subtitle"
              type="text"
              className="popup__input popup__input_field_subtitle"
              minlength="2"
              maxlength="200"
              placeholder="О себе"
              name="about"
              required
            />
            <span
              id="input-subtitle-error"
              className="popup__input-error"
            ></span>
            <button
              className="popup__save popup__save_type_description"
              type="submit"
            >
              Сохранить
            </button>
          </>
        }
      />

      <PopupWithForm // попап добавления карточки
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="text"
              id="input-place"
              className="popup__input popup__input_field_place"
              placeholder="Название"
              minlength="2"
              maxlength="30"
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
            <button
              className="popup__save popup__save_type_add-card popup__save_type_disabled"
              type="submit"
            >
              Создать
            </button>
          </>
        }
      />

      <PopupWithForm // попап смены аватара
        name="new-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
            <button
              className="popup__save popup__save_type_new-avatar popup__save_type_disabled"
              type="submit"
            >
              Сохранить
            </button>
          </>
        }
      />

      <PopupWithForm // попап подверждения удаленя карточки
        name="delete-photo"
        title="Вы уверены?"
        // isOpen={}
        onClose={closeAllPopups}
        children={
          <>
            <button
              className="popup__save popup__save_type_delete"
              type="submit"
            >
              Да
            </button>
          </>
        }
      />

      {/* <!-- templates --> */}
      <template id="card-template">
        <li className="element">
          <img src="#" alt="" className="element__img" />
          <button className="element__delete" type="button"></button>
          <div className="element__line-container">
            <h2 className="element__title">{}</h2>
            <div className="element__like-container">
              <button className="element__like" type="button"></button>
              <span className="element__like-count"></span>
            </div>
          </div>
        </li>
      </template>
    </>
    // </body>
  );
}

export default App;
