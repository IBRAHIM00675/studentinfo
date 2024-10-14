import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap'; 
import axios from 'axios';

const StudentList = ({ students }) => {
  

  const handleDelete = (id) => {

    axios.delete(`http://localhost:4000/studentinfo/${id}`)

      .then(() => {
        alert('Student deleted successfully.');
      })

      .catch((err) => {
        alert('Student failed to delete .');
      });
  };

  return (
    <div className="student-list">
      <h1>STUDENT LIST</h1>

      

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
                <Button onClick={() => handleDelete(student.id)} variant="danger" className="delete-btn small-button" type="button">
                  Delete Student
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
