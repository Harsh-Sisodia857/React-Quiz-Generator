import { useState, useEffect } from "react";
import DataContext from "./dataContext";
import { useNavigate } from 'react-router-dom';  

export const DataState = (props) => {
    // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
    const [quizs, setQuizs] = useState([]);
    const [question, setQuesion] = useState({});
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('Easy');
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [marks, setMarks] = useState(0);
    const [topic, setTopic] = useState('');
    const navigate = useNavigate();

    const fetchQuiz = () => {
        fetch(`https://quizapi.io/api/v1/questions?apiKey=Tefl5ndhZuyEr9ESkIucpLWELZ4Ys7ldaQIXFAll&limit=3&tags=${topic}&difficulty=${difficultyLevel}&limit=${numberOfQuestions}`)
            .then(res => res.json())
            .then(data => setQuizs(data))
    }
    
    // Load JSON Data
    useEffect(() => {
        fetchQuiz();
    }, [topic, difficultyLevel, numberOfQuestions]);

   
    // Set a Single Question
    useEffect(() => {
        if (quizs.length > questionIndex) {
            setQuesion(quizs[questionIndex]);
        }
    }, [quizs, questionIndex])

    const handleTopic = (topic) => {
        console.log("TOPIC : ", topic)
        navigate('/start');
    }

  
    // Check Answer
    const checkAnswer = (selected) => {
        const options = question.correct_answers;
        const correctAnswerKey = Object.keys(options).find(key => options[key] === "true");
        const formattedCorrectAnswer = correctAnswerKey ? correctAnswerKey.replace('_correct', '') : null;
        const rightAnswer = question.answers[formattedCorrectAnswer];

        if (!selectedAnswer) {
            setCorrectAnswer(rightAnswer);
            setSelectedAnswer(selected);

            if (selected === rightAnswer) {
                setMarks(marks + 5);
            } 
        }
    }

    // Next Quesion
    const nextQuestion = () => {
        setCorrectAnswer('');
        setSelectedAnswer('');
        setQuestionIndex(questionIndex + 1);
    }    

    const handleStartQuiz = async () => {
        setCorrectAnswer('');
        setSelectedAnswer('');
        setQuestionIndex(0);
        setMarks(0);
        setQuesion({});
        navigate('/quiz');

        try {
            await fetchQuiz();
            console.log(quizs.error);
        } catch (error) {
            console.error('Error fetching quiz:', error);
        }
    };


    const handleNumberOfQuestions = (e) => {
        const value = e.target.value;
        setNumberOfQuestions(value);
    };

    const handleStartAgain = () => {
        setQuizs([])
        setQuesion({})
        setQuestionIndex(0)
        setCorrectAnswer('');
        setSelectedAnswer('');
        setMarks(0);
        setTopic('');
        navigate('/');
    };

    return (
        <DataContext.Provider value={{
             question, quizs, checkAnswer, correctAnswer,
            selectedAnswer, questionIndex, nextQuestion, marks,
            handleTopic, handleStartAgain, topic, handleStartQuiz, setNumberOfQuestions, numberOfQuestions, difficultyLevel, setDifficultyLevel, handleNumberOfQuestions
        }} >
            {props.children}
        </DataContext.Provider>
    );
}

export default DataState;

