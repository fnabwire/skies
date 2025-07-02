import React from 'react';
import HomePage from '../pages/HomePage';
import ContactMe from './ContactMe';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div id="home" tabIndex={0}>
        <HomePage />
      </div>
      <div id="skills" tabIndex={1}>
        <Skills />
      </div>
      <div id="portfolio" tabIndex={2}>
        <Portfolio />
      </div>
      <div id="contact" tabIndex={3}>
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default Home;
