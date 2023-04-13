import { Icon } from "../Icon";

export const Modal = ({ show, setShow, children, previous, next }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed w-full h-full flex items-center justify-center z-50"
      onClick={() => setShow(false)}
    >
      <div className="absolute w-full h-full bg-black bg-opacity-70" />
      <div
        className="bg-white w-[70rem] h-[45rem] overflow-visible flex items-center justify-center relative rounded-[2rem] "
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={() => setShow(false)}>
          <button className="flex items-center justify-center bg-white rounded-[50%] w-10 h-10 absolute top-[-0.5rem] right-[-3rem]">
            <Icon className="w-6 h-6" name="Cross" />
          </button>
        </div>
        {children}
        {previous && (
          <div onClick={previous}>
            {" "}
            <button className="bg-white w-10 h-10 absolute flex items-center justify-center left-[-3rem] top-[18rem] rounded-[50%]">
              <Icon className="w-8" name="previous" />
            </button>
          </div>
        )}
        {next && (
          <div onClick={next}>
            {" "}
            <button className="bg-white rounded-[50%] w-10 h-10 absolute flex items-center justify-center right-[-3rem] top-[18rem]">
              <Icon className="w-8" name="next" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
