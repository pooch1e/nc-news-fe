import { ArticleStyles } from './ArticleStyles';
import { useArticleApi } from '../../Hooks/useArticleApi';
import { Loading } from '../layout/Loading';
export const FetchArticles = ({ topic }) => {
  const { articleList, isError, isLoading, queries, handleQuery, toggleOrder } =
    useArticleApi({ topic });

  if (isLoading || !articleList) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
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
