import React from "react";
import Grid from "@material-ui/core/Grid";
import { HeadingComponent } from "./common/TextComponent";
import infraStyles from "./styles/Infra.module.css";
import logo from "../../assets/tzlogo.svg";
import vector from "../../assets/vector-right.svg";

function Infra() {
  return (
    <div className={infraStyles.infraContainer}>
      <Grid container>
        <Grid item xs={4} md={12}>
          <img src={vector} alt="" className={infraStyles.vector} />
          <div className={infraStyles.alignHeading}>
            <img src={logo} alt="" className={infraStyles.logo} />
            <HeadingComponent
              text={" Tezos Protocol Highlights"}
              componentStyle={infraStyles.heading}
            />
          </div>
          <p className={infraStyles.subHeading}>
            {" "}
            Tezos is an open-source blockchain protocol for assets and
            applications backed by a global community of validators,
            researchers, and builders. The Tezos protocol is secure, upgradable,
            and built to last.
          </p>
          <div className={infraStyles.paraText}>
            <p className={infraStyles.paraHeading}>Secure, Institutional Grade Smart Contracts</p>
            <p>
              Tezos is designed to provide the safety and code correctness
              required for assets and other high value use cases. Its native
              smart contract language, Michelson, facilitates formal
              verification, a methodology commonly used in mission-critical
              environments such as the aerospace, nuclear, and semiconductor
              industries.
            </p>
            <p className={infraStyles.paraHeading}>Upgradable to the State of the Art </p>
            <p>
              Tezos’ modular architecture and formal upgrade mechanism allow the
              network to propose and adopt new technological innovations
              smoothly as they emerge. These aspects, combined with Tezos’
              on-chain invoicing mechanism, enable the protocol to remain the
              state-of-the-art long into the future -- without sacrificing
              community consensus.
            </p>
            <p className={infraStyles.paraHeading}>Open Participation and Incentive Alignment </p>
            <p>
              In Tezos, all stakeholders may participate in network upgrades by
              evaluating, proposing, or approving amendments. Unlike in
              Proof-of-Work and other Proof-of-Stake networks, all stakeholders
              can help to secure the network (via baking or delegating), and
              avoid being diluted by inflation.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Infra;
