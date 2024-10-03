import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Create = () => {



    return(
        <Form >
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">

          <Form.Label className=''>Name:</Form.Label>
          <br/>
          <Form.Control  type="text" name="Name"  placeholder="Enter Your Name" />
          </Form.Group>
            
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='text-sm'>Email:</Form.Label>
          <br/>
          <Form.Control  type="text" name="Email"  placeholder="Enter Your Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course:</Form.Label>
          <br/>
          <Form.Control  type="text" name="Course"  placeholder="Enter Your Course" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number:</Form.Label>
          <br/>
          <Form.Control  type="tel" name="phone number"  placeholder="Enter Your phonenumber" />
          </Form.Group>
            
       
            
         <Button id='save-btn' type='submit' variant="primary">save info</Button>
        
        
      </Form>
      
    );
}




export default Create;