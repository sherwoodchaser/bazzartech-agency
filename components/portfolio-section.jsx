"use client";
import { Marquee } from "./magicui/marquee";
import ProjectImage from "@/public/project.jpg"; // Use the correct alias path
import Image from "next/image";
import Noise from "./Noise/Noise";

function PortfolioSection() {
  return (
    <section
      className="relative w-full text-white bg-[#0b0b0b] overflow-hidden py-20 md:py-44 "
      id="portfolio"
    >
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <div className="relative max-w-7xl mx-auto flex flex-col px-6 md:px-0 mb-10">
        <div>
          <h3 className="text-4xl md:text-5xl font-bold leading-snug">
            Portfolio
          </h3>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />

          <p className="text-white/90 text-2xl  leading-relaxed mt-10">
            Voici quelques sites web réalisés par BazzarTech pour nos clients.
            Notre portfolio reflète notre savoir-faire et notre créativité au
            service de vos projets numériques.
          </p>
        </div>
      </div>
      <div>
        <Marquee pauseOnHover>
          {[...Array(6)].map((_, i) => (
            <ShowcaseProject key={i} image={ProjectImage} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

const ShowcaseProject = ({ image }) => {
  return (
    <div className="relative w-[220px] md:w-[260px] h-[480px] flex-shrink-0 overflow-hidden border border-neutral-800 bg-[#141414] shadow-inner hover:scale-105 transition-transform duration-300 mx-10 opacity-60 hover:opacity-90 grayscale hover:grayscale-0">
      <Image
        src={image}
        alt="Project Screenshot"
        fill
        className="object-cover"
        quality={90}
        sizes="(max-width: 768px) 220px, 260px"
      />
    </div>
  );
};

export default PortfolioSection;
