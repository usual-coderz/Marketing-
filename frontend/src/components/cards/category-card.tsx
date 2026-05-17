type Props = {
  title: string;
};

export default function CategoryCard({
  title,
}: Props) {
  return (
    <div className="glass rounded-3xl p-8 hover:border-cyan-500/20 transition-all cursor-pointer">

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="text-zinc-400 mt-3">
        Verified marketplace listings
      </p>

    </div>
  );
}