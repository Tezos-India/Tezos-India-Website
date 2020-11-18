import React from "react";
import Button from "@material-ui/core/Button";
import faqStyles from "../styles/FAQ.module.css";
import { HeadingComponent } from "./common/TextComponent";
import FaqCard from "./common/FAQCard";
import team from "./constant";

function FAQ() {
  return (
    <div className={faqStyles.container}>
      <HeadingComponent
        text={"Frequently asked question"}
        componentStyle={faqStyles.header}
      />
      <p className={faqStyles.faqDesc}>
        Jobs that are available from us and looking for their own people! Browse
        our <br /> vacancies and find the one that is right for you!
      </p>
      <div className={faqStyles.faqCard}>
        <div className={faqStyles.faqAlignCard}>
          {team.faq.map((faqDesc) => (
            <div className={faqStyles.faqCardMargin}>
              <FaqCard>{faqDesc.title}</FaqCard>
            </div>
          ))}
          ;
        </div>
        <div>
          {team.faqRowTwo.map((faqDesc) => (
            <div className={faqStyles.faqCardMargin}>
              <FaqCard>{faqDesc.title}</FaqCard>
            </div>
          ))}
          ;
        </div>
      </div>
      <Button className={faqStyles.btn}>
        Still have unanswered questions? Get in touch
      </Button>
    </div>
  );
}

export default FAQ;
