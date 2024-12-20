import type { Post } from './posts'

export interface Category {
  id: string,
  slug: string,
  name: string,
  count: number
}

export interface CategoryDetails {
  id: string,
  slug: string,
  name: string,
  posts: Post[]
}

export const getCategoriesUrl = () => (
  'https://json-server-vercel-chi.vercel.app/categories'
)

export const getCategoryDetailsUrl = (categorySlug: string) => (
  `https://json-server-vercel-chi.vercel.app/categories/${categorySlug}?_embed=posts`
)
