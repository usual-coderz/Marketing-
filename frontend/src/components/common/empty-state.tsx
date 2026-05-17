type Props = {
  title: string;
  description: string;
};

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="glass rounded-3xl p-10 text-center">

      <h2 className="text-3xl font-black text-white">
        {title}
      </h2>

      <p className="text-zinc-400 mt-4">
        {description}
      </p>

    </div>
  );
}