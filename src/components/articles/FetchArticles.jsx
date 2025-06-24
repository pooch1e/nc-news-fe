import { ArticleStyles } from './ArticleStyles';
import { useState, useEffect } from 'react';
import { getArticles } from '../../utils/getArticles';
export const FetchArticles = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((result) => {
        const { articles } = result;
        console.log(result.articles);
        setIsLoading(false);
        setArticleList(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
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
        <ArticleStyles articles={articlesWithDate} />
      </div>
    </section>
  );
};
