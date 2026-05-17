export default function DisputesPage() {
  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Disputes
      </h1>

      <p className="text-zinc-400 mb-8">
        Resolve escrow and transaction disputes.
      </p>

      <div className="space-y-5">

        <div className="glass rounded-2xl p-6 flex items-center justify-between">
          
          <div>
            <h2 className="text-xl font-bold">
              Channel Ownership Issue
            </h2>

            <p className="text-zinc-400 mt-2">
              Buyer vs Seller
            </p>
          </div>

          <button className="bg-cyan-500 px-5 h-10 rounded-xl">
            Resolve
          </button>
        </div>

      </div>

    </main>
  );
}