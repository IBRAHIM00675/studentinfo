import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./UseFetch";
import { Button, Alert } from "react-bootstrap";
import axios from "axios";

const StudentDetails = () => {
  const { id } = useParams();
  const { data: student, isLoading } = useFetch(`http://localhost:4000/students/${id}`);
  const [formData, setFormData] = useState({ name: '', email: '', phone_number: '', course: '' });
  const [message, setMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        email: student.email,
        phone_number: student.phone_number,
        course: student.course,
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/studentinfo/${id}`, formData)
      .then((res) => {
        setMessage('Student updated successfully.');
        history.push(`/student-details/${id}`);
      })
      .catch((err) => {
        console.error('Error updating student:', err);
        setMessage('Error updating student: ' + err.message);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>; // or any loading indicator
  }

  return (
    <form onSubmit={handleSubmit}>
      {message && <Alert variant="success">{message}</Alert>}
      <div>
        <label>Update Student:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
      </div>
      
      <div>
        <label>Course:</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} />
      </div>

      <Button variant="primary" type="submit" className="edit-btn">Edit</Button>
    </form>
  );
}

export default StudentDetails;
