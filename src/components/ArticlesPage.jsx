import { ArticleStyles } from './ArticleStyles';
import { useState, useEffect } from 'react';
import {getArticles} from '../utils/getArticles'
export const ArticlesPage = () => {
  
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    getArticles()
      .then((result) => {
        const {articles} = result;
        console.log(result.articles);
        setIsLoading(false);
        setArticleList(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  if (isLoading) {
    return <p>Loading....</p>
  }

  return (
    <section className="articles" id="articles-section">
      <div id="article-list">
        <ArticleStyles articles={articleList} />
      </div>
    </section>
  );
};
