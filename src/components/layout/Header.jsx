import { NavStyles } from './NavStyles';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <section className="header-container">
        <Link to={`/`} className="text-decoration-none">
          <h1 className="text-dark">NC News</h1>
        </Link>
        <NavStyles>
          <Navbar />
        </NavStyles>
      </section>
    </header>
  );
};
