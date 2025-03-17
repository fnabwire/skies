import React from 'react'
import NavBar from './NavBar'

function Home() {

  const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills' },
    { title: 'Portfolio', path: '#portfolio' },
    { title: 'Contact Me', path: '#contact' },
  ];
 
  return (
    <>
     <NavBar title =" FRANCISCA" links={navLinks} />
     <div className="flex items-center justify-center h-screen-5vh">
     </div>
    </>
  )
}

export default Home
