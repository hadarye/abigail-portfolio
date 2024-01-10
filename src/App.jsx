import { useEffect, useState } from 'react'
import useFetch from './Hooks/useFetch.effect'
import './App.scss'

function App() {

  // useEffect(() => {
  //   let ignore = false;
  //   fetchStuff().then(res => {
  //     if (!ignore) setResult(res)
  //   })
  //   return () => { ignore = true }
  // }, []);

  useEffect(() => {
    // let {arr, isLoading} = useFetch('/.netlify/functions/fetchMedia');
  }, [])

  return (
    <>
    </>
  )
}

export default App
