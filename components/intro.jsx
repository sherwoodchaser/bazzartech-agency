"use client";
import React from "react";
import { motion } from "framer-motion";
import RotatingText from "./RotatingText/RotatingText";
import { servicesWords } from "@/constants";
import HeroVideoDialog from "./magicui/hero-video-dialog";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      delayChildren: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

function Intro() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="text-center max-w-5xl mx-auto px-4 space-y-6"
    >
      <motion.h1
        variants={item}
        className="text-4xl md:text-6xl font-bold leading-tight text-white flex flex-col gap-5 items-center"
      >
        <span className="flex items-center justify-center gap-4">
          <span>Créez votre</span>
          <RotatingText
            texts={servicesWords}
            mainClassName="text-white bg-purple-600 w-[500px] rounded-full flex items-center justify-center px-4 py-1"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </span>
        <span>Avec BazzarTech 🚀</span>
      </motion.h1>

      <motion.p variants={item} className="text-white/70 text-base md:text-lg">
        Chez BazzarTech, nous aidons les entreprises à se démarquer sur le web —
        création de sites modernes, gestion de réseaux sociaux et production de
        vidéos engageantes. Confiez-nous le digital, concentrez-vous sur votre
        croissance.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-20 flex justify-center items-center flex-col"
      >
        <p className="text-white/80 text-lg mb-4 flex items-center gap-5">
          Découvrez ce que BazzarTech peut faire pour vous{" "}
          <span className="animate-bounce text-2xl bg-purple-600 w-[40px] h-[40px] rounded-full flex items-center justify-center">
            ↓
          </span>
        </p>
        <div className="w-[90vw] max-w-4xl aspect-video rounded-2xl border-8 border-purple-700 overflow-hidden">
          <HeroVideoDialog
            className="block dark:hidden border-none outline-none"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/F4yb0CBd4I4?si=QsIr5Ls-oEehuxSL"
            thumbnailSrc="https://img.youtube.com/vi/F4yb0CBd4I4/maxresdefault.jpg"
            thumbnailAlt="Dummy Video Thumbnail"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Intro;
