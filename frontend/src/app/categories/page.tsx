export default function CategoriesPage() {
  const categories = [
    "Telegram Channels",
    "Telegram Groups",
    "Telegram Bots",
    "Premium Usernames",
    "Telegram Stars",
    "NFT Assets",
  ];

  return (
    <main className="min-h-screen bg-[#070B14] text-white p-6">

      <h1 className="text-5xl font-black mb-8">
        Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {categories.map((item) => (
          <div
            key={item}
            className="glass rounded-3xl p-8 hover:border-cyan-500/30 border border-white/5 transition-all"
          >
            <h2 className="text-2xl font-bold">
              {item}
            </h2>
          </div>
        ))}

      </div>

    </main>
  );
}