import { ArticleCard } from './ArticleCard';
import { VoteTypeContext } from '../../context/VoteTypeContext';
import { Button } from '../ui/Button';

export const ArticleStyles = ({
  articles,
  handleQuery,
  toggleOrder,
  currentOrder,
  activeSortBy,
}) => {
  return (
    <section className="grid grid-cols-1 gap-4">
      <div className="flex justify-around py-2 gap-2">
        <Button
          variant={activeSortBy === 'created_at' ? 'dark' : 'light'}
          onClick={() => handleQuery({ sort_by: 'created_at' })}>
          Date
        </Button>
        <Button
          variant={activeSortBy === 'comment_count' ? 'dark' : 'light'}
          onClick={() => handleQuery({ sort_by: 'comment_count' })}>
          Comment Count
        </Button>
        <Button
          variant={activeSortBy === 'votes' ? 'dark' : 'light'}
          onClick={() => handleQuery({ sort_by: 'votes' })}>
          Votes
        </Button>
        <Button
          onClick={toggleOrder}
          variant={currentOrder === 'asc' ? 'dark' : 'light'}>
          {currentOrder === 'asc' ? 'Ascending' : 'Descending'}
        </Button>
      </div>

      {articles.map((article) => {
        return (
          <VoteTypeContext.Provider value="article" key={article.article_id}>
            <ArticleCard key={article.article_id} article={article} />
          </VoteTypeContext.Provider>
        );
      })}
    </section>
  );
};
