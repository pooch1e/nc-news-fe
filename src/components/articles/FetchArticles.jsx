import { ArticleStyles } from './ArticleStyles';
import { useState, useEffect } from 'react';
import { getArticles } from '../../utils/getArticles';
import { Container, Spinner } from 'react-bootstrap';
export const FetchArticles = ({ topic }) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queries, setQueries] = useState(null);
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    getArticles(null, topic, queries, order)
      .then((result) => {
        const { articles } = result;
        console.log(result.articles);
        setIsLoading(false);
        setArticleList(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic, queries, order]);

  const handleQuery = (queryType) => {
    setQueries(queryType);
  };

  const toggleOrder = () => {
    const newOrder = order === 'desc' ? 'asc' : 'desc';
    setOrder(newOrder);
    handleQuery(newOrder);
  };
  console.log(queries);

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
          currentOrder={order}
        />
      </div>
    </section>
  );
};
