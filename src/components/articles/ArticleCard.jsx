import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import { Votes } from './Votes';
import { Link } from 'react-router-dom';
export const ArticleCard = ({ article }) => {
  return (
    <Card className="article-content-container">
      <Card.Body>
        <div className="article-title card-title">
          <Card.Title>{article.title}</Card.Title>
        </div>

        <div className="article-content">
          <p>Author: {article.author}</p>
          <p>Topic: {article.topic}</p>
        </div>

        <div className="article-img">
          <Link to={`/articles/${article.article_id}`}>
          <Card.Img src={article.article_img_url} alt={article.title} />
          </Link>
        </div>

        <div className="article-votes">
          <Votes votes={article.votes} />
        </div>

        <div className="article-comments">
          <Button variant="dark">Comments: {article.comment_count}</Button>
        </div>
        <div className="article-createdAt">
          <p>Date Created: {article.formatted_date}</p>
        </div>
      </Card.Body>
    </Card>
  );
};
