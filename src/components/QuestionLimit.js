import React, { useContext, useState } from 'react';
import DataContext from '../context/dataContext';

const NumberOfQuestions = () => {
    const { handleNumberOfQuestions } = useContext(DataContext);
    const [showWarning, setShowWarning] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        handleNumberOfQuestions(e);
        setShowWarning(value > 20);
    };

    return (
        <div className="my-4 text-white">
            <label htmlFor="numberOfQuestions" className="block text-lg mb-2">
                Number of Questions:
            </label>
            <input
                type="number"
                id="numberOfQuestions"
                onChange={(e) => handleChange(e)}
                style={{
                    width: "10%",
                    color: "black"
                }}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                min="1"
                defaultValue={10}
            />

            {showWarning && (
                <div className="text-red-500 mt-2 text-sm">
                    Please enter a value less than or equal to 20.
                </div>
            )}
        </div>
    );
};

export default NumberOfQuestions;
