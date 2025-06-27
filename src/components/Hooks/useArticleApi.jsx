import { useState, useEffect } from 'react';
import { getArticles } from '../../utils/getArticles';

export const useArticleApi = ({ id, topic }) => {
  const [articleList, setArticleList] = useState([]);
  const [singleArticle, setSingleArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [queries, setQueries] = useState({
    sort_by: 'created_at',
    order: 'desc',
  });

  useEffect(() => {
    getArticles(id, topic, queries)
      .then((result) => {
        if (id) {
          setSingleArticle(result.article);
        } else {
          setArticleList(result.articles);
        }
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError({ status: 404, msg: 'Error fetching articles' });
      });
  }, [id, topic, queries]);

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

  return {
    articleList,
    singleArticle,
    isLoading,
    isError,
    queries,
    handleQuery,
    toggleOrder,
  };
};
