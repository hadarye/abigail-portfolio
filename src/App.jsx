import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar.component'
import Cursor from './Components/Cursor/Cursor.component'
import Home from './Routes/Home/Home.component'
import node from '../.netlify/functions-serve/fetchMedia/fetchMedia'
import './App.scss'

function App() {
  const [arr, setArr] = useState([]);

  async function getData() {
    let accumuletor = []
    let response = await fetch('/.netlify/functions-serve/fetchMedia/fetchMedia.js');
    let htmlText = await response.text();
    let parser = new DOMParser();
    let htmlDoc = parser.parseFromString(htmlText,"text/xml");
    let anchorList = htmlDoc.getElementByTagName('a');
    console.log(anchorList);
    
    for (let meal of result) {
      accumuletor.push(meal);
    }
    setArr(accumuletor);
  }
  

  useEffect(() =>{
    getData();
  }, [])

  return (
    <>
      <div className='bg'></div>
      {/* cursor - must be the first component! */}
      <Cursor></Cursor>
      
      <Routes>
        <Route path='/' element={<NavBar></NavBar>}>
          
        </Route><Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <img src="https://drive.google.com/thumbnail?id=1FLRGo0qlteSKFt0eg2AI9EFG-UPaRw96" alt="image" />
      <iframe src="https://drive.google.com/embeddedfolderview?id=1kSPX_JQYE_NEK4dTfXvezNR4Ygq2YPLy#list" style={{width:"100%", height:"600px", border:"0",}}></iframe>
    </>
  )
}

export default App
