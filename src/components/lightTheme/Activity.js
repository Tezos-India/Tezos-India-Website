import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import activityStyles from "./styles/Activity.module.css";
import { SubHeadingComponent, TextComponent } from "./common/TextComponent";
import SimpleCard from "./common/SimpleCard";
import edu from "../../assets/edu.svg";
import media from "../../assets/media.svg";
import community from "../../assets/community.svg";
import business from "../../assets/business.svg";

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
                    <img src={edu} alt="" className={activityStyles.cardImg} />
                    <SubHeadingComponent text={"Education"} />
                    <TextComponent
                      componentStyle={activityStyles.cardDesc}
                      text={
                        "We conduct regular education programs to enable the community to build on Tezos Protocol"
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
                    <SubHeadingComponent text={"Events"} />
                    <TextComponent
                      componentStyle={activityStyles.cardDesc}
                      text={
                        "We conduct events with ecosystem partners to bring rich discussions around the role of blockchains today"
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
                    <SubHeadingComponent text={"Hackathons"} />
                    <TextComponent
                      componentStyle={activityStyles.cardDesc}
                      text={
                        "We actively conduct and support hackathons to enable teams to build innovative PoCs"
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
                        "We help our ecosystem partners to leverage the power of Tezos Protocol by making relevant connections and help with grants on a case by case basis"
                      }
                    />
                  </SimpleCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} md={12} lg={6} className={activityStyles.activityDesc}>
        <p className={activityStyles.alignHeadings}>
          Building and empowering <br/> a well rounded Tezos 
          <br /> ecosystem in India{" "}
        </p>
        <p className={activityStyles.subHeading}>
          We believe that a great ecosystem is a sum of all its participants.{" "}
          <br /> We want to enable people to seamlessly participate in the{" "}
          <br /> Tezos ecosystem in India.
        </p>
        <Button className={activityStyles.activityBtn}>Get Started</Button>
      </Grid>
    </div>
  );
}
