import React from 'react';
import './packages.css';

const Packages = () => {
  const packages = [
    {
      title: 'Mixed groceries for 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'path-to-image-1.jpg', // Placeholder image for Package 1
    },
    {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'path-to-image-2.jpg', // Placeholder image for Package 2
    },
     {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'path-to-image-3.jpg', // Placeholder image for Package 2
    }, {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'path-to-image-4.jpg', // Placeholder image for Package 2
    }, {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'path-to-image-5.jpg', // Placeholder image for Package 2
    }, {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'path-to-image-6.jpg', // Placeholder image for Package 2
    },
    // Add other packages here
  ];

  return (
    <div className="packages-container">
      <h2>Our Packages</h2>
      <div className="packages-grid">
        {packages.map((packages, index) => (
          <div className="package-item" key={index}>
            <div className="package-image">
              {/* Placeholder image */}
              <img src={packages.imageUrl} alt={packages.title} />
            </div>
            <div className="package-info">
              <h3>{packages.title}</h3>
              <p>{packages.description}</p>
              <p className="package-price">{packages.price}</p>
              <button>Select Package</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;