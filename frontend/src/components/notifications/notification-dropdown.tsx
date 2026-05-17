"use client";

import { Bell } from "lucide-react";

export default function NotificationDropdown() {
  return (
    <button className="relative w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">

      <Bell size={20} />

      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400" />

    </button>
  );
}