

export const Error = ({ message, status }) => {
  const getErrorMessage = () => {
    if (status === 404) return 'Content not found';
    if (status >= 500) return 'Server error - please try again later';
    return message || 'Something went wrong';
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-50">
      <Alert variant="danger" className="text-center">
        <Alert.Heading>Oops! {status && `(${status})`}</Alert.Heading>
        <p>{getErrorMessage()}</p>
        <button
          className="btn btn-outline-danger"
          onClick={() => window.location.reload()}>
          Try Again
        </button>
      </Alert>
    </Container>
  );
};
