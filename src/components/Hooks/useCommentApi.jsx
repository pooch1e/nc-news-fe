import { useState, useEffect } from 'react';
import { getCommentsbyArticleId } from '../../utils/getCommentsById';
import { useRefresh } from '../../context/refreshContext';
export const useCommentApi = ({ article_id }) => {
  const { refreshCommentsKey } = useRefresh();
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    getCommentsbyArticleId(article_id)
      .then((result) => {
        const { comments } = result;
        setComments(comments);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, 'err with fetching comments');
        setLoading(false);
        setError(err);
      });
  }, [article_id, refreshCommentsKey]);

  const removeFromCommentsList = (comment_id) => {
    setComments((prev) => {
      return prev.filter((comment) => comment.comment_id !== comment_id);
    });
  };

  return {
    comments,
    isLoading,
    isError,
    removeFromCommentsList,
  };
};
