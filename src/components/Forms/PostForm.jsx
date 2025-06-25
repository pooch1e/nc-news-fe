import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { postCommentOrArticleById } from '../../utils/postById';
export const PostForm = ({ onClose }) => {
  //create a form
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, 'form data');
    if (!value.trim()) {
      alert('handle error here');
      return;
    }

    console.log('form submitted');

    setValue('');

    if (onClose) {
      onClose();
    }
  };

  //on submit, pass data to post comment api function

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
