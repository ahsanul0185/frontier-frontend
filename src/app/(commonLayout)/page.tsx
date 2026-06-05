import FeaturedArticle from "@/components/home/FeaturedArticle";
import ArticleGrid from "@/components/home/ArticleGrid";
import { getAllArticles } from "@/services/article.service";

export default async function Home(
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }
) {
  const searchParams = await props.searchParams;
  
  const rawPage = searchParams.page;
  let page = 1;
  if (typeof rawPage === 'string') {
    const parsed = parseInt(rawPage, 10);
    if (!isNaN(parsed) && parsed > 0) {
      page = parsed;
    }
  }

  const initialArticlesResponse = await getAllArticles({ page, pageSize: 6, published: true });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans dark:bg-black">
      <FeaturedArticle />
       <ArticleGrid data={initialArticlesResponse} />
    </div>
  );
}
