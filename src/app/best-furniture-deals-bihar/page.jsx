"use client";
import Head from "next/head";

export default function BestFurnitureDealsBihar() {
  return (
    <>
      <Head>
        <title>Best Furniture Deals in Bihar – Sharma Furniture Work’s</title>
        <meta
          name="description"
          content="Exclusive furniture deals in Bihar! Sofas, beds, dining tables, wardrobes, and office furniture at Sharma Furniture Work’s – Sameli, Katihar."
        />
        <meta
          name="keywords"
          content="furniture deals Bihar, sofa discount Katihar, bed sale Purnea, dining table offer Bhagalpur, wardrobe Patna, office furniture Motihari"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-12 font-sans">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            🎉 Best Furniture Deals in Bihar
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Affordable, high-quality furniture for{" "}
            <strong className="text-secondary">every home in Bihar</strong>.  
            Sharma Furniture Work’s – trusted by families in Katihar, Purnea, Bhagalpur, Patna, Motihari, Pothiya, and Kursela.
          </p>
        </header>

        {/* Deals Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "🔥 Sofa Sets – Up to 40% Off",
              desc: "Luxury sofas in fabric, leather, and wood designs – perfect for your Bihar home."
            },
            {
              title: "🛏 Beds & Wardrobes – Festive Discounts",
              desc: "Solid wood and modern designs with seasonal discounts in Katihar & nearby cities."
            },
            {
              title: "🍽 Dining Tables – Special Offers",
              desc: "From compact 4-seaters to grand 8-seaters – available across Bihar with delivery."
            },
            {
              title: "💼 Office Furniture – Best Prices",
              desc: "Ergonomic chairs, workstations, and storage – boosting productivity & style."
            }
          ].map((deal, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300 border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-primary mb-2">{deal.title}</h2>
              <p className="text-gray-600">{deal.desc}</p>
            </div>
          ))}
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Why Choose Sharma Furniture Work’s?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-gray-700">
            <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              ✅ Serving Bihar for over 20 years
            </li>
            <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              🎨 Custom designs to match your style
            </li>
            <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              🚚 Delivery across Bihar
            </li>
            <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              🛠 Family-owned with expert craftsmanship
            </li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">💬 FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Where can I get the best furniture deals in Bihar?",
                a: "At Sharma Furniture Work’s, Sameli, Katihar – with offers across Bihar."
              },
              {
                q: "Do you offer home delivery?",
                a: "Yes, we deliver to Katihar, Purnea, Bhagalpur, Patna, Motihari, Pothiya, Kursela."
              },
              {
                q: "Are discounts available year-round?",
                a: "We have seasonal offers, festival discounts, and clearance sales."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <p className="font-semibold text-secondary">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">🚚 Visit Us or Order Today!</h2>
          <p className="mb-6 text-lg">
            Don’t miss out on the <strong>best furniture deals in Bihar</strong>.
          </p>
          <a
            href="/furniture-shop-sameli-katihar"
            className=" hover:bg-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            📍 Visit Sharma Furniture Work’s
          </a>
        </section>
      </main>
    </>
  );
}
