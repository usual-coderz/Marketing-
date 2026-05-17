import axios from 'axios'
import { getSession } from 'next-auth/react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
apiClient.interceptors.request.use(async (config) => {
  const session = await getSession()
  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`
  }
  return config
})

// Handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      if (typeof window !== 'undefined') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export const api = {
  // Auth
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  register: (email: string, password: string, username: string) =>
    apiClient.post('/auth/register', { email, password, username }),
  telegramLogin: (code: string) =>
    apiClient.post('/auth/telegram-login', { code }),

  // Listings
  getListings: (page = 1, limit = 12, filters = {}) =>
    apiClient.get('/listings', { params: { page, limit, ...filters } }),
  getListing: (id: string) =>
    apiClient.get(`/listings/${id}`),
  createListing: (data: FormData) =>
    apiClient.post('/listings', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  updateListing: (id: string, data: FormData) =>
    apiClient.put(`/listings/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  deleteListing: (id: string) =>
    apiClient.delete(`/listings/${id}`),
  getFeaturedListings: () =>
    apiClient.get('/listings/featured'),
  getTrendingListings: () =>
    apiClient.get('/listings/trending'),

  // Users
  getUser: (id: string) =>
    apiClient.get(`/users/${id}`),
  updateProfile: (data: any) =>
    apiClient.put('/users/profile', data),
  getUserListings: (userId: string, page = 1) =>
    apiClient.get(`/users/${userId}/listings`, { params: { page } }),
  getUserReviews: (userId: string) =>
    apiClient.get(`/users/${userId}/reviews`),

  // Orders
  getOrders: (page = 1) =>
    apiClient.get('/orders', { params: { page } }),
  getOrder: (id: string) =>
    apiClient.get(`/orders/${id}`),
  createOrder: (listingId: string) =>
    apiClient.post('/orders', { listingId }),
  confirmOrder: (id: string) =>
    apiClient.put(`/orders/${id}/confirm`),
  completeOrder: (id: string) =>
    apiClient.put(`/orders/${id}/complete`),
  disputeOrder: (id: string, reason: string) =>
    apiClient.post(`/orders/${id}/dispute`, { reason }),

  // Reviews
  createReview: (orderId: string, rating: number, comment: string) =>
    apiClient.post('/reviews', { orderId, rating, comment }),
  getReviews: (userId: string) =>
    apiClient.get(`/users/${userId}/reviews`),

  // Notifications
  getNotifications: () =>
    apiClient.get('/notifications'),
  markAsRead: (id: string) =>
    apiClient.put(`/notifications/${id}/read`),
  markAllAsRead: () =>
    apiClient.put('/notifications/read-all'),

  // Marketplace stats
  getMarketplaceStats: () =>
    apiClient.get('/marketplace/stats'),

  // Search
  search: (query: string, filters = {}) =>
    apiClient.get('/listings/search', { params: { q: query, ...filters } }),

  // Favorites
  addFavorite: (listingId: string) =>
    apiClient.post(`/favorites/${listingId}`),
  removeFavorite: (listingId: string) =>
    apiClient.delete(`/favorites/${listingId}`),
  getFavorites: () =>
    apiClient.get('/favorites'),

  // Messages
  sendMessage: (userId: string, message: string) =>
    apiClient.post('/messages', { userId, message }),
  getMessages: (conversationId: string) =>
    apiClient.get(`/messages/${conversationId}`),
  getConversations: () =>
    apiClient.get('/conversations'),
}

export default apiClient
