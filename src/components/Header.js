import React from "react";
import Button from "@material-ui/core/Button";
import "../styles/Header.css";
import ToggleSwitch from "../components/constants/ToggleSwitch";
import logo from "../assets/TIF.svg";

function Header() {
  return (
    <header className='header'>
      <a href='/' className='logo'>
        <img src={logo} alt='' className='align-logo' />
      </a>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label
        className='menu-icon'
        htmlFor='menu-btn'
        style={{ color: "white" }}
      >
        <span className='navicon'></span>
      </label>
      <ul className='menu'>
        <li>
          <a href='/#'>
            <ToggleSwitch />
          </a>
        </li>
        <li>
          <a href='#videos'>Documentation</a>
        </li>
        <li>
          <a href='#hacks' rel='noreferrer'>
            Hackathons
          </a>
        </li>
        <li>
          <a href='#fellowship' rel='noreferrer'>
            TIF 2.0
          </a>
        </li>

        <li>
          <a
            href='https://github.com/Tezos-India'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href='https://tezconnect.typeform.com/to/O31VIC'
            target='_blank'
            rel='noreferrer'
          >
            <Button className='header-button'>Get in Touch</Button>
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
