import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(11)

  // let counter=15

  const addValue = () => {
    counter = counter+1
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }
  
  return (
    <>
      <h1>Welcome on this site</h1>
      <h1>Counter value:{counter}</h1>

      <button
       onClick={addValue} 
      >Add {counter}</button> <br />

      <button
      onClick={removeValue} 
      >Remove {counter}</button>
    </>
  )
}

export default App
