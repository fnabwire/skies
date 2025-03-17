import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faReact, faJs, faGit, faGithub, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
// import {SiTypeScript, SiReactNative } from "react-icons/si";

const Skills = () => {
  return (
    <section id="SkillsSection" className="bg-[#032825] text-white py-10 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-5 text-[#98760B]">SKILLS</h1>
      <div className="flex flex-wrap justify-center gap-30">
        <div className="flex flex-col items-center max-w-xs">
          <h3 className="text-lg mb-2">Languages</h3>
          <div className="flex gap-10">
            <FontAwesomeIcon icon={faHtml5} className="text-4xl text-[#98760B]" />
            <FontAwesomeIcon icon={faCss3Alt} className="text-4xl text-[#98760B]" />
            <FontAwesomeIcon icon={faJs} className="text-4xl text-[#98760B]" />
            {/* <SiTypeScript   className="text-4xl text-[#98760B]"/>  */}
          </div>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <h3 className="text-lg mb-2">Frameworks</h3>
          <div className="flex gap-10">
            <FontAwesomeIcon icon={faReact} className="text-4xl text-[#98760B]" />
            <FontAwesomeIcon icon={faCode} className="text-4xl text-[#98760B]" />
            <FontAwesomeIcon icon={faWordpress} className="text-4xl text-[#98760B]" />
            {/* <SiReactNative   className="text-4xl text-[#98760B]"/>  */}
          </div>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <h3 className="text-lg mb-2">Tools</h3>
          <div className="flex gap-10">
            <FontAwesomeIcon icon={faGit} className="text-4xl text-[#98760B]" />
            <FontAwesomeIcon icon={faGithub} className="text-4xl text-[#98760B]" />
            <FontAwesomeIcon icon={faPaintBrush} className="text-4xl text-[#98760B]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;