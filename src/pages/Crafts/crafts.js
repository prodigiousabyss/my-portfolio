import { useState } from "react";
import { Modal } from "../../components/Modal";
import { crafts } from "../../constants/data";

export const Crafts = () => {
  const [show, setShow] = useState(false);
  const [currentCraftIndex, setCurrentCraftIndex] = useState();

  return (
    <div style={{ color: "white" }}>
      <Modal show={show} setShow={setShow} setCurrentCraftIndex={setCurrentCraftIndex}>
        <img
          src={crafts[currentCraftIndex]?.preview}
          alt="project"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "2rem",
          }}
        />
        {/* <button onClose={() => setShow(false)}>close</button> */}
      </Modal>
      <div
        style={{
          color: "white",
          padding: "2rem 4rem",
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
                    marginTop: "2rem",
                    height: "auto",
                    borderRadius: "1.2rem",
                  }}
                />
              </div>
              {/* <button style={{ width: "100%", height: "2rem" }}>info</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
