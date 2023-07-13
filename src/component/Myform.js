import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
function MyForm() {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform any desired action with the submitted value
      console.log('Submitted value:', inputValue);
    };
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formInput">
          <FormControl
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter a value"
          />
           
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  export default MyForm;