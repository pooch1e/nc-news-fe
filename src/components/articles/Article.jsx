import { useParams } from 'react-router-dom';

import { VoteTypeContext } from '../../context/VoteTypeContext';
import { Votes } from './Votes';
import { FetchComments } from '../comments/FetchComments';
import { useArticleApi } from '../../Hooks/useArticleApi';

export const Article = () => {
  const { article_id } = useParams();

  const { singleArticle, isLoading, isError } = useArticleApi({
    id: article_id,
  });

  if (isLoading) {
    return (
      <>
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="text-center">
            <Spinner animation="border" role="status" variant="primary" />
            <p className="mt-3"> Loading...</p>
          </div>
        </Container>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <Error message={'Error fetching article'} status={404} />
      </>
    );
  }

  if (!singleArticle) {
    return (
      <>
        <Container className="mt-4">
          <div className="alert alert-danger text-center">
            <p className="mb-0">Something went wrong</p>
          </div>
        </Container>
      </>
    );
  }

  let formattedDate = new Date(singleArticle.created_at).toLocaleDateString();

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
                      className="display-6 text-center bg-light mb-3 fw-bold">
                      {singleArticle.title}
                    </Card.Title>
                  </div>

                  <Row className="mb-3">
                    <Col md={6}>
                      <p className="mb-1">
                        <strong className="text-muted">Author:</strong>
                        <span className="ms-2">{singleArticle.author}</span>
                      </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                      <Badge className="text-center rounded-pill">
                        <p>{singleArticle.topic}</p>
                      </Badge>
                    </Col>
                  </Row>

                  <div className="article-body mb-4">
                    <p className="lead lh-base">{singleArticle.body}</p>
                  </div>

                  <div className="article-img mb-4">
                    <Card.Img
                      src={singleArticle.article_img_url}
                      alt={singleArticle.title}
                      className="rounded shadow-sm fluid"
                    />
                  </div>
                  <Row className="align-items-center mb-3">
                    <Col md={6}>
                      <VoteTypeContext.Provider value="article">
                        <div className="article-votes">
                          <Votes
                            id={singleArticle.article_id}
                            votes={singleArticle.votes}
                          />
                        </div>
                      </VoteTypeContext.Provider>
                    </Col>
                  </Row>
                  <Row className="align-items-center justify-content-center">
                    <Col mb={6} className="text-md-end">
                      <div className="article-comments">
                        <Button variant="dark">
                          Comments: {singleArticle.comment_count}
                        </Button>
                      </div>
                      <div className="article-createdAt text-muted">
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
