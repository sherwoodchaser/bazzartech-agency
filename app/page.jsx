import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Intro from "@/components/intro";
import React from "react";

function Home() {
  return (
    <>
      <HeroSection>
        <Header />
        <Intro />
      </HeroSection>
      <AboutSection />
    </>
  );
}

export default Home;
