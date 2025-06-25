import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CreatePost } from '../Forms/CreatePost';
import { idTypeContext } from '../../context/idTypeContext';
import { useState, useContext, useEffect } from 'react';
export const Footer = () => {
  const [toggleHome, setToggleHome] = useState(false);
  const location = useLocation();

  const { setPostType } = useContext(idTypeContext);

  const isArticle = location.pathname.startsWith('/articles');

  const currentPostType = isArticle ? 'comment' : 'article';

  useEffect(() => {
    setPostType(currentPostType);
  }, [currentPostType, setPostType]);
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
          postType={currentPostType}
        />
      </div>
    </>
  );
};
