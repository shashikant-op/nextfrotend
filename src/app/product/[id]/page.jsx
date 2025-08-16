"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { fetchproductdetails } from "@/redux/products/pdtlsslice";
import ProductSkeleton from "@/components/Loader/productdetails";
import { addToCartAsync } from "@/redux/cart/cartslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHandHoldingHand } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import Productsec from "@/components/productsec/productsec";
import { GoArrowRight } from "react-icons/go";
import { userdetails } from "@/redux/users/userdetailsslice";
import axios from "axios";
import { useRouter } from "next/navigation";


const offers = [
  {
    title: "Shadi Offer",
    description: "Upto ₹1,000.00 discount on First shadi",
    linkText: "10 offers ›",
    href: "#",
  },
  {
    title: "Exclusive Offers",
    description: "Buy 2 or more and get 5% off",
    linkText: "2 offers ›",
    href: "#",
  },
];
const Product = () => {

const [showspecifications, setShowspecifications] = useState("true");
  const [imgurl, setimgurl] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  const id = params?.id;
  const { isLoading, error, data } = useSelector((state) => state.product);
  const product = data?.product;
  const category=product?.category[0];
  const userdata=useSelector((state)=>state.userdetail);
  const router = useRouter();

  useEffect(() => {
    if (id) dispatch(fetchproductdetails(id));
    
  }, [dispatch, id]);
 useEffect(()=>{
    const usertoken = localStorage.getItem("token");
    if(usertoken){
     dispatch(userdetails(usertoken));
    }
 },[]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setimgurl(product.images[0].url);
    }
  }, [product]);
