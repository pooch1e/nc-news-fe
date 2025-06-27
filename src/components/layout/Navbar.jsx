import { FetchTopics } from '../topics/FetchTopics';
import { Hamburger } from './Hamburger';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Collapse, ListGroupItem } from 'react-bootstrap';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [topics, setTopics] = useState([]);
  const [currentPage, setCurrentPage] = useState('');

  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
    console.log('hamburger clicked');
    //should happen once
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
      <div className="navbar-wrapper mb-4">
        <div className="hamburger mb-2">
          <Hamburger onClick={toggleHamburger} />
        </div>
        <Collapse in={isOpen}>
          <div className="mb-4">
            <nav className="navigation">
              <Card className="shadow-sm">
                <Card.Body className="p-2">
                  <ListGroup as={'ul'} variant="flush">
                    {topics &&
                      topics.length !== 0 &&
                      topics.map((topic, index) => {
                        const isActive = currentPage === topic.slug;
                        return (
                          <ListGroupItem
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
                          </ListGroupItem>
                        );
                      })}
                  </ListGroup>
                </Card.Body>
              </Card>
            </nav>
          </div>
        </Collapse>
        {hasBeenOpened && (
          <FetchTopics loaded={hasBeenOpened} onTopicsLoad={handleTopicsList} />
        )}
      </div>
    </>
  );
};
