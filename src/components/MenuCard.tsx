"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface MenuCardProps {
  img: string;
  title: string;
  desc: string;
  price: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ img, title, desc, price }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <Image
        src={img}
        alt={title}
        width={300}
        height={200}
        className="menu-card-image w-45 h-45 rounded mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{desc}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">$ {price}</span>
        <button
          className="bg-accent text-white px-4 py-2 rounded"
          onClick={() => addToCart({ img, title, desc, price })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
