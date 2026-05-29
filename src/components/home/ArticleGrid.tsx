// src/components/home/ArticleGrid.tsx
import { Article, IArticle } from '@/types/article.types'
import ArticleCard from './ArticleCard'
import Button from '../ui/Button'



export default function ArticleGrid({ articles }: { articles: IArticle[] }) {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className='flex items-center mt-12 '>
        <Button className='mx-auto w-fit'>
          Show More
        </Button>
      </div>
    </section>
  )
}