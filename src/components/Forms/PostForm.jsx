import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { postCommentOrArticleById } from '../../utils/postById';
export const PostForm = ({ type, onClose, id }) => {
  const [isError, setError] = useState(null);

  //create a form

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value, 'form data');

    if (!value.trim()) {
      alert('handle error here');
      return;
    }

    console.log('form submitted');

    try {
      await postCommentOrArticleById(id, value, type);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  setValue('');

  if (onClose) {
    onClose();
  }

  if (isError) {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <p className="mt-3">We're Sorry, something has gone wrong...</p>
      </Container>
    );
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Enter Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={value}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
