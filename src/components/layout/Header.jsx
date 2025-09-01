import { NavStyles } from './NavStyles';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header className="p-2">
      <Link to={`/`} className="text-decoration-none">
        <h1 className="text-6xl">Nc News</h1>
        
      </Link>
      <NavStyles>
        <Navbar />
      </NavStyles>
    </header>
  );
};
