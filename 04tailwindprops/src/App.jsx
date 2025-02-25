import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count,setCount] = useState(0)

  let myObj={
    userName:"isha",
    age:'22'
  }
  let newArr = [1,2,4]

  return (
    <>
      <p className='bg-green-400 text-black p-4 rounded-xl mb-4'>This is the first one</p>

      <Card userName="campus"/>
      <Card userName="redux"/>
      
    </>
  )
}

export default App;