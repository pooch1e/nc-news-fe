import { Votes } from '../articles/Votes';
import { VoteTypeContext } from '../../context/VoteTypeContext';
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
      <VoteTypeContext.Provider value="comment">
        <div className="comment-votes">
          <Votes id={comment.comment_id} votes={comment.votes} />
        </div>
      </VoteTypeContext.Provider>
    </section>
  );
};
