import React from "react";
import Button from "@material-ui/core/Button";
import heroStyles from "../styles/Hero.module.css";
import Header from "./Header";
import logo from "../assets/hero-logo.png";

function Hero() {
  return (
    <div className={heroStyles.banner}>
      <Header />
      <div className={heroStyles.intro}>
        <p>
          We Are Dedicated to Growing the
          <br />
          <img src={logo} alt="" className={heroStyles.logo} /> Tezos Community
          in India.
        </p>
      </div>
      <Button className={heroStyles.introBtn}>Know More</Button>
    </div>
  );
}

export default Hero;
