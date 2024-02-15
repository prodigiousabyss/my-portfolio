import { NavLink } from "react-router-dom";
import Carpool from "../../assets/images/cab.png";
import FoodMock from "../../assets/images/food-mock.png";
import Todo from "../../assets/images/todo.png";
import Voz from "../../assets/images/voz.png";

export const Code = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex items-center justify-between w-[80rem] h-[36rem] px-6 mb-16 bg-black rounded-3xl">
        <NavLink
          to="https://reliable-tiramisu-85b0f2.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[18rem] h-[34rem] bg-white hover:scale-95 transition-all rounded-3xl flex flex-col items-center justify-center px-8 bg-gradient-to-t from-black via-black to-white"
        >
          <div className="w-[10rem] h-[10rem] bg-center mt-6">
            <img src={Carpool} alt="car" />
          </div>
          <div className="font-dmSans font-extrabold text-5xl text-white">
            Carpool App
          </div>
          <div className="font-spline text-white my-4">
            ⌨️ Made with React JS
          </div>
        </NavLink>
        <NavLink
          to="https://funny-empanada-831952.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[18rem] h-[34rem] bg-white hover:scale-95 transition-all rounded-3xl flex flex-col items-center justify-center px-8 bg-gradient-to-t from-black via-black to-white"
        >
          <div className="w-[10rem] h-[10rem] bg-center">
            <img src={FoodMock} alt="food" />
          </div>
          <div className="font-dmSans font-extrabold text-5xl text-white">
            Swiggy Mock App
          </div>
          <div className="font-spline text-white my-4">
            ⌨️ Made with React JS
          </div>
        </NavLink>
        <NavLink
          to="./toDoList"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[18rem] h-[34rem] bg-white hover:scale-95 transition-all rounded-3xl flex flex-col items-center justify-center px-8 bg-gradient-to-t from-black via-black to-white"
        >
          <div className="w-[10rem] h-[10rem] bg-center">
            <img src={Todo} alt="todo" />
          </div>
          <div className="font-dmSans font-extrabold text-5xl text-white">
            To-Do List App
          </div>
          <div className="font-spline text-white my-4">
            ⌨️ Made with React JS
          </div>
        </NavLink>
        <NavLink
          to="https://nimble-puffpuff-68e5cd.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[18rem] h-[34rem] bg-white hover:scale-95 transition-all rounded-3xl flex flex-col items-center justify-center px-8 bg-gradient-to-t from-black via-black to-white"
        >
          <div className="w-[10rem] h-[10rem] bg-center">
            <img src={Voz} alt="voz" />
          </div>
          <div className="font-dmSans font-extrabold text-5xl text-white">
            Voz web App
          </div>
          <div className="font-spline text-white my-4">
            ⌨️ Made with React JS
          </div>
        </NavLink>
      </div>
    </div>
  );
};
