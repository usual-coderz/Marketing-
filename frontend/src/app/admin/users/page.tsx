export default function UsersPage() {
  const users = [
    "@crypto_owner",
    "@tgseller",
    "@marketadmin",
    "@verifiedseller",
  ];

  return (
    <main>

      <h1 className="text-4xl font-black mb-2">
        Users
      </h1>

      <p className="text-zinc-400 mb-8">
        Marketplace users management.
      </p>

      <div className="space-y-4">

        {users.map((user) => (
          <div
            key={user}
            className="glass rounded-2xl p-5 flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">
                {user}
              </h2>

              <p className="text-zinc-400 mt-1">
                Verified Seller
              </p>
            </div>

            <button className="bg-red-500/20 text-red-400 px-5 h-10 rounded-xl">
              Ban User
            </button>
          </div>
        ))}

      </div>

    </main>
  );
}