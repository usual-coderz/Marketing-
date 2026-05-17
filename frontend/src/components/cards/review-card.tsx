type Props = {
  username: string;
  review: string;
};

export default function ReviewCard({
  username,
  review,
}: Props) {
  return (
    <div className="glass rounded-3xl p-6">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-cyan-500" />

        <div>
          <h3 className="text-xl font-bold text-white">
            {username}
          </h3>

          <p className="text-yellow-400">
            ★★★★★
          </p>
        </div>

      </div>

      <p className="text-zinc-400 mt-5 leading-relaxed">
        {review}
      </p>

    </div>
  );
}