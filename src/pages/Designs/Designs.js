import { NavLink } from "react-router-dom";

export const Designs = () => {
  return (
    <NavLink to="/designs/crafts">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button
            style={{
              width: "40rem",
              height: "3rem",
              fontSize: "large",
              borderRadius: "0.5rem",
              border: "none",
              textAlign: "left",
              color: "black",
              backgroundColor: "grey",
            }}
          >
            Crafts
          </button>
        </div>
      </div>
    </NavLink>
  );
};
