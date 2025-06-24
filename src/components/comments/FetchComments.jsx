import { useEffect, useState } from "react"
import { getCommentsbyArticleId } from "../../utils/getCommentsById";
export const FetchComments = ({article_id}) => {
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

}, [article_id])

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error with loading comments</p>
  }


  return (

  )
}