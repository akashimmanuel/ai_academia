// components/WelcomeBanner.js
import React from 'react';

const WelcomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: '#05162c' }}>
      <h1 className="text-5xl font-bold text-[#e7e7e5] mb-4">
        Welcome to AI Academia Projects
      </h1>
      <p className="text-xl text-[#cfd6db] mb-6">Innovate. Implement. Impact.</p>
      <button className="bg-[#89bee1] text-[#05162c] font-bold py-2 px-4 rounded hover:bg-[#5891b2] transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default WelcomeBanner;
