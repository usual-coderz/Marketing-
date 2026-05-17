export default function ExplorePage() {
  const listings = [
    "Telegram Crypto Channel",
    "Gaming Group",
    "Premium Username",
    "Automation Service",
  ];

  return (
    <main className="min-h-screen bg-[#070B14] text-white p-6">

      <h1 className="text-5xl font-black mb-3">
        Explore Listings
      </h1>

      <p className="text-zinc-400 mb-10">
        Discover premium Telegram assets & services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        {listings.map((item) => (
          <div
            key={item}
            className="glass rounded-3xl p-5"
          >
            <div className="h-44 rounded-2xl bg-white/5 mb-5" />

            <h2 className="text-xl font-bold">
              {item}
            </h2>

            <p className="text-zinc-400 mt-2">
              Verified Seller
            </p>

            <button className="w-full mt-5 bg-cyan-500 h-11 rounded-xl font-semibold">
              View Listing
            </button>
          </div>
        ))}

      </div>

    </main>
  );
}