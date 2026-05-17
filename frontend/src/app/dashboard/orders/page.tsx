export default function OrdersPage() {
  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Orders
      </h1>

      <p className="text-zinc-400 mb-8">
        Track your marketplace transactions.
      </p>

      <div className="space-y-5">

        <div className="glass rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Telegram Bot Sale
              </h2>

              <p className="text-zinc-400 mt-1">
                Buyer: @john
              </p>
            </div>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
              Completed
            </span>
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Premium Username
              </h2>

              <p className="text-zinc-400 mt-1">
                Buyer: @alex
              </p>
            </div>

            <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl">
              Pending
            </span>
          </div>
        </div>

      </div>

    </main>
  );
}