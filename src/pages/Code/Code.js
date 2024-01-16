import { NavLink } from "react-router-dom";
import Carpool from "../../assets/images/cab.png";
import FoodMock from "../../assets/images/food-mock.png";
import Todo from "../../assets/images/todo.png";
import Voz from "../../assets/images/voz.png";

export const Code = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex items-center justify-between w-[80rem] pb-24">
        <NavLink
          to="https://reliable-tiramisu-85b0f2.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 h-[34rem] hover:scale-95 transition-all rounded flex flex-col items-center justify-center px-8 bg-gradient-to-tl from-red-500 to-white"
        >
          <div className="font-silkscreen text-5xl mb-4">Carpool</div>
          <div
            className="w-full h-80 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('${Carpool}')` }}
          />
          <div className="font-silkscreen mt-6">❤️ Made with React JS</div>
        </NavLink>
        <NavLink
          to="https://funny-empanada-831952.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 h-[34rem] bg-white hover:scale-95 transition-all rounded flex flex-col items-center justify-center px-8 bg-gradient-to-t from-black via-black to-white"
        >
          <div
            className="w-full h-80 bg-center bg-no-repeat bg-cover rounded-t-full"
            style={{ backgroundImage: `url('${FoodMock}')` }}
          />
          <div className="font-spline text-3xl mb-6 mt-10 text-white">
            Swiggy Mock
          </div>
          <div className="font-spline text-white">⌨️ Made with React JS</div>
        </NavLink>
        <NavLink
          to="./toDoList"
          className="w-72 h-[34rem] bg-white hover:scale-95 rounded transition-all flex flex-col items-center justify-center px-8 from-gray-500 via-gray-200 to-white bg-gradient-to-tr"
        >
          <div className="font-limelight text-4xl -mb-4 z-10">TODO List</div>
          <div
            className="w-full h-96 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('${Todo}')` }}
          />
          <div className="font-limelight uppercase mt-6">
            💡 Made with React JS
          </div>
        </NavLink>
        <NavLink
          to="https://nimble-puffpuff-68e5cd.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 h-[34rem] bg-white hover:scale-95 rounded transition-all flex flex-col items-center justify-center px-8 from-[#9900ef] to-purple-200 bg-gradient-to-t"
        >
          <div
            className="w-full h-96 bg-center bg-no-repeat bg-cover rounded-2xl"
            style={{ backgroundImage: `url('${Voz}')` }}
          />
          <div className="font-righteous text-6xl tracking-wider -mt-8 z-10 text-white">
            VOZ
          </div>
          <div className="font-righteous uppercase mt-6 text-white">
            ❤️ Made with React JS
          </div>
        </NavLink>
      </div>
    </div>
  );
};
