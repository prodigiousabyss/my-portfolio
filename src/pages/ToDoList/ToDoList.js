import { useState, useEffect } from "react";
import { Icon } from "../../components/Icon";
import { useDate } from "../../hooks/useDate";
import "./ToDoList.css";

export const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(getInitialTodos());

  const { date, time } = useDate();

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

  return (
    <div className="flex flex-col w-full h-full items-center justify-center pb-36">
      <div className="xyz">
        <div className="text-center text-slate-600 font-semibold">
          {date}, {time}
        </div>
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
          <button className="button ml-2" onClick={addToDo}>
            Add
          </button>
        </div>
        <div className="list">
          {toDos.map((todo, index) => (
            <div
              style={{
                marginBottom: "1.2rem",
              }}
              key={index}
            >
              <div className="flex items-center justify-between">
                <div className="w-[60rem] text-black bg-neutral-200 py-2 px-6 rounded-lg">
                  {todo}
                </div>
                <div
                  onClick={() => deleteToDo(index)}
                  className="cursor-pointer"
                >
                  <Icon name="Cross" className="w-4 h-4 ml-[-2rem]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
