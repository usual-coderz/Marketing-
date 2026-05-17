type Props = {
  username: string;
};

export default function SellerHeader({
  username,
}: Props) {
  return (
    <div className="glass rounded-3xl p-8">

      <div className="flex items-center gap-5">

        <div className="w-24 h-24 rounded-full bg-cyan-500" />

        <div>

          <h1 className="text-4xl font-black text-white">
            {username}
          </h1>

          <p className="text-zinc-400 mt-2">
            Trusted Telegram marketplace seller.
          </p>

        </div>

      </div>

    </div>
  );
}