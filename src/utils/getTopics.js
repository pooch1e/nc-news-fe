export const getTopics = async () => {
  const url = `https://nc-news-api-qa14.onrender.com/api/topics`;

  try {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error('Could not fetch topics');
    }
    const json = await result.json();
    return json;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
