import React from 'react';
import styles from './ProjectCategories.module.css'; // CSS Module for custom styles

const ProjectCategories = () => {
  const categories = [
    { name: 'School Projects', description: "Explore a variety of school-level projects ranging from science fairs to history exhibitions.", link: '#school' },
    { name: 'Undergraduate Projects', description: "Browse through projects from undergraduate studies including capstones and engineering designs.", link: '#undergrad' },
    { name: 'Masters Projects', description: "Discover master's level research and creative projects in a wide array of disciplines.", link: '#masters' },
    { name: 'PhD Projects', description: "Dive into doctoral research projects that push the boundaries of knowledge and innovation.", link: '#phd' },
  ];

  return (
    <div className={`max-w-6xl mx-auto px-10 py-10 bg-darkBlue ${styles.container}`}> 
      <h2 className="text-3xl font-bold text-center mb-10 text-softWhite">Project Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={category.name} className={`${styles.categoryCard} ${styles.animate}`} style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
            <a href={category.link} className="block p-6 rounded-lg shadow-lg bg-[#89bee1] hover:bg-lightBlue transition-all">
              <h3 className="text-xl font-semibold mb-2 text-zinc-700">{category.name}</h3>
              <p className="text-zinc-700">{category.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCategories;
