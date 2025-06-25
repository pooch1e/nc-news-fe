import { useEffect, useState } from "react"
import { getCommentsbyArticleId } from "../../utils/getCommentsById";
import { CommentStyles } from "./CommentStyles";
export const FetchComments = ({article_id, triggerReload}) => {

const [comments, setComments] = useState([]);
const [isLoading, setLoading] = useState(true);
const [isError, setError] = useState(null);

useEffect(() => {
  getCommentsbyArticleId(article_id).then((result) => {
  const {comments} = result;
  setComments(comments);
  setLoading(false);
  }).catch((err) => {
    console.log(err, 'err with fetching comments')
    setLoading(false)
    setError(err);
  })

}, [article_id, triggerReload])

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error with loading comments</p>
  }


  return (
        <section className="comments" id="comments-section">
          <div id="comment-list">
            <CommentStyles comments={comments} />
          </div>
        </section>
  )
}