import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoQuizFound = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        // Use navigate to go to the home page (or any other route you want)
        navigate('/');
    };

    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>The page you're looking for does not exist.</p>
            <button onClick={handleNavigateHome}>Go to Home Page</button>
        </div>
    );
};

export default NoQuizFound;
