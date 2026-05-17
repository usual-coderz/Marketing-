import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api";

export async function getReviews() {
  const response = await api.get(
    API_ENDPOINTS.REVIEWS
  );

  return response.data;
}