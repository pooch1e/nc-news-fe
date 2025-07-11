export const deleteComment = async (comment_id) => {
  const url = `https://nc-news-api-qa14.onrender.com/api/comments/${comment_id}`;
  try {
    const result = await fetch(url, { method: 'DELETE' });

    if (!result.ok) {
      throw new Error('Error in deleting comment');
    }
  } catch (err) {
    console.log(err, 'err in deleting comment');
    throw err;
  }
};
