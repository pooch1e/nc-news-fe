import { Error } from '../layout/Error';
import { Loading } from '../layout/Loading';
import { useTopicsApi } from '../../Hooks/useTopicsApi';

export const FetchTopics = ({ loaded, onTopicsLoad }) => {
  const { isLoading, isError, topics } = useTopicsApi({
    loaded,
    onTopicsLoad,
  });

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return null;
};
