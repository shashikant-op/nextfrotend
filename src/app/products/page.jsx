"use client";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, Suspense } from "react";
import { fetchproducts } from "@/redux/products/productslice";
import Card from "@/components/Cards/card";
import Pagination from "react-js-pagination";
import "@/styles/pagination.css";
import Slider from "@mui/material/Slider";
import ProductHomeLoader from "@/components/producthomeloader";
import { useSearchParams } from "next/navigation";
import { IoFilterOutline } from "react-icons/io5";
import { MdFilterListOff } from "react-icons/md";

function Allproducts() {
  const searchparams = useSearchParams();
  const keyword = searchparams.get("keyword") || "";

  const [currpage, setcurrpage] = useState(1);
  const [price, setprice] = useState([0, 200000]);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchproducts({ keyword, currpage, price, category }));
  }, [dispatch, keyword, currpage, price, category]);

  const { isLoading, resultperpage, productcount } = useSelector(
    (state) => state.products
  );
  const products = useSelector((state) => state.products.data);

  const setpage = (pageNumber) => {
    setcurrpage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePriceChange = (event, newPrice) => setprice(newPrice);
  const handleCategoryClick = (selectedCat) => setcategory(selectedCat.toLowerCase());

  return (
    <div className="max-w-[1500px] lg:px-10 py-4 md:py-10 min-h-screen bg-[#FDFDFD]">
      {/* 📱 Mobile Toggle (Visible only on Mobile) */}
      <div className="lg:hidden   pl-3 mb-6">
        <button 
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold shadow-lg active:scale-95 transition-all"
        >
          {showFilter ? <MdFilterListOff /> : <IoFilterOutline />}
          {showFilter ? "Close Filters" : "Filter Collections"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* 🔍 SIDEBAR SECTION (Fixed on large screens) */}
        <aside className={`${
          showFilter ? "block" : "hidden"
        } lg:block w-full lg:w-[280px] flex-shrink-0 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500`}>
          
          {/* Price Range Card */}
           <header className="mb-12 hidden lg:block  border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-light text-slate-900 tracking-tight">
          Our <span className="font-semibold">Collection</span>
        </h1>
        <p className="text-slate-500 text-sm mt-1">Showing {products?.length || 0} of {productcount} handcrafted pieces</p>
      </header>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Price Range</h3>
            <Slider
              value={price}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={200000}
              sx={{ 
                color: "#1e293b", 
                '& .MuiSlider-thumb': { height: 16, width: 16, backgroundColor: '#fff', border: '3px solid currentColor' },
                '& .MuiSlider-rail': { opacity: 0.1 }
              }}
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
              <span>₹{price[0].toLocaleString()}</span>
              <span>₹{price[1].toLocaleString()}</span>
            </div>
          </div>

          {/* Categories Sidebar List */}
          <div className="bg-white p-6   rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">Categories</h3>
           <div className="flex flex-row  overflow-scroll scrollbar-hide gap-3  lg:flex-col">
              {[
                "Living", "Study", "Bed", "Dining", "Office", "Kitchen", "Puja"
              ].map((cat) => {
                const isActive = category === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                      isActive 
                        ? "bg-slate-900 text-white font-semibold shadow-md translate-x-1" 
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* 🛍️ MAIN PRODUCT GRID SECTION */}
        <main className=" w-full ">
          {isLoading ? (
              <ProductHomeLoader />
            
          ) : (
            <>
        {products && products.length > 0 ? (
  /* Changed gap-x-2 for mobile to give a clean 'aisle' between cards */
  <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 ml-2 md:gap-x-4 gap-y-6 px-1 md:px-0"> 
    {products.map((product) => (
      <div key={product._id} className="flex h-full transition-all duration-500 hover:-translate-y-1">
        <Card product={product} />
      </div>
    ))}
  </div>
) : (
  <div className="w-full py-20 text-center text-slate-400">No products found.</div>
)}

              {/* 📄 Pagination (Matches screenshot style) */}
              {productcount > resultperpage && (
                <div className="mt-20 flex justify-center pb-12">
                  <Pagination
                    activePage={currpage}
                    itemsCountPerPage={resultperpage}
                    totalItemsCount={productcount}
                    pageRangeDisplayed={5}
                    onChange={setpage}
                    itemClass="mx-1"
                    linkClass="w-11 h-11 flex items-center justify-center rounded-lg border border-slate-100 bg-white text-slate-500 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                    activeLinkClass="!bg-slate-900 !text-white !border-slate-900 shadow-lg"
                  />
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductHomeLoader />}>
      <Allproducts />
    </Suspense>
  );
}