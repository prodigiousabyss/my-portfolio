import React from "../../assets/images/react.svg";
// import Code from "../../assets/images/code.svg";
// import Figma from "../../assets/images/figma.svg";
// import JS from "../../assets/images/JS.svg";
// import Fresher from "../../assets/images/fresher.svg";

export const Home = () => {
  return (
    <div className="w-screen h-screen text-black flex items-center justify-center pb-20 font-dmSans text-center">
      <div className="w-4/5 h-2/3 relative flex items-center justify-center">
        <div className="flex flex-col relative items-center font-bold text-xs sm:text-sm md:text-lg lg:text-3xl">
          <span className="leading-loose">
            Hello! I am Pooja Ghanghas, a self-taught
          </span>
          <span className="px-1 py-[0.1rem] lg:px-1 lg:py-1 bg-white inline-block rounded-sm lg:rounded-md">
            🚀web developer & designer.
          </span>
          <span className="leading-loose">
            I was previously working at{" "}
            <a
              href="https://www.swiggy.com/swiggy-instamart"
              target="_blank"
              rel="noreferrer"
            >
              Swiggy Instamart
            </a>
            <span> as designer.</span>
          </span>
          <span>
            👀 Actively looking for
            <span> </span>
            <span className="px-1 py-[0.1rem] lg:px-1 lg:py-1 bg-white inline-block rounded-sm lg:rounded-md">
              full-time frontend opportunities.
            </span>
          </span>
          <span className="leading-loose">
            My Tech Stack is{" "}
            <span className="underline underline-offset-1 decoration-emerald-500">
              React JS,
            </span>{" "}
            <span className="underline underline-offset-1 decoration-yellow-500">
              Tailwind CSS,
            </span>{" "}
            <span className="underline underline-offset-1 decoration-indigo-500">
              JavaScript.
            </span>
          </span>
          {/* <img
            src={React}
            className="w-8 md:w-10 lg:w-16 h-auto absolute -left-8 -top-10 -rotate-12"
            alt="react"
          /> */}
          {/* <img
            src={Code}
            className="w-8 md:w-10 lg:w-16 h-auto absolute right-10 -bottom-10 -rotate-12"
            alt="code"
          /> */}
          {/* <img
            src={Figma}
            className="w-8 md:w-10 lg:w-16 h-auto absolute -right-10 -top-10 rotate-12"
            alt="figma"
          /> */}
          {/* <img
            src={JS}
            className="w-10 md:w-12 lg:w-20 h-auto absolute left-0 -bottom-8 -rotate-12"
            alt="js"
          /> */}
          {/* <img
            src={Fresher}
            className="w-20 md:w-36 lg:w-44 rounded h-auto absolute right-72 -bottom-14 -rotate-6 shadow-lg"
            alt="fresher"
          /> */}
        </div>
      </div>
    </div>
  );
};
