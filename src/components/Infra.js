import React from "react";
import Grid from "@material-ui/core/Grid";
import { HeadingComponent } from "./common/TextComponent";
import infraStyles from "../styles/Infra.module.css";
import logo from "../assets/tzlogo.svg";
import vector from "../assets/vector-right.svg"

function Infra() {
  return (
    <div className={infraStyles.infraContainer}>
      <Grid container>
        <Grid item xs={4} md={12}>
            <img src={vector} alt="" className={infraStyles.vector}/>
          <div className={infraStyles.alignHeading}>
            <img src={logo} alt="" className={infraStyles.logo}/>
            <HeadingComponent text={"Infrastructure"} componentStyle={infraStyles.heading}/>
          </div>
          <p className={infraStyles.paraText}>
            Our organization is deeply committed to supporting the <br /> Tezos
            network by developing a variety of useful analytics <br /> tools and
            extending public infrastructure that boosts <br /> Tezos technology
            mass adoption. <br /> <br />
            We created Tezos Giga Node – a reliable public <br />
            infrastructure for Tezos community. Using only proven <br />{" "}
            solutions and providers, we create a cluster consisting of <br /> 4
            Tezos Full Archive Nodes based on such technologies <br /> as Nginx,
            Haproxy, Graphana, Prometheus, and Munin.
            <br /> <br />
            We always try to follow and implement the best industry <br />{" "}
            practices in all things. Thereby, our customer support <br />{" "}
            department works solely in-house, providing almost <br /> immediate
            assistance when critical problems occur. A <br /> team of our
            experienced DevOps engineers works <br /> around the clock, ensuring
            that all systems are up and <br /> running smoothly.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Infra;
