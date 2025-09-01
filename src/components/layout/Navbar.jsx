import { FetchTopics } from '../topics/FetchTopics';
import { Hamburger } from './Hamburger';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [topics, setTopics] = useState([]);
  const [currentPage, setCurrentPage] = useState('');

  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);

    if (!hasBeenOpened) {
      setHasBeenOpened(true);
    }
  };

  const handleCurrentPage = (topicSlug) => {
    setCurrentPage(topicSlug);
  };

  const handleTopicsList = (fetchedTopics) => {
    setTopics(fetchedTopics);
  };

  return (
    <>
      <div className="">
        <div className="">
          <Hamburger onClick={toggleHamburger} />
        </div>
        <div in={isOpen}>
          <div className="mb-4">
            <nav className="navigation">
              <div className="shadow-sm">
                <div className="p-2">
                  <ul>
                    {topics &&
                      topics.length !== 0 &&
                      topics.map((topic, index) => {
                        const isActive = currentPage === topic.slug;
                        return (
                          <li
                            as={'li'}
                            key={index}
                            action
                            className={`border-0 py-2 px-3 fs-5 link-offset-2 link-underline link-underline-opacity-25 ${
                              isActive
                                ? 'bg-light text-primary border-start border-primary border-3'
                                : ''
                            }`}
                            onClick={() => handleCurrentPage(topic.slug)}>
                            <Link to={`topics/${topic.slug}`}>
                              {topic.slug.toUpperCase()}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {hasBeenOpened && (
          <FetchTopics loaded={hasBeenOpened} onTopicsLoad={handleTopicsList} />
        )}
      </div>
    </>
  );
};
