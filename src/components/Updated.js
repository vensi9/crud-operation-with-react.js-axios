import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);
  const [progress, setProgress] = useState(0);
  let history = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value'))
  }, []);
  const updateAPIData = () => {
    axios.put(`https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData/${id}`, {
      firstName,
      lastName,
      checkbox
    }).then(() => {
      history('/read')
    })
  }
  const handleButtonClick = () => {
    setProgress(100); // Set the progress to 100
    updateAPIData();   // Call the postData function
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
          <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button type='submit' onClick={handleButtonClick}>Update</Button>
      </Form>
    </div>
  )
}