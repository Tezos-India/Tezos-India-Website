import React from "react";
import partnerStyles from "../styles/Partners.module.css";
import { TextComponent } from "./common/TextComponent";
import partners from "../assets/partners.png";

function Partners() {
  return (
    <div className={partnerStyles.container}>
      <TextComponent
        componentStyle={partnerStyles.partnerTitle}
        text={"Institutes that have already tried our app"}
      />
      <div className={partnerStyles.line}></div>
        <img src={partners} alt="" className={partnerStyles.partnerLogo} />
    </div>
  );
}

export default Partners;
