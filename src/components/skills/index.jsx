import "../../style/skills.scss";

import HTML from "../../assets/icons/html-5.png";
import CSS from "../../assets/icons/css-3.png";
import JavaScript from "../../assets/icons/js.png";
import Git from "../../assets/icons/gitIcon.png";
import Node from "../../assets/icons/node-js.png";
import Sass from "../../assets/icons/sass.png";
import ReactIcon from "../../assets/icons/react.png";
import StyledComponents from "../../assets/icons/styledComponents.png";

export const Skills = () => {
  return (
    <section id="habilidades" className="containerHabilidade">
      <h2>Habilidades</h2>

      <div className="boxSkills">
        <div className="skill">
          <p className="nameSkill">HTML5</p>
          <img src={HTML} alt="logo do HTML5" />
        </div>

        <div className="skill">
          <p className="nameSkill">CSS3</p>
          <img src={CSS} alt="logo do CSS" />
        </div>

        <div className="skill">
          <p className="nameSkill">JavaScript</p>
          <img src={JavaScript} alt="logo do JavaScript" />
        </div>

        <div className="skill">
          <p className="nameSkill">Git</p>
          <img src={Git} alt="logo do Git" />
        </div>

        <div className="skill">
          <p className="nameSkill">Sass</p>
          <img src={Sass} alt="logo do Sass" />
        </div>

        <div className="skill">
          <p className="nameSkill">Node.JS</p>
          <img src={Node} alt="logo do Node.js" />
        </div>

        <div className="skill">
          <p className="nameSkill">React</p>
          <img src={ReactIcon} alt="logo do React" />
        </div>

        <div className="skill">
          <p className="nameSkill">Styled Components</p>
          <img src={StyledComponents} alt="logo do Styled Components" />
        </div>
      </div>
    </section>
  );
};
