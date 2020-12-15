import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../../styles/BlogBannerCard.css";

export default function BlogBannerCard(props) {
  return (
    <Card className="BlogBannerCard">
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
