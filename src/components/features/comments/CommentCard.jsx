import { Votes } from '../articles/Votes';
import { VoteTypeContext } from '../../../context/VoteTypeContext';

import { DeleteButton } from './DeleteButton';
import { useContext } from 'react';
import { UserContext } from '../../../context/userContext';
export const CommentCard = ({ comment, onDelete }) => {
  const { loggedInUser } = useContext(UserContext); //tickle122

  // only show delete button for logged in user
  const username = loggedInUser.name === comment.author;

  return (
    <div className="comment-card mb-4">
      <div className="shadow-sm border-0">
        <div className="p-4">
          <div className="align-items-center mb-3">
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <div
                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '32px', height: '32px' }}>
                  <small className="text-white fw-bold">
                    {comment.author.charAt(0).toUpperCase()}
                  </small>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">{comment.author}</h6>
                  <small className="text-muted">{comment.formattedDate}</small>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="comment-body mb-3 ps-5">
                <p className="mb-0 lh-base">{comment.body}</p>
              </div>
            </div>
          </div>

          {/* Actions div */}
          <div className="align-items-center justify-content-between ps-5">
            <div xs="auto">
              <VoteTypeContext.Provider value="comment">
                <Votes id={comment.comment_id} votes={comment.votes} />
              </VoteTypeContext.Provider>
            </div>

            {username && (
              <div xs="auto">
                <DeleteButton
                  comment_id={comment.comment_id}
                  onDelete={onDelete}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
