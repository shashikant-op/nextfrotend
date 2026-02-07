'use client';
import Head from "next/head";
import { 
  FaCouch, FaHammer, FaChair, FaQuestionCircle, FaArrowRight,
  FaPhoneAlt, FaMapMarkerAlt, FaUserTie, FaTools, FaTruck, FaAward 
} from "react-icons/fa";

export default function FurnitureBuyingGuideBihar() {
  const brandColor = "#8000DB";

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-slate-900 font-sans selection:bg-purple-100">
      <Head>
        <title>Buying Guide | Sharma Furniture Work’s Bihar</title>
      </Head>

      {/* --- PREMIUM NAVIGATION BAR --- */}
     

      {/* --- HERO SECTION --- */}
      <header className="bg-slate-900 text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#8000DB 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1]">
            How to Buy <span className="text-purple-400">Premium Furniture</span> in Bihar
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            A comprehensive guide curated by <strong>Mohan Sharma</strong> to help you choose pieces that last generations.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: THE JOURNEY (8 Columns) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* STEP 1: SPACE PLANNING */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold">1</span>
                <h2 className="text-3xl font-bold">Analyze Your Space</h2>
              </div>
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                <p className="text-slate-600 leading-relaxed mb-6">
                  In cities like <strong>Patna</strong> and <strong>Purnea</strong>, homes vary from spacious bungalows to modern apartments. 
                  Measure your entryways and rooms meticulously. A <strong>king-size bed</strong> or <strong>L-shaped sofa</strong> 
                  should allow at least 2 feet of walking space around it.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Sofa', 'Bed', 'Dining', 'Wardrobe'].map(item => (
                    <div key={item} className="text-center p-4 bg-slate-50 rounded-2xl text-sm font-bold text-slate-500">{item}</div>
                  ))}
                </div>
              </div>
            </section>

            {/* STEP 2: MATERIAL SELECTION (Including the Polish USP) */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold">2</span>
                <h2 className="text-3xl font-bold">Material & Finish Expertise</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><FaTools className="text-purple-600" /> Solid Wood Choice</h3>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Sharma Furniture Work’s</strong> utilizes Solid Teak and Sheesham. Unlike engineered wood, 
                    these materials withstand Bihar’s monsoon and humidity without swelling.
                  </p>
                </div>
                
                {/* SPECIAL POLISH BLOCK */}
                <div style={{ backgroundColor: brandColor }} className="rounded-[2rem] p-8 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-200">
                    <FaAward /> Our Signature Finish
                  </h3>
                  <p className="mb-6 opacity-90 leading-relaxed">
                    Mohan Sharma's specialized <strong>Thin White Spirit Polish</strong> is our hallmark. 
                    It is designed for those who appreciate the raw beauty of wood.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'High Grain Visibility', 
                      'Matte Reflection (5-10%)', 
                      'Pale/Cool Ash Tone', 
                      'High Transparency'
                    ].map(feat => (
                      <li key={feat} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                        <FaArrowRight className="text-xs text-purple-300" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            

            {/* STEP 3: TRUST & DELIVERY */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold">3</span>
                <h2 className="text-3xl font-bold">Logistics & Support</h2>
              </div>
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                <p className="text-slate-600 leading-relaxed">
                  Managed by <strong>Ravikant Sharma</strong>, our delivery network covers <strong>Motihari, Bhagalpur, 
                  Pothiya, and Kursela</strong>. We handle the assembly on-site to ensure the custom fit is perfect.
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT: BUSINESS DIRECTORY (4 Columns) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* THE TEAM CARD */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2" style={{ color: brandColor }}>
                <FaUserTie /> Family Expertise
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ownership</p>
                  <p className="font-bold text-slate-800">Mohan Sharma & Ravikant Sharma</p>
                </div>
                <div className="pt-4 border-t border-slate-50">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Master Technicians</p>
                  <p className="font-bold text-slate-800">Shaligram Sharma & Ashok Sharma</p>
                </div>
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <FaPhoneAlt className="text-purple-400" /> Visit Sameli Store
              </h3>
              <div className="space-y-4">
                <a href="tel:+919006056800" className="block p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-xs text-slate-400 font-bold mb-1">Ravikant Sharma</p>
                  <p className="text-xl">+91 90060 56800</p>
                </a>
                <a href="tel:+918051429677" className="block p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-xs text-slate-400 font-bold mb-1">Sales Inquiry</p>
                  <p className="text-xl">+91 80514 29677</p>
                </a>
              </div>
            </div>

            {/* AREAS SERVED */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> Delivery Zones
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Katihar', 'Purnea', 'Bhagalpur', 'Patna', 'Motihari', 'Kursela'].map(city => (
                  <span key={city} className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-xl text-sm border border-slate-100 font-medium">{city}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* --- FAQ DRAWER --- */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <FaQuestionCircle className="text-purple-600" /> Common Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: "Best furniture shop in Bihar?", a: "Sharma Furniture Work’s in Sameli, Katihar is widely trusted for solid wood custom builds." },
              { q: "Do you offer custom designs?", a: "Yes. Shaligram and Ashok Sharma lead our custom workshop for bespoke dining and bed sets." },
              { q: "Delivery to Patna?", a: "We provide safe, professional transport and assembly to Patna and Motihari regularly." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <p className="font-bold text-slate-800 mb-2">Q: {faq.q}</p>
                <p className="text-slate-600 italic">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      
    </div>
  );
}