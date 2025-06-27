import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useVoteType } from '../../context/VoteTypeContext';
import { updateVoteById } from '../../utils/updateVoteById';
export const Votes = ({ id, votes }) => {
  const voteType = useVoteType(); // comment or article depending on where clicked

  const [currentVotes, setCurrentVotes] = useState(votes);
  const [isError, setError] = useState(null);

  const handleUpvote = async (up) => {
    //provide instant feedback
    setCurrentVotes((prev) => prev + up);
    setError(null);
    try {
      //patch request
      updateVoteById(id, up, voteType);
    } catch (err) {
      console.log(err);
      setCurrentVotes((prev) => prev - 1);
      setError(true);
    }
  };

  const handleDownVote = async (down) => {
    //provide instant feedback
    setCurrentVotes((prev) => prev + down);
    setError(null);
    try {
      //patch request
      updateVoteById(id, down, voteType);
    } catch (err) {
      console.log(err);
      setCurrentVotes((prev) => prev + 1);
      setError(true);
    }
  };

  if (isError) {
    return (
      <Container className="d-flex justify-content-center align-items-center gap-2">
        <p className="mt-3">We're Sorry, something has gone wrong...</p>
      </Container>
    );
  }

  return (
    <>
      <div className="votes-container d-flex justify-items-center align-items-center gap-2">
        <Button
          variant="outline-success"
          size="sm"
          onClick={() => handleUpvote(1)}>
          Upvote
        </Button>
        <span className="text-muted small">
          <p>Votes: {currentVotes}</p>
        </span>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => handleDownVote(-1)}>
          Downvote
        </Button>
      </div>
    </>
  );
};
