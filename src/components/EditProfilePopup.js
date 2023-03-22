import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose }) {

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    const currentUser = useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

  return (
    <PopupWithForm // попап редактирования профиля пользователя
      name="description"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit
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
        // onChange={""}
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
        // onChange={""}
        required
      />
      <span id="input-subtitle-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
