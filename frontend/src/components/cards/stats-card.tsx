type Props = {
  title: string;
  value: string;
};

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div className="glass rounded-3xl p-6">

      <p className="text-zinc-400">
        {title}
      </p>

      <h2 className="text-5xl font-black text-white mt-4">
        {value}
      </h2>

    </div>
  );
}