'use client';
import Head from "next/head";
import { useState } from "react";
import {
  FaCouch, FaBed, FaUtensils, FaBuilding,
  FaCheckCircle, FaMapMarkerAlt, FaSearch,
  FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaUserCircle, FaAward
} from "react-icons/fa";

export default function FurnitureShop() {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const brandColor = "#8000DB"; // Your custom color applied here

  const recommendations = {
    sofa: "Explore our premium L-shaped sofas. We specialize in minimalist fabrics that complement our pale wood frames.",
    bed: "Our signature Teak beds feature a 'Thin White Spirit Polish'—expect a cool ash/pale beige tone, ultra-low matte reflection (5-10%), and high grain visibility.",
    dining: "6-seater Sheesham sets available with high-transparency finishes to emphasize natural wood patterns.",
    default: "We offer custom beds, sofas, and wardrobes. Ask about our 'Thin White Spirit Polish' for a modern, matte look."
  };

  const handleSearch = () => {
    const key = Object.keys(recommendations).find(k => query.toLowerCase().includes(k));
    setSuggestion(recommendations[key] || recommendations.default);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-slate-900 selection:bg-purple-100">
      <Head>
        <title>Sharma Furniture Work’s | Premium Bihar Craftsmanship</title>
      </Head>

      {/* --- HERO SECTION --- */}
      <header style={{ backgroundColor: brandColor }} className="text-white py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold mb-6">
             Katihar • Purnea • Bhagalpur • Patna
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Sharma Furniture <span className="text-purple-300">Work’s</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl font-light leading-relaxed">
            Where traditional artistry meets the modern "Thin White Spirit" finish.
          </p>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 -mt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: CONTENT (Takes 8 columns on large screens) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* AI Finder - Optimized Layout */}
            <section className="bg-white rounded-[2rem] shadow-2xl shadow-purple-900/5 p-8 md:p-12 border border-purple-50">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: brandColor }}>
                <FaSearch /> Intelligent Finder
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What are you looking for?"
                  className="flex-[3] rounded-2xl border-2 border-slate-100 p-5 outline-none focus:border-purple-500 transition-all text-lg shadow-sm"
                />
                <button
                  onClick={handleSearch}
                  style={{ backgroundColor: brandColor }}
                  className="flex-1 text-white px-10 py-5 rounded-2xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg"
                >
                  Search
                </button>
              </div>
              {suggestion && (
                <div className="mt-8 p-6 bg-purple-50 rounded-2xl border-l-8 border-purple-600 animate-in fade-in zoom-in duration-300">
                  <p className="text-purple-900 text-lg leading-relaxed">{suggestion}</p>
                </div>
              )}
            </section>

            {/* About Section - Grid Layout for desktop */}
            <section className="bg-white rounded-[2rem] shadow-sm p-8 md:p-12 border border-slate-100">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-1 w-12 rounded-full" style={{ backgroundColor: brandColor }}></div>
                <h2 className="text-3xl font-bold text-slate-800">Our Craftsmanship</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Mohan Sharma */}
                <div className="group">
                  <div className="mb-6 relative w-full aspect-square md:aspect-[4/5] rounded-3xl bg-slate-100 overflow-hidden border border-slate-200">
                    <img 
  src="https://github.com/user-attachments/assets/4271a020-625c-41d0-8662-c355568be997" 
  alt="Mohan Sharma" 
  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" 
/><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white text-sm font-medium">Founder & Master Carver</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mohan Sharma</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Specialist in high-transparency polishes that emphasize natural wood grain.
                  </p>
                </div>

                {/* Ravikant Sharma */}
                <div className="group">
                  <div className="mb-6 relative w-full aspect-square md:aspect-[4/5] rounded-3xl bg-slate-100 overflow-hidden border border-slate-200">
                    <img src="https://github.com/user-attachments/assets/d9ea1e3b-f3f4-4490-a810-f93f5e3512b8" alt="Ravikant Sharma" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white text-sm font-medium">Head of Operations</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Ravikant Sharma</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Ensuring that every custom piece meets our 5-10% matte reflection standard.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: STICKY SIDEBAR (Takes 4 columns on large screens) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-8">
            <div style={{ backgroundColor: brandColor }} className="rounded-[2rem] p-8 text-white shadow-2xl shadow-purple-200">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaPhoneAlt className="text-purple-300" /> Quick Connect
              </h3>
              <div className="space-y-6">
                <a href="tel:+919006056800" className="block p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors">
                  <p className="text-purple-200 text-xs font-bold uppercase mb-1">Call for Quote</p>
                  <p className="text-xl font-medium">+91 90060 56800</p>
                </a>
                <a href="mailto:sharmafurniture@gmail.com" className="block p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors">
                  <p className="text-purple-200 text-xs font-bold uppercase mb-1">Email Inquiry</p>
                  <p className="text-sm truncate">sharmafurnitureworks000@gmail.com</p>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Sameli', 'Katihar', 'Purnea', 'Bhagalpur', 'Patna', 'Motihari', 'Kursela'].map(city => (
                  <span key={city} className="bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-sm font-semibold border border-slate-100 hover:border-purple-200 transition-colors">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </main>

      
    </div>
  );
}