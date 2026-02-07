"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    /* Background set to #8000DB with White text */
    <footer className="w-full select-none bg-[#8000DB] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">

        {/* Brand & Narrative */}
        <div className="lg:max-w-xs space-y-4">
          <h2 className="text-[22px] font-bold tracking-tighter uppercase text-white">
            Sharma <span className="font-light opacity-80">Furniture Works</span>
          </h2>
          <p className="text-[14px] leading-relaxed opacity-70 font-light">
            Crafting contemporary pieces with a matte finish and visible soul. 
            Focused on transparency, durability, and the pale beauty of natural grain.
          </p>
          <div className="flex items-center gap-2 text-[12px] opacity-80 font-medium italic">
            <FaMapMarkerAlt className="text-white" />
            Sameli, Katihar, Bihar
          </div>
        </div>

        {/* Navigation - Clean Grid */}
        <div className="grid grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white mb-5 opacity-90">
              Discovery
            </h3>
            <ul className="text-[14px] opacity-70 space-y-3 font-light">
              <li><Link href="/" className="hover:opacity-100 hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link href="/shop" className="hover:opacity-100 hover:translate-x-1 transition-all inline-block">Collections</Link></li>
              <li><Link href="/about" className="hover:opacity-100 hover:translate-x-1 transition-all inline-block">Our Process</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 hover:translate-x-1 transition-all inline-block">Visit Workshop</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white mb-5 opacity-90">
              Resources
            </h3>
            <ul className="text-[13px] opacity-70 space-y-3 font-light">
              <li><Link href="/furniture-shop-sameli-katihar" className="hover:underline decoration-white/30">Local Guide</Link></li>
              <li><Link href="/furniture-buying-guide-bihar" className="hover:underline decoration-white/30">Buying Guide</Link></li>
              <li><Link href="/best-furniture-deals-bihar" className="hover:underline decoration-white/30">Seasonal Deals</Link></li>
            </ul>
          </div>
        </div>

        {/* Connectivity */}
        <div className="space-y-6">
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white opacity-90">
            Social Studio
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-[#8000DB] transition-all shadow-lg"><FaFacebookF size={14} /></a>
            <a href="https://www.instagram.com/sharmafurnituresameli/" className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-[#8000DB] transition-all shadow-lg"><FaInstagram size={14} /></a>
            <a href="https://wa.me/+919006056800" className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-[#8000DB] transition-all shadow-lg"><FaWhatsapp size={14} /></a>
          </div>
          <div className="pt-2">
            <p className="text-[10px] opacity-60 uppercase tracking-widest leading-loose">
              Support: <br />
              <span className="text-white font-medium">info@sharmafurniture.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Base - High Contrast Split */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] tracking-tight opacity-60">
          © {new Date().getFullYear()} SHARMA FURNITURE WORKS. DEFINED BY GRAIN.
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest opacity-60">
          <a href="#" className="hover:opacity-100">Privacy Policy</a>
          <a href="#" className="hover:opacity-100">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;