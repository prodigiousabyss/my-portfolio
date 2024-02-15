import { NavLink } from "react-router-dom";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip/Tooltip";
import "../Tooltip/Tooltip.css";

export const Navbar = () => {
  return (
    <div className="fixed bottom-8 mx-auto w-max space-x-4 lg:space-x-10 lg:w-max sm:w-15 h-16 lg:h-20 sm:h-18 z-20 flex items-center justify-center rounded-full left-0 right-0 bg-white px-6 lg:px-10 pb-2 lg:hover:scale-105 transition-all">
      <Tooltip content="Home">
        <span className="tooltiptext">
          <NavLink className="zoom" to="/">
            <Icon
              name="Home"
              className="w-6 lg:w-10 sm:w-8 h-auto lg:h-10 sm:h-8"
            />
            <div className="dot"></div>
          </NavLink>
        </span>
      </Tooltip>
      <Tooltip content="Projects">
        <span className="tooltiptext"></span>
        <NavLink className="zoom" to="/codingProjects">
          <Icon name="Code" className="w-6 lg:w-10 sm:w-8 h-6 lg:h-10 sm:h-8" />
          <div className="dot"></div>
        </NavLink>
      </Tooltip>
      <Tooltip content="Designs">
        <span className="tooltiptext"></span>
        <NavLink className="zoom" to="/designs">
          <Icon
            name="Designs"
            className="w-6 lg:w-10 sm:w-8 h-6 lg:h-10 sm:h-8"
          />
          <div className="dot"></div>
        </NavLink>
      </Tooltip>
      <div className="w-0.5 rounded-full h-1/2 bg-gray-800" />
      <Tooltip content="Github">
        <span className="tooltiptext"></span>
        <a
          className="zoom"
          href="https://github.com/prodigiousabyss"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Icon
            name="Github"
            className="w-6 lg:w-10 sm:w-8 h-6 lg:h-10 sm:h-8"
          />
        </a>
      </Tooltip>
      <Tooltip content="LinkedIn">
        <span className="tooltiptext"></span>
        <a
          className="zoom"
          href="https://linkedin.com/in/prodigiousabyss"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Icon
            name="LinkedIn"
            className="w-6 lg:w-10 sm:w-8 h-6 lg:h-10 sm:h-8"
          />
        </a>
      </Tooltip>
      <Tooltip content="Behance">
        <span className="tooltiptext"></span>
        <a
          className="zoom"
          href="https://www.behance.net/prodigiousabyss"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Icon
            name="Behance"
            className="w-6 lg:w-10 sm:w-8 h-6 lg:h-10 sm:h-8"
          />
        </a>
      </Tooltip>
    </div>
  );
};
