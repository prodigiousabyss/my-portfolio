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
          <Icon
            name="Cross"
            style={{
              width: "2rem",
              height: "2rem",
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
            }}
          />
        </div>
        {children}
        <div onClick={previous}>
          {" "}
          <Icon
            name="previous"
            style={{
              position: "absolute",
              left: "0",
              width: "2rem",
              top: "6rem",
            }}
          />
        </div>
        <div onClick={next}>
          {" "}
          <Icon
            name="next"
            style={{
              position: "absolute",
              right: "0",
              width: "2rem",
              top: "6rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};
