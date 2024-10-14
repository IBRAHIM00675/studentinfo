import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import axios from "axios";

const StudentDetails = () => {
  const { id } = useParams();
  const { data: student} = useFetch(`http://localhost:4000/student/${id}`);
  const [formData, setFormData] = useState({ name: '', email: '', phone_number: '', course: '' });

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
      .then(() => alert('Student updated successfully.'))
      .catch((err) => alert('Error updating student:', err));
  };

 

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Edit</button>
    </form>
  );
}

export default StudentDetails;
