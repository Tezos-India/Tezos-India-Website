import React, { useContext } from "react";
// import Button from "@material-ui/core/Button";
import StyleContext from "../contexts/StyleContext";
import ActivityCard from "./constants/ActivityCard";
import "../styles/Activity.css";
import { activity } from "./constants/Constant";

function Activity() {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      className={isDark ? "container-div dark-container-div" : "container-div"}
      id="activity"
    >
        <div className="card-div">
          <div className="align-card">
            {activity.activityCard.map((cardDesc) => (
              <ActivityCard>
                <div className="card-content">
                  <img src={cardDesc.img} alt="" className="activity-img" />
                  <p className="activity-title">{cardDesc.title}</p>
                  <p className={isDark?"activity-subTitle dark-activity-subTitle":"activity-subTitle"}>{cardDesc.subTitle}</p>
                </div>
              </ActivityCard>
            ))}
          </div>
          <div className="align-card-two">
            {activity.activityTwoCard.map((cardDesc) => (
              <ActivityCard>
                <div className="card-content">
                  <img src={cardDesc.img} alt="" className="activity-img" />
                  <p className="activity-title">{cardDesc.title}</p>
                  <p className={isDark?"activity-subTitle dark-activity-subTitle":"activity-subTitle"}>{cardDesc.subTitle}</p>
                </div>
              </ActivityCard>
            ))}
          </div>
        </div>
      <div className="align-div-text">
        <h1 className="alignHeadings">
          Building and empowering a well rounded Tezos ecosystem in India
        </h1>
        <p className={isDark ? "subHeading dark-subHeading" : "subHeading"}>
          We believe that a great ecosystem is a sum of all its participants. We
          want to enable people to seamlessly participate in the Tezos ecosystem
          in India
        </p>
        {/* <Button
          className={isDark ? "activityBtn dark-activityBtn" : "activityBtn"}
        >
          Get Started
        </Button> */}
      </div>
    </div>
  );
}

export default Activity;
