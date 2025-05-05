"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Blaka } from "next/font/google";
import GooeyNav from "./GooeyNav/GooeyNav";
import Magnet from "./Magnet/Magnet";
import { items } from "@/constants/index";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";

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
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="fixed top-10 z-20 w-[70%] bg-black/60 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-[#222] border-opacity/10 rounded-lg"
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
  );
}

export default Header;
