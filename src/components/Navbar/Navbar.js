import { NavLink } from "react-router-dom";
import { Icon } from "../Icon";

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
      <NavLink className="zoom" to="/">
        <Icon name="Home" style={{ height: "2.8rem" }} />
        <div className="dot"></div>
      </NavLink>
      <NavLink className="zoom" to="/crafts">
        <Icon name="Rocket" style={{ height: "2.8rem" }} />
        <div className="dot"></div>
      </NavLink>
      <NavLink className="zoom" to="/projects">
        <Icon name="Bulb" style={{ height: "2.8rem" }} />
        <div className="dot"></div>
      </NavLink>
      <div
        style={{
          width: "0.1rem",
          height: "50%",
          backgroundColor: "#5F6160",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      ></div>
      <a
        className="zoom"
        href="https://www.behance.net/prodigiousabyss"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <Icon name="Behance" style={{ width: "4rem", height: "4rem" }} />
      </a>
      <a
        className="zoom"
        href="https://twitter.com/prodigiousabyss"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <Icon name="Twitter" style={{ width: "3rem", height: "3rem" }} />
      </a>
    </div>
  );
};
