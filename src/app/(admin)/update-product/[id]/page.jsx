"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function UpdateProductPage({ params }) {
  const { id } = params; // get product id from URL
  const router = useRouter();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    oldprice: "",
    tags: "",
    category: [],
    productimg: [],
    productspecificationimg: [],
  });

  // ✅ Fetch old product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${backendurl}product/${id}`);
        setProductData({
          name: data.product.name,
          description: data.product.description,
          price: data.product.price,
          oldprice: data.product.oldprice,
          tags: data.product.tags,
          category: data.product.category || [],
          productimg: data.product.productimg || [],
          productspecificationimg: data.product.productspecificationimg || [],
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProductData({ ...productData, [name]: Array.from(files) });
    } else if (name === "category") {
      setProductData({ ...productData, category: value.split(",") });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  // ✅ Update form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("price", productData.price);
      formData.append("oldprice", productData.oldprice);
      formData.append("tags", productData.tags);

      productData.category.forEach((cat) => formData.append("category", cat));
      productData.productimg.forEach((file) =>
        formData.append("productimg", file)
      );
      productData.productspecificationimg.forEach((file) =>
        formData.append("productspecificationimg", file)
      );

      await axios.put(`${backendurl}admin/product/${id}`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Product updated successfully!");
      router.push("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("❌ Error updating product");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={productData.description}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          type="number"
          name="oldprice"
          placeholder="Old Price"
          value={productData.oldprice}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          type="text"
          name="tags"
          placeholder="Tags"
          value={productData.tags}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Categories (comma separated)"
          value={productData.category}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <div>
          <label className="block mb-2">Product Images</label>
          <input
            type="file"
            name="productimg"
            multiple
            onChange={handleChange}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {productData.productimg.map((img, i) => (
              <img
                key={i}
                src={typeof img === "string" ? img : URL.createObjectURL(img)}
                alt="Preview"
                className="w-20 h-20 object-cover border rounded"
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2">Specification Images</label>
          <input
            type="file"
            name="productspecificationimg"
            multiple
            onChange={handleChange}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {productData.productspecificationimg.map((img, i) => (
              <img
                key={i}
                src={typeof img === "string" ? img : URL.createObjectURL(img)}
                alt="Preview"
                className="w-20 h-20 object-cover border rounded"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-green-700 text-white rounded hover:bg-green-900"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
