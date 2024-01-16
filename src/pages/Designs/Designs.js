import BumpBuddyCover from "../../assets/images/BumpBuddy.png";
import MyShiftsCover from "../../assets/images/MyShiftsPreview.png";
import InstamartCover from "../../assets/images/InstamartCover.png";
import SmokingLady from "../../assets/images/smoking.png";

export const Designs = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col items-center justify-between w-[72rem] pb-28">
        <div className="flex items-end w-full justify-between font-spline">
          <div className="flex flex-col font-bold">
            <span className="text-6xl">Pooja</span>
            <span className="text-3xl mt-2">Designer</span>
          </div>
          <div className="font-bold text-2xl w-4/5">
            I design user-interfaces that are intuitive and user-friendly and
            graphics. My primary tools are Figma and Procreate.
          </div>
        </div>
        <div className="w-full flex items-center space-x-6 mt-10 mb-6">
          <a
            href="https://www.behance.net/gallery/189111613/Illustrations"
            target="_blank"
            rel="noopener noreferrer"
            className="w-3/5 hover:scale-95 transition-all rounded-2xl h-48 overflow-hidden"
          >
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${SmokingLady}')` }}
            />
          </a>
          <a
            href="https://www.behance.net/gallery/150733007/Swiggy-Assignment-New-Delivery-Executive-App"
            target="_blank"
            rel="noopener noreferrer"
            className="w-2/5 hover:scale-95 overflow-hidden transition-all h-48 rounded-2xl"
          >
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${MyShiftsCover}')` }}
            />
          </a>
        </div>
        <div className="w-full flex items-center space-x-6">
          <a
            href="https://www.figma.com/file/5HODDQY2XGoKOXxWZBv7uo/Maternity-App---Home-Screen?type=design&node-id=0%3A1&mode=design&t=EdSF9l4pB0hr8aEI-1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-2/5 hover:scale-95 overflow-hidden transition-all h-48 rounded-2xl"
          >
            <div
              className="w-full h-full  bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${BumpBuddyCover}')` }}
            />
          </a>
          <a
            href="https://www.behance.net/gallery/189108973/My-stint-at-Swiggy-Instamart"
            target="_blank"
            rel="noopener noreferrer"
            className="w-3/5 hover:scale-95 transition-all overflow-hidden rounded-2xl h-48"
          >
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${InstamartCover}')` }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
