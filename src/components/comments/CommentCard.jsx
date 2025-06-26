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
            <Card shadow-sm="true" border-="true">
              <Card.Header className="bg-light">
                <h3>{comment.author}</h3>
              </Card.Header>
              <p className="mt-1">
                {new Date(comment.created_at).toLocaleDateString()}
              </p>
              <Card.Body className="align-text-center">
                <div className="comment-body">
                  <p>{comment.body}</p>
                </div>
              </Card.Body>
              <VoteTypeContext.Provider value="comment">
                <div className="comment-votes">
                  <Votes id={comment.comment_id} votes={comment.votes} />
                </div>
              </VoteTypeContext.Provider>
            </Card>
            <Col mb-2="true">
              <Row md={4}>
                {username === comment.author && (
                  <DeleteButton
                    comment_id={comment.comment_id}
                    onDelete={onDelete}
                  />
                )}
              </Row>
            </Col>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
