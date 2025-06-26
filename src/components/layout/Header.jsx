import { NavStyles } from './NavStyles';
import { Navbar } from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row className="mt-4">
          <Col>
            <section className="header-container">
              <Link to={`/`} className='text-decoration-none'>
                <h1 className="text-dark">NC News</h1>
              </Link>
              <NavStyles>
                <Navbar />
              </NavStyles>
            </section>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
