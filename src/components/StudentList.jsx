import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Table, Alert } from 'react-bootstrap'; // Import Alert
import axios from 'axios';

const StudentList = ({ students }) => {
  const history = useHistory();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // Type of alert (success/error)

  const handleDelete = (id) => {
    console.log('Deleting student with id:', id);

    axios.delete('http://localhost:4000/studentinfo/' + id)
      .then((res) => {
        console.log('Student deleted:', res);

        setAlertMessage('Student deleted successfully.');
        setAlertType('success');
        // Optionally refresh the list or redirect
        history.push('/');
      })

      .catch((err) => {
        console.error('Error deleting student:', err);
        setAlertMessage('Error deleting student: ' + err.message);
        setAlertType('danger'); // Show error alert
      });
      
  };

  return (
    <div className="student-list">
      <h1>STUDENT LIST</h1>

      {/* Alert for notifications */}
      {alertMessage && (
        <Alert variant={alertType} onClose={() => setAlertMessage('')} dismissible>
          {alertMessage}
        </Alert>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.phone_number}</td>
            <td>{student.course}</td>
            <td>

             <Link to={`/student-details/${student.id}`}>
                  <Button variant="info" className='small-button'>View Details</Button>
             </Link>
                
                <Button onClick={() => handleDelete(student.id)} variant="danger" className="delete-btn small-button" type="button">Delete Student</Button>

            </td>

            </tr>
          ))}
        </tbody>

      </Table>
    </div>
  );
};

export default StudentList;
