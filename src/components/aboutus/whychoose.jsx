import React from "react";
import { FaAward, FaUsers, FaTools } from "react-icons/fa";

const WhyChoose = () => {
  const brandColor = "#8000DB";

  const features = [
    {
      icon: <FaAward />,
      title: "100% Sheesham",
      desc: "Seasoned wood with 100-year legacy."
    },
    {
      icon: <FaUsers />,
      title: "Expert Artisans",
      desc: "Handcrafted by the Sharma family."
    },
    {
      icon: <FaTools />,
      title: "Matte Finish",
      desc: "Signature Thin White Spirit Polish."
    }
  ];

  return (
    <section className="bg-[#0F172A] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Condensed Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black tracking-tighter mb-2">
              Why <span style={{ color: brandColor }}>Sharma Furniture?</span>
            </h2>
            <p className="text-slate-400 text-sm font-light">
              30 years of master craftsmanship in Bihar. We specialize in 
              high-grain visibility and structural durability.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-white/10 mb-2 mx-8"></div>
        </div>

        {/* Compact Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all flex items-start gap-4"
            >
              <div 
                style={{ backgroundColor: `${brandColor}20`, color: brandColor }}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform"
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;