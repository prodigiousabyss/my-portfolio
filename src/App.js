import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
// import { Crafts } from "./pages/Crafts/Crafts";
import { ToDoList } from "./pages/ToDoList";
import { Code } from "./pages/Code/Code";
import "./App.css";
import { Designs } from "./pages/Designs/Designs";
import { BgGradient } from "./components/BgGradient";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BgGradient />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Designs />} />
        {/* <Route path="/designs/crafts" element={<Crafts />} /> */}
        <Route path="/codingProjects" element={<Code />} />
        <Route path="/codingProjects/toDoList" element={<ToDoList />} />
        {/* <Route path="*" /> */}
      </Routes>
    </div>
  );
}

export default App;
