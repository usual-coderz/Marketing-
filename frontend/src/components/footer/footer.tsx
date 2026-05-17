import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-black text-white">
            TGMarket
          </h2>

          <p className="text-zinc-500 mt-2">
            Telegram Marketplace Platform
          </p>
        </div>

        <div className="flex items-center gap-6 text-zinc-400">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/support">Support</Link>
        </div>

      </div>

    </footer>
  );
}