export function formatPrice(price: number) {
  return `$${price}`;
}

export function truncateText(
  text: string,
  limit: number
) {
  if (text.length <= limit) return text;

  return text.slice(0, limit) + "...";
}