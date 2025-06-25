export const postCommentOrArticleById = async (id=null, body, type, username='tickle122') => {
  //hardcoded username for the moment
  console.log(type, 'in post by id ')
  let baseUrl = `https://nc-news-api-qa14.onrender.com/api`;
  const url =
    type === 'comment'
      ? `${baseUrl}/articles/${id}/comments`
      : `${baseUrl}/articles`;
  //check if comment or article id then append to URL

  try {
    const postForm = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, body: body }),
    });

    if (!postForm.ok) {
      throw new Error(`Failed to update votes: status${postForm.status}`);
    }

    const data = await postForm.json();
    console.log(postForm.status);
    console.log(data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
