export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  reputation: number
  verifiedSeller: boolean
  createdAt: string
  bio?: string
  telegramId?: string
  telegramUsername?: string
}

export interface Listing {
  id: string
  title: string
  description: string
  category: string
  price: number
  currency: string
  images: string[]
  seller: User
  status: 'active' | 'sold' | 'pending' | 'inactive'
  views: number
  favorites: number
  createdAt: string
  updatedAt: string
  featured?: boolean
  tags?: string[]
  condition?: string
  deliveryTime?: string
}

export interface Order {
  id: string
  listingId: string
  buyerId: string
  sellerId: string
  amount: number
  status: 'pending' | 'confirmed' | 'completed' | 'disputed' | 'refunded'
  createdAt: string
  updatedAt: string
  escrowStatus?: 'pending' | 'released' | 'refunded'
}

export interface Review {
  id: string
  buyerId: string
  sellerId: string
  orderId: string
  rating: number
  comment: string
  createdAt: string
}

export interface Notification {
  id: string
  userId: string
  type: 'order' | 'message' | 'listing' | 'review' | 'system'
  title: string
  message: string
  read: boolean
  createdAt: string
  data?: Record<string, any>
}

export interface MarketplaceStats {
  totalListings: number
  totalUsers: number
  totalOrders: number
  volumeToday: number
  activeSellers: number
  newListingsToday: number
  avgRating: number
  trustedSellers: number
}

export interface SearchFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  sortBy?: 'newest' | 'price-low' | 'price-high' | 'popular' | 'rating'
  condition?: string
  verifiedOnly?: boolean
  search?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  pages: number
}
