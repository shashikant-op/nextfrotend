"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ cartitem = [] }) => {
  const frontendlink = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://sharmafurnitureworks.com";
  const phoneNumber = "918051429677"; // Consider keeping this in .env

  const generateMessage = () => {
    if (!Array.isArray(cartitem)) return encodeURIComponent("No items in cart.");

    let message = "🛒 *Order Inquiry from Sharma Furniture*:\n\n";
    cartitem?.forEach((item) => {
      message += `🔹 *${item.title}*\n`;
      message += `Qty: ${item.quantity}\n`;
      message += `Price: ₹${item.price}\n`;
      message += `Product: ${frontendlink}/product/${item.product}\n\n`;
    });
    message += "Please confirm availability and delivery details.";
    return encodeURIComponent(message);
  };

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${generateMessage()}`;

  return (
    <div className="!bg-transparent">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="!text-white flex flex-row"
      >
        Send Inquiry <FaWhatsapp className="text-white ml-3 text-2xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
