import { useEffect, useState } from 'react';
import { getTopics } from '../../utils/getTopics';
import { Error } from '../layout/Error';

export const FetchTopics = ({ loaded, onTopicsLoad }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    if (loaded && topics.length === 0) {
      setIsLoading(true);
      setIsError(null);

      getTopics()
        .then(({ topics }) => {
          setTopics(topics);
          setIsLoading(false);
          onTopicsLoad(topics);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setIsError(err);
        });
    }
  }, [loaded, onTopicsLoad]);

  if (isError) {
    return <Error />;
  }

  return null;
};
