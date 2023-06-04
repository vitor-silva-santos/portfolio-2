import Typewriter from "../animationTyping";

//IMPORT IMAGES
import IconLinkedin from "../../assets/icons/linkedin.png";
import IconGitHub from "../../assets/icons/github.png";
import GifProgramador from "../../assets/Programming.gif";

//CSS
import "../../style/header.scss";

export const Header = () => {
  return (
    <header id="home" className="header">
      <div className="containerInfo">
        <p>
          <span>&#9001;strong&#9002;</span>
          <strong>Seja bem-vindo</strong>
          <span>&#9001;&frasl;strong&#9002; </span>
        </p>
        <h1>
          <span className="span">OLÁ, EU SOU</span>
          <Typewriter
            text="VITOR SILVA SANTOS"
            speed={150}
            delay={1500}
            cursor="|"
          />
          DESENVOLVEDOR FRONT-END
        </h1>

        <div className="boxButton">
          <button>
            <img src={IconLinkedin} alt="icone do linkedin" />
            Linkedin
          </button>
          <button>
            <img src={IconGitHub} alt="icone do github" />
            GitHub
          </button>
        </div>
      </div>

      <div className="containerGif">
        <img
          src={GifProgramador}
          alt="gir de uma pessoa sentada no computador"
        />
      </div>
    </header>
  );
};
