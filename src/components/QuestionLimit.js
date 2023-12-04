import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const NumberOfQuestions = () => {
    const { numberOfQuestions, setNumberOfQuestions } = useContext(DataContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setNumberOfQuestions(value);
    };

    return (
        <div className="my-4 text-white">
            <label htmlFor="numberOfQuestions" className="block text-lg mb-2">
                Number of Questions:
            </label>
            <input
                type="number"
                id="numberOfQuestions"
                value={numberOfQuestions}
                onChange={handleChange}
                style={{
                    width: "10%",
                    color: "black"
}}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                min="1"
                max="20"
                defaultValue={10}
            />
        </div>
    );
};

export default NumberOfQuestions;
