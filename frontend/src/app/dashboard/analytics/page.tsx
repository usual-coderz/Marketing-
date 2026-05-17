export default function AnalyticsPage() {
  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Analytics
      </h1>

      <p className="text-zinc-400 mb-8">
        Marketplace performance overview.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Total Views
          </p>

          <h2 className="text-5xl font-black mt-4">
            92K
          </h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Conversion Rate
          </p>

          <h2 className="text-5xl font-black mt-4">
            12%
          </h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">
            Monthly Revenue
          </p>

          <h2 className="text-5xl font-black mt-4">
            $4.8K
          </h2>
        </div>

      </div>

      <div className="glass rounded-3xl p-8 mt-8 h-[400px] flex items-center justify-center">
        <p className="text-zinc-500 text-lg">
          Analytics Chart Coming Soon
        </p>
      </div>

    </main>
  );
}