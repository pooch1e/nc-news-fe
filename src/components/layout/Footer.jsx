import { useLocation } from 'react-router-dom';
import { CreatePost } from '../Forms/CreatePost';
import { idTypeContext } from '../../context/idTypeContext';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  const [toggleHome, setToggleHome] = useState(false);
  const location = useLocation();
  const { setPostType } = useContext(idTypeContext);

  const isArticle = location.pathname.startsWith('/articles');
  const isHomePage = location.pathname === '/';
  const id = isArticle ? location.pathname.split('/').pop() : null;

  const currentPostType = isArticle ? 'comment' : 'article';

  useEffect(() => {
    setPostType(currentPostType);
  }, [currentPostType, setPostType]);

  if (!isHomePage && !isArticle) {
    return null;
  }
  return (
    <>
      <div className="fixed-bottom bg-white shadow-sm py-1 d-flex justify-content-center footer-container">
        {isHomePage ? (
          <Link to="/" className="btn btn-primary">
            HOME
          </Link>
        ) : (
          <CreatePost
            label="Add Comment"
            onToggleForm={(isOpen) => setToggleHome(isOpen)}
            postType="comment"
            postId={id}
          />
        )}
      </div>
    </>
  );
};
