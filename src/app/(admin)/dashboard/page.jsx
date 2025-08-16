'use client';
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const CATEGORY_OPTIONS = [
  "bed", "boxbed", "masterbed", "chair", "dining chair",
  "table", "dining table", "sofa", "sofa set", "dressing table",
  "wardrobe", "almirah", "center table", "side table",
  "bookshelf", "TV unit", "office table", "kids furniture",
  "storage", "others"
];

const Dashboard = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    oldprice: "",
    productimg: [],
    productspecificationimg: [],
    category: [],
    tags: "",
  });

  const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, options } = e.target;

    if (name === "productimg" || name === "productspecificationimg") {
      setProductData({ ...productData, [name]: Array.from(files) });
    } else if (name === "category") {
      const selected = Array.from(options)
        .filter((opt) => opt.selected)
        .map((opt) => opt.value);
      setProductData({ ...productData, category: selected });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("price", productData.price);
      formData.append("oldprice", productData.oldprice);

      // Send categories and tags as JSON stringified arrays
      formData.append("category", JSON.stringify(productData.category));
      formData.append(
        "tags",
        JSON.stringify(productData.tags.split(",").map((tag) => tag.trim()))
      );

      productData.productimg.forEach((img) =>
        formData.append("productimg", img)
      );
      productData.productspecificationimg.forEach((img) =>
        formData.append("productspecificationimg", img)
      );

      await axios.post(`${backendurl}/admin/product/new`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success("Product created successfully!");

      setProductData({
        name: "",
        description: "",
        price: "",
        oldprice: "",
        productimg: [],
        productspecificationimg: [],
        category: [],
        tags: "",
      });
    } catch (error) {
      toast.error("Try again! Server problem code 500");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto pt-20 p-6 h-auto bg-white shadow-md"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        Create New Product
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleChange}
          required
          className="p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={productData.description}
          onChange={handleChange}
          required
          rows={4}
          className="p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="number"
          name="price"
          placeholder="Product Price (₹)"
          value={productData.price}
          onChange={handleChange}
          required
          min={0}
          className="p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="number"
          name="oldprice"
          placeholder="Product Old Price (₹)"
          value={productData.oldprice}
          onChange={handleChange}
          required
          min={0}
          className="p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Category */}
        <div>
          <label className="font-semibold text-purple-700">Select Categories</label>
          <select
            name="category"
            multiple
            value={productData.category}
            onChange={handleChange}
            className="mt-1 p-3 border border-purple-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {CATEGORY_OPTIONS.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="font-semibold text-purple-700">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={productData.tags}
            onChange={handleChange}
            placeholder="e.g. wooden, luxury, handcrafted"
            className="mt-1 p-3 border border-purple-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Product Images */}
        <div>
          <label className="font-semibold text-purple-700">Product Images</label>
          <input
            type="file"
            name="productimg"
            accept="image/*"
            multiple
            onChange={handleChange}
            required
            className="mt-1 file:p-1 border border-purple-300 rounded-xl w-full file:cursor-pointer file:bg-purple-100 hover:file:bg-purple-200 file:border-none file:text-purple-800"
          />
          {productData.productimg.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {productData.productimg.map((img, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(img)}
                  alt="Product"
                  className="w-20 h-20 object-cover border rounded-md"
                />
              ))}
            </div>
          )}
        </div>

        {/* Specification Images */}
        <div>
          <label className="font-semibold text-purple-700">Specification Images</label>
          <input
            type="file"
            name="productspecificationimg"
            accept="image/*"
            multiple
            onChange={handleChange}
            required
            className="mt-1 file:p-1 border border-purple-300 rounded-xl w-full file:cursor-pointer file:bg-purple-100 hover:file:bg-purple-200 file:border-none file:text-purple-800"
          />
          {productData.productspecificationimg.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {productData.productspecificationimg.map((img, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(img)}
                  alt="Spec"
                  className="w-20 h-20 object-cover border rounded-md"
                />
              ))}
            </div>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="!bg-purple-700 !text-white py-3 rounded-xl transition duration-300 hover:!bg-purple-800 disabled:!bg-purple-400"
        >
          {loading ? "Submitting..." : "Submit Product"}
        </motion.button>
      </form>
      <ToastContainer />
    </motion.div>
  );
};

export default Dashboard;
