export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Poll {
  id: string
  question: string
  description?: string
  category: string
  options: PollOption[]
  totalVotes: number
  status: 'active' | 'expired' | 'draft'
  expiresAt?: Date
  authorId: string
  author: User
  allowMultiple: boolean
  anonymous: boolean
  createdAt: Date
  updatedAt: Date
}

export interface PollOption {
  id: string
  text: string
  votes: number
  percentage?: number
}

export interface Vote {
  id: string
  pollId: string
  userId: string
  optionIds: string[]
  createdAt: Date
}

export interface Comment {
  id: string
  pollId: string
  authorId: string
  author: User
  content: string
  createdAt: Date
  updatedAt: Date
}

export interface PollFilters {
  category?: string
  status?: 'active' | 'expired' | 'all'
  sortBy?: 'newest' | 'oldest' | 'most-voted' | 'ending-soon'
  search?: string
}

export interface DashboardStats {
  totalPolls: number
  totalVotes: number
  activePolls: number
  categories: number
}
