import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api";

export async function getNotifications() {
  const response = await api.get(
    API_ENDPOINTS.NOTIFICATIONS
  );

  return response.data;
}