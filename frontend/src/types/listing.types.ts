export interface Listing {
  _id: string;

  title: string;

  description: string;

  price: number;

  category: string;

  sellerId: string;

  verified: boolean;
}