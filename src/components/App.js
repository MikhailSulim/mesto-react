import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    // <body class="page">
    <>
      <Header />

      <Main />

      <Footer />

      {/* <!-- popups--> */}
      {/* <!-- новое описание профиля --> */}
      <div class="popup popup_type_description">
        <div class="popup__container">
          <button
            class="popup__close popup__close_type_description"
            type="button"
          ></button>
          <form id="form" class="popup__content">
            <h2 class="popup__title">Редактировать профиль</h2>
            <input
              id="input-name"
              type="text"
              class="popup__input popup__input_field_name"
              minlength="2"
              maxlength="40"
              placeholder="Имя"
              name="name"
              required
            />
            <span id="input-name-error" class="popup__input-error"></span>
            <input
              id="input-subtitle"
              type="text"
              class="popup__input popup__input_field_subtitle"
              minlength="2"
              maxlength="200"
              placeholder="О себе"
              name="about"
              required
            />
            <span id="input-subtitle-error" class="popup__input-error"></span>
            <button
              class="popup__save popup__save_type_description"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      {/* <!-- новая карточка с фото --> */}
      <div class="popup popup_type_add-card">
        <div class="popup__container">
          <button
            class="popup__close popup__close_type_add-card"
            type="button"
          ></button>
          <form class="popup__content">
            <h2 class="popup__title">Новое место</h2>
            <input
              type="text"
              id="input-place"
              class="popup__input popup__input_field_place"
              placeholder="Название"
              minlength="2"
              maxlength="30"
              name="name"
              required
            />
            <span id="input-place-error" class="popup__input-error"></span>
            <input
              type="url"
              id="input-link"
              class="popup__input popup__input_field_link"
              placeholder="Ссылка на картинку"
              name="link"
              required
            />
            <span id="input-link-error" class="popup__input-error"></span>
            <button
              class="popup__save popup__save_type_add-card popup__save_type_disabled"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      {/* <!-- открыть фото целиком --> */}
      <div class="popup popup_type_image">
        <div class="popup__image-container">
          <button
            class="popup__close popup__close_type_image"
            type="button"
          ></button>
          <figure class="popup__image-figure">
            <img src="#" alt="" class="popup__image" />
            <figcaption class="popup__image-caption"></figcaption>
          </figure>
        </div>
      </div>

      {/* <!-- подтверждение удаления фото --> */}
      <div class="popup popup_type_delete-photo">
        <div class="popup__container">
          <button
            class="popup__close popup__close_type_delete-photo"
            type="button"
          ></button>

          <form class="popup__content">
            <h2 class="popup__title">Вы уверены?</h2>
            <button class="popup__save popup__save_type_delete" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>

      {/* <!-- обновить аватар --> */}
      <div class="popup popup_type_new-avatar">
        <div class="popup__container">
          <button
            class="popup__close popup__close_type_new-avatar"
            type="button"
          ></button>
          <form class="popup__content">
            <h2 class="popup__title">Обновить аватар</h2>
            <input
              type="url"
              id="input-link-avatar"
              class="popup__input popup__input_field_link-avatar"
              placeholder="Ссылка на аватар"
              name="avatar"
              required
            />
            <span
              id="input-link-avatar-error"
              class="popup__input-error"
            ></span>
            <button
              class="popup__save popup__save_type_new-avatar popup__save_type_disabled"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      {/* <!-- templates --> */}
      <template id="card-template">
        <li class="element">
          <img src="#" alt="" class="element__img" />
          <button class="element__delete" type="button"></button>
          <div class="element__line-container">
            <h2 class="element__title"></h2>
            <div class="element__like-container">
              <button class="element__like" type="button"></button>
              <span class="element__like-count"></span>
            </div>
          </div>
        </li>
      </template>
    </>
    // </body>
  );
}

export default App;
