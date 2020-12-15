import React, { Component } from "react";
import { StyleProvider } from "./contexts/StyleContext";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Activity from "./components/Activity";
import Infra from "./components/Infra";
import Footer from "./components/Footer";
import Community from "./components/Community";
import Team from "./components/Team";
import FAQ from "./components/FAQ";

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
          <Partners />
          <Activity />
          <Infra />
          <Community />
          <Team />
          <FAQ />
          <Footer />
        </StyleProvider>
      </div>
    );
  }
}

export default Main;
