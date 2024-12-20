"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mt-10">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      {cart.length > 0 ? (
        <ul className="mt-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <span>{item.title}</span>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(item)} // Remove item from cart
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
