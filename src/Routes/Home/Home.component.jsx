import { useState } from 'react'
import './Home.styles.scss'
import home from '../../assets/images/collage fo wesbite.png'

const Home = () => {

  return (
    <div className='home'>
        <h1>Hi, I'm Abby.</h1>
        <img className='main-collage' src={home}></img>
    </div>
  )
}

export default Home
