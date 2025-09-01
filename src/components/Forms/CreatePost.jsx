import { useState } from 'react';
import { PostForm } from './PostForm';
import { Button } from '../ui/Button';
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
      <div fluid className="main-content mb-5 pb-4">
        <div className="main-content">
          {showForm && (
            <div className="form-div">
              <PostForm type={postType} onClose={formToggle} id={postId} />
            </div>
          )}

          <div className="footer-div">
            <Button  variant='primary' onClick={formToggle}>
              {showForm ? 'Cancel' : label}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
