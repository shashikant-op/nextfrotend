"use client";

import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, Suspense } from "react";
import { fetchproducts } from "@/redux/products/productslice";
import CatCard from "@/components/Cards/catproductcard";
import Pagination from "react-js-pagination";
import "@/styles/pagination.css";
import "@/styles/scroll.css";
import Slider from "@mui/material/Slider";
import ProductHomeLoader from "@/components/producthomeloader";
import { useSearchParams, useRouter } from "next/navigation";
import { MdFilterListOff, MdOutlineTune } from "react-icons/md";
import { Skeletoncard } from "@/components/Loader/catproductloader";

function CatproductContent() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const [price, setPrice] = useState([0, 200000]);
  const [showFilter, setShowFilter] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  const { isLoading, resultperpage, productcount } = useSelector((state) => state.products);
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    const keyword = searchparams?.get("keyword") || "";
    const category = searchparams?.get("category")?.toLowerCase() || "";
    const pageParam = parseInt(searchparams?.get("page")) || 1;
    setCurrPage(pageParam);

    dispatch(fetchproducts({ keyword, currpage: pageParam, price, category }));
  }, [searchparams, price, dispatch]);

  const setpage = (pageNumber) => {
    const params = new URLSearchParams(searchparams.toString());
    params.set("page", pageNumber);
    router.push(`/catproduct?${params.toString()}`);
    setCurrPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePriceChange = (_, newPrice) => {
    setPrice(newPrice);
    const params = new URLSearchParams(searchparams.toString());
    params.set("page", "1");
    router.push(`/catproduct?${params.toString()}`);
  };

  const handleCategoryClick = (selectedCat) => {
    const params = new URLSearchParams(searchparams.toString());
    const currentCat = searchparams?.get("category")?.toLowerCase() || "";
    
    if (currentCat === selectedCat.toLowerCase()) {
      params.delete("category");
    } else {
      params.set("category", selectedCat.toLowerCase());
    }
    params.set("page", "1");
    router.push(`/catproduct?${params.toString()}`);
  };

  return (
    <div className="max-w-7xl lg:pt-10   mx-auto px-4 sm:px-6 lg:px-8 py-2">
      {/* 🏷️ Header Section */}
        
        
        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setShowFilter(!showFilter)}
          className="sm:hidden flex mb-4 items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium transition-transform active:scale-95"
        >
          {showFilter ? <MdFilterListOff size={20} /> : <MdOutlineTune size={20} />}
          {showFilter ? "Close Filters" : "Filter & Sort"}
        </button>

      <div className="flex flex-col  lg:flex-row gap-8">
        {/* 🔍 Sidebar Filter Section (Desktop) */}
        <aside className={`${
          showFilter ? "block" : "hidden"
        } sm:block w-full lg:w-64 space-y-2 animate-in fade-in slide-in-from-left-4 duration-300`}>
          
          {/* Price Range */}
          
          <div className="hidden flex justify-center items-center  mb-10 sm:block lg:block">
          <h1 className="text-3xl font-light text-slate-900 tracking-tight">
            Our <span className="font-semibold">Collection</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2">Showing {products?.length || 0} of {productcount} handcrafted pieces</p>
        </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Price Range</h3>
            <Slider
              value={price}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={200000}
              sx={{ 
                color: "#475569", // Slate 600
                '& .MuiSlider-thumb': { backgroundColor: '#1e293b' },
                '& .MuiSlider-track': { border: 'none' },
              }}
            />
            <div className="flex justify-between text-xs font-mono text-slate-500 mt-2">
              <span>₹{price[0].toLocaleString()}</span>
              <span>₹{price[1].toLocaleString()}</span>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Categories</h3>
            <div className="flex flex-row  overflow-scroll scrollbar-hide gap-2  lg:flex-col">
              {[
                "Living", "Study", "Bed", "Dining", "Office", "Kitchen", "Puja"
              ].map((categoryItem) => {
                const isActive = searchparams?.get("category")?.toLowerCase() === categoryItem.toLowerCase();
                return (
                  <button
                    key={categoryItem}
                    onClick={() => handleCategoryClick(categoryItem)}
                    className={`text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                      isActive 
                        ? "bg-slate-900 text-white font-medium" 
                        : "text-slate-600 hover:bg-slate-50 hover:pl-6"
                    }`}
                  >
                    {categoryItem}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* 🛍️ Product Grid */}
        <main className="flex-1">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeletoncard key={`sk-${i}`} />
              ))}
            </div>
          ) : (
            <>
              {products && products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                  {products.map((product) => (
                    <div key={product._id} className="transition-transform duration-500 hover:-translate-y-2">
                      <CatCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                  <p className="text-slate-400 font-light text-lg">No pieces found in this selection.</p>
                  <button 
                    onClick={() => router.push('/catproduct')}
                    className="mt-4 text-slate-900 font-semibold underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {/* 📄 Pagination */}
              {productcount > resultperpage && (
                <div className="mt-16 flex justify-center">
                  <Pagination
                    activePage={currPage}
                    itemsCountPerPage={resultperpage}
                    totalItemsCount={productcount}
                    pageRangeDisplayed={5}
                    onChange={setpage}
                    itemClass="page-item mx-1"
                    linkClass="page-link w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
                    activeClass="activepageclass"
                    activeLinkClass="!bg-slate-900 !text-white !border-slate-900"
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

export default function Catproduct() {
  return (
    <Suspense fallback={<ProductHomeLoader />}>
      <div className="min-h-screen bg-[#FDFDFD]">
        <CatproductContent />
      </div>
    </Suspense>
  );
}