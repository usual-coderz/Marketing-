import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api";

export async function getListings() {
  const response = await api.get(
    API_ENDPOINTS.LISTINGS
  );

  return response.data;
}

export async function getListingById(id: string) {
  const response = await api.get(
    `${API_ENDPOINTS.LISTINGS}/${id}`
  );

  return response.data;
}