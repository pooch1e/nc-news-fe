import { CommentStyles } from './CommentStyles';
import { useCommentApi } from '../Hooks/useCommentApi';
import { Loading } from '../layout/Loading';
import { Error } from '../layout/Error';
export const FetchComments = ({ article_id }) => {
  const { comments, isLoading, isError, removeFromCommentsList } =
    useCommentApi({ article_id });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section className="comments" id="comments-section">
      <div id="comment-list">
        <CommentStyles comments={comments} onDelete={removeFromCommentsList} />
      </div>
    </section>
  );
};
