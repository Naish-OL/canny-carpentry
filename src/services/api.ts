/**
 * Canny Carpentry API Client
 * Integrates with Cloudflare Worker backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://canny-carpentry-api.naish-oloughlin.workers.dev'

export interface Product {
  id: string
  name: string
  size_dimensions: string
  price: number
  stock: number
  created_at: string
}

export interface Quote {
  id: string
  customer_name: string
  email: string
  phone?: string
  job_details: string
  job_type: 'kitchen' | 'carpentry'
  status: string
  created_at: string
}

export interface CreateQuotePayload {
  customer_name: string
  email: string
  phone?: string
  job_details: string
  job_type: 'kitchen' | 'carpentry'
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  /**
   * Fetch all products
   */
  async getProducts(options?: { inStock?: boolean }): Promise<Product[]> {
    const url = new URL(`${this.baseUrl}/api/products`)
    if (options?.inStock) {
      url.searchParams.set('inStock', 'true')
    }

    const response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`)
    }

    const { data } = await response.json()
    return data
  }

  /**
   * Fetch a single product by ID
   */
  async getProductById(id: string): Promise<Product> {
    const response = await fetch(`${this.baseUrl}/api/products/${id}`)
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Product not found')
      }
      throw new Error(`Failed to fetch product: ${response.statusText}`)
    }

    const { data } = await response.json()
    return data
  }

  /**
   * Create a new quote request
   */
  async createQuote(payload: CreateQuotePayload): Promise<Quote> {
    const response = await fetch(`${this.baseUrl}/api/quotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to create quote')
    }

    const { data } = await response.json()
    return data
  }

  /**
   * Health check
   */
  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`)
      return response.ok
    } catch {
      return false;
    }
  }
}

export const apiClient = new ApiClient(API_BASE_URL)