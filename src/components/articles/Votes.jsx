import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useVoteType } from '../../context/VoteTypeContext';
export const Votes = ({ id, votes }) => {
  const voteType = useVoteType();
  console.log('should be comment or article', voteType);

  const [isComment, setIsComment] = useState(false);
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

  const handleUpvote = (up) => {
    //make update request?
    //provide instant feedback
    setCurrentVotes((prev) => prev + up);
  };

  const handleDownVote = (down) => {
    //make update request?
    //provide instant feedback
    setCurrentVotes((prev) => prev + down);
  };

  return (
    <>
      <div className="votes-container">
        <Button onClick={handleUpvote(1)}>Upvote</Button>
        <p>Votes: {votes}</p>
        <Button onClick={handleDownVote(-1)}>Downvote</Button>
      </div>
    </>
  );
};
