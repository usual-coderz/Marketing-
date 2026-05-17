"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="max-w-4xl">

          <h1 className="text-6xl md:text-7xl font-black leading-tight text-white">

            Buy & Sell <br />

            <span className="gradient-text">
              Telegram Digital Assets
            </span>

          </h1>

          <p className="mt-8 text-zinc-400 text-xl max-w-2xl leading-relaxed">
            Secure marketplace for Telegram channels,
            bots, usernames and digital services.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              href="/explore"
              className="btn-primary flex items-center"
            >
              Explore Listings
            </Link>

            <Link
              href="/dashboard"
              className="btn-secondary flex items-center"
            >
              Start Selling
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}