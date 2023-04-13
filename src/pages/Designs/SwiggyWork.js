import { Modal } from "../../components/Modal";
import { useState } from "react";
import { swiggyWork } from "../../constants/swiggyWork";

export const SwiggyWork = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Modal show={show} setShow={setShow}>
        <div className="flex absolute top-0 flex-col w-[66rem] h-full overflow-y-auto bg-white">
          {swiggyWork.media.map((m, index) => {
            return (
              <div className="flex flex-col bg-white mb-2 ">
                <img
                  className="max-w-full max-h-full rounded-[2rem]"
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
      <button
        className="Button mb-6"
        onClick={() => {
          setShow(true);
        }}
      >
        Swiggy Work
      </button>
      {/* <div
        style={{
          color: "white",
          padding: "2rem 4rem 12rem",
          columns: 3,
          gap: "2rem",
        }}
      >
        {swiggyWork.map((swiggyWork, index) => {
          return (
            <div className="craft" key={swiggyWork.id}>
              <div
                onClick={() => {
                  setShow(true);
                }}
              >
                <img
                  src={.preview}
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
      </div> */}
    </>
  );
};
