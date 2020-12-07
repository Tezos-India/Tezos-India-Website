import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import activityStyles from "../styles/Activity.module.css";
import { SubHeadingComponent, TextComponent } from "./common/TextComponent";
import SimpleCard from "./common/SimpleCard";
import edu from "../assets/edu.svg";
import media from "../assets/media.svg";
import community from "../assets/community.svg";
import business from "../assets/business.svg";

export default function Activity() {
  return (
    <div className={activityStyles.activityContainer}>
        <Grid container>
          <Grid
            item
            className={activityStyles.marginLeft}
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container>
                  <Grid
                    className={activityStyles.cardMargin}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <SimpleCard>
                      <img
                        src={edu}
                        alt=""
                        className={activityStyles.cardImg}
                      />
                      <SubHeadingComponent text={"Education program"} />
                      <TextComponent
                        componentStyle={activityStyles.cardDesc}
                        text={
                          "Conducting regular online and offline courses will attract more developers to the ecosystem and promote Tezos within the local community"
                        }
                      />
                    </SimpleCard>
                  </Grid>
                  <Grid
                    item
                    className={activityStyles.cardMargin}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <SimpleCard>
                      <img
                        src={community}
                        alt=""
                        className={activityStyles.cardImg}
                      />
                      <SubHeadingComponent text={"Community building"} />
                      <TextComponent
                        componentStyle={activityStyles.cardDesc}
                        text={
                          "Hosting regular meetups and hackathons. Running a representative office in Unit City"
                        }
                      />
                    </SimpleCard>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container className={activityStyles.cardMarginTwo}>
                  <Grid
                    item
                    className={activityStyles.cardMargin}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <SimpleCard>
                      <img
                        src={media}
                        alt=""
                        className={activityStyles.cardImg}
                      />
                      <SubHeadingComponent text={"Media Support"} />
                      <TextComponent
                        componentStyle={activityStyles.cardDesc}
                        text={
                          "Raising awareness about capabilities and advantages of Tezos network through"
                        }
                      />
                    </SimpleCard>
                  </Grid>
                  <Grid
                    item
                    className={activityStyles.cardMargin}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <SimpleCard>
                      <img
                        src={business}
                        alt=""
                        className={activityStyles.cardImg}
                      />
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          md={12}
          lg={6}
          className={activityStyles.activityDesc}
        >
          <p className={activityStyles.alignHeadings}>
            We plan our activity comprehensively in <br /> several directions at{" "}
            <br /> the same time{" "}
          </p>
          <p className={activityStyles.subHeading}>
            The very functions that help you in everyday life are <br /> already
            built into our messenger and are not just built in <br /> but
            invented anew.
          </p>
          <Button className={activityStyles.activityBtn}>Get Started</Button>
        </Grid>
      </div>
  );
}
