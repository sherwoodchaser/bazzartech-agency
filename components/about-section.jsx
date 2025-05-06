"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LazySpline = React.lazy(() =>
  import("@splinetool/react-spline").then((mod) => ({ default: mod.default }), {
    ssr: false,
  })
);

function AboutSection() {
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpline(true), 800); // delay loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full text-white overflow-hidden py-44 px-6 md:px-20 z-10"
      id="about"
    >
      <h2 className="absolute top-40 left-1/2 -translate-x-1/2 text-[140px] md:text-[220px] font-black text-white/5 tracking-tight select-none pointer-events-none z-0">
        BAZZARTECH
      </h2>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-x-10 z-10">
        {/* Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold leading-snug">
            Créez <span className="text-purple-600">l'expérience digitale</span>{" "}
            de demain
          </h3>
          <p className="text-lg font-medium text-justify text-white/80">
            BazzarTech est une agence digitale créative spécialisée dans la
            transformation d'idées en solutions visuelles captivantes. De la
            conception de sites web modernes à la création de stratégies
            digitales percutantes, nous accompagnons les marques ambitieuses.
          </p>
          <p className="text-lg font-medium text-justify text-white/80">
            Notre approche repose sur le design émotionnel, la technologie de
            pointe, et l'innovation constante pour garantir un impact maximal.
          </p>
        </motion.div>

        {/* 3D Model */}
        <motion.div
          className="flex"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-[500px] overflow-hidden">
            {showSpline && (
              <React.Suspense
                fallback={<div className="text-white p-4">Loading...</div>}
              >
                <figure
                  id="three-container"
                  className="w-full h-full scale-[1.3] pt-10 pointer-events-none"
                >
                  <LazySpline scene="https://prod.spline.design/7YjHA2W4ryizsLzc/scene.splinecode" />
                </figure>
              </React.Suspense>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
