import { Article } from './Article';
import { ArticleStyles } from './ArticleStyles';
export const ArticlesPage = () => {
  return (
    <section className="articles" id="articles-section">
      <div id="article-list">
        {/* map over articles here and render */}
        <ArticleStyles>
          <Article />
        </ArticleStyles>
      </div>
    </section>
  );
};
