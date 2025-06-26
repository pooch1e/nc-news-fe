import { Button, Container } from 'react-bootstrap';
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
      <Container fluid className="main-content mb-5 pb-4">
        <div className="main-content">
          {showForm && (
            <div className="form-container">
              <PostForm type={postType} onClose={formToggle} id={postId} />
            </div>
          )}

          <div className="footer-container">
            <Button className="footer-button" onClick={formToggle}>
              {showForm ? 'Cancel' : label}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};
