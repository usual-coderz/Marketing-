export default function ListingsPage() {
  const listings = [
    "Telegram Crypto Channel",
    "Gaming Community Group",
    "Automation Bot Service",
    "Premium Username",
  ];

  return (
    <main>

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-black">
            My Listings
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage all your marketplace listings.
          </p>
        </div>

        <button className="bg-cyan-500 px-5 h-11 rounded-xl font-semibold">
          Add Listing
        </button>
      </div>

      <div className="space-y-5">

        {listings.map((item) => (
          <div
            key={item}
            className="glass rounded-3xl p-6 flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">
                {item}
              </h2>

              <p className="text-zinc-400 mt-1">
                Active Listing
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-white/5 border border-white/10 px-5 h-10 rounded-xl">
                Edit
              </button>

              <button className="bg-red-500/20 text-red-400 px-5 h-10 rounded-xl">
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>

    </main>
  );
}