import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api";

export async function getOrders() {
  const response = await api.get(
    API_ENDPOINTS.ORDERS
  );

  return response.data;
}