import { useState, useEffect } from 'react';
import { getArticles } from '../../utils/getArticles';
export const useApiRequest = ({ topic }) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [queries, setQueries] = useState({
    sort_by: 'created_at',
    order: 'desc',
  });

  useEffect(() => {
    console.log('this is what Im searching with', topic, queries);
    getArticles(null, topic, queries)
      .then((result) => {
        const { articles } = result;
        console.log(result.articles);
        setIsLoading(false);
        setError(null);
        setArticleList(articles);
      })
      .catch((err) => {
        console.log(err);
        setError({ status: 404, msg: 'Error fetching articles' });
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

  return { articleList, isLoading, isError, queries, handleQuery, toggleOrder };
};
