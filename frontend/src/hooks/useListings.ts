"use client";

import { useEffect, useState } from "react";

export default function useListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings([]);
  }, []);

  return {
    listings,
  };
}