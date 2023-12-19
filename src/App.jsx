import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar.component'
import Cursor from './Components/Cursor/Cursor.component'
import Home from './Routes/Home/Home.component'
import Videos from './Routes/Videos/Videos.component'
import AboutMe from './Routes/AboutMe/AboutMe.component';
// import fetchMedia from '../netlify/functions/fetchMedia/fetchMedia'
import './App.scss'
import Gallery from './Routes/Gallery/Gallery.component';

function App() {

  return (
    <>

      {/* <Routes>
        <Route path="/" element={<NavBar></NavBar>}>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="gallery" element={<Gallery></Gallery>}></Route>
          <Route path="videos" element={<Videos></Videos>}></Route>
          <Route path="about-me" element={<AboutMe></AboutMe>}></Route>
        </Route>
      </Routes> */}

    </>
  )
}

export default App
