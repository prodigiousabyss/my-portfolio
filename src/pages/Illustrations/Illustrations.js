import { useState } from "react";
import { Modal } from "../../components/Modal";
import { crafts } from "../../constants/data";

export const Illustrations = () => {
  const [show, setShow] = useState(false);
  const [currentCraftIndex, setCurrentCraftIndex] = useState();

  const previous = () => {
    setCurrentCraftIndex((value) =>
      value !== 0 ? value - 1 : crafts.length - 1
    );
  };

  const next = () => {
    setCurrentCraftIndex((value) =>
      value === crafts.length - 1 ? 0 : value + 1
    );
  };

  return (
    <div style={{ color: "white", height: "100vh", overflowY: "auto" }}>
      <Modal show={show} setShow={setShow} previous={previous} next={next}>
        <img
          className="max-w-full max-h-full rounded-[2rem]"
          src={crafts[currentCraftIndex]?.preview}
          alt="project"
        />
      </Modal>
      <div className="columns-3 pt-8 px-16 pb-48 gap-8 text-white">
        {crafts.map((project, index) => {
          return (
            <div className="craft" key={project.id}>
              <div
                onClick={() => {
                  setShow(true);
                  setCurrentCraftIndex(index);
                }}
              >
                <img
                  className="max-w-full h-auto p-2 rounded-2xl"
                  src={project.preview}
                  alt="project"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
