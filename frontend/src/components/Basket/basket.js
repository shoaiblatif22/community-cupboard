import React from 'react';
import './Basket.css';

const Basket = ({ selectedPackage, handleCheckout }) => {
  return (
    <div className="basket-container">
      <h2>Your Basket</h2>
      {selectedPackage ? (
        <div className="selected-package">
          <div className="selected-package-image">
            <img src={selectedPackage.imageUrl} alt={selectedPackage.title} />
          </div>
          <div className="selected-package-info">
            <h3>{selectedPackage.title}</h3>
            <p>{selectedPackage.description}</p>
            <p className="package-quantity">{selectedPackage.quantity}</p>
          </div>
        </div>
      ) : (
        <p>Your basket is empty.</p>
      )}
      {selectedPackage && (
        <button className='basketButton' onClick={handleCheckout}>Checkout</button>
      )}
    </div>
  );
};

export default Basket;
