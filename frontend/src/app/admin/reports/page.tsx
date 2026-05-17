export default function ReportsPage() {
  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Reports
      </h1>

      <p className="text-zinc-400 mb-8">
        Scam & abuse reports submitted by users.
      </p>

      <div className="space-y-5">

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold">
            Fake Telegram Channel Listing
          </h2>

          <p className="text-zinc-400 mt-2">
            Reported by @buyer
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold">
            Escrow Scam Attempt
          </h2>

          <p className="text-zinc-400 mt-2">
            Reported by @user123
          </p>
        </div>

      </div>

    </main>
  );
}