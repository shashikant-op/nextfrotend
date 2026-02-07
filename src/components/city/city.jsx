'use client';

import React from "react";
import { MdLocationOn, MdVerified } from "react-icons/md";

const City = () => {
  const brandColor = "#8000DB";
  
  const cities = [
    "कटिहार",
    "पूर्णिया",
    "भागलपुर",
    "कुर्सेला",
    "पोठिया",
    "पटना",
    "मोतिहारी",
  ];

  return (
    <div className="w-full overflow-hidden py-12 flex flex-col gap-8 bg-[#FBFBFF]">
      {/* --- SECTION HEADER --- */}
      <div className="w-full px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-[1px] w-8 bg-purple-200"></div>
          <span className="text-[10px] font-bold tracking-[0.4em] text-purple-600 uppercase">
            Our Presence
          </span>
          <div className="h-[1px] w-8 bg-purple-200"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
          Working Across <span style={{ color: brandColor }}>Bihar</span>
        </h2>
        <p className="text-slate-500 text-sm md:text-base font-light max-w-lg">
          Bringing premium handcrafted furniture to your doorstep in every major hub.
        </p>
      </div>

      {/* --- INFINITE AUTO-SCROLLING TICKER --- */}
      <div className="relative flex overflow-x-hidden border-y border-slate-100 bg-white py-8">
        {/* The Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {/* We map twice to create the seamless infinite loop effect */}
          {[...cities, ...cities].map((city, index) => (
            <div
              key={index}
              className="mx-4 flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all group cursor-default"
            >
              <div className="p-2 rounded-full bg-purple-50 group-hover:bg-purple-600 transition-colors duration-300">
                <MdLocationOn className="text-purple-600 group-hover:text-white text-xl" />
              </div>
              <span className="text-lg font-bold text-slate-700 tracking-tight group-hover:text-purple-900">
                {city}
              </span>
            </div>
          ))}
        </div>

        {/* Visual Polish: Side Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FBFBFF] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FBFBFF] to-transparent"></div>
      </div>

      {/* --- LUXURY BRAND PROMISE (HINDI QUOTE) --- */}
      <div className="relative w-full flex justify-center items-center py-6 px-6">
        {/* Artistic Background Brush SVG */}
        <div className="absolute opacity-[0.07] pointer-events-none scale-150">
          <svg width="400" height="100" viewBox="0 0 300 80" fill={brandColor}>
            <path d="M10,40 Q50,20 100,40 T200,40 T290,40 L290,50 Q200,70 100,50 T10,50 Z" />
          </svg>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-xl md:text-3xl font-serif font-medium text-slate-800 text-center leading-relaxed px-4">
            “हमारे यहाँ <span style={{ color: brandColor }} className="font-bold border-b-2 border-purple-200 italic">उचित मूल्य</span> पर लकड़ी का सामान मिलता है”
          </span>
          
          <div className="flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-inner">
            <MdVerified className="text-purple-500 text-sm" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Authentic Craftsmanship • Mohan Sharma
            </span>
          </div>
        </div>
      </div>

      {/* --- CSS ANIMATION INJECTOR --- */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        /* Pause marquee on hover for better accessibility */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default City;