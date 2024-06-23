"use client"
import Banner from "@/components/frontend/banner";
import Cart from "@/components/frontend/cart";
import Features from "@/components/frontend/features";
import Footer from "@/components/frontend/footer";
import Hero from "@/components/frontend/hero";
import Navbar from "@/components/frontend/navbar";
import TrendingProducts from "@/components/frontend/trendingProducts";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false)
  return (
    <main className="flex min-h-screen bg-white flex-col">
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Features />
      <TrendingProducts />
      <Banner />
      <Footer />
    </main>
  );
}
