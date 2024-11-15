import React from 'react';
import '../styles/HotelInfoCard.css';

interface HotelInfoCardProps {
  name: string;
  distance: string;
  address: string;
  mapSrc: string;
  link: string;
}

const HotelInfoCard: React.FC<HotelInfoCardProps> = ({ name, distance, address, mapSrc, link }) => {
  return (
    <div className="hotel-info-card">
      <h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="hotel-link">
          {name}
        </a>
      </h3>
      <p><strong>Distância:</strong> {distance}</p>
      <p><strong>Endereço:</strong> {address}</p>
      <div className="hotel-map">
        <iframe
          src={mapSrc}
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default HotelInfoCard;
