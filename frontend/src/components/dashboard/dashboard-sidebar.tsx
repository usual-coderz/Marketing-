"use client";

import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="w-[270px] border-r border-white/10 bg-black/30 backdrop-blur-xl p-6 hidden lg:block">

      <h1 className="text-3xl font-black text-cyan-400 mb-10">
        TGMarket
      </h1>

      <div className="space-y-3">

        <Link
          href="/dashboard"
          className="flex items-center h-12 px-4 rounded-xl hover:bg-white/5 text-zinc-300"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/listings"
          className="flex items-center h-12 px-4 rounded-xl hover:bg-white/5 text-zinc-300"
        >
          Listings
        </Link>

        <Link
          href="/dashboard/orders"
          className="flex items-center h-12 px-4 rounded-xl hover:bg-white/5 text-zinc-300"
        >
          Orders
        </Link>

      </div>

    </aside>
  );
}