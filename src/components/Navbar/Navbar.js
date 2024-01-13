import { NavLink } from "react-router-dom";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip/Tooltip";
import "../Tooltip/Tooltip.css";

export const Navbar = () => {
  return (
    <div className="fixed bottom-8 mx-auto w-max h-20 z-20 flex items-center justify-center rounded-full left-0 right-0 bg-white px-4 pb-2 hover:scale-105 transition-all">
      <Tooltip content="Home">
        <span className="tooltiptext">
          <NavLink className="zoom" to="/">
            <Icon name="Home" className="w-10 h-10" />
            <div className="dot"></div>
          </NavLink>
        </span>
      </Tooltip>
      <Tooltip content="Projects">
        <span className="tooltiptext"></span>
        <NavLink className="zoom" to="/codingProjects">
          <Icon name="Code" className="w-10 h-10" />
          <div className="dot"></div>
        </NavLink>
      </Tooltip>
      <Tooltip content="Designs">
        <span className="tooltiptext"></span>
        <NavLink className="zoom" to="/designs">
          <Icon name="Designs" className="w-10 h-10" />
          <div className="dot"></div>
        </NavLink>
      </Tooltip>
      <div className="w-0.5 rounded-full h-1/2 bg-gray-800 mx-4" />
      <Tooltip content="Github">
        <span className="tooltiptext"></span>
        <a
          className="zoom"
          href="https://github.com/prodigiousabyss"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Icon name="Github" className="w-10 h-10" />
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
          <Icon name="LinkedIn" className="w-10 h-10" />
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
          <Icon name="Behance" className="w-10 h-10" />
        </a>
      </Tooltip>
    </div>
  );
};
