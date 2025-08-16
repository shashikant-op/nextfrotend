"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="!w-full bg-purple-900 text-white px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col  justify-center sm:flex-row  sm:justify-between gap-6">

        {/* Company Info */}
        <div className="sm:basis-1/3 w-full flex  justify-center flex-col sm:flex-none">
          <span className="text-xl font-bold mb-2">Sharma Furniture Works</span>
          <span className="text-sm text-gray-400">
            Your one-stop shop for everything you need. Affordable. Fast. Reliable.
          </span>
        </div>

        {/* Quick Links */}
        <div className="sm:basis-1/3 w-full ">
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <a href="/furniture-shop-sameli-katihar" className="text-amber-700 hover:underline">Furniture Shop in Sameli Katihar</a>
            <a href="/furniture-buying-guide-bihar" className="text-amber-700 hover:underline">Furniture Buying Guide in Bihar</a>
            <a href="/best-furniture-deals-bihar" className="text-amber-700 hover:underline">Best Furniture Deals in Bihar</a>
          </ul>
        </div>

        {/* Socials */}
        <div className="sm:basis-1/3 w-full">
          <h3 className="text-md font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-lg">
            <a href="#" className="hover:text-white" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="hover:text-white" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/sharma.furnitureworks?igsh=aDRrbzN5bTR5eDF4" className="hover:text-white" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-700 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sharma Furniture Works. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
