import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  BadgeCheck,
  Bot,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">

      {/* Navbar */}

      <nav className="w-full border-b border-white/10 backdrop-blur-xl sticky top-0 z-50">

        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500 glow" />

            <h1 className="text-2xl font-black">
              TGMarket
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-zinc-300">
            <Link href="/">
              Home
            </Link>

            <Link href="/explore">
              Explore
            </Link>

            <Link href="/categories">
              Categories
            </Link>

            <Link href="/dashboard">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-3">

            <Link
              href="/auth/login"
              className="btn-secondary flex items-center"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="btn-primary flex items-center"
            >
              Register
            </Link>

          </div>

        </div>

      </nav>

      {/* Hero */}

      <section className="relative py-28 overflow-hidden">

        <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="max-w-4xl">

            <h1 className="text-6xl md:text-7xl font-black leading-tight">

              Buy & Sell <br />

              <span className="gradient-text">
                Telegram Digital Assets
              </span>

            </h1>

            <p className="mt-8 text-zinc-400 text-xl max-w-2xl leading-relaxed">
              Secure marketplace for Telegram channels,
              groups, bots, usernames, premium gifts,
              automation services and digital assets.
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

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="glass rounded-3xl p-6">
            <TrendingUp className="text-cyan-400" size={34} />

            <h2 className="text-4xl font-black mt-5">
              12K+
            </h2>

            <p className="text-zinc-400 mt-2">
              Active Listings
            </p>
          </div>

          <div className="glass rounded-3xl p-6">
            <ShieldCheck className="text-cyan-400" size={34} />

            <h2 className="text-4xl font-black mt-5">
              100%
            </h2>

            <p className="text-zinc-400 mt-2">
              Escrow Protected
            </p>
          </div>

          <div className="glass rounded-3xl p-6">
            <BadgeCheck className="text-cyan-400" size={34} />

            <h2 className="text-4xl font-black mt-5">
              4.9★
            </h2>

            <p className="text-zinc-400 mt-2">
              Seller Reputation
            </p>
          </div>

          <div className="glass rounded-3xl p-6">
            <Bot className="text-cyan-400" size={34} />

            <h2 className="text-4xl font-black mt-5">
              8K+
            </h2>

            <p className="text-zinc-400 mt-2">
              Telegram Bots
            </p>
          </div>

        </div>

      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-5xl font-black">
              Categories
            </h2>

            <p className="text-zinc-400 mt-3">
              Explore marketplace categories
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {[
            "Telegram Channels",
            "Telegram Groups",
            "Telegram Bots",
            "Premium Usernames",
            "Telegram Stars",
            "Automation Services",
          ].map((category) => (
            <div
              key={category}
              className="glass rounded-3xl p-8 hover:border-cyan-500/20 transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-bold">
                {category}
              </h3>

              <p className="text-zinc-400 mt-3">
                Verified marketplace listings
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Featured Listings */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="mb-10">
          <h2 className="text-5xl font-black">
            Featured Listings
          </h2>

          <p className="text-zinc-400 mt-3">
            Trending digital assets on TGMarket
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="glass rounded-3xl overflow-hidden"
            >

              <div className="h-52 bg-white/5" />

              <div className="p-5">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-bold">
                    Crypto Channel
                  </h3>

                  <span className="bg-cyan-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full">
                    Verified
                  </span>

                </div>

                <p className="text-zinc-400 mt-3">
                  Premium active Telegram audience.
                </p>

                <div className="flex items-center justify-between mt-6">

                  <h4 className="text-2xl font-black">
                    $850
                  </h4>

                  <button className="btn-primary">
                    View
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-white/10 py-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-2xl font-black">
              TGMarket
            </h2>

            <p className="text-zinc-500 mt-2">
              Telegram Digital Marketplace
            </p>
          </div>

          <div className="flex items-center gap-6 text-zinc-400">

            <Link href="/">
              Home
            </Link>

            <Link href="/explore">
              Explore
            </Link>

            <Link href="/support">
              Support
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}