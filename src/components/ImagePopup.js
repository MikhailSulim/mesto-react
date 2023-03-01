function ImagePopup() {
  return (
    <>
      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <button
            className="popup__close popup__close_type_image"
            type="button"
          ></button>
          <figure className="popup__image-figure">
            <img src="#" alt="" className="popup__image" />
            <figcaption className="popup__image-caption"></figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
