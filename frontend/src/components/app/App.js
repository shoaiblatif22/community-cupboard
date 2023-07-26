import React from 'react';
import './App.css'; // Import the corresponding CSS file

const App = () => {
  return (
    <div className="app-container">
      {/* Header section */}
      <header>
        <div className="header-left">
          {/* Change the anchor element to a button */}
          <button className="home-button">Home</button>
        </div>
        <div className="header-right">
          <button>About</button>
          <button>Login</button>
          <button>Get Involved</button>
          <button>Contact Us</button>
        </div>
      </header>

      {/* Main content section */}
      <main>
        <div className="logo-container">
          {/* Add your logo image here */}
          <img src="path/to/your/logo.png" alt="Logo" />
        </div>
        {/* Add your other content here */}
      </main>
    </div>
  );
};

export default App;
