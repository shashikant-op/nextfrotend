"use client";

import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { registeruser, loginuser } from "@/redux/users/userslice";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const result = await dispatch(loginuser(form));
      if (result.type === "auth/login/fulfilled") {
        toast.success("Login successful!");
        router.push("/");
      } else {
        toast.error("Email or password is incorrect.");
      }
    } else {
      const result = await dispatch(registeruser(form));
      if (result.type === "auth/register/fulfilled") {
        toast.success("Registration successful!");
        router.push("/");
      } else {
        toast.error("Something went wrong. Try again.");
      }
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleForgot = async () => {
    try {
      const email = form.email;
      const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;
      await axios.post(`${BACKEND}/password/forgot`, { email });
      toast.success("Check your email for reset instructions.");
    } catch (err) {
      toast.error("Something went wrong while sending reset email.");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-t from-purple-900 to-white to-30% flex items-center justify-center px-4">
      <ToastContainer />
      <div className="w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:border-purple-500 text-gray-700 py-2 rounded-lg transition duration-300"
          >
            <FaGoogle className="text-purple-700" />
            Continue with Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-600 bg-transparent hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
          <button
            className="ml-2 text-sm text-blue-600 bg-transparent underline"
            onClick={handleForgot}
          >
            Forgot?
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
