import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useVoteType } from '../../context/VoteTypeContext';
import { updateVoteById } from '../../utils/updateVoteById';
export const Votes = ({ id, votes }) => {
  const voteType = useVoteType(); // comment or article depending on where clicked

  const [currentVotes, setCurrentVotes] = useState(votes);
  const [isError, setError] = useState(null);
  // handle votes here
  // will have to make patch request...

  // for debug
  const handlePatchRequest = () => {
    if (voteType === 'comment') {
      console.log('comment vote was clicked');
    } else {
      console.log('article vote was clicked');
    }
  };

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
      setError(err);
    }
  };

  const handleDownVote = (down) => {
    //make update request?
    //provide instant feedback
    setCurrentVotes((prev) => prev + down);
  };

  return (
    <>
      <div className="votes-container">
        <Button onClick={() => handleUpvote(1)}>Upvote</Button>
        <p>Votes: {currentVotes}</p>
        <Button onClick={() => handleDownVote(-1)}>Downvote</Button>
      </div>
    </>
  );
};
