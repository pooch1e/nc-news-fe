export const getArticles = async (id = null) => {
  let url = 'https://nc-news-api-qa14.onrender.com/api/articles';

  if (id && id !== null) {
    url = `https://nc-news-api-qa14.onrender.com/api/articles/${id}`
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log('err from getArticles util', err.message);
  }
};
