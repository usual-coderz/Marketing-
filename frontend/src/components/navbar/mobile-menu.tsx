"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
      <Menu size={22} />
    </button>
  );
}