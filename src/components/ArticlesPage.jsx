import { Article } from './Article';
import { ArticleStyles } from './ArticleStyles';
import { useState, useEffect } from 'react';
import { getArticles } from '../utils/getArticles';
export const ArticlesPage = () => {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    const articles = getArticles();
    setArticleList({ articles });
  }, []);
  console.log(articleList);
  return (
    <section className="articles" id="articles-section">
      <div id="article-list">
        {/* map over articles here and render */}

      </div>
    </section>
  );
};
