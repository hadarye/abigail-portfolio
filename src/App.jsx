import { useEffect, useState } from 'react'
import './App.scss'

function App() {

  useEffect(() => {
    let ignore = false;
    fetchStuff().then(res => {
      if (!ignore) setResult(res)
    })
    return () => { ignore = true }
  }, []);

  return (
    <>
    </>
  )
}

export default App
