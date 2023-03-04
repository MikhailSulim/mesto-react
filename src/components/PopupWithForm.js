function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className={`popup__close popup__close_type_${props.name}`}
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name={`${props.name}`} className="popup__content" id="form">
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
