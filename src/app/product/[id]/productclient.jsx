"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { fetchproductdetails } from "@/redux/products/pdtlsslice";
import ProductSkeleton from "@/components/Loader/productdetails";
import { addToCartAsync } from "@/redux/cart/cartslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { RiShareForwardLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHandHoldingHand } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GoArrowRight, GoChevronDown } from "react-icons/go";
import Productsec from "@/components/productsec/productsec";
import { userdetails } from "@/redux/users/userdetailsslice";
import axios from "axios";

const Product = () => {
  const [showspecifications, setShowspecifications] = useState(false);
  const [imgurl, setimgurl] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  const dispatch = useDispatch();
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const { isLoading, error, data } = useSelector((state) => state.product);
  const product = data?.product;
  const category = product?.category?.[0];
  const userdata = useSelector((state) => state.userdetail);

  const perdis = useMemo(() => {
    if (!product?.price || !product?.oldprice) return 0;
    return Math.floor(100 - (product.price / product.oldprice) * 100);
  }, [product?.price, product?.oldprice]);

  useEffect(() => {
    if (id) dispatch(fetchproductdetails(id));
    const usertoken = localStorage.getItem("token");
    if (usertoken) dispatch(userdetails(usertoken));
  }, [dispatch, id]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setimgurl(product.images[0].url);
    }
  }, [product]);

  const handleaddtocart = () => {
    dispatch(addToCartAsync({ id: product._id, quantity }));
    toast.success("Added to cart!");
  };

  const handleWhatsAppShare = () => {
    const pageUrl = window.location.href;
    const customMessage = `*Check out this ${product?.title}* at Sharma Furniture Works.\n\nPrice: ₹${product?.price.toLocaleString("en-IN")}\n\nView details here:`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(customMessage + " " + pageUrl)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (isLoading) return <ProductSkeleton />;
  if (error) return (
    <div className="flex justify-center items-center h-64 bg-red-50 text-red-600 rounded-lg m-6 border border-red-200 font-medium">
      Error: {error}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-5 pb-12 text-slate-900">
      <div className="max-w-7xl mx-auto bg-white shadow-sm lg:rounded-b-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 p-2 lg:p-8">
          
          {/* LEFT: Image Gallery (Thin White Spirit Aesthetic) */}
          <div className="lg:w-1/2 space-y-3">
            <div className="relative overflow-hidden rounded-xl bg-[#F4F4F5] border border-gray-100 flex items-center justify-center">
              <img
                src={imgurl || product?.images?.[0]?.url}
                alt={product?.title}
                className="w-full h-full object-contain transition-opacity duration-300"
              />
              <button
                onClick={handleWhatsAppShare}
                className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/20 text-slate-700 active:scale-90 transition-all shadow-sm"
              >
                <RiShareForwardLine size={22} />
              </button>
            </div>
            
            <div className="flex gap-2 items-center justify-center px-2 overflow-x-auto py-1 scrollbar-hide">
              {product?.images?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setimgurl(image.url)}
                  className={`relative min-w-[70px] h-[70px] rounded-lg border-2 transition-all ${
                    imgurl === image.url ? "border-indigo-600 scale-105" : "border-transparent opacity-60"
                  }`}
                >
                  <img src={image.url} alt="thumb" className="w-full h-full object-cover rounded-md" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="lg:w-1/2 flex flex-col  gap-6">
            <header className="space-y-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">{product?.title}</h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center text-amber-500">
                  {"★".repeat(4)}{"☆".repeat(1)}
                  <span className="ml-2 text-slate-500 font-medium">({product?.numofreview} Reviews)</span>
                </div>
                <span className="h-4 w-px bg-slate-200"></span>
               <a 
                  href="https://www.google.com/maps/search/?api=1&query=Sharma+Furniture+Works+Sameli+Katihar"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-500 font-medium hover:text-slate-800 transition-all duration-300"
                >
                  <span className="border-b border-slate-300 hover:border-slate-800">Visit Store</span>
                  <GoArrowRight className="text-slate-400" />
                </a>
              </div>
            </header>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-slate-900">₹{product?.price.toLocaleString("en-IN")}</span>
                <span className="text-lg text-slate-400 line-through">₹{product?.oldprice?.toLocaleString("en-IN")}</span>
                <span className="text-emerald-600 font-bold">{perdis}% OFF</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 italic">Inclusive of all taxes</p>
            </div>

            {/* Offers Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-indigo-100 bg-indigo-50/50">
                <p className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Special Offer</p>
                <p className="text-sm font-medium text-slate-800">Wedding Discount: ₹1,000 Off</p>
              </div>
              <div className="p-3 rounded-lg border border-purple-100 bg-purple-50/50">
                <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">Bulk Savings</p>
                <p className="text-sm font-medium text-slate-800">Buy 2+ items, get 5% OFF</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-4 gap-2 py-4 border-y border-slate-100">
              {[
                { icon: <VscWorkspaceTrusted />, label: "50y Warranty" },
                { icon: <TbTruckDelivery />, label: "Free Shipping" },
                { icon: <FaHandHoldingHand />, label: "Top Brand" },
                { icon: <RiSecurePaymentLine />, label: "Secure Pay" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1">
                  <div className="text-xl text-slate-700">{item.icon}</div>
                  <span className="text-[10px] font-medium text-slate-500 leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Purchase Action Box */}
            <div className="sticky bottom-4 lg:relative bg-white p-5 rounded-2xl border border-slate-200 shadow-lg lg:shadow-none space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center border rounded-lg p-1 bg-slate-50">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1 hover:bg-white rounded-md transition">-</button>
                  <span className="px-4 font-bold min-w-[40px] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-1 hover:bg-white rounded-md transition">+</button>
                </div>
                <span className={`text-sm font-bold ${product?.stock > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  {product?.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleaddtocart}
                  className="w-full py-4 bg-purple-800 text-white rounded-xl font-bold hover:bg-black transition-all active:scale-[0.98]"
                >
                  Add to Cart
                </button>
                <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-[0.98]">
                  Buy Now
                </button>
              </div>
              
              {userdata?.data?.role === "admin" && (
                <button 
                  onClick={() => handleDelete(product._id)}
                  className="w-full py-2 text-red-600 text-sm font-medium border border-red-100 rounded-lg hover:bg-red-50"
                >
                  Delete Product (Admin Only)
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      
      {/* Footer Sections */}
      <div className="max-w-7xl mx-auto mt-8 px-2 lg:px-0 space-y-2">
        <section className="bg-white rounded-xl py-6 px-4 border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Product Description</h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">{product?.description}</p>
        </section>
        <section className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm">
          <button onClick={() => setShowspecifications(!showspecifications)} className="w-full flex items-center justify-between py-6 px-4 hover:bg-slate-50 transition-colors">
            <span className="text-xl font-bold">Specifications</span>
            <GoChevronDown className={`text-2xl transition-transform duration-300 ${showspecifications ? "rotate-180" : ""}`} />
          </button>
          {showspecifications && (
            <div className="p-4 bg-white border-t border-slate-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product?.specifications?.map((spec, index) => (
                  <img key={index} src={spec.url} alt="specification" className="w-full rounded-lg border border-slate-100" />
                ))}
              </div>
            </div>
          )}
        </section>
        {category && <div className="mt-10"><Productsec category={category} /></div>}
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default Product;