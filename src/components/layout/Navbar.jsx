import { Hamburger } from './Hamburger';
import { useState } from 'react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
    console.log('hamburger clicked');
  };
  return (
    <nav className="navigation">
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>

      <div className="hamburger">
        <Hamburger onClick={toggleHamburger} />
      </div>

      {isOpen && (
        <aside className="side-nav">
          <ul>
            <li>Side Link 1</li>
            <li>Side Link 2</li>
            <li>Side Link 3</li>
          </ul>
        </aside>
      )}
    </nav>
  );
};
