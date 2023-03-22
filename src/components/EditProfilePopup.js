import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const [name, setName] = React.useState("Mikko");
    const [description, setDescription] = React.useState("Ohjelmoija");

    // подписка на контекст
    const currentUser = useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
          name: name,
          about: description,
        });
      }

      function handleChangeName(e) {
        setName(e.target.value);
      }

      function handleChangeDescription(e) {
        setDescription(e.target.value);
      }

  return (
    <PopupWithForm // попап редактирования профиля пользователя
      name="description"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
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
        value={name}
        onChange={handleChangeName}
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
        value={description}
        onChange={handleChangeDescription}
        required
      />
      <span id="input-subtitle-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
