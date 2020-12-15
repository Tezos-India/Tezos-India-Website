import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import StyleContext from "../../contexts/StyleContext";
import "../../styles/TeamCard.css";

export default function TeamCard(props) {
  const { isDark } = useContext(StyleContext);
  return (
    <Card
      className={isDark ? "teamCardContainer dark-teamCardContainer" : "teamCardContainer"}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
