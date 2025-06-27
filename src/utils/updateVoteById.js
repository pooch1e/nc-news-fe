// could take votes or comments ID
export const updateVoteById = async (id, vote, type) => {
  //need check for votes or comment
  let baseUrl = `https://nc-news-api-qa14.onrender.com/api`;
  const url =
    type === 'comment'
      ? `${baseUrl}/comments/${id}`
      : `${baseUrl}/articles/${id}`;
  //check if comment or article id then append to URL

  try {
    const updateVotes = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inc_votes: vote }),
    });

    if (!updateVotes.ok) {
      throw new Error(`Failed to update votes: status${updateVotes.status}`);
    }

    const data = await updateVotes.json();

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
