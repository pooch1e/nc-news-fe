import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const Footer = () => {
  const location = useLocation();
  console.log(location, 'location from uselocation in footer');

  const isArticle = location.pathname.startsWith('/articles') ? true : false;
  return (
    <>
      <div className="footer-container">
        <Link to={'/'}>
          <Button variant="secondary">Home</Button>
        </Link>
        <Button variant="secondary">{isArticle ? 'Add Comment' : 'Create Post'}</Button>
      </div>
    </>
  );
};
