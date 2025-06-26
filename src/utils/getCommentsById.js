export const getCommentsbyArticleId = async (id) => {
  const url = `https://nc-news-api-qa14.onrender.com/api/articles/${id}/comments`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err);
  }
};
