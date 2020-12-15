import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import "../styles/Team.css";
import { faq } from "./constants/Constant";
import Card from "./constants/FAQCard";
import StyleContext from "../contexts/StyleContext";
import "../styles/FAQ.css";

export default function Faq() {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      className={isDark ? "faq-container dark-faq-container" : "faq-container"}
    >
      <div className="faq-align-cards">
        <div className="faq-margin-cards">
          {faq.faqRowOne.map((content) => (
            <Card>
              <p>{content.title}</p>
            </Card>
          ))}
        </div>
        <div className="faq-margin-cards">
          {faq.faqRowTwo.map((content) => (
            <Card>
              <p>{content.title}</p>
            </Card>
          ))}
        </div>
      </div>
      <Button
        className={
          isDark ? "faqStyles-btn dark-faqStyles-btn" : "faqStyles-btn"
        }
      >
        Still have unanswered questions? Get in touch
      </Button>
    </div>
  );
}
