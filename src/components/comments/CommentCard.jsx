import { Votes } from '../articles/Votes';
export const CommentCard = ({ comment }) => {
  return (
    <section className="comment-box">
      <div className="comment-author-date">
        <h3>{comment.author}</h3>
        <p>{new Date(comment.created_at).toLocaleDateString()}</p>
      </div>
      <div className="comment-body">
        <p>{comment.body}</p>
      </div>
      <div className="comment-votes">
        <Votes votes={comment.votes}/>
      </div>
    </section>
  );
};
