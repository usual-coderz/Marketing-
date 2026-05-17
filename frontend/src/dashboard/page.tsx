export default function DashboardPage() {
  return (
    <main>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-black">
            Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Welcome back to your marketplace dashboard.
          </p>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 transition-all px-5 h-11 rounded-xl font-semibold">
          Create Listing
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Total Revenue
          </p>

          <h2 className="text-4xl font-black mt-3">
            $12.4K
          </h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Active Listings
          </p>

          <h2 className="text-4xl font-black mt-3">
            48
          </h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Orders
          </p>

          <h2 className="text-4xl font-black mt-3">
            134
          </h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Reputation
          </p>

          <h2 className="text-4xl font-black mt-3">
            4.9★
          </h2>
        </div>
      </div>

      <div className="mt-8 glass rounded-3xl p-8">
        
        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            New order received for Telegram channel listing.
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            Escrow payment released successfully.
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            Your seller profile reached Level 5 reputation.
          </div>

        </div>
      </div>
    </main>
  );
}