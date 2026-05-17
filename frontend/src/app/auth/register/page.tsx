"use client";

import Link from "next/link";
import { Send } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#070B14] flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-md glass rounded-3xl p-8">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center">
            <Send className="text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              TGMarket
            </h1>

            <p className="text-zinc-400 text-sm">
              Telegram Marketplace
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">
          Create Account
        </h2>

        <p className="text-zinc-400 mb-8">
          Join the trusted Telegram marketplace
        </p>

        <form className="space-y-5">

          <div>
            <label className="text-sm text-zinc-300">
              Username
            </label>

            <input
              type="text"
              placeholder="@username"
              className="w-full mt-2 h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full mt-2 h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none focus:border-cyan-500"
            />
          </div>

          <button
            className="w-full h-12 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all font-semibold"
          >
            Create Account
          </button>

          <button
            type="button"
            className="w-full h-12 rounded-xl bg-[#229ED9] hover:bg-[#1d8ac0] transition-all font-semibold flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Register with Telegram
          </button>
        </form>

        <div className="mt-6 text-center text-zinc-400 text-sm">
          Already have an account?{" "}
          
          <Link
            href="/auth/login"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}