const handleShowSpecifications = () => {
    setShowspecifications((prev) => !prev);
};
  const handleImageClick = (url) => setimgurl(url);

  const handleaddtocart = () => {
    dispatch(addToCartAsync({ id: product._id, quantity }));
    toast.success("Item added to cart!");
  };
   const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
 const handleDelete = async (id) => {
  try {
    const res = await axios.delete(`${backendurl}/admin/product/${id}`, {
  headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
});

    if (res.status === 200) {
      toast.success("Product deleted successfully ✅");
      router.push("/products");
    }
  } catch (err) {
    console.error("Delete failed:", err.response?.data || err.message);
    toast.error(err.response?.data?.message || "Something went wrong ❌");
  }
};


  const handleIncrement = () => {
    if (quantity < product?.stock) setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (isLoading) return <ProductSkeleton />;
  if (error)
    return (
       <div className="w-full flex justify-center items-center h-34 bg-red-600">
            <p className="px-3 text-[18px] text-white">Something went wrong :<span className="text-[16px]">{error}</span></p>
            </div>
    );

  const perdis = Math.floor(
    100 - ((product?.price || 0) / (product?.oldprice || 180000)) * 100
  );

  return (

    <div className=" bg-gray-200 flex flex-col  ">
      <div className="flex flex-col pb-4 bg-white lg:px-6 lg:flex-row ">
        {/* Left Section */}
        <div className="flex flex-col lg:w-1/2 w-full">
          <img
            src={imgurl || product?.images[0].url}
            alt={product?.title}
            className="lg:rounded-lg w-full max-h-[70vh] object-cover"
          />
          <div className="flex gap-2 flex-wrap items-center justify-center mt-4">
            {product?.images?.map((image, index) => (
              <div
                key={index}
                className={`w-14 h-14 rounded-md border-2 cursor-pointer ${
                  imgurl === image.url ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => handleImageClick(image.url)}
              >
                <img
                  src={image.url}
                  alt="thumbnail"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col px-3  gap-4 w-full lg:w-1/2">
        
          <span className="text-xl font-semibold">{product?.title}</span>

          <div className="text-sm text-gray-600">
            <a href="#" className="text-purple-800 hover:underline">
              Visit the Storite Store
            </a>
            <div className="flex items-center gap-1 mt-1">
              <span>4.2</span>
              <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
              <span className="text-blue-600">{product?.numofreview}</span>
            </div>
            <div className="bg-yellow-500 w-max mt-2 px-2 py-1 text-xs font-semibold text-white rounded">
              50+ Year's Warranty
            </div>
          </div>
          <hr className="border-gray-300 opacity-40" />

          {/* Price Section */}
          <div className="flex flex-col justify-around lg:flex-row">
          <div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="text-red-600 text-sm">-{perdis}% OFF</div>
              <div className="text-xl font-bold text-gray-900">
                ₹{product?.price.toLocaleString("en-IN")}
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-gray-500 line-through">
                M.R.P.: {product?.oldpricem || "18,0000"}
              </div>
              <div className="bg-red-600 ml-3 text-white text-xs px-2 py-1 rounded">
                Limited time deal
              </div>
            </div>
            <div className="text-sm text-gray-700">
              <span className="bg-gray-200 text-xs px-2 py-1 rounded mr-2">Fulfilled</span>
              Inclusive of all taxes
            </div>
          </div>

          {/* Offer Cards */}
         <div className="p-1 ">
              <h2 className="text-sm font-semibold text-gray-800 mb-2">Offers</h2>
              <div className="flex justify-center  gap-2">
               <div className="border p-2 bg-gradient-to-r from-purple-400 via-purple-600 to-pink-600 text-white rounded w-45 text-[12px]">
                  <strong>Shadi Offer</strong><br />
                  Upto ₹1,000.00 discount on First shadi<br />
                  <a href="#" className="text-white text-xs underline">10 offers ›</a>
                </div>
                <div className="border p-2 bg-gradient-to-r from-purple-400 via-purple-600 to-pink-600 text-white rounded w-45 text-[12px]">
                  <strong>Exclusive Offers</strong><br />
                  Buy 2 or more and get 5% off<br />
                  <a href="#" className="text-white text-xs underline">2 offers ›</a>
                </div>
              </div>
            </div>
           

            {/* <div className="flex flex-wrap gap-6 mt-4 text-xs text-center text-gray-700">
              {["50 Year Warranty", "Free Delivery", "Top Brand", "Secure transaction"].map(item => (
                <div key={item} className="flex flex-col items-center w-18">
                  <div className="w-6 h-6 bg-gray-300 rounded-full mb-1"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div> */}
          
            <div className="flex flex-wrap justify-evenly mt-4 mb-3 text-xs text-center text-gray-700" >
                <div  className="flex flex-col items-center w-18">
                  <div className="w-6 h-6 text-xl"><VscWorkspaceTrusted/></div>
                  <span>50 Year Warranty</span>
                </div>
                <div  className="flex flex-col items-center w-18">
                  <div className="w-6 h-6 text-xl "><TbTruckDelivery/></div>
                  <span>Free Delivery</span>
                </div>
                 <div  className="flex flex-col items-center w-18">
                  <div className="w-6 h-6 text-xl"><FaHandHoldingHand/></div>
                  <span>Top Brand</span>
                  </div>
                   <div  className="flex flex-col items-center w-18">
                  <div className="w-6 h-6 text-xl"><RiSecurePaymentLine/></div>
                  <span>Secure transaction</span>
               
                </div>
            </div>
             </div>
          

          {/* Purchase Box */}
          <div className="border w-full lg:max-w-[300px] p-4 rounded-md space-y-3 mt-4">
            <div className="text-2xl font-semibold text-gray-900">
              ₹{product?.price.toLocaleString("en-IN")}<sup className="text-sm">00</sup>
            </div>
            <div className="text-sm flex items-center gap-2">
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">Fulfilled</span>
              <span>FREE delivery <strong>Thursday, 24 April</strong></span>
            </div>
            <p className="text-sm text-gray-600">
              Order within <span className="text-green-700 font-medium">9 hrs 35 mins</span>.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Delivering to:</strong> Samastipur 848101<br />
              <a href="#" className="text-blue-600 underline">Update location</a>
            </p>
            <p className={`font-semibold ${product?.stock > 0 ? 'text-green-700' : 'text-red-700'}`}>
              {product?.stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="text-sm">Payment: <span className="text-gray-600">Secure transaction</span></p>
            <p className="text-sm">Ships from: <strong>Sharma Furniture Works</strong></p>
            <p className="text-sm">Packaging: Ships in product packaging</p>

            {/* Quantity */}
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 border rounded text-sm" onClick={handleDecrement}>-</button>
              <span className="px-3 text-sm">{quantity}</span>
              <button className="px-2 py-1 border rounded text-sm" onClick={handleIncrement}>+</button>
              <span className="ml-2">Quantity</span>
            </div>

            {/* Action Buttons */}
            <button
              onClick={handleaddtocart}
              className="w-full cursor-pointer text-sm font-medium py-2 rounded bg-yellow-400 text-black hover:bg-yellow-500 hover:text-white hover:scale-105 active:scale-95"
            >
              Add to Cart
            </button>
            <button className="w-full py-2 text-sm font-medium bg-orange-500 text-white hover:bg-yellow-500 hover:text-white hover:scale-105 active:scale-95 rounded">
              Buy Now
            </button>
            <button className="w-full py-2 text-sm text-white rounded bg-red-400 hover:bg-yellow-500 hover:text-white hover:scale-105 active:scale-95">
              Add to Wish List
            </button>
            
           
            {userdata?.data?.role === "admin" && (
            <button onClick={()=>{handleDelete(product._id)}} className="w-full py-2 text-sm text-white rounded bg-red-900 hover:bg-yellow-500 hover:text-white hover:scale-105 active:scale-95">
              Delete
            </button>
          )}
            

          </div>
        </div>
      </div>
</div>
      {/* Product Description Section */}
      <div className="">
        <div className="hidden lg:block ">
          <h3 className="text-xl text-black">Product Description</h3>
          <span>{product?.description}</span>
        </div>
      <div className="">
        <div className="flex flex-col  p-1 text-[18px]">
          <div className="!w-full text-black ml-0 mr-0 p-2 bg-white flex justify-between">
              <div className="">Product Specifications</div>
           <div className="cursor-pointer" onClick={handleShowSpecifications}>
                    <GoArrowRight />
             </div>
          </div>
           <div className="">
         {!showspecifications ? (
           <div className=" bg-white pb-4 lg:px-20">
          {product?.specifications?.map((spec, index) => (
            <img key={index} src={spec.url} alt="spec" className="w-full object-contain" />
          ))}
          </div>
         ):("")}
         </div>
        </div>
        </div>
       <div className=" lg:px-3 overflow-hidden ">
        {category ? <div className=" lg:px-3 bg-white">
    <Productsec category={category} />
  </div> : null}

</div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
