export default function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

      <div className="glass rounded-3xl p-6">
        <p className="text-zinc-400">
          Users
        </p>

        <h2 className="text-5xl font-black text-white mt-4">
          12K
        </h2>
      </div>

      <div className="glass rounded-3xl p-6">
        <p className="text-zinc-400">
          Listings
        </p>

        <h2 className="text-5xl font-black text-white mt-4">
          4.2K
        </h2>
      </div>

      <div className="glass rounded-3xl p-6">
        <p className="text-zinc-400">
          Reports
        </p>

        <h2 className="text-5xl font-black text-white mt-4">
          92
        </h2>
      </div>

      <div className="glass rounded-3xl p-6">
        <p className="text-zinc-400">
          Revenue
        </p>

        <h2 className="text-5xl font-black text-white mt-4">
          $24K
        </h2>
      </div>

    </div>
  );
}