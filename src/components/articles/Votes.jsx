import { Button } from 'react-bootstrap';
import { useState } from 'react';
export const Votes = ({ votes }) => {
  const [isComment, setIsComment] = useState(false);
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [isError, setError] = useState(null);
  // handle votes here
  // will have to make patch request...

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
        <Button>Upvote</Button>
        <p>Votes: {votes}</p>
        <Button>Downvote</Button>
      </div>
    </>
  );
};
