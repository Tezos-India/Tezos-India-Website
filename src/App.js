import "./App.css";
import React from "react";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Activity from "./components/Activity";
import Infra from "./components/Infra";
import Community from "./components/Community";
import Team from "./components/Team";
import Blogs from "./components/Blogs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
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

export default App;
