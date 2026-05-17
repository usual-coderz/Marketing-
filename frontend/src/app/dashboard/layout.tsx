"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BarChart3,
  Package,
  ShoppingCart,
  ShieldCheck,
  Settings,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = [
    {
      name: "Overview",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      name: "Analytics",
      icon: BarChart3,
      href: "/dashboard/analytics",
    },
    {
      name: "Listings",
      icon: Package,
      href: "/dashboard/listings",
    },
    {
      name: "Orders",
      icon: ShoppingCart,
      href: "/dashboard/orders",
    },
    {
      name: "Escrow",
      icon: ShieldCheck,
      href: "/dashboard/escrow",
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070B14] text-white flex">
      
      {/* Sidebar */}
      <aside className="w-[270px] border-r border-white/10 bg-black/30 backdrop-blur-xl p-6 hidden lg:block">
        
        <div className="mb-10">
          <h1 className="text-3xl font-black text-cyan-400">
            TGMarket
          </h1>

          <p className="text-zinc-500 text-sm mt-1">
            Seller Dashboard
          </p>
        </div>

        <div className="space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 h-12 px-4 rounded-xl hover:bg-white/5 transition-all text-zinc-300 hover:text-white"
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          ))}
        </div>
      </aside>

      {/* Content */}
      <section className="flex-1 p-6">
        {children}
      </section>
    </main>
  );
}