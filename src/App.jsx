import { useState } from 'react'
import './App.css'
import HomePage from './pages/homePage'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <HomePage/>
    
    </>
  )
}

export default App
