import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
// import Home from './components/Home'
import SimpleForm from './components/SimpleForm'
import NavBar from './components/NavBar'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    {/* <Home/> */}
    <HomePage/>
    <Skills/>
    <SimpleForm/>
    <ContactMe/>
    <Footer/>
    
    </>
  )
}

export default App
