import PopupWithForm from "./PopupWithForm";

function ConfirmDeleteCardPopup({ isOpen, onClose, onCardDelete, cardId, isLoading }) {
  const buttonText = isLoading ? "Удаление..." : "Да";
  
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
      buttonText={buttonText}
    />
  );
}

export default ConfirmDeleteCardPopup;
