export interface Order {
  _id: string;

  buyerId: string;

  sellerId: string;

  listingId: string;

  amount: number;

  status: string;
}