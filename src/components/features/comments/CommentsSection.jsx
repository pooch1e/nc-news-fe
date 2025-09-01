import { FetchComments } from './FetchComments';
import { AddComment } from './AddComment';

export const CommentsSection = ({ articleId, commentCount }) => {
  return (
    <section className="space-y-6">
      {/* Comments Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
          <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
            {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
          </span>
        </div>
      </div>

      {/* Add Comment Section */}
      <AddComment articleId={articleId} />

      {/* Comments List */}
      <div className="space-y-4">
        <FetchComments article_id={articleId} />
      </div>
    </section>
  );
};
