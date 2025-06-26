import { Button, Card, Row, Col, Container, Badge } from 'react-bootstrap';
import { Votes } from './Votes';
import { Link } from 'react-router-dom';
export const ArticleCard = ({ article }) => {
  return (
    <Container className="mt-4 mb-4 p-8">
      <Card className="article-content-container">
        <Card.Body>
          <div className="article-title card-title">
            <Card.Title as={'h2'} className="display-6 mb-3 fw-bold">
              {article.title}
            </Card.Title>
          </div>
          <Row className="mb-3">
            <Col md={6}>
              <div className="article-content">
                <p>Author: {article.author}</p>
                <Badge className="text-center rounded-pill">
                  <p>{article.topic}</p>
                </Badge>
              </div>
            </Col>
          </Row>

          <div className="article-img">
            <Link to={`/articles/${article.article_id}`}>
              <Card.Img
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
            <Button variant="dark">Comments: {article.comment_count}</Button>
          </div>
          <div className="article-createdAt">
            <p>Date Created: {article.formatted_date}</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
