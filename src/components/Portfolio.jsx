import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import portfolio1 from "../images/portfolio1.jpg";
import portfolio2 from "../images/portfolio2.png";
import portfolio3 from "../images/portfolio3.jpg";
import portfolio4 from "../images/portfolio4.jpg";
import portfolio5 from "../images/portfolio5.jpg";
import portfolio6 from "../images/portfolio6.jpeg";

const Portfolio = () => {
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    const iso = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    if (filterKey !== "*") {
      iso.arrange({ filter: filterKey });
    } else {
      iso.arrange({ filter: "*" });
    }

    return () => iso.destroy();
  }, [filterKey]);

  const portfolioItems = [
    {
      title: "Kijani Kibichi Initiative",
      category: "filter-1",
      image: portfolio1,
      link: "https://kijanikibichi.vercel.app/",
    },
    {
      title: "Portfolio",
      category: "filter-1",
      image: portfolio2,
      link: "https://johnjuma.vercel.app/",
    },
    {
      title: "Weather App",
      category: "filter-2",
      image: portfolio3,
      link: "https://expo.dev/accounts/nabwire/projects/weatherapp/builds/dae4e039-7f5d-4cee-af1e-ff4a5541a00f",
    },
    {
      title: "Sawazisha-Gender Equality",
      category: "filter-1",
      image: portfolio4,
      link: "https://sawazisha.netlify.app/",
    },
    {
      title: "Cleaning Services Website",
      category: "filter-1",
      image: portfolio5,
      link: "https://franciscacleaningservices.netlify.app/",
    },
    {
      title: "Portfolio Website",
      category: "filter-1",
      image: portfolio6,
      link: "https://franciscaportfolio.netlify.app/",
    },
  ];

  const filters = [
    { label: "All", filter: "*" },
    { label: "Web Development", filter: ".filter-1" },
    { label: "Mobile Apps", filter: ".filter-2" },
  ];

  return (
  <div className="bg-[#F0F8FF] py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#012169]">PORTFOLIO</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mt-6 space-x-3">
          {filters.map((f) => (
            <button
              key={f.filter}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                filterKey === f.filter
                  ? "bg-[#012169] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-[#0E97B9] hover:text-white"
              }`}
              onClick={() => setFilterKey(f.filter)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 portfolio-container">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`portfolio-item ${item.category}`}
              style={{ margin: "8px" }} // Inline style for margin
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <a
                    className="inline-block mt-2 px-3 py-1 text-white bg-[#0E97B9] rounded-md transition hover:bg-[#012169]"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;