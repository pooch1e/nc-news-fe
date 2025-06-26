import { FetchTopics } from '../topics/FetchTopics';
import { Hamburger } from './Hamburger';
import { useState } from 'react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [topics, setTopics] = useState([]);

  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
    console.log('hamburger clicked');
    //should happen once
    if (!hasBeenOpened) {
      setHasBeenOpened(true);
    }
  };

  const handleTopicsList = (fetchedTopics) => {
    setTopics(fetchedTopics);
    // console.log(fetchedTopics, 'fetched from fetch topics in nav');
  };
  return (
    <>
      <div className="hamburger">
        <Hamburger onClick={toggleHamburger} />
      </div>
      <div className={`collapse ${isOpen ? 'show' : ''}`}>
        <nav className="navigation">
          <ul>
            {topics &&
              topics.length !== 0 &&
              topics.map((topic, index) => {
                return <li key={index}>{topic.slug.toUpperCase()}</li>;
              })}
          </ul>
        </nav>
      </div>
      <FetchTopics loaded={hasBeenOpened} onTopicsLoad={handleTopicsList} />
    </>
  );
};
