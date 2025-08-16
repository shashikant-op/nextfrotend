import React from "react";
import { FaAward, FaUsers, FaThumbsUp } from "react-icons/fa";

const WhyChoose=()=>{
    return(
         <section className="bg-gray-800 text-white px-6 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4">
        Why Choose Sharma Furniture Work's
      </h2>

      {/* Description */}
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
       With over 30 years of expertise, Sharma Furniture Works is your 
       trusted choice for premium handcrafted furniture. We use only 100%
        pure Sheesham wood, ensuring unmatched durability and elegance. 
        Every piece comes with a 100-year warranty and is handmade by skilled artisans with exclusive, engineer-designed styles. To keep your furniture looking its best
       , we also provide professional repair and repainting services.
      </p>

      {/* Icons and Features */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Superior Quality */}
        <div className="flex flex-col items-center text-center">
          <FaAward className="text-4xl mb-2 text-gray-400" />
          <span className="font-medium">Superior Quality</span>
        </div>

        {/* Professional Team */}
        <div className="flex flex-col items-center text-center">
          <FaUsers className="text-4xl mb-2 text-gray-400" />
          <span className="font-medium">Professional Team</span>
        </div>

        {/* Affordable Luxury */}
        <div className="flex flex-col items-center text-center">
          <FaThumbsUp className="text-4xl mb-2 text-gray-400" />
          <span className="font-medium">Affordable Luxury</span>
        </div>
      </div>
    </section>
    )
}
export default WhyChoose;
