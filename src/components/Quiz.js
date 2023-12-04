import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../context/dataContext';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import NoQuizFound from './NoQuizFound';
import Timer from './Timer';

const Quiz = () => {
    const [showNoQuestionsMessage] = useState(false);
    const { question, quizs, checkAnswer, correctAnswer, selectedAnswer, questionIndex, nextQuestion, numberOfQuestions } = useContext(DataContext);
    const navigate = useNavigate();
    const showTheResult = () => {
        navigate('/quiz/result');
    };
    const timerInitialTime = 30*numberOfQuestions; // 5 question * 30sec = 150sec
    const handleTimeout = () => {
        console.log('Timer has reached 0!');
    };

    const options = question?.answers;
    return (
        <section className={` ${quizs.length > 0 ? 'bg-dark' : ''} text-white  vh-100 relative`}>
            <div className="absolute top-0 right-0 p-8 text-2xl">
                <Timer initialTime={timerInitialTime} onTimeout={handleTimeout} />
            </div>
            <div className="flex items-center justify-center h-full">
                <div className="container">
                    {quizs.length > 0 ? (
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8">
                                <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
                                    <div className="d-flex justify-content-between gap-md-3">
                                        <h5 className="mb-2 fs-normal lh-base">{question?.question}</h5>
                                        <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>
                                            {quizs.indexOf(question) + 1} / {quizs.length}
                                        </h5>
                                    </div>
                                    <div>
                                        {options &&
                                            Object.keys(options).map(
                                                (item, index) =>
                                                    options[item] !== null && (
                                                        <button
                                                            key={index}
                                                            className={`d-flex justify-content-between option w-100 text-start btn text-white px-3 mt-3 rounded btn-dark ${correctAnswer &&
                                                                (correctAnswer === options[item] ? 'bg-success' : selectedAnswer === options[item] ? 'bg-danger' : '')}`}
                                                            onClick={() => checkAnswer(options[item])}
                                                        >
                                                            <div>{options[item]}</div>
                                                            <div>
                                                                {correctAnswer &&
                                                                    (correctAnswer === options[item] ? (
                                                                        <TiTick style={{ fontSize: '26px' }} />
                                                                    ) : (
                                                                        selectedAnswer === options[item] && <ImCross />
                                                                    ))}
                                                            </div>
                                                        </button>
                                                    )
                                            )}
                                    </div>
                                    {questionIndex + 1 !== quizs.length ? (
                                        <button className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold" onClick={nextQuestion} disabled={!selectedAnswer}>
                                            Next Question
                                        </button>
                                    ) : (
                                        <button className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold" onClick={showTheResult} disabled={!selectedAnswer}>
                                            Show Result
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        quizs?.error && showNoQuestionsMessage ? (
                            <NoQuizFound />
                        ) : (
                            <Spinner />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Quiz;
