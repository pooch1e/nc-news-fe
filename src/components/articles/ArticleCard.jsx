import { Votes } from './Votes';
import { Link } from 'react-router-dom';
export const ArticleCard = ({ article }) => {
  return (
    <section className="mt-4 mb-4 p-8">
      <div className="article-content-section">
        <div>
          <div className="article-title div-title">
            <div as={'h2'} className="display-6 mb-3 fw-bold">
              {article.title}
            </div>
          </div>

          <div className="article-content">
            <p>Author: {article.author}</p>
            {/* <Badge className="d-flex align-items-center justify-content-center text-center rounded-pill w-25"> */}
            <p>{article.topic}</p>
            {/* </Badge> */}
          </div>

          <div className="article-img">
            <Link to={`/articles/${article.article_id}`}>
              <img
                src={article.article_img_url}
                alt={article.title}
                className="rounded shadow-sm"
              />
            </Link>
          </div>

          <div className="article-votes">
            <Votes id={article.article_id} votes={article.votes} />
          </div>

          <div className="article-comments">
            <button variant="dark">Comments: {article.comment_count}</button>
          </div>
          <div className="article-createdAt">
            <p>Date Created: {article.formatted_date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
