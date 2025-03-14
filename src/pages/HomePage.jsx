import React from "react";
import NavBar from "../components/NavBar";
import about from "../components/images/about.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function HomePage() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hi, I am <span className="text-[#98760B]">Francisca</span>,<br /> Front-End Developer
          </h1>
          <h3 className="text-gray-700 text-lg leading-relaxed">
          Front-end developer with a strong ICT Systems Support and Help Desk operations background.
          Proficient in creating responsive and visually appealing websites using modern web
          technologies. 
          Adept at providing technical assistance, troubleshooting, and ensuring seamless
          IT operations within organizations.
          
          </h3>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-[#98760B] text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-[#98760B] text-2xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-[#98760B] text-2xl" />
            </a>

            </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center mt-6 md:mt-0">
          <img
            src={about}
            alt="image"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
          />
         <a button className="mt-4 bg-[#98760B] text-white py-2 px-4 rounded-md hover:bg-blue-600"        
              href="https://drive.google.com/file/d/1KOPOcB1rC3KRoHaXClr-_57SMDSLDFc6/view?usp=sharing"
              download="NABWIRE_CV.pdf" target="_blank" rel="noopener noreferrer"> Download CV </a>

        </div>
      </div> 
    </div>
  );
}

export default HomePage;