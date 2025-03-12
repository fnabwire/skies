import React from 'react'
import NavBar from './NavBar'

function Home() {

  const navLinks = [
    { title: 'Home', path: '/home' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Blog', path: '/blog' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Login', path: '/login' },
    { title: 'Sign Up', path: '/signup' },
    { title: 'Logout', path: '/logout' },
  ]
 
  return (
    <>

     <NavBar 
     title="Francisca"
     links={navLinks} 
     />

     <div className="flex items-center justify-center h-screen">
       <h1 className="text-4xl font-bold">Home Page</h1> 
    </div>
    </>
  )
}

export default Home
