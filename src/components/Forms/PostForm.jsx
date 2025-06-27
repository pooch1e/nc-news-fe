import { useState, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { postCommentOrArticleById } from '../../utils/postById';
import { useRefresh } from '../../context/refreshContext';
import { UserContext } from '../../context/userContext';
export const PostForm = ({ type, onClose, id }) => {
  const { loggedInUser } = useContext(UserContext); //tickle122

  const username = loggedInUser.name === 'tickle122' ? 'tickle122' : null;
  const { triggerRefresh } = useRefresh();
  const [isError, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  //create a form

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
    } else {
      setValidated(true);
    }
    

    if (!value.trim()) {
      setError('Please enter some text');
      return;
    }

    try {
      await postCommentOrArticleById(id, value, type, username);
      setValue('');
      console.log('form submitted');
      triggerRefresh();

      if (onClose) {
        onClose();
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  if (isError) {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <p className="mt-3">We're Sorry, something has gone wrong...</p>
      </Container>
    );
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-1" controlId="comment">
          <Form.Label>Enter Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={value}
            onChange={handleChange}
            placeholder={`Write your ${
              type === 'comment' ? 'comment' : 'article'
            } here...`}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
