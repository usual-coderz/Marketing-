import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api";

export async function login(data: any) {
  const response = await api.post(
    API_ENDPOINTS.LOGIN,
    data
  );

  return response.data;
}

export async function register(data: any) {
  const response = await api.post(
    API_ENDPOINTS.REGISTER,
    data
  );

  return response.data;
}