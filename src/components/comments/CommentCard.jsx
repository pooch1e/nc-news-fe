import { Votes } from '../articles/Votes';
import { VoteTypeContext } from '../../context/VoteTypeContext';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { DeleteButton } from './DeleteButton';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
export const CommentCard = ({ comment, onDelete }) => {
  const { loggedInUser } = useContext(UserContext); //tickle122

  // only show delete button for logged in user
  const username = loggedInUser.name === comment.author;

  return (
    <div className="comment-card mb-4">
      <Card className="shadow-sm border-0">
        <Card.Body className="p-4">
          {/* Author and date row */}
          <Row className="align-items-center mb-3">
            <Col>
              <div className="d-flex align-items-center gap-2 mb-1">
                <div
                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '32px', height: '32px' }}>
                  <small className="text-white fw-bold">
                    {comment.author.charAt(0).toUpperCase()}
                  </small>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">{comment.author}</h6>
                  <small className="text-muted">{comment.formattedDate}</small>
                </div>
                {username && (
                  <Badge bg="primary" className="ms-2">
                    Your comment
                  </Badge>
                )}
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="comment-body mb-3 ps-5">
                <p className="mb-0 lh-base">{comment.body}</p>
              </div>
            </Col>
          </Row>

          {/* Actions row */}
          <Row className="align-items-center justify-content-between ps-5">
            <Col xs="auto">
              <VoteTypeContext.Provider value="comment">
                <Votes id={comment.comment_id} votes={comment.votes} />
              </VoteTypeContext.Provider>
            </Col>

            {username && (
              <Col xs="auto">
                <DeleteButton
                  comment_id={comment.comment_id}
                  onDelete={onDelete}
                />
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
