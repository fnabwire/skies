import React from "react";
import about from "../images/about.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function HomePage() {

  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-8"> {/* for more top padding */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hi, I am <span className="text-[#98760B]">Francisca</span>.<br /> Software Developer
          </h1>
          <h3 className="text-gray-700 text-lg leading-relaxed">
          
          <br />Passionate about creating efficient, scalable, and user-friendly software solutions that meet client needs and enhance user experiences.
          <br />Committed to continuous learning and professional growth in the ever-evolving field of software development.
          <br /><br/>Let's connect and explore how I can contribute to your next project! 
          
          </h3>          
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <br/>
            <a href="https://twitter.com" target="_blank" rel="https://x.com/Francie_Francy?t=fRXbnPKeS4gjhwprxD7eZQ&s=09">
              <FontAwesomeIcon icon={faXTwitter} className="text-[#98760B] text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="www.linkedin.com/in/francisca-nabwire-5a78352a6">
              <FontAwesomeIcon icon={faLinkedin} className="text-[#98760B] text-2xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="https://github.com/fnabwire/">
              <FontAwesomeIcon icon={faGithub} className="text-[#98760B] text-2xl" />
            </a>

            </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center mt-6 md:mt-0">
        <img
  src={about}
  alt="image"
  className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-lg object-cover mt-6" //for more space above image
/>
         <a button className="mt-4 bg-[#98760B] text-white py-2 px-4 rounded-md hover:bg-[#032825] transition duration-300 ease-in-out"        
              href="https://drive.google.com/file/d/1KOPOcB1rC3KRoHaXClr-_57SMDSLDFc6/view?usp=sharing"
              download="NABWIRE_CV.pdf" target="_blank" rel="noopener noreferrer"> Download CV </a>

        </div>
      </div> 
    </div>
  );
}

export default HomePage;