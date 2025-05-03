import React from "react";
import { Button } from "./ui/button";
import MagnetLines from "./MagnetLines/MagnetLines";
import { FlipWords } from "./ui/flip-words";

function Intro() {
  const words = ["websites", "social media", "e-commerce store", "portfolio"];
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center  gap-5">
        {/* Left content */}
        <div className="space-y-6 flex-2">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
            we can help you build <br />
            <p className="">
              <FlipWords words={words} className="text-purple-500" />
            </p>
          </h1>
          <p className="text-lg md:text-xl text-white/70">
            Bazzartech helps businesses dominate social media and boost ROI
            through data-driven advertising, creative storytelling, and viral
            growth strategies.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-purple-700 text-white hover:bg-purple-800"
            >
              Get Started
            </Button>
            <Button variant="link" size="lg" className="text-white">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right side spacer (to balance layout) */}
        <div className="hidden md:flex">
          <MagnetLines
            rows={9}
            columns={9}
            containerSize="60vmin"
            lineColor="purple"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
