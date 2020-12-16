import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import "../styles/Team.css";
import { team } from "./constants/Constant";
import Card from "./constants/TeamCard";
import StyleContext from "../contexts/StyleContext";

export default function Team() {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      className={
        isDark ? "team-container dark-team-container" : "team-container"
      }
    >
      <h1 className="team-heading">The A Team</h1>
      <div className="team-align-cards">
      <div className="team-align--horizontal">
        {team.teammates.map((member) => (
          <Card>
            <div className="team-alignImage">
              <img src={member.image} alt="" className="team-memberImg" />
              <p className="team-header">{member.name}</p>
              <p className="team-designation">{member.designation}</p>
              <div className="teamSocial">
                <img src={member.instagram} alt="" />
                <img src={member.dribbble} alt="" />
                <img src={member.linkedin} alt="" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="team-align--horizontal">
        {team.teamamtesRowTwo.map((member) => (
          <Card>
            <div className="team-alignImage">
              <img src={member.image} alt="" className="team-memberImg" />
              <p className="team-header">{member.name}</p>
              <p className="team-designation">{member.designation}</p>
              <div className="teamSocial">
                <img src={member.instagram} alt="" />
                <img src={member.dribbble} alt="" />
                <img src={member.linkedin} alt="" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      </div>
      <div>
      <Button
        className={
          isDark ? "teamMore-btn dark-teamMore-btn" : "teamMore-btn"
        }
      >
        Still have unanswered questions? Get in touch
      </Button>
        </div>
    </div>
  );
}
