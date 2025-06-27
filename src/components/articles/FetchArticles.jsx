import { ArticleStyles } from './ArticleStyles';
import { Container, Spinner } from 'react-bootstrap';
import { useApiRequest } from '../Hooks/useApiRequest';
export const FetchArticles = ({ topic }) => {
  const { articleList, isError, isLoading, queries, handleQuery, toggleOrder } =
    useApiRequest({ topic });

  if (isLoading || !articleList) {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          <Spinner animation="border" role="status" variant="primary" />
          <p className="mt-3">Loading...</p>
        </div>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          <Spinner animation="border" role="status" variant="primary" />
          <p className="mt-3">We're Sorry, there is an error ...</p>
        </div>
      </Container>
    );
  }

  let articlesWithDate = articleList.map((article) => {
    let d = new Date(article.created_at);
    return {
      ...article,
      formatted_date: d.toLocaleDateString(),
    };
  });
  return (
    <section className="articles" id="articles-section">
      <div id="article-list">
        <ArticleStyles
          articles={articlesWithDate}
          handleQuery={handleQuery}
          toggleOrder={toggleOrder}
          currentOrder={queries.order}
          activeSortBy={queries.sort_by}
        />
      </div>
    </section>
  );
};
