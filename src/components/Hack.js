import React, { Component } from "react";
//import Hidden from "@material-ui/core/Hidden";
import "../styles/Community.css";
import "../styles/Hack.css";
import HackCard from "./constants/HackCard";
import HackCarousel from "./constants/HackCarousel";
import { hack_carousel } from "./constants/Constant";
//import { carousel } from "./constants/Constant";
//import CommunityBg from "./CommunityBg";
import HackBg from "./HackBg";
export class Hack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hackCardData: "",
      value: 0,
    };
  }
  componentDidMount() {
    this.createHackCard();
  }
  createHackCard() {
    const array = [];
    hack_carousel.hacks.forEach((hack) => {
      array.push(
        <HackCard>
          <div className='align-com-card-content'>
            <div className='align-com-card-desc'>
              <div style={{ textAlign: "center" }}>
                <h1 className='hack-card-title'>{hack.name}</h1>
              </div>
              <div style={{ textAlign: "center", marginTop: "3%" }}>
                <h2 className='hack-card-organization'>{hack.organization}</h2>
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <h2 className='hack-card-date'>{hack.dates}</h2>
              </div>
              <div className='hack-card-button'>
                <a href={hack.link} class='btn-1'>
                  Check out
                </a>
              </div>
            </div>
          </div>
        </HackCard>
      );
      this.setState({
        hackCardData: array,
      });
    });
  }
  render() {
    return (
      <div id='hacks'>
        <HackBg>
          <div className='com-headers'>
            <h1>Our hackathon initiatives</h1>
            <h2>Upcoming Hacks</h2>
          </div>
          <div className='align-carousel'>
            <HackCarousel slides={this.state.hackCardData} />
          </div>
        </HackBg>
      </div>
    );
  }
}

export default Hack;
