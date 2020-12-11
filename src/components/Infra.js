import React, { useContext } from "react";
import StyleContext from "../contexts/StyleContext";
import Grid from "@material-ui/core/Grid";
import "../styles/Infra.css";
import logo from "../assets/tzlogo.svg";
import vector from "../assets/vector-right.svg";

function Infra() {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      className={
        isDark ? "infraContainer dark-infraContainer" : "infraContainer"
      }
    >
      <Grid container className="grid-div">
        <Grid item xs={4} md={12}>
          <img src={vector} alt="" className="vector" />
          <div className="infra-alignHeading">
            <div className="infra-logo">
              <img src={logo} alt="" className="align-infra-logo"/>
            </div>
            <h1 className="infra-heading">Tezos Protocol Highlights</h1>
          </div>
          <p
            className={
              isDark
                ? "infra-subHeading dark-infra-subHeading"
                : "infra-subHeading"
            }
          >
            {" "}
            Tezos is an open-source blockchain protocol for assets and
            applications backed by a global community of validators,
            researchers, and builders. The Tezos protocol is secure, upgradable,
            and built to last.
          </p>
          <div
            className={
              isDark ? "infra-paraText dark-infra-paraText" : "infra-paraText"
            }
          >
            <p
              className={
                isDark
                  ? "infra-paraHeading dark-infra-paraHeading"
                  : "infra-paraHeading"
              }
            >
              Secure, Institutional Grade Smart Contracts
            </p>
            <p className={
                isDark
                  ? "infra-paraSubHeading dark-infra-paraSubHeading"
                  : "infra-paraSubHeading"}>
              Tezos is designed to provide the safety and code correctness
              required for assets and other high value use cases. Its native
              smart contract language, Michelson, facilitates formal
              verification, a methodology commonly used in mission-critical
              environments such as the aerospace, nuclear, and semiconductor
              industries.
            </p>
            <p
              className={
                isDark
                  ? "infra-paraHeading dark-infra-paraHeading"
                  : "infra-paraHeading"
              }
            >
              Upgradable to the State of the Art{" "}
            </p>
            <p className={
                isDark
                  ? "infra-paraSubHeading dark-infra-paraSubHeading"
                  : "infra-paraSubHeading"}>
              Tezos’ modular architecture and formal upgrade mechanism allow the
              network to propose and adopt new technological innovations
              smoothly as they emerge. These aspects, combined with Tezos’
              on-chain invoicing mechanism, enable the protocol to remain the
              state-of-the-art long into the future  without sacrificing
              community consensus.
            </p>
            <p
              className={
                isDark
                  ? "infra-paraHeading dark-infra-paraHeading"
                  : "infra-paraHeading"
              }
            >
              Open Participation and Incentive Alignment{" "}
            </p>
            <p className={
                isDark
                  ? "infra-paraSubHeading dark-infra-paraSubHeading"
                  : "infra-paraSubHeading"}>
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
