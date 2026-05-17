"use client";

import Link from "next/link";
import SearchBar from "./search-bar";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <nav className="w-full h-16 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500 glow" />

          <h1 className="text-2xl font-black text-white">
            TGMarket
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-zinc-300">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        <div className="hidden lg:block">
          <SearchBar />
        </div>

        <div className="lg:hidden">
          <MobileMenu />
        </div>

      </div>

    </nav>
  );
}