import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoQuizFound = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        // Use navigate to go to the home page (or any other route you want)
        navigate('/');
    };

    return (
        <div className='text-red-500 flex flex-col items-center justify-center my-11' >
            <h1>404 - Not Found</h1>
            <p>The page you're looking for does not exist.</p>
            <button className='btn btn-primary' onClick={handleNavigateHome}>Go to Home Page</button>
        </div>
    );
};

export default NoQuizFound;
