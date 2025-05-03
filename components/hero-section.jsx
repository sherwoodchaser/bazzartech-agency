import { cn } from "@/lib/utils";

function HeroSection({ children }) {
  return (
    <div className="relative flex h-screen w-full  bg-[#0D0B13] overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,#111022_1px,transparent_1px),linear-gradient(to_bottom,#111022_1px,transparent_1px)]"
        )}
      />

      {/* Blurred Accent Circles */}
      <div className="size-[50vh] rounded-full absolute right-[-10rem] bg-[#1B1B30] blur-[10rem] z-10" />
      <div className="size-[50vh] rounded-full absolute left-[-10rem] bg-[#1B1B30] blur-[10rem] z-10" />

      {/* Radial vignette with soft fade and no hard center mask */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-black/30 backdrop-blur-md [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />

      {/* Main Content */}
      <div className="w-[70%] mx-auto py-[3rem] relative z-30 text-white space-y-10">
        {children}
      </div>
    </div>
  );
}

export default HeroSection;
