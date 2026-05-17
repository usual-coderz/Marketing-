"use client";

import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-[270px] border-r border-white/10 bg-black/30 backdrop-blur-xl p-6 hidden lg:block">

      <h1 className="text-3xl font-black text-red-400 mb-10">
        Admin Panel
      </h1>

      <div className="space-y-3">

        <Link
          href="/admin"
          className="flex items-center h-12 px-4 rounded-xl hover:bg-white/5 text-zinc-300"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/users"
          className="flex items-center h-12 px-4 rounded-xl hover:bg-white/5 text-zinc-300"
        >
          Users
        </Link>

        <Link
          href="/admin/reports"
          className="flex items-center h-12 px-4 rounded-xl hover:bg-white/5 text-zinc-300"
        >
          Reports
        </Link>

        <Link
          href="/admin/disputes"
          className="flex items-center h-12 px-4 rounded-xl hover:bg-white/5 text-zinc-300"
        >
          Disputes
        </Link>

      </div>

    </aside>
  );
}