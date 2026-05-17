export default function ModerationPage() {
  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Moderation
      </h1>

      <p className="text-zinc-400 mb-8">
        Review pending marketplace content.
      </p>

      <div className="space-y-5">

        <div className="glass rounded-2xl p-6 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold">
              Telegram NFT Channel
            </h2>

            <p className="text-zinc-400 mt-2">
              Pending verification
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-green-500/20 text-green-400 px-5 h-10 rounded-xl">
              Approve
            </button>

            <button className="bg-red-500/20 text-red-400 px-5 h-10 rounded-xl">
              Reject
            </button>
          </div>

        </div>

      </div>

    </main>
  );
}