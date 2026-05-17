type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10">

      <h2 className="text-5xl font-black text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="text-zinc-400 mt-3">
          {subtitle}
        </p>
      )}

    </div>
  );
}