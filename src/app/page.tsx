"use client"
import Cart from "@/components/frontend/cart";
import Hero from "@/components/frontend/hero";
import Navbar from "@/components/frontend/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false)
  return (
    <main className="flex min-h-screen bg-white flex-col">
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
    </main>
  );
}
