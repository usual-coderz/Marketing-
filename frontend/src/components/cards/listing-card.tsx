type Props = {
  title: string;
  price: string;
};

export default function ListingCard({
  title,
  price,
}: Props) {
  return (
    <div className="glass rounded-3xl overflow-hidden">

      <div className="h-52 bg-white/5" />

      <div className="p-5">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <span className="bg-cyan-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full">
            Verified
          </span>

        </div>

        <p className="text-zinc-400 mt-3">
          Premium Telegram asset listing.
        </p>

        <div className="flex items-center justify-between mt-6">

          <h4 className="text-2xl font-black text-white">
            {price}
          </h4>

          <button className="btn-primary">
            View
          </button>

        </div>

      </div>

    </div>
  );
}