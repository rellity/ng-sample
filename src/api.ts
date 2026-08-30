import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import type { Observable } from 'rxjs'

export interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
  description?: string
}

export interface ProductsResponse {
  products: Product[]
  total: number
}

export interface Todo {
  id: number
  todo: string
  completed: boolean
}

export interface TodosResponse {
  todos: Todo[]
  total: number
}

const BASE = 'https://dummyjson.com'

@Injectable({ providedIn: 'root' })
export class DummyJsonApi {
  readonly #http = inject(HttpClient)

  searchProducts(query: string, limit = 6): Observable<ProductsResponse> {
    return this.#http.get<ProductsResponse>(`${BASE}/products/search`, {
      params: { q: query, limit, select: 'title,price,thumbnail' },
    })
  }

  product(id: string): Observable<Product> {
    return this.#http.get<Product>(`${BASE}/products/${id}`, {
      params: { select: 'title,price,thumbnail,description' },
    })
  }

  todos(limit = 6, skip = 0): Observable<TodosResponse> {
    return this.#http.get<TodosResponse>(`${BASE}/todos`, {
      params: { limit, skip },
    })
  }
}
