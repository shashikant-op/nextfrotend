'use client';

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Exp = () => {
  const brandColor = "#8000DB";
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { end: 50, suffix: "Y", label: "Warranty" },
    { end: 500, suffix: "+", label: "Homes" },
    { end: 100, suffix: "+", label: "Designs" },
    { end: 45, suffix: "D", label: "Delivery" },
  ];

  return (
    <section ref={ref} className="bg-[#0F172A] py-12 px-6 overflow-hidden">
      <div className="max-w-6xl select-none mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative group flex flex-col items-center p-4 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] transition-all duration-500"
          >
            {/* Number Display */}
            <h3 
              style={{ color: 'white' }} 
              className="text-3xl md:text-4xl font-black tracking-tighter mb-1"
            >
              {inView && (
                <CountUp
                  end={stat.end}
                  duration={3}
                  suffix={stat.suffix}
                />
              )}
            </h3>

            {/* Label Display */}
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] group-hover:text-purple-400 transition-colors">
              {stat.label}
            </p>

            {/* Subtle Accent Line */}
            <div 
              style={{ backgroundColor: brandColor }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-1/3 transition-all duration-500 rounded-full"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Signature Disclaimer - Short & Minimal */}
      <div className="mt-8 text-center">
         <span className="text-[9px] font-medium text-slate-500 uppercase tracking-widest opacity-50">
           Handcrafted in Sameli, Katihar • Mohan Sharma Legacy
         </span>
      </div>
    </section>
  );
};

export default Exp;