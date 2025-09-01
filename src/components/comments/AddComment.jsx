import { useState, useContext } from 'react';
import { CommentForm } from './CommentForm';
import { Button } from '../ui/Button';
import { UserContext } from '../../context/userContext';

export const AddComment = ({ articleId }) => {
  const [showForm, setShowForm] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const isLoggedIn = loggedInUser?.name === 'tickle122';

  const handleToggleForm = () => {
    setShowForm(prev => !prev);
  };

  const handleCommentAdded = (newComment) => {
    // Automatically close form after successful comment
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-600 mb-3">
          Please log in to join the conversation
        </p>
        <Button variant="primary" size="sm">
          Log In
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {!showForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {loggedInUser.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {loggedInUser.name}
                </p>
                <p className="text-xs text-gray-500">
                  Share your thoughts on this article
                </p>
              </div>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={handleToggleForm}
              className="flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Comment</span>
            </Button>
          </div>
        </div>
      )}

      {showForm && (
        <CommentForm
          articleId={articleId}
          onCommentAdded={handleCommentAdded}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};
