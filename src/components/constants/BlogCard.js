import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../../styles/BlogCard.css";

export default function BlogCard(props) {
  const { isDark } = useContext(StyleContext);
  return (
    <Card
      className={
        isDark
          ? "BlogCard dark-BlogCard"
          : "BlogCard"
      }
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
