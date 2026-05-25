
export interface FeaturedArticleProps {
  title?: string
  subtitle?: string
  excerpt?: string
  slug?: string
  imageUrl?: string
  imageAlt?: string
  category?: string
}


export interface Article {
  id: string
  title: string
  excerpt: string
  slug: string
  imageUrl: string
  imageAlt: string
  category: string
  date: string
}