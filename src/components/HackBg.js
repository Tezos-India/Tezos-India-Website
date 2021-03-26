import React, { useContext } from "react";
import StyleContext from "../contexts/StyleContext";
import "../styles/Community.css";

function HackBg(props) {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      className={
        isDark
          ? "community-background dark-community-background"
          : "community-background"
      }
    >
      <div>{props.children}</div>
    </div>
  );
}

export default HackBg;
