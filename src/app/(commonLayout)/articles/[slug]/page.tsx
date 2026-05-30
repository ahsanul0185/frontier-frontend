// import { getPostBySlug } from '@/services/article.service';
// import React from 'react'

// export default async function BlogPostPage({params} : {params : Promise<{slug : string}>}) {

//   const {slug} = await params;

//   let article;

//   try {
//     article = await getPostBySlug(slug);
//   } catch (error) {
//     console.error("Error fetching article:", error)
//   }

//   if (!article) {
//     return <div className="container">No Article Found</div>
//   }

//   return (
//     <div className="container">BlogPostPage</div>
//   )
// }



import { formatDate } from '@/lib/utils';
import { getPostBySlug } from '@/services/article.service';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let article;

  try {
    article = await getPostBySlug(slug);
  } catch (error) {
    console.error('Error fetching article:', error);
  }

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-400 text-lg">
        No Article Found
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        {article.title}
      </h1>

      {/* Annotation / Notes */}
      {article.notes && (
        <p className="text-base italic text-gray-500 border-l-4 border-gray-300 pl-4 mb-8 leading-relaxed">
          {article.notes}
        </p>
      )}

      {/* Image */}
      <div className="w-full mb-6 overflow-hidden bg-gray-100">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full max-h-[480px] object-cover"
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center text-gray-400 text-sm tracking-wide">
            No image available
          </div>
        )}
      </div>

      {/* Author + Date */}
      <div className="flex justify-between items-center mb-8 pb-5 border-b border-gray-200 flex-wrap gap-2">
        <span className="text-sm text-gray-500 uppercase tracking-wider">
          By <span className="text-gray-800 font-medium">{article.author}</span>
        </span>
        <span className="text-sm text-gray-400">
          {formatDate(article.createdAtUtc)}
        </span>
      </div>

      {/* Article Body */}

      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
        className="blog-post text-wrap overflow-hidden"
      />
      {/* <div
        className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: article.content }}
      /> */}

    </article>
  );
}