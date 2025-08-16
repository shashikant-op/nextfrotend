'use client';
import Head from "next/head";
import { FaCouch, FaHammer, FaChair, FaQuestionCircle, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function FurnitureBuyingGuideBihar() {
  return (
    <>
      <Head>
        <title>Ultimate Furniture Buying Guide in Bihar – Sharma Furniture Work’s</title>
        <meta
          name="description"
          content="Learn how to choose the best furniture in Bihar. Sofa sets, beds, dining tables, wardrobes, and office furniture – Sharma Furniture Work’s, Sameli, Katihar."
        />
        <meta
          name="keywords"
          content="furniture buying guide Bihar, sofa Katihar, bed Purnea, dining table Bhagalpur, wardrobe Patna, office furniture Motihari"
        />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-10 font-sans">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8 leading-tight">
          <FaCouch className="inline-block text-secondary mr-2" />
          Ultimate Furniture Buying Guide in Bihar – Sharma Furniture Work’s
        </h1>

        {/* Intro */}
        <p className="mb-8 text-lg text-gray-700 leading-relaxed text-center">
          If you live in <strong>Katihar, Purnea, Bhagalpur, Patna, Motihari, Pothiya, Kursela</strong>, 
          finding the perfect furniture just got easier.  
          <strong> Sharma Furniture Work’s</strong>, owned by <strong>Mohan Sharma</strong> and 
          managed by <strong>Ravikant Sharma</strong>, with product expertise from{" "}
          <strong>Shaligram Sharma</strong> and <strong>Ashok Sharma</strong>, 
          brings you the finest selection in Bihar.
        </p>

        {/* Sections */}
        <section className="mb-8 bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-primary flex items-center">
            <FaMapMarkerAlt className="mr-2 text-secondary" /> Understand Your Needs
          </h2>
          <p className="mt-3 text-gray-700">
            Whether it’s a <strong>sofa set</strong> for your living room in Patna or a 
            <strong> king-size bed</strong> for your home in Katihar, choose furniture that 
            fits both your style and space.{" "}
            <a href="/furniture-shop-sameli-katihar" className="text-primary font-medium hover:underline">
              Visit Sharma Furniture Work’s
            </a>{" "}
            for expert advice.
          </p>
        </section>

        <section className="mb-8 bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-primary flex items-center">
            <FaHammer className="mr-2 text-secondary" /> Choose the Right Material
          </h2>
          <p className="mt-3 text-gray-700">
            From solid teak wood to Sheesham and engineered wood, 
            <strong> Sharma Furniture Work’s</strong> offers durable, stylish materials 
            that last for years – perfect for Bihar’s climate.
          </p>
        </section>

        <section className="mb-8 bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-primary flex items-center">
            <FaChair className="mr-2 text-secondary" /> Don’t Forget Comfort
          </h2>
          <p className="mt-3 text-gray-700">
            Our ergonomic <strong>office chairs</strong> and plush <strong>sofa sets</strong> 
            are designed for comfort without sacrificing style.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mt-10 bg-light p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-primary flex items-center">
            <FaQuestionCircle className="mr-2 text-secondary" /> Frequently Asked Questions
          </h2>
          <div className="mt-5 space-y-4 text-gray-700">
            <div>
              <p className="font-bold">Q: Which is the best furniture shop in Bihar?</p>
              <p>
                A: <strong>Sharma Furniture Work’s</strong> in Sameli, Katihar – serving Katihar, 
                Purnea, Bhagalpur, Patna, Motihari, Pothiya, Kursela.
              </p>
            </div>
            <div>
              <p className="font-bold">Q: Do you sell custom-made furniture?</p>
              <p>
                A: Yes, we specialize in custom beds, dining sets, wardrobes, and more.
              </p>
            </div>
            <div>
              <p className="font-bold">Q: Can you deliver to Patna or Motihari?</p>
              <p>
                A: Yes, we deliver across all major Bihar cities.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-10 text-center bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-primary flex justify-center items-center">
            <FaPhoneAlt className="mr-2" /> Visit Us Today
          </h2>
          <p className="mt-3 text-gray-700">
            For the best deals on <strong>sofas, beds, dining tables, wardrobes, and office furniture</strong> 
            in Bihar, visit{" "}
            <a href="/furniture-shop-sameli-katihar" className="text-primary font-medium hover:underline">
              Sharma Furniture Work’s
            </a>{" "}
            – your trusted furniture partner in Sameli, Katihar.
          </p>
        </section>
      </main>
    </>
  );
}
