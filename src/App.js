import "./App.css";
import React, { useState } from "react";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Activity from "./components/Activity";
import Infra from "./components/Infra";
import Community from "./components/Community";
import Team from "./components/Team";
import Blogs from "./components/Blogs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {/* <GlobalStyles />
      <StyledApp>
      <button onClick={() => themeToggler()}>Change Theme</button> */}
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
    
    {/* </StyledApp> */}
    </ThemeProvider>
  );
}

export default App;
