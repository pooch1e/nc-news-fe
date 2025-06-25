import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getArticles } from '../../utils/getArticles';
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Spinner,
  Badge,
} from 'react-bootstrap';
import { VoteTypeContext } from '../../context/VoteTypeContext';
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
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          <Spinner animation="border" role="status" variant="primary" />
          <p className="mt-3">Loading...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return <p>Error loading article</p>;
  }
  return (
    <>
      <Container className="mt-4 mb-5">
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <section className="single-article">
              <Card className="article-content-container shadow-sm border-0 mb-4">
                <Card.Body className="p-4">
                  <div
                    className="article-title card-title mb-4"
                    id="single-article-title">
                    <Card.Title
                      as={'h2'}
                      className="display-6 text-primary mb-3 fw-bold">
                      {article.title}
                    </Card.Title>
                  </div>

                  <Row className="mb-3">
                    <Col md={6}>
                      <p className="mb-1">
                        <strong className="text-muted">Author:</strong>
                        <span className="ms-2">{article.author}</span>
                      </p>
                    </Col>
                    <Col md={6}>
                      <Badge className="text-center rounded-pill">
                        <p>{article.topic}</p>
                      </Badge>
                    </Col>
                  </Row>

                  <div className="article-body mb-4">
                    <p className="lead lh-base">{article.body}</p>
                  </div>

                  <div className="article-img mb-4">
                    <Card.Img
                      src={article.article_img_url}
                      alt={article.title}
                      className="rounded shadow-sm"
                    />
                  </div>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <VoteTypeContext.Provider value="article">
                        <div className="article-votes">
                          <Votes
                            id={article.article_id}
                            votes={article.votes}
                          />
                        </div>
                      </VoteTypeContext.Provider>
                    </Col>
                  </Row>
                  <Row className="align-items-center justify-content-center">
                    <Col mb={6}>
                      <div className="article-comments mb-2">
                        <Button variant="dark">
                          Comments: {article.comment_count}
                        </Button>
                      </div>
                      <div className="article-createdAt">
                        <p>Date Created: {formattedDate}</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Row align-items-center="true" mt-4="true">
                <Col>
                  <div className="comments-article-container">
                    <FetchComments article_id={article_id} />
                  </div>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
