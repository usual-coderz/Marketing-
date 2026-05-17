export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white p-6">

      <h1 className="text-5xl font-black mb-3">
        Support
      </h1>

      <p className="text-zinc-400 mb-8">
        Contact marketplace support team.
      </p>

      <div className="glass rounded-3xl p-8 max-w-2xl">

        <input
          placeholder="Subject"
          className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 mb-5"
        />

        <textarea
          placeholder="Describe your issue..."
          className="w-full h-40 rounded-xl bg-white/5 border border-white/10 px-4 py-4"
        />

        <button className="mt-5 bg-cyan-500 h-12 px-6 rounded-xl font-semibold">
          Submit Ticket
        </button>

      </div>

    </main>
  );
}