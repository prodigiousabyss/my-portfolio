import { useState, useEffect } from "react";

export const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(toDos);
    localStorage.setItem('toDos', temp);
  }, [toDos]);

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('toDos');
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
    const newToDos = [...toDos]
    newToDos.splice(index, 1);
    setToDos(newToDos);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
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
    <div>
      <div style={{ }}>
        <input
          type="text"
          name="todo"
          value={toDo}
          placeholder="Create a new to-do"
          onChange={(e) => {
            setToDo(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addToDo}>Add</button>
      </div>
      <li>
        <div>
          {toDos.map((todo, index) => (
            <li style={{ color: "white"}} key={index}>{todo}
            <button onClick={() => deleteToDo(index)}>
                Delete
            </button>
            </li>
          ))}
        </div>
      </li>
    </div>
  );
};
