import { useState } from 'react';
import { useVoteType } from '../../../context/VoteTypeContext';
import { updateVoteById } from '../../../utils/updateVoteById';
import { Error } from '../../layout/Error';
export const Votes = ({ id, votes }) => {
  const voteType = useVoteType(); // comment or article depending on where clicked

  const [currentVotes, setCurrentVotes] = useState(votes);
  const [isError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const handleUpvote = async (up) => {
    //provide instant feedback
    setCurrentVotes((prev) => prev + up);
    setIsLoading(true);
    setError(null);
    try {
      //patch request
      updateVoteById(id, up, voteType);
    } catch (err) {
      console.log(err);
      setCurrentVotes((prev) => prev - 1);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownVote = async (down) => {
    //provide instant feedback
    setCurrentVotes((prev) => prev + down);
    setError(null);
    setIsLoading(true);
    try {
      //patch request
      updateVoteById(id, down, voteType);
    } catch (err) {
      console.log(err);
      setCurrentVotes((prev) => prev + 1);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isError) {
    return (
      <div className="d-flex justify-content-center align-items-center gap-2">
        <Error />
      </div>
    );
  }

  return (
    <>
      <div className="votes-container">
        <div size="sm" className="me-3">
          <button
            variant="outline-success"
            disabled={isLoading}
            className="d-flex align-items-center"
            onClick={() => handleUpvote(1)}>
            <i className="bi bi-arrow-up me-1" aria-hidden="true"></i>
            <span className="d-none d-sm-inline">Upvote</span>
            <span className="d-sm-none">+</span>
          </button>

          <button variant="outline-secondary" disabled className="px-3">
            <strong>{currentVotes}</strong>
          </button>

          <button
            variant="outline-danger"
            size="sm"
            disabled={isLoading}
            onClick={() => handleDownVote(-1)}
            className="d-flex align-items-center">
            <i className="bi bi-arrow-down me-1" aria-hidden="true"></i>
            <span className="d-none d-sm-inline">Downvote</span>
            <span className="d-sm-none">-</span>
          </button>
        </div>
      </div>
    </>
  );
};
