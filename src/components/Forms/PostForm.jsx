import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { postCommentOrArticleById } from '../../utils/postById';
import { useParams } from 'react-router-dom';
export const PostForm = ({ type, onClose, id }) => {
  
  const [isLoading, setLoading] = useState(false);

  

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
      postCommentOrArticleById();
    } catch (err) {
      console.log(err);
      throw err;
    }

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
