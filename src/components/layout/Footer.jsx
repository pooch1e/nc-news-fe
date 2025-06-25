import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CreatePost } from '../Forms/CreatePost';
import { useState } from 'react';
export const Footer = () => {
  const [toggleHome, setToggleHome] = useState(false);
  const location = useLocation();
  // console.log(location, 'location from uselocation in footer');

  const isArticle = location.pathname.startsWith('/articles');

  return (
    <>
      <div className="footer-container">
        {!toggleHome && (
          <Link to={'/'}>
            <Button variant="secondary">Home</Button>
          </Link>
        )}
        <CreatePost
          type={isArticle ? 'Create Post' : 'Add Comment'}
          onToggleForm={(isOpen) => setToggleHome(isOpen)}
        />
      </div>
    </>
  );
};
