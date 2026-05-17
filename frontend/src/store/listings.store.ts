import { create } from "zustand";

type ListingsStore = {
  listings: any[];

  setListings: (listings: any[]) => void;
};

export const useListingsStore =
  create<ListingsStore>((set) => ({
    listings: [],

    setListings: (listings) =>
      set({
        listings,
      }),
  }));