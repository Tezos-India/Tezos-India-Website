import React, { useContext } from "react";
import "../styles/Partners.css";
import StyleContext from "../contexts/StyleContext";
import partners from "../assets/partners.png";

function Partners() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "container dark-container" : "container"}>
      <p className="partnerTitle">Institutes that have already tried our app</p>
      <div className={isDark ? "line dark-line" : "line"}> </div>
      <img src={partners} alt="" className="partnerLogo" />
    </div>
  );
}

export default Partners;
