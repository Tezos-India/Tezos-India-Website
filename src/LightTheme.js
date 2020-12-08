import "./App.css";
import React from "react";
import Hero from "./components/lightTheme/Hero";
import Partners from "./components/lightTheme/Partners";
import Activity from "./components/lightTheme/Activity";
import Infra from "./components/lightTheme/Infra";
import Community from "./components/lightTheme/Community";
import Team from "./components/lightTheme/Team";
import Blogs from "./components/lightTheme/Blogs";
import FAQ from "./components/lightTheme/FAQ";
import Footer from "./components/lightTheme/Footer";

function LightTheme() {
  return (
    <div>
      <Hero />
      <Partners />
      <Activity />
      <Infra />
      <Community />
      <Team />
      <Blogs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default LightTheme;
