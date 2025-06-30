import React from 'react';
import HomePage from '../pages/HomePage';
import ContactMe from './ContactMe';
import Skills from './Skills';
import Portfolio from './Portfolio';

function Home() {
  return (
    <>
      <div id="home">
        <HomePage />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </>
  );
}

export default Home;
