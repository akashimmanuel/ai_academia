import React from 'react';
import styles from './welcomeBanner.module.css'; // Import only if you are using CSS Modules

const WelcomeBanner = () => {
  return (
    <div className={`${styles.fadeInUp} flex flex-col items-center justify-center h-screen`} style={{ backgroundColor: '#05162c' }}>
      {/* <h1 className="text-5xl font-bold text-[#e7e7e5] mb-4">
        Welcome to AI Academia Projects
      </h1> */}
      {/* <p className="text-xl text-[#cfd6db] mb-6">Innovate. Implement. Impact.</p> */}
      <div className="flex flex-col items-center justify-center h-screen bg-[#05162c] text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Unlock Your Academic Potential
        </h1>
        <p className="text-md md:text-lg text-[#cfd6db] mb-8">
          High-quality, tailored projects for all academic levels.
        </p>
        <button className={`bg-[#89bee1] text-[#05162c] font-bold py-2 px-8 rounded ${styles.buttonHover}`}>
          Browse Projects
        </button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
