export default function ListingDetailsPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white p-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="glass rounded-3xl h-[420px]" />

        <div>

          <h1 className="text-5xl font-black">
            Telegram Crypto Channel
          </h1>

          <p className="text-zinc-400 mt-5">
            Premium crypto community with active audience.
          </p>

          <div className="mt-8 glass rounded-2xl p-5">
            <p className="text-zinc-400">
              Seller
            </p>

            <h2 className="text-2xl font-bold mt-2">
              @verifiedseller
            </h2>
          </div>

          <button className="mt-8 bg-cyan-500 h-12 px-8 rounded-xl font-semibold">
            Buy Now
          </button>

        </div>

      </div>

    </main>
  );
}