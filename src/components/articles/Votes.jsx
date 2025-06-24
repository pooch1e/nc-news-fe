import { Button } from 'react-bootstrap';
export const Votes = ({ votes }) => {
  // handle votes here
  // will have to make patch request...

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
