import { ArticleCard } from './ArticleCard';
import { VoteTypeContext } from '../../context/VoteTypeContext';

export const ArticleStyles = ({
  articles,
  handleQuery,
  toggleOrder,
  currentOrder,
  activeSortBy,
}) => {
  return (
    <div className="article-card">
      
        <div className="d-flex gap-2">
          <button
            className="flex-fill"
            variant={activeSortBy === 'created_at' ? 'dark' : 'light'}
            onClick={() => handleQuery({ sort_by: 'created_at' })}>
            Date
          </button>
          <button
            className="flex-fill"
            variant={activeSortBy === 'comment_count' ? 'dark' : 'light'}
            onClick={() => handleQuery({ sort_by: 'comment_count' })}>
            Comment Count
          </button>
          <button
            className="flex-fill"
            variant={activeSortBy === 'votes' ? 'dark' : 'light'}
            onClick={() => handleQuery({ sort_by: 'votes' })}>
            Votes
          </button>
          <button className="flex-fill" onClick={toggleOrder}>
            {currentOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
 
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
