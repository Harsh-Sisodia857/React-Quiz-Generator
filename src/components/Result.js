import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
    
    const { quizs, marks, handleStartAgain }  = useContext(DataContext);
    const result = marks > (quizs.length * 5 / 2);
    return (
        <section className="bg-dark text-white">
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${result ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{result ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length * 5}</h3>

                            <button onClick={handleStartAgain} className='btn py-2 px-4 btn-light fw-bold d-inline'>Start Again</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;