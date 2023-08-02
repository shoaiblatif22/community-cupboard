import React, { useState } from 'react';
import './Packages.css';
import mixedGroceriesImage from '../Packages/mixed_groceries.jpeg';
import mixedGroceriesVeganImage from '../Packages/mixed_groceries_vegan.webp';
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      title: 'Mixed groceries for 1',
      description: 'Assortment of household goods and food for 1.',
      imageUrl: mixedGroceriesImage,
      price: '$25', // Add the price for Package 1
    },
    {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: mixedGroceriesVeganImage,
      price: '$40', // Add the price for Package 2
    },
    {
      title: 'Mixed groceries for a small VEGAN family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'frontend/src/components/packages/vegan_family.jpeg',
      price: '$50', // Add the price for Package 3
    },
    {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'frontend/src/components/packages/mixed_groceries_family.jpeg',
      price: '$30', // Add the price for Package 4
    },
    {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'path-to-image-5.jpg',
      price: '$35', // Add the price for Package 5
    },
    {
      title: 'Mixed groceries for a small family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'path-to-image-6.jpg',
      price: '$45', // Add the price for Package 6
    },
    // Add other packages here
  ];

  const handleSelectPackage = (selected) => {
    setSelectedPackage(selected);
  };

  const handleCheckout = () => {
    if (selectedPackage) {
      navigate('/checkout', { state: { selectedPackage } });
    }
  };

  return (
    <div className="packages-container">
      <h2>Our Packages</h2>
      <div className="packages-grid">
        {packages.map((packageItem, index) => (
          <div className="package-item" key={index}>
            <div className="package-image">
              <img src={packageItem.imageUrl} alt={packageItem.title} />
            </div>
            <div className="package-info">
              <h3>{packageItem.title}</h3>
              <p>{packageItem.description}</p>
              <p className="package-price">{packageItem.price}</p>
              <button onClick={() => handleSelectPackage(packageItem)}>Select Package</button>
            </div>
          </div>
        ))}
      </div>
      <div className="basket-actions">
        {selectedPackage ? (
          <div>
            <h3>Selected Package</h3>
            <div className="selected-package">
              <div className="selected-package-image">
                <img src={selectedPackage.imageUrl} alt={selectedPackage.title} />
              </div>
              <div className="selected-package-info">
                <h4>{selectedPackage.title}</h4>
                <p>{selectedPackage.description}</p>
                <p className="package-price">{selectedPackage.price}</p>
              </div>
            </div>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        ) : (
          <p>No package selected.</p>
        )}
      </div>
    </div>
  );
};

export default Packages;
