import React from "react";
import Button from "@material-ui/core/Button";
import "../styles/Header.css";
import ToggleSwitch from "../components/constants/ToggleSwitch";
import logo from "../assets/logo.png";

function Header() {
  return (
      <header className="header">
        <a href="" className="logo">
          <img src={logo} alt="" className="align-logo"/>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
          <li>
            <a>Documentation</a>
          </li>

          <li>
            <a href="https://github.com/Tezos-India" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a>
            <Button className="header-button">Get in Touch</Button>
            </a>
          </li>
        </ul>
      </header>
  );
}
export default Header;
