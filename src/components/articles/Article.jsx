import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getArticles } from '../../utils/getArticles';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Votes } from './Votes';
import { FetchComments } from '../comments/FetchComments';

export const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles(article_id)
      .then((result) => {
        const { article } = result;
        console.log(result, 'single article with article id');
        setArticle(article);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, 'error in loading article');
        setLoading(false);
        setError(true);
      });
  }, [article_id]);

  let formattedDate = new Date(article.created_at).toLocaleDateString();

  if (isLoading || !article) {
    return <p>Loading article...</p>;
  }

  if (error === true) {
    return <p>Error loading article</p>;
  }
  return (
    <>
      <section className="single-article">
        <Card className="article-content-container">
          <Card.Body>
            <div className="article-title card-title" id="single-article-title">
              <Card.Title>{article.title}</Card.Title>
            </div>

            <div className="article-content">
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
            </div>

            <div className="article-body">
              <p>{article.body}</p>
            </div>

            <div className="article-img">
              <Card.Img src={article.article_img_url} alt={article.title} />
            </div>

            <div className="article-votes">
              <Votes votes={article.votes} />
            </div>

            <div className="article-comments">
              <Button variant="dark">Comments: {article.comment_count}</Button>
            </div>
            <div className="article-createdAt">
              <p>Date Created: {formattedDate}</p>
            </div>
          </Card.Body>
        </Card>
        <div className="comments-article-container">
          <FetchComments article_id={article_id} />
        </div>
      </section>
    </>
  );
};
