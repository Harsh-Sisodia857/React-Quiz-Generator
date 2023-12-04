import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';  

const Start = () => {
    const navigate = useNavigate(); 

    const handleStartQuiz = () => {
        navigate('/quiz');  // Redirect to '/quiz' when the button is clicked
    };

    return (
        <section className='text-white text-center bg-dark'>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Basic React JS Quiz</h1>
                        <button onClick={handleStartQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
