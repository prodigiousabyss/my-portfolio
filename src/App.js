import { Route, Routes } from "react-router";

import { Navbar } from "./components/Navbar";
import { BgGradient } from "./components/BgGradient";

import { Home } from "./pages/Home";
import { ToDoList } from "./pages/ToDoList";
import { Code } from "./pages/Code/Code";
import { Designs } from "./pages/Designs/Designs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BgGradient />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/codingProjects" element={<Code />} />
        <Route path="/codingProjects/toDoList" element={<ToDoList />} />
        {/* <Route path="*" /> */}
      </Routes>
    </div>
  );
}

export default App;
