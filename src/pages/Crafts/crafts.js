import { useState } from "react";
import { Modal } from "../../components/Modal";
import { crafts } from "../../constants/data";

export const Crafts = () => {
  const [show, setShow] = useState(false);
  const [currentCraftIndex, setCurrentCraftIndex] = useState();

  return (
    <div style={{ color: "white", height: "100vh", overflowY: "auto" }}>
      <Modal
        show={show}
        setShow={setShow}
        setCurrentCraftIndex={setCurrentCraftIndex}
      >
        <img
          src={crafts[currentCraftIndex]?.preview}
          alt="project"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "2rem",
          }}
        />
      </Modal>
      <div
        style={{
          color: "white",
          padding: "2rem 4rem 12rem",
          columns: 3,
          gap: "2rem",
        }}
      >
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
