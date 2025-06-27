import { useLocation } from 'react-router-dom';
import { CreatePost } from '../Forms/CreatePost';
import { idTypeContext } from '../../context/idTypeContext';
import { useState, useContext, useEffect } from 'react';
export const Footer = () => {
  const [toggleHome, setToggleHome] = useState(false);

  const location = useLocation();

  const { setPostType } = useContext(idTypeContext);

  const isArticle = location.pathname.startsWith('/articles');
  const id = isArticle ? location.pathname.split('/').pop() : null;

  const currentPostType = isArticle ? 'comment' : 'article';

  useEffect(() => {
    setPostType(currentPostType);
  }, [currentPostType, setPostType]);
  return (
    <>
      <div className="fixed-bottom bg0 white  shadow-sm py-3">
        <CreatePost
          label={isArticle ? 'Add Comment' : 'Create Post'}
          onToggleForm={(isOpen) => setToggleHome(isOpen)}
          postType={currentPostType}
          postId={id}
        />
      </div>
    </>
  );
};
