import { useState } from "react";

import "../../style/projects.scss";
import dataProject from "../../dataProjects.json";
import Modal from "react-modal";

// Código necessário para os recursos de acessibilidade
// Modal.setAppElement("#root");

export const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showProjects, setShowProjects] = useState(6);

  function hiddenScroll() {
    document.body.style.overflow = "hidden";
  }

  function showScroll() {
    document.body.style.overflowY = "scroll";
  }

  function entrarLink(link) {
    window.open(link, "_blank");
  }

  function moreProjects() {
    setShowProjects(dataProject.length);
  }

  function lessProjects() {
    setShowProjects(6);
  }

  return (
    <section id="projetos" className="containerProjects">
      <h2>Projetos</h2>

      <div className="boxProjetos">
        {dataProject &&
          dataProject.slice(0, showProjects).map((project, index) => (
            <div
              className="boxPro"
              onClick={() => {
                setModalData(project);
                setModalIsOpen(true);
                hiddenScroll();
              }}
              key={index}
            >
              <div className="projeto">
                <img
                  className="imgProjeto"
                  src={project?.photo}
                  alt={project?.title}
                />
                <div className="content">
                  <h3>{project?.title}</h3>
                  <div className="boxSkills">
                    {project?.skills.map((skill, index) => (
                      <div key={index}>
                        <img src={skill?.url} alt={skill?.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="boxButton">
                <button>Ver detalhes</button>
              </div>
            </div>
          ))}
      </div>

      <div>
        {showProjects < dataProject.length ? (
          <button className="buttonMorePorjects" onClick={moreProjects}>
            Ver mais
          </button>
        ) : (
          <button className="buttonMorePorjects" onClick={lessProjects}>
            Ver menos
          </button>
        )}
      </div>

      <Modal
        className={"modal"}
        onRequestClose={() => {
          setModalIsOpen(false);
          showScroll();
        }}
        overlayClassName={"modal-overlay"}
        isOpen={modalIsOpen}
        contentLabel={`Modal do projeto: ${modalData?.title}`}
      >
        <div className="containerLeft">
          <img
            className="imgModal"
            src={modalData?.photo}
            alt={modalData?.title}
          />
          <div className="boxButtonProject">
            <button onClick={() => entrarLink(modalData.url)}>
              Acessar projeto
            </button>
            <button onClick={() => entrarLink(modalData.repositorio)}>
              Acessar repositório
            </button>
          </div>
        </div>

        <div className="containerRight">
          <div className="boxTitle">
            <h3>{modalData?.title}</h3>
            <button
              onClick={() => {
                setModalIsOpen(false);
                showScroll();
              }}
            >
              X
            </button>
          </div>

          <p className="description">{modalData?.description}</p>
          <p className="techSkills">
            Tecnologias utilizadas no projeto:{" "}
            {modalData?.skills.map((skill, index) => (
              <span key={index}>
                <li>{skill.name} </li>
              </span>
            ))}
          </p>
        </div>
      </Modal>
    </section>
  );
};
