import { useState, useEffect } from 'react';
import { useTopicsApi } from '../../Hooks/useTopicsApi';
import { useNavigate, useLocation } from 'react-router-dom';

export const NavigationBar = ({ onTopicFilter }) => {
  const [loaded, setLoaded] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  
  const { isLoading, isError } = useTopicsApi({
    loaded,
    onTopicsLoad: (fetchedTopics) => {
      setTopics(fetchedTopics);
    },
  });


  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const topicFromPath = pathParts.includes('topics') ? pathParts[pathParts.indexOf('topics') + 1] : '';
    setSelectedTopic(topicFromPath || '');
  }, [location.pathname]);

  const handleTopicChange = (event) => {
    const topicSlug = event.target.value;
    setSelectedTopic(topicSlug);
    
    // Call parent callback if provided
    if (onTopicFilter) {
      onTopicFilter(topicSlug);
    }
    
    // Navigate to topic route
    if (topicSlug) {
      navigate(`/topics/${topicSlug}`);
    } else {
      navigate('/'); 
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-gray-500">Loading topics...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-red-500">Error loading topics</div>
      </div>
    );
  }

  return (
    <nav className="">
      <div className="">
        <div className="">
          <h1 
            className="text-xl font-bold text-gray-900 "
            onClick={() => {
              setSelectedTopic('');
              navigate('/');
              if (onTopicFilter) onTopicFilter('');
            }}
          >
          </h1>
          
          <div className="flex items-center space-x-2">
            <label htmlFor="topic-select" className="text-sm font-medium text-gray-700">
              Filter by topic:
            </label>
            <select
              id="topic-select"
              value={selectedTopic}
              onChange={handleTopicChange}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  bg-white text-sm"
            >
              <option value="">All Topics</option>
              {topics.map((topic) => (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};
