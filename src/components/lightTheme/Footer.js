import React from "react";
import Grid from "@material-ui/core/Grid";
import footerStyles from "./styles/Footer.module.css";
import logo from "../../assets/logo.png";
import dribbble from "../../assets/Dribbble.svg";
import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import youtube from "../../assets/YouTube.svg";

function Footer() {
  return (
    <div className={footerStyles.container}>
      <Grid container>
        <Grid
          item
          className={[footerStyles.logo].join(" ")}
          xs={12}
          sm={12}
          md={7}
          lg={7}
        >
          <img src={logo} alt="" />
        </Grid>
        <Grid
          item
          className={footerStyles.margin}
          xs={12}
          sm={12}
          md={7}
          lg={7}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className={footerStyles.footerLinks}>
                    <p className={footerStyles.footerAlignLinks}>Home</p>
                    <p className={footerStyles.footerAlignLinks}>Pages</p>
                    <p className={footerStyles.footerAlignLinks}>Contact</p>
                    <p className={footerStyles.footerAlignLinks}>Blog</p>
                    <p className={footerStyles.footerAlignLinks}>Portfolio</p>
                  </div>
                </Grid>
                <Grid
                  item
                  className={footerStyles.footerContentSpacing}
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <div className={footerStyles.social}>
                    <img
                      src={dribbble}
                      alt=""
                      className={footerStyles.footerSocialLinks}
                    />
                    <img
                      src={facebook}
                      alt=""
                      className={footerStyles.footerSocialLinks}
                      style={{ width: "12px" }}
                    />
                    <img
                      src={twitter}
                      alt=""
                      className={footerStyles.footerSocialLinks}
                    />
                    <img
                      src={youtube}
                      alt=""
                      className={footerStyles.footerSocialLinks}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <p className={footerStyles.copyright}>
        © Copyright 2019 Tezos India Foundation - All Rights Reserved{" "}
      </p>
    </div>
  );
}

export default Footer;
