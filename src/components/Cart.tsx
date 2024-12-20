"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface CartItem {
  img: string;
  title: string;
  desc: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const groupedItems = cart.reduce((acc: CartItem[], item) => {
    const existingItem = acc.find((i) => i.title === item.title);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="container mt-10">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      {groupedItems.length > 0 ? (
        <ul className="mt-4">
          {groupedItems.map((item: CartItem, index: number) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Image
                  src={item?.img}
                  alt={item?.title}
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <span>{item?.title}</span>
                <span className="ml-2">x {item?.quantity}</span>
                <span className="ml-10">$ {item?.price * item?.quantity}</span>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(item)}
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
