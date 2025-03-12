import React from 'react';

function NavBar({ title, pageheader, links }) {
  return (

    <nav className="w-full flex items-center justify-between bg-violet-500 p-4">
      <div>
        <h1 className="text-white text-2xl font-bold">{title}</h1>
      </div>

      <h1 className="text-white text-2xl font-bold">{pageheader}</h1>
      {links && links.slice(0,5).map((link, index) => (

      <>
          <a key={index} href={link.path} className="text-white">{link.title}</a>
        <div index={index} className="flex gap-6">
        <button className="text-white bg-transparent px-4 py-2 rounded-md hover:bg-gray-700">{link.text}</button>
      </div>
      </>

      ))}
     
    </nav>
  );
}

export default NavBar;