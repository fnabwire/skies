import { useState } from 'react'
import './App.css'
import HomePage from './pages/homePage'
import Home from './components/Home'
import SimpleForm from './components/SimpleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <HomePage/>
    <SimpleForm/>
    
    </>
  )
}

export default App
