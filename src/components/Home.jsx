import React from 'react';
import StudentList from './StudentList';
import useFetch from './UseFetch';

const Home = () => {
    const { data: students } = useFetch('http://localhost:4000/studentinfo');

    return (
        <>
            {students && <StudentList students={students} />}
        </>
    );
}

export default Home;
