import type { Product } from '../types/Product'

const API_URL = '/api/lista-produtos/produtos.json'

interface ApiResponse {
  success: boolean
  products: Product[]
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }

  const data: ApiResponse = await response.json()

  return data.products
}