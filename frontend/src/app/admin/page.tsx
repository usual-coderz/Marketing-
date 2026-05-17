export default function AdminDashboardPage() {
  return (
    <main>

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-black">
            Admin Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage marketplace activity and users.
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">Users</p>
          <h2 className="text-4xl font-black mt-3">12.8K</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">Listings</p>
          <h2 className="text-4xl font-black mt-3">3.2K</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">Reports</p>
          <h2 className="text-4xl font-black mt-3">86</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-400">Revenue</p>
          <h2 className="text-4xl font-black mt-3">$92K</h2>
        </div>

      </div>

    </main>
  );
}