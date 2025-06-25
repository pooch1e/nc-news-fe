import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { PostForm } from './PostForm';
export const CreatePost = ({ type, onToggleForm }) => {
  const [showForm, setShowForm] = useState(false);

  const formToggle = () => {
    setShowForm((prev) => {
      const next = !prev;
      if (onToggleForm) onToggleForm(next);
      return next;
    });
  };

  return (
    <>
      <Button variant="primary" className="light" onClick={formToggle}>
        {showForm ? 'Cancel' : type}
      </Button>
      {showForm && <PostForm onClose={formToggle} />}
    </>
  );
};
