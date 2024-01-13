import { NavLink } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { useState } from "react";
import { projects } from "../../constants/projects";
import { SwiggyWork } from "./SwiggyWork";

export const Designs = () => {
  const [show, setShow] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState();

  return (
    <>
      <Modal
        show={show}
        setShow={setShow}
        setCurrentProjectIndex={setCurrentProjectIndex}
      >
        <div className="flex absolute top-0 flex-col h-full overflow-y-auto ">
          {projects[currentProjectIndex]?.media?.map((m, index) => {
            return (
              // <div className="flex flex-col h-full w-full bg-white">
              <img
                className="max-w-full max-h-full"
                key={index}
                src={m}
                alt="project"
              />
              // </div>
            );
          })}
        </div>
      </Modal>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <NavLink to="/designs/crafts" className="mb-2">
          <button className="Button">Crafts</button>
        </NavLink>
        <button
          className="Button mb-2"
          onClick={() => {
            setShow(true);
            setCurrentProjectIndex(0);
          }}
        >
          My Shifts - A Swiggy delivery executive App
        </button>
        <SwiggyWork />
      </div>
    </>
  );
};
