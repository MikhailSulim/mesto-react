import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarRef = useRef();

  const buttonText = isLoading ? "Сохранение..." : "Сохранить";

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm // попап смены аватара
      name="new-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        id="input-link-avatar"
        className="popup__input popup__input_field_link-avatar"
        placeholder="Ссылка на аватар"
        name="avatar"
        required
        ref={avatarRef}
      />
      <span id="input-link-avatar-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
