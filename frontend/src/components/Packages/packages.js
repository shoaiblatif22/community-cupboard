import React from 'react';
import './Packages.css';
import mixedGroceriesImage from '../packages/mixed_groceries.jpeg';
import mixedGroceriesVeganImage from '../packages/mixed_groceries_vegan.webp';

const Packages = () => {
  const packages = [
    {
       title: 'Mixed groceries for 1',
      description: 'Assortment of household goods and food for 1.',
      imageUrl: mixedGroceriesImage,
    },
    {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: mixedGroceriesVeganImage,
    },
     {
      title: 'Mixed groceries for a small VEGAN family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'frontend/src/components/packages/vegan_family.jpeg', // Placeholder image for Package 2
    }, {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'frontend/src/components/packages/mixed_groceries_family.jpeg', // Placeholder image for Package 2
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