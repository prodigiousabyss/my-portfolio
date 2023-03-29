import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Crafts } from "./pages/Crafts";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crafts" element={<Crafts />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="*" /> */}
      </Routes>
    </div>
  );
}

export default App;
