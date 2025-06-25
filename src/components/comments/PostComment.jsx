import { Button } from 'react-bootstrap';
export const PostComment = ({ type, id }) => {
  return (
    <Button variant="primary" className="light">
      {type === 'Create Post' ? 'Add Comment' : 'Create Post'}
    </Button>
  );
};
