import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faReact, faJs, faGit, faGithub, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
// import {SiTypeScript, SiReactNative } from "react-icons/si";

const Skills = () => {
  return (
  <section id="SkillsSection" className="bg-[#F0F8FF] text-[#012169] py-10 flex flex-col items-center text-center border-t-4 border-[#0E97B9]">
  <h1 className="text-3xl font-bold mb-5 text-[#012169]">SKILLS</h1>
      <div className="flex flex-wrap justify-center gap-30">
        <div className="flex flex-col items-center max-w-xs">
          <h3 className="text-lg mb-2">Languages</h3>
          <div className="flex gap-10">
            <FontAwesomeIcon icon={faHtml5} className="text-4xl text-[#0E97B9]" />
            <FontAwesomeIcon icon={faCss3Alt} className="text-4xl text-[#0E97B9]" />
            <FontAwesomeIcon icon={faJs} className="text-4xl text-[#0E97B9]" />
            {/* <SiTypeScript   className="text-4xl text-[#98760B]"/>  */}
          </div>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <h3 className="text-lg mb-2">Frameworks</h3>
          <div className="flex gap-10">
            <FontAwesomeIcon icon={faReact} className="text-4xl text-[#0E97B9]" />
            <FontAwesomeIcon icon={faCode} className="text-4xl text-[#0E97B9]" />
            <FontAwesomeIcon icon={faWordpress} className="text-4xl text-[#0E97B9]" />
            {/* <SiReactNative   className="text-4xl text-[#98760B]"/>  */}
          </div>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <h3 className="text-lg mb-2">Tools</h3>
          <div className="flex gap-10">
            <FontAwesomeIcon icon={faGit} className="text-4xl text-[#0E97B9]" />
            <FontAwesomeIcon icon={faGithub} className="text-4xl text-[#0E97B9]" />
            <FontAwesomeIcon icon={faPaintBrush} className="text-4xl text-[#0E97B9]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;