export default function ListingsFilter() {
  return (
    <div className="glass rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Filters
      </h2>

      <div className="space-y-5">

        <select className="input">
          <option>All Categories</option>
          <option>Channels</option>
          <option>Groups</option>
          <option>Bots</option>
        </select>

        <input
          type="text"
          placeholder="Min Price"
          className="input"
        />

        <input
          type="text"
          placeholder="Max Price"
          className="input"
        />

      </div>

    </div>
  );
}