type Props = {
  status: string;
};

export default function EscrowStatus({
  status,
}: Props) {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
      {status}
    </div>
  );
}