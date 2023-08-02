import React, { useState } from 'react';
import './Packages.css';
import mixedGroceriesImage from '../Packages/mixed_groceries.jpeg';
import mixedGroceriesVeganImage from '../Packages/mixed_groceries_vegan.webp';
import mixed_groceries_family from '../Packages/mixed_groceries_family.jpeg'
import vegan_family from '../Packages/vegan_family.jpeg'
import large_vegan_family from '../Packages/large_vegan_family.webp'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Packages = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      title: "Singular Support",
      description: `Our Mixed Groceries for One package is thoughtfully curated to provide
      essential sustenance for individuals. Packed with a diverse selection of
      nutritious food and household products, this package is designed to alleviate
      hunger while meeting daily needs. Each package includes a balanced assortment of
      fresh produce, pantry staples, and cleaning essentials to help those in
      need thrive.
      (Please note that the accompanying image is a delightful representation of the myriad items that may grace your thoughtfully curated package.)`,
      imageUrl: mixedGroceriesImage,
      
    },
    {
      title: "Plant-Powered Solace",
      description: `Our Vegan Mixed Groceries for One package is perfect for individuals seeking
      plant-based nourishment. Showcasing the goodness of a vegan lifestyle, this package is abundant
      with cruelty-free and sustainable food choices, as well as eco-friendly household products.
      Empower yourself to make compassionate choices while enjoying the wide array of delicious vegan options in this package.
      (Please note that the accompanying image is a delightful representation of the myriad items that may grace your thoughtfully curated package.)`,
      imageUrl: mixedGroceriesVeganImage,
    
    },
    {
      title: "Family Essentials",
      description: `Our Mixed Groceries for a Small Family package is tailored to support and nurture
       your loved ones. This comprehensive package includes a harmonious blend of nutritious food items and 
       household essentials to cater to the needs of a small family. Savor the joy of mealtimes with your family
        while we take care of your essential provisions.
        (Please note that the accompanying image is a delightful representation of the myriad items that may grace your thoughtfully curated package.)`, 
      imageUrl: mixed_groceries_family,
      
    },
    {
      title: "Plant-Based Harmony",
      description: `Embrace compassionate living with our Vegan Mixed Groceries for a Small Family package.
       Designed for eco-conscious families, this package is brimming with nourishing plant-based options and
        sustainable household products. Share the goodness of a vegan lifestyle with your loved ones while
         promoting a greener, more compassionate world.
         (Please note that the accompanying image is a delightful representation of the myriad items that may grace your thoughtfully curated package.)`,
      imageUrl: vegan_family,
      
    },
    {
      title: "Abundance for All",
      description: `Our Mixed Groceries for a Large Family package ensures that no family member goes hungry.
       Bursting with a generous supply of diverse and nutritious food items, along with essential household products,
        this package has been thoughtfully compiled to provide sustenance and support for larger households.
         Experience the abundance of goodness in every bite and embrace the comfort of a well-stocked home.
         (Please note that the accompanying image is a delightful representation of the myriad items that may grace your thoughtfully curated package.)`,
      imageUrl: mixed_groceries_family,
      
    },
    {
      title: "Plant-Powered Generosity",
      description: `Our Vegan Mixed Groceries for a Large Family package showcases the generosity of a vegan lifestyle.
       Specially curated for larger households, this package presents a wide array of plant-based goodness and eco-friendly household products.
        Embrace a compassionate way of living while nurturing the well-being of your entire family.
        (Please note that the accompanying image is a delightful representation of the myriad items that may grace your thoughtfully curated package.)`,
      imageUrl: large_vegan_family,
      
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
  <motion.div className="packages-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h2>Our Packages</h2>
    <motion.div className="packages-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
      {packages.map((packageItem, index) => (
        <motion.div className="package-item" key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <div className="package-image">
            <img src={packageItem.imageUrl} alt={packageItem.title} />
          </div>
          <div className="package-info">
            <h3>{packageItem.title}</h3>
            <p>{packageItem.description}</p>
            <p className="package-quantity">{packageItem.quantity}</p>
            <motion.button className='packageButton'
              whileHover={{ backgroundColor: '#148f77' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelectPackage(packageItem)}
            >
              Select Package
            </motion.button >
          </div>
        </motion.div>
      ))}
    </motion.div>
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
              <p className="package-quantity">{selectedPackage.quantity}</p>
            </div>
          </div>
          <motion.button className='packageButton' onClick={handleCheckout}>Checkout</motion.button>
        </div>
      ) : (
        <p>No package selected.</p>
      )}
    </div>
  </motion.div>
)};

export default Packages;