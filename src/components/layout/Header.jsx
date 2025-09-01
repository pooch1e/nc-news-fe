
import { Link } from 'react-router-dom';
import { NavigationBar } from '../ui/NavigationBar';
export const Header = () => {
  return (
    <header className="p-4 border-1">
      <div className='flex flex-row items-center justify-between'>
      <Link to={`/`} className="text-decoration-none">
        <h1 className="text-6xl">Nc News</h1>
      </Link>
      
      <img src="/src/assets/icons8-news-200.svg"  alt="news icon glyph" />
      
      </div>
      <NavigationBar/>
    </header>
  );
};
