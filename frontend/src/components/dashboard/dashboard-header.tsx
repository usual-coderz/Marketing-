export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-8">

      <div>
        <h1 className="text-4xl font-black text-white">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Welcome back to TGMarket
        </p>
      </div>

      <button className="btn-primary">
        Create Listing
      </button>

    </div>
  );
}