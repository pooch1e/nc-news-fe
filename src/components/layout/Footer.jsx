import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PostComment } from '../comments/PostComment';
export const Footer = () => {
  const location = useLocation();
  // console.log(location, 'location from uselocation in footer');

  const isArticle = location.pathname.startsWith('/articles');
  return (
    <>
      <div className="footer-container">
        <Link to={'/'}>
          <Button variant="secondary">Home</Button>
        </Link>
        <PostComment type={isArticle ? 'Create Post' : 'Add Comment'} />
      </div>
    </>
  );
};
