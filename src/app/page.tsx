"use client"
import Cart from "@/components/frontend/cart";
import Navbar from "@/components/frontend/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false)
  return (
    <main className="flex min-h-screen bg-white">
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
    </main>
  );
}
