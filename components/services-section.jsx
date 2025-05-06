"use client";
import { services } from "@/constants";
import { motion } from "framer-motion";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";

function ServicesSection() {
  return (
    <section
      className="relative w-full text-white bg-[#0b0b0b] overflow-hidden py-20 md:py-44 px-6 md:px-20"
      id="services"
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:100px_100px] opacity-4 z-0" />

      <div className="relative max-w-7xl mx-auto flex flex-col gap-y-10">
        <div>
          <h3 className="text-4xl md:text-5xl font-bold leading-snug">
            Nos Services
          </h3>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          <p className="text-white/90 text-2xl  leading-relaxed mt-10">
            BazzarTech met à votre disposition son expertise à travers ces
            services clés.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceItem
              key={i}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              pros={service.pros}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceItem = ({ title, description, Icon, pros, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#101010] p-8 md:p-10 transition-all duration-500 hover:scale-[1.03]"
    >
      {/* Purple expanding circle */}
      <div className="absolute md:left-10 md:top-10 w-12 h-12 bg-purple-700 rounded-full scale-100 group-hover:scale-[25] transition-transform duration-700 ease-in-out z-0" />

      {/* White shrinking circle: initially huge and invisible, becomes visible and shrinks on hover */}
      <div className="absolute  md:left-10 md:top-10 w-12 h-12 bg-white rounded-full scale-[25] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-in-out delay-300 z-10" />

      {/* Content */}
      <div className="relative z-20">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg text-white group-hover:text-black transition-colors duration-500 delay-300">
            <Icon className="w-6 h-6 z-30 relative" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white tracking-tight transition-colors group-hover:text-white">
            {title}
          </h3>
          <p className="text-md text-pretty text-white/80 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Pros Section */}
        {pros && pros.length > 0 && (
          <ul className="mt-4 space-y-2 text-md text-neutral-300">
            {pros.map((pro, i) => (
              <li key={i} className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                {pro}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default ServicesSection;
