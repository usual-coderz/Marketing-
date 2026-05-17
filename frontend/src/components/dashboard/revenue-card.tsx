type Props = {
  revenue: string;
};

export default function RevenueCard({
  revenue,
}: Props) {
  return (
    <div className="glass rounded-3xl p-6">

      <p className="text-zinc-400">
        Total Revenue
      </p>

      <h2 className="text-5xl font-black text-white mt-4">
        {revenue}
      </h2>

    </div>
  );
}