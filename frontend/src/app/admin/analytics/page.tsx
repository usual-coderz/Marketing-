export default function AdminAnalyticsPage() {
  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Analytics
      </h1>

      <p className="text-zinc-400 mb-8">
        Marketplace growth analytics.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Daily Users
          </p>

          <h2 className="text-5xl font-black mt-3">
            4.2K
          </h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Transactions
          </p>

          <h2 className="text-5xl font-black mt-3">
            920
          </h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Revenue
          </p>

          <h2 className="text-5xl font-black mt-3">
            $12K
          </h2>
        </div>

      </div>

    </main>
  );
}