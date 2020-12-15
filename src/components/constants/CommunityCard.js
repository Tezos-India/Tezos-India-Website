import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../../styles/CommunityCard.css";

export default function CommunityCard(props) {
  const { isDark } = useContext(StyleContext);
  return (
    <Card
      className={
        isDark
          ? "communityCardContainer dark-communityCardContainer"
          : "communityCardContainer"
      }
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
