import { Container, Spinner } from 'react-bootstrap';
export const Error = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        <Spinner animation="border" role="status" variant="primary" />
        <p className="mt-3">We're Sorry, there is an error ...</p>
      </div>
    </Container>
  );
};
