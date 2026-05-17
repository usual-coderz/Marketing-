export default function AdminListingsPage() {
  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Listings
      </h1>

      <p className="text-zinc-400 mb-8">
        Marketplace listings management.
      </p>

      <div className="space-y-5">

        <div className="glass rounded-2xl p-6 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold">
              Crypto Telegram Group
            </h2>

            <p className="text-zinc-400 mt-2">
              Active listing
            </p>
          </div>

          <button className="bg-red-500/20 text-red-400 px-5 h-10 rounded-xl">
            Remove
          </button>
        </div>

      </div>

    </main>
  );
}