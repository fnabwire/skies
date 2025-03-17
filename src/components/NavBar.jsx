import React from 'react';

function NavBar({ title, pageheader, links }) {
  return (
    <nav className="w-full flex items-center justify-between bg-[#032825] p-4">
      <div>
        <h1 className="text-white text-2xl font-bold">{title}</h1>
      </div>

      {pageheader && <h1 className="text-white text-2xl font-bold">{pageheader}</h1>}

      {links && (
        <div className="flex items-center gap-6"> {/* Container for links */}
          {links.map((link, index) => (
            <React.Fragment key={index}> {/* Use React.Fragment to avoid extra DOM elements */}
              <a href={link.path} className="text-white hover:text-[#98760B] transition duration-300">
                {link.title}
              </a>
            </React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;