import React from 'react'
import './styles.css'
const PlayCard = ({title, level, logo,bg,onClick}) => {
  return (
    <div style={{background: bg ? bg:'violet'}} className='cardContainer' onClick={onClick}>
      <img src={logo} alt='logo' className='cardLogo' />
      <p className='cardLevel'>Level {level}</p>
      <h1 style={{color:'white'}}>{title}</h1>
    </div>
  )
}

export default PlayCard