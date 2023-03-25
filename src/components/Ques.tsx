import React, { useState } from 'react'
import Timer from './Timer'
import styles from './styles.css'
import Button from './Button'

const queslist = [
  {
    ques: 'What is the capital of India?',
    options: ['New Delhi', 'Mumbai', 'Kolkata'],
    correctAns: 'New Delhi'
  },
  {
    ques: 'Who built the Taj Mahal?',
    options: ['Shah Jahan', 'Aurangzeb', 'Jahangir'],
    correctAns: 'Aurangzeb'
  },
  {
    ques: 'What is the capital of USA?',
    options: [ 'New York', 'Los Angeles','Washinton DC'],
    correctAns: 'Washinton DC'
  },
  {
    ques: 'Where is Niagara Falls?',
    options: ['Canada', 'Ireland', 'Mexico'],
    correctAns: 'Canada'
  },
  {
    ques: 'Which club has won the most Champions League titles?',
    options: [ 'Barcelona', 'Real Madrid','Bayern Munich'],
    correctAns: 'Real Madrid'
  }
]

const Ques = ({setQuizState,quizState, setScore, setTimeTaken}) => {
  const [ques, setQues] = useState(0)
  const [selected, setSelected] = useState('')
  const [time, setTime] = useState(1000 * 60);
  const timeTaken = 1000 * 60 - time
  const handleNextClick = () => {
    if (selected === queslist[ques].correctAns) {
      setScore(prev=>prev + 1)
    }
    if (ques === queslist.length - 1) {
      setQuizState(quizState.Finished)
      setTimeTaken(timeTaken)
      return
    }
    setQues(ques + 1)
    console.log(timeTaken);
  }

  const onExpire = () => {
    console.log("Time Finished");
    setQuizState(quizState.Finished)
  };

  const handleClickChange = (e) => {
    console.log(e.target.value)
    setSelected(e.target.value)
  }

  return (
    <section style={{background:'#E8D789', height:'100vh'}}>
      <h2>{`${ques+1}/${queslist.length}`}</h2>
      <Timer onExpire={onExpire} time={time} setTime={setTime}  />
      <h1>{queslist[ques].ques}</h1>
      <ul style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        {queslist[ques].options.map((option, index) => (
          <div className='quesListContainer' >
            <li key={index} style={{listStyle:'none', color:'#468ED8'}}>
              <label className={styles.container}>
                <span className={styles.checkmark}>{option}</span>
                <input type="radio" value={option}  name="radio" onChange={handleClickChange} />
              </label>
            </li>
          </div>
        ))}
      </ul>
      <Button title={ques === queslist.length - 1 ? "Submit" : "Next"} handleClick={handleNextClick}  />
    </section>
  )
}

export default Ques