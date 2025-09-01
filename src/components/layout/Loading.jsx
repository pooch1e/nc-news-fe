
export const Loading = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        <Spinner animation="border" role="status" variant="primary" />
        <p className="mt-3">Loading...</p>
      </div>
    </Container>
  );
};
