import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
import { DataState } from './context/dataState';

function App() {
  return (

    <div className="app">
      <DataState>
        
          {/* Welcome Page */}
          <Start />

          {/* Quiz Page */}
          <Quiz />

          {/* Result Page */}
          <Result />
      </DataState>

    </div>
      
  );
}

export default App;
