import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Create = () => {



    
     


  return (
    <Form>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name:</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email:</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number:</Form.Label>
        <br/>
        <Form.Control type="tel" placeholder="Enter your number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Course:</Form.Label>
        <br/>
        <Form.Control type="text" placeholder="Enter your course" />
      </Form.Group>

     <Button variant="">Save info</Button>

      
    </Form>
  );
}






export default Create;