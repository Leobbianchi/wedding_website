import React from 'react';
import villaImage from '../assets/images/villa-subaglio-home.jpg';
import '../styles/Homepage.css';
    
const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <img src={villaImage} alt="Villa Subaglio" className="villa-image" />
      <div className="save-the-date">
        <h1>10/09/2025</h1>
        <p>Save the Date</p>
      </div>
    </div>
  );
};

export default Homepage;
