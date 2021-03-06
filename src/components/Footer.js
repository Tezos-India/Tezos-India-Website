import React, { useContext } from "react";
import StyleContext from "../contexts/StyleContext";
import "../styles/Footer.css";
import logo from "../assets/TIF.svg";
import linkedin from "../assets/Linkedin.svg";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import youtube from "../assets/YouTube.svg";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      className={
        isDark ? "footer-container dark-footer-container" : "footer-container"
      }
      //style={{ backgroundColor: "#000000" }}
    >
      <div className='footer-align-div'>
        <div className='footer-logo'>
          <img src={logo} alt='' />
        </div>
        <div className='footer-list'>
          <ul
            className={isDark ? "footer-menu dark-footer-menu" : "footer-menu"}
          >
            <li>
              <a href='#home'>Home</a>
            </li>
            {/* <li>
              <a href="#">Blog</a>
            </li> */}
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
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-social-links'>
          <a
            href='https://www.linkedin.com/company/tezos-india-foundation/?originalSubdomain=in'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedin} alt='' className='footer-align-img' />
          </a>
          <a
            href='https://www.facebook.com/IndiaTezos/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={facebook} alt='' className='footer-align-fb-img' />
          </a>
          <a
            href='https://twitter.com/IndiaTezos'
            target='_blank'
            rel='noreferrer'
          >
            <img src={twitter} alt='' className='footer-align-img' />
          </a>
          <a
            href='https://www.youtube.com/channel/UC3rO1NWMEpKqzb7UqV79jxQ'
            target='_blank'
            rel='noreferrer'
          >
            <img src={youtube} alt='' className='footer-align-img' />
          </a>
        </div>
        <div
          className={
            isDark
              ? "footer-copyright dark-footer-copyright"
              : "footer-copyright"
          }
        >
          <p>© Copyright 2021 Tezos India - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
