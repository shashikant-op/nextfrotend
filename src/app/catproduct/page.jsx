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
import { MdFilterListOff } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import Link from "next/link";
import { Skeletoncard } from "@/components/Loader/catproductloader";

function CatproductContent() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const [price, setPrice] = useState([0, 200000]);
  const [showFilter, setShowFilter] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  const { isLoading, resultperpage, productcount } = useSelector(
    (state) => state.products
  );
  const products = useSelector((state) => state.products.data);

  // 🚀 Main fetch effect
  useEffect(() => {
    const keyword = searchparams?.get("keyword") || "";
    const category = searchparams?.get("category")?.toLowerCase() || "";
    const pageParam = parseInt(searchparams?.get("page")) || 1;

    setCurrPage(pageParam);

    dispatch(
      fetchproducts({
        keyword,
        currpage: pageParam,
        price,
        category,
      })
    );
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
    const category = searchparams?.get("category")?.toLowerCase() || "";
    const isSame = category === selectedCat.toLowerCase();
    const params = new URLSearchParams(searchparams.toString());

    if (isSame) {
      params.delete("category");
    } else {
      params.set("category", selectedCat.toLowerCase());
    }
    params.set("page", "1");
    router.push(`/catproduct?${params.toString()}`);
  };

  const handleClearAll = () => {
    const params = new URLSearchParams(searchparams.toString());
    params.delete("category");
    params.set("page", "1");
    router.push(`/catproduct?${params.toString()}`);
  };

  return (
    <>
      {/* 🔘 Mobile Filter Toggle */}
      <div className="sm:hidden flex justify-between items-center py-2 px-4 bg-white shadow-sm">
        <div onClick={() => setShowFilter(!showFilter)}>
          {showFilter ? (
            <MdFilterListOff className="rounded-full text-[24px]" />
          ) : (
            <IoFilterOutline className="rounded-full text-[24px]" />
          )}
        </div>
      </div>

      {/* 🔍 Filter Section */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showFilter ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } sm:max-h-full sm:opacity-100 sm:block bg-white border-t sm:border-none`}
      >
        <div className="w-full py-5 bg-gray-100 shadow-sm sm:shadow-none rounded-lg flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border border-gray-200 sm:border-none">
          {/* 🟢 Price Range */}
          <div className="flex flex-col gap-2 px-4 w-full sm:w-[55%]">
            <label className="text-base font-semibold text-gray-800">
              Price Range
            </label>
            <div className="w-full sm:w-72">
              <Slider
                value={price}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={200000}
                sx={{ color: "#7C3AED" }}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>₹{price[0]}</span>
                <span>₹{price[1]}</span>
              </div>
            </div>
          </div>

          {/* 🟣 Category Pills */}
          <div className="w-full sm:w-[45%]">
            <div className="flex justify-between items-center mb-2 px-3">
              <label className="text-base font-semibold text-gray-800">
                Categories
              </label>
              <button
                onClick={handleClearAll}
                className="text-sm text-red-500 hover:underline"
              >
                Clear All
              </button>
            </div>

            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex flex-wrap h-[72px] w-max gap-2 content-start pr-4 px-3">
                {[
                  "Living",
                  "Study",
                  "Decoration",
                  "Bed",
                  "Door",
                  "Puja",
                  "Chair",
                  "Kitchen",
                  "Cabinet",
                  "Dining",
                  "Shelf",
                  "Office",
                  "Wall",
                  "Ceiling",
                ].map((categoryItem) => {
                  const activeCategory =
                    searchparams?.get("category")?.toLowerCase() || "";
                  const isActive =
                    activeCategory === categoryItem.toLowerCase();

                  return (
                    <span
                      key={categoryItem}
                      onClick={() => handleCategoryClick(categoryItem)}
                      className={`flex-shrink-0 whitespace-nowrap cursor-pointer px-3 py-1 rounded-full text-sm transition-all duration-200 border ${
                        isActive
                          ? "bg-purple-800 text-white border-purple-800"
                          : "bg-gray-100 hover:bg-purple-800 hover:text-white"
                      }`}
                    >
                      {categoryItem}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🛍️ Product List */}
      <div className="mt-4">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <Skeletoncard key={`sk-${i}`} />
          ))
        ) : (
          <div className="mb-3 bg-white p-2 gap-y-1 py-4 justify-evenly flex flex-row flex-wrap">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div key={product._id} className="w-full">
                  <CatCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-6 w-full">
                No products found.
              </p>
            )}
          </div>
        )}

        {/* 📄 Pagination */}
        {productcount > resultperpage && (
          <div className="pagination">
            <Pagination
              activePage={currPage}
              itemsCountPerPage={resultperpage}
              totalItemsCount={productcount}
              pageRangeDisplayed={5}
              nextPageText="Next →"
              prevPageText="← Prev"
              onChange={setpage}
              itemClass="page-item"
              linkClass="page-link"
              activeClass="activepageclass"
              activeLinkClass="activepagelink"
            />
          </div>
        )}
      </div>
    </>
  );
}

// ✅ Wrap with Suspense to fix useSearchParams err
export default function Catproduct() {
  return (
    <Suspense fallback={<ProductHomeLoader />}>
      <CatproductContent />
    </Suspense>
  );
}
