import ListingCard from "../cards/listing-card";

export default function ListingsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

      {[1, 2, 3, 4].map((item) => (
        <ListingCard
          key={item}
          title="Telegram Channel"
          price="$850"
        />
      ))}

    </div>
  );
}