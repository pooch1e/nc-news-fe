import { Hamburger } from './Hamburger';
import { useState } from 'react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
    console.log('hamburger clicked');
  };
  return (
    <>
      <div className="hamburger">
        <Hamburger onClick={toggleHamburger} />
      </div>
      <div className={`collapse ${isOpen ? 'show' : ''}`}>
        <nav className="navigation">
          <ul>
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
