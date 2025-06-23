export const Article = (article) => {
  return (
    <div className="article-content">
      <h2>{article.title}</h2>
      <p>{article.Author}</p>
      <p>{article.topic}</p>
      <p>{article.article_img_url}</p>
      <p>{article.votes}</p>
    </div>
  );
};
