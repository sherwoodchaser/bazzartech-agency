"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Blaka } from "next/font/google";
import GooeyNav from "./GooeyNav/GooeyNav";
import Magnet from "./Magnet/Magnet";
import { items } from "@/constants/index";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";
import { Menu, X } from "lucide-react";

const blaka = Blaka({
  weight: "400",
  subsets: ["latin"],
});

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="fixed top-10 z-20 w-[70%] bg-black/60 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-[#222] border-opacity/10 rounded-lg hidden md:block"
      >
        <BorderBeam
          duration={10}
          size={50}
          className="from-purple-600 via-purple-500 to-purple-400"
        />
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Image className="w-12 h-12" src={Logo} alt="Logo" />
            <span className={`${blaka.className} text-3xl`}>bazzartech</span>
          </h1>
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
          <Magnet magnetStrength={30}>
            <InteractiveHoverButton
              className="bg-white text-black border-none"
              classNameCircle="bg-purple-600"
            >
              Contactez-nous
            </InteractiveHoverButton>
          </Magnet>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <header className="fixed top-6 left-4 right-4 z-20 md:hidden">
        <div className="bg-black/60 backdrop-blur-md border border-[#222] rounded-lg px-4 py-3 flex items-center justify-between">
          <Image className="w-10 h-10" src={Logo} alt="Logo" />
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="bg-black/70 backdrop-blur-md mt-2 rounded-lg px-4 py-4 space-y-4 transition-all duration-300 ease-in-out transform animate-slide-down">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block text-white text-base"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
