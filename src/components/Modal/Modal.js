import { crafts } from "../../constants/data";
import { Icon } from "../Icon";

export const Modal = ({ show, setShow, children, setCurrentCraftIndex }) => {
  if (!show) {
    return null;
  }

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
    <div
      onClick={() => setShow(false)}
      style={{
        zIndex: 100,
        position: "fixed",
        width: "100%",
        height: "100%",
        background: "rgba(1, 1, 1, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "58rem",
          height: "80%",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "2rem",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div onClick={() => setShow(false)}>
          <button 
          style={{
            borderRadius: "50%",
            backgroundColor: "white",
            width: "2.5rem",
            height: "2.5rem",
            position: "absolute",
            top: "-0.5rem",
            right: "-3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <Icon
            name="Cross"
            style={{
              width: "1.5rem",
              height: "1.5rem",
            //   position: "absolute",
            //   top: "-0.5rem",
            //   right: "-3rem",
            }}
          />
          </button>
        </div>
        {children}
        <div onClick={previous}>
          {" "}
          <button 
          style={{
            borderRadius: "50%",
            backgroundColor: "white",
            width: "2.5rem",
            height: "2.5rem",
            position: "absolute",
            left: "-3rem",
            top: "18rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <Icon
            name="previous"
            style={{
              // position: "absolute",
              left: "0",
              width: "2rem",
            }}
          />
          </button>
        </div>
        <div onClick={next}>
          {" "}
          <button 
          style={{
            borderRadius: "50%",
            backgroundColor: "white",
            width: "2.5rem",
            height: "2.5rem",
            position: "absolute",
            right: "-3rem",
            top: "18rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <Icon
            name="next"
            style={{
              // position: "absolute",
              width: "2rem",
            }}
          />
          </button>
        </div>
      </div>
    </div>
  );
};
