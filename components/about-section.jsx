"use client";
import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
      className="relative w-full bg-[#fff] text-black overflow-hidden py-44 px-6 md:px-20 z-10"
      id="about"
    >
      {/* Ghost Heading */}
      <h2 className="absolute top-40 left-1/2 -translate-x-1/2 text-[140px] md:text-[220px] font-black text-black/5 tracking-tight select-none pointer-events-none z-0">
        BAZZARTECH
      </h2>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-x-10 z-10">
        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold leading-snug">
            Créez <span className="text-[#b18cff]">l'expérience digitale</span>{" "}
            de demain
          </h3>
          <p className="text-lg text-black/70">
            BazzarTech est une agence digitale créative spécialisée dans la
            transformation d'idées en solutions visuelles captivantes. De la
            conception de sites web modernes à la création de stratégies
            digitales percutantes, nous accompagnons les marques ambitieuses.
          </p>
          <p className="text-lg text-black/70">
            Notre approche repose sur le design émotionnel, la technologie de
            pointe, et l'innovation constante pour garantir un impact maximal.
          </p>
        </motion.div>

        {/* 3D Model Container with Video Aspect */}
        <motion.div
          className="flex"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full opacity-90  bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden relative z-10">
            {/* Insert your Three.js Canvas here */}
            <div id="three-container" className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
