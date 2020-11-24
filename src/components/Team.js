import React from "react";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { HeadingComponent } from "./common/TextComponent";
import teamStyles from "../styles/Team.module.css";
import team from "./constant";
import instagram from "../assets/Instagram.svg";
import dribbble from "../assets/Dribbble.svg";
import linkedin from "../assets/Linkedin.svg"; 
import Card from "./common/TeamCard"

function Team() {
  return (
    <div className={teamStyles.container}>
      <HeadingComponent
        text={"The A Team"}
        componentStyle={teamStyles.heading}
      />
      <Hidden smDown>
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
      </Hidden>
      <Hidden smUp>
      <Carousel arrows className={teamStyles.carousel}>
      {team.membersCarousel.map((teams) => (
          <Card>
            <div className={teamStyles.alignImage}>
            <img src={teams.image} alt="" className={teamStyles.memberImg} />
            <p className={teamStyles.header}>{teams.name}</p>
            <p className={teamStyles.designation}>{teams.designation}</p>
            <div className={teamStyles.teamSocial}>
              <img src={instagram} alt="" />
              <img src={dribbble} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          </Card>
      ))}
      </Carousel>
      </Hidden>
      <div className={teamStyles.resumeBtn}>
      <Button className={teamStyles.btn}>We think you'll fit in here. Submit your resume</Button>
      </div>
    </div>
  );
}

export default Team;
