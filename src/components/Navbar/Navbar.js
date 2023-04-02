import { NavLink } from "react-router-dom";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip/Tooltip";
import "../Tooltip/Tooltip.css";

export const Navbar = () => {
  return (
    <div
      className="zoomNavbar"
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        width: "max-content",
        height: "6rem",
        borderRadius: "4rem",
        backgroundColor: "#BDC0BE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "10",
      }}
    >
      <Tooltip content="Home">
        <span className="tooltiptext">
          <NavLink className="zoom" to="/">
            <Icon name="Home" style={{ height: "2.8rem" }} />
            <div className="dot"></div>
          </NavLink>
        </span>
      </Tooltip>
      <Tooltip content="Designs">
        <span className="tooltiptext"></span>
        <NavLink className="zoom" to="/designs">
          <Icon name="Rocket" style={{ height: "2.8rem" }} />
          <div className="dot"></div>
        </NavLink>
      </Tooltip>
      <Tooltip content="Code">
        <span className="tooltiptext"></span>
        <NavLink className="zoom" to="/codingProjects">
          <Icon name="Code" style={{ height: "3.2rem" }} />
          <div className="dot"></div>
        </NavLink>
      </Tooltip>
      <div
        style={{
          width: "0.1rem",
          height: "50%",
          backgroundColor: "#5F6160",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      ></div>
      <Tooltip content="Behance">
        <span className="tooltiptext"></span>
        <a
          className="zoom"
          href="https://www.behance.net/prodigiousabyss"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Icon name="Behance" style={{ width: "4rem", height: "4rem" }} />
        </a>
      </Tooltip>
      <Tooltip content="Github">
        <span className="tooltiptext"></span>
        <a
          className="zoom"
          href="https://github.com/prodigiousabyss"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Icon name="Github" style={{ width: "3rem", height: "3rem" }} />
        </a>
      </Tooltip>
      <Tooltip content="Twitter">
        <span className="tooltiptext"></span>
        <a
          className="zoom"
          href="https://twitter.com/prodigiousabyss"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Icon name="Twitter" style={{ width: "3rem", height: "3rem" }} />
        </a>
      </Tooltip>
    </div>
  );
};
