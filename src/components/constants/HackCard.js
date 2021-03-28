import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../../styles/CommunityCard.css";

export default function HackCard(props) {
  const { isDark } = useContext(StyleContext);
  return (
    <Card
      className={
        isDark
          ? "communityCardContainer dark-communityCardContainer"
          : "communityCardContainer"
      }
      style={{ maxWidth: "500px" }}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
