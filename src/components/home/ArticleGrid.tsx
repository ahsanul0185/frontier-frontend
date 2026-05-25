// src/components/home/ArticleGrid.tsx
import { Article } from '@/types/article.types'
import ArticleCard from './ArticleCard'

export default function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}