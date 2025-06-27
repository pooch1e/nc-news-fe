import { Votes } from '../articles/Votes';
import { VoteTypeContext } from '../../context/VoteTypeContext';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { DeleteButton } from './DeleteButton';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
export const CommentCard = ({ comment, onDelete }) => {
  const { loggedInUser } = useContext(UserContext); //tickle122

  const username = loggedInUser.name === 'tickle122' ? 'tickle122' : null;

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <section className="comment-box">
            <Card shadow-sm="true" border-0="true">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h3>{comment.author}</h3>
              </Card.Header>
              <small>
                <p className="mt-1 text-muted">
                  {new Date(comment.created_at).toLocaleDateString()}
                </p>
              </small>
              <Card.Body className="align-text-center mb-3">
                <div className="comment-body">
                  <p>{comment.body}</p>
                </div>
                <Row className="align-items-center">
                  <Col xs="auto">
                    <VoteTypeContext.Provider value="comment">
                      <div className="comment-votes">
                        <Votes id={comment.comment_id} votes={comment.votes} />
                      </div>
                    </VoteTypeContext.Provider>
                  </Col>
                </Row>
              </Card.Body>
              <Col>
                <Row className="d-flex justify-content-center">
                  {username === comment.author && (
                    <DeleteButton
                      comment_id={comment.comment_id}
                      onDelete={onDelete}
                    />
                  )}
                </Row>
              </Col>
            </Card>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
