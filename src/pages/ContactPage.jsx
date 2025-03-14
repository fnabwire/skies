import React from 'react'
import NavBar from '../components/NavBar'
import SimpleForm from '../components/SimpleForm'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div>
      <NavBar />
      <ContactMe/>
      <SimpleForm/>
      <Footer/>
    </div>
  )
}

export default ContactPage
