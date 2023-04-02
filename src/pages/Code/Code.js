import { NavLink } from "react-router-dom";

export const Code = () => {
  return (
    <div>
      <NavLink to="./toDoList">
        <button>ToDoList</button>
      </NavLink>
    </div>
  );
};
