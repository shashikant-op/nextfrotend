"use client";
import Head from "next/head";
import { 
  FaPercent, FaAward, FaArrowRight, FaTruck, FaCouch, 
  FaBed, FaUtensils, FaBriefcase, FaPhoneAlt, FaMapMarkerAlt 
} from "react-icons/fa";

export default function BestFurnitureDealsBihar() {
  const brandColor = "#8000DB";

  const deals = [
    {
      title: "Signature Sofas",
      off: "40% OFF",
      desc: "Premium fabrics & hand-carved Teak accents.",
      icon: <FaCouch />,
      tag: "Limited"
    },
    {
      title: "Master Beds",
      off: "FESTIVE DEAL",
      desc: "Solid wood with 'Thin White Spirit Polish' (Matte).",
      icon: <FaBed />,
      tag: "Best Seller"
    },
    {
      title: "Dining Sets",
      off: "SAVE BIG",
      desc: "High-transparency finishes for natural grain.",
      icon: <FaUtensils />,
      tag: "Custom"
    },
    {
      title: "Office Ergo",
      off: "CORP RATES",
      desc: "Workstations designed for productivity.",
      icon: <FaBriefcase />,
      tag: "Quick Ship"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFF] text-slate-900 font-sans pb-24 lg:pb-0">
      <Head>
        <title>Furniture Deals Bihar | Sharma Furniture</title>
      </Head>

      {/* --- WRAPPER FOR RESPONSIVE LAYOUT --- */}
      <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
        
        {/* --- LEFT SIDE: HERO & BRAND (Fixed on Desktop) --- */}
        <header 
          style={{ backgroundColor: brandColor }} 
          className="relative text-white pt-16 pb-20 lg:pt-0 lg:pb-0 px-6 rounded-b-[3rem] lg:rounded-none shadow-2xl overflow-hidden lg:w-2/5 lg:flex lg:flex-col lg:justify-center lg:items-center"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl lg:w-80 lg:h-80 lg:opacity-20" />
          
          <div className="relative z-10 text-center lg:px-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase mb-4 lg:mb-8">
              🔥 Exclusive Bihar Offers
            </div>
            <h1 className="text-4xl lg:text-7xl font-black mb-4 lg:mb-8 leading-tight">
              Premium <br className="hidden lg:block"/> <span className="text-purple-300">Deals</span>
            </h1>
            <p className="text-sm lg:text-lg opacity-90 font-light max-w-xs mx-auto lg:max-w-md">
              Master Craftsmanship by <strong>Mohan Sharma</strong>. <br className="hidden lg:block"/> Serving Katihar, Purnea, and Patna.
            </p>

            {/* Hidden on Mobile, Visible on Large Screen: Detailed Brand Trust */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-12 text-left">
               <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <FaAward className="text-purple-300 mb-2" />
                  <p className="text-xs font-bold uppercase tracking-wider">Matte Polish</p>
                  <p className="text-[10px] opacity-60">5-10% Reflection Spirit Polish</p>
               </div>
               <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <FaTruck className="text-purple-300 mb-2" />
                  <p className="text-xs font-bold uppercase tracking-wider">Bihar Wide</p>
                  <p className="text-[10px] opacity-60">White-glove delivery network</p>
               </div>
            </div>
          </div>
        </header>

        {/* --- RIGHT SIDE: CONTENT (Scrollable on Desktop) --- */}
        <main className="px-5 -mt-8 lg:mt-0 relative z-20 lg:w-3/5 lg:overflow-y-auto lg:py-20 lg:px-16 no-scrollbar">
          
          <div className="lg:max-w-3xl">
            {/* Deals Section */}
            <h3 className="hidden lg:block text-2xl font-black mb-8 text-slate-800">Current Offers</h3>
            <section className="space-y-4 mb-12 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
              {deals.map((deal, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-5 shadow-lg shadow-purple-900/5 border border-slate-50 flex items-center lg:items-start lg:flex-col gap-5 lg:gap-4 active:scale-95 transition-transform hover:border-purple-200"
                >
                  <div 
                    style={{ backgroundColor: `${brandColor}10`, color: brandColor }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  >
                    {deal.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ color: brandColor }} className="text-[10px] font-black uppercase tracking-tighter">
                        {deal.off}
                      </span>
                      <span className="text-[8px] font-bold text-slate-400 uppercase bg-slate-100 px-2 py-0.5 rounded-full">
                        {deal.tag}
                      </span>
                    </div>
                    <h2 className="text-md lg:text-lg font-bold text-slate-800 leading-none mb-1">{deal.title}</h2>
                    <p className="text-[11px] lg:text-xs text-slate-500 font-light lg:line-clamp-2">{deal.desc}</p>
                  </div>
                  <FaArrowRight className="text-slate-300 text-sm lg:hidden" />
                </div>
              ))}
            </section>

            {/* Desktop Only: Experience Highlight */}
            <div className="hidden lg:block mb-12 p-8 bg-purple-50 rounded-[2.5rem] border border-purple-100">
               <h4 className="font-bold text-purple-900 mb-2">The Thin White Spirit Polish</h4>
               <p className="text-sm text-purple-700 font-light">Available for all custom beds and dining sets. We emphasize high grain visibility for a pale, cool ash tone that suits modern Bihar interiors.</p>
            </div>

            {/* Why Us? */}
            <section className="mb-12">
              <h3 className="text-lg lg:text-2xl font-black mb-4 px-1">Why Us?</h3>
              <div className="flex lg:grid lg:grid-cols-2 gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar">
                {[
                  { t: "20+ Years", d: "Legacy of trust in Sameli." },
                  { t: "Matte Polish", d: "Expert 5-10% reflection." },
                  { t: "Free Delivery", d: "To all major Bihar cities." },
                  { t: "Customized", d: "Your design, our wood." }
                ].map((item, idx) => (
                  <div key={idx} className="min-w-[140px] lg:min-w-0 bg-slate-900 text-white p-5 lg:p-8 rounded-3xl">
                    <p className="font-bold text-sm lg:text-base text-purple-400 mb-1">{item.t}</p>
                    <p className="text-[10px] lg:text-xs text-slate-400 leading-tight">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* --- FOOTER: FLOATING ON MOBILE, FIXED ON LARGE SCREEN --- */}
      <div className="fixed bottom-6 lg:bottom-10 left-6 right-6 lg:left-auto lg:right-10 z-50 flex justify-center">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl flex items-center gap-2 w-full max-w-sm lg:w-96">
          <a
            href="https://maps.google.com"
            className="flex-1 flex items-center justify-center gap-2 text-white py-3 rounded-full text-xs font-bold"
          >
            <FaMapMarkerAlt className="text-red-400" /> Sameli
          </a>
          <div className="w-[1px] h-6 bg-white/10" />
          <a
            href="tel:+919006056800"
            style={{ backgroundColor: brandColor }}
            className="flex-[2] flex items-center justify-center gap-2 text-white py-3 rounded-full text-xs font-black shadow-lg"
          >
            <FaPhoneAlt /> CALL RAVIKANT
          </a>
        </div>
      </div>
    </div>
  );
}