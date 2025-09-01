import { useParams } from 'react-router-dom';

import { VoteTypeContext } from '../../../context/VoteTypeContext';
import { Votes } from './Votes';
import { CommentsSection } from '../comments/CommentsSection';
import { useArticleApi } from '../../../Hooks/useArticleApi';

export const Article = () => {
  const { article_id } = useParams();

  const { singleArticle, isLoading, isError } = useArticleApi({
    id: article_id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-3 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <p className="text-red-800 text-center">Error fetching article</p>
          <p className="text-red-600 text-center text-sm mt-2">Status: 404</p>
        </div>
      </div>
    );
  }

  if (!singleArticle) {
    return (
      <div className="container mx-auto mt-4 px-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-800 mb-0">Something went wrong</p>
        </div>
      </div>
    );
  }

  let formattedDate = new Date(singleArticle.created_at).toLocaleDateString();

  return (
    <div className="container mx-auto mt-4 mb-5 px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <article className="single-article">
            <div className="bg-white rounded-lg shadow-sm border-0 mb-4">
              <div className="p-6">
                {/* Article Title */}
                <div className="article-title mb-6" id="single-article-title">
                  <h2 className="text-4xl text-center bg-gray-50 py-4 px-6 mb-3 font-bold rounded">
                    {singleArticle.title}
                  </h2>
                </div>

                {/* Author and Topic Row */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div className="mb-2 md:mb-0">
                    <p className="mb-1">
                      <strong className="text-gray-500">Author:</strong>
                      <span className="ml-2 text-gray-800">
                        {singleArticle.author}
                      </span>
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {singleArticle.topic}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="article-body mb-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {singleArticle.body}
                  </p>
                </div>

                {/* Article Image */}
                <div className="article-img mb-6">
                  <img
                    src={singleArticle.article_img_url}
                    alt={singleArticle.title}
                    className="w-full rounded-lg shadow-sm object-cover"
                  />
                </div>

                {/* Votes Section */}
                <div className="flex items-center mb-4">
                  <div className="w-full md:w-1/2">
                    <VoteTypeContext.Provider value="article">
                      <div className="article-votes">
                        <Votes
                          id={singleArticle.article_id}
                          votes={singleArticle.votes}
                        />
                      </div>
                    </VoteTypeContext.Provider>
                  </div>
                </div>

                {/* Comments and Date Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-center">
                  <div className="text-center md:text-right">
                    <div className="article-comments mb-3">
                      <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors">
                        Comments: {singleArticle.comment_count}
                      </button>
                    </div>
                    <div className="article-createdAt text-gray-500">
                      <p>Date Created: {formattedDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-8">
              <CommentsSection
                articleId={article_id}
                commentCount={singleArticle.comment_count}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
