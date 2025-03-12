import React from "react";
import NavBar from "../components/NavBar";
import jane from "../components/images/jane.jpg";

function HomePage() {
  const [count, setCount] = React.useState(0);

  return (

    <div className="min-h-screen bg-gray-100">
      <p> You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      
      {/* <NavBar />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hi, I am <span className="text-blue-600">Francisca</span>,<br /> Front-End Developer
          </h1>
          <h3 className="text-gray-700 text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </h3>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={jane}
            alt="Jane"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
          />
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;