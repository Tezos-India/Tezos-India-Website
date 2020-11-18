import React from "react";
import footerStyles from "../styles/Footer.module.css";
import logo from "../assets/logo.png";
import dribbble from "../assets/Dribbble.svg";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import youtube from "../assets/YouTube.svg";

function Footer() {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.logoContainer}>
          <img src={logo} alt="" className={footerStyles.logo} />
        </div>
        <div className={footerStyles.footerLinks}>
          <p className={footerStyles.footerAlignLinks}>Home</p>
          <p className={footerStyles.footerAlignLinks}>Pages</p>
          <p className={footerStyles.footerAlignLinks}>Blog</p>
          <p className={footerStyles.footerAlignLinks}>Portfolio</p>
          <p className={footerStyles.footerAlignLinks}>Contact</p>
        </div>
        <div className={footerStyles.social}>
          <img
            src={dribbble}
            alt=""
            className={footerStyles.footerSocialLinks}
          />
          <img
            src={facebook}
            alt=""
            className={footerStyles.footerSocialLinks}
            style={{ width: "12px" }}
          />
          <img
            src={twitter}
            alt=""
            className={footerStyles.footerSocialLinks}
          />
          <img
            src={youtube}
            alt=""
            className={footerStyles.footerSocialLinks}
          />
        </div>
      </div>
      <p className={footerStyles.copyright}>
        © Copyright 2019 Tezos India Foundation - All Rights Reserved{" "}
      </p>
    </div>
  );
}

export default Footer;
