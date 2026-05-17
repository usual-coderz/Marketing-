type Props = {
  level: string;
};

export default function ReputationBadge({
  level,
}: Props) {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold">
      {level}
    </div>
  );
}