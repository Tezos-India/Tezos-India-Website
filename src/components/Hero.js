import React, { useContext } from "react";
import SnowStorm from 'react-snowstorm';
import Button from "@material-ui/core/Button";
import "../styles/Hero.css";
import StyleContext from "../contexts/StyleContext";
import Header from "./Header";
import tezos from "../assets/hero-logo.png";

export default function Hero() {
  const { isDark } = useContext(StyleContext);
  return (
    <div>
      <div className={isDark ? "hero-main dark-hero-main" : "hero-main"}>
      {/* <SnowStorm freezeOnBlur={false} /> */}
        <div>
          <Header />
        </div>
        <div className="hero-text-div">
          <div>
            <h1>
              We Are Dedicated to Growing the{" "}
              <span>
                {" "}
                <img src={tezos} alt="" className="tezos-logo"/>
              </span>{" "}
              Tezos Community in India.
            </h1>
          </div>
          <div className="align-intro-btn">
          <Button className="introBtn">Know More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
