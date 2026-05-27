export const dynamic = 'force-dynamic';

import FeaturedArticle from "@/components/home/FeaturedArticle";
import articlesJson from '@/articles.json'
import ArticleGrid from "@/components/home/ArticleGrid";
import { getAllArticles } from "@/services/article.service";

export default async function Home() {

  const articles = await getAllArticles();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans dark:bg-black">
      <FeaturedArticle />
       <ArticleGrid articles={articlesJson} />
    </div>
  );
}
