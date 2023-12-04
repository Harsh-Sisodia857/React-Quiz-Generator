import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = ({ initialTime, onTimeout }) => {
    const [time, setTime] = useState(initialTime);
    const navigate = useNavigate();

    useEffect(() => {
        if (time > 0) {
            const intervalId = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        } else {
            // Timer has reached 0, redirect to '/quiz/result'
            onTimeout();
            navigate('/quiz/result');
        }
    }, [time, navigate, onTimeout]);

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className='flex items-end justify-center'>
            <div className='pr-2'>
                {formatTime()}
            </div>
            <img
                src="./assets/clock.png"
                alt="Cloud Image"
                style={{
                    width: '65px',
                    height: '61px',
                }}
            />
        </div>
    );
};

export default Timer;
