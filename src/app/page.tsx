"use client";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Survey from "@/components/Survey";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main>
      <CartProvider>
        <Hero />
        <Featured />
        <Services />
        <Menu />
        <Survey />
      </CartProvider>
    </main>
  );
}
