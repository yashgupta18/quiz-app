import React from 'react'
import QuizBoard from './QuizBoard'

type Introtype = {
  handleTakeClick: () => void
  quizState: any
}

const Intro = ({ handleTakeClick,quizState }: Introtype) => {
  return (
    <section>
      <image src="https://www.excel-easy.com/images/excel-logo.png" alt='image' />
      <QuizBoard handleTakeClick={handleTakeClick} />
      </section>
  )
}

export default Intro