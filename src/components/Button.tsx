import React from 'react'
import './styles.css'
interface ButtonProps {
  title: string
  handleClick?: () => void
  style?: React.CSSProperties
}
const Button = ({title, handleClick, style}:ButtonProps) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className='btn'
        style={style}
      >
        {title}
      </button>
    </div>
  )
}

export default Button