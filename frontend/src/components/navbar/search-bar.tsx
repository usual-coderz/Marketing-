"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-[320px] h-11 rounded-xl bg-white/5 border border-white/10 flex items-center px-4">
      
      <Search size={18} className="text-zinc-400" />

      <input
        placeholder="Search listings..."
        className="bg-transparent flex-1 px-3 outline-none text-white placeholder:text-zinc-500"
      />
    </div>
  );
}