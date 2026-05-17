export default function DisputesTable() {
  return (
    <div className="glass rounded-3xl overflow-hidden">

      <table className="w-full">

        <thead className="border-b border-white/10">

          <tr className="text-left">

            <th className="p-5 text-zinc-400">
              Dispute
            </th>

            <th className="p-5 text-zinc-400">
              Buyer
            </th>

            <th className="p-5 text-zinc-400">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          <tr className="border-b border-white/5">

            <td className="p-5 text-white">
              Ownership Issue
            </td>

            <td className="p-5 text-zinc-400">
              @buyer
            </td>

            <td className="p-5">
              <button className="btn-primary">
                Resolve
              </button>
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}