import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CursorManager from './Components/Cursor/context/manager.tsx';
import { HashRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
// import CostumCurs
import './index.css'
import NavBar from './Components/NavBar/NavBar.component.jsx';
import Home from './Routes/Home/Home.component.jsx';
import Gallery from './Routes/Gallery/Gallery.component.jsx';
import Videos from './Routes/Videos/Videos.component.jsx';
import AboutMe from './Routes/AboutMe/AboutMe.component.jsx';
import Layout from './Routes/Layout/Layout.component.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='gallery' element={<Gallery></Gallery>}></Route>
      <Route path='videos' element={<Videos></Videos>}></Route>
      <Route path='about-me' element={<AboutMe></AboutMe>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <CursorManager>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </CursorManager>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
