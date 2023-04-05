import { NavLink } from "react-router-dom";

export const Code = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "4rem",
      }}
    >
      <div>
        <NavLink to="./toDoList">
          <button className="button">To-do List</button>
        </NavLink>
      </div>
    </div>
  );
};
