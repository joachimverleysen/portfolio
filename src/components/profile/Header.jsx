function Header() {
  return (
    <div id="Header">
      <h2 className="section__text__p1">Hi, I'm</h2>
      <h1 className="title">Joachim Verleysen</h1>
      <h2 className="picture__subtitle">Student Computer Science</h2>
      <div className="icon-container">
        <a href="https://github.com/joachimverleysen">
          <img src="./assets/github-logo.png" alt="Github" className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Header;
