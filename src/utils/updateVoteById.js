// could take votes or comments ID
export const updateVoteById = async (id, vote, isComment = null) => {
  //need check for votes or comment
  let baseUrl = `https://nc-news-api-qa14.onrender.com/api`
  let commentIdUrl = `/comments/${id}`
  let articleIdUrl = `/articles/${id}`
  //check if comment or article id then append to URL
  if (isComment) {
    baseUrl = baseUrl + commentIdUrl;
  } else {
    baseUrl = baseUrl + articleIdUrl;
  }
  try {
    const updateVotes = await fetch(baseUrl, {
      method: 'PATCH',
      body: JSON.stringify({inc_votes: vote})
    })
    
  } catch (err) {
    console.log(err)
  }
}