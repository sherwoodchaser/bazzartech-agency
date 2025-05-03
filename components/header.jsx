import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import GooeyNav from "./GooeyNav/GooeyNav";
import Magnet from "./Magnet/Magnet";

function Header() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <header className="fixed top-10  w-[70%] bg-[#12111E]/90 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-[#23213d] rounded-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <h1 className="text-2xl font-bold">bazzartech</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={500}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </nav>
        <Magnet magnetStrength={10}>
          <Button
            variant="default"
            className="bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
          >
            Contact us
          </Button>
        </Magnet>
      </div>
    </header>
  );
}

export default Header;
