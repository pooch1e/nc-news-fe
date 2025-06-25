import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { PostForm } from './PostForm';
export const CreatePost = ({ label, postType, onToggleForm, postId }) => {
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
        {showForm ? 'cancel' : label}
      </Button>
      {showForm && <PostForm type={postType} onClose={formToggle} id={postId}/>}
    </>
  );
};
