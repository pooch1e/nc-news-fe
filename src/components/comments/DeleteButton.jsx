import { Button } from 'react-bootstrap';
import { deleteComment } from '../../utils/deleteComment';
import { useState } from 'react';
export const DeleteButton = ({ comment_id, onDelete }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletion = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await deleteComment(comment_id);
      if (onDelete) {
        onDelete(comment_id);
      }
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  // TODO Make this pretty later
  if (error) {
    return <p>Error in deleting comment</p>;
  }
  // TODO Make this pretty later
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Button variant="secondary" onClick={handleDeletion} disabled={isLoading}>
      {isLoading ? 'Deleting...' : 'Delete'}
    </Button>
  );
};
