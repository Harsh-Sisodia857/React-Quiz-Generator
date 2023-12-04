import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
import { DataState } from './context/dataState';
import Topics from './components/Topics';

function App() {
  return (
    <Router>
      <DataState>
        <div className="app">
          <Routes>
            <Route path="/" element={<Topics />} />
            <Route path="/start" element={<Start />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/result" element={<Result />} />
          </Routes>
        </div>
      </DataState>
    </Router>
  );
}

export default App;
