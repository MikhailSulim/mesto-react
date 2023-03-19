import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_is-liked"
  }`;

  // Далее в разметке используем переменную для условного рендеринга

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  

  return (
    <li className="element">
      <img
        src={props.card.link}
        alt={`На фото - ${props.card.name}`}
        onClick={handleClick}
        onCardLike
        className="element__img"
      />
      {isOwn && (
        <button
          type="button"
          className="element__delete"
          onClick={props.handleDeleteClick}
        />
      )}
      {/* <button className="element__delete" type="button" /> */}
      <div className="element__line-container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" />
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
