import { useState, useEffect } from 'react';
import { getTopics } from '../../utils/getTopics';
export const useTopicsApi = ({ loaded, onTopicsLoad }) => {
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

  return { isLoading, isError, topics };
};
