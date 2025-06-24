export const getCommentsbyArticleId = async (id) => {
  const url = `https://nc-news-api-qa14.onrender.com/api/articles/${id}/comments`;
  try {
    const comments = await fetch(url);
    const json = await comments.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err);
  }
};
