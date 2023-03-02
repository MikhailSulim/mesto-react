function Card({ src, title, description, likes }) {
  return (
    <li className="element">
      <img src={src} alt={description} className="element__img" />
      <button className="element__delete" type="button"></button>
      <div className="element__line-container">
        <h2 className="element__title">{title}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <span className="element__like-count">{likes}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
