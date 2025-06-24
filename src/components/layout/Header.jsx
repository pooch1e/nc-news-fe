import { NavStyles } from "./NavStyles";
import { Navbar } from "./Navbar";
export const Header = () => {
  return (
    <section className="header-container">
      <h1>NC News</h1>
      <NavStyles>
        <Navbar />
        </NavStyles>
    </section>
  );
};

