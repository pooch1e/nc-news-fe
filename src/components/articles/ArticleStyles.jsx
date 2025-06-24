import { ArticleCard } from './ArticleCard';
import { VoteTypeContext } from '../../context/VoteTypeContext';
export const ArticleStyles = ({ articles }) => {
  return (
    <div className="article-card">
      {articles.map((article) => {
        return (
          <VoteTypeContext.Provider value="article" key={article.article_id}>
            <ArticleCard key={article.article_id} article={article} />
          </VoteTypeContext.Provider>
        );
      })}
    </div>
  );
};
