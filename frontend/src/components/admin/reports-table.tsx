export default function ReportsTable() {
  return (
    <div className="glass rounded-3xl overflow-hidden">

      <table className="w-full">

        <thead className="border-b border-white/10">

          <tr className="text-left">

            <th className="p-5 text-zinc-400">
              Report
            </th>

            <th className="p-5 text-zinc-400">
              User
            </th>

            <th className="p-5 text-zinc-400">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          <tr className="border-b border-white/5">

            <td className="p-5 text-white">
              Scam Attempt
            </td>

            <td className="p-5 text-zinc-400">
              @user123
            </td>

            <td className="p-5">
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                Pending
              </span>
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}