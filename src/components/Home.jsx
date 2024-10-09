import React from 'react';
import StudentList from './StudentList';
import useFetch from './UseFetch';


const Home = () => {
    const { data: students, isLoading, error } = useFetch('http://localhost:4000/studentinfo');

    return (
        <div className="home">
            {isLoading && <p>Loading students...</p>}
            {error && <p>Error fetching students: {error.message}</p>}
            {students && students.length > 0 ? (
                <StudentList students={students} />
            ) : (
                !isLoading && <p>No students found.</p>
            )}
        </div>
    );
}

export default Home;
