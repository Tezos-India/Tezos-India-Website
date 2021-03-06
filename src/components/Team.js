import React, { useContext } from "react";
import "../styles/Team.css";
import { team } from "./constants/Constant";
import Card from "./constants/TeamCard";
import StyleContext from "../contexts/StyleContext";
import linkedin from "../assets/Linkedin.svg";
import twitter from "../assets/Twitter.svg";
import telegram from "../assets/telegram.svg";

export default function Team() {
  const { isDark } = useContext(StyleContext);
  return (
    <React.Fragment>
      <div
        className={
          isDark ? "team-container dark-team-container" : "team-container"
        }
      >
        <h1 className='team-heading'>The A Team</h1>
        <div className='team-align-cards'>
          <div className='team-align-horizontal'>
            {team.teammates.map((member) => (
              <Card>
                <div>
                  <img src={member.image} alt='' className='team-memberImg' />
                </div>
                <div className='align-team-mem'>
                  <p className='team-header'>{member.name}</p>
                  <p className='team-designation'>{member.designation}</p>
                  <div className='teamSocial'>
                    <a href={member.linkedin} target='_blank' rel='noreferrer'>
                      <img src={linkedin} alt='' />
                    </a>
                    <a href={member.twitter} target='_blank' rel='noreferrer'>
                      <img src={twitter} alt='' />
                    </a>
                    <a href={member.telegram} target='_blank' rel='noreferrer'>
                      <img src={telegram} alt='' />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className='team-align-horizontal'>
            {team.teamamtesRowTwo.map((member) => (
              <Card>
                <div>
                  <img src={member.image} alt='' className='team-memberImg' />
                </div>
                <div className='align-team-mem'>
                  <p className='team-header'>{member.name}</p>
                  <p className='team-designation'>{member.designation}</p>
                  <div className='teamSocial'>
                    <a href={member.linkedin} target='_blank' rel='noreferrer'>
                      <img src={linkedin} alt='' />
                    </a>
                    <a href={member.twitter} target='_blank' rel='noreferrer'>
                      <img src={twitter} alt='' />
                    </a>
                    <a href={member.telegram} target='_blank' rel='noreferrer'>
                      <img src={telegram} alt='' />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
            {team.sanket.map((member) => (
              <Card>
                <div>
                  <img src={member.image} alt='' className='team-memberImg' />
                </div>
                <div className='align-team-mem'>
                  <p className='team-header'>{member.name}</p>
                  <p className='team-designation'>{member.designation}</p>
                  <div className='teamSocial'>
                    <a href={member.linkedin} target='_blank' rel='noreferrer'>
                      <img src={linkedin} alt='' />
                    </a>
                    <a
                      href={member.dribbbleLink}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={member.dribbble} alt='' />
                    </a>
                    <a href={member.telegram} target='_blank' rel='noreferrer'>
                      <img src={telegram} alt='' />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className='team-align-horizontal'>
            {team.internsRow.map((member) => (
              <Card>
                <div className='team-align-intern'>
                  <img src={member.image} alt='' className='team-memberImg' />
                </div>
                <div className='align-team-mem-intern'>
                  <p className='team-header'>{member.name}</p>
                  <p className='team-designation'>{member.designation}</p>
                  <div className='teamSocial-intern'>
                    <a href={member.linkedin} target='_blank' rel='noreferrer'>
                      <img src={linkedin} alt='' />
                    </a>
                    <a href={member.twitter} target='_blank' rel='noreferrer'>
                      <img src={twitter} alt='' />
                    </a>
                    <a href={member.telegram} target='_blank' rel='noreferrer'>
                      <img src={telegram} alt='' />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* <div className="align-team-btn">
        <Button
          className={isDark ? "teamMore-btn dark-teamMore-btn" : "teamMore-btn"}
        >
          Still have unanswered questions? Get in touch
        </Button>
      </div> */}
      </div>
    </React.Fragment>
  );
}
