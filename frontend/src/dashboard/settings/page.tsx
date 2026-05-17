export default function SettingsPage() {
  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Settings
      </h1>

      <p className="text-zinc-400 mb-8">
        Manage your account settings.
      </p>

      <div className="glass rounded-3xl p-8 space-y-6">

        <div>
          <label className="text-sm text-zinc-300">
            Username
          </label>

          <input
            className="w-full mt-2 h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none"
            placeholder="@username"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-300">
            Email
          </label>

          <input
            className="w-full mt-2 h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none"
            placeholder="your@email.com"
          />
        </div>

        <button className="bg-cyan-500 px-6 h-12 rounded-xl font-semibold">
          Save Changes
        </button>

      </div>

    </main>
  );
}