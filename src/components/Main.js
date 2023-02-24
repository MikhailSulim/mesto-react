function Main() {
  return (
    <>
      <main class="content">
        <section class="profile">
          <div class="profile__container">
            <div class="profile__avatar">
              <img
                src="#"
                alt="Аватар пользователя"
                class="profile__avatar-img"
              />
              <button type="button" class="profile__avatar-btn"></button>
            </div>
            <div class="profile__info">
              <h1 class="profile__name"></h1>
              <button class="profile__edit-button" type="button"></button>
              <p class="profile__subtitle"></p>
            </div>
          </div>
          <button class="add-button" type="button"></button>
        </section>

        <section class="elements">
          <ul class="elements__container"></ul>
        </section>
      </main>
    </>
  );
}

export default Main;
