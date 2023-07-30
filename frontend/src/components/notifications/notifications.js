import React, { useState } from 'react';
import './notifications.css';

const Notifications = () => {
  const [showModal, setShowModal] = useState(false);
  // Assuming you have a state variable for notifications received from the backend
  // You can replace this with the actual notifications received from the backend
  // eslint-disable-next-line
  const [notifications, setNotifications] = useState([]);

  const handleBellClick = () => {
    setShowModal(true);
    // You may also implement logic to mark the notifications as read when the bell icon is clicked
    // For example, you can make a request to the backend to mark notifications as read.
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="notifications-container">
      <div className="bell-icon" onClick={handleBellClick}>
        <i className="fa fa-bell"></i>
        {notifications.length > 0 && <div className="badge">{notifications.length}</div>}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Notifications</h2>
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>{notification}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
