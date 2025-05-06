import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Intro from "@/components/intro";
import PortfolioSection from "@/components/portfolio-section";
import ServicesSection from "@/components/services-section";
import VideoSimple from "@/components/video-simple";
import React from "react";

function Home() {
  return (
    <>
      <HeroSection>
        <Header />
        <Intro />
      </HeroSection>
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <VideoSimple />
    </>
  );
}

export default Home;
