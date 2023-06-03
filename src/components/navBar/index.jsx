import "../../style/navBar.scss";

export const NavBar = () => {
  const exitMenu = () => {
    document.getElementById("menu-toggle").checked = false;
  };

  return (
    <nav className="navBar">
      <p>&#10094;Vitor-Silva-Santos &frasl;&#10095;</p>

      <input id="menu-toggle" type="checkbox" />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span></span>
      </label>

      <div className="boxVazia" onClick={exitMenu}></div>

      <ul className="menu-box">
        <li>
          <a href="#home" className="menu-item" onClick={exitMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#sobre" className="menu-item" onClick={exitMenu}>
            Sobre Mim
          </a>
        </li>
        <li>
          <a href="#habilidades" className="menu-item" onClick={exitMenu}>
            Habilidades
          </a>
        </li>
        <li>
          <a href="#projetos" className="menu-item" onClick={exitMenu}>
            Projetos
          </a>
        </li>
      </ul>
    </nav>
  );
};
