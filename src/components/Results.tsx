import React from 'react'
import Button from './Button'

const Results = ({score,quizState,setQuizState}) => {
  return (
    <div>
      <h2>Results</h2>
      <h1>Score: {score}</h1>
      <div style={{display:'grid', gridTemplateColumns:'auto auto auto', margin:'10px', gap:'10px'}}>
        <Button title={'Play again'} handleClick={()=>setQuizState(quizState.Started)} />
        <Button title={'Share'} />
        <Button title={'Review Answer'} />
        <Button title={'Home'} handleClick={()=>setQuizState(quizState.NotStarted)} />
        <Button title={'Generate PDF'} />
        <Button title={'Leaderboard'} />
      </div>
    </div>
  )
}

export default Results