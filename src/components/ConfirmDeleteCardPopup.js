import PopupWithForm from "./PopupWithForm";

function ConfirmDeleteCardPopup({ isOpen, onClose, onCardDelete, cardId }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(cardId);

    
  }

  return (
    <PopupWithForm // попап подверждения удаленя карточки
      name="delete-photo"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Да"
    />
  );
}

export default ConfirmDeleteCardPopup;
