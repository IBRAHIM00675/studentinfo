import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


const Create = () => {

  const [data, setData] = useState({
    name : "",
    email: "",
    phone_number: "",
    course:""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData ((prev)=> {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/studentinfo1', data)
    .then(res =>{

      toast.success('student info added successfully',{
        position: toast.POSITION.TOP_RIGHT,
        autoClose:3000,
      })
    })

    .catch(arr =>{

      toast.error('An error occured while adding the student info',{
        position: toast.POSITION.TOP_RIGHT,
        autoClose:3000,
      })
    })

  }

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name:</Form.Label>
        <br/>
        <Form.Control type="text" name='name' onChange={handleChange} placeholder="Enter your name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email:</Form.Label>
        <br/>
        <Form.Control type="text" name='email' onChange={handleChange}  placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number:</Form.Label>
        <br/>
        <Form.Control type="tel" name='phone_number' onChange={handleChange}  placeholder="Enter your number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Course:</Form.Label>
        <br/>
        <Form.Control type="text" name='course' onChange={handleChange}  placeholder="Enter your course" />
      </Form.Group>

     <Button id='btn' type='submit' variant="primary">Save info</Button>
     <ToastContainer/>

      
    </Form>
  );
}






export default Create;