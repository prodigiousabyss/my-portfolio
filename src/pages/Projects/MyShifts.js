import { useState } from "react";
import { Modal } from "../../components/Modal";
import { projects } from "../../constants/projects";

export const MyShifts = () => {
  const [show, setShow] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState();

  return (
    <div style={{ color: "white", height: "100vh", overflowY: "auto" }}>
      <Modal
        show={show}
        setShow={setShow}
        setCurrentProjectIndex={setCurrentProjectIndex}
      >
        <div className="flex flex-col h-full bg-black">
          {projects[currentProjectIndex]?.media?.map((m, index) => {
            return (
              <div className="flex flex-col h-full w-full bg-black">
                <img
                  key={index}
                  src={m}
                  alt="project"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            );
          })}
        </div>
      </Modal>
      <div
        style={{
          color: "white",
          padding: "2rem 4rem 12rem",
          columns: 3,
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => {
          return (
            <div className="craft" key={project.id}>
              <div
                onClick={() => {
                  setShow(true);
                  setCurrentProjectIndex(index);
                }}
              >
                <img
                  src={project.preview}
                  alt="project"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    padding: "0.4rem",
                    borderRadius: "1rem",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
