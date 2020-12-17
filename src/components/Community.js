import React, { Component } from "react";
import "../styles/Community.css";
import CommunityCard from "./constants/CommunityCard";
import CommunityCarousel from "./constants/CommunityCarousel";
import { carousel } from "./constants/Constant";
import CommunityBg from "./CommunityBg";
export class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communityCardData: "",
      value: 0,
    };
  }
  componentDidMount() {
    this.createCommunityCard();
  }
  createCommunityCard() {
    const array = [];
    carousel.members.map((membersDesc) => {
      array.push(
        <CommunityCard className="padding-com-carousel">
          <div className="align-com-card-content">
            <div className="align-com-img">
              <img src={membersDesc.image} alt="" className="com-img" />
            </div>
            <div className="align-com-card-desc">
              <p className="com-card-title">{membersDesc.name}</p>
              <p className="com-card-designation">{membersDesc.designation}</p>
              <p className="com-card-testimonial">{membersDesc.testimonial}</p>
            </div>
          </div>
        </CommunityCard>
      );
      this.setState({
        communityCardData: array,
      });
    });
  }
  render() {
    return (
      <div>
        <CommunityBg>
          <div className="com-headers">
            <h1>Our Community members about us</h1>
            <p>
              Our Community members about us Our Community members about us Our
              Community members about us
            </p>
          </div>
          <div className="align-carousel">
            <CommunityCarousel slides={this.state.communityCardData} />
          </div>
          <div className="com-info">
            <div>
              <p style={{ color: "#2DCA8C" }} className="com-numbers">
                900K+
              </p>
              <p className="com-info-header">Educational programe</p>
              <p className="com-info-subHeader">
                We are proud to provide our <br /> music app to so many people.
              </p>
            </div>
            <div>
              <p style={{ color: "#FFBE3D" }} className="com-numbers">
                2M+
              </p>
              <p className="com-info-header">People's community</p>
              <p className="com-info-subHeader">
                Our app has been downloaded <br /> by more than 2 million
                people.
              </p>
            </div>
            <div>
              <p style={{ color: "#FF715B" }} className="com-numbers">
                99.99%
              </p>
              <p className="com-info-header">Positive feedback</p>
              <p className="com-info-subHeader">
                We get mostly positive ratings <br /> for the quality of our
                app.
              </p>
            </div>
          </div>
        </CommunityBg>
      </div>
    );
  }
}

export default Community;
