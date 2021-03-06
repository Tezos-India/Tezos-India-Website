import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import StyleContext from "../../contexts/StyleContext";
import "../../styles/ActivityCard.css";

export default function ActivityCard(props) {
  const { isDark } = useContext(StyleContext);
  return (
    <Card
      className={isDark ? "cardContainer dark-cardContainer" : "cardContainer"}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
