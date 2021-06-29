import React, { Component } from "react";
import { StyleProvider } from "./contexts/StyleContext";
import Hero from "./components/Hero";
// import Partners from "./components/Partners";
import Activity from "./components/Activity";
import Infra from "./components/Infra";
import Footer from "./components/Footer";
import Community from "./components/Community";
import Team from "./components/Team";
// import Blog from "./components/Blog";
// import FAQ from "./components/FAQ";
import YtVideos from "./components/YtVideos";
import Hack from "./components/Hack";
import FellowshipBanner from "./components/FellowshipBanner";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };
  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Hero />
          {/* <Partners /> */}
          <Activity />
          <Infra />
          <Community />
          <YtVideos />
          <Hack />
          <Team />
          <FellowshipBanner />
          {/* <Blog />
          <FAQ /> */}
          <Footer />
        </StyleProvider>
      </div>
    );
  }
}

export default Main;
