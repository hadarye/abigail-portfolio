import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CursorManager from './Components/Cursor/context/manager.tsx';
import { HashRouter } from "react-router-dom";
// import CostumCurs
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CursorManager>
        <App />
      </CursorManager>
      
    </HashRouter>
  </React.StrictMode>,
)
