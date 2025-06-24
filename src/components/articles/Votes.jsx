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

  const handlePatchRequest = () => {
    if (voteType === 'comment') {
      console.log('comment vote was clicked');
    } else {
      console.log('article vote was clicked');
    }
  };

  const handleUpvote = (e) => {
    //make update request?
    //provide instant feedback
    setCurrentVotes(votes + 1);
  };

  const handleDownVote = (e) => {
    //make update request?
    //provide instant feedback
    setCurrentVotes(votes + 1);
  };

  return (
    <>
      <div className="votes-container">
        <Button onClick={handlePatchRequest}>Upvote</Button>
        <p>Votes: {votes}</p>
        <Button>Downvote</Button>
      </div>
    </>
  );
};
