export default function EscrowPage() {
  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Escrow
      </h1>

      <p className="text-zinc-400 mb-8">
        Secure marketplace transactions.
      </p>

      <div className="glass rounded-3xl p-8">

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-6">
          
          <h2 className="text-2xl font-bold text-cyan-400">
            Active Escrow
          </h2>

          <p className="text-zinc-300 mt-3">
            Telegram Channel Transfer
          </p>

          <div className="mt-6 flex gap-4">

            <button className="bg-cyan-500 px-5 h-11 rounded-xl font-semibold">
              Release Funds
            </button>

            <button className="bg-red-500/20 text-red-400 px-5 h-11 rounded-xl">
              Open Dispute
            </button>

          </div>
        </div>

      </div>

    </main>
  );
}