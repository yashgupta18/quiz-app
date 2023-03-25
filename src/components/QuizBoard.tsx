import React from 'react'
import PlayCard from './PlayCard'
import ReactIcon from '../assets/icons/react.png'
import QuesIcon from '../assets/icons/q.png'
import PassIcon from '../assets/icons/pass.png'

import MathsIcon from '../assets/icons/maths.png'
import BlockchainIcon from '../assets/icons/blockchain.png'
import './styles.css'
import Button from './Button'

const InstructionsModal = ({logo, title, para}) => {
  return(
    <div className='instructions'>
      <img src={logo} alt='excel logo' className='icon' />
      <div className='instructionsChild'>
        <p>{title}</p>
        <p>{para}</p>
      </div>
    </div >
  )
}

const Instructions = ({ handleTakeClick, clicked, quiz }) => {
  return (
    <div className={`instructionsModal ${clicked && 'instructionsModalAnimation'}`} style={{background:quiz.bg}}>
      <div style={{ width: '100%', margin: '5%' }}>
        <h2>Quiz Rules</h2>
        <InstructionsModal logo={quiz.logo} title={quiz.title} para={`Level ${quiz.level}`} />
        <InstructionsModal logo={QuesIcon} title={'5 Questions'} para={'We believe that you will ace it'} />
        <InstructionsModal logo={PassIcon} title={'50% Passing criteria'} para={'All the best! See you on the other side'} />
      </div>
      <Button title="Take Quiz" handleClick={handleTakeClick} />
    </div>
  )
}

const QuizBoard = ({handleTakeClick}) => {
  const quiz = [
    {
      title: 'Excel Quiz',
      level: 1,
      logo: ReactIcon,
      bg: '#EC8758'
    },
    {
      title: 'Maths Quiz',
      level: 2,
      logo: MathsIcon,
      bg: '#D24D6B'
    },
    {
      title: 'Blockchain Quiz',
      level: 3,
      logo: BlockchainIcon,
      bg: '#C061F3'
    }
  ]

  const [clicked, setClicked] = React.useState(false)
  const [selectedQuiz, setSelectedQuiz] = React.useState({
    title: '',
    level: 0,
    logo: '',
    bg: ''
  })

  const handleCardClick = (index) => {
    setSelectedQuiz(quiz[index])
    setClicked(true)
  }

  return (
    <>
      <div style={{ overflow: 'scroll', display:'flex', flexDirection:'column', gap:'10px', alignItems:'center', margin:'10px 0'}}>
        <h2 style={{ color: '#F15C99', fontSize:'35px' }}>Let's Play</h2>
        {
          quiz.map((item, index) => {
            return (
              <PlayCard key={index} title={item.title} level={item.level} logo={item.logo} bg={item.bg} onClick={()=>handleCardClick(index)} />
            )
          })
        }
      </div>
      <Instructions handleTakeClick={handleTakeClick} clicked={clicked} quiz={ selectedQuiz} />
    </>
  )
}

export default QuizBoard