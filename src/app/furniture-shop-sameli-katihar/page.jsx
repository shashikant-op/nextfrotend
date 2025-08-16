'use client';
import Head from "next/head";
import { useState } from "react";
import {
  FaCouch, FaBed, FaUtensils, FaBuilding,
  FaCheckCircle, FaMapMarkerAlt, FaSearch,
  FaPhoneAlt, FaEnvelope, FaQuestionCircle
} from "react-icons/fa";

export default function FurnitureShopSameliKatihar() {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const recommendations = {
    sofa: "We recommend our premium L-shaped sofa set, perfect for living rooms in Katihar and Purnea.",
    bed: "Our solid teak wood king-size bed is a customer favorite in Bihar.",
    dining: "Try our 6-seater Sheesham wood dining table for durability and elegance.",
    office: "Our ergonomic office chairs and modern desks are perfect for productivity.",
    default: "We have sofas, beds, wardrobes, dining sets, and custom furniture available in Sameli, Katihar."
  };

  const handleSearch = () => {
    const key = Object.keys(recommendations).find(k =>
      query.toLowerCase().includes(k)
    );
    setSuggestion(recommendations[key] || recommendations.default);
  };

  return (
    <>
      <Head>
        <title>Sharma Furniture Work’s – Best Furniture Shop in Sameli, Katihar, Bihar</title>
        <meta
          name="description"
          content="Buy sofas, beds, dining tables, wardrobes & office furniture at Sharma Furniture Work’s in Sameli, Katihar, Bihar. Serving Purnea, Bhagalpur, Patna, Motihari, Pothiya, Kursela."
        />
        <meta
          name="keywords"
          content="furniture shop Katihar, buy sofa Purnea, wooden bed Bhagalpur, dining table Patna, office furniture Bihar, custom furniture Sameli"
        />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-10 font-sans">
        <div className="bg-primary rounded-2xl p-3 text-white">
          <h1 className="text-2xl   md:text-5xl font-bold text-center mb-8 leading-tight">
            Sharma Furniture Work’s – Best Furniture Shop in Sameli, Katihar, Bihar
          </h1>
        </div>
       

        <p className="mb-8 text-lg text-gray-700 leading-relaxed text-center">
          <strong>Sharma Furniture Work’s</strong>, owned by <strong>Mohan Sharma</strong> and managed by{" "}
          <strong>Ravikant Sharma</strong>, with product expertise from <strong>Shaligram Sharma</strong> and{" "}
          <strong>Ashok Sharma</strong>, offers high-quality furniture to customers in{" "}
          <strong>Sameli, Katihar, Bihar</strong> and across <strong>Purnea, Bhagalpur, Patna, Motihari, Pothiya, Kursela</strong>.
        </p>

        {/* Why Choose Us */}
        <section className="mb-10 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold text-primary flex items-center">
            <FaCheckCircle className="mr-2 text-secondary" /> Why Choose Us?
          </h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>🛋 Wide range – sofas, beds, dining sets, wardrobes, office furniture.</li>
            <li>✨ Custom-made designs tailored for your needs.</li>
            <li>💰 Affordable pricing for every budget.</li>
            <li>🏆 Trusted by Bihar families for decades.</li>
          </ul>
        </section>

        {/* Areas We Serve */}
        <section className="mb-10 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold text-primary flex items-center">
            <FaMapMarkerAlt className="mr-2 text-secondary" /> Areas We Serve
          </h2>
          <p className="mt-3 text-gray-700">
            We deliver furniture to <strong>Sameli, Katihar, Purnea, Bhagalpur, Patna, Motihari, Pothiya, Kursela</strong>.  
            Search <em>“furniture shop near me”</em> and choose Sharma Furniture Work’s for unmatched quality.
          </p>
        </section>

        {/* AI Furniture Finder */}
        <div className="bg-accent p-6 rounded-xl shadow-lg mb-10">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <FaSearch className="mr-2" /> AI Furniture Finder
          </h2>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type what you need... (sofa, bed, dining)"
            className="border border-secondary rounded-lg p-3 w-full focus:ring-2 focus:ring-primary outline-none mb-4"
          />
          <button
            onClick={handleSearch}
            className="bg-btn text-white px-5 py-2 rounded-lg hover:bg-primary transition"
          >
            Find My Furniture
          </button>
          {suggestion && <p className="mt-4 text-primary font-medium">{suggestion}</p>}
        </div>

        {/* FAQ Section */}
        <section className="mb-10 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold text-primary flex items-center">
            <FaQuestionCircle className="mr-2 text-secondary" /> Frequently Asked Questions
          </h2>
          <div className="mt-5 space-y-4 text-gray-700">
            <div>
              <p className="font-bold">Q: Where is Sharma Furniture Work’s located?</p>
              <p>A: Sameli, Katihar, Bihar – delivering across Purnea, Bhagalpur, Patna, Motihari, Pothiya, Kursela.</p>
            </div>
            <div>
              <p className="font-bold">Q: Do you make custom furniture?</p>
              <p>A: Yes, we design handcrafted furniture to match your style and space.</p>
            </div>
            <div>
              <p className="font-bold">Q: Do you offer home delivery?</p>
              <p>A: Yes, we deliver across all major cities in Bihar.</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-primary rounded-xl shadow p-6 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4 flex justify-center items-center">
            <FaPhoneAlt className="mr-2" /> Contact Us
          </h2>
          <p className="text-lg font-bold text-white">Sharma Furniture Work’s</p>
          <p className="text-gray-200">Sameli, Katihar, Bihar</p>
          <p className="text-gray-200 flex justify-center items-center gap-2"><FaPhoneAlt /> +91-9006056800</p>
          <p className="text-gray-200 flex justify-center items-center gap-2"><FaPhoneAlt /> +91-8051429677</p>
          <p className="text-gray-200 flex justify-center items-center gap-2"><FaEnvelope /> sharmafurnitureworks000@gmail.com</p>
        </section>
      </main>
    </>
  ); 
}
