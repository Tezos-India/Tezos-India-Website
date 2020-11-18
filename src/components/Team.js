import React from "react";
import Button from "@material-ui/core/Button";
import { HeadingComponent } from "./common/TextComponent";
import teamStyles from "../styles/Team.module.css";
import team from "./constant";
import instagram from "../assets/Instagram.svg";
import dribbble from "../assets/Dribbble.svg";
import linkedin from "../assets/Linkedin.svg";

function Team() {
  return (
    <div className={teamStyles.container}>
      <HeadingComponent
        text={"The A Team"}
        componentStyle={teamStyles.heading}
      />
      <div className={teamStyles.team}>
        {team.members.map((member) => (
          <div className={teamStyles.alignImage}>
            <img src={member.image} alt="" className={teamStyles.memberImg} />
            <p className={teamStyles.header}>{member.name}</p>
            <p className={teamStyles.designation}>{member.designation}</p>
            <div className={teamStyles.teamSocial}>
              <img src={instagram} alt="" />
              <img src={dribbble} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className={teamStyles.team}>
        {team.membersRowTwo.map((memberTwo) => (
          <div className={teamStyles.alignImage}>
            <img src={memberTwo.image} alt="" className={teamStyles.memberImg} />
            <p className={teamStyles.header}>{memberTwo.name}</p>
            <p className={teamStyles.designation}>{memberTwo.designation}</p>
            <div className={teamStyles.teamSocial}>
              <img src={instagram} alt="" />
              <img src={dribbble} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className={teamStyles.resumeBtn}>
      <Button className={teamStyles.btn}>We think you'll fit in here. Submit your resume</Button>
      </div>
    </div>
  );
}

export default Team;
