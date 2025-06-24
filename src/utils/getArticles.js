export const getArticles = async (id = null) => {
  let url = 'https://nc-news-api-qa14.onrender.com/api/articles';

  if (id && id !== null) {
    url = `https://nc-news-api-qa14.onrender.com/api/articles/${id}`
  }
  try {
    const articles = await fetch(url);
    if (!articles.ok) {
      throw new Error(`Response status: ${articles.status}`);
    }

    const json = await articles.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log('err from getArticles util', err.message);
  }
};
