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
      <Container>
        <div className="d-flex gap-2">
          <Button
            className="flex-fill"
            variant={activeSortBy === 'created_at' ? 'dark' : 'light'}
            onClick={() => handleQuery({ sort_by: 'created_at' })}>
            Date
          </Button>
          <Button
            className="flex-fill"
            variant={activeSortBy === 'comment_count' ? 'dark' : 'light'}
            onClick={() => handleQuery({ sort_by: 'comment_count' })}>
            Comment Count
          </Button>
          <Button
            className="flex-fill"
            variant={activeSortBy === 'votes' ? 'dark' : 'light'}
            onClick={() => handleQuery({ sort_by: 'votes' })}>
            Votes
          </Button>
          <Button className="flex-fill" onClick={toggleOrder}>
            {currentOrder === 'asc' ? 'Ascending' : 'Descending'}
          </Button>
        </div>
      </Container>
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
