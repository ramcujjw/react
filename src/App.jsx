import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Components/Home'
import Add from './Components/Add'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
      
      <h1>Welcome to React learning</h1>
      
    <Home/>
      <Add/>
      
    </>
  )
}

export default App
