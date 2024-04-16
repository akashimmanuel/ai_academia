// components/NavigationBar.js
import React from 'react';
import Image from 'next/image';

const NavigationBar = () => {
  return (
    <nav className="bg-[#05162c] text-white flex items-center justify-between p-4" style={{ height: '80px' }}>
      <div className="container mx-auto flex justify-between items-center h-full px-2">
        <Image
          src="/logo.webp" // Adjust the path if your file is in a different folder
          alt="AI Academia Projects Logo"
          width={60} // Adjust width as needed
          height={20} // Adjust height as needed
          className="my-auto"
          priority // Preload the logo image
        />
        <div className="flex items-center">
          {/* Use the provided color palette for hover and text colors */}
          <a href="#features" className="px-4 text-[#ececec] hover:text-[#89bee1] transition-colors">Features</a>
          <a href="#about" className="px-4 text-[#ececec] hover:text-[#89bee1] transition-colors">About</a>
          <a href="#contact" className="px-4 text-[#ececec] hover:text-[#89bee1] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
