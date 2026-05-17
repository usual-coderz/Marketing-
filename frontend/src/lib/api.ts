export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000/api";

export const API_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",

  LISTINGS: "/listings",
  ORDERS: "/orders",
  REVIEWS: "/reviews",
  ESCROW: "/escrow",
  NOTIFICATIONS: "/notifications",
};