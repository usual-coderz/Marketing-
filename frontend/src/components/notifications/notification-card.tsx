type Props = {
  title: string;
  message: string;
};

export default function NotificationCard({
  title,
  message,
}: Props) {
  return (
    <div className="glass rounded-2xl p-5">

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="text-zinc-400 mt-3">
        {message}
      </p>

    </div>
  );
}