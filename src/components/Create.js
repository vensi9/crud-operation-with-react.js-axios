import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
export default function Create() {
  const [progress, setProgress] = useState(0)
  let history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios.post('https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData', {
      firstName,
      lastName,
      checkbox,
    }).then(() => {
      history('/read');
    })
  }
  const handleButtonClick = () => {
    postData();   // Call the postData function
    setProgress(100); // Set the progress to 100
  }
  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={handleButtonClick} type='submit'>Submit</Button>
      </Form>
    </div>
  )
}