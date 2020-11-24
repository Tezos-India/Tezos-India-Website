import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import communityStyles from "../styles/Community.module.css";
import {
  TextComponent,
  SubHeadingComponent,
} from "./common/TextComponent";
import CommunityCard from "./common/CommunityCard";
import sampleImg from "../assets/sample-img.png";

export class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  onChange = (value) => this.setState({ value });
  render() {
    return (
      <div className={communityStyles.container}>
        <div className={communityStyles.heading}>
          <p className={communityStyles.header}>Our Community members <br/> about us</p>
          <TextComponent
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            componentStyle={communityStyles.alignHeader}
          />
          <TextComponent text={"Lorem ipsum dolor sit amet."} />
        </div>
        <div className={communityStyles.carouselBg}>
          <Carousel arrows className={communityStyles.carousel}>
            <div>
              <CommunityCard>
                <div className={communityStyles.card}>
                  <div className={communityStyles.cardContainer}>
                    <img
                      src={sampleImg}
                      alt=""
                      className={communityStyles.cardImg}
                    />
                  </div>
                  <div>
                    <SubHeadingComponent
                      text={"Om Malviya"}
                      componentStyle={communityStyles.personName}
                    />
                    <p className={communityStyles.subHeading}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <TextComponent
                      componentStyle={communityStyles.testimonial}
                      text={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper magna justo, sed aliquam purus dapibus vel. Vestibulum posuere faucibus sem quis sagittis."
                      }
                    />
                  </div>
                </div>
              </CommunityCard>
            </div>

            <div>
              <CommunityCard>
                <div className={communityStyles.card}>
                  <div className={communityStyles.cardContainer}>
                    <img
                      src={sampleImg}
                      alt=""
                      className={communityStyles.cardImg}
                    />
                  </div>
                  <div>
                    <SubHeadingComponent
                      text={"ABC"}
                      componentStyle={communityStyles.personName}
                    />
                    <p className={communityStyles.subHeading}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <TextComponent
                      componentStyle={communityStyles.testimonial}
                      text={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper magna justo, sed aliquam purus dapibus vel. Vestibulum posuere faucibus sem quis sagittis."
                      }
                    />
                  </div>
                </div>
              </CommunityCard>
            </div>

            <div>
              <CommunityCard>
                <div className={communityStyles.card}>
                  <div className={communityStyles.cardContainer}>
                    <img
                      src={sampleImg}
                      alt=""
                      className={communityStyles.cardImg}
                    />
                  </div>
                  <div>
                    <SubHeadingComponent
                      text={"XYZ"}
                      componentStyle={communityStyles.personName}
                    />
                    <p className={communityStyles.subHeading}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <TextComponent
                      componentStyle={communityStyles.testimonial}
                      text={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper magna justo, sed aliquam purus dapibus vel. Vestibulum posuere faucibus sem quis sagittis."
                      }
                    />
                  </div>
                </div>
              </CommunityCard>
            </div>
          </Carousel>
        </div>
        <div className={communityStyles.info}>
          <div className={communityStyles.infoContent}>
            <p
              className={communityStyles.infoHeading}
              style={{ color: "#2DCA8C" }}
            >
              900K+
            </p>
            <p className={communityStyles.infoSubHeading}>
              Educational programe
            </p>
            <p className={communityStyles.infoDesc}>
              We are proud to provide our <br /> music app to so many people.
            </p>
          </div>
          <div className={communityStyles.infoContent}>
            <p
              className={communityStyles.infoHeading}
              style={{ color: "#FFBE3D" }}
            >
              2M+
            </p>
            <p className={communityStyles.infoSubHeading}>People's community</p>
            <p className={communityStyles.infoDesc}>
              Our app has been downloaded <br /> by more than 2 million people.
            </p>
          </div>
          <div className={communityStyles.infoContent}>
            <p
              className={communityStyles.infoHeading}
              style={{ color: "#FF715B" }}
            >
              99.99%
            </p>
            <p className={communityStyles.infoSubHeading}>Positive feedback</p>
            <p className={communityStyles.infoDesc}>
              We get mostly positive ratings for <br /> the quality of our app.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
