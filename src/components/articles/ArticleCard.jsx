import { Votes } from './Votes';
import { Link } from 'react-router-dom';

export const ArticleCard = ({ article }) => {
  return (
    <section className="mt-4 mb-4 p-8">
      <div className="">
        <div>
          <div className="">
            <div className="">{article.title}</div>
          </div>

          <div className="">
            <p>Author: {article.author}</p>

            <p>{article.topic}</p>
          </div>

          <div className="">
            <Link to={`/articles/${article.article_id}`}>
              <img
                src={article.article_img_url}
                alt={article.title}
                className=""
              />
            </Link>
          </div>

          <div className="">
            <Votes id={article.article_id} votes={article.votes} />
          </div>

          <div className="">
            <div>Comments: {article.comment_count}</div>
          </div>
          <div className="">
            <p>Date Created: {article.formatted_date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
