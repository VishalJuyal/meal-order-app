"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { cart, addToCart } = useCart();
  const router = useRouter();

  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          onClick={() => router.push("/")}
        />
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
          <li onClick={() => router.push("/")}>Home</li>
          <li onClick={() => router.push("/")}>About</li>
          <li onClick={() => router.push("/menu")}>Dish</li>
          <li>Contact</li>
          {/* <button className="bg-accent text-white px-6 py-2 rounded-3xl">
            SignUp
          </button> */}
        </ul>

        <div
          className="bg-accent text-white px-6 py-2 rounded-3xl"
          onClick={() => router.push("/cart")}
        >
          <span>Cart ({cart?.length})</span>
        </div>

        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
