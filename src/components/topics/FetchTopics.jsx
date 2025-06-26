import { useEffect, useState } from 'react';
import { getTopics } from '../../utils/getTopics';
export const FetchTopics = ({ loaded, onTopicsLoad }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    if (loaded && topics.length === 0) {
      getTopics().then(({ topics }) => {
        setTopics(topics);
        onTopicsLoad(topics);
      });
    }
  }, [loaded, topics.length, onTopicsLoad]);
  console.log(topics);
};
