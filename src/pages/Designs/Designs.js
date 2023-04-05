import { NavLink } from "react-router-dom";

export const Designs = () => {
  return (
    <div>
    <NavLink to="/designs/crafts">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button className="button"
          >
            Crafts
          </button>
        </div>
      </div>
    </NavLink>
    <NavLink to="/designs/projects">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <button className="button"
        >
          Projects
        </button>
      </div>
    </div>
  </NavLink>
  </div>
  );
};
