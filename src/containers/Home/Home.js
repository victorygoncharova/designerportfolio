import React, { Component } from "react";
import AboutSection from "../../components/Sections/AboutSection/AboutSection";
import LinksSection from "../../components/Sections/LinksSection/LinksSection";
import WelcomeSection from "../../components/Sections/WelcomeSection/WelcomeSection";
import WorkSection from "../../components/Sections/WorkSection/WorkSection";

class Home extends Component {
  render() {
    return (
      <>
        <WelcomeSection />
        <AboutSection />
        <LinksSection />
        <WorkSection />
      </>
    );
  }
}

export default Home;
