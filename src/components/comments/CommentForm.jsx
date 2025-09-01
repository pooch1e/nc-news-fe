import { useState, useContext } from 'react';
import { postCommentOrArticleById } from '../../utils/postById';
import { useRefresh } from '../../context/refreshContext';
import { UserContext } from '../../context/userContext';
import { Button } from '../ui/Button';

export const CommentForm = ({ articleId, onCommentAdded, onCancel }) => {
  const { loggedInUser } = useContext(UserContext);
  const username = loggedInUser?.name === 'tickle122' ? 'tickle122' : null;
  const { triggerRefresh } = useRefresh();
  
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!comment.trim()) {
      setError('Please enter a comment');
      return;
    }
    
    if (comment.trim().length < 10) {
      setError('Comment must be at least 10 characters long');
      return;
    }
    
    if (!username) {
      setError('You must be logged in to post a comment');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const newComment = await postCommentOrArticleById(
        articleId,
        comment.trim(),
        'comment',
        username
      );
      
      setComment('');
      setSuccess(true);
      triggerRefresh();
      
      if (onCommentAdded) {
        onCommentAdded(newComment);
      }

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
      
    } catch (err) {
      console.error('Error posting comment:', err);
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setComment('');
    setError(null);
    setSuccess(false);
    if (onCancel) {
      onCancel();
    }
  };

  const characterCount = comment.length;
  const maxLength = 1000;
  const isNearLimit = characterCount > maxLength * 0.8;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Add a Comment
      </h3>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 text-sm">
            ✅ Comment posted successfully!
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="comment-textarea" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Comment
          </label>
          <textarea
            id="comment-textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts on this article..."
            rows={4}
            maxLength={maxLength}
            className={`
              w-full px-3 py-2 border rounded-lg resize-none 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${error ? 'border-red-300 bg-red-50' : 'border-gray-300'}
              ${isSubmitting ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
            `}
            disabled={isSubmitting}
            required
          />
          <div className="flex justify-between mt-2">
            <p className="text-xs text-gray-500">
              Minimum 10 characters
            </p>
            <p className={`text-xs ${isNearLimit ? 'text-red-500' : 'text-gray-500'}`}>
              {characterCount}/{maxLength}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {username ? username.charAt(0).toUpperCase() : '?'}
              </span>
            </div>
            <span className="text-sm text-gray-600">
              Posting as <span className="font-medium">{username || 'Guest'}</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={isSubmitting || !comment.trim() || comment.trim().length < 10}
              className="min-w-[100px]"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Posting...</span>
                </div>
              ) : (
                'Post Comment'
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
