import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import activityStyles from "../styles/Activity.module.css";
import {
  HeadingComponent,
  SubHeadingComponent,
  TextComponent,
} from "./common/TextComponent";
import SimpleCard from "./common/SimpleCard";
import edu from "../assets/edu.svg";
import media from "../assets/media.svg";
import community from "../assets/community.svg";
import business from "../assets/business.svg";

export default function Activity() {
  return (
    <div className={activityStyles.activityContainer}>
      <Grid container>
        <Grid item xs={3} className={activityStyles.eduCard}>
          <SimpleCard>
            <img src={edu} alt="" className={activityStyles.cardImg} />
            <SubHeadingComponent text={"Education program"} />
            <TextComponent
              componentStyle={activityStyles.cardDesc}
              text={
                "Conducting regular online and offline courses will attract more developers to the ecosystem and promote Tezos within the local community"
              }
            />
          </SimpleCard>
        </Grid>

        <Grid item xs={3} className={activityStyles.mediaCard}>
          <SimpleCard>
            <img src={media} alt="" className={activityStyles.cardImg} />
            <SubHeadingComponent text={"Media Support"} />
            <TextComponent
              componentStyle={activityStyles.cardDesc}
              text={
                "Raising awareness about capabilities and advantages of Tezos network through"
              }
            />
          </SimpleCard>
        </Grid>
        <Grid item xs={4} className={activityStyles.activityDesc}>
          <HeadingComponent
            componentStyle={activityStyles.alignHeadings}
            text={
              "We plan our activity comprehensively in several directions at"
            }
          />
          <HeadingComponent
            componentStyle={activityStyles.alignHeadings}
            text={"the same time"}
          />
          <p className={activityStyles.subHeading}>
            The very functions that help you in everyday life are <br /> already
            built into our messenger and are not just built in <br /> but
            invented anew.
          </p>
        </Grid>

        <Grid
          item
          xs={3}
          className={activityStyles.communityCard}
          style={{ marginTop: "-75px" }}
        >
          <SimpleCard>
            <img src={community} alt="" className={activityStyles.cardImg} />
            <SubHeadingComponent text={"Community building"} />
            <TextComponent
              componentStyle={activityStyles.cardDesc}
              text={
                "Hosting regular meetups and hackathons. Running a representative office in Unit City"
              }
            />
          </SimpleCard>
        </Grid>

        <Grid
          item
          xs={3}
          className={activityStyles.bussinessCard}
        >
          <SimpleCard>
            <img src={business} alt="" className={activityStyles.cardImg} />
            <SubHeadingComponent text={"Business"} />
            <SubHeadingComponent text={"Development"} />
            <TextComponent
              componentStyle={activityStyles.cardDesc}
              text={
                "Connecting businesses and development teams in India and south asia"
              }
            />
          </SimpleCard>
        </Grid>

        <Grid item xs={4}>
          <Button className={activityStyles.activityBtn}>Get Started</Button>
        </Grid>
      </Grid>
    </div>
  );
}
