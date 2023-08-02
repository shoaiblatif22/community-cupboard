import React, { useState, useEffect } from 'react';


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userId = window.localStorage.getItem('userId');

  useEffect(() => {
    // Fetch user's orders from the backend API
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/controllers/orders/${userId}`, {
          method: 'get', // Use GET request to fetch orders for the user
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders.');
        }

        const data = await response.json();
        setOrders(data); // Update the orders state with the fetched data
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>User: {order.user.name}</p>
              <ul>
                {order.products.map((product) => (
                  <li key={product._id}>
                    <p>Product: {product.product.name}</p>
                    <p>Quantity: {product.quantity}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;


