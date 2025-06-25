import { useState } from 'react';
import { Form } from 'react-bootstrap';
export const PostForm = () => {
  //create a form
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    // no "submit event" param needed above ^
    // sendInputValueToApi(value).then(() => /* Do something */)
  };
  //on submit, pass data to post comment api function

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" placeholder="Enter your comment..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Text Area</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
};
