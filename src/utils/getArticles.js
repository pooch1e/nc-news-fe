export const getArticles = async (id = null, topic = null, queries = {}) => {
  let url = 'https://nc-news-api-qa14.onrender.com/api/articles';

  //handle ID
  if (id) {
    url += `/${id}`;
  } else {
    const newUrl = new URLSearchParams();

    if (topic) newUrl.append('topic', topic);
    if (queries.sort_by) newUrl.append('sort_by', queries.sort_by);
    if (queries.order) newUrl.append('order', queries.order);

    const queryStringFinal = newUrl.toString();
    if (queryStringFinal && queryStringFinal !== null) {
      url += `?${queryStringFinal}`;
    }
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    if (id) {
      return { article: json.article };
    } else {
      return json;
    }
  } catch (err) {
    console.log('err from getArticles util', err.message);
  }
};
