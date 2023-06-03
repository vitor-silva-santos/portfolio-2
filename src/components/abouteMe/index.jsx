import "../../style/aboutMe.scss";

import Person from "../../assets/person.png";
import ImgDownload from "../../assets/icons/download.png";

export const AboutMe = () => {
  return (
    <section id="sobre" className="containerAboute">
      <div>
        <img
          className="imgPerson"
          src={Person}
          alt="homem de cabelo cacheado sentado"
        />
      </div>
      <div className="boxInfo">
        <div className="content">
          <h2>Sobre Mim</h2>
          <p>Osasco, São Paulo</p>
          <p>
            Meu nome é Vitor Silva Santos e sou um apaixonado por tecnologia que
            escolheu percorrer o caminho da programação, dedicando meus estudos
            para futuramento ser um desenvolvedor fullstack. Estou cursando
            Análise e Desenvolvimento de Sistemas e continuo meus estudos,
            sabendo que estamos sempre em constante aprendizado.
          </p>
        </div>
        <button>
          <img
            className="iconDownload"
            src={ImgDownload}
            alt="icone de download"
          />
          Baixar Currículo
        </button>
      </div>
    </section>
  );
};
