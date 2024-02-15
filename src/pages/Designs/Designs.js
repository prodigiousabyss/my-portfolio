import MyShiftsCover from "../../assets/images/myShifts.png";
import InstamartCover from "../../assets/images/swiggyWork.png";
import SmokingLady from "../../assets/images/graphics.png";

export const Designs = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="font-bold text-2xl text-black my-6">
        I design user-interfaces that are intuitive and user-friendly and
        graphics. My primary tool is Figma.
      </div>
      <div className="flex flex-col items-center justify-between w-[58rem] h-[32rem] mb-20 px-6 bg-black rounded-3xl">
        <div className="flex items-end w-full justify-between font-dmSans"></div>
        <div className="w-full flex items-center space-x-6 mb-6">
          <a
            href="https://www.behance.net/gallery/189111613/Illustrations"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[20rem] px-6 flex flex-col items-center justify-center bg-black hover:scale-95 transition-all rounded-2xl h-[29rem] overflow-hidden bg-gradient-to-t from-black via-black to-white"
          >
            <div className="w-[10rem] h-[10rem] bg-center">
              <img src={SmokingLady} alt="graphics" />
            </div>
            <div className="text-white font-dmSans text-5xl font-bold my-4">
              Illustrations work
            </div>
            <div className="text-white font-spline my-4">
              ⌨️ Made using Procreate.
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/150733007/Swiggy-Assignment-New-Delivery-Executive-App"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[20rem] px-6 bg-black flex flex-col justify-center items-center hover:scale-95 overflow-hidden transition-all h-[29rem] rounded-2xl bg-gradient-to-t from-black via-black to-white"
          >
            <div className="w-[10rem] h-[10rem] bg-center">
              <img src={MyShiftsCover} alt="graphics" />
            </div>
            <div className="text-white font-dmSans text-5xl font-bold my-4">
              MyShifts App
            </div>
            <div className="text-white font-spline my-4">
              ⌨️ Made using Figma.
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/189108973/My-stint-at-Swiggy-Instamart"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[20rem] px-6 bg-black flex flex-col justify-center items-center hover:scale-95 transition-all overflow-hidden rounded-2xl h-[29rem] bg-gradient-to-t from-black via-black to-white"
          >
            <div className="w-[10rem] h-[10rem] bg-center">
              <img src={InstamartCover} alt="graphics" />
            </div>
            <div className="text-white font-dmSans text-5xl font-bold my-4">
              Swiggy Work
            </div>
            <div className="text-white font-spline my-4">
              ⌨️ Made using Figma
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
