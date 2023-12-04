import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const DifficultyLevel = () => {
    const { difficultyLevel, setDifficultyLevel } = useContext(DataContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setDifficultyLevel(value);
    };

    return (
        <div className="mb-4">
            <label htmlFor="difficultyLevel" className="block text-white font-bold mb-2">
                Difficulty Level:
            </label>
            <select
                id="difficultyLevel"
                value={difficultyLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded bg-gray-800
                 focus:outline-none focus:border-blue-500"
                style={{
                    "width" : "13%",
                    "backgroundColor" : "white",
                    "color" : "black",
                    "marginBottom": "70px"}}
            >
                <option value="easy" defaultValue={"Easy"} className="text-black">
                    Easy
                </option>
                <option value="medium" className="text-black">
                    Medium
                </option>
                <option value="hard" className="text-black">
                    Hard
                </option>
            </select>
        </div>
    );
};

export default DifficultyLevel;
