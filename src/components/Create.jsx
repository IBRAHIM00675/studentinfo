import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    course: ""
  });
  
// handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!data.name || !data.email || !data.phone_number || !data.course) {
      toast.error('Please fill in all fields', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    axios.post('http://localhost:4000/studentinfo', data)
      .then(res => {
        toast.success('Student info added successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })

      .catch(err => {
        toast.error('An error occurred while adding the student info', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  return (

    <Form onSubmit={handleSubmit}>
      
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control  type="text"  name='name'  onChange={handleChange}   placeholder="Enter your name"   value={data.name}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control  type="email"  name='email'  onChange={handleChange}  placeholder="name@example.com" value={data.email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="tel" name='phone_number'  onChange={handleChange}  placeholder="Enter your phone number" value={data.phone_number} />
        </Form.Group>

          <Form.Group className="mb-3" controlId="formCourse">
            <Form.Label>Course:</Form.Label>
            <Form.Control  type="text"  name='course'  onChange={handleChange} placeholder="Enter your course" value={data.course}  />
          </Form.Group>

        <Button id='btn' type='submit' variant="secondary" >
          Submit
        </Button>

      <ToastContainer />

    </Form>
    
  );
};

export default Create;
