export const ArticleCard = ({ article }) => {
  return (
    <div className="article-content-container">
      <div className="article-title">
        <h2>{article.title}</h2>
      </div>
      <div className="article-content">
        <p>{article.author}</p>
        <p>{article.topic}</p>
      </div>
      <div className="article-img">
        <img src={article.article_img_url} alt={article.title}></img>
      </div>
      <div className="article-votes">
        <p>Votes: {article.votes}</p>
      </div>
      <div className="article-comments">
        <p>Comments: {article.comment_count}</p>
      </div>
      <div className="article-createdAt">
        <p>Date Created: {article.formatted_date}</p>
      </div>
    </div>
  );
};
