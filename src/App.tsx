import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Ques from './components/Ques';
import Results from './components/Results';

enum QuizState {
  NotStarted,
  Instructions,
  Started,
  Finished,
}

function App() {
  const [quizState, setQuizState] = React.useState(QuizState.NotStarted);
   const [score, setScore] = React.useState(0)
  const handleTakeClick = () => {
    console.log('clicked');
    setQuizState(QuizState.Started);
  }

  return (
    <div className="App">
      {
        quizState === QuizState.NotStarted && (
          <Intro handleTakeClick={handleTakeClick} quizState={QuizState} />
        )
      }
      {
        quizState === QuizState.Started && (
          <Ques setQuizState={setQuizState} quizState={QuizState} setScore={ setScore} />
        )
      }
      {
        quizState === QuizState.Finished && (
          <Results score={score} quizState={QuizState} setQuizState={setQuizState} />
        )
      }
    </div>
  );
}

export default App;
