import { ArticleCard } from './ArticleCard';

export const ArticleStyles = ({ articles }) => {
  return (
    <div className="article-card">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
};
