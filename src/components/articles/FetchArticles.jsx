import { ArticleStyles } from './ArticleStyles';
import { useState, useEffect } from 'react';
import { getArticles } from '../../utils/getArticles';
import { Container, Spinner } from 'react-bootstrap';
export const FetchArticles = ({ topic }) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queries, setQueries] = useState({
    sort_by: 'created_at',
    order: 'desc',
  });

  useEffect(() => {
    console.log('this is what Im searchign with', topic, queries);
    getArticles(null, topic, queries)
      .then((result) => {
        const { articles } = result;
        console.log(result.articles);
        setIsLoading(false);
        setArticleList(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic, queries]);

  const handleQuery = (newQueries) => {
    setQueries((prev) => {
      return { ...prev, ...newQueries };
    });
  };

  const toggleOrder = () => {
    setQueries((prev) => ({
      ...prev,
      order: prev.order === 'asc' ? 'desc' : 'asc',
    }));
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
          currentOrder={queries.order}
        />
      </div>
    </section>
  );
};
