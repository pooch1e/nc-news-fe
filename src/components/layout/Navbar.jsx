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
    // console.log(fetchedTopics, 'fetched from fetch topics in nav');
  };
  return (
    <>
      <div className="hamburger mb-2">
        <Hamburger onClick={toggleHamburger} />
      </div>
      <Collapse in={isOpen}>
        <div>
          <nav className="navigation">
            <Card className="shadow-sm">
              <Card.Body className="p-2">
                <ListGroup variant="flush">
                  {topics &&
                    topics.length !== 0 &&
                    topics.map((topic, index) => {
                      const isActive = currentPage === topic.slug;
                      return (
                        <ListGroupItem
                          key={index}
                          action
                          active={isActive}
                          className="border-0 py-2 px-3"
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
      <FetchTopics loaded={hasBeenOpened} onTopicsLoad={handleTopicsList} />
    </>
  );
};
