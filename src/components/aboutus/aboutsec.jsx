"use client";

import React from "react";
import { useState } from "react";
const Aboutsec = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <section className="bg-gray-50 py-12  md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8" onClick={() => setShowMore(!showMore)}>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Who We Are
          </h1>
          <h3 className="text-lg md:text-xl text-gray-600 font-medium">
            About Sharma Furniture Works
          </h3>
        </div>
        {/* Content */}
            {showMore ? (
                    <div className="bg-transparent  p-2 md:p-10 leading-relaxed text-gray-700 text-justify border-l-4 border-purple-600">
          <p className="mb-4">
            Welcome to <span className="font-semibold text-gray-900">Sharma Furniture Works</span> — your trusted destination for <strong>premium handcrafted wooden furniture in India</strong>. With over <strong>30 years of experience</strong>, we specialize in creating durable, elegant, and timeless furniture from <strong>pure Sheesham wood (Indian Rosewood)</strong>. Our <em>luxury solid wood furniture</em> is known for its strength, beauty, and sustainability.
          </p>

          <p className="mb-4">
            At Sharma Furniture Works, <strong>customer satisfaction and trust</strong> are our top priorities. That’s why we proudly offer an <strong>unmatched 100-year warranty</strong> on every piece. Our skilled artisans and experienced furniture designers craft each product with <strong>precision engineering and artistic detail</strong>, ensuring exclusive designs you won’t find anywhere else.
          </p>

          <p className="mb-4">
            Whether you need <strong>custom-made furniture</strong>, designer beds, dining tables, sofas, or wardrobes, we create bespoke solutions to match your style and space. We also offer <strong>furniture repair, restoration, and professional repainting services</strong> to keep your pieces looking brand new.
          </p>

          <p>
            Choose Sharma Furniture Works for <strong>quality, craftsmanship, and furniture that lasts for generations</strong> — where <strong>heritage meets modern design</strong>.
          </p>
        </div>
            ):("")}
        
        
      </div>
    </section>
  );
};

export default Aboutsec;
