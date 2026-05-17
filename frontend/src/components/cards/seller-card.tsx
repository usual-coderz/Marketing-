type Props = {
  username: string;
};

export default function SellerCard({
  username,
}: Props) {
  return (
    <div className="glass rounded-3xl p-6 text-center">

      <div className="w-20 h-20 rounded-full bg-cyan-500 mx-auto" />

      <h2 className="text-2xl font-bold text-white mt-5">
        {username}
      </h2>

      <p className="text-zinc-400 mt-2">
        Verified Seller
      </p>

      <button className="btn-primary w-full mt-6">
        View Profile
      </button>

    </div>
  );
}