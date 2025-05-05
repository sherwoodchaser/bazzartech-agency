"use client";

import { Spotlight } from "./ui/spotlight-new";

function HeroSection({ children }) {
  return (
    <section className="relative w-full pt-54 pb-20 bg-[#0b0b0b] flex items-center justify-center">
      <Spotlight />

      {/* Background Grid - This remains the same, but will now be more visible in the center */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:100px_100px] opacity-3 z-0" />

      {/* Foreground Content - Z-index increased to ensure it's above the new glass layer */}
      <div className="relative z-30 w-[70%]">{children}</div>
    </section>
  );
}

export default HeroSection;
