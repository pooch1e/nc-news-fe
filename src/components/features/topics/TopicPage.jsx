import { useParams } from 'react-router-dom';
import { FetchArticles } from '../articles/FetchArticles';

export const TopicPage = () => {
  const { topic_slug } = useParams();

  return <FetchArticles topic={topic_slug} />;
};
