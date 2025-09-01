import { Votes } from './Votes';
import { Link } from 'react-router-dom';

export const ArticleCard = ({ article }) => {
  return (
    <article className="border border-gray-200 rounded ">
      {/* Image */}
      <div className="w-full">
        <Link to={`/articles/${article.article_id}`}>
          <img
            src={article.article_img_url}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-600 mb-2">
          {article.topic}
        </p>

        <Link to={`/articles/${article.article_id}`}>
          <h2 className="text-lg font-bold text-gray-900 leading-tight mb-2">
            {article.title}
          </h2>
        </Link>

        <p className="text-sm text-gray-600 mb-3">By {article.author}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <Votes id={article.article_id} votes={article.votes} />
            <span>{article.comment_count} comments</span>
          </div>
          <span>{article.formatted_date}</span>
        </div>
      </div>
    </article>
  );
};
