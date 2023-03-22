import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [newCardTitle, setNewCardTitle] = React.useState("");
  const [newCardLink, setNewCardLink] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: newCardTitle,
      link: newCardLink,
    });
  }

  function handleChangeCardTitle(e) {
    setNewCardTitle(e.target.value);
  }

  function handleChangeCardLink(e) {
    setNewCardLink(e.target.value);
  }

  return (
    <PopupWithForm // попап добавления карточки
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="input-place"
        className="popup__input popup__input_field_place"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        name="name"
        value={newCardTitle}
        onChange={handleChangeCardTitle}
        required
      />
      <span id="input-place-error" className="popup__input-error"></span>
      <input
        type="url"
        id="input-link"
        className="popup__input popup__input_field_link"
        placeholder="Ссылка на картинку"
        name="link"
        value={newCardLink}
        onChange={handleChangeCardLink}
        required
      />
      <span id="input-link-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
