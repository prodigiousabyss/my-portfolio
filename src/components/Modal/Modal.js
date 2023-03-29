import { Icon } from "../Icon";

export const Modal = ({ show, setShow, children }) => {
  if (!show) {
    return null;
  }

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
          overflow: "hidden",
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
      </div>
    </div>
  );
};
