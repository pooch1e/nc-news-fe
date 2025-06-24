import { CommentCard } from "./CommentCard";
export const CommentStyles = ({ comments }) => {
  return (
    <div className="comment-card">
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
};
