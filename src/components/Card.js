function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <img src={props.card.link} alt={`На фото - ${props.card.name}`} onClick={handleClick} className="element__img" />
      <button className="element__delete" type="button"></button>
      <div className="element__line-container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
