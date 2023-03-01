function Main(props) {

  // TODO решить вопрос с размещением класса body 

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar">
              <img
                src="#"
                alt="Аватар пользователя"
                className="profile__avatar-img"
              />
              <button
                type="button"
                className="profile__avatar-btn"
                onClick={props.onEditAvatar}
              ></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{}</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
              <p className="profile__subtitle"></p>
            </div>
          </div>
          <button className="add-button" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements">
          <ul className="elements__container"></ul>
        </section>
      </main>
    </>
  );
}

export default Main;
