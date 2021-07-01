import React, { useContext } from "react";
import Banner from "../assets/TezosIndiaFellowship2.0 Banner.png";
import StyleContext from "../contexts/StyleContext";
import "../styles/Hack.css";

export default function FellowshipBanner() {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      id='fellowship'
      className={
        isDark ? "team-container dark-team-container" : "team-container"
      }
      //style={{ backgroundColor: "#000000" }}
    >
      <img
        src={Banner}
        style={{
          marginTop: " 10%",
          marginBottom: "-5%",
          //maxWidth: "50%",
          height: "auto",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
          maxWidth: "1000px",
        }}
        alt='Fellowship Banner'
      ></img>
      <div className='hack-card-button'>
        <a
          href={
            "https://medium.com/tezos-india-foundation/tif-strikes-back-for-the-next-edition-41f7a5d32b6e"
          }
          className='btn-1'
          style={{ marginTop: "-10%" }}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
