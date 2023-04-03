import { useState, useEffect } from "react";
import "./ToDoList.css";

export const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(toDos);
    localStorage.setItem("toDos", temp);
  }, [toDos]);

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("toDos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const addToDo = () => {
    if (toDo !== "") {
      setToDos([...toDos, toDo]);
      setToDo("");
    }
  };

  const deleteToDo = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      addToDo();
    }
  };

  //   const deleteToDo = (text) => {
  //     const newToDos = toDos.filter((toDo) => {
  //       return toDo !== text;
  //     });
  //     setToDos(newToDos);
  //   };

  return (
    <div className="main">
      <div className="xyz">
        <div>
          <input
            className="input"
            type="text"
            name="todo"
            value={toDo}
            placeholder="Create a new to-do"
            onChange={(e) => {
              setToDo(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button className="button" onClick={addToDo}>
            Add
          </button>
        </div>
        {/* <label> */}
        <div className="list">
          {toDos.map((todo, index) => (
            <div
              style={{
                marginBottom: "1.2rem",
              }}
              key={index}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <input type="checkbox" />
                <div
                  style={{
                    width: "60rem",
                    color: "white",
                    backgroundColor: "grey",
                    padding: "0.6rem 1.2rem",
                    wordBreak: "break-word",
                    borderRadius: "0.4rem",
                  }}
                >
                  {todo}
                </div>
                <button className="button" onClick={() => deleteToDo(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* </label> */}
      </div>
    </div>
  );
};
