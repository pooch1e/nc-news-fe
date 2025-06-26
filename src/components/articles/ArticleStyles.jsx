import { ArticleCard } from './ArticleCard';
import { VoteTypeContext } from '../../context/VoteTypeContext';
import { Button, Container } from 'react-bootstrap';
export const ArticleStyles = ({
  articles,
  handleQuery,
  toggleOrder,
  currentOrder,
}) => {
  return (
    <div className="article-card">
      <Container>
        <Button onClick={() => handleQuery({ sort_by: 'created_at' })}>
          Date
        </Button>
        <Button onClick={() => handleQuery({ sort_by: 'comment_count' })}>
          Comment Count
        </Button>
        <Button onClick={() => handleQuery({ sort_by: 'votes' })}>Votes</Button>
        <Button onClick={toggleOrder}>
          {currentOrder === 'asc' ? 'Ascending' : 'Descending'}
        </Button>
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
