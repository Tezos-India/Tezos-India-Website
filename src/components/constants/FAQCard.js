import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../../styles/FAQCard.css";

export default function FAQCard(props) {
  const { isDark } = useContext(StyleContext);
  return (
    <Card
      className={
        isDark
          ? "faqCardContainer dark-faqCardContainer"
          : "faqCardContainer"
      }
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
