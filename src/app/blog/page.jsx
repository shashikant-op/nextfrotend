'use client';
import Head from "next/head";
import { GiWoodPile } from "react-icons/gi";
import { FaLeaf, FaCrown, FaTruck, FaRegQuestionCircle } from "react-icons/fa";
import { MdBuild, MdTrendingUp } from "react-icons/md";

export default function SheeshamFurnitureCostly() {
  return (
    <>
      <Head>
        <title>Why Sheesham Wood Furniture is Costly | Sharma Furniture Work’s Sameli Katihar Bihar</title>
        <meta
          name="description"
          content="Discover why Sheesham wood furniture is costly and why Sharma Furniture Work’s in Sameli, Katihar Bihar offers the best handcrafted designs across Bihar."
        />
        <meta
          name="keywords"
          content="Sheesham wood furniture, Sameli Katihar furniture shop, Sharma Furniture Work’s, Bihar furniture, Purnea furniture, Bhagalpur furniture, Patna furniture, Motihari furniture, Kursela furniture, wooden bed, wooden sofa, premium wood furniture"
        />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-10 font-sans leading-relaxed">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Why Sheesham Wood Furniture is Costly — And Worth Every Rupee
          </h1>
          <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
            By <strong>Sharma Furniture Work’s</strong>, Sameli Katihar — bringing premium wood furniture to <strong>Purnea</strong>, <strong>Bhagalpur</strong>, <strong>Patna</strong>, <strong>Motihari</strong> & more.
          </p>
        </section>

        {/* Blog Sections */}
        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><GiWoodPile /> Durability & Natural Resistance</h2>
            <p>Sheesham wood is one of India’s most durable hardwoods. Its density makes it naturally resistant to termites and warping. At <strong>Sharma Furniture Work’s</strong>, <strong>Mohan Sharma</strong> ensures each piece is crafted for decades of use.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><FaLeaf /> Distinctive Grain & Beauty</h2>
            <p>No two Sheesham pieces are alike. Its rich golden-brown to deep red hues, enhanced by <strong>Shaligram Sharma</strong> & <strong>Ashok Sharma</strong>’s polishing, make each item a one-of-a-kind masterpiece.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><MdBuild /> Skilled Craftsmanship</h2>
            <p>Its hardness demands precision tools and patient artisans. <strong>Ravikant Sharma</strong> oversees each build to ensure flawless joinery and design integrity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><FaCrown /> Historical & Cultural Value</h2>
            <p>Sheesham has graced royal palaces and heritage homes for centuries. Owning one is like owning a small piece of India’s artistic legacy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><FaLeaf /> Sustainable Sourcing</h2>
            <p>We partner with suppliers practicing responsible forestry, ensuring your furniture is eco-friendly and guilt-free.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><MdTrendingUp /> Value Over Time</h2>
            <p>Unlike mass-produced furniture, Sheesham appreciates in value as it ages. It’s an investment you can pass down generations.</p>
          </section>
        </article>

        {/* Service Area */}
        <section className="mt-14 bg-accent p-6 rounded-2xl shadow">
          <h2 className="text-3xl font-bold text-primary mb-4">Serving All of Bihar</h2>
          <p>From <strong>Patna</strong> to <strong>Bhagalpur</strong>, <strong>Motihari</strong> to <strong>Kursela</strong>, our delivery network ensures premium Sheesham furniture reaches every home.</p>
        </section>

        {/* FAQ */}
        <section className="mt-14 bg-secondary/10 p-6 rounded-2xl shadow">
          <h2 className="text-3xl font-bold text-primary flex items-center gap-2"><FaRegQuestionCircle /> Frequently Asked Questions</h2>
          <div className="space-y-4 mt-4">
            {[
              ["Is Sheesham wood expensive?", "Yes, but its longevity and beauty justify the cost."],
              ["Where can I buy Sheesham furniture in Bihar?", "Visit Sharma Furniture Work’s in Sameli, Katihar."],
              ["Do you customize furniture?", "Yes, in Sheesham, teak, and more."],
              ["Do you deliver outside Bihar?", "Yes, upon request."],
              ["How to maintain Sheesham furniture?", "Polish yearly and avoid prolonged sun exposure."]
            ].map(([q, a], i) => (
              <div key={i}>
                <h3 className="font-semibold text-primary">{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Products */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-primary mb-4">Recommended Sheesham Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sheesham Dining Table Set", price: "₹45,000" },
              { name: "Sheesham King Size Bed", price: "₹60,000" },
              { name: "Sheesham Wooden Sofa", price: "₹35,000" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border rounded-lg p-5 shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-primary">{item.name}</h3>
                <p className="text-secondary font-bold">{item.price}</p>
                <button className="mt-3 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-primary flex justify-center items-center gap-2"><FaTruck /> Visit Sharma Furniture Work’s</h2>
          <p className="mt-2 text-secondary max-w-lg mx-auto">
            Explore our Sheesham collection in Sameli, Katihar. Furniture that lasts for generations, delivered to your home.
          </p>
          <a href="/contact" className="mt-4 inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-secondary transition">
            Contact Us Today
          </a>
        </section>
      </main>
    </>
  );
}